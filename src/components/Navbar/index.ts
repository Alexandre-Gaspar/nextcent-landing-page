import './style.css'
import Button from './../Button';

import logo from './../../assets/Logo.png';

function Navbar(): string {
    return /* html */`
        <nav id="navbar" class="d-flex fixed-top">
            <div class="container px-1 d-flex justify-content-between align-items-center">
                <a class="logo">
                    <img src="${logo}" alt="Logo da Nexcent">
                </a>
                <ul class="d-flex gap-4 list-unstyled">
                    <li> <a href="#" class="text-decoration-none position-relative menu-item">Home</a> </li>
                    <li> <a href="#" class="text-decoration-none position-relative menu-item">Service</a> </li>
                    <li> <a href="#" class="text-decoration-none position-relative menu-item">Feature</a> </li>
                    <li> <a href="#" class="text-decoration-none position-relative menu-item">Product</a> </li>
                    <li> <a href="#testimonial" class="text-decoration-none position-relative menu-item">Testemunial</a> </li>
                    <li> <a href="#" class="text-decoration-none position-relative menu-item">FAQ</a> </li>
                </ul>
                <div class="buttons">
                    ${Button("Login", false)}
                    ${Button("Sign up", true, false)}
                </div>
            </div>
        </nav>
    `;
}

export default Navbar;