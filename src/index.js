import _ from 'lodash';
import {header} from "./modules/header.js"
import {footer} from "./modules/footer.js"
import {main} from "./modules/main.js"
import {menu} from "./modules/menu.js"

const populated=(()=>{
let div=document.getElementById('content')
let HEADER=header()
let MAIN=main()
let FOOTER=footer()
let MENU=menu()

MENU.classList.add('hidden')


div.appendChild(HEADER)
div.appendChild(MAIN)
div.appendChild(MENU)
div.appendChild(FOOTER)
})();

const eventListenersButtons=(()=>{
    let buttonMenu=document.getElementById("button-menu");
    let buttonContact=document.getElementById('button-contact')
    let buttonMain=document.getElementById('button-main')

    buttonMenu.addEventListener("click",function(){
        //add hidden class to everything
        //remove hidden class from menu

    })
    buttonContact.addEventListener("click",function(){})
    buttonMain.addEventListener('click',function(){})



})();


