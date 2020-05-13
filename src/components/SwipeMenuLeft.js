import React, {Component} from 'react';
import {Animated, Dimensions, PanResponder, StyleSheet, View} from "react-native";

class SwipeMenuLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            isOpen: false,
            menuAnim: new Animated.Value(-(props.menuWidth / 2)),
            pageAnim: new Animated.Value(0),
            menuDrag: -(props.menuWidth / 2),
            pageDrag: 0,
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
            Animated.parallel([
                Animated.timing(
                    this.state.menuAnim,
                    {
                        toValue: -(this.props.menuWidth / 2),
                        duration: 300,
                    }
                ),
                Animated.timing(
                    this.state.pageAnim,
                    {
                        toValue: 0,
                        duration: 300,
                    }
                )
            ]).start(() => {
                this.setState({isOpen: false});
            });
        } else {
            this.setState({isOpen: true, statusDrag: false});
            Animated.parallel([
                Animated.timing(
                    this.state.menuAnim,
                    {
                        toValue: 0,
                        duration: 300,
                    }
                ),
                Animated.timing(
                    this.state.pageAnim,
                    {
                        toValue: this.props.menuWidth,
                        duration: 300,
                    }
                )
            ]).start();
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
            if (dx >= -this.props.menuWidth) {
                this.setState({
                    statusDrag: true,
                    pageDrag: this.props.menuWidth + dx,
                    menuDrag: (dx / 2),
                    pageAnim: new Animated.Value(this.props.menuWidth + dx),
                    menuAnim: new Animated.Value(dx / 2)
                });
            }
        } else {
            if (dx <= this.props.menuWidth) {
                this.setState({
                    statusDrag: true,
                    pageDrag: dx,
                    menuDrag: -(this.props.menuWidth / 2) + (dx / 2),
                    pageAnim: new Animated.Value(dx),
                    menuAnim: new Animated.Value(-(this.props.menuWidth / 2) + (dx / 2))
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
        return [{
            width: this.state.screenWidth,
            height: this.state.screenHeight,
            position: 'absolute',
            left: this.state.statusDrag ? this.state.pageDrag : this.state.pageAnim,
            backgroundColor: 'white',
        }, this.props.style];
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}} onLayout={(event) => {
                let {x, y, width, height} = event.nativeEvent.layout;
                this.setState({screenWidth: width, screenHeight: height})
            }}>
                <Animated.View style={this.getMenuStyle()}>
                    {this.props.renderMenuComponent()}
                </Animated.View>
                <Animated.View style={this.getPageStyle()} {...this.panResponder.panHandlers}>
                    {this.props.renderPage()}
                </Animated.View>
            </View>
        );
    }
}

export default SwipeMenuLeft;