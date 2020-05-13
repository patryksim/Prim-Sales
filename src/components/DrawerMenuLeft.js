import React, {Component} from 'react';
import {Animated, PanResponder, View} from "react-native";

class DrawerMenuLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            isOpen: false,
            menuAnim: new Animated.Value(-(props.menuWidth)),
            menuDrag: -(props.menuWidth),
            screenWidth: 0,
            screenHeight: 0,
            statusDrag: false,
        };
    }

    static defaultProps = {
        menuWidth: 300
    };

    navigateMenu = () => {
        if (this.state.isOpen) {
            this.setState({statusDrag: false});
            Animated.timing(
                this.state.menuAnim,
                {
                    toValue: -(this.props.menuWidth),
                    duration: 300,
                }
            ).start(() => {
                this.setState({isOpen: false});
            });
        } else {
            this.setState({isOpen: true, statusDrag: false});
            Animated.timing(
                this.state.menuAnim,
                {
                    toValue: 0,
                    duration: 300,
                }
            ).start();
        }
    };

    UNSAFE_componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                if (this.state.isOpen) {
                    return (gestureState.dx < 0)
                } else {
                    return (gestureState.dx > 0)
                }
            },
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: (e, {vx, vy}) => {
                this.navigateMenu();
            }
        })
    }

    _handlePanResponderMove = (evt, gestureState) => {
        let dx = gestureState.dx;
        if (this.state.isOpen) {
            if (dx < 0){
                this.setState({
                    statusDrag: true,
                    menuDrag: dx,
                    menuAnim: new Animated.Value(dx)
                });
            }
        } else {
            if (dx <= this.props.menuWidth) {
                this.setState({
                    statusDrag: true,
                    menuDrag: -(this.props.menuWidth) + dx,
                    menuAnim: new Animated.Value(-(this.props.menuWidth) + dx)
                });
            }
        }
    };

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    getMenuStyle() {
        return [{
            width: this.props.menuWidth,
            height: this.state.screenHeight,
            position: 'absolute',
            left: this.state.statusDrag ? this.state.menuDrag : this.state.menuAnim,
            opacity: (this.state.isOpen || this.state.statusDrag) ? 1 : 0,
        }, this.props.style];
    }

    getPageStyle() {
        return {
            width: this.state.screenWidth,
            height: this.state.screenHeight,
            position: 'absolute',
            left: 0,
            backgroundColor: 'white',
        };
    }

    getPanStyle() {
        return {
            width: 50,
            height: this.state.screenHeight - 56,
            position: 'absolute',
            left: 0,
            top: 56,
            elevation: 10
        };
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'black'}} onLayout={(event) => {
                let {x, y, width, height} = event.nativeEvent.layout;
                this.setState({screenWidth: width, screenHeight: height})
            }}>
                <View style={this.getPageStyle()}>
                    {this.props.renderPage(this.state.isOpen)}
                </View>
                <View style={this.getPanStyle()} {...this.panResponder.panHandlers}/>
                <Animated.View style={this.getMenuStyle()} {...this.panResponder.panHandlers}>
                    {this.props.renderMenuComponent()}
                </Animated.View>
            </View>
        );
    }
}

export default DrawerMenuLeft;