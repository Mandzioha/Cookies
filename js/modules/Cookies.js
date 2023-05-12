'use strict';

export class Cookies {
    constructor() {
        this.checkCookieEnabled();
    }

    checkCookieEnabled() {
        if (!navigator.cookieEnabled) {
            alert("Masz wyłączoną obsługę ciasteczek");
            return;
        }
    }

    setCookie(options) {
        const cookieSettingsTab = [];
        cookieSettingsTab.push(`${options.name}=${options.value}`);
        if (typeof (options.days) === 'number') {
            const date = new Date();
            date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
            cookieSettingsTab.push(`expires=${date.toGMTString()}`);
        }
        document.cookie = cookieSettingsTab.join(';');
        console.log(cookieSettingsTab.join(';'));
    }

    getCookie(name) {
        if (document.coookie != '') {
            const cookies = document.cookie.split(/; */);
            for (let i = 0; i < cookies.length; i++) {
                const cookieName = cookies[i].split('=')[0];
                const cookieVal = cookies[i].split('=')[1];
                if (cookieName === name) {
                    return cookieVal;
                }
            }
        }
    }

    removeCookie(name) {
        this.setCookie({
            name: name,
            days: -1
        })
    }
}