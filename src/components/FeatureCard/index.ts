import './style.css'
import Button from "../Button";
import TitleDescription from '../TitleText';

interface FeatureCard {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    reverse?: string | null;
}

function FeatureCard({image, title, description, buttonText, reverse}: FeatureCard): string {
    return /* html */`
        <div class="banner">    
            <div class="container">
                <section class="row d-flex ${reverse} align-items-center justify-content-between">
                    <article class="col-md-5 d-flex justify-content-center">
                        <img src="${image}" class="img-fluid" alt="Ilustration Image">
                    </article>
                    <article class="col-md-7 d-flex flex-column gap-4 text-center text-md-start">
                        ${TitleDescription({title, description})}
                        <div>${Button(buttonText)}</div>
                    </article>
                </section>
            </div>
        </div>
    `;
}

export default FeatureCard;