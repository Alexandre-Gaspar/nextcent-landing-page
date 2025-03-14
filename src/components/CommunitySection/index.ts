import './style.css';
import TitleDescription from "../TitleText";
import CommunityItem from "../CommunityItem";

import icon from './../../assets/community/Icon.png';
import icon_1 from './../../assets/community/Icon-1.png';
import icon_2 from './../../assets/community/Icon-2.png';

type CommunityItemTypeProps = {
    icon: string;
    alt?: string;
    title: string;
    description: string;
}

const communityItemList: CommunityItemTypeProps[] = [
    { icon: icon, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments" },
    { icon: icon_1, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments" },
    { icon: icon_2, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments" }
]

function CommunitySection() {

    const title: string = "Manage your entire community in a single system";
    const description: string = "Who is Nextcent suitable for?";

    return /* html */`
        <div class="community-section text-center d-flex flex-column justify-content-center align-items-center">    
            ${TitleDescription({ title, description })}
            <section class="mt-5 d-flex justify-content-center align-items-center">
                ${communityItemList.map(item => CommunityItem(item)).join("")}
            </section>
        </div>
    `;
}

export default CommunitySection;