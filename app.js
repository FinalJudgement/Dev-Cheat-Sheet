const navTop = document.querySelector('#nav-top')
const navbar = document.querySelector('.navbar')
const h1 = document.querySelector('h1')
const content = document.querySelector('.content')
const brand = document.querySelector('.brand')
let sticky = navbar.offsetTop;
let h1fade = 0;

let rgbHeader = () => {

    h1.style.color = `rgb( ${Math.floor(Math.random() * 250) + 1},  ${Math.floor(Math.random() * 250) + 1}, ${Math.floor(Math.random() * 250) + 1})`;

    setTimeout(rgbHeader, 1000);
}
rgbHeader()

let rgbBrand = () => {

    if (window.scrollY == 0) {
        return false;
    }
    brand.style.color = `rgb( ${Math.floor(Math.random() * 250) + 1},  ${Math.floor(Math.random() * 250) + 1}, ${Math.floor(Math.random() * 250) + 1})`;

    setTimeout(rgbBrand, 1000);
}


window.onscroll = () => {
    rgbBrand()
    let scroll = window.scrollY / 50


    navbar.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${scroll})`;

    h1.style.color = `rgba(${250}, ${250}, ${250}, ${.2 / scroll})`

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        content.style = "margin-top: 45px;";
        brand.style.color = `rgba(${250}, ${250}, ${250}, ${1})`
        rgbBrand()


    } else {
        brand.style.color = `rgba(${250}, ${250}, ${250}, ${0})`
        navbar.classList.remove("sticky");
        content.style = "margin-top: 0;"

    }
}