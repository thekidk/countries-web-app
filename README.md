## How to run project

Project was developed and run on Visual Studio Code, so the instructions<br/>
on how to run the project are VSCode specific; unsure of whether it will<br/>
run on other IDEs/platforms.

In the project directory, you can run: 'npm start' or 'yarn start' in<br/> 
the terminal to run the project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />

### Web App Functionality

Home page contains a navigation bar with "Countries API" and "Home" button.<br />

When either of these buttons are clicked they will both return to the home page.<br />

Responsive webpage design for both mobile and desktop.<br />

### Search

Search works by correctly typing in the name of the country you are trying to find, <br/>
then clicking the search button right below the search box. The information for the <br/>
specified country will then appear below. <br/>

### Selecting Regions

Countries are filtered and grouped together by the region in which they're located.<br/>

When you click on a region it will take you to anoher webpage that lists and displays<br/>
all the countries in the selected region.<br/>

Web app makes calls to the REST Countries API (https://restcountries.eu) to retrieve<br/>
information about the countries.<br/>
