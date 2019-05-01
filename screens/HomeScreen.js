import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, Text, View, TouchableHighlight, StyleSheet, TextInput, toFixed, ImageBackground, } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
        bal: 1,
        newBal: 0,
        inputValue: '0',
        isLoading: true,
        dataSource: null,
        }
    }
    componentDidMount (){
        return fetch('http://www.apilayer.net/api/live?access_key=3317ea789769234d3954059869a3c635')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.quotes,
                })
            })
 
            .catch((error) => {
                console.log(error)
            });
    }
    
    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDEUR
        })
    }
    usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDGBP
        })
    }
    usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDINR
        })
    }
    usdToAussie = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDAUD 
        })
    }
    usdToCanada = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCAD
        })
    }
    usdToSwiss = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCHF
        })
    }
    usdToYuan = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCNY
        })
    }
    usdToYen = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDJPY 
        })
    }
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        if(this.state.isLoading) {
            return(
                <View styles={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={{ uri: 'https://images.pexels.com/photos/908283/pexels-photo-908283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}>
                    <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'red', borderWidth: 1, color: 'red', }}
                    />
                    <Text style={styles.paragraph}>
                        Currency Converter App
                    </Text>
                    
                    <View style={styles.row}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToEuro}
                        >
                            <Text style={styles.buttonText}>
                                USD to Euro
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToPound}
                        >
                            <Text style={styles.buttonText}>
                                USD to Pound
                            </Text>
                        </TouchableHighlight>
                    </View>    
                    
                    <View style={styles.row}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToRupee}
                        >
                            <Text style={styles.buttonText}>
                                USD to Rupee
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToAussie}
                        >
                            <Text style={styles.buttonText}>
                                USD to Aussie
                            </Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.row}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToCanada}
                        >
                            <Text style={styles.buttonText}>
                                USD to Canada
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToSwiss}
                        >
                            <Text style={styles.buttonText}>
                                USD to Swiss
                            </Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.row}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToYuan}
                        >
                            <Text style={styles.buttonText}>
                                USD to Yuan
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.usdToYen}
                        >
                            <Text style={styles.buttonText}>
                                USD to Yen
                            </Text>
                        </TouchableHighlight>
                    </View>    
                    
                    <Text style={styles.paragraph}>
                        USD: ${this.state.inputValue}
                    </Text>
                    
                    <Text style={styles.paragraph}>
                        Converted: {this.state.newBal.toFixed(2)}
                    </Text>
                </ImageBackground>
            </View>
      );
   }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'red',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row',
    },
    paragraph: {
        marginBottom: 10,
        fontSize: 20,
        color: 'red',
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
    },
});