import React, {useContext, useRef, useState, Component} from 'react';
import {TouchableOpacity, Text, View, Image, Animated} from 'react-native';
import Surface from '../../components/Surface';

export function Button({type = 'default', children, btn_color = '#E7E7E7', text_color = '#000', borderColor = '#E7E7E7', onPress}) {
    if (type === 'default') {
        return (
            <TouchableOpacity onPress={onPress} style={{
                height: 40,
                backgroundColor: btn_color,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 11,
                borderRadius: 4,
            }}>
                <Text style={{color: text_color}}>{children}</Text>
            </TouchableOpacity>
        );
    } else if (type === 'shadow') {
        return (
            <Surface style={{borderRadius: 4}}>
                <TouchableOpacity onPress={onPress} style={{
                    height: 40,
                    backgroundColor: btn_color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 11,
                    borderRadius: 4,
                }}>
                    <Text style={{color: text_color}}>{children}</Text>
                </TouchableOpacity>
            </Surface>
        );
    } else if (type === 'outline') {
        return (
            <TouchableOpacity onPress={onPress} style={{
                height: 40,
                backgroundColor: btn_color,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 11,
                borderWidth: 1,
                borderColor: borderColor,
                borderRadius: 4,
            }}>
                <Text style={{color: text_color}}>{children}</Text>
            </TouchableOpacity>
        );
    } else if (type === 'flat') {
        return (
            <Surface>

                <TouchableOpacity onPress={onPress} style={{
                    height: 40,
                    backgroundColor: btn_color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 11,
                }}>
                    <Text style={{color: text_color}}>{children}</Text>
                </TouchableOpacity>
            </Surface>
        );
    }
}

export function Header({onPress,opacity=.5, img = require('../../assets/chip/ic_menu.png'), rigthImage, bgColor = '#FFF', title = 'Settings', tintColor = '#000'}) {
    return (
        <Surface style={{marginLeft: 0, marginTop: 0, marginRight: 0}}>
            <View style={{height: 56, backgroundColor: bgColor, flexDirection: 'row'}}>
                <TouchableOpacity onPress={onPress}
                                  style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 24, height: 24, tintColor: tintColor, opacity: opacity}}
                           source={img}/>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
                    <Text style={{fontSize: 20, color: tintColor}}>{title}</Text>
                </View>
                {
                    rigthImage !== undefined
                    &&
                    <TouchableOpacity onPress={onPress}
                                      style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 24, height: 24, tintColor: tintColor, opacity: opacity}}
                               source={rigthImage}/>
                    </TouchableOpacity>
                }
            </View>
        </Surface>
    );
}

export function CircleButton({onPress, bg_color = '#FFF', img = require('../../assets/chip/ic_mic.png'), tint_color = 'grey', imgstyle}) {
    return (
        <Surface style={{height: 56, width: 56, backgroundColor: bg_color, borderRadius: 60}}>

            <TouchableOpacity onPress={onPress}
                              style={{
                                  height: 56,
                                  width: 56,
                                  backgroundColor: bg_color,
                                  borderRadius: 60,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              }}>
                <Image style={[{width: 30, height: 30, tintColor: tint_color}, imgstyle]}
                       source={img}/>
            </TouchableOpacity>
        </Surface>
    );
}

export function FloatingButton({children, with_text = true, opacity = .6}) {
    const [visible] = useState(new Animated.Value(50));
    const [opc] = useState(new Animated.Value(0));
    const [visible_] = useState(new Animated.Value(50));
    const [right] = useState(new Animated.Value(4)); //4 -> 66
    const [width] = useState(new Animated.Value(46)); //46 -> 70
    const [isOpen, setOpen] = useState(false);
    const [isBg, setBg] = useState(false);
    const show = () => {
        return () => {
            if (!isOpen) {
                setBg(true);

                Animated.parallel([
                    Animated.timing(
                        width,
                        {
                            toValue: 70,
                            duration: 200,
                        },
                    ), Animated.timing(
                        right,
                        {
                            toValue: 66,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        opc,
                        {
                            toValue: opacity,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        visible,
                        {
                            toValue: 130,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        visible_,
                        {
                            toValue: 200,
                            duration: 200,
                        },
                    ),
                ]).start(() => {
                    setOpen(true);
                });
            } else {
                Animated.parallel([
                    Animated.timing(
                        width,
                        {
                            toValue: 46,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        right,
                        {
                            toValue: 4,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        opc,
                        {
                            toValue: 0,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        visible,
                        {
                            toValue: 50,
                            duration: 200,
                        },
                    ),
                    Animated.timing(
                        visible_,
                        {
                            toValue: 50,
                            duration: 200,
                        },
                    ),
                ]).start(() => {
                    setOpen(false);
                    setBg(false);

                });
            }
        };
    };
    return (
        <View style={{position: 'absolute', top: 56, bottom: 0, left: 0, right: 0}}>
            {
                children
            }
            {
                isBg
                &&
                <Animated.View
                    style={{
                        flex: 1,
                        opacity: opc,
                        backgroundColor: '#4a4a4a',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}>

                </Animated.View>
            }


            <Animated.View style={{
                width: 136,
                height: 46,
                // backgroundColor: 'blue',
                position: 'absolute',
                right: 42,
                alignItems: 'center',
                bottom: visible,
                flexDirection: 'row',
            }}>
                {
                    with_text
                    &&

                    <Animated.View style={{
                        width: width,
                        backgroundColor: '#FFF',
                        height: 30,
                        borderRadius: 3,
                        position: 'absolute',
                        right: right,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{fontSize: 12, color: '#4a4a4a'}}>Voice</Text>
                    </Animated.View>
                }

                <Animated.View style={{
                    borderRadius: 50,
                    width: 46,
                    height: 46,
                    bottom: 0,
                    backgroundColor: '#FFF',
                    position: 'absolute',
                    right: 0,

                    borderWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: isBg ? 5 : 0,
                    margin: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 20, height: 20, tintColor: '#4a4a4a'}}
                           source={require('../../assets/chip/ic_mic.png')}/>
                </Animated.View>
            </Animated.View>
            <Animated.View style={{
                width: 136,
                height: 46,
                // backgroundColor: 'blue',
                position: 'absolute',
                right: 42,
                alignItems: 'center',
                bottom: visible_,
                flexDirection: 'row',
            }}>
                {
                    with_text
                    &&
                    <Animated.View style={{
                        width: width,
                        backgroundColor: '#FFF',
                        height: 30,
                        borderRadius: 3,
                        position: 'absolute',
                        right: right,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{fontSize: 12, color: '#4a4a4a'}}>Call</Text>

                    </Animated.View>
                }
                <Animated.View style={{
                    borderRadius: 50,
                    width: 46,
                    height: 46,
                    bottom: 0,
                    backgroundColor: '#FFF',
                    position: 'absolute',
                    right: 0,

                    borderWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: isBg ? 5 : 0,
                    margin: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 20, height: 20, tintColor: '#4a4a4a'}}
                           source={require('../../assets/chip/ic_phone.png')}/>
                </Animated.View>
            </Animated.View>
            <TouchableOpacity onPress={show()}
                              style={{
                                  width: 56,
                                  height: 56,
                                  backgroundColor: '#cd4dcc',
                                  borderRadius: 60,
                                  position: 'absolute',
                                  bottom: 50,
                                  right: 36,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              }}>
                <Image style={{width: 20, height: 20, tintColor: '#FFF'}}
                       source={require('../../assets/chip/ic_plus.png')}/>
            </TouchableOpacity>

        </View>
    )
        ;
}
