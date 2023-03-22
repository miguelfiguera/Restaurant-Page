function main() {
  let main = document.createElement("main");
  let title = document.createElement("h2");
  title.innerText = "Welcome to Ten Forward!";
  let div = document.createElement("div");
  div.classList.add("main-div");
  let presentation = document.createElement("p");
  let backgroundImg = document.createElement("img");
  let message =
    "Welcome to ten forward! we are the embodyment of the united federation of planets. Everybody is welcome (childrens must come with their guardians) to enjoy some of the best delicassys of the Last Frontier...So go boldly!";

  presentation.innerText = message;
  main.classList.add("content");
  div.appendChild(title);
  div.appendChild(presentation);
  main.appendChild(div);
  main.appendChild(backgroundImg);

  //add a message about how cool is ten forward....

  return main;
}
export { main };
