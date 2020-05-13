import React from 'react';
import VerificationStyle1 from '../screens/verification/VerificationStyle1';
import VerificationStyle2 from '../screens/verification/VerificationStyle2';
import VerificationStyle3 from '../screens/verification/VerificationStyle3';
import VerificationStyle4 from '../screens/verification/VerificationStyle4';
import VerificationStyle5 from '../screens/verification/VerificationStyle5';
import VerificationStyle6 from '../screens/verification/VerificationStyle6';
import VerificationStyle7 from '../screens/verification/VerificationStyle7';
import VerificationStyle8 from '../screens/verification/VerificationStyle8';
import VerificationStyle9 from '../screens/verification/VerificationStyle9';
import VerificationStyle10 from '../screens/verification/VerificationStyle10';
import VerificationStyle11 from '../screens/verification/VerificationStyle11';
import VerificationStyle12 from '../screens/verification/VerificationStyle12';
import VerificationStyle13 from '../screens/verification/VerificationStyle13';
import VerificationStyle14 from '../screens/verification/VerificationStyle14';
import VerificationStyle15 from '../screens/verification/VerificationStyle15';
import VerificationStyle16 from '../screens/verification/VerificationStyle16';
import VerificationStyle17 from '../screens/verification/VerificationStyle17';
import VerificationStyle18 from '../screens/verification/VerificationStyle18';
import VerificationStyle19 from '../screens/verification/VerificationStyle19';
import VerificationStyle20 from '../screens/verification/VerificationStyle20';

function NavigationVerification({pageState}) {

    return (
        <>
            {pageState === 'verification1' && <VerificationStyle1/>}
            {pageState === 'verification2' && <VerificationStyle2/>}
            {pageState === 'verification3' && <VerificationStyle3/>}
            {pageState === 'verification4' && <VerificationStyle4/>}
            {pageState === 'verification5' && <VerificationStyle5/>}
            {pageState === 'verification6' && <VerificationStyle6/>}
            {pageState === 'verification7' && <VerificationStyle7/>}
            {pageState === 'verification8' && <VerificationStyle8/>}
            {pageState === 'verification9' && <VerificationStyle9/>}
            {pageState === 'verification10' && <VerificationStyle10/>}
            {pageState === 'verification11' && <VerificationStyle11/>}
            {pageState === 'verification12' && <VerificationStyle12/>}
            {pageState === 'verification13' && <VerificationStyle13/>}
            {pageState === 'verification14' && <VerificationStyle14/>}
            {pageState === 'verification15' && <VerificationStyle15/>}
            {pageState === 'verification16' && <VerificationStyle16/>}
            {pageState === 'verification17' && <VerificationStyle17/>}
            {pageState === 'verification18' && <VerificationStyle18/>}
            {pageState === 'verification19' && <VerificationStyle19/>}
            {pageState === 'verification20' && <VerificationStyle20/>}
        </>
    );
}

export default NavigationVerification;
