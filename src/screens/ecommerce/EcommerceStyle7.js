import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, PanResponder, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import TabHeader from "../../components/TabHeader";

const imageHeight = 330;

function EcommerceStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const cardViewRef = useRef(null);
    const [fadeAnim] = useState(new Animated.Value(0));
    const [item, setItem] = useState(0);

    const onTabChanged = (index) => {

    };

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
            <HeaderShopping
                title='Ecommerce'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <TabHeader titles={['PROMO', 'WOMEN', 'MEN', 'KIDS']} bgColor='#ff9800' activeIndex={1}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{
                    width: '75%',
                    height: 400,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderColor: '#d0d4d6',
                    borderWidth: 0.5,
                    borderRadius: 3
                }}/>
                <View style={{
                    width: '80%',
                    height: 400,
                    marginTop: -410,
                    backgroundColor: 'white',
                    borderColor: '#d0d4d6',
                    borderWidth: 0.5,
                    borderRadius: 3
                }}/>
                <Animated.View style={{alignItems: 'center', marginTop: -425}}>
                    <EcommerceCard ref={cardViewRef} style={{opacity: fadeAnim}} onSwipe={handleRemove}
                                   onButtonClick={handleClick}/>
                </Animated.View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10}}>
                <MaterialButton title='Buy Now'
                                style={{flex: 1, marginRight: 5, backgroundColor: '#ff9800'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('buy now clicked')}/>
                <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ButtonAddToCart({onPress}) {
    return (
        <TouchableOpacity style={{
            flex: 1,
            height: 44,
            flexDirection: 'row',
            marginLeft: 5,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: 'white',
        }} onPress={onPress}>
            <Image source={require('../../assets/icon/ic_shoppig_cart.png')}
                   style={{height: 36, width: 36, tintColor: '#616161', resizeMode: 'contain'}}/>
            <Text>Add to Cart</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle7;

class EcommerceCard extends Component {

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
        this.state.pan.setValue({x: 0, y: 50});
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
            marginHorizontal: 10,
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
                <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#616161'}}>Sky Blue Dress</Text>
                        <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>Dress</Text>
                    </View>
                    <Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#bdbdbd',
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid'
                        }}>$225</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ff9800'}}> $125</Text>
                    </Text>
                </View>
                <Image source={{uri: storageImageUrl('ecommerce', 'ecommerce_7.jpg')}}
                       style={{width: '100%', height: imageHeight}}/>
            </Animated.View>
        );
    }
}