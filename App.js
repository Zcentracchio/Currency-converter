import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state ={
        bal: 1,
        newBal: 0,
        inputValue: 'Choose a number'
    }
    usToEuro = () => {
        this.setState({ 
            newBal: this.state.inputValue * .85,
        })
    }
    usToPound = () => {
        this.setState({ 
            newBal: this.state.inputValue * .75,
        })
    }
    usToIndianRupee= () => {
        this.setState({ 
            newBal: this.state.inputValue * 67.6,
        })
    }
    usToAussieDollar = () => {
        this.setState({ 
            newBal: this.state.inputValue * 1.32,
        })
    }
    usToCanadaDollar = () => {
        this.setState({ 
            newBal: this.state.inputValue * 1.3,
        })
    }
    usToFranc = () => {
        this.setState({ 
            newBal: this.state.inputValue * .99,
        })
    }
    usToYuan = () => {
        this.setState({ 
            newBal: this.state.inputValue * 6.40,
        })
    }
    usToYen = () => {
        this.setState({ 
            newBal: this.state.inputValue * 110.67,
        })
    }


    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'gray', borderWidth:1 }}
                />
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToIndianRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToAussieDollar}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToCanadaDollar}
                >
                    <Text style={styles.buttonText}>
                        USD to Canada
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}>
                    {this.state.inputValue}
                </Text>
                
                <Text style={styles.paragraph}>
                    {this.state.newBal.toFixed(2)}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
    row: {
        flexDirection:'row'
    }
});