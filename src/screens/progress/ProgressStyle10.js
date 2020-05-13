import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";

function ProgressStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    const prevPage = () => {
        if (page > 0) {
            flatlistRef.current.scrollToIndex({ animated: true, index: page - 1 });
        }
    };

    const nextPage = () => {
        if (page < 5) {
            flatlistRef.current.scrollToIndex({ animated: true, index: page + 1 });
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: '#dfe4eb'}}>
            <HeaderTwoButton
                title='PROGRESS'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                shadow={false}
                bgColor='#2640e8'
            />
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PageItem page={item.id}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20, backgroundColor: '#fafafa'}}>
                <TouchableOpacity onPress={prevPage} style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 12, width: 12, tintColor: 'black', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}>BACK</Text>
                </TouchableOpacity>
                <HorizontalProgress progress={(page + 1) / 6} width={150}/>
                <TouchableOpacity onPress={nextPage} style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, color: 'black', marginRight: 10}}>NEXT</Text>
                    <Image source={require('../../assets/icon/ic_chevron_right.png')}
                           style={{height: 12, width: 12, tintColor: 'black', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function PageItem({page}) {
    return (
        <View style={{flex: 1, width: (Dimensions.get('window').width), alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'black'}}>Step {page} of 6</Text>
        </View>
    );
}

function HorizontalProgress({progress, width}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{height: 4, width: progress * width, backgroundColor: '#2640e8'}}/>
            <View style={{height: 4, width: (1 - progress) * width, backgroundColor: '#e0e2f6'}}/>
        </View>
    );
}

export default ProgressStyle10;