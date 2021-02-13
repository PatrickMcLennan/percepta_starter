import React from 'react';
import { ThemeProvider} from 'styled-components';
import { theme } from './resets.styles';
import { cleanup,  render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import 'jest-styled-components';
import MovieLists from './MovieLists';

const seenMovie = jest.fn();
const unSeenMovie = jest.fn();
const removeMovie = jest.fn();
const onSubmit = jest.fn();

const searchedMoviesList = render(
    <ThemeProvider theme={theme}>
        <MovieLists
            ulClassName="searched-movies"
            list="searched"
            seenMovie={seenMovie}
            unSeenMovie={unSeenMovie}
            removeMovie={removeMovie}
        />
    </ThemeProvider>
);