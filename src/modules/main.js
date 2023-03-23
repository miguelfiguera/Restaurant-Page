function main() {
  let main = document.createElement("main");
  main.id="the_main"
  let title = document.createElement("h2");
  title.classList.add('h2lol')
  title.innerText = "Welcome to Ten Forward!";
  let div = document.createElement("div");
  div.classList.add("main-div");
  let presentation = document.createElement("p");
  let presentation2 = document.createElement("p");
  let signature=document.createElement("strong")
  presentation.classList.add("lol")
  presentation2.classList.add("lol")
  signature.classList.add("lol")
  let backgroundImg = document.createElement("img");
  let message =
    "Welcome to ten forward! we are the embodyment of the united federation of planets. Everybody is welcome (childrens must come with their guardians) to enjoy some of the best delicassys of the Last Frontier...So go boldly!";
  let message2=
  "Ask around, meet Guinan, talk to your superiors, make friends... introspection, respect and friendship are the core principles of any activity here in Ten Forward."
  presentation.innerText = message;
  presentation2.innerText = message2;
  signature.innerText= "Star Fleet Command."
  main.classList.add("content");
  div.appendChild(title);
  div.appendChild(presentation);
  div.appendChild(presentation2);
  div.appendChild(signature);
  main.appendChild(div);
  main.appendChild(backgroundImg);


  return main;
}
export { main };
