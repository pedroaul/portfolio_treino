Estudo e prática de HTML/CSS a partir de portfolio base feito com tutorial do youtube.

Base de estudo:
https://www.youtube.com/watch?v=3v2RUozpDVw&list=PLaLQ4gJXUd6DP5n1t8r4rwF40ahLgUlMg

# HOW TO CREATE THE PROJECT WITH NODE

To start you'll need to open your Terminal and execute the following command:

npx create-react-app 'name_of_the_project'

# STARTING YOUR PROJECT WITH NODE

After that you can execute either on the Terminal or in the VS Code in the Terminal of the project the following commands:

npm install --save-dev ajv@^7
npm start

## HOW TO CREATE A PROJECT WITH VITE AND TAILWIND CSS
Installing Vite: 

On your Terminal execute the following commands:
npm create vite@latest ./
npm install

Installing TailWindCSS:
After installing Vite, execute this command on the Terminal:

npm install tailwindcss @tailwindcss/vite

## IMPORTING TAILWIND CSS

After installing Vite and TailWind on your project, you'll import tailwind library to your css.
On the file: "vite.config.js", you'll import:

import tailwindcss from '@tailwindcss/vite'

And then, export tailwind to the section plugins:

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

And then you'll import TailWind CSS to your main CSS file:

@import 'tailwindcss';



