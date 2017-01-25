(function() {
  "use strict";

  // Enable Siema images carousel
  const siema = new Siema({
    draggable: false,
    duration:  1000,
    easing:    'ease-in-out',
    loop:      true,
  });
  var siema_forwards = true;
  setTimeout(function() {
    setInterval(function() {
      var i = siema.currentSlide,
          n = document.querySelectorAll('.siema > div > div').length;
      if (i == 0) siema_forwards = true;
      else if (i == n - 1) siema_forwards = false;

      if (siema_forwards) siema.next();
      else                siema.prev();
    }, 7000);
  }, 3000);


  // Enable Youtube playlist
  $('#ycp').ycp({
    apikey: 'AIzaSyCNyRhHrbLq_uLkqRQyaYM9rvbe_cXuGlo',
    playlist: 50
  });


  // Decode e-mail and populate as necessary
  var email = dec('%C2%81ur%C2%81u%7Frnq%C2%80M%C2%80%C2%84%7C%7Cx%3B%7Br%C2%81'),
      email_elements = document.querySelectorAll('.email');
  for (var i = 0; i < email_elements.length; i++) {
    var email_el = email_elements[i];
    email_el.setAttribute('href', 'mailto:' + email);
    email_el.innerHTML = email;
  }

  function dec(in_) {
    var tmp=decodeURIComponent(in_).split('');
    tmp.forEach(function(e,i) {
      tmp[i] = String.fromCharCode(e.charCodeAt(0)-13);
    });
    return tmp.join('');
  }

})(window);
