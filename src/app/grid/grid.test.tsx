import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Grid from './grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Grid component', () => {
  const wrapper = render(<Grid />);
  expect(wrapper).toBeTruthy();
});