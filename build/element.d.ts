import { ObservedAttribute } from './types';
export declare const name = "vamtiger-social-media-icon";
export default class VamtigerSocialMediaIcon extends HTMLElement {
    constructor();
    static readonly observedAttributes: never[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
