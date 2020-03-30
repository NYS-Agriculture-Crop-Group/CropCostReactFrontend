import * as React from 'react';
import { Button, StyleSheet,  TouchableOpacity, Text, View } from "react-native";

interface props{
    navigation: any;
}

export class GreetingScreen extends React.Component<props>{
    render(){
        return(
            <View>
                <View style={styles.topbar}>
                    <Text>Opening Page</Text>
                    <Button title='Log Out' 
                            onPress={() => {console.log("Pressed log out")}}
                            accessibilityLabel="Log Out"/>
                </View>
                <Text style={styles.large_text}>MyCosts for Crop Production & Farm Tasks</Text>
                <View style={styles.text_container}>
                    <Text>ASDASDASD</Text>
                </View>
                <View style={styles.buttons_list}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} accessibilityLabel="Log In">
                        <Text style={styles.button}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Log in")} accessibilityLabel="Log In">
                        <Text style={styles.button}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Log in")} accessibilityLabel="Log In">
                        <Text style={styles.button}>
                            Explore Information
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    topbar: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    buttons_list: {
        flexDirection: "column",
        alignContent: "center",
        alignSelf: "center"
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        width: "600"
    },
    text_container: {
        backgroundColor: "lightgrey",
        margin: 10,
        borderColor: "grey",
        borderWidth: 3,
        maxHeight: 500,
        overflow: "scroll",
        alignContent: "center"
    },
    large_text: {
        fontWeight: "bold",
        alignSelf: "center"
    }

});