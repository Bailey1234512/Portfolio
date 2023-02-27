$(document).ready(function() {
  $('.wrapper').slick({
    dots: true,
    infinite: true,
    speed: 200,
    cssEase: 'linear',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    arrows: true,
  });
});


$(document).ready(function(){
  $('.slider3').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 20000000,
    variableWidth:true,
    infinite:true,
    centerPadding: '30px',
  });
});




// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
  
    lastScrollTop = st;
}





// Sidebar //
let sidebarOpen = false;

window.onload = function() {
  const openBtn = document.querySelector('.menu-container.openbtn');
  openBtn.addEventListener('click', () => {
    document.getElementById("mySidebar").style.width = "270px";
    document.getElementById("mySidebar").style.right = "0px";
    document.getElementById("home-page").style.transition = "0.5s";
    document.getElementById("sticky-header").style.transition = "0.5s";
    document.getElementById("top-carousel").style.transition = "0.5s";
    document.getElementById("home-page").style.right = "270px";
    document.getElementById("mySidebar").style.boxShadow = "-10000px 0 0 9999px rgba(0,0,0,0.5)";
    sidebarOpen = true;
  });

  document.addEventListener('mousedown', (e) => {
    if (!document.querySelector('.sidebar').contains(e.target) && sidebarOpen) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("mySidebar").style.right = "-40px";
      document.getElementById("home-page").style.width = "100%";
      document.getElementById("sticky-header").style.width = "100%";
      document.getElementById("top-carousel").style.width = "100%";
      document.getElementById("home-page").style.right = "0";
      document.getElementById("mySidebar").style.boxShadow = "-10000px 0 0 9999px rgba(0,0,0,0)";
      sidebarOpen = false;
    }
  });
};







//cookies//

window.addEventListener('load', function() {
  var cookieConsent = document.querySelector('.simple-cookie-consent');
  if (cookieConsent) {
    cookieConsent.addEventListener('mousewheel', function(event) {
      event.stopPropagation();
    });
  }
});





// JAVASCRIPT FOR COOKIES //

document.addEventListener("DOMContentLoaded", function() {
  const cookieConsent = document.getElementById("simple-cookie-consent");
  const changeSettingsBtn = document.getElementById("change-settings-btn");
  const allowButton = document.querySelector(".cookie-consent-allow");
  const settingsPopup = document.getElementById("settings-popup");

  const continueButton = document.querySelector(".continue-to-website");
  const settingsPopupCancel = document.getElementById("settings-popup-cancel")


  // Check if the user has made a cookie choice
  if (document.cookie.indexOf("visited=allow") !== -1 || document.cookie.indexOf("visited=deny") !== -1) {
    cookieConsent.style.display = "none";
  }

  if (changeSettingsBtn && allowButton) {
    allowButton.addEventListener("click", function() {
      document.cookie = "visited=allow; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/;";
      cookieConsent.style.display = "none";
    });

    changeSettingsBtn.addEventListener("click", function() {
      settingsPopup.style.display = "block";
    });
  }

  settingsPopup.addEventListener("click", function(event) {
    if (event.target === settingsPopup) {
      settingsPopup.style.display = "none";
    }
  });


    
    // Hide the settings popup when the continue to website button is clicked
    continueButton.addEventListener("click", function() {
    settingsPopup.style.display = "none";
    cookieConsent.style.display = "none";
    document.cookie = "visited=allow; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/;";
    });

    settingsPopupCancel.addEventListener("click", function() {
      settingsPopup.style.display = "none"
      cookieConsent.style.display = "block";
    });

});



  // toggles the detailed cookies preferences table //
  function toggleTable() {
    var table = document.getElementById("cookiesTable");
    var button = document.getElementById("toggleButton");
    if (table.style.display === "none") {
      table.style.display = "block";
      button.textContent = "HIDE DETAILED PREFERENCES";
    } else {
      table.style.display = "none";
      button.textContent = "SHOW DETAILED PREFERENCES";
    }
  }




function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

