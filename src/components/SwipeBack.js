import React, {Component} from 'react';
import {Animated, PanResponder, View} from "react-native";

class SwipeBackView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY()
        };
    }

    UNSAFE_componentWillMount() {
        this.panResponderBack = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x}
            ]),
            onPanResponderRelease: (e, {vx, vy}) => {
                if (this.state.pan.x._value > 30) {
                    this.props.onSwipeBack(this.props.index)
                }
            }
        })
    }

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={this.props.style}>
                    {this.props.children}
                </View>
                <Animated.View style={{
                    position: 'absolute',
                    width: 5,
                    height: '100%',
                    opacity: 0,
                    backgroundColor: 'transparent'
                }} {...this.panResponderBack.panHandlers}/>
            </View>
        );
    }
}

export default SwipeBackView;