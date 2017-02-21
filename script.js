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
  $(document).ready(function() {
    var ycp_enable_attempted = false;
    function enable_ycp_once() {
      if (!ycp_enable_attempted) {
        $('#ycp').ycp({
          apikey: 'AIzaSyCNyRhHrbLq_uLkqRQyaYM9rvbe_cXuGlo',
          autoplay: true,
          playlist: 50
        });
        ycp_enable_attempted = true;
      }
    }
    $('#about').waypoint(function(direction) {
      enable_ycp_once();
    });
    $('#videos').waypoint(function(direction) {
      enable_ycp_once();
    });
  });


  // Decode e-mail and populate as necessary
  var email = dec('znvyM%C2%81ur%C2%81u%7Frnq%C2%80%3Bpu'),
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

  // Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-92344163-1', 'auto');
  ga('send', 'pageview');

})(window);
