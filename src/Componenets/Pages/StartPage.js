import React, { Component } from 'react';

import AuxComp from '../../hoc/AuxComp/AuxComp';
import Banner from '../Banner/Banner';
import Arrow from '../Banner/Arrow'


class StartPage extends Component {

    render() {

        return (
            <AuxComp>

                <Banner />

                <Arrow/>

            </AuxComp>

        )
    }
}

export default StartPage