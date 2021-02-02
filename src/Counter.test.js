import React from 'react';
import { ThemeProvider} from 'styled-components';
import { theme } from './resets.styles';
import { act, cleanup,  render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Counter from './Counter';
import 'jest-styled-components';

const { queryByTestId } = render(
    <ThemeProvider theme={theme}>
        <Counter />
    </ThemeProvider>
);
const [display, button] = [
    queryByTestId(`counter-display`),
    queryByTestId(`counter-button`)
];

afterEach(cleanup);

test(`<Counter /> increments on button click`, () => {
    expect(display.textContent).toBe(`0`);
    userEvent.click(button);
    expect(display.textContent).toBe(`1`);
    userEvent.click(button);
    expect(display.textContent).toBe(`2`);
})