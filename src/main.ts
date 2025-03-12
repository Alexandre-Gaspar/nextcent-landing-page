import './styles/settings/colors.css';
import './styles/generic/reset.css';
import './styles/elements/base.css';

import Navbar from './components/Navbar';
import FirstSection from './objects/FirstSection';

import SecondSection from './objects/SecondSection';
import Footer from './objects/Footer';

const $root = document.querySelector<HTMLDivElement>('#app')

$root!.insertAdjacentHTML(
    "beforeend", 
    `
        ${Navbar()}
        ${FirstSection()}
        <br><br><br>
        ${SecondSection()}
        ${Footer()}
    `
);

