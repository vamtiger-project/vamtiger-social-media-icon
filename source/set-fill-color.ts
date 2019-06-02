import {
    ISetFillColor,
    IDataset,
    Selector
} from './types';

export default function({ element }: ISetFillColor) {
    const dataset = element.dataset as IDataset;
    const {
        color,
        triangleColor
    } = dataset;
    const iconPath = element.querySelector<SVGPathElement>(Selector.iconPath);
    const youtubeTriangle = element.querySelector<SVGPolygonElement>(Selector.youtubeTriangle);

    if (iconPath && color) {
        iconPath.style.fill = color;
    }

    if (youtubeTriangle && triangleColor) {
        youtubeTriangle.style.fill = triangleColor;
    }
}