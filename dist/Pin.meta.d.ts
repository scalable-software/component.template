/**
 * @module Component
 */
export declare const Tag: "pin-component";
/**
 * HTML Attributes available to set
 * @category Metadata: State
 * @enum
 */
export declare const Attribute: {};
/**
 * HTML Attributes available to set
 * @category Metadata: State
 */
export type Attributes = typeof Attribute;
/**
 * @category Metadata: Operations
 * @enum
 */
export declare const Operation: {};
/**
 * @category Metadata: Operations
 */
export type Operations = (typeof Operation)[keyof typeof Operation];
/**
 * @category Metadata: Events
 * @enum
 */
export declare const Event: {};
/**
 * @category Metadata: Events
 */
export type Events = (typeof Event)[keyof typeof Event];
/**
 * @category Metadata: Gesture
 * @enum
 */
export declare const Gesture: {};
/**
 * @category Metadata: Gesture
 */
export type Gestures = (typeof Gesture)[keyof typeof Gesture];
/**
 * Event handler signature
 * @hidden
 */
export type Handler = (...args: any[]) => void;
