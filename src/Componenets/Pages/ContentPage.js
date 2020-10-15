import React, { Component } from 'react';

import AuxComp from '../../hoc/AuxComp/AuxComp';
import Cardform from '../CardForm/Card';

class ContentPage extends Component {
    render() {
        return (

            <AuxComp>

                <Cardform />


            </AuxComp>
        )
    }

}

export default ContentPage;