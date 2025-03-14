import './style.css';

interface BlogCardProps {
    image: string;
    title: string;
    link: string;
}

function BlogCard({ image, title, link }: BlogCardProps): string {
    return /* html */`
        <div data-aos="zoom-in" class="blog col-md-4 flex-grow-1">
            <div class="card border-0 shadow-sm text-center">
                <img src="${image}" class="card-img-top" alt="${title}">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <h5 class="card-title">${title}</h5>
                    <a href="${link}" class="text-success fw-semibold text-decoration-none">Readmore <span>→</span> </a>
                </div>
            </div>
        </div>
    `;
}

export default BlogCard;