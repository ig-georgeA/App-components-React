import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Carousel from './carousel';
import 'element-internals-polyfill';

test('renders Carousel component', () => {
  const wrapper = render(<Carousel />);
  expect(wrapper).toBeTruthy();
});