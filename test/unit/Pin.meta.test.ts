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

import {
  Tag,
  Attribute,
  Operation,
  Event,
  Gesture,
} from "@scalable.software/pin.component";

given("Meta.Tag Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.META);
    setSpecProperty("spec", Meta.TAG);
  });
  when("module imported", () => {
    then("Tag is defined", () => {
      expect(Tag).toBeDefined();
    });
  });
});

given("Meta.ATTRIBUTE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.META);
    setSpecProperty("spec", Meta.ATTRIBUTE);
  });
  when("module imported", () => {
    then("Attribute is defined", () => {
      expect(Attribute).toBeDefined();
    });
  });
});

given("Meta.OPERATION Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.META);
    setSpecProperty("spec", Meta.OPERATION);
  });
  when("module imported", () => {
    then("Operation is defined", () => {
      expect(Operation).toBeDefined();
    });
  });
});

given("Meta.EVENT Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.META);
    setSpecProperty("spec", Meta.EVENT);
  });
  when("module imported", () => {
    then("Event is defined", () => {
      expect(Event).toBeDefined();
    });
  });
});

given("Meta.GESTURE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.META);
    setSpecProperty("spec", Meta.GESTURE);
  });
  when("module imported", () => {
    then("Gesture is defined", () => {
      expect(Gesture).toBeDefined();
    });
  });
});
