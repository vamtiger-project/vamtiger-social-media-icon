"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = require("../node_modules/vamtiger-browser-method/source/load-script");
const types_1 = require("./types");
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const config_1 = require("./config");
const load_icon_1 = require("./load-icon");
exports.name = 'vamtiger-social-media-icon';
document_index_1.default && load_script_1.default({ name: exports.name, css: document_index_1.default })
    .catch(console.error);
class VamtigerSocialMediaIcon extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const figureSlot = get_template_1.default({
            selector: types_1.Selector.slot,
            attributes: {
                name: exports.name
            }
        });
        const elements = [
            stylesheet,
            figureSlot
        ];
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    async connectedCallback() {
        const element = this;
        await load_icon_1.default({ element });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}
exports.default = VamtigerSocialMediaIcon;
//# sourceMappingURL=element.js.map