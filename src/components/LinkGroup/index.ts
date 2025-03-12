import './style.css';

interface Link {
    text: string;
    path: string;
}

export interface LinkGroupProps {
    title: string;
    links: Link[];
}

function LinkGroup({title, links}: LinkGroupProps): string {
    return `
        <div class="link-group">
            <h3 class="link-group-title">${title}</h3>
            <ul class="link-group-list">
                ${links.map((link: Link) => 
                    `<li class="link-group-item decoration-none">
                        <a href="${link.path}">${link.text}</a>
                    </li>`
                ).join('')}
            </ul>
        </div>
    `;
}

export default LinkGroup;