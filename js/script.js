// 'use strict';

import { InfoCookies } from "./modules/InfoCookies.js";

const infoCookie = new InfoCookies;

document.querySelector("#acceptbtn").addEventListener("click", ()=>{
    infoCookie.setCookie();
});

document.querySelector('#rejectbtn').addEventListener("click", ()=>{
    history.go(-1);
})