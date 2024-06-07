# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Setting up a React project:

If you haven't already, you can create a new React project using Create React App, which is a popular tool for setting up React projects quickly. You can install it globally using npm with the command:
lua npm install -g create-react-app

Then, create a new React project with:
lua npx create-react-app my-react-app
Replace "my-react-app" with the desired name for your project.
Navigating into your project directory:

Once the project is created, navigate into the project directory:
bash cd my-react-app
Installing dependencies:
To install dependencies required for your project, you'll use npm. For example, to install a package like react-router-dom, you can run:

npm install react-router-dom
Replace react-router-dom with the name of the package you want to install.
Using installed packages:

After installing a package, you can import and use it in your React components. For example, if you installed react-router-dom, you can import it in your components like this:
javascript
Копировать код
import { BrowserRouter as Router, Route } from 'react-router-dom';
Running the development server:

To start the development server and view your React application in the browser, run:
sql npm start
This command starts the development server, compiles your React code, and opens your default web browser to view the application.
Building your application:

When you're ready to deploy your React application, you can build it using:
arduino npm run build
This command creates an optimized production build of your application in the build folder, which you can then deploy to a web server.
Managing npm scripts:
In your package.json file, you'll find a "scripts" section where you can define custom npm scripts for tasks like running tests, linting, or any other custom commands you need for your project.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
