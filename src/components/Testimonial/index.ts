import './style.css';

interface TestimonialProps {
    image: string;
    text: string;
    name: string;
    position: string;
    logos: string[];
}

function TestimonialCard({ image, text, name, position, logos }: TestimonialProps): string {
    return /* html */`
        <div class=" card__testimonial">
            <article class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div class="flex-shrink-0"> <img class="img-fluid" src="${image}" alt="Testimonial"> </div>
                
                <section class="d-flex flex-column justify-content-between flex-grow-1">
                    <p>${text}</p>

                    <footer class="my-3">
                        <h5 class="fw-semibold">${name}</h5>
                        <p class="pt-3">${position}</p>
                    </footer>

                    <div class="d-flex justify-content-between">
                        ${logos.map(logo => `<img src="${logo}" alt="Logo">`).join('')}
                        <a href="#" class="fw-semibold mt-3 text-decoration-none">Meet all customers →</a>
                    </div>
                </section>
            </article>
        </div>
    `;
}

export default TestimonialCard;