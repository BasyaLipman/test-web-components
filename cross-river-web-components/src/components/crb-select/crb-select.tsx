import { Component, h, Prop, State, FunctionalComponent } from '@stencil/core'

export type Option = {
  label: string
  value: string
}

type MenuProps = {
  options: Option[]
}
const Menu: FunctionalComponent<MenuProps> = ({ options }) => (
  <div class="menu">
    {options.map(option => (
      <div class="menu-item">{option.label}</div>
    ))}
  </div>
)

@Component({
  tag: 'crb-select',
  styleUrl: 'crb-select.css',
  shadow: true,
})
export class CrbSelect {
  /**
   * Options to display
   */
  @Prop() options!: Option[]
  @Prop() label: string
  @Prop() name: string

  @State() focused = false
  @State() inputValue = ''

  handleInputFocus = () => {
    this.focused = true
  }

  handleInputBlur = () => {
    this.focused = false
  }

  handleInputChange = (event: CustomEvent<string>) => {
    this.inputValue = event.detail
  }

  render() {
    const menuOpen = this.focused || this.inputValue.length > 0
    const filteredOptions = this.options.filter(option =>
      option.label.toLowerCase().includes(this.inputValue.toLocaleLowerCase()),
    )

    return (
      <div class="container">
        <crb-input
          // label={this.label}
          // name={this.name}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onInputChange={this.handleInputChange}
        />
        {menuOpen && <Menu options={filteredOptions} />}
      </div>
    )
  }
}
