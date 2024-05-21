// one click CSS upload

// Function for upoloading css files or external links
function loadStyle({ href, rel = 'stylesheet', crossorigin = null }) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = rel;
  
    
      if (crossorigin) {
        link.crossOrigin = crossorigin;
      }
  
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
  //loading here adresses
  Promise.all([
    loadStyle({ href: 'https://fonts.googleapis.com', rel: 'preconnect' }),
    loadStyle({ href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' }),
    loadStyle({ href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap' }),
    loadStyle({ href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }),
    loadStyle({ href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' }),
    loadStyle({ href: '../CSS/bootstrapGlobalEdit.css' }),
    // loadStyle({ href: '../global.css' }),
    
  ]).then(() => {
    console.log('All CSS loaded OK.');
  }).catch(error => {
    console.error('Error loading CSS:', error);
  });
  