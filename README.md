# 🍅 Rancid Tomatillos

This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It’s Rancid Tomatillos. Very different!
## 📸 Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## 🌐 Overview

This is a React Frontend site that calls a movie database and displays said data. This site includes search, dynamic routing for each movie, and support for various screen sizes. The main goal of this project was to learn using React in a team environment, React Router, Cypress E2E testing, and mobile responsive design.
## ✨ Features

- Fetching data from a database with API calls
- Search functionality, with keyboard support
- Mobile responsive design
- Dynamic routing with individual movie pages
- CSS animations
- e2e Cypress Testing
## 🎥 Demo

Insert gif or link to demo


## 🛠️ Installation

```bash
  git clone git@github.com:KojinKuro/rancid-tomatillos.git
  cd rancid-tomatillos
  npm install
  npm run start
```

The server should be running on: `localhost:3000`
## ✅ Running Tests

To run our Cypress tests, run the following command

```bash
  npm run e2e
```

From there the Cypress test runner will run. For more information on Cypress, check out the [Cypress documentation](https://www.cypress.io/)
## 📝 Context

This project was created from week 13 to 14 at Turing School of Software & Design. This was a group project consiting of two frontend developers, with around combined 50 programming hours total split amongst the two of us.
## 📚 Lessons Learned

While working on this project, we were (and still are) learning React. We completed everything we set out to, but topics such as custom hooks and how to make React performant were out of scope. A future goal is coming back after learning these topics and seeing how they can make our site better.

Another React topic is managing what React is good at, versus what it should not be handling. For half of our team, this was their first experience in React. Understanding React is great for what it is, it is a UI framework first. Other tasks should be offloaded to Javascript (data calls, async tasks).

As the code became more complex, dealing with styling from React vs a CSS file became challenging. Keeping our concerns seperate started becoming difficult, and this is something we'd like to be more concious about in future projects so our code stays clean.

Finally, we got Cypress testing going, but Cypress has more features than what we have implemented. Taking it's more advanced features and implementing them in our applciation would be another future goal.
## 🛣️ Roadmap

- Creating our own backend using Node.js
    - User login system
    - Rating different movies
    - Leaving comments on individual movies
    - Movie submission & editing interface
- Improving performance, especially with React using `useMemo()` hook
- Dark mode / light mode
## 👥 Authors

- Charles Kwang - [@KojinKuro](https://github.com/KojinKuro)
- Theotis McCray - [@Virulencies](https://github.com/Virulencies)


## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) for more details.
