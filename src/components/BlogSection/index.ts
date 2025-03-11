import BlogCard from "../BlogCard";
import TitleDescription from "../TitleText";

import "./style.css";

import image_18 from './../../assets/images/image_18.png';
import image_19 from './../../assets/images/image_19.png';
import image_20 from './../../assets/images/image_20.png';

interface BlogCardProps {
    image: string;
    title: string;
    link: string;
}

const blogs: BlogCardProps[] = [
    {
        image: image_18,
        title: "Creating Streamlined Safeguarding Processes with OneRen",
        link: "#"
    },
    {
        image: image_19,
        title: "What are your safeguarding responsibilities and how can you manage them?",
        link: "#"
    },
    {
        image: image_20,
        title: "Revamping the Membership Model with Triathlon Australia",
        link: "#"
    }
];

function BlogSection(): string {

    return /* html */`
        <div class="container text-center my-5 blog-section">
            ${TitleDescription({ 
                title: "Caring is the new marketing", 
                description: "The Nexcent blog is the best place to read about the latest membership insights, trends, and more..." 
            })}
            
            <div class="d-flex ">
                ${blogs.map(BlogCard).join('')}
            </div>
        </div>
    `;
}

export default BlogSection;