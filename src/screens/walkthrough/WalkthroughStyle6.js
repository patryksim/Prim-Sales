import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, Text, View} from 'react-native';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {PageContext} from '../../../App';
import {storageImageUrl} from '../../tools/Helpers';
import HeaderOneButton from '../../components/HeaderOneButton';

const screenWidth = (Dimensions.get('window').width);
const pageItemWidth = screenWidth - 120;
const pageItemHeight = (Dimensions.get('window').height) - 220;
const imageWidth = screenWidth - 135;

function PageItem({isActive, index}) {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        let toVal = isActive ? 1 : 0;
        Animated.timing(
            fadeAnim,
            {
                toValue: toVal,
                duration: 500,
            },
        ).start();
    }, [isActive]);

    const pageHeight = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [380, 420]
    });

    const bgColor = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#cfd8dc', 'transparent']
    });


    return (
        <View style={{
            width: pageItemWidth,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Animated.View style={{
                height: pageHeight,
                width: imageWidth,
                justifyContent: 'center',
                backgroundColor: bgColor,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
            }}>
                <Animated.Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_6.jpg')}}
                                style={{
                                    height: pageHeight,
                                    width: imageWidth,
                                    opacity: fadeAnim,
                                    resizeMode: 'stretch',
                                    backgroundColor: '#cfd8dc'
                                }}/>
            </Animated.View>
        </View>
    );
}

function WalkthroughStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton title='Welcome' bgColor='#e91e63' titleStyle={{textAlign: 'center', paddingRight: 50}}
                             navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                snapToAlignment={'start'}
                snapToInterval={pageItemWidth}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {
                    id: '4',
                    name: 'empat',
                }]}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => <PageItem isActive={index === page} index={index}/>}
                ListHeaderComponent={() => <View style={{width: 60, height: pageItemHeight + 20}}/>}
                ListFooterComponent={() => <View style={{width: 60, height: pageItemHeight + 20}}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <Text
                style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', marginBottom: 45, paddingHorizontal: 30}}>Making
                friends is easy
                as waving your hand back and forth in easy step.</Text>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default WalkthroughStyle6;
