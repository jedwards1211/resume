import React from 'react'
import { storiesOf } from '@storybook/react'
import Resume from '../src/Resume'
import data from '../src/data'

storiesOf('resume', module)
  .add('Resume', () => (
    <Resume data={data} />
  ))

