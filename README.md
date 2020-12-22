# Installation Instructions & Setup

* This Real Estate App can be installed with Node.js using the node package manager. Download this folder and run ```npm install``` in the command line to get all packages. This will install the packages listed in the package.json file. Alternatively you can also use ```yarn``` to install packages.

* To run a mobile application you will need to install ```npm install -g expo-cli``` for React-Native as well as a mobile phone emulator (unless you run the code as web application). For iOS please use XCode with belonging phone simulator to run the app on a virtual phone. Another possibility is to use Expo CLI to run your React Native app on a physical device, therefore, just connect your phone with USB and run the app on your phone.

* To inititalize an expo project, you will need to run ```expo init YourProjectName``` in the command line. This will link an expo project to the folder. Then, you can start the application with ```npm start``` and the browser will open the metro bundler where you are able to access different simulators. Another way to start the app is by directly launching the app on an Android Virtual Device by running ```npm run android```, or on the iOS Simulator by running ```npm run ios```. The simulator will open directly without using the metro bundler from the browser. Before opening the simulator make sure the backend is running (see link below to backend). The backend can be started in the corresponding folder as well with ```npm start```.

* A further detailed documentation on how to use and install React Native can be found here: https://reactnative.dev/docs/environment-setup and an introduction how to set up a first mobile app here: https://reactnative.dev/docs/getting-started

* More resources on debugging the app while using React-native can be found here: https://reactnative.dev/docs/troubleshooting


# **Code Documentation**:

https://github.com/lorifranke/RealEstateMobileApp/blob/master/Code_Documentation.pdf


# **User Manual** with UI Screenshots: 

https://github.com/lorifranke/RealEstateMobileApp/blob/master/User_Manual.pdf

# More information

This application is the User Interface (UI) part of a full software project. The backend belonging to this real estate mobile UI can be found here: https://github.com/MounikaChava304/CS682
