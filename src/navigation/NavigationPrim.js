import React from 'react';
import CustomersList from "../screens/prim/CustomersList";


function NavigationPrim ({pageState}) {

    return (
        <>
            {pageState === 'customerslist' && <CustomersList/>}
        </>
    );
}

export default NavigationPrim;