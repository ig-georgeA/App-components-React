import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import MasterDetailGrid from './master-detail-grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders MasterDetailGrid component', () => {
  const wrapper = render(<MasterDetailGrid />);
  expect(wrapper).toBeTruthy();
});