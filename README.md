# fullstack apps @ NIRV

- standard application development @ nirv.ai
- wouldnt trust anything in this repo while **this line** exists

## TLDR

- NIRV uses nimlang and JS... for all application development

### why nim and js

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. _Martin_

- nimlang and JS are the most usable and flexible languages on the planet
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

#### apis / servers

- IMO anything not FE specific should be in nimlang
- [nimlang](https://github.com/nim-lang/Nim)
- [prologue](https://github.com/planety/Prologue)

#### bff: backends for frontends

- any service/application specifically supporting an FE app should be in JS for interoperability (from a developer perspective)
  - however this may change as adoption of and migration to nimlang continues
- [bun](https://bun.sh/)
  - deno / nodejs could be used as well
  - IMO bun should be preferred

#### fe: frontends

- depending on the developer skillset, scope and complexity of the FE application
- nim developers
  - [karax](https://github.com/karaxnim/karax)
    - SPAs for nim
- js developers
  - [mithril micro framework](https://mithril.js.org/)
    - when react / svelt is overkill
  - [reactjs](https://react.dev/)
    - best developer experience
  - [svelte](https://svelte.dev/)
    - the next GOAT of FE frameworks
    - still a long way to go before we drop react
