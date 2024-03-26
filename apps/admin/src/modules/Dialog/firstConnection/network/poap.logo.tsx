import React from 'react';
import type { dimensions } from './dimensions';

const PoapLogo = ({ height = '1715', width = '2500' }: dimensions) => {
  const svgString = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2C29.9411 2 38 10.0589 38 20C38 29.9411 29.9411 38 20 38Z" fill="#F5F5F5"/>
<path d="M20 5C11.1634 5 4 12.1634 4 21C4 29.8366 11.1634 37 20 37C28.8366 37 36 29.8366 36 21C36 12.1634 28.8366 5 20 5ZM20 35C12.268 35 6 28.732 6 21C6 13.268 12.268 7 20 7C27.732 7 34 13.268 34 21C34 28.732 27.732 35 20 35Z" fill="#F5F5F5"/>
<path d="M20 10C13.3726 10 8 15.3726 8 22C8 28.6274 13.3726 34 20 34C26.6274 34 32 28.6274 32 22C32 15.3726 26.6274 10 20 10ZM20 32C14.4772 32 10 27.5228 10 22C10 16.4772 14.4772 12 20 12C25.5228 12 30 16.4772 30 22C30 27.5228 25.5228 32 20 32Z" fill="#F5F5F5"/>
</svg>`;
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  return <img src={svgUrl} alt="Ethereum Logo" height={height} width={width} />;
};
// export default PoapLogo;
export default PoapLogo;
