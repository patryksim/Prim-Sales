import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, View} from "react-native";

function PageSwiper({data, itemWidth, itemHeight, renderItem, containerStyle = {}}) {

    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    let headerFooterSize = (Dimensions.get('window').width - itemWidth) / 2;

    return (
        <View style={containerStyle}>
            <FlatList
                ref={flatlistRef}
                contentContainerStyle={{height: itemHeight}}
                horizontal
                pagingEnabled={true}
                snapToAlignment={'start'}
                snapToInterval={itemWidth}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => renderItem(data, index ===  page, page)}
                ListHeaderComponent={() => <View style={{width: headerFooterSize, height: itemHeight}}/>}
                ListFooterComponent={() => <View style={{width: headerFooterSize, height: itemHeight}}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
        </View>
    );
}

export default PageSwiper;