import { useEffect, useRef, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  // Keep a stable ref to the ids array so the effect only re-runs when the
  // contents actually change, not on every render.
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    // Track the latest intersectionRatio for every observed element so we can
    // always pick the most-visible one, even after a single entry fires.
    const ratioMap = new Map<string, number>();

    const pick = () => {
      let bestId = '';
      let bestRatio = -1;
      ratioMap.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId) setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratioMap.set(e.target.id, e.intersectionRatio);
        });
        pick();
      },
      // Generous rootMargin so tall sections register as intersecting even when
      // they fill most of the viewport. Bottom shrinks by 20% so the section
      // occupying the upper viewport wins. Three thresholds are sufficient —
      // more triggers unnecessary callbacks on scroll.
      { rootMargin: '-10% 0px -20% 0px', threshold: [0, 0.25, 0.5] }
    );

    const currentIds = idsRef.current;
    currentIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        ratioMap.set(id, 0);
        observer.observe(el);
      }
    });

    // Seed the map with the current scroll position on mount so the initial
    // active state is correct on direct-link / page-refresh navigation.
    const seedInitial = () => {
      let bestId = currentIds[0];
      let bestTop = Infinity;
      currentIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const { top } = el.getBoundingClientRect();
        const aboveFold = top <= window.innerHeight * 0.5;
        if (aboveFold && top > -el.offsetHeight && Math.abs(top) < bestTop) {
          bestTop = Math.abs(top);
          bestId = id;
        }
      });
      setActive(bestId);
    };
    seedInitial();

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
