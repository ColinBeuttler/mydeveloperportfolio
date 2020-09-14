import React, { Component } from 'react';

import Auxcomp from '../AuxComp/AuxComp';
import Cardform from '../../Componenets/CardForm/Card'
import Contactform from '../../Componenets/ContactForm/Contact'


class Layout extends Component {
    render() {
        return (
            <Auxcomp>
                <Cardform>

                </Cardform>
                <Contactform>

                </Contactform>

            </Auxcomp>
        )
    }

}

export default Layout