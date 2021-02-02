import React from 'react';
import { ThemeProvider } from 'styled-components';
import Counter from './Counter';
import {GlobalStyle, theme} from './resets.styles';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <header className="header">
                Header
            </header>
            <main className="main">
                <Counter />
            </main>
            <footer className="footer">
                Footer
            </footer>
        </ThemeProvider>
    )
}