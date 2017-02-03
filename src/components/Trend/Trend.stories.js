import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from '../../helpers/story.helpers';
import { range } from '../../utils';
import Trend from './Trend';

storiesOf('Trend', module)
  .addDecorator(createContainerDecorator())
  .add('with 3 points', () => (
    <Trend
      smooth
      data={[0, 10, 9, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with a handful of numbers', () => (
    <Trend
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with a fixed width/height', () => (
    <Trend
      data={[0, 0.25, 0, 0.5, 0, 0.75, 0, 1]}
      width={500}
      height={100}
      style={{ display: 'block' }}
    />
  ))
  .add('with custom stroke props', () => (
    <Trend
      data={[0, 0.25, 0, 0.5, 0, 0.75, 0, 1]}
      strokeWidth={5}
      stroke="red"
      style={{ display: 'block' }}
    />
  ))
  .add('with smooth corners (default radius)', () => (
    <Trend
      smooth
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with smooth corners (huge radius)', () => (
    <Trend
      smooth
      radius={50}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with tons of data', () => {
    const data = range(200).map(() => Math.random());

    return (
      <Trend
        smooth
        radius={5}
        data={data}
        style={{ display: 'block' }}
      />

    );
  })
  .add('with a 2-color gradient', () => (
    <Trend
      smooth
      color={['#004358', '#BEDB39']}
      strokeWidth={5}
      radius={10}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0, 4, 0, 3, 7, 3, 4, 3, 2, 6, 9]}
      style={{ display: 'block' }}
    />

  ));
