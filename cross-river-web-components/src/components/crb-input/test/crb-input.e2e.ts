import { newE2EPage } from '@stencil/core/testing';

describe('crb-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crb-input></crb-input>');

    const element = await page.find('crb-input');
    expect(element).toHaveClass('hydrated');
  });
});
