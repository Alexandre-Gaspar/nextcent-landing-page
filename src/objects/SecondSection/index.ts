import FeatureCard from "../../components/FeatureCard";
import StatisticsSection from "../../components/StatisticsSection";

import teslaImg from './../../assets/images/image_9.png';
import icon from './../../assets/clients/Logo.png';
import icon_0 from './../../assets/clients/Vector.png';
import icon_1 from './../../assets/clients/Logo-1.png';
import icon_2 from './../../assets/clients/Logo-2.png';
import icon_3 from './../../assets/clients/Logo-3.png';
import icon_4 from './../../assets/clients/Logo-4.png';

import './style.css'

import rafiki from './../../assets/images/rafiki.png';
import pana from './../../assets/images/pana.png';
import TestimonialCard from "../../components/Testimonial";
import BlogSection from "../../components/BlogSection";

function SecondSection(): string {
    return /* html */`
        <div class="second-section d-flex flex-column gap-5 align-items-center justify-content-center">
            ${FeatureCard({
                image: rafiki,
                title: "The unseen of spending three years at Pixelgrade",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
                buttonText: "Learn More"
            })}
            <div class="container">
                ${StatisticsSection()}
            </div>
            ${FeatureCard({
                image: pana,
                title: "How to design your site footer like we did",
                description: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
                buttonText: "Learn More"
            })}
            ${TestimonialCard({
                image: teslaImg,
                text: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
                name: "Tim Smith",
                position: "British Dragon Boat Racing Association",
                logos: [icon, icon_0, icon_1, icon_2, icon_3, icon_4]
            })}
            ${BlogSection()}
        </div>
    `;
}

export default SecondSection;