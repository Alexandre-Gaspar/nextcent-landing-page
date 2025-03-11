import './style.css';

function Button(text: string, showBackground: Boolean= true, pattern: boolean = true): string {
    if (showBackground) {
        if (pattern) {
            return `
                <button class="btn bg-green text-white">${text}</button>
            `;
        } else {
            return `
                <button class="btn bg-green non-default text-white">${text}</button>
            `;
        }
    }
    return `
        <button class="btn text-green">${text}</button>
    `;
}

export default Button;