import fetch from 'cross-fetch';

export async function blobFromURL(url: string): Promise<Blob> {
  const data = await fetch(url);

  return data.blob();
}
