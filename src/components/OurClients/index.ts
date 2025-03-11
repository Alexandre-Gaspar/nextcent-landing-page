import './style.css'

import logo from './../../assets/clients/Logo.png';
import vector from './../../assets/clients/Vector.png';
import logo_1 from './../../assets/clients/Logo-1.png';
import logo_2 from './../../assets/clients/Logo-2.png';
import logo_3 from './../../assets/clients/Logo-3.png';
import logo_4 from './../../assets/clients/Logo-4.png';
import logo_5 from './../../assets/clients/Logo-5.png';
import TitleDescription from '../TitleText';

function OurClients() {
    let title: string = "Our Clients";
    let description: string = "We have been working with some Fortune 500+ clients";

    return /* html */`
        <div class="container text-center">
            <section class="d-flex gap-5 flex-column align-items-center justify-content-between">
                ${TitleDescription({title, description})}
                <article class="w-100 d-flex justify-content-around align-items-center">
                    <img src="${logo}">
                    <img src="${vector}">
                    <img src="${logo_1}">
                    <img src="${logo_2}">
                    <img src="${logo_3}">
                    <img src="${logo_4}">
                    <img src="${logo_5}">
                </article>
            <section>
        </div>
    `;
}

export default OurClients;