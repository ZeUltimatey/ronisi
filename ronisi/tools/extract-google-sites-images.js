// Run this in Chrome DevTools Console while viewing your Google Sites page/editor.
// It prints all visible image URLs, then downloads a JSON file you can save.
const urls = [...new Set(
  [...document.images]
    .map(img => img.currentSrc || img.src)
    .filter(Boolean)
    .filter(src => src.includes('googleusercontent.com') || src.includes('ggpht.com') || src.includes('google.com'))
)];
console.table(urls);
const blob = new Blob([JSON.stringify(urls, null, 2)], {type: 'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'ronisi-google-sites-images.json';
a.click();
