import { EventEmitter } from '../../stencil-public-runtime';
export declare class CrbInput {
  label: string;
  value: string;
  name: string;
  focused: boolean;
  inputChange: EventEmitter<string>;
  handleFocus(): void;
  handleBlur(): void;
  handleChange(event: any): void;
  render(): any;
}
