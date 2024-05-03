import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingPage from './src/components/BookingPage';

describe('BookingPage Component', () => {
  it('renders without crashing', () => {
    render(<BookingPage />);
  });

  it('disables the Reserve button when form fields are empty', () => {
    const { getByText, getByLabelText } = render(<BookingPage />);
    const reserveButton = getByText('Reserve a Table');

    expect(reserveButton).toBeDisabled();
  });

  it('enables the Reserve button when all form fields are filled', () => {
    const { getByText, getByLabelText } = render(<BookingPage />);
    const indoorRadio = getByLabelText('Indoor Seating');
    const dateInput = getByLabelText('Date');
    const dinersDropdown = getByLabelText('Number of Diners');
    const occasionsDropdown = getByLabelText('Occasions');
    const timeDropdown = getByLabelText('Time');
    const reserveButton = getByText('Reserve a Table');

    fireEvent.change(indoorRadio, { target: { value: 'Indoor Seating' } });
    fireEvent.change(dateInput, { target: { value: '2024-04-15' } });
    fireEvent.change(dinersDropdown, { target: { value: '2 Diners' } });
    fireEvent.change(occasionsDropdown, { target: { value: 'Birthday' } });
    fireEvent.change(timeDropdown, { target: { value: '7:00 pm' } });

    expect(reserveButton).toBeEnabled();
  });
});
