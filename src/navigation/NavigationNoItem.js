import React from 'react';
import VerificationStyle1 from '../screens/verification/VerificationStyle1';
import NoItemStyle1 from '../screens/noitem/NoItemStyle1';
import NoItemStyle2 from '../screens/noitem/NoItemStyle2';
import NoItemStyle3 from '../screens/noitem/NoItemStyle3';
import NoItemStyle4 from '../screens/noitem/NoItemStyle4';
import NoItemStyle5 from '../screens/noitem/NoItemStyle5';
import NoItemStyle6 from '../screens/noitem/NoItemStyle6';
import NoItemStyle7 from '../screens/noitem/NoItemStyle7';
import NoItemStyle8 from '../screens/noitem/NoItemStyle8';
import NoItemStyle9 from '../screens/noitem/NoItemStyle9';
import NoItemStyle10 from '../screens/noitem/NoItemStyle10';
import NoItemStyle11 from '../screens/noitem/NoItemStyle11';
import NoItemStyle12 from '../screens/noitem/NoItemStyle12';
import NoItemStyle13 from '../screens/noitem/NoItemStyle13';
import NoItemStyle14 from '../screens/noitem/NoItemStyle14';
import NoItemStyle15 from '../screens/noitem/NoItemStyle15';

function NavigationNoItem({pageState}) {

    return (
        <>
            {pageState === 'noitem1' && <NoItemStyle1/>}
            {pageState === 'noitem2' && <NoItemStyle2/>}
            {pageState === 'noitem3' && <NoItemStyle3/>}
            {pageState === 'noitem4' && <NoItemStyle4/>}
            {pageState === 'noitem5' && <NoItemStyle5/>}
            {pageState === 'noitem6' && <NoItemStyle6/>}
            {pageState === 'noitem7' && <NoItemStyle7/>}
            {pageState === 'noitem8' && <NoItemStyle8/>}
            {pageState === 'noitem9' && <NoItemStyle9/>}
            {pageState === 'noitem10' && <NoItemStyle10/>}
            {pageState === 'noitem11' && <NoItemStyle11/>}
            {pageState === 'noitem12' && <NoItemStyle12/>}
            {pageState === 'noitem13' && <NoItemStyle13/>}
            {pageState === 'noitem14' && <NoItemStyle14/>}
            {pageState === 'noitem15' && <NoItemStyle15/>}
        </>
    );
}

export default NavigationNoItem;
