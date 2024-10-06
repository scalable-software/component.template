/**
 * @module Component
 */
import { Component } from "@scalable.software/component";
import { Tag, Attribute } from "./Index.js";
/**
 * A pin button that can be:
 * 1. pinned and unpinned
 * 2. hidden and shown
 * @category Components
 */
export class ComponentTemplate extends Component {
    /**
     * The tag name of the component
     * @category Configuration
     */
    static get Tag() {
        return Tag;
    }
    /**
     * Only attributes defined the Attributes object will be observed in DOM
     * @category Configuration
     */
    static get Attributes() {
        return Attribute;
    }
    /**
     * Wait for the component to be defined before returning a collection of the component in the DOM
     * @category Utilities
     */
    static get = async () => (await customElements.whenDefined(ComponentTemplate.Tag)) &&
        Array.from(document.querySelectorAll(ComponentTemplate.Tag));
}
