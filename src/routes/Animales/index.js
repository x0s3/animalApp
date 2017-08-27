import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles from './styles/index.style';
import { ENTRIES2 } from './static/animales';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Tile } from 'react-native-elements';


class AnimalDetalles extends Component {
    render() {
        return (
            <View>
                <Tile
                    imageSrc={{ uri: this.props.navigation.state.params.illustration }}
                    title={this.props.navigation.state.params.title}
                />
                <Text style={{fontSize:15}}>Raza:Labradador</Text>
                <Text style={{fontSize:15}}>Edad: 3 meses</Text>
                <Text style={{fontSize:15}}>Vacunado: Sí</Text>
            </View>
        )
    }
}

class Animales extends Component {

    onLearnMore = (animal) => {
        this.props.navigation.navigate('Details', { ...animal });
    };

    getAnimales(entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                    key={`carousel-entry-${index}`}
                    detalles={this.onLearnMore}
                    navegador={this.props.navigation}
                    even={(index + 1) % 2 === 0}
                    title={entry.title}
                    {...entry}
                />
            );
        });
    }

    get animalesCarrousel() {
        return (
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={2500}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
            >
                {this.getAnimales(ENTRIES2)}
            </Carousel>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                />
                <View style={styles.colorsContainer}>
                    <View style={styles.color1} />
                    <View style={styles.color2} />
                </View>
                <ScrollView
                    style={styles.scrollview}
                    indicatorStyle={'white'}
                    scrollEventThrottle={200}
                >
                    <Text style={styles.title}>Animales que buscan un hogar</Text>
                    <Text style={styles.subtitle}></Text>
                    {this.animalesCarrousel}
                </ScrollView>
            </View>
        );
    }
}

export const AnimalesStack = StackNavigator({
    Animales: {
        screen: Animales,
        navigationOptions: {
            title: 'Animales sin hogar',
            headerStyle: {
                backgroundColor: 'teal'
            }
        },
    },

    AnimalDetalles: {
        screen: AnimalDetalles,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`,
            headerStyle: {
                backgroundColor: 'teal'
            }
        }),
    },
});

export const AnimalesRoot = StackNavigator({
    Tabs: {
        screen: AnimalesStack,
    },
}, {
        headerMode: 'none',
    });


export default AnimalesRoot;