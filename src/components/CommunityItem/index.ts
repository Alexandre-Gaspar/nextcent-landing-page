import './style.css'
import TitleDescription from "../TitleText";

interface CommunityItem {
    icon: string;
    alt?: string;
    title: string;
    description: string;
}

function CommunityItem({icon, alt, title, description}: CommunityItem) {
    return /* html */`
        <div class="community-item text-center d-flex flex-column justify-content-center align-items-center">
            <img src="${icon}" alt="${alt}">
            ${TitleDescription({title, description})}
        </div>
    `;
}

export default CommunityItem;