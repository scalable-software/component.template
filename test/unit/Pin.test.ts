import * as help from "./Helper.js";

const given = (description, spec) => describe(`Given ${description}`, spec);
const and = (description, spec) => describe(`and ${description}`, spec);
const when = (description, spec) => describe(`when ${description}`, spec);
const then = (description, spec) => it(`then ${description}`, spec);

const Type = {
  CONFIG: "Configuration",
  STATE: "State",
  OPERATION: "Operation",
  EVENT: "Event",
  GESTURE: "Gesture",
  COMPOSITION: "Composition",
};
