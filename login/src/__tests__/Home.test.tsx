import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Home } from '../components/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const { container, debug } = render(<Home />);
  debug(container);
  expect(container.firstChild).toMatchSnapshot();
});
