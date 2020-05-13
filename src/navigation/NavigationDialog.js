import React from 'react';
import DialogStyle1 from '../screens/dialog/DialogStyle1';
import DialogStyle2 from '../screens/dialog/DialogStyle2';
import DialogStyle3 from '../screens/dialog/DialogStyle3';
import DialogStyle4 from '../screens/dialog/DialogStyle4';
import DialogStyle5 from '../screens/dialog/DialogStyle5';
import DialogStyle6 from '../screens/dialog/DialogStyle6';
import DialogStyle7 from '../screens/dialog/DialogStyle7';
import DialogStyle8 from '../screens/dialog/DialogStyle8';
import DialogStyle9 from '../screens/dialog/DialogStyle9';
import DialogStyle10 from '../screens/dialog/DialogStyle10';
import DialogStyle11 from '../screens/dialog/DialogStyle11';
import DialogStyle12 from '../screens/dialog/DialogStyle12';
import DialogStyle13 from '../screens/dialog/DialogStyle13';
import DialogStyle14 from '../screens/dialog/DialogStyle14';
import DialogStyle15 from '../screens/dialog/DialogStyle15';
import DialogStyle19 from '../screens/dialog/DialogStyle19';
import DialogStyle20 from '../screens/dialog/DialogStyle20';
import DialogStyle18 from '../screens/dialog/DialogStyle18';
import DialogStyle17 from '../screens/dialog/DialogStyle17';
import DialogStyle16 from '../screens/dialog/DialogStyle16';

function NavigationDialog({pageState}) {

    return (
        <>
            {pageState === 'dialog1' && <DialogStyle1/>}
            {pageState === 'dialog2' && <DialogStyle2/>}
            {pageState === 'dialog3' && <DialogStyle3/>}
            {pageState === 'dialog4' && <DialogStyle4/>}
            {pageState === 'dialog5' && <DialogStyle5/>}
            {pageState === 'dialog6' && <DialogStyle6/>}
            {pageState === 'dialog7' && <DialogStyle7/>}
            {pageState === 'dialog8' && <DialogStyle8/>}
            {pageState === 'dialog9' && <DialogStyle9/>}
            {pageState === 'dialog10' && <DialogStyle10/>}
            {pageState === 'dialog11' && <DialogStyle11/>}
            {pageState === 'dialog12' && <DialogStyle12/>}
            {pageState === 'dialog13' && <DialogStyle13/>}
            {pageState === 'dialog14' && <DialogStyle14/>}
            {pageState === 'dialog15' && <DialogStyle15/>}
            {pageState === 'dialog16' && <DialogStyle16/>}
            {pageState === 'dialog17' && <DialogStyle17/>}
            {pageState === 'dialog18' && <DialogStyle18/>}
            {pageState === 'dialog19' && <DialogStyle19/>}
            {pageState === 'dialog20' && <DialogStyle20/>}
        </>
    );
}

export default NavigationDialog;
