// Effects go here

function fadePage (page1, page2) {
  $(page1).fadeOut(250);
  setTimeout(function () {
    $(page2).fadeIn(250);
  }, 1000);
}