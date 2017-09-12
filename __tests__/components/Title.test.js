import 'react-native';
import React from 'react';

import { Title } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Title />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