document.addEventListener("DOMContentLoaded", function () {
  var functionalCookiesDeny = document.querySelector(".functional-cookies-deny");
  var functionalCookiesEnable = document.querySelector(".functional-cookies-enable");


  function setActive(selectedButton) {
    functionalCookiesDeny.classList.remove("active");
    functionalCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(functionalCookiesDeny);
  setCookie('functionalCookies', 'deny')

  functionalCookiesDeny.addEventListener("click", function () {
    setActive(functionalCookiesDeny);
    setCookie('functionalCookies', 'deny')
  });

  functionalCookiesEnable.addEventListener("click", function () {
    setActive(functionalCookiesEnable);
    setCookie('functionalCookies', 'allow')
  });

});


document.addEventListener("DOMContentLoaded", function () {

  var performanceCookiesDeny = document.querySelector(".performance-cookies-deny");
  var performanceCookiesEnable = document.querySelector(".performance-cookies-enable");

  function setActive(selectedButton) {
    performanceCookiesDeny.classList.remove("active");
    performanceCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }
  setActive(performanceCookiesDeny);
  setCookie('performanceCookies', 'deny');

  performanceCookiesDeny.addEventListener("click", function () {
    setActive(performanceCookiesDeny);
    setCookie('performanceCookies', 'deny');
  });

  performanceCookiesEnable.addEventListener("click", function () {
    setActive(performanceCookiesEnable);
    setCookie('performanceCookies', 'allow')
  });

});
  

document.addEventListener("DOMContentLoaded", function () {

  var hotjarCookiesDeny = document.querySelector(".hotjar-cookies-deny");
  var hotjarCookiesEnable = document.querySelector(".hotjar-cookies-enable");

  function setActive(selectedButton) {
    hotjarCookiesDeny.classList.remove("active");
    hotjarCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(hotjarCookiesDeny);
  setCookie('hotjarCookies', 'deny');

  hotjarCookiesDeny.addEventListener("click", function () {
    setActive(hotjarCookiesDeny);
    setCookie('hotjarCookies', 'deny');
  });

  hotjarCookiesEnable.addEventListener("click", function () {
    setActive(hotjarCookiesEnable);
    setCookie('hotjarCookies', 'allow')
  });

});


document.addEventListener("DOMContentLoaded", function () {


  var linkedinCookiesDeny = document.querySelector(".linkedin-cookies-deny");
  var linkedinCookiesEnable = document.querySelector(".linkedin-cookies-enable");

  function setActive(selectedButton) {
    linkedinCookiesDeny.classList.remove("active");
    linkedinCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(linkedinCookiesDeny);
  setCookie('linkedinCookies', 'deny');

  linkedinCookiesDeny.addEventListener("click", function () {
    setActive(linkedinCookiesDeny);
    setCookie('linkedinCookies', 'deny');
  });

  linkedinCookiesEnable.addEventListener("click", function () {
    setActive(linkedinCookiesEnable);
    setCookie('linkedinCookies', 'allow')
  });

});


document.addEventListener("DOMContentLoaded", function () {


  var facebookCookiesDeny = document.querySelector(".facebook-cookies-deny");
  var facebookCookiesEnable = document.querySelector(".facebook-cookies-enable");

  function setActive(selectedButton) {
    facebookCookiesDeny.classList.remove("active");
    facebookCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(facebookCookiesDeny);
  setCookie('facebookCookies', 'deny');

  facebookCookiesDeny.addEventListener("click", function () {
    setActive(facebookCookiesDeny);
    setCookie('facebookCookies', 'deny');
  });

  facebookCookiesEnable.addEventListener("click", function () {
    setActive(facebookCookiesEnable);
    setCookie('facebookCookies', 'allow')
  });

});


document.addEventListener("DOMContentLoaded", function () {


  var googleCookiesDeny = document.querySelector(".google-cookies-deny");
  var googleCookiesEnable = document.querySelector(".google-cookies-enable");



  function setActive(selectedButton) {
    googleCookiesDeny.classList.remove("active");
    googleCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(googleCookiesDeny);
  setCookie('googleCookies', 'deny');

  googleCookiesDeny.addEventListener("click", function () {
    setActive(googleCookiesDeny);
    setCookie('googleCookies', 'deny');
  });

  googleCookiesEnable.addEventListener("click", function () {
    setActive(googleCookiesEnable);
    setCookie('googleCookies', 'allow')
  });

});

document.addEventListener("DOMContentLoaded", function () {

  var leadCookiesDeny = document.querySelector(".lead-cookies-deny");
  var leadCookiesEnable = document.querySelector(".lead-cookies-enable");


  function setActive(selectedButton) {
    leadCookiesDeny.classList.remove("active");
    leadCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(leadCookiesDeny);
  setCookie('leadCookies', 'deny');
  
  leadCookiesDeny.addEventListener("click", function () {
    setActive(leadCookiesDeny);
    setCookie('leadCookies', 'deny');
  });

  leadCookiesEnable.addEventListener("click", function () {
    setActive(leadCookiesEnable);
    setCookie('leadCookies', 'allow')
  });

});


document.addEventListener("DOMContentLoaded", function () {



  var cxCookiesDeny = document.querySelector(".cx-cookies-deny");
  var cxCookiesEnable = document.querySelector(".cx-cookies-enable");


  function setActive(selectedButton) {
    cxCookiesDeny.classList.remove("active");
    cxCookiesEnable.classList.remove("active");
    selectedButton.classList.add("active");
  }

  setActive(cxCookiesDeny);
  setCookie('cxCookies', 'deny');

  cxCookiesDeny.addEventListener("click", function () {
    setActive(cxCookiesDeny);
    setCookie('cxCookies', 'deny');
  });

  cxCookiesEnable.addEventListener("click", function () {
    setActive(cxCookiesEnable);
    setCookie('cxCookies', 'allow')
  });

});