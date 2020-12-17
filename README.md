# Installation instructions

* This Real Estate App can be installed with Node.js using the node package manager. Download this folder and run ```npm install``` in the command line to get all packages. This will install the packages listed in the package.json file. Alternatively you can also use ```yarn``` to install packages.

* To run a mobile application you will need to install ```npm install -g expo-cli``` for React-Native as well as a mobile phone emulator (unless you run the code as web application). For iOS please use XCode with belonging phone simulator to run the app on a virtual phone. Another possibility is to connect your phone with USB and run the app on your phone.

* To inititalize an expo project, you will need to run ```expo init YourProjectName``` in the command line. This will link an expo project to the folder. Then, you can start the application with ```npm start``` and th browser will open the metro bundler where you are able to access different simulators.

* A further detailed documentation on how to use and install React Native can be found here: https://reactnative.dev/docs/environment-setup and an introduction how to set up a first mobile app here: 

# Source code and folder structure

* screens: This is probably the most important folder of the UI! It contains all main screens/pages of the application. It contains different files, each belonging to one screen. The three screens we have in the app right now are: tabone, tabtwo, tabthree, which are all linked in the navigation bar on the bottom of the UI. If we want to build additional pages that should be displayed in the app, these files belong here. In case we have some errors or problem when displaying the app, there is NotFoundScreen for error handling.

* assets folder: Here we save all images and icons that we need, such as fonts to make a nice design.

* components folder: contains helper files that create little components of the app.

* constants: Here are files containing configurations for the color schemes and the layout of the app

* navigation: This folder contains all files that are necessary for the navigation in the mobile app, for example we have a bottom nav bar that navigates through the app. All the screens (pages) we create must be linked in the navigation to be visible and usable.

* node-modules: packages necessary for running the app

* property.json: This file is created by the backend part of this project and is picked up by this UI. As soon as the backend is able to save multiple properties in a database, the UI can render this provided information from the property.json files. Depending on which information we have available from fetching data from the API connected to the backend, the UI will show the received information.

* package.json, package-lock.json and yarn.lock are files that are necessary for installing and using the packages required for the app.

# More information

This application is the User Interface (UI) part of a full software project. The backend belonging to this real estate mobile UI can be found here: https://github.com/MounikaChava304/CS682
