var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //check if nav is scroll up but not to top
    if (st < lastScrollTop && st > 25) {
      document.getElementsByClassName("mv-nav")[0].classList.add("mv-nav-up");
      document
        .getElementsByClassName("mv-nav-desktop")[0]
        .classList.add("mv-nav-up");
    } else {
      document
        .getElementsByClassName("mv-nav")[0]
        .classList.remove("mv-nav-up");
      document
        .getElementsByClassName("mv-nav-desktop")[0]
        .classList.remove("mv-nav-up");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
export function NavWhiteCompact() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementsByClassName("mv-nav")[0].classList.add("mv-nav__white");
    document
      .getElementsByClassName("mv-nav-desktop")[0]
      .classList.add("mv-nav__white");

    for (var i = 0; i < 2; i++) {
      document
        .getElementsByClassName("mv-nav__white")
        [i].addEventListener("mouseout", () => {
          document
            .getElementsByClassName("mv-nav")[0]
            .classList.remove("mv-nav-up");
          document
            .getElementsByClassName("mv-nav-desktop")[0]
            .classList.remove("mv-nav-up");
        });
    }

  } else {
    document
      .getElementsByClassName("mv-nav")[0]
      .classList.remove("mv-nav__white");
    document
      .getElementsByClassName("mv-nav-desktop")[0]
      .classList.remove("mv-nav__white");
  }
}
