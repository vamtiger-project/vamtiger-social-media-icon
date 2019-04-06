"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const get_template_1 = require("./get-template");
const element_1 = require("./element");
async function default_1({ element }) {
    const dataset = element.dataset;
    const { color } = dataset;
    const selector = dataset.hasOwnProperty(types_1.IconFigure.facebook) && types_1.Selector.facebook
        || dataset.hasOwnProperty(types_1.IconFigure.twitter) && types_1.Selector.twitter
        || dataset.hasOwnProperty(types_1.IconFigure.instagram) && types_1.Selector.instagram;
    const pathSelector = selector && `${selector} ${types_1.Selector.iconPath}`;
    const icon = selector && get_template_1.default({
        selector
    });
    const iconPath = icon && pathSelector && icon.querySelector(pathSelector);
    if (iconPath && color) {
        iconPath.style.fill = color;
    }
    if (icon && iconPath) {
        icon.slot = element_1.name;
        element.appendChild(icon);
    }
}
exports.default = default_1;
//# sourceMappingURL=load-icon.js.map