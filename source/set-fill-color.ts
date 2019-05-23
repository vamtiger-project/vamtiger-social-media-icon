import {
    ISetFillColor,
    IDataset,
    Selector
} from './types';

export default function({ element }: ISetFillColor) {
    const dataset = element.dataset as IDataset;
    const {
        color
    } = dataset;
    const iconPath = element.querySelector<SVGPathElement>(Selector.iconPath);

    if (iconPath && color) {
        iconPath.style.fill = color;
    }
}