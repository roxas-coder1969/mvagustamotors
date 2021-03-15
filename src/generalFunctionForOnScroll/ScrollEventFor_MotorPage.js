
export function ScrollNavFunction() {
  if (document.documentElement.scrollTop > 30) {
    for (
      var i = 0;
      i < document.getElementsByClassName("mv-container-div").length;
      i++
    ) {
      document
        .getElementsByClassName("mv-container-div")
        [i].classList.add("mv-container-div-onScroll");
    }
  } else {
    for (
      var key = 0;
      key < document.getElementsByClassName("mv-container-div").length;
      key++
    ) {
      document
        .getElementsByClassName("mv-container-div")
        [key].classList.remove("mv-container-div-onScroll");
    }
  }
}
