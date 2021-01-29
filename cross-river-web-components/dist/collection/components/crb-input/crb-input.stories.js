import { storiesOf } from '@storybook/html';
import readme from './readme.md';

storiesOf('CRB Input', module).add(
  'Default',
  () => {
    const select = document.createElement('crb-input');
    select.label = 'An input';
    select.name = 'test'
    return select;
  },
  {
    notes: {
      markdown: readme,
    },
  },
);
