import constructor, { name } from './element';
import {
    dependencies
} from './config'

const { VamtigerBrowserMethod } = window;
const { defineCustomElement, loadScript } = VamtigerBrowserMethod;
const params = {
    name,
    constructor
};

async function load() {
    await Promise.all(dependencies.map(src => loadScript({ src })));

    defineCustomElement(params);
}

load().catch(console.warn);