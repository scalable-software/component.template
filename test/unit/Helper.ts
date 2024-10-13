export const define = (tag: string, component) =>
  !customElements.get(tag) && customElements.define(tag, component);

export const defined = async (tag) => await customElements.whenDefined(tag);

export const create = <T extends Element>(tag) =>
  document.createElement(tag) as T;

export const setAttributes = (element, attributes) => (
  Object.entries(attributes).forEach(([name, value]) =>
    element.setAttribute(name, value)
  ),
  element
);

export const add = <T extends Element>(tag, attributes?: any): T =>
  append(
    attributes != null
      ? setAttributes(create<T>(tag), attributes)
      : create<T>(tag)
  );

export const append = (element) => document.body.appendChild(element);

export const remove = (id) =>
  (<HTMLElement>document.getElementById(id)).remove();

export const loadTemplate = async (templateUrl) => {
  try {
    const response = await fetch(templateUrl);
    const html = await response.text();
    const template = new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector("template");
    document.body.appendChild(template as Node);
  } catch (error) {
    console.warn("Error fetching external template:", error);
  }
};

export const appendTemplate = (id, template?) => {
  let HTMLTemplate: HTMLTemplateElement = document.createElement("template");
  HTMLTemplate.innerHTML = template ?? "";
  HTMLTemplate.id = id;
  document.body.appendChild(HTMLTemplate);
  return HTMLTemplate;
};

export const hasSetter = (obj, propName) => {
  while (obj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, propName);
    if (descriptor) return !!descriptor.set;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

export const Type = {
  METADATA: "Metadata",
  UTILITY: "Utility",
  CONFIGURATION: "Configuration",
  STATE: "State",
  OPERATION: "Operation",
  EVENT: "Event",
  GESTURE: "Gesture",
  COMPOSITION: "Composition",
};

export const Metadata = {
  TAG: "Tag",
  ATTRIBUTE: "Attribute",
  STATE: "State",
  OPERATION: "Operation",
  EVENT: "Event",
  GESTURE: "Gesture",
};

export const Utility = {
  TEMPLATE: "Template",
  GET: "get",
};

export const Configuration = {
  TAG: "Tag",
  ATTRIBUTE: "Attribute",
};

export const Composition = {
  TEMPLATE: "Template",
  CSS: "css",
};
