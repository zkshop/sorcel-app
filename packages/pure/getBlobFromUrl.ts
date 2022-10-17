export async function blobFromURL(url: string) {
  const data = await fetch(url);
  return await data.blob();
}
