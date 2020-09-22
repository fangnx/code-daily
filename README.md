# Code Daily

[Code Daily](http://codedaily.info/) is a custom web dashboard for Stack Overflow, with a simple category-based view and support for [Pocket](https://app.getpocket.com/).

## Motivation

Like most programmers, I visit [StackOverflow](https://stackoverflow.com/) daily for technical content. While the platform is great, there are two issues that have been bothering me for a long time:

1. Lack of a clean "tag-based" dashboard.
   - Sometimes I would like to browse trending questions based on specific category, much like what I can get from a RSS reader like [Feedly](https://feedly.com/).
2. No support for [Pocket](https://app.getpocket.com/).
   - Ideally, there should be a button/dropdown menu item so the user can "add the question to Pocket" with one click.

With these ideas in mind, I decided to make a web-based StackOverflow dashboard to better the experience.

## Built with

Mainly:

- Typescript
- Angular
- @ngrx, @ngrx/effects - reactive state management.
- [NestJS](https://nestjs.com/) - server-side Node.js framework.
- MongoDB, Passport.js - to manage user data and handle authorization with JWT strategy.

And most importantly:

- [Stack Exchange API](https://api.stackexchange.com/docs) - to fetch questions, answers, and tags.
- [Pocket API](https://getpocket.com/developer/) - to add item (question) to the user's registered Pocket account.

## Getting Started

- WIP

## License

Distributed under the MIT License. See LICENSE for more information.
