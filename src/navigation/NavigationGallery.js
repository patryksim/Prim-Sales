import React from 'react';
import GalleryStyle1 from "../screens/gallery/GalleryStyle1";
import GalleryStyle2 from "../screens/gallery/GalleryStyle2";
import GalleryStyle3 from "../screens/gallery/GalleryStyle3";
import GalleryStyle4 from "../screens/gallery/GalleryStyle4";
import GalleryStyle5 from "../screens/gallery/GalleryStyle5";
import GalleryStyle6 from "../screens/gallery/GalleryStyle6";
import GalleryStyle7 from "../screens/gallery/GalleryStyle7";
import GalleryStyle8 from "../screens/gallery/GalleryStyle8";
import GalleryStyle9 from "../screens/gallery/GalleryStyle9";
import GalleryStyle10 from "../screens/gallery/GalleryStyle10";
import GalleryStyle11 from "../screens/gallery/GalleryStyle11";
import GalleryStyle12 from "../screens/gallery/GalleryStyle12";
import GalleryStyle13 from "../screens/gallery/GalleryStyle13";
import GalleryStyle14 from "../screens/gallery/GalleryStyle14";
import GalleryStyle15 from "../screens/gallery/GalleryStyle15";
import GalleryStyle16 from "../screens/gallery/GalleryStyle16";
import GalleryStyle17 from "../screens/gallery/GalleryStyle17";
import GalleryStyle18 from "../screens/gallery/GalleryStyle18";
import GalleryStyle19 from "../screens/gallery/GalleryStyle19";
import GalleryStyle20 from "../screens/gallery/GalleryStyle20";
import GalleryStyle21 from "../screens/gallery/GalleryStyle21";
import GalleryStyle22 from "../screens/gallery/GalleryStyle22";
import GalleryStyle23 from "../screens/gallery/GalleryStyle23";
import GalleryStyle24 from "../screens/gallery/GalleryStyle24";
import GalleryStyle25 from "../screens/gallery/GalleryStyle25";

function NavigationGallery ({pageState}) {

    return (
        <>
            {pageState === 'gallery1' && <GalleryStyle1/>}
            {pageState === 'gallery2' && <GalleryStyle2/>}
            {pageState === 'gallery3' && <GalleryStyle3/>}
            {pageState === 'gallery4' && <GalleryStyle4/>}
            {pageState === 'gallery5' && <GalleryStyle5/>}
            {pageState === 'gallery6' && <GalleryStyle6/>}
            {pageState === 'gallery7' && <GalleryStyle7/>}
            {pageState === 'gallery8' && <GalleryStyle8/>}
            {pageState === 'gallery9' && <GalleryStyle9/>}
            {pageState === 'gallery10' && <GalleryStyle10/>}
            {pageState === 'gallery11' && <GalleryStyle11/>}
            {pageState === 'gallery12' && <GalleryStyle12/>}
            {pageState === 'gallery13' && <GalleryStyle13/>}
            {pageState === 'gallery14' && <GalleryStyle14/>}
            {pageState === 'gallery15' && <GalleryStyle15/>}
            {pageState === 'gallery16' && <GalleryStyle16/>}
            {pageState === 'gallery17' && <GalleryStyle17/>}
            {pageState === 'gallery18' && <GalleryStyle18/>}
            {pageState === 'gallery19' && <GalleryStyle19/>}
            {pageState === 'gallery20' && <GalleryStyle20/>}
            {pageState === 'gallery21' && <GalleryStyle21/>}
            {pageState === 'gallery22' && <GalleryStyle22/>}
            {pageState === 'gallery23' && <GalleryStyle23/>}
            {pageState === 'gallery24' && <GalleryStyle24/>}
            {pageState === 'gallery25' && <GalleryStyle25/>}
        </>
    );
}

export default NavigationGallery;