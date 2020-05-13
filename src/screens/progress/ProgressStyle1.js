import React, {useContext, useRef} from 'react';
import {Platform, ProgressBarAndroid, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import CircularProgress from "../../components/CircularProgress";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import FloatingButton from "../../components/FloatingButton";

function ProgressStyle1 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='MY FILES'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                shadow={false}
                bgColor='#2640e8'
            />
            <View style={{width: '100%', height: 52, backgroundColor: '#2640e8'}}/>
            <FloatingButton style={{position: 'relative', backgroundColor: '#ffaf1d', marginLeft: 20, marginTop: -30}}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {Platform.OS === 'android' && <ProgressBarAndroid color='#ff4ec8'/> }
                {Platform.OS === 'ios' && <CircularProgress bgColor='#eeeeee' progressColor='#ff4ec8'/> }
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default ProgressStyle1;