# [Ocean artUp](https://ocean-artup.eu)

This repo powers the [Gatsby](https://www.gatsbyjs.org) site hosted at [ocean-artup.eu](https://ocean-artup.eu). The design and layout make heavy use of [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid) and [styled-components](https://www.styled-components.com). It is fully responsive, supports a two-level navbar animated with [`react-spring`](https://www.react-spring.io) (on mobile), [fluid typography](https://css-tricks.com/snippets/css/fluid-typography), [Algolia search](https://www.algolia.com) and [Contentful](https://www.contentful.com). This site is maintained by [Janosh Riebesell](https://janosh.io) ([Mail](mailto:janosh.riebesell@gmail.com), [GitHub](https://github.com/janosh)).

Ocean artUp is a research project funded by an [Advanced Grant](https://cordis.europa.eu/project/rcn/205206_en.html) of the European Research Council. It aims to study the feasibility, effectiveness, associated risks and potential side effects of artificial upwelling in increasing ocean productivity, raising fish production, and enhancing oceanic CO<sub>2</sub> sequestration.

## Installation

To get this site running locally, you need installed [`git`](https://git-scm.com), [`gatsby-cli`](https://www.gatsbyjs.org/packages/gatsby-cli) and [`yarn`](https://yarnpkg.com) (or [`npm`](https://www.npmjs.com)). Then follow these steps:

1. Clone the repo to your machine and change into its directory.

    ```sh
    git clone https://github.com/janosh/ocean-artup
    && cd ocean-artup
    && git config core.hooksPath src/utils/gitHooks
    && chmod +x src/utils/gitHooks/pre-commit
    ```

2. Install dependencies.

    ```sh
    yarn
    ```

3. Start the dev server.

    ```sh
    gatsby develop
    ```

## Deployment

The easiest way to get this site published is as follows:

1. Create an account with [netlify](https://www.netlify.com).
2. Install the [`netlify-cli`](https://www.netlify.com/docs/cli).
3. Login to your account.

    ```sh
    netlify login
    ```

4. Connect your GitHub repo with your netlify account for [continuous deployment](https://www.netlify.com/docs/cli/#continuous-deployment).

    ```sh
    netlify init
    ```

5. Finally deploy the site with

    ```sh
    netlify deploy
    ```