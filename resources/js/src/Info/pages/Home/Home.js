import React, { Fragment, useEffect } from 'react';
import Main from '../../components/Sections/Main';
import About from '../../components/Sections/About';
import Myskills from '../../components/Sections/Myskills';
import WhatIDo from '../../components/Sections/WhatIDo';
import Marq from '../../components/Sections/Marq';
const Home = () => {

    return (
        <div className='snap-y'>
            <Main />
            {/* <About /> */}
            <Myskills />
            <WhatIDo />
            <Marq />
        </div>
    );
}

export default Home;
