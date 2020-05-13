import React from 'react';
import {ScrollView, View} from "react-native";

function MultiColumnView({data, numColumns = 1, renderItem, containerStyle={}}) {
    let colData = [];
    for (let i = 0; i < numColumns; i++) {
        let itemData = [];
        let dataId = i;
        for (let j = 0; j < data.length; j++) {
            if (j === dataId) {
                itemData.push(<View key={dataId}>{renderItem(data[dataId], numColumns)}</View>);
                dataId = dataId + numColumns;
            }
        }
        colData.push(
            <View key={i}>
                {itemData}
            </View>
        );
    }

    return (
        <View style={[{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}, containerStyle]}>
            {colData}
        </View>
    );
}

export default MultiColumnView;