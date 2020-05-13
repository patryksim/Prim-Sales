import React from 'react';
import NewsStyle1 from "../screens/news/NewsStyle1";
import NewsStyle2 from "../screens/news/NewsStyle2";
import NewsStyle3 from "../screens/news/NewsStyle3";
import NewsStyle4 from "../screens/news/NewsStyle4";
import NewsStyle5 from "../screens/news/NewsStyle5";
import NewsStyle6 from "../screens/news/NewsStyle6";
import NewsStyle7 from "../screens/news/NewsStyle7";
import NewsStyle8 from "../screens/news/NewsStyle8";
import NewsStyle9 from "../screens/news/NewsStyle9";
import NewsStyle10 from "../screens/news/NewsStyle10";
import NewsStyle11 from "../screens/news/NewsStyle11";
import NewsStyle12 from "../screens/news/NewsStyle12";
import NewsStyle13 from "../screens/news/NewsStyle13";
import NewsStyle14 from "../screens/news/NewsStyle14";
import NewsStyle15 from "../screens/news/NewsStyle15";

function NavigationNews ({pageState}) {

    return (
        <>
            {pageState === 'news1' && <NewsStyle1/>}
            {pageState === 'news2' && <NewsStyle2/>}
            {pageState === 'news3' && <NewsStyle3/>}
            {pageState === 'news4' && <NewsStyle4/>}
            {pageState === 'news5' && <NewsStyle5/>}
            {pageState === 'news6' && <NewsStyle6/>}
            {pageState === 'news7' && <NewsStyle7/>}
            {pageState === 'news8' && <NewsStyle8/>}
            {pageState === 'news9' && <NewsStyle9/>}
            {pageState === 'news10' && <NewsStyle10/>}
            {pageState === 'news11' && <NewsStyle11/>}
            {pageState === 'news12' && <NewsStyle12/>}
            {pageState === 'news13' && <NewsStyle13/>}
            {pageState === 'news14' && <NewsStyle14/>}
            {pageState === 'news15' && <NewsStyle15/>}
        </>
    );
}

export default NavigationNews;