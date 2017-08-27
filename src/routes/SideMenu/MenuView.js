import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import NoticiasRoot from '../Noticias/component/noticias';

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

class Basic extends Component {
    state = {
        isOpen: false,
        selectedItem: <NoticiasRoot />,
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    };

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                    {this.state.selectedItem}
                <TouchableOpacity style={styles.button} onPress={() => this.toggle()}>
                    <Image
                        source={require('../../assets/line-menu.png')} style={{ width: 28, height: 28 }} />
                </TouchableOpacity>
            </SideMenu>
        );
    }
};

export default Basic;

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 0,
        left:0,
        padding: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});