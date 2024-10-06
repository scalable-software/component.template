import * as help from "./Helper.js";

import { Config, Metadata, Type, Utility } from "./Helper.js";

const given = (description, spec) => describe(`Given ${description}`, spec);
const and = (description, spec) => describe(`and ${description}`, spec);
const when = (description, spec) => describe(`when ${description}`, spec);
const then = (description, spec) => it(`then ${description}`, spec);

import {
  ComponentTemplate,
  Tag,
  Attribute,
} from "@scalable.software/component.template";

// #region Configuration
given("Config.TAG Type.CONFIG test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.CONFIG);
    setSpecProperty("spec", Config.TAG);
  });
  and("ComponentTemplate imported", () => {
    then("ComponentTemplate is defined", () => {
      expect(ComponentTemplate).toBeDefined();
    });
    and("ComponentTemplate is defined", () => {
      then("ComponentTemplate.Tag static getter is defined", () => {
        expect(ComponentTemplate.Tag).toBeDefined();
      });
      and("ComponentTemplate.Tag static getter is defined", () => {
        then("ComponentTemplate.Tag is Tag", () => {
          expect(ComponentTemplate.Tag).toBe(Tag);
        });
      });
    });
  });
});
given("Config.ATTRIBUTE Type.CONFIG test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.CONFIG);
    setSpecProperty("spec", Config.ATTRIBUTE);
  });
  and("ComponentTemplate imported", () => {
    then("ComponentTemplate is defined", () => {
      expect(ComponentTemplate).toBeDefined();
    });
    and("ComponentTemplate is defined", () => {
      then("ComponentTemplate.Attributes static getter is defined", () => {
        expect(ComponentTemplate.Attributes).toBeDefined();
      });
      and("ComponentTemplate.Attributes static getter is defined", () => {
        then("ComponentTemplate.Attributes is Attribute", () => {
          expect(ComponentTemplate.Attributes).toBe(Attribute);
        });
      });
    });
  });
});
// #endregion Configuration

// #region Utility
given("Utility.GET Type.UTILITY test", () => {
  beforeEach(() => {
    setSpecProperty("type", Type.UTILITY);
    setSpecProperty("spec", Utility.GET);
  });
  then("ComponentTemplate.get static method is defined", () => {
    expect(ComponentTemplate.get).toBeDefined();
  });
  and("ComponentTemplate is defined in custom element registry", () => {
    beforeEach(() => {
      help.define(ComponentTemplate.Tag, ComponentTemplate);
    });
    and("a new component is added to DOM", () => {
      let component: ComponentTemplate;
      beforeEach(() => {
        component = help.add<ComponentTemplate>(ComponentTemplate.Tag);
      });
      afterEach(() => {
        component.remove();
      });
      when("ComponentTemplate.get() is called", () => {
        let components: ComponentTemplate[];
        beforeEach(async () => {
          components = await ComponentTemplate.get();
        });
        then("components is defined", () => {
          expect(components).toBeDefined();
        });
        then("components is an array", () => {
          expect(components).toBeInstanceOf(Array);
        });
        then("items in array of components match components in DOM", () => {
          expect(components).toEqual([component]);
        });
      });
    });
  });
});
// #endregion Utility
