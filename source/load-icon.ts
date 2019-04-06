import {
    IDataset,
    ILoadIcon,
    Selector,
    IconFigure
} from './types';
import getTemplate from './get-template';
import { name as slot } from './element';

export default async function ({ element }: ILoadIcon) {
    const dataset = element.dataset as IDataset;
    const {
        color
    } = dataset;
    const selector = dataset.hasOwnProperty(IconFigure.facebook) && Selector.facebook
        || dataset.hasOwnProperty(IconFigure.twitter) && Selector.twitter
        || dataset.hasOwnProperty(IconFigure.instagram) && Selector.instagram;
    const pathSelector = selector && `${selector} ${Selector.iconPath}`;
    const icon = selector && getTemplate({
        selector
    });
    const iconPath = icon && pathSelector && icon.querySelector<SVGPathElement>(pathSelector);

    if (iconPath && color) {
        iconPath.style.fill = color;
    }

    if (icon && iconPath) {
        icon.slot = slot;

        element.appendChild(icon);
    }
}