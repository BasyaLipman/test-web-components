import { r as registerInstance, c as createEvent, h, H as Host } from './index-d2bbe768.js';

const crbInputCss = ":host{display:block}.container{position:relative;font-family:var(--main-font-family)}.placeholder{color:var(--color-dark-gray);font-family:var(--main-font-family);font-weight:normal;position:absolute;left:10px;top:15px;pointer-events:none}.focused .placeholder,.filled .placeholder{display:none}label{position:absolute;font-weight:600;font-size:0.75rem;letter-spacing:1px;top:10px;opacity:0;left:10px;transition:all 200ms;pointer-events:none;text-transform:uppercase}.focused label,.filled label{top:5px;opacity:1}input{padding:20px 10px;color:var(--color-dark-gray);font-family:var(--main-font-family);font-weight:normal;font-size:1rem;border:1px solid var(--color-light-gray);border-radius:var(--border-radius-form-elements);outline:none;line-height:1em;width:100%}input:focus{outline:0}";

const CrbInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChange = createEvent(this, "inputChange", 7);
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
    return (h(Host, null, h("div", { class: {
        container: true,
        focused: this.focused,
        filled: this.value && this.value.length > 0,
      } }, h("label", { htmlFor: inputId }, this.label), h("div", { class: "placeholder" }, this.label), h("input", { id: inputId, name: this.name, onInput: event => this.handleChange(event), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), value: this.value }))));
  }
};
CrbInput.style = crbInputCss;

const crbSelectCss = ":host{display:block}.container{font-family:var(--main-font-family)}.menu{color:var(--color-dark-gray);font-family:var(--main-font-family);font-weight:normal;font-size:1rem;border:1px solid var(--color-light-gray);border-radius:var(--border-radius-form-elements);outline:none;line-height:1em;width:100%}";

const Menu = ({ options }) => (h("div", { class: "menu" }, options.map(option => (h("div", { class: "menu-item" }, option.label)))));
const CrbSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "container" }, h("crb-input", { label: this.label, name: this.name, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onInputChange: this.handleInputChange }), menuOpen && h(Menu, { options: filteredOptions })));
  }
};
CrbSelect.style = crbSelectCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { CrbInput as crb_input, CrbSelect as crb_select, MyComponent as my_component };
