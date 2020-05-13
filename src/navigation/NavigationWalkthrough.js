import React from 'react';
import WalkthroughStyle1 from "../screens/walkthrough/WalkthroughStyle1";
import WalkthroughStyle2 from "../screens/walkthrough/WalkthroughStyle2";
import WalkthroughStyle3 from "../screens/walkthrough/WalkthroughStyle3";
import WalkthroughStyle4 from "../screens/walkthrough/WalkthroughStyle4";
import WalkthroughStyle5 from "../screens/walkthrough/WalkthroughStyle5";
import WalkthroughStyle6 from "../screens/walkthrough/WalkthroughStyle6";
import WalkthroughStyle7 from "../screens/walkthrough/WalkthroughStyle7";
import WalkthroughStyle8 from "../screens/walkthrough/WalkthroughStyle8";
import WalkthroughStyle9 from "../screens/walkthrough/WalkthroughStyle9";
import WalkthroughStyle10 from "../screens/walkthrough/WalkthroughStyle10";
import WalkthroughStyle11 from "../screens/walkthrough/WalkthroughStyle11";
import WalkthroughStyle12 from "../screens/walkthrough/WalkthroughStyle12";
import WalkthroughStyle13 from "../screens/walkthrough/WalkthroughStyle13";
import WalkthroughStyle14 from "../screens/walkthrough/WalkthroughStyle14";
import WalkthroughStyle15 from "../screens/walkthrough/WalkthroughStyle15";
import WalkthroughStyle16 from "../screens/walkthrough/WalkthroughStyle16";
import WalkthroughStyle17 from "../screens/walkthrough/WalkthroughStyle17";
import WalkthroughStyle18 from "../screens/walkthrough/WalkthroughStyle18";
import WalkthroughStyle19 from "../screens/walkthrough/WalkthroughStyle19";
import WalkthroughStyle20 from "../screens/walkthrough/WalkthroughStyle20";

function NavigationWalkthrough ({pageState}) {

    return (
        <>
            {pageState === 'walkthrough1' && <WalkthroughStyle1/>}
            {pageState === 'walkthrough2' && <WalkthroughStyle2/>}
            {pageState === 'walkthrough3' && <WalkthroughStyle3/>}
            {pageState === 'walkthrough4' && <WalkthroughStyle4/>}
            {pageState === 'walkthrough5' && <WalkthroughStyle5/>}
            {pageState === 'walkthrough6' && <WalkthroughStyle6/>}
            {pageState === 'walkthrough7' && <WalkthroughStyle7/>}
            {pageState === 'walkthrough8' && <WalkthroughStyle8/>}
            {pageState === 'walkthrough9' && <WalkthroughStyle9/>}
            {pageState === 'walkthrough10' && <WalkthroughStyle10/>}
            {pageState === 'walkthrough11' && <WalkthroughStyle11/>}
            {pageState === 'walkthrough12' && <WalkthroughStyle12/>}
            {pageState === 'walkthrough13' && <WalkthroughStyle13/>}
            {pageState === 'walkthrough14' && <WalkthroughStyle14/>}
            {pageState === 'walkthrough15' && <WalkthroughStyle15/>}
            {pageState === 'walkthrough16' && <WalkthroughStyle16/>}
            {pageState === 'walkthrough17' && <WalkthroughStyle17/>}
            {pageState === 'walkthrough18' && <WalkthroughStyle18/>}
            {pageState === 'walkthrough19' && <WalkthroughStyle19/>}
            {pageState === 'walkthrough20' && <WalkthroughStyle20/>}
        </>
    );
}

export default NavigationWalkthrough;