# 🍅 Rancid Tomatillos

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It’s Rancid Tomatillos. Very different!
## 📸 Screenshots

<img src="https://github.com/KojinKuro/rancid-tomatillos/assets/11234292/357813d6-4f86-4097-ba83-f4dddc084705" width="70%" alt="App screenshot" />


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

[Live demo](https://kojinkuro.github.io/rancid-tomatillos/)


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

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) for more details.
