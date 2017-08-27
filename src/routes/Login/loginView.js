import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

import RegistroMain from './Registro';
import ResetPassword from './ResetPassword';
import MenuView from '../SideMenu/MenuView';

import axios from 'axios';

const { width, height } = Dimensions.get("window");
//const imagenX = require('./images/botikX.png');
const fondoX = require('../../assets/gato_perro.png');

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main' })
    ]
});


class Login extends Component {
    resPassword() {
        this.props.navigation.navigate('ResPass');
    }

    regis() {
        this.props.navigation.navigate('Registro');
    }

    entrar() {
        /*axios.post('http://localhost:3000',{})
        .then(e => console.warn(e))
        .catch( e => console.warn(e+" error de conexion"));*/
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'https://s-media-cache-ak0.pinimg.com/736x/36/ea/08/36ea0834a36eaf280512bd4a211aba00.jpg' }} style={styles.background} resizeMode="cover">
                    <View style={styles.markWrap}>
                        <Image source={fondoX} style={styles.mark} resizeMode="contain" />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                            </View>
                            <TextInput
                                placeholder="Usuario"
                                placeholderTextColor="#FFF"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Contraseña"
                                style={styles.input}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.resPassword()}>
                            <View>
                                <Text style={styles.forgotPasswordText}>¿Olvidaste la contraseña?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.entrar()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>¿No tienes una cuenta aún?</Text>
                            <TouchableOpacity activeOpacity={.5} onPress={() => this.regis()}>
                                <View>
                                    <Text style={styles.signupLinkText}>Regístrate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }
}

class Main extends Component {
    render() {
        return <MenuView />
    }
}

class Registro extends Component {
    render() {
        return <RegistroMain />
    }
}

class ResetPassowrd extends Component {
    render() {
        return <ResetPassword />
    }
}

const App = StackNavigator({
    LoginMainStack: { screen: Login },
    Main: { screen: Main },
    Registro: { screen: Registro },
    ResPass: { screen: ResetPassowrd }
},
    {
        headerMode: 'none',
        initialRouteName: 'LoginMainStack'
    });

class LoginView extends Component {
    render() {
        return <App />
    }
}

export default LoginView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#FF3366",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    }
});