import React, {Component} from 'react';
import {Animated, Dimensions, PanResponder, View} from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SwipeMenuRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            isOpen: false,
            pageAnim: new Animated.Value(-(screenWidth)),
            pageDrag: 0,
            statusDrag: false,
        };
    }

    static defaultProps = {
        menuWidth: 300
    };

    navigateMenu = () => {
        this.setState({statusDrag: false});
        if (this.state.isOpen){
            Animated.timing(
                this.state.pageAnim,
                {
                    toValue: -(screenWidth),
                    duration: 300,
                }
            ).start(() => {
                this.setState({isOpen: false});
            });
        } else {
            this.setState({isOpen: true});
            Animated.timing(
                this.state.pageAnim,
                {
                    toValue: -(screenWidth + this.props.menuWidth),
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
                    return (gestureState.dx > 0)
                } else {
                    return (gestureState.dx < 0)
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
            if (dx > 0 && dx <= this.props.menuWidth) {
                this.setState({
                    statusDrag: true,
                    pageDrag: -(screenWidth + this.props.menuWidth) + dx,
                    pageAnim: new Animated.Value(-(screenWidth + this.props.menuWidth) + dx),
                });
            }
        } else {
            if (-dx <= this.props.menuWidth && dx < 0) {
                this.setState({
                    statusDrag: true,
                    pageDrag: -(screenWidth - dx),
                    pageAnim: new Animated.Value(-(screenWidth - dx)),
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
            marginLeft: screenWidth - this.props.menuWidth,
        }, this.props.menuStyle];
    }

    getPageStyle() {
        return [{
            width: screenWidth,
            marginLeft: this.state.statusDrag ? this.state.pageDrag : this.state.pageAnim,
            backgroundColor: this.state.isOpen ? '#f1f5f7' : 'white',
        }, this.props.style];
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
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

export default SwipeMenuRight;