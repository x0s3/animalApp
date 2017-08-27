import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '.././styles/SliderEntry.style';


export default class SliderEntry extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        illustration: PropTypes.string,
        even: PropTypes.bool,
    };

    onLearnMore = (animal) => {
        this.props.navegador.navigate('AnimalDetalles', { ...animal });
    };

    render() {
        const { title, subtitle, illustration, even, detalles } = this.props;
        const uppercaseTitle = title ? (
            <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>{title.toUpperCase()}</Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.slideInnerContainer}
                onPress={() => { this.onLearnMore({ title, subtitle, illustration, even, detalles }) }}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    <Image
                        source={{ uri: illustration }}
                        style={styles.image}
                    />
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    {uppercaseTitle}
                    <Text style={[styles.subtitle, even ? styles.subtitleEven : {}]} numberOfLines={2}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}