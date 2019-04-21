import {
    Selector,
    ObservedAttribute
} from './types';
import css from './css/document-index';
import getTemplate from './get-template';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import loadIcon from './load-icon';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
export const name = 'vamtiger-social-media-icon';

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerSocialMediaIcon extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const figureSlot = getTemplate({
            selector: Selector.slot,
            attributes: {
                name
            }
        });
        const elements = [
            stylesheet,
            figureSlot
        ];

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        const element = this;

        await loadIcon({ element });
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}