import CommunitySection from '../../components/CommunitySection';
import FeatureCard from '../../components/FeatureCard';
import OurClients from '../../components/OurClients';
import Illustration from './../../assets/images/Illustration.png'

function FirstSection(): string {
    return /* html */`
        <section class="d-flex flex-column gap-5">
            ${FeatureCard({
                image: Illustration,
                title: `Lessons and insights <span style="color: var(--color-primary)">from 8 years</span>`,
                description: "Where to grow your business as a photographer: site or social media?",
                buttonText: "Register",
                reverse: "flex-row-reverse"
            })}
            ${OurClients()}
            ${CommunitySection()}
        </section>
    `;
}

export default FirstSection;