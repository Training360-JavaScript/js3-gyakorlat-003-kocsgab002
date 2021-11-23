const setCookie = (name, value) => document.cookie =
    `${name}=${value}; expires=${new Date((new Date).getTime() + 1000 * 60 * 15)}`;

setCookie('viewed', 5);
setCookie('uid', 354774631237);
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll() {
        const obj = new Map(document.cookie.split('; ').map(element => element.split('=')));
        return Object.fromEntries(obj);
    },
    toSessionStorage() {
        const array = new Map(document.cookie.split('; ').map(element => element.split('=')));
        const obj = Object.fromEntries(array);
        const objKeys = Object.keys(obj);
        const objValues = Object.values(obj);
        for (let i = 0; i < objKeys.length; i++) {
            sessionStorage.setItem(`${objKeys[i]}`, `${objValues[i]}`)
        }
    },

    flush() {
        const array = Object.keys(cookieHandler.getAll());
        for (let i = 0; i < array.length; i++) {
            document.cookie = `${array[i]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
        }
    }
};


export { cookieHandler };
