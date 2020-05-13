import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, ImageBackground, PanResponder, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialCheckBox from "../../components/MaterialCheckBox";

let margin = 10;

function LoginStyle20() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const cardViewRef = useRef(null);
    const [fadeAnim] = useState(new Animated.Value(0));
    const [item, setItem] = useState(0);

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }, [item]);

    const handleRemove = () => {
        setItem(item + 1);
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 0,
            }
        ).start(() => cardViewRef.current.resetPosition());
    };

    const handleClick = (message) => {
        snackbarRef.current.ShowSnackBarFunction(message)
    };

    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_10_960_1.jpg')}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <HeaderThreeButton
                title='Welcome'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
            />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 50}}>
                <View style={{width: '90%', height: 450, marginTop: 30, backgroundColor: 'gray', borderRadius: 3}}/>
                <Animated.View style={{alignItems: 'center', marginTop: -470}}>
                    <SignUpCard ref={cardViewRef} style={{opacity: fadeAnim}} onSwipe={handleRemove}
                                onButtonClick={handleClick}/>
                </Animated.View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle20;

class SignUpCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemWidth: (Dimensions.get('window').width) - 20,
            pan: new Animated.ValueXY()
        };
    }

    UNSAFE_componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                //return true if user is swiping, return false if it's a single click
                return !(gestureState.dx === 0 && gestureState.dy === 0)
            },
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
        this.state.pan.setValue({x: 0, y: -50});
        Animated.spring(this.state.pan, {
            toValue: 0, tension: 30, friction: 30
        }).start()
    }

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    getMainCardStyle() {
        let {pan} = this.state;
        return [this.props.style, {
            width: this.state.itemWidth,
            marginHorizontal: margin,
            marginTop: 50,
            paddingHorizontal: margin,
            paddingBottom: margin,
            backgroundColor: 'white',
            borderRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3, transform: [{translateX: pan.x}, {translateY: pan.y}],
            shadowRadius: 3,
        }];
    }

    render() {
        return (
            <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
                <Text style={{fontSize: 20, marginTop: 20, marginBottom: 10, alignSelf: 'center'}}>Sign In</Text>
                <View style={{
                    width: 86,
                    height: 86,
                    alignSelf: 'center',
                    marginVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    borderRadius: 50,
                }}>
                    <Image source={require('../../assets/icon/ic_diamond.png')}
                           style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                </View>
                <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 10,
                }}>
                    <MaterialCheckBox title='Remember me'/>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <MaterialButton title='Sign In' style={{backgroundColor: '#ff5722', marginTop: 25 }}
                                buttonPress={() => this.props.onButtonClick('Sign In clicked')}/>
                <MaterialButton title='Sign Up with Facebook'
                                style={{marginTop: 10, backgroundColor: '#3f569a'}}
                                buttonPress={() => this.props.onButtonClick('sign with facebook clicked')}/>
            </Animated.View>
        );
    }
}