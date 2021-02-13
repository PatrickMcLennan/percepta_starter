import React from 'react';
import { ThemeProvider} from 'styled-components';
import { theme } from './resets.styles';
import { cleanup,  render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import 'jest-styled-components';
import Form from './Form';

const onSubmit = jest.fn();

afterEach(cleanup);

const { queryByTestId } = render(
    <ThemeProvider theme={theme}>
        <Form onSubmit={onSubmit} />
    </ThemeProvider>
);

const [searchInput, searchSubmit] = [
    queryByTestId(`search-input`),
    queryByTestId(`search-submit`),
];

test(`<Form /> calls API on Submit`, () => {
    expect(searchInput.value).toBe(``);
    userEvent.type(searchInput, `hello`);
    expect(searchInput.value).toBe(`hello`);
    userEvent.click(searchSubmit);
    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(`hello`);
}) 