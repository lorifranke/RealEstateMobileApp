import * as React from 'react';
import { StyleSheet, View, BackHandler, Image, Text, TouchableOpacity, Dimensions, ScrollView, Button, SafeAreaView } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';

// different icons used:
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';

// additional components loaded (for map search and charts)
import { SearchBar } from "react-native-elements";
import { LineChart, BarChart, PieChart, StackedBarChart } from "react-native-chart-kit";

// screenWidth is used to get the full phone screen
const screenWidth = Dimensions.get("window").width;

// this values are necessary to style the chart of the properties
const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0.5,
  backgroundColor: "white",
  color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
  strokeWidth: 2, // optional, default 3
};

// create our Map screen:
export default class TabThreeScreen extends React.Component {

state = {
    detailsOpened: false,
    searchTerm: null,
    ValueHolder : true,
}

// update search necessary to update results during typing in searchbar
updateSearch = (search) => {
    this.setState({
        searchTerm: search === "" ? null: search,
        detailsOpened: false
    });
};

// if the user clicks on the property marker, the state of the variable changes between opened or closed property details
markerClick() {
    console.log("Marker was clicked");
    this.setState({detailsOpened: !this.state.detailsOpened});
};

SetStateValueFunction() {
    this.setState({ValueHolder: !this.state.ValueHolder});
};

// typing in the searchbar will check the addresses of property.json files
// and show the property on the map if there's a match
getResults() {
    const property = require('../property.json');
    const term = this.state.searchTerm;
    if(term && term.length > 2 && property.Address.toLowerCase().includes(term.toLowerCase())) {
        return [property];
    }
    else {
        return [];
    }
}

render() {
    // load property.json, as soon as the backend has a database with many property.json files,
    // we can call them here
    const fileName = require( '../property.json');

    // use values for marker
    const { search } = this.state;

    // Data for the pie chart from property.json
    const data2 = [
  {
    name: "LenderFee",
    portion: fileName.LenderFee,
    color: "#8dd3c7",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Inspection Fee",
    portion: fileName.InspectionsEngineerReport,
    color: "#ffffb3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Down Payment",
    portion: fileName.DownPayment,
    color: "#bc80bd",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Caretaking",
    portion: fileName.Caretaking,
    color: "#fb8072",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Offer Deposits",
    portion: fileName.DepositsMadeWithOffer,
    color: "#80b1d3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "BrokerFee",
    portion: fileName.BrokerFee,
    color: "#fdb462",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Transfer Tax",
    portion: fileName.TransferTax,
    color: "#b3de69",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Legal",
    portion: fileName.Legal,
    color: "#fccde5",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
];

    // Data for the line chart
    const data = {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
    ],
      legend: [fileName.TotalROIAfterOneYear] // optional, we can also chose any other value from the property to show
    };


const data3 = {
  labels: ["Unit1", "Unit2"],
  legend: ["MortgageLTV", "MortgageLTPP", "AverageRent"],
  data: [
    [180, 600, 360],
    [500, 200, 636]
  ],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
              <SearchBar containerStyle = {styles.search}
                placeholder=" Search..."
                onChangeText={this.updateSearch}
                value={this.state.searchTerm}
                platform ="ios"
                searchIcon = {null}
                inputStyle = {styles.searchText}
                cancelButtonTitle
                clearIcon = {null}
                rightIconContainerStyle = {styles.searchRightIcon}
              />
                {
                this.getResults().length > 0 &&
                <Marker onPress= {()=>this.markerClick()}
                    coordinate={
                        {
                            latitude: 37.78825,
                            longitude: -122.4324
                        }
                    } >
                    <Image
                    source ={require('../assets/images/icon.png')}
                    style={{width: 25, height: 25}}
                    />
                </Marker>
                }
            </MapView>
            {
                this.getResults().length > 0 && this.state.detailsOpened &&
                <View style={{...styles.bubble, ...{height: (this.state.ValueHolder === true ? 225 : (325 + Dimensions.get('window').height))}}}>
                    <ScrollView style={styles.scroll}>
                    <View style={styles.container2}>
                    <View style ={styles.toprow}>
                    <Image
                        source ={require('../assets/images/icon.png')}
                        style={{...styles.redhouse, ...{width: 20, height: 20}}}
                    />
                    <TouchableOpacity style={styles.expandButton} onPress={ this.SetStateValueFunction.bind(this) } title="X">
                        <Icon name="launch" size={20} color="#4F8EF7"/>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{fileName.Address}</Text>
                        { <Text>{
                            "\nOffer Price: $" + fileName.OfferPrice +
                            "\nNumber of Units: " + fileName.NumberOfUnits +
                            "\nEquity ROI after 1 year: $" + JSON.stringify(fileName.EquityROIAfterOneYear) +
                            "\nGross Rents: $" + fileName.GrossRents + "\n"
                         }</Text>}
                    <Text style={styles.title2}>ROI Analysis for the next 6 years</Text>
                    <LineChart
                      data={data}
                      width={screenWidth}
                      height={200}
                      chartConfig={chartConfig}
                    />
                    <Text style={styles.title2}>One Time Investment Costs</Text>
                    <PieChart
                      data={data2}
                      width={screenWidth}
                      height={200}
                      chartConfig={chartConfig}
                      accessor={"portion"}
                    />
                    <Text style={styles.title2}>Mortgage Analysis</Text>
                    <StackedBarChart style={styles.barchart}
                      data={data3}
                      width={0.9 * screenWidth}
                      height={200}
                      chartConfig={chartConfig}
                    />
                    </View>
                    </ScrollView>
                </View>
             }
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
    title2: {
    paddingTop: 10,
    fontSize: 15,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
   ...StyleSheet.absoluteFillObject,
   position: "absolute",
 },
 // Callout bubble
  bubble: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    marginBottom: 0,
    marginTop: 600
  },
  expandButton: {
   justifyContent: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
  },
  barchart: {
   marginBottom: 600
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  search: {
    height: 53,
  },
  searchText: {
   paddingLeft: 20,
  },
  toprow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  redhouse: {
    justifyContent: 'flex-start'
  }
});
