function menu() {
  let menu = document.createElement("menu");
  menu.id="the_menu"
  let menutitle=document.createElement('h2')
  menutitle.innerText='Choose your venom...!'
  menu.classList.add("hidden")
  menu.appendChild(menutitle)
  let dishes = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      let dish = document.createElement("div");
      dish.classList.add("dish");
      dish.id = `dish${i}`;
      arr.push(dish);
    }
    return arr;
  };

  let dishesArray = dishes();

  let chateuPicard = document.createElement("h3");
  chateuPicard.innerText = "Chateu Picard";
  let bloodWine = document.createElement("h3");
  bloodWine.innerText = "Klingon Bloodwine";
  let romulanAle = document.createElement("h3");
  romulanAle.innerText = "Romulan Ale";
  let risanWine = document.createElement("h3");
  risanWine.innerText = "Risan Wine";
  let chateuPicardDescription = document.createElement("p");
  chateuPicardDescription.innerText =
    "Chateau Picard is an estate red wine produced by the Picard family at their vineyards, Château Picard, in La Barre, France. It is trademarked and bottled at a castle. One particularly noteworthy vintage year of this wine was 2294.";
  let bloodWineDescription = document.createElement("p");
  bloodWineDescription.innerText =
    "Bloodwine was a popular alcoholic beverage among the Klingons, best served warm. As with many Klingon foods and beverages, it was not for the faint of heart. Bloodwine was known to be highly intoxicating, to the point that most non-Klingons were scarcely capable of tolerating it; it was twice as potent as whiskey";
  let romulanAleDescription = document.createElement("p");
  romulanAleDescription.innerText =
    "Romulan ale was a highly intoxicating alcoholic beverage of Romulan origin with a characteristic blue color (ranging from a pale sky blue to a dark midnight blue).";
  let risanWineDescription = document.createElement("p");
  risanWineDescription.innerText =
    "Risan cabernet was a variety of wine produced by the Risans. Really good to drink before, during and after jahamaron...if you know what I mean...";

  let chateuPicardImg = document.createElement("img");
  chateuPicardImg.src = "./Pictures/C7_Picard_2386-2-pack-1.png";
  chateuPicardImg.classList.add("menuImage")
  let bloodWineImg = document.createElement("img");
  bloodWineImg.src = "./Pictures/klingonbloodwine.jpeg";
  bloodWine.classList.add("menuImage")
  let romulanAleImg = document.createElement("img");
  romulanAleImg.classList.add("menuImage")
  romulanAleImg.src = "./Pictures/romulanale.png";
  let risanWineImg = document.createElement("img");
  risanWineImg.classList.add("menuImage")
  risanWineImg.src = "./Pictures/risanwine.png";

  dishesArray[0].appendChild(chateuPicard);
  dishesArray[0].appendChild(chateuPicardImg);
  dishesArray[0].appendChild(chateuPicardDescription);
  dishesArray[1].appendChild(bloodWine);
  dishesArray[1].appendChild(bloodWineImg);
  dishesArray[1].appendChild(bloodWineDescription);
  dishesArray[2].appendChild(romulanAle);
  dishesArray[2].appendChild(romulanAleImg);
  dishesArray[2].appendChild(romulanAleDescription);
  dishesArray[3].appendChild(risanWine);
  dishesArray[3].appendChild(risanWineImg);
  dishesArray[3].appendChild(risanWineDescription);

  for (let i = 0; i < dishesArray.length; i++) {
    menu.appendChild(dishesArray[i]);
  }

  menu.classList.add("content");

  return menu;
}
export { menu };
