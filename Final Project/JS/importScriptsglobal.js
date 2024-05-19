// main.js

// loadFunction for extenal scripts
function loadScript(src, crossorigin = false) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      if (crossorigin) {
        script.crossOrigin = 'anonymous';
      }
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
// loading scripts in the correct order
loadScript('https://code.jquery.com/jquery-3.5.1.min.js')
    .then(() => loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js'))
    .then(() => loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'))
    .then(() => loadScript('https://kit.fontawesome.com/5f7a9ef8d5.js', true))
    .then(() => loadScript('../Bootstrap/bootstrap.bundle.min.js'))
    .then(() => {
        console.log('Scripts loaded ok!');
    })
    .catch(error => {
        console.error('Error loading scripts:', error);
    });