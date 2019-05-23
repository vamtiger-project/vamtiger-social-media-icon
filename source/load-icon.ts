import {
    IDataset,
    ILoadIcon,
    Selector,
    IconFigure,
    JsonLd,
    StringConstant,
    EventName
} from './types';
import getTemplate from './get-template';
import { name as slot } from './element';
import setFillColor from './set-fill-color';

const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;
const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};

export default async function ({ element }: ILoadIcon) {
    const dataset = element.dataset as IDataset;
    const jsonLdUrl = dataset.hasOwnProperty(IconFigure.twitter) && JsonLd.twitter
        || dataset.hasOwnProperty(IconFigure.facebook) && JsonLd.facebook
        || dataset.hasOwnProperty(IconFigure.instagram) && JsonLd.instagram;
    const vamtigerResponsiveSvg = jsonLdUrl && getTemplate({
        selector: Selector.vamtigerResponsiveSvg,
        attributes: {
            'data-json-ld': jsonLdUrl
        }
    });
    const inconLoadedEvent = new CustomEvent(
        EventName.iconLoaded,
        eventParams
    );
    const selector = dataset.hasOwnProperty(IconFigure.facebook) && Selector.facebook
        || dataset.hasOwnProperty(IconFigure.twitter) && Selector.twitter
        || dataset.hasOwnProperty(IconFigure.instagram) && Selector.instagram;
    const icon = vamtigerResponsiveSvg
        || selector && getTemplate({ selector });

    if (icon) {
        icon.slot = slot;

        element.appendChild(icon);

        if (vamtigerResponsiveSvg) {
            vamtigerResponsiveSvg.addEventListener('svgLoaded', handleLoad);
        } else {
            setFillColor({ element });
        }
    }

    function handleLoad(event: Event) {
        (vamtigerResponsiveSvg as HTMLElement).removeEventListener('svgLoaded', handleLoad);
        (vamtigerResponsiveSvg as HTMLElement).dispatchEvent(inconLoadedEvent);
        setFillColor({ element });

        dataset.loaded = nothing;
    }
}