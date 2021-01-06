import { newSpecPage } from '@stencil/core/testing';
import { CrbInput } from '../crb-input';

describe('crb-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CrbInput],
      html: `<crb-input></crb-input>`,
    });
    expect(page.root).toEqualHtml(`
      <crb-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </crb-input>
    `);
  });
});
