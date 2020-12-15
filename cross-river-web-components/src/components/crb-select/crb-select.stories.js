import { storiesOf } from '@storybook/html';
import readme from './readme.md';

storiesOf('CRB Select', module).add(
    'Default',
    () => {
        const select = document.createElement('crb-select');

        select.options = [
            { label: 'Test 1', value: 'Test 1' },
            { label: 'Test 2', value: 'Test 2' },
            { label: 'Test 3', value: 'Test 3' },
            { label: 'Test 4', value: 'Test 4' },
        ];

        return select;
    },
    {
        notes: {
            markdown: readme,
        },
    },
)
