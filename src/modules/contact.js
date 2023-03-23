function contact (){ 
    let contact= document.createElement("contact")
    contact.classList.add("hidden")
    contact.id="the_contact"
    let contactData=document.createElement("p")
    contactData.innerText="Contact Info:"
    let contactName=document.createElement("p")
    contactName.innerText="Guinan"
    let contactPhone=document.createElement("p")
    contactPhone.innertText="1 111 11111 11"
    let contactEmail=document.createElement("p")
    contactEmail.innerText="totallyreal@email.com"



    contact.classList.add("content")
    contact.appendChild(contactData);
    contact.appendChild(contactName);
    contact.appendChild(contactPhone);
    contact.appendChild(contactEmail);

    

return contact
}
export{contact}