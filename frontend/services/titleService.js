/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head

const titleService = {
  changeFavicon: src => {
    let link = document.createElement("link");
    let oldLink = document.querySelectorAll("[type='image/x-icon']")[0]
    link.rel = 'shortcut icon';
    link.href = src;
    link.type = 'image/x-icon';
    if (oldLink) { document.head.removeChild(oldLink); } 
    document.head.appendChild(link);
  }
}

export default titleService;