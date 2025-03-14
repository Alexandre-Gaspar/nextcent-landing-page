import './styles/settings/colors.css';
import './styles/generic/reset.css';
import './styles/elements/base.css';


import Navbar from './components/Navbar';
import FirstSection from './objects/FirstSection';
import SecondSection from './objects/SecondSection';
import Footer from './objects/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'

const $root = document.querySelector<HTMLDivElement>('#app')

if (!$root) {
    console.log('Elemento #app não encontrado');
} else {
    $root.insertAdjacentHTML(
        "beforeend",
        `
            ${Navbar()}
            ${FirstSection()}
            <br><br><br>
            ${SecondSection()}
            ${Footer()}
        `
    );

    AOS.init({delay: 500});
    AOS.refresh();
}

document.addEventListener("DOMContentLoaded", () => {
    const $navbar = document.querySelector("#navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            $navbar?.classList.add("scrolled");
        } else {
            $navbar?.classList.remove("scrolled");
        }
    });
});
