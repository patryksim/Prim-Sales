import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, PanResponder, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";

let margin = 10;
let itemWidthContainer = (Dimensions.get('window').width) - (2 * margin);
let itemWidth = itemWidthContainer - (2 * margin);

function ProfileStyle9() {
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
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                isHome={true}
                title='Profile'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{
                    width: '80%',
                    height: 420,
                    marginTop: 30,
                    backgroundColor: '#f1f5f7',
                    borderColor: '#d0d4d6',
                    borderWidth: 0.5,
                    borderRadius: 3
                }}/>
                <Animated.View style={{alignItems: 'center', marginTop: -450}}>
                    <ProfileCard ref={cardViewRef} style={{opacity: fadeAnim}} onSwipe={handleRemove}
                                 onButtonClick={handleClick}/>
                </Animated.View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10}}>
                <MaterialButton title='Follow'
                                style={{flex: 1, marginRight: 5, backgroundColor: '#42bd41'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('follow me clicked')}/>
                <MaterialButton title='View Profile'
                                style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('view profile clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default ProfileStyle9;

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemWidth: (Dimensions.get('window').width) - 60,
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
                <Text style={{fontSize: 20, color: '#616161', marginTop: 15, marginLeft: 15}}>Michael Angelo</Text>
                <Text style={{fontSize: 14, color: '#616161', marginBottom: 10, marginLeft: 15}}>Manhattan, NY</Text>
                <Image source={{uri: storageImageUrl('profile', 'profile_9_image.jpg')}}
                       style={{width: '100%', height: 350}}/>
            </Animated.View>
        );
    }
}