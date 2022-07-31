/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React from 'react';

import Header from '../components/_children/Header';
import Body_1 from '../components/_children/Body_1';
import Body_2 from '../components/_children/Body_2';
import Body_3 from '../components/_children/Body_3';
import Body_4 from '../components/_children/Body_4';

const RouterBlock = () => {
    return ( 
        <div className="new-blocks-wrap">
            <Header />
            <Body_1 />
            <Body_2 />
            <Body_3 />
            <Body_4 />
        </div>

     );
}
 
export default RouterBlock;