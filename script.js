(function() {
  "use strict";

  const siema = new Siema({
    draggable: false,
    duration:  1000,
    easing:    'ease-in-out',
    loop:      true,
  });
  setInterval(() => siema.next(), 5000);


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
