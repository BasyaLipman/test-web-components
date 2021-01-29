import { newSpecPage } from '@stencil/core/testing';
import { CrbSelect } from '../crb-select';

describe('crb-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CrbSelect],
      html: `<crb-select></crb-select>`,
    });
    expect(page.root).toEqualHtml(`
      <crb-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </crb-select>
    `);
  });
});
