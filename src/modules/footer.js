function footer () {
  let footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.id = "footer";
  let p = document.createElement("p");
  let i = document.createElement("i");
  let anchor = document.createElement("a");
  anchor.href = "https://github.com/miguelfiguera/Restaurant-Page";
  anchor.innerText = " gitHub.com";
  //i.classList.add("fab fa-github");
  p.classList.add("p-footer");
  p.innerText = "Copyright Miguel Figuera's ";

  footer.appendChild(p);
  p.appendChild(anchor);

  return footer
}


export {footer}
