# Travel-Destination

# React Cheat Sheet

## Creating a react App with NPM

- Create a directory for your project or clone an empty project you created from github

```bash
mkdir project-name
```

- cd into your project

```bash
cd project-name
```

- initialize a new npm project

```bash
npm init -y
```

- install the react dependencies to your project

```bash
npm i react react-dom react-scripts
```

- Create the react folder structure

```bash
mkdir public src
```

- Create the following files

```bash
touch public/index.html src/index.js src/App.jsx
```

- Now Open up the project with VS code.

```bash
code .
```

- open up `package.json` and add the following entry in the file

```json
"scripts":{
  "start": "react-scripts start"
}
```

- if you already find it in the file, just add the start script directly

```json
  "start": "react-scripts start"
```

- Open up the `index.html` in the `public` folder. Create a basic html template and add a `div` tag with `id='root'` in the body.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

- After that open the `index.js` in the `src` folder and add the following.

```js
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```

- In the `App.jsx` add a basic function component to test if the Application will run.

```js
import React from 'react';

export default function App() {
  return (
    <div>
      <p>Hello Pizza 🍕 World 👋</p>
    </div>
  )
}
```

- Back in your terminal make sure you are in the root of your project. Type `tree -I node_modules` and you should see the following:

```bash
➜  project-name tree -I node_modules
.
├── package.json
├── package-lock.json
├── public
│   └── index.html
└── src
    ├── App.jsx
    └── index.js
```

- To test the project run the following command

```bash
npm start
```

- If you are running the project for the first time, you will be promoted this message

```bash
> project-name@1.0.0 start
> react-scripts start

? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? › (Y/n)
```

- answer with `y` for yes.

- If you set up everything according to the cheat sheet you should be seeing this in your terminal

```bash
Compiled successfully!

You can now view project-name in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.35:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by status 1.42 MiB [cached] 1 asset
asset index.html 327 bytes [emitted]
asset asset-manifest.json 190 bytes [emitted]
cached modules 1.33 MiB (javascript) 28.2 KiB (runtime) [cached] 102 modules
./src/App.jsx 1.52 KiB [built]
webpack 5.65.0 compiled successfully in 125 ms
```

And this site should open automatically in your browser

![hello-world.png](./hello-world.png)

Great job! Now you can start working on your React project! ☕