import React from 'react';
import { createRoot } from 'react-dom/client';
import ResourceManagement from '../resource-management/index';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<ResourceManagement />);
});
