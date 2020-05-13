import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import PageSwiper from "../../components/PageSwiper";
import TabHeader from "../../components/TabHeader";

function GalleryStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [data, setData] = useState([]);
    const [screenHeight, setScreenHeight] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const pageItemWidth = screenWidth - 60;
    const pageItemHeight = screenHeight - 200;

    const [page, setPage] = useState(0);

    const onTabChanged = (index) => {

    };

    useEffect(() => {
        let dt = [];
        for (let i = 0; i < 25; i++) {
            dt.push({id: i.toString(), name: 'data'})
        }
        setData(dt);
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}} onLayout={(event) => {
            let {x, y, width, height} = event.nativeEvent.layout;
            setScreenHeight(height);
            setScreenWidth(width);
        }}>
            <HeaderThreeButton
                title='Gallery'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
                shadow={false}
            />
            <TabHeader titles={['PHOTO', 'VIDEO', 'DOCUMENT']} bgColor='#8bc34a' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <PageSwiper
                containerStyle={{marginTop: 10}}
                data={data}
                itemWidth={pageItemWidth}
                itemHeight={pageItemHeight}
                renderItem={(data, isActive, page) => <PageItem isActive={isActive}
                                                                pageItemWidth={pageItemWidth}
                                                                pageItemHeight={pageItemHeight}>{setPage(page)}</PageItem>}
            />
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#616161'}}>Minimalist Interior</Text>
                <Text
                    style={{fontSize: 14, color: '#616161'}}>124 photos</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function PageItem({isActive, pageItemWidth, pageItemHeight}) {
    const [fadeAnim] = useState(new Animated.Value(0));
    const pageSpacing = 20;

    useEffect(() => {
        let toVal = isActive ? 1 : 0;
        Animated.timing(
            fadeAnim,
            {
                toValue: toVal,
                duration: 500,
            }
        ).start();
    }, [isActive]);

    return (
        <View style={{
            width: pageItemWidth,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                height: pageItemHeight,
                width: pageItemWidth - pageSpacing,
                justifyContent: 'center',
                backgroundColor: '#263238',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Animated.View style={{height: pageItemHeight, width: pageItemWidth - pageSpacing, opacity: fadeAnim}}>
                    <Image source={{uri: storageImageUrl('gallery', 'gallery_10_img_1.jpg')}}
                           style={{height: pageItemHeight, width: pageItemWidth - pageSpacing, resizeMode: 'cover'}}/>
                </Animated.View>
            </View>
        </View>
    );
}

export default GalleryStyle15;