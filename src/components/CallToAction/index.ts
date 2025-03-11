import "./style.css";
import Button from "../Button";

function CallToAction() {
    return /* html */`
        <div class="container-fluid mt-5 call-to-action">
            <div class="text-center py-5">
                <h2 class="mb-5 mx-auto px-5">Pellentesque suscipit fringilla libero eu.</h2>
                ${Button("Get a demo", true, true)}
            </div>
        </div>
    `;
}

export default CallToAction;