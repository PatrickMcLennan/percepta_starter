# Starting code 

This is a simple bare-bones webpack configuration I've put together to (I think) satisfy all of the requirements.  For Dependencies, I've included:

 - [React](https://reactjs.org/) & [ReactDOM](https://reactjs.org/docs/react-dom.html), for our UI
 - [styled-components](https://styled-components.com/), a CSS-in-JS solution very similar to SCSS but with scoped styles to reduce the need for things like BEM, etc.
 - [axios](https://github.com/axios/axios), which will be our HTTP client.

Things such as cache-busting, lazy-loading, better cross-browser support, etc. can be added if desired but for the sake of simplicity in the context of the assignment I didn't want to over complicate.

For testing, I've opted to use [jest](https://jestjs.io/) alongside [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).

## How to use

|How do I...             | ...by running |
|:--                     |            --:|
|Run a dev server?       | `yarn start`  |
|Compile for production? | `yarn build`  |
|Run my tests?           | `yarn test`   |

I have successfully registered for an OMDb API key and added to a local `.env` file that is `.gitignore`'d by default.

I have created a simple `<Counter />` component and included a working test (`Counter.js` & `Counter.test.js`).  These can be seen by running the `watch` and `test` commands in the table above.