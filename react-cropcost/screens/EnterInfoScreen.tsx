import * as React from 'react';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,  TouchableOpacity, Text, View, Dimensions } from "react-native";

interface props{
    navigation: any;
}

export class EnterInfoScreen extends React.Component<props>{
    state = Dimensions.get('window');
    handler = dims => this.setState(dims);

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.handler);
    }

    render(){
        return(
            <View>
                <Text style={{textDecorationLine: "underline", fontWeight: "bold", alignSelf: 'center'}}>
                    Enter Information
                </Text>
                <View  style={{width: this.state.width/3, alignSelf:"center", flexDirection: "column"}}>
                    <TouchableOpacity onPress={() => console.log("Not init")} accessibilityLabel="Log In">
                        <Text style={styles.submit_button}>
                            Machinery Info
                        </Text>
                    </TouchableOpacity>
                </View>
                <View  style={{width: this.state.width/3, alignSelf:"center", flexDirection: "column"}}>
                    <TouchableOpacity onPress={() => console.log("Not init")} accessibilityLabel="Log In">
                        <Text style={styles.submit_button}>
                            More to Come
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    submit_button: {
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
    }
});