import { Component, Host, Prop, State, Event, h, } from '@stencil/core';
export class CrbInput {
  constructor() {
    this.focused = false;
  }
  handleFocus() {
    this.focused = true;
  }
  handleBlur() {
    this.focused = false;
  }
  handleChange(event) {
    this.inputChange.emit(event.target.value);
  }
  render() {
    const inputId = `${this.value}-input`;
    return (h(Host, null,
      h("div", { class: {
          container: true,
          focused: this.focused,
          filled: this.value && this.value.length > 0,
        } },
        h("label", { htmlFor: inputId }, this.label),
        h("div", { class: "placeholder" }, this.label),
        h("input", { id: inputId, name: this.name, onInput: event => this.handleChange(event), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), value: this.value }))));
  }
  static get is() { return "crb-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["crb-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["crb-input.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "value": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
  static get states() { return {
    "focused": {}
  }; }
  static get events() { return [{
      "method": "inputChange",
      "name": "inputChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
