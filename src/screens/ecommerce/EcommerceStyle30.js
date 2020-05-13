import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";

function EcommerceStyle30() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <HomeItem title='WOMAN COLLECTIONS' image='ecommerce_30_img_1.jpg' snackbarRef={snackbarRef}/>
            <HomeItem title='MEN COLLECTIONS' image='ecommerce_30_img_2.jpg' snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HomeItem({title, image, snackbarRef}) {

    return (
        <ImageBackground style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}
                         source={{uri: storageImageUrl('ecommerce', image)}}>
            <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 4,
                marginTop: 10,
                marginBottom: 10
            }}>{title}</Text>
            <MaterialButton title='SHOP NOW'
                            style={{
                                width: 140,
                                height: 44,
                                marginTop: 10,
                                backgroundColor: 'transparent',
                                borderColor: 'white',
                                borderWidth: 1
                            }}
                            titleStyle={{color: 'white'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Shop now clicked')}/>
        </ImageBackground>
    );
}

export default EcommerceStyle30;