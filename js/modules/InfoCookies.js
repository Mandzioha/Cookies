'use strict';

import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies {
    constructor() {
        super();
        
        this.infoPlace = document.querySelector('#CookieBlock');
        if (!this.getCookie('Accept')) {
            this.showInfo();
        }else{
            this.hideInfo();
        }
    }
    
    showInfo() {
        this.infoPlace.classList.add("show");
        this.infoPlace.classList.remove("hide");
    }
    hideInfo() {
        this.infoPlace.classList.add("hide");
        this.infoPlace.classList.remove("show");
    }
    setCookie(){
        super.setCookie({
            name: 'Accept',
            value: 'yes',
            days: 90
        });
        this.hideInfo();
    }
}