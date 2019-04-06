import VamtigerSocialMediaIcon from './element';
export declare enum StringConstant {
    nothing = "",
    newline = "\n"
}
export declare enum Selector {
    style = "style",
    slot = "slot",
    figure = "figure",
    figcaption = "figcaption",
    facebook = "figure[data-facebook]",
    twitter = "figure[data-twitter]",
    instagram = "figure[data-instagram]",
    iconPath = "svg > path"
}
export declare enum IconFigure {
    twitter = "twitter",
    instagram = "instagram",
    facebook = "facebook"
}
export declare enum ObservedAttributes {
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IAttributes {
    id?: string;
    for?: string;
    name?: string;
}
export interface IProperties {
    innerHTML?: string;
}
export interface IDataset extends DOMStringMap {
    twitter?: IconFigure.twitter;
    facebook?: IconFigure.facebook;
    instagram?: IconFigure.instagram;
    color?: string;
    hoverColor?: string;
}
export interface ILoadIcon {
    element: VamtigerSocialMediaIcon;
}
export declare type AttributesKey = keyof IAttributes;
export declare type ObservedAttribute = keyof typeof ObservedAttributes;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.style ? HTMLStyleElement : P['selector'] extends Selector.slot ? HTMLSlotElement : P['selector'] extends Selector.figure | Selector.figcaption | Selector.facebook | Selector.twitter | Selector.instagram | Selector.figcaption ? HTMLElement : null;
