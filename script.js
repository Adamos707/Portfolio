document.addEventListener('DOMContentLoaded', function(){
    const textInP = 'Nazywam się Adam Watkowski, uczę się w Zespole Szkół Mechanicznych, Elektrycznych i Elektronicznych w Toruniu. Jestem uczniem drugiej klasy programistycznej i nieustannie dążę do doskonalenia moich umiejętności. Moja pasja do programowania oraz zaangażowanie w projekty szkolne świadczą o mojej kreatywności i umiejętnościach analitycznych. Cenię sobie możliwość rozwiązywania trudnych problemów związanych z kodowaniem i nieustannie poszerzam swoją wiedzę w tej dziedzinie. Jestem zaangażowany i pełen zapału, chcąc rozwijać się jako programista. Dodatkowo, posiadam biegłą znajomość języka angielskiego na poziomie B2+ oraz podstawową wiedzę z języka niemieckiego na poziomie A1.  ';
    const headerP = document.getElementById("opis");
    let actualText = '';
    let i = 0;
    const intervalFor = setInterval(function(){
        if(i < textInP.length) {
            actualText += textInP[i];
            headerP.textContent = actualText;
            i++;
        } else {
            clearInterval(intervalFor);
        }
    }, 30);
        
    })
    var elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {

      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });
    
      scroll(loop);
    }
    loop();
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }


