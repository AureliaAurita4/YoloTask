import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { GET_COUNTRIES } from './apollo/queries';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: [
          { name: 'Estonia', code: 'EE' },
          { name: 'Ukraine', code: 'UA'  },
        ],
      },
    },
  },
];

test('renders App and filters countries', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await waitFor(() => expect(screen.getByText('Country List')).toBeInTheDocument());

  screen.debug();

  await waitFor(() => expect(screen.getByText('Estonia')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('EE')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Ukraine')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('UA')).toBeInTheDocument());

  const input = screen.getByPlaceholderText('Filter by code');
  fireEvent.change(input, { target: { value: 'EE' } });

  expect(screen.getByText('Estonia')).toBeInTheDocument();
  expect(screen.queryByText('Ukraine')).not.toBeInTheDocument();
});
