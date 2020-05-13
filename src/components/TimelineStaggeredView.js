import React from 'react';
import {Dimensions, ScrollView, View} from "react-native";

const screenWidth = Dimensions.get('window').width;

function TimelineStaggeredView({data, renderItem, containerStyle = {}}) {
    const wItem = (screenWidth / 2);
    let colData = [];
    data = [{id: 'start'}, ...data];
    for (let i = 0; i < 2; i++) {
        let itemData = [];
        let dataId = i;
        for (let j = 0; j < data.length; j++) {
            if (j === dataId) {
                if (data[dataId].id === 'start') {
                    itemData.push(<View key='start' style={{height: 50}}/>)
                } else {
                    itemData.push(<View style={{width: wItem}}
                                        key={dataId}>{renderItem(data[dataId], j % 2 === 0)}</View>);
                }
                dataId = dataId + 2;
            }
        }
        colData.push(
            <View key={i}>
                {itemData}
            </View>
        );
    }

    return (
        <ScrollView style={[{flex: 1}, containerStyle]} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 2, marginLeft: (screenWidth / 2) - 1, backgroundColor: '#e0e0e0'}}/>
                <View style={{flex: 1, marginLeft: -((screenWidth / 2) + 1), flexDirection: 'row'}}>
                    {colData}
                </View>
            </View>
        </ScrollView>
    );
}

export default TimelineStaggeredView;