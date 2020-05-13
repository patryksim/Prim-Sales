import React from 'react';
import {Animated, Dimensions} from "react-native";
import useTransition from "../hooks/UseTransition";
import NavigationLogin from "./NavigationLogin";
import NavigationWalkthrough from "./NavigationWalkthrough";
import NavigationMenu from "./NavigationMenu";
import NavigationActivity from "./NavigationActivity";
import NavigationProfile from "./NavigationProfile";
import NavigationGallery from "./NavigationGallery";
import NavigationNews from "./NavigationNews";
import NavigationFood from "./NavigationFood";
import NavigationMap from "./NavigationMap";
import NavigationEcommerce from "./NavigationEcommerce";
import NavigationVerification from './NavigationVerification';
import NavigationDialog from './NavigationDialog';
import NavigationNoItem from './NavigationNoItem';
import NavigationProgress from "./NavigationProgress";
import NavigationBottomNavigation from './NavigationBottom';
import NavigationChipsNavigation from './NavigationChips';
import NavigationDashboard from "./NavigationDashboard";
import NavigationMusic from "./NavigationMusic";

const screenWidth = Dimensions.get('window').width;

function Navigation ({page}) {
    const [pageState, moveAnim] = useTransition(page);

    return (
        <Animated.View style={{width: screenWidth, backgroundColor: '#434244', marginLeft: moveAnim}}>
            <NavigationLogin pageState={pageState}/>
            <NavigationWalkthrough pageState={pageState}/>
            <NavigationMenu pageState={pageState}/>
            <NavigationActivity pageState={pageState}/>
            <NavigationProfile pageState={pageState}/>
            <NavigationGallery pageState={pageState}/>
            <NavigationNews pageState={pageState}/>
            <NavigationFood pageState={pageState}/>
            <NavigationMap pageState={pageState}/>
            <NavigationEcommerce pageState={pageState}/>
            <NavigationVerification pageState={pageState}/>
            <NavigationDialog pageState={pageState}/>
            <NavigationNoItem pageState={pageState}/>
            <NavigationProgress pageState={pageState}/>
            <NavigationBottomNavigation pageState={pageState}/>
            <NavigationChipsNavigation pageState={pageState}/>
            <NavigationDashboard pageState={pageState}/>
            <NavigationMusic pageState={pageState}/>
        </Animated.View>
    );
}

export default Navigation;
