/**
 * @module Component
 */

export const Tag = "component-template" as const;

/**
 * HTML Attributes available to set
 * @category Metadata: State
 * @enum
 */
export const Attribute = {} as const;
/**
 * HTML Attributes available to set
 * @category Metadata: State
 */
export type Attributes = typeof Attribute;

/**
 * @category Metadata: Operations
 * @enum
 */
export const Operation = {} as const;

/**
 * @category Metadata: Operations
 */
export type Operations = (typeof Operation)[keyof typeof Operation];

/**
 * @category Metadata: Events
 * @enum
 */
export const Event = {} as const;
/**
 * @category Metadata: Events
 */
export type Events = (typeof Event)[keyof typeof Event];

/**
 * @category Metadata: Gesture
 * @enum
 */
export const Gesture = {} as const;
/**
 * @category Metadata: Gesture
 */
export type Gestures = (typeof Gesture)[keyof typeof Gesture];

/**
 * Event handler signature
 * @hidden
 */
export type Handler = (...args: any[]) => void;
