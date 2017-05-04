// Preload img in browser cache
export const preloadImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => resolve('done');
    // If image does not load after 6 seconds, reject promise
    setTimeout(() => {
      reject('error')
    }, 6000);
  });
}