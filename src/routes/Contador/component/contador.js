import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { aumentar, disminuir } from '../reducer/contadorReducer';

class Contador extends Component {

    render() {
        const { contador, aumentar, disminuir } = this.props;
        return (
            <View style={{backgroundColor:'#fff',flex:1,paddingTop:60}}>
                <Text style={style.contador}>Contador: {contador}</Text>
                <Button title="Aumentar contador" onPress={() => aumentar()} />
                <Button title="Disminuar contador" onPress={() => disminuir()} />
            </View>
        )
    }
}

const mapDispatchToProps = {
    aumentar: () => aumentar(1),
    disminuir: () => disminuir(1)
};

const style = StyleSheet.create({
    contador: {
        fontSize: 20,
        color: 'blue',
    }
});

const mapStateToProps = (state) => ({
    contador: state.contador.contador
});

export default connect(mapStateToProps, mapDispatchToProps)(Contador);