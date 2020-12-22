import * as React from "react";
// load components directly from React native
import {
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//load predefined components from other files and folders
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default class TabOneScreen extends React.Component {
  // define states and props --> see documentation for more info
  constructor(props) {
    super(props);
    this.state = {
      email: "jon@doe.com",
      password: "123456",
    };
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  // function for logging in to the map

  onPressLogin = async () => {
    const { email, password } = this.state;

    //connect to API and MongoDB to get user data
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(
      (response) => {
        // catch all different status that come back from the server:
        if (response.status === 404) {
          Alert.alert("Login failed. Email / password incorrect.");
          console.log("Method not found.");
        } else if (response.status === 400) {
          Alert.alert("Login failed. Email / password incorrect.");
        } else if (response.status === 200) {
          response.json().then((json) => {
            if (json.token && json.token.startsWith("Bearer ")) {
              this.props.onLoggedIn(json.token);
            }
          });
        } else {
          console.log(JSON.stringify(response));
        }
      },
      () => {
        Alert.alert("Could not reach backend.");
      }
    );
  };

  // rendering the different tags (similar to HTML file, comments not possible inside render function):

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/villa.jpg")}
          imageStyle={{ opacity: 0.5 }}
        ></ImageBackground>
        <Text style={styles.title}>Welcome to Adeborna Rentals</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.2)"
        />
        <Text style={styles.text}>
          We help you to analyze your real estate properties.
        </Text>
        <Text style={styles.title2}> Email </Text>
        <TextInput
          style={styles.nameInput}
          placeholder="user@provider.com"
          placeholderTextColor="#696969"
          placeholderStyle={styles.placeholderStyle}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />

        <Text style={styles.title2}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.nameInput}
          placeholder="************"
          placeholderTextColor="#696969"
          placeholderStyle={styles.placeholderStyle}
          onChangeText={(password) => this.setState({ password })}
          passValue={this.state.password}
        />
        <TouchableOpacity onPress={this.onPressLogin}>
          <Text style={styles.title2}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Style sheet for Home Screen:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  title2: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  nameInput: {
    color: "#696969",
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 15,
    paddingBottom: 15,
  },
});
