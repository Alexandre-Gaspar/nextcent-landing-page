import TitleDescription from "../TitleText";

type StatisticItemProps = {
  icon: string;
  title: string;
  description: string;
  alt?: string;
}

function StatisticItem({ icon, title, description, alt }: StatisticItemProps): string {
  return /* html */ `
    <section style="height: auto" class="statistic-item d-flex gap-5">
      <div>
        <img src="${icon}" alt="${alt}" class="statistic-icon"/>
      </div>
      <article>
        ${TitleDescription({ title, description})}
      </article>
    </section>
  `;
}

export default StatisticItem;