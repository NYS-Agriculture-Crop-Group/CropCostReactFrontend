import * as React from 'react';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,  TouchableOpacity, Text, View, Dimensions } from "react-native";

interface props{
    navigation: any;
}

export class LoginScreen extends React.Component<props>{
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
                <View style={{width: this.state.width/3, alignSelf:"center"}}>
                    <Input placeholder="Username" leftIcon={
                        <Icon name="user" size={24} color='black'></Icon>
                    } label="Username"/>
                    <Input placeholder="Password" leftIcon={
                        <Icon name="lock" size={24} color='black'></Icon>
                    } label="Password"/>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} accessibilityLabel="Log In">
                        <Text style={styles.submit_button}>
                            Log In
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