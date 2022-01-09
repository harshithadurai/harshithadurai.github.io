// display navbar on scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth < 1000) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  } else {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
}

// typing text animation

