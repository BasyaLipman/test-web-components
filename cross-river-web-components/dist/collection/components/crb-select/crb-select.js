import { Component, h, Prop, State } from '@stencil/core';
const Menu = ({ options }) => (h("div", { class: "menu" }, options.map(option => (h("div", { class: "menu-item" }, option.label)))));
export class CrbSelect {
  constructor() {
    this.focused = false;
    this.inputValue = '';
    this.handleInputFocus = () => {
      this.focused = true;
    };
    this.handleInputBlur = () => {
      this.focused = false;
    };
    this.handleInputChange = (event) => {
      this.inputValue = event.detail;
    };
  }
  render() {
    const menuOpen = this.focused || this.inputValue.length > 0;
    const filteredOptions = this.options.filter(option => option.label.toLowerCase().includes(this.inputValue.toLocaleLowerCase()));
    return (h("div", { class: "container" },
      h("crb-input", { label: this.label, name: this.name, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onInputChange: this.handleInputChange }),
      menuOpen && h(Menu, { options: filteredOptions })));
  }
  static get is() { return "crb-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["crb-select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["crb-select.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Option[]",
        "resolved": "Option[]",
        "references": {
          "Option": {
            "location": "local"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Options to display"
      }
    },
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
    "focused": {},
    "inputValue": {}
  }; }
}
