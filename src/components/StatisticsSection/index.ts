import StatisticItem from "../StatisticItem";
import TitleDescription from "../TitleText";

import './style.css'

import icon from "./../../assets/stats/Icon.png";
import icon_1 from "./../../assets/stats/Icon-1.png";
import icon_2 from "./../../assets/stats/Icon-2.png";
import icon_3 from "./../../assets/stats/Icon-3.png";

const statisticsData = [
    { icon: icon, title: "2,245,341", description: "Members" },
    { icon: icon_1, title: "46,328", description: "Clubs" },
    { icon: icon_2, title: "828,867", description: "Event Bookings" },
    { icon: icon_3, title: "1,926,436", description: "Payments" }
];

function StatisticsSection() {
    return /* html */`
        <div class="statistics-section d-flex align-items-center justify-content-between">
            ${TitleDescription({
                title: `Helping a local <br> <span style="color: var(--color-primary)">business reinvent itself</span>`,
                description: "We reached here with our hard work and dedication."
            })}
            <div class="d-flex flex-wrap align-items-center gap-5">
                ${statisticsData.map(stat => StatisticItem(stat)).join("")}
            </div>
        </div>
    `;
}

export default StatisticsSection;
