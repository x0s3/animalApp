import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';

import NoticiasRoot from '../Noticias/component/noticias';
import AnimalesRoot from '../Animales/index';


const window = Dimensions.get('window');
const uri = 'http://www.drodd.com/images14/x12.jpg';

class Menu extends Component {
    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri }} />
                    <Text style={styles.name}>Usuario: x0s3</Text>
                </View>

                <Text
                    onPress={() => this.props.onItemSelected(<NoticiasRoot/>)}
                    style={styles.item}
                    children='Últimas noticias'
                />

                <Text
                    onPress={() => this.props.onItemSelected(<AnimalesRoot/>)}
                    style={styles.item}
                    children='Nuestros animales'
                />

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}
                    style={styles.item}
                    children='Contacta con nosotros'
                />

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}
                    style={styles.item}
                    children='Cerrar sesión'
                />

                <Text style={{ color: 'grey' }} children="desarrollado por x0s3" />
            </ScrollView>
        );
    }
};

export default Menu;

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#191715',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
        color: '#fff'
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
        color: '#fff'
    },
});
