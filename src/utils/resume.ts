export async function downloadResume(url: string, filename = 'Prabhu_Karni_SRE_DevOps_Resume.pdf') {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch resume');
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export async function viewResume(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch resume');
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(
      new Blob([blob], { type: 'application/pdf' })
    );
    window.open(blobUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
