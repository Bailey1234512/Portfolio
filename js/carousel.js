$(document).ready(function() {
  $('.wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 300000,
    accessibility: true,
    arrows: true,
  });
});

var exampleCodeMap = {
  codingExample1: '/coding-examples-explanation/project1.html',
  codingExample2: '/coding-examples-explanation/project2.html',
  codingExample3: '/coding-examples-explanation/project3.html',
  codingExample4: '/coding-examples-explanation/project4.html',
  codingExample5: '/coding-examples-explanation/project5.html',
  codingExample6: '/coding-examples-explanation/project6.html',
};

function updateCodingExamples() {
  var currentSlide = $('.slick-current').attr('data-example');
  var code = exampleCodeMap[currentSlide];
  if (code) {
    $('#my-iframe').attr('src', code);
    setTimeout(testIframeUpdate, 500);
  } else {
    console.log("Url not found for slide: " + currentSlide);
  }
}


var prevSlideIndex = -1;



function testIframeUpdate() {
  var iframe = document.getElementById('my-iframe');
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  var iframeContent = iframeDoc.querySelector('body');
  var project1Examples = iframeContent.querySelector('.project-1-examples');
  if (project1Examples !== null) {
    console.log('Iframe updated successfully!');
  } else {
    console.error('Iframe has not updated!');
  }
}



$('#myCarousel').on('afterChange', function(event, slick, currentSlide) {
  if (currentSlide !== prevSlideIndex) {
    prevSlideIndex = currentSlide;
    updateCodingExamples();
    setTimeout(testIframeUpdate, 500);
    console.log("should have been changed by now")
  }
});

var iframe = document.getElementById('my-iframe');
iframe.addEventListener('load', function() {
  testIframeUpdate();
});

function resizeIframe() {
  var iframe = document.getElementById('my-iframe');
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  var iframeContent = iframeDoc.querySelector('body');
  iframe.style.height = iframeContent.scrollHeight + 'px';
}

window.addEventListener('load', resizeIframe);
iframe.addEventListener('load', resizeIframe);