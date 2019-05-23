import * as VamtigerBrowserSupport from 'vamtiger-browser-method/build/types';
import VamtigerSocialMediaIcon from './element';

export enum StringConstant {
    nothing = '',
    newline = '\n'
}

export enum Selector {
    style = 'style',
    slot = 'slot',
    figure = 'figure',
    figcaption = 'figcaption',
    facebook = 'figure[data-facebook]',
    twitter = 'figure[data-twitter]',
    instagram = 'figure[data-instagram]',
    iconPath = 'svg > path',
    vamtigerResponsiveSvg = 'vamtiger-responsive-svg'
}

export enum IconFigure {
    twitter = 'twitter',
    instagram = 'instagram',
    facebook = 'facebook'
}

export enum JsonLd {
    twitter = 'https://unpkg.com/vamtiger-twitter-icon-json-ld@latest',
    facebook = 'https://unpkg.com/vamtiger-facebook-icon-json-ld@latest',
    instagram = 'https://unpkg.com/vamtiger-instagram-icon-json-ld@latest'
}

export enum EventName {
    iconLoaded = 'iconLoaded'
}

export enum ObservedAttributes {

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
    'data-json-ld'?: string;
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
    loaded?: string;
}

export interface ILoadIcon {
    element: VamtigerSocialMediaIcon;
}

export interface ISetFillColor {
    element: VamtigerSocialMediaIcon;
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends
        Selector.figure
        | Selector.figcaption
        | Selector.facebook
        | Selector.twitter
        | Selector.instagram
        | Selector.figcaption
        | Selector.vamtigerResponsiveSvg
            ? HTMLElement :
    null;