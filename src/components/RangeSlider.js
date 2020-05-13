import React, {Component} from 'react';
import {Animated, Dimensions, PanResponder, StyleSheet, View} from "react-native";

class RangeSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            panMin: new Animated.ValueXY(),
            panMax: new Animated.ValueXY(),
            minValue: this.props.initMinValue * (this.props.sliderSize - 30) / (this.props.maxValue - this.props.minValue),
            maxValue: this.props.initMaxValue * (this.props.sliderSize - 30) / (this.props.maxValue - this.props.minValue),
            minDragValue: 0,
            maxDragValue: 0,
            statusMinDrag: false,
            statusMaxDrag: false,
            layoutWidth: (this.props.sliderSize - 30),
        };
    }

    static defaultProps = {
        sliderSize: 100,
        trackColor: '#f1f5f7',
        trackActiveColor: '#ff9800',
        thumbColor: '#ff9800',
        minValue: 0,
        maxValue: 100,
        initMinValue: 10,
        initMaxValue: 90
    };

    UNSAFE_componentWillMount() {
        this.panResponderMin = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return true
            },
            onPanResponderGrant: (e, gestureState) => {
                this.state.panMin.setValue({x: 0, y: 0});
            },
            onPanResponderMove: this._handleMinPanResponderMove,
            onPanResponderRelease: (e, {vx, vy}) => {
                this._handleMinResponderRelease();
            }
        });
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

    _handleMinPanResponderMove = (evt, gestureState) => {
        let dx = gestureState.dx;
        if (this.state.minValue + dx >= 0 && this.state.minValue + dx + 20 < this.state.maxValue) {
            this.setState({
                statusMinDrag: true,
                minDragValue: this.state.minValue + dx
            });
            this._handleCallbackValue();
        }
    };

    _handleMaxPanResponderMove = (evt, gestureState) => {
        let dx = gestureState.dx;
        if (this.state.maxValue + dx <= this.state.layoutWidth && this.state.maxValue + dx - 20 > this.state.minValue) {
            this.setState({
                statusMaxDrag: true,
                maxDragValue: this.state.maxValue + dx
            });
            this._handleCallbackValue();
        }
    };

    _handleMinResponderRelease = () => {
        this.setState({statusMinDrag: false, minValue: this.state.minDragValue});
    };

    _handleMaxResponderRelease = () => {
        this.setState({statusMaxDrag: false, maxValue: this.state.maxDragValue});
    };

    _handleCallbackValue (){
        let rangeValue = this.props.maxValue - this.props.minValue;
        let minVal = this.state.statusMinDrag ? this.state.minDragValue : this.state.minValue;
        minVal = Math.round(minVal * rangeValue / this.state.layoutWidth);
        let maxVal = this.state.statusMaxDrag ? this.state.maxDragValue : this.state.maxValue;
        maxVal = Math.round(maxVal * rangeValue / this.state.layoutWidth);
        this.props.onChange(minVal + this.props.minValue, maxVal);
    }

    componentWillUnmount() {
        this.state.panMin.x.removeAllListeners();
        this.state.panMax.x.removeAllListeners();
        this.state.panMin.y.removeAllListeners();
        this.state.panMax.y.removeAllListeners();
    }

    getStyleBarStyle() {
        return [{
            position: 'absolute',
            left: this.state.statusMinDrag ? this.state.minDragValue : this.state.minValue,
            width: (this.state.statusMaxDrag ? this.state.maxDragValue : this.state.maxValue)
            - (this.state.statusMinDrag ? this.state.minDragValue : this.state.minValue) + 15,
            height: 5,
            backgroundColor: this.props.trackActiveColor
        }, this.props.barStyle]
    }

    getStyleMinStyle() {
        return {
            position: 'absolute',
            left: this.state.statusMinDrag ? this.state.minDragValue : this.state.minValue,
            width: 30,
            height: 30,
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        }
    }

    getStyleMaxStyle() {
        return {
            position: 'absolute',
            left: this.state.statusMaxDrag ? this.state.maxDragValue : this.state.maxValue,
            width: 30,
            height: 30,
            alignItems: 'flex-end',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        }
    }

    render() {
        return (
            <View style={[{justifyContent: 'center'}, this.props.style]}>
                <View style={{width: this.props.sliderSize, height: 3, backgroundColor: this.props.trackColor}}/>
                <Animated.View style={this.getStyleBarStyle()}/>
                <Animated.View style={this.getStyleMinStyle()} {...this.panResponderMin.panHandlers}>
                    <View style={{width: 16, height: 16, borderRadius: 8, backgroundColor: this.props.thumbColor}}/>
                </Animated.View>
                <Animated.View style={this.getStyleMaxStyle()} {...this.panResponderMax.panHandlers}>
                    <View style={{width: 16, height: 16, borderRadius: 8, backgroundColor: this.props.thumbColor}}/>
                </Animated.View>
            </View>
        );
    }
}

export default RangeSlider;