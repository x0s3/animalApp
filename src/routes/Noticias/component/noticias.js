import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { StackNavigator, NavigationActions } from 'react-navigation';

const noticias = [
    { titulo: "Gracias a todos los que nos apoyais", autor: 'Jose' }, { titulo: "Se busca a...", autor: 'Jose' }, { titulo: "Nueva adopción", autor: 'Jose' },
    { titulo: "Nueva aplicación en la protectora", autor: 'Jose' }, { titulo: "El ayuntamiento apoya la idea de...", autor: 'Jose' }, { titulo: "Vacunación el 17 de julio", autor: 'Jose' },
    { titulo: "Volvemos a conseguirlo", autor: 'Jose' }, { titulo: "Todo se puede conseguir", autor: 'Jose' }
];


class Noticias extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            noticiasLista: ds.cloneWithRows(noticias),
            busqueda: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        this.setState({
            busqueda: e
        });
        const newNoticia = noticias.filter((item) => {
            const creadorNoticia = item.autor.toUpperCase();
            const mensajeNoticia = e.toUpperCase();
            return creadorNoticia.indexOf(mensajeNoticia) > -1;
        });
        this.setState({
            noticiasLista: this.state.noticiasLista.cloneWithRows(newNoticia)
        });
    }

    onLearnMore = (noticias) => {
        this.props.navigation.navigate('Details', { ...noticias });
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <SearchBar
                    lightTheme
                    onChangeText={this.handleSearch}
                    placeholder='Buscar una notícia por título...'
                />
                <ListView
                    dataSource={this.state.noticiasLista}
                    renderRow={(rowData) =>
                        <ListItem
                            key={rowData.titulo}
                            title={`${rowData.titulo.toUpperCase()}`}
                            subtitle={rowData.autor}
                            onPress={() => this.onLearnMore(rowData)}
                        />
                    }
                    enableEmptySections={true}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

class NoticiaCompleta extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Autor: {this.props.navigation.state.params.autor}</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Fecha: 14 de Julio 2017 </Text>
                <Text style={{ fontWeight: 'bold' }}>Contenido: </Text>
                <TouchableOpacity
                    onPress={() => alert("Grácias por tu tiempo leyendo la noticia!")}
                    style={{
                        position: 'absolute', right: 15, borderRadius: 4, width: 80, backgroundColor: 'teal', marginTop: 4
                    }}
                >
                    <Text style={{ fontSize: 17, textAlign: 'center', fontWeight:'bold' }} children='Like' />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, padding: 5 }}>
                    Ut porttitor, nunc vel scelerisque eleifend, augue lorem rhoncus mauris, non ornare urna sem ut libero.
                    Suspendisse ac malesuada massa, eu vulputate augue. Ut auctor dictum est, eu pulvinar dolor mollis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget dui nulla. In porta, nisi quis blandit consectetur,
                    ligula urna euismod sapien, sed laoreet odio mi feugiat justo. Pellentesque interdum rutrum mi, a ultricies mauris mattis ac.
                    Ut eu tincidunt risus. Suspendisse dignissim ipsum sit amet ex congue, et luctus massa facilisis. Suspendisse consectetur
                    est nec lacus lacinia accumsan. Mauris scelerisque ultricies mollis. Praesent ut ultricies urna. Aliquam volutpat tortor eu
                    diam sollicitudin eleifend. In elementum bibendum lectus vitae posuere.
                </Text>
            </ScrollView>
        )
    }
}

export const NoticiasStack = StackNavigator({
    Noticias: {
        screen: Noticias,
        navigationOptions: {
            title: 'Noticias recientes',
            headerStyle: {
                backgroundColor: 'teal'
            }
        },
    },

    Details: {
        screen: NoticiaCompleta,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.titulo}`,
            headerStyle: {
                backgroundColor: 'teal'
            }
        }),
    },
});

export const NoticiasRoot = StackNavigator({
    Tabs: {
        screen: NoticiasStack,
    },
}, {
        headerMode: 'none',
    });


export default NoticiasRoot;
