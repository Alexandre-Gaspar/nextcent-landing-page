interface TitleDescriptionProps {
    title: string;
    description: string;
}

function TitleDescription({title, description}: TitleDescriptionProps) {
    return /* html */`
        <div class="d-flex flex-column gap-3">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
}

export default TitleDescription;