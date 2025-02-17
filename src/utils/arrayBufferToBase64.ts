export default function arrayBufferToBase64(arrayBuffer: ArrayBufferLike) {
  if (!arrayBuffer) return null;

  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}
