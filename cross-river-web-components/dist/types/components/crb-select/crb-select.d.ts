export declare type Option = {
  label: string;
  value: string;
};
export declare class CrbSelect {
  /**
   * Options to display
   */
  options: Option[];
  label: string;
  name: string;
  focused: boolean;
  inputValue: string;
  handleInputFocus: () => void;
  handleInputBlur: () => void;
  handleInputChange: (event: CustomEvent<string>) => void;
  render(): any;
}
