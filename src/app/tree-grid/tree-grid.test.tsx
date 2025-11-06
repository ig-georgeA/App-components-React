import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import TreeGrid from './tree-grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders TreeGrid component', () => {
  const wrapper = render(<TreeGrid />);
  expect(wrapper).toBeTruthy();
});