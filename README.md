# Recipe.io

![Logo](https://github.com/danwei002/HTN-Project/blob/master/client/public/logo.png)

A full-stack web application built using React.js, Node.js, Express.js, and the Spoonacular food API. The application pulls recipe data from the Spoonacular API and displays recipes containing the ingredients the user entered. 

## Get Started

First you will need a Spoonacular API key. Next, clone the repository:

### `git clone https://github.com/danwei002/HTN-Project`

Open the newly cloned repository and find the [config.js](https://github.com/danwei002/HTN-Project/blob/master/server/config.js) file in the server directory. In here, update the variable apiKey with your API key. Now navigate back to the main directory and change to the server directory:

### `cd server`

Next you will need to run the commands to install all server dependencies and start up the backend. 

### `npm install` `npm start`

After successfully starting up the backend, you will see the message "App is listening on port :8888". Return to the main directory, then change to the client directory:

### `cd client`

Again run the commands

### `npm install` `npm start`

This installs all required dependencies and starts up the frontend. The frontend is running on localhost:3000. The application is now up and running.

## How To Use The Application

![Inputting ingredient "tomato"](https://github.com/danwei002/HTN-Project/blob/master/example.png)

First, input an ingredient into the large input box in the middle of the screen. You will see some autocomplete settings underneath that you can click. When finished, click the green "Add" button. The added ingredient will be shown in a grey box underneath the input field. You can click the grey boxes to remove ingredients. 

![Tomato added](https://github.com/danwei002/HTN-Project/blob/master/example%202.png)

Once you have inputted all the ingredients you want, hit the yellow "Find Recipes" button. You will then see some of the best matching recipes for the ingredients you entered. You can click on these recipes to get more detail on them.

![Recipes found](https://github.com/danwei002/HTN-Project/blob/master/example%203.png)


