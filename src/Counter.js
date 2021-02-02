import React, { useState } from 'react';
import styled from 'styled-components';

const CounterStyles = styled.section`
    ${({theme: {flex}}) => flex(`center`, `center`, `column`)};
`

const buttonAria = `Increment the counter by 1`;

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <CounterStyles>
            <p data-testid="counter-display">{count}</p>
            <button
                aria-label={buttonAria}
                data-testid="counter-button"
                onClick={() => setCount(prevCount => prevCount += 1)}
                title={buttonAria}
                type="button"
             >
                 Increment
             </button>
        </CounterStyles>
    )
}