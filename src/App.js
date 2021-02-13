import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Form from './Form';
import { GlobalStyle, theme } from './resets.styles';
import axios from 'axios';
import MovieLists from './MovieLists';

import { StyledSection } from './App.styles';

const API_KEY = `4df18763`;

export default function App() {
    const [allMovies, setAllMovies] = useState({
        searchedMovies: [],
        watchedMovies: [],
        unseenMovies: [],
        noResults: false,
        error: false,
    });

    const onSubmit = searchValue => 
        axios({
            method: `GET`,
            url: `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
        })
            .then(res => {
                if (res.data.Response.toLowerCase() === `false`) {
                    return setAllMovies(prevMovies => ({
                        ...prevMovies,
                        searchedMovies: [],
                        noResults: true
                    }))
                } else {
                    return setAllMovies(prevMovies => ({
                        ...prevMovies,
                        searchedMovies: res.data.Search.map(({ Title, imdbID }) => ({
                            title: Title,
                            id: imdbID
                        })),
                        noResults: false,
                        error: false,
                    }))
                }
            })
            .catch(error => {
                console.error(error);
                return setAllMovies(prevMovies => ({
                    ...prevMovies,
                    error: true
                }));
            })
    ;

    const removeMovie = movie => setAllMovies(prevMovies => ({
        ...prevMovies,
        watchedMovies: prevMovies.watchedMovies.filter(prevMovie => prevMovie.id !== movie.id),
        unseenMovies: prevMovies.unseenMovies.filter(({ id }) => id !== movie.id),
    }))

    const seenMovie = movie => setAllMovies(prevMovies => ({
        ...prevMovies,
        watchedMovies: prevMovies.watchedMovies.map(({ id }) => id).includes(movie.id) 
            ? prevMovies.watchedMovies 
            : [...prevMovies.watchedMovies, movie],
        unseenMovies: prevMovies.unseenMovies.filter(({ id }) => id !== movie.id)
    }));

    const unSeenMovie = movie => setAllMovies(prevMovies => ({
        ...prevMovies,
        watchedMovies: prevMovies.watchedMovies.filter(({ id }) => id !== movie.id),
        unseenMovies: prevMovies.unseenMovies.map(({ id }) => id).includes(movie.id)
            ? prevMovies.unseenMovies
            : [...prevMovies.unseenMovies, movie]
    }))

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <header className="header">
                Header
            </header>
            <main className="main">
                <h1 className="h1">OMDb Search App</h1>
                {allMovies.error && <h2 className="error-h2">We are experiencing technical difficulties, please check back later.</h2>}
                {allMovies.noResults && <h2 className="no-results-h2">No Results found!</h2>}
                <Form onSubmit={onSubmit} />
                <StyledSection aria-label="Movies" className="movies-section">
                    <div>
                        <h3 className="h3">Searched Movies</h3>
                        {allMovies.searchedMovies.length >= 1 && (
                            <MovieLists ulClassName="searched-movies" 
                                movies={allMovies.searchedMovies}
                                seenMovie={seenMovie}
                                removeMovie={removeMovie}
                                list={`searched`} 
                                unSeenMovie={unSeenMovie}
                                />
                        )}
                    </div>
                    <div>
                        <h3 className="h3">Watched Movies</h3>
                        {allMovies.watchedMovies.length >= 1 && (
                                <MovieLists ulClassName="watched-movies"
                                    movies={allMovies.watchedMovies}
                                    removeMovie={removeMovie}
                                    seenMovie={seenMovie}
                                    list={`watched`}
                                    unSeenMovie={unSeenMovie}
                                />
                            )}
                    </div>
                    <div>
                        <h3 className="h3">Unseen Movies</h3>
                        {allMovies.unseenMovies.length >= 1 && (
                            <MovieLists ulClassName="unseen-movies"
                                movies={allMovies.unseenMovies}
                                removeMovie={removeMovie}
                                seenMovie={seenMovie}
                                list={`unseen`}
                                unSeenMovie={unSeenMovie}
                            />
                            )}
                    </div>
                </StyledSection>
            </main>
            <footer className="footer">
                Footer
            </footer>
        </ThemeProvider>
    )
}