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
      then("Attribute is an object", () => {
        expect(typeof Attribute).toBe("object");
      });
    });
  });
});

given("Metadata.STATE Type.Metadata test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.METADATA);
    setSpecProperty("spec", Metadata.STATE);
  });
  and("States imported", () => {
    and("<State> is defined", () => {
      then("<State> is and object", () => {
        const State = {};
        expect(typeof State).toBe("object");
      });
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
      then("Operation is an object", () => {
        expect(typeof Operation).toBe("object");
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
      then("Event is an object", () => {
        expect(typeof Event).toBe("object");
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
      then("Gesture is an object", () => {
        expect(typeof Gesture).toBe("object");
      });
    });
  });
});
