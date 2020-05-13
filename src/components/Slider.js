import React, {Component} from 'react';
import {Animated, PanResponder, View} from "react-native";

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            panMax: new Animated.ValueXY(),
            value: this.props.initValue * (this.props.sliderSize - 15) / 100,
            dragValue: 0,
            statusDrag: false,
            layoutWidth: (this.props.sliderSize - 15),
        };
    }

    static defaultProps = {
        trackColor: '#dfe4eb',
        trackActiveColor: '#ff9800',
        trackSize: 5,
        thumbSize: 16,
        thumbTintColor: '#ff9800',
        thumbBorderColor: 'transparent',
        thumbBorderWidth: 0
    };

    UNSAFE_componentWillMount() {
        this.panResponderMax = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return true
            },
            onPanResponderGrant: (e, gestureState) => {
                this.state.panMax.setValue({x: 0, y: 0});
            },
            onPanResponderMove: this._handleMaxPanResponderMove,
            onPanResponderRelease: (e, {vx, vy}) => {
                this._handleMaxResponderRelease();
            }
        })
    }

    _handleMaxPanResponderMove = (evt, gestureState) => {
        let dx = gestureState.dx;
        if (this.state.value + dx <= this.state.layoutWidth && this.state.value + dx >= 0) {
            this.setState({
                statusDrag: true,
                dragValue: this.state.value + dx
            });
            this._handleCallbackValue();
        }
    };

    _handleMaxResponderRelease = () => {
        this.setState({statusDrag: false, value: this.state.dragValue});
    };

    _handleCallbackValue() {
        let maxVal = this.state.statusDrag ? this.state.dragValue : this.state.value;
        maxVal = Math.round(maxVal * 100 / this.state.layoutWidth);
        this.props.onChange(maxVal);
    }

    componentWillUnmount() {
        this.state.panMax.x.removeAllListeners();
        this.state.panMax.y.removeAllListeners();
    }

    getBarStyle() {
        return {
            position: 'absolute',
            left: 0,
            width: (this.state.statusDrag ? this.state.dragValue : this.state.value),
            height: this.props.trackSize,
            backgroundColor: this.props.trackActiveColor
        }
    }

    getSliderStyle() {
        return {
            position: 'absolute',
            left: this.state.statusDrag ? this.state.dragValue : this.state.value,
            width: 30,
            height: 30,
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        }
    }

    render() {
        return (
            <View style={[{justifyContent: 'center'}, this.props.style]}>
                <View style={{width: this.props.sliderSize, height: this.props.trackSize, backgroundColor: this.props.trackColor}}/>
                <Animated.View style={this.getBarStyle()}/>
                <Animated.View style={this.getSliderStyle()} {...this.panResponderMax.panHandlers}>
                    <View style={{
                        width: this.props.thumbSize,
                        height: this.props.thumbSize,
                        borderRadius: this.props.thumbSize / 2,
                        backgroundColor: this.props.thumbTintColor,
                        borderWidth: this.props.thumbBorderWidth,
                        borderColor: this.props.thumbBorderColor
                    }}/>
                </Animated.View>
            </View>
        );
    }
}

export default Slider;