# fullstack apps @ NIRV

- standard application development @ nirv.ai
- wouldnt trust anything in this repo while **this line** exists

## TLDR

- NIRV uses nimlang and Bun... for all application development

### why nim and bun

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. _Martin_

- nimlang and Bun (typescript) are the most usable and flexible languages on the planet
- anything you can build, can be built and maintained _competitively_ and _economically_
- if you are:
  - searching for ultimate performance: [start here](https://www.wikihow.com/Start-Programming-in-Assembly)
  - reasonable person building profitable and competitive applications: continue reading

### When opinions clash

> the hardest part in making a choice, is figuring out who to blame when things go wrong. _Master Yuan-Ma, The Book of Programming_

- NIRV prefers openminded frameworks and libraries vs the opinionated toolset or kitchen sink
- adhering to the [unix philisophy](https://en.wikipedia.org/wiki/Unix_philosophy)
  - Make it easy to write, test, and run programs.
  - Write programs that do one thing and do it well.
  - Write programs to work together.
  - Self-supporting system: all software is built with _nimlang and js_

#### apis / backend apps

- first choice should be nim
- for non nim devs
  - edge compute: hono
  - everything else: elysia

#### bff: backends for frontends

- any service/application specifically supporting an FE app should be in JS for interoperability (from a developer perspective)
- same AD: hono for edge, elysia for heavy lifting

#### fe: frontends

- react is still king. we took an initial look at svelte and it was deemed a lateral move vs a significant jump in performance and dev experience

#### MVAs

- synchronizing the minimal viable architecture across services

##### BUN

- [barrelsby](https://github.com/bencoveney/barrelsby)
- [emotion](https://github.com/emotion-js/emotion/tree/main)
- [material](https://github.com/mui/material-ui)
- [tanstack](https://tanstack.com/)
- [eden](https://elysiajs.com/plugins/eden/overview.html)
- [elysia](https://elysiajs.com/introduction.html)
- [reactjs](https://react.dev/)
- [ky](https://github.com/sindresorhus/ky)
- [kv-universal](https://github.com/sindresorhus/ky-universal)
- [got](https://github.com/sindresorhus/got)

##### NIM

- dunno
