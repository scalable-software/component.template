/**
 * @module Component
 */
import { Component } from "@scalable.software/component";

import { Tag } from "./Index.js";

/**
 * A pin button that can be:
 * 1. pinned and unpinned
 * 2. hidden and shown
 * @category Components
 */
export class Pin extends Component {
  /**
   * The tag name of the component
   * @category Configuration
   */
  public static get Tag() {
    return Tag;
  }
}
