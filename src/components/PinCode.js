import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

export default class PinCode extends Component {
    input = React.createRef();
    length = this.props.length || 4;
    CODE_LENGTH = new Array(this.length).fill(0);
    border = this.props.withBorder === undefined ? false : this.props.withBorder;
    color = this.props.color === undefined ? '#000' : this.props.color;
    bordercolor = this.props.bordercolor === undefined ? '#000' : this.props.bordercolor;
    state = {
        value: '',
        focused: false,
    };

    handleClick = () => {
        this.input.current.focus();
    };
    handleFocus = () => {
        this.setState({focused: true});
    };
    handleBlur = () => {
        this.setState({
            focused: false,
        });
    };
    handleKeyPress = e => {
        if (e.nativeEvent.key === 'Backspace') {
            this.setState(state => {
                return {
                    value: state.value.slice(0, state.value.length - 1),
                };
            });
        }
    };
    handleChange = value => {
        this.setState(state => {
            if (state.value.length >= this.CODE_LENGTH.length) {
                return null;
            }
            return {
                value: (state.value + value).slice(0, this.CODE_LENGTH.length),
            };
        });
        return this.props.onChange((this.state.value + value).slice(0, this.CODE_LENGTH.length));
    };

    render() {
        const {value, focused} = this.state;

        const values = value.split('');

        const selectedIndex =
            values.length < this.CODE_LENGTH.length ? values.length : this.CODE_LENGTH.length - 1;

        const hideInput = !(values.length < this.CODE_LENGTH.length);

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleClick}>
                    <View style={styles.wrap}>
                        <TextInput
                            value=""
                            ref={this.input}
                            onChangeText={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            style={[
                                styles.input,
                                {
                                    left: selectedIndex * 62,
                                    opacity: hideInput ? 0 : 1,
                                    color: this.color,
                                },
                            ]}
                        />
                        {this.CODE_LENGTH.map((v, index) => {
                            const selected = values.length === index;
                            const filled =
                                values.length === this.CODE_LENGTH.length && index === this.CODE_LENGTH.length - 1;

                            return (

                                <View
                                    style={[this.border ? styles.display_border : styles.display, {
                                        marginLeft: index === 0 ? 20 : 0,
                                        borderBottomColor: this.bordercolor,
                                    }]}
                                    key={index}>
                                    <Text style={[styles.text, {color: this.color}]}>{values[index] || ''}</Text>
                                    {(selected || filled) && focused && <View style={styles.shadows}/>}
                                </View>
                            );
                        })}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    wrap: {
        position: 'relative',
        flexDirection: 'row',
    },

    input: {
        position: 'absolute',
        fontSize: 13,
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginLeft: 20,
        width: 42,
        top: 0,
        bottom: 0,
    },
    display: {
        borderBottomWidth: 1,
        width: 42,
        marginRight: 20,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    display_border: {
        borderWidth: 1,
        width: 42,
        marginRight: 20,
        height: 42,
        borderColor: '#FFF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    text: {
        fontSize: 13,
    },
    noBorder: {
        borderRightWidth: 0,
    },
    shadows: {
        position: 'absolute',
        left: -4,
        top: -4,
        bottom: -4,
        right: -4,
        borderColor: 'rgba(58, 151, 212, 0.28)',
        borderWidth: 4,
    },
});
