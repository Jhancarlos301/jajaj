function openImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgElement.src;
    modal.classList.remove('hidden');
  }

  function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
  }



    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://parchate-apartado-1.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
