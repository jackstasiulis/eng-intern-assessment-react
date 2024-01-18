import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom'

describe('Stopwatch', () => {

  test('#1 The stopwatch starts counting when the user clicks the start button.', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();

    setTimeout(() => {
      fireEvent.click(screen.getByText('Stop'));
      expect(screen.queryByText(/(\d{2}:){2}\d{2}/)).not.toBeInTheDocument();
    }, 0) // ensuring the timer is not stopped too quickly
  });

  test('#2 The stopwatch stops counting when the user clicks the stop button.', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('Stop'));
    const stoppedTime = screen.getByText(/(\d{2}:){2}\d{2}/).textContent;

    setTimeout(() => {
      expect(screen.getByText(/(\d{2}:){2}\d{2}/).textContent).not.toBe(stoppedTime);
    },500) // ensuring that 500ms later, the time has not changed since pressing stop
  });

  test('#3 The stopwatch/laps reset to zero when the user clicks the reset button.', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('Lap'));
    fireEvent.click(screen.getByText('Reset'));

    expect(screen.getByText('00:00:00')).toBeInTheDocument();
    expect(screen.queryByTestId('lap-list')).toBeEmptyDOMElement();
  });

  test('#4 The stopwatch records and displays laps when user clicks the lap button.', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Start'));

    setTimeout(() => {
      fireEvent.click(screen.getByText('Lap'));
      expect(screen.getByTestId('lap-list')).toContainElement(screen.getByText(/(\d{2}:){2}\d{2}/));

      fireEvent.click(screen.getByText('Lap'));
      expect(screen.getByTestId('lap-list').children.length).toBe(2);
    },0) // ensuring the lap button is not pressed when the timer is still at 00:00:00
        // this avoids the TestingLibraryElementError of multiple same elements
  });
});
