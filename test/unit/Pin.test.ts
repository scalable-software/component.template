import * as help from "./Helper.js";

const given = (description, spec) => describe(`Given ${description}`, spec);
const and = (description, spec) => describe(`and ${description}`, spec);
const when = (description, spec) => describe(`when ${description}`, spec);
const then = (description, spec) => it(`then ${description}`, spec);

const Meta = {
  TAG: "Tag",
  ATTRIBUTE: "Attribute",
  OPERATION: "Operation",
  EVENT: "Event",
  GESTURE: "Gesture",
};

const Type = {
  META: "Metadata",
  CONFIG: "Configuration",
  STATE: "State",
  OPERATION: "Operation",
  EVENT: "Event",
  GESTURE: "Gesture",
  COMPOSITION: "Composition",
};

import { Pin, Tag } from "@scalable.software/pin.component";

given("Tag Type.CONFIG test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.CONFIG);
    setSpecProperty("spec", Meta.TAG);
  });
  and("Pin imported", () => {
    then("Pin is defined", () => {
      expect(Pin).toBeDefined();
    });
    and("Pin is defined", () => {
      then("Pin.Tag static getter is defined", () => {
        expect(Pin.Tag).toBeDefined();
      });
      and("Pin.Tag static getter is defined", () => {
        then("Pin.Tag is Tag", () => {
          expect(Pin.Tag).toBe(Tag);
        });
      });
    });
  });
});
