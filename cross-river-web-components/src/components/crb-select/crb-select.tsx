import { Component, Host, h, Prop } from '@stencil/core';

export type Option = {
    label: string;
    value: string;
};

@Component({
    tag: 'crb-select',
    styleUrl: 'crb-select.css',
    shadow: true,
})
export class CrbSelect {
    /**
     * Options to display
     */
    @Prop() options!: Option[];

    render() {
        return (
            <Host>
                <select>
                    {this.options?.map(option => (
                        <option>{option.label}</option>
                    ))}
                </select>
            </Host>
        );
    }
}
