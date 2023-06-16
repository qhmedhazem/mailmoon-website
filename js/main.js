function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 5 + "px";
}

const navLinksContainer = document.querySelector(".nav-links-container");

function closeFloatingMenu() {
  navLinksContainer.classList.remove("floating");
}

function openFloatingMenu() {
  navLinksContainer.classList.add("floating");
}

function changeSwitch(element) {
  let parent = element.parentElement;

  if (parent.firstElementChild === element) {
    parent.classList.remove("right");
    parent.classList.add("left");
  } else {
    parent.classList.remove("left");
    parent.classList.add("right");
  }
}
