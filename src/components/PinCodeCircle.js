import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

export default class PinCodeCircle extends Component {
    input = React.createRef();
    length = this.props.length || 4;
    CODE_LENGTH = new Array(this.length).fill(0);
    border = this.props.withBorder === undefined ? false : this.props.withBorder;
    color = this.props.color;
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
                                    left: selectedIndex * 78,
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
                                    style={[styles.display, {marginLeft: index === 0 ? 20 : 0}]}
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
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginLeft: 20,
        width: 42,
        top: 0,
        bottom: 0,
    },
    display: {
        borderWidth: 0.3,
        borderColor: '#FFF',
        width: 58,
        marginRight: 20,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        borderRadius: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    text: {
        fontSize: 20,
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
        borderRadius: 1000,
        borderColor: 'rgba(58, 151, 212, 0.28)',
        borderWidth: 4,
    },
});
