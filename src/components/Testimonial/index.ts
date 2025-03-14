import './style.css';

interface TestimonialProps {
    image: string;
    text: string;
    name: string;
    position: string;
    logos: string[];
}

// d-flex flex-column flex-md-row justify-content-between align-items-center

function TestimonialCard({ image, text, name, position, logos }: TestimonialProps): string {
    return /* html */`
        <div data-aos="fade-up" id="testimonial" class="container-fluid card__testimonial">
            <article class="row d-flex align-items-center">
                <div class="col-md-4 col-12 d-flex justify-content-center">
                    <img class="" src="${image}" alt="Testimonial image" />
                </div>
                
                <section class="col-md-8 col-12 d-flex flex-column justify-content-between">
                    <p class="mt-0 pt-0">${text}</p>

                    <footer class="my-3">
                        <h5 class="fw-semibold">${name}</h5>
                        <p class="pt-3">${position}</p>
                    </footer>

                    <div class="row-col row-cols-1 d-flex flex-wrap  justify-content-between">
                        <div class="col-md-8 d-flex justify-content-around">${logos.map(logo => `<img src="${logo}" alt="Logo">`).join('')}</div>
                        <a href="#" class="col-md-4 flex-end fw-semibold mt-3 text-decoration-none">Meet all customers <span>→</span> </a>
                    </div>
                </section>
            </article>
        </div>
    `;
}

export default TestimonialCard;