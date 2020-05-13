import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, PanResponder, Text, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import MaterialButton from "../../components/MaterialButton";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

const screenWidth = Dimensions.get('window').width;
const itemWidthStart = screenWidth - 40;
const itemWidth = screenWidth - 80;

function WalkthroughStyle19() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const cardViewRef = useRef(null);
    const [anim] = useState(new Animated.Value(0));
    const [item, setItem] = useState(0);

    useEffect(() => {
        Animated.timing(
            anim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }, [item]);

    const handleRemove = () => {
        if (item >= 3){
            setItem(0);
        } else {
            setItem(item + 1);
        }
        Animated.timing(
            anim,
            {
                toValue: 0,
                duration: 0,
            }
        ).start(() => cardViewRef.current.resetPosition());
    };

    const widthItem = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [itemWidthStart, itemWidth]
    });

    const heightItem = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [320, 350]
    });

    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#f1f5f7'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{width: '100%', alignItems: 'center', paddingTop: 50}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Welcome!</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{
                    width: (Dimensions.get('window').width) - 40,
                    height: 320,
                    backgroundColor: 'white',
                    borderRadius: 3
                }}/>
                <Animated.View style={{position: 'absolute', alignItems: 'center'}}>
                    <WelcomeCard ref={cardViewRef} style={{width: widthItem, height: heightItem, opacity: anim}} onSwipe={handleRemove}/>
                </Animated.View>
            </View>
            <View style={{paddingTop: 10}}>
                <ViewPagerIndicator numPages={4} activeIndex={item} defaultColor='#e0e0e0' activeColor='#e91e63'/>
            </View>
            <MaterialButton title='Continue'
                            style={{width: screenWidth - 20, height: 50, backgroundColor: 'white', marginBottom: 10, marginTop: 25}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Continue clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

export default WalkthroughStyle19;

class WelcomeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemWidth: (Dimensions.get('window').width) - 80,
            pan: new Animated.ValueXY()
        };
    }

    UNSAFE_componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x}
            ]),
            onPanResponderRelease: (e, {vx, vy}) => {
                if (this.state.pan.x._value < -150) {
                    this.props.onSwipe(this.props.index)
                } else if (this.state.pan.x._value > 150) {
                    this.props.onSwipe(this.props.index)
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: 0,
                    }).start()
                }
            }
        })
    }

    resetPosition() {
        this.state.pan.setValue({x: 0, y: 0});
    }

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    getMainCardStyle() {
        let {pan} = this.state;
        return [{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3, transform: [{translateX: pan.x}, {translateY: pan.y}],
            shadowRadius: 3,
        }, this.props.style];
    }

    render() {
        return (
            <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
                <Image source={require('../../assets/icon/ic_headphone_red.png')}
                       style={{height: 100, width: 100, resizeMode: 'contain', marginVertical: 80}}/>
                <Text style={{width: 200, textAlign: 'center', fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{width: 200, fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingBottom: 30}}>Making
                    friends is easy as waving your hand back and forth.</Text>
            </Animated.View>
        );
    }
}