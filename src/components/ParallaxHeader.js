import React, {Component} from 'react';
import {Animated, ScrollView, Text, View} from "react-native";


export default class ParallaxHeader extends Component {
    HEADER_MAX_HEIGHT = this.props.headerSize;
    HEADER_MIN_HEIGHT = 60;
    HEADER_SCROLL_DISTANCE = this.HEADER_MAX_HEIGHT - this.HEADER_MIN_HEIGHT;

    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    static defaultProps = {
        renderFloatingButton: () => {},
        headerSize: 300
    };

    render() {
        const fbMargin = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_MAX_HEIGHT - 100, this.HEADER_SCROLL_DISTANCE],
            outputRange: [this.HEADER_MAX_HEIGHT - 30, 70, 70],
            extrapolate: 'clamp',
        });

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_SCROLL_DISTANCE],
            outputRange: [this.HEADER_MAX_HEIGHT, this.HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_SCROLL_DISTANCE / 2, this.HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });

        return (
            <View style={[{flex: 1}, this.props.style]}>
                <ScrollView
                    style={{flex: 1}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}
                >
                    <View style={[{marginTop: this.HEADER_MAX_HEIGHT}, this.props.contentContainerStyle]}>
                        {this.props.children}
                    </View>
                </ScrollView>
                <Animated.View style={[{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: this.props.headerColor,
                    overflow: 'hidden',
                }, {height: headerHeight}]}>
                    <Animated.Image
                        style={[
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                width: null,
                                height: this.HEADER_MAX_HEIGHT,
                                resizeMode: 'cover',

                            },
                            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                        ]}
                        source={this.props.headerImage}
                    />
                    {this.props.renderHeader()}
                </Animated.View>
                <Animated.View style={{height: 50, position: 'absolute', top: fbMargin, right: 20}}>
                    {this.props.renderFloatingButton()}
                </Animated.View>
            </View>
        );
    }
}