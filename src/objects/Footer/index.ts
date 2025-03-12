import LinkGroup from "../../components/LinkGroup";
import "./style.css";

import light_logo from "../../assets/logo-light.png";
import ic_instagram from "../../assets/social-media/ic_instagram.png";
import ic_browser from "../../assets/social-media/ic_browser.png";
import ic_twitter from "../../assets/social-media/ic_twitter.png";
import ic_youtube from "../../assets/social-media/ic_youtube.png";
import ic_send from "../../assets/social-media/send.png";

const links__block_1 = [
    { text: "About us", path: "#" },
    { text: "Blog", path: "#" },
    { text: "Contact us", path: "#" },
    { text: "Pricing", path: "#" },
    { text: "Testimonials", path: "#" },
];

const links__block_2 = [
    { text: "Help center", path: "/#" },
    { text: "Terms of service", path: "#" },
    { text: "Legal", path: "#" },
    { text: "Privacy policy", path: "#" },
    { text: "Status", path: "#" }
];

function Footer() {
    return /* html */`
        <footer id="app__footer" class="container-fluid">
            <section class="row row-cols-1 row-cols-md-2 g-2 g-lg-3">
                <div class="col col-md-4 d-flex flex-column justify-content-between text-light">
                    <img src="${light_logo}" alt="Logo da nextcent">
                    <div class="footer__copy">
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p class="mt-3">All rights reserved</p>
                    </div>
                    <div class="social-media d-flex justify-content-between">
                        <a href="#"><img src="${ic_instagram}" alt="ícone do instagram" /></a>
                        <a href="#"><img src="${ic_browser}" alt="ícone do navegador" /></a>
                        <a href="#"><img src="${ic_twitter}" alt="ícone do twitter" /></a>
                        <a href="#"><img src="${ic_youtube}" alt="ícone do youtube" /></a>
                    </div>
                </div>
                <div class="col col-md-8 d-flex justify-content-between text-light">
                    ${LinkGroup({ title: "Company", links: links__block_1 })}
                    ${LinkGroup({ title: "Support", links: links__block_2 })}
                    <div class="input__send-email">
                        <h3>Stay up to date</h3>
                        <div class="input_group">
                            <input type="email" placeholder="Your email address" />
                            <button class="send-email">
                                <img src="${ic_send}" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </footer
    `
}

export default Footer;