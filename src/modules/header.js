function header (){
  let header = document.createElement("header");
  let navbar = document.createElement("nav");
  let headerPicture = document.createElement("img");
  let title = document.createElement("h1");
  title.innerText = "Ten Forward";
  title.classList.add("title")
  let buttonMenu = document.createElement("button");
  let buttonContact = document.createElement("button");
  let buttonMain = document.createElement("button");

  buttonMenu.id = "button-menu";
  buttonContact.id = "button-contact";
  buttonMain.id = "button-main";

  buttonMenu.classList.add("button-header")
  buttonContact.classList.add("button-header")
  buttonMain.classList.add("button-header")

  buttonMenu.innerText="Menu";
  buttonMain.innerText="Main";
  buttonContact.innerText="Contact";

  navbar.appendChild(buttonMain);
  navbar.appendChild(buttonMenu);
  navbar.appendChild(buttonContact);

  header.appendChild(navbar);
  header.appendChild(title)
  header.appendChild(headerPicture);

  return header;
};

export {header}