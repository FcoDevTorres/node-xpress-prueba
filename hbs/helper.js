const hbs = require('hbs');

//Helper
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
})

hbs.registerHelper("capitalizarTexto", (texto) => {
    let arrTexto = texto.split(" ");
    arrTexto.forEach((element, indx) => {
        arrTexto[indx] = element[0].toUpperCase() + "" + element.substring(1, element.length).toLowerCase();
    });
    console.log(arrTexto);
    return arrTexto.join(" ");


});