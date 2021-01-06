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
  shadow: true,
})
export class CrbInput {
  @Prop() name: string
  @Prop() label: string

  @State() focused = false
  @State() value = ''

  @Event() inputChange: EventEmitter<string>

  handleFocus() {
    this.focused = true
  }

  handleBlur() {
    this.focused = false
  }

  // TODO: WHY ANY?
  handleChange(event: any) {
    const value  = event.target.value
    this.value = value;
    this.inputChange.emit(value)
  }

  render() {
    const inputId = `${this.name}-input`

    return (
      <Host>
        <div
          class={{
            container: true,
            focused: this.focused,
            filled: this.value.length > 0,
          }}
        >
          <label htmlFor={inputId}>{this.label}</label>
          <div class="placeholder">{this.label}</div>
          <input
            id={inputId}
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
