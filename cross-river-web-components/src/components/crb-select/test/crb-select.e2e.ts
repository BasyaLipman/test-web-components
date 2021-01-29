import { newE2EPage } from '@stencil/core/testing';

describe('crb-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crb-select></crb-select>');

    const element = await page.find('crb-select');
    expect(element).toHaveClass('hydrated');
  });
});
