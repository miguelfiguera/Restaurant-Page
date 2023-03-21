import _ from 'lodash';
import header from "./modules/header.js"

const HEADER=header.populateHeader()

const populatedDiv=()=>{
    let div=document.getElementById('content')
    div.appendChild(HEADER);
}