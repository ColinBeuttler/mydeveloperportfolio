import React, { Component } from 'react';

import AuxComp from '../../hoc/AuxComp/AuxComp';
import Cardform from '../CardForm/Card';
import Contactform from '../ContactForm/Contact'

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