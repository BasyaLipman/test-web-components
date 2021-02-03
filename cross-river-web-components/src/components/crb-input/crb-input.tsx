import {
  Component,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
} from '@stencil/core'

@Component({
  tag: 'crb-input',
  styleUrl: 'crb-input.css',
  shadow: false,
})
export class CrbInput {

  @Prop() label: string
  @Prop() value: string
  @Prop() name: string

  @State() focused = false

  @Event() inputChange: EventEmitter<string>

  handleFocus() {
    this.focused = true
  }

  handleBlur() {
    this.focused = false
  }

  handleChange(event: any) {
    console.log('change has occurred, value: ', event.target.value);
    this.inputChange.emit(event.target.value)
  }

  render() {
    const inputId = `${this.value}-input`

    return (
      <Host>
        <div
          class={{
            container: true,
            focused: this.focused,
            filled: this.value && this.value.length > 0,
          }}
        >
          <label htmlFor={inputId}>{this.label}</label>
          <div class="placeholder">{this.label}</div>
          <input
            id={inputId}
            name={this.name}
            onInput={event => this.handleChange(event)}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleBlur()}
            value={this.value}
          />
        </div>
      </Host>
    )
  }
}
