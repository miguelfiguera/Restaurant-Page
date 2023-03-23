import _ from 'lodash';
import {header} from "./modules/header.js"
import {footer} from "./modules/footer.js"
import {main} from "./modules/main.js"
import {menu} from "./modules/menu.js"
import {contact} from "./modules/contact.js"

const populated=(()=>{
let div=document.getElementById('content')
let HEADER=header()
let MAIN=main()
let FOOTER=footer()
let MENU=menu()
let CONTACT=contact()


div.appendChild(HEADER)
div.appendChild(MAIN)
div.appendChild(MENU)
div.appendChild(CONTACT)
div.appendChild(FOOTER)
})();

const eventListenersButtons=(()=>{
    let buttonMenu=document.getElementById("button-menu");
    let buttonContact=document.getElementById('button-contact')
    let buttonMain=document.getElementById('button-main')
    let menu=document.getElementById("the_menu")
    let main=document.getElementById("the_main")
    let contact=document.getElementById("the_contact")


    let footer=document.getElementById("footer")

    buttonMenu.addEventListener("click",function(){
        menu.classList.remove("hidden")
        main.classList.add("hidden")
        contact.classList.add("hidden")
        footer.style.gridRow='16/17'
    })
    buttonContact.addEventListener("click",function(){
        menu.classList.add("hidden")
        main.classList.add("hidden")
        contact.classList.remove("hidden")
        footer.style.gridRow='4/5'

    })
    buttonMain.addEventListener('click',function(){
        menu.classList.add("hidden")
        main.classList.remove("hidden")
        contact.classList.add("hidden")
        footer.style.gridRow='5/6'
    })



})();


