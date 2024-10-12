import * as help from "./Helper.js";
import { Type, Metadata, Config, Utility } from "./Helper.js";

const given = (description, spec) => describe(`Given ${description}`, spec);
const and = (description, spec) => describe(`and ${description}`, spec);
const when = (description, spec) => describe(`when ${description}`, spec);
const then = (description, spec) => it(`then ${description}`, spec);

import {
  Tag,
  Attribute,
  Operation,
  Event,
  Gesture,
} from "@scalable.software/component.template";

given("Metadata.Tag Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.TAG);
  });
  when("Tag imported", () => {
    then("Tag is defined", () => {
      expect(Tag).toBeDefined();
    });
  });
});

given("Metadata.ATTRIBUTE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.ATTRIBUTE);
  });
  and("Attribute imported", () => {
    then("Attribute is defined", () => {
      expect(Attribute).toBeDefined();
    });
    when("Attribute is defined", () => {
      // Attribute existence tests
      then("True is true", () => {
        expect(true).toBe(true);
      });
    });
  });
});

given("Metadata.STATE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.STATE);
  });
  when("States imported", () => {
    // State existence tests
    // State value tests
    then("True is true", () => {
      expect(true).toBe(true);
    });
  });
});

given("Metadata.OPERATION Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.OPERATION);
  });
  and("Operation imported", () => {
    then("Operation is defined", () => {
      expect(Operation).toBeDefined();
    });
    when("Operation is defined", () => {
      // Operation existence tests;
      then("True is true", () => {
        expect(true).toBe(true);
      });
    });
  });
});

given("Metadata.EVENT Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.EVENT);
  });
  and("Event imported", () => {
    then("Event is defined", () => {
      expect(Event).toBeDefined();
    });
    when("Event is defined", () => {
      // Event existence tests;
      then("True is true", () => {
        expect(true).toBe(true);
      });
    });
  });
});

given("Metadata.GESTURE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.GESTURE);
  });
  and("Gesture imported", () => {
    then("Gesture is defined", () => {
      expect(Gesture).toBeDefined();
    });
    when("Gesture is defined", () => {
      // Gesture existence tests;
      then("True is true", () => {
        expect(true).toBe(true);
      });
    });
  });
});
