import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import HierarchicalGrid from './hierarchical-grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders HierarchicalGrid component', () => {
  const wrapper = render(<HierarchicalGrid />);
  expect(wrapper).toBeTruthy();
});