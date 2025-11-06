import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import CSSGridLayout from './css-grid-layout';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders CSSGridLayout component', () => {
  const wrapper = render(<CSSGridLayout />);
  expect(wrapper).toBeTruthy();
});