import React from 'react';
import styled from 'styled-components';

export const UlStyles = styled.ul`
    list-style-type: none;
    padding-top: 20px;

    li {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
    }

    button {
        display: block;
        padding: 8px;
        border: 1px solid black;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
        text-align: center;
        transition: background-color ease-out 0.175s;
        width: 100%;

        &:not(:last-of-type) {
            margin-bottom: 10px;
        }

        &:hover {
            background-color: #fffff2;
        }
    }
`

export default function MovieLists({ 
    ulClassName, 
    list, 
    movies, 
    seenMovie, 
    removeMovie, 
    unSeenMovie }) {

    return (
        <UlStyles className={ulClassName}>
            {movies.map(movie => (
                <li className="li" key={movie.id}>
                {movie.title}
                {list !== `watched` && 
                <button 
                    aria-label={`Mark this movie as seen`}
                    onClick={() => seenMovie(movie)}
                    title={`Mark this movie as seen`}
                    type="button"
                >
                    Mark this movie as seen
                </button>}
                {list !== `unseen` && 
                    <button 
                        aria-label={`Mark this movie as unseen`}
                        onClick={() => unSeenMovie(movie)}
                        title={`Mark this movie as unseen`}
                        type="button"
                    >
                    Mark this movie as unseen
                </button>}
                {list !== `searched` && 
                    <button 
                        aria-label={`Remove this movie from seen or unseen lists`}
                        onClick={() => removeMovie(movie)}
                        title={`Remove this movie from seen or unseen lists`}
                        type="button"
                    >
                    Remove this movie from seen or unseen lists
                </button>}
            </li>
            ))}
        </UlStyles>
    )
}