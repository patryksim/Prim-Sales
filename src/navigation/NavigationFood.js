import React from 'react';
import FoodStyle1 from "../screens/food/FoodStyle1";
import FoodStyle2 from "../screens/food/FoodStyle2";
import FoodStyle3 from "../screens/food/FoodStyle3";
import FoodStyle4 from "../screens/food/FoodStyle4";
import FoodStyle5 from "../screens/food/FoodStyle5";
import FoodStyle6 from "../screens/food/FoodStyle6";
import FoodStyle7 from "../screens/food/FoodStyle7";
import FoodStyle8 from "../screens/food/FoodStyle8";
import FoodStyle9 from "../screens/food/FoodStyle9";
import FoodStyle10 from "../screens/food/FoodStyle10";
import FoodStyle11 from "../screens/food/FoodStyle11";
import FoodStyle12 from "../screens/food/FoodStyle12";

function NavigationFood ({pageState}) {

    return (
        <>
            {pageState === 'food1' && <FoodStyle1/>}
            {pageState === 'food2' && <FoodStyle2/>}
            {pageState === 'food3' && <FoodStyle3/>}
            {pageState === 'food4' && <FoodStyle4/>}
            {pageState === 'food5' && <FoodStyle5/>}
            {pageState === 'food6' && <FoodStyle6/>}
            {pageState === 'food7' && <FoodStyle7/>}
            {pageState === 'food8' && <FoodStyle8/>}
            {pageState === 'food9' && <FoodStyle9/>}
            {pageState === 'food10' && <FoodStyle10/>}
            {pageState === 'food11' && <FoodStyle11/>}
            {pageState === 'food12' && <FoodStyle12/>}
        </>
    );
}

export default NavigationFood;