import React, {useRef, useState, useContext} from 'react';
import {Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';

export function BottomModal({children, visible = false, style, backDropPress}) {
    // const [visible, setVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={{flex: 1, backgroundColor: 'rgba(105,105,105,0.8)'}}>
                <TouchableWithoutFeedback onPress={backDropPress}>
                    <View style={{flex: 1}}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={[{
                    position: 'absolute',
                    bottom: 0,
                    minHeight: 200,
                    backgroundColor: '#FFF',
                    left:0,
                    right:0
                    // width: '100%',
                }, style]}>
                    {
                        children
                    }

                </View>
            </View>
        </Modal>
    );
}
