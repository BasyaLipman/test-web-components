import { storiesOf } from '@storybook/html'
import readme from './readme.md'

function createOptions() {
  const prefixes = ['Cross', 'River', 'Web', 'Components']
  const options = []

  prefixes.forEach(prefix => {
    for (let i = 0; i < 19; i++) {
      const label = `${prefix} Test ${i + 1}`
      const value = label.toLowerCase()
      options.push({ label, value })
    }
  })

  return options
}

storiesOf('CRB Select', module).add(
  'Default',
  () => {
    const select = document.createElement('crb-select')
    select.options = createOptions()
    select.label = 'A select input'
    select.name = 'select_input_test'

    return select
  },
  {
    notes: {
      markdown: readme,
    },
  },
)
