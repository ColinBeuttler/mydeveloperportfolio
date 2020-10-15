import React, { Component } from 'react';

import classes from './Card.css'
import Contactform from '../ContactForm/Contact'
import Banner from '../Banner/Banner'
import CssBox from '../BoxForms/Technologies/CssBox'
import ScrollParallaxBox from '../BoxForms/Technologies/ParallaxBox'
import ReactBox from '../BoxForms/Technologies/ReactBox'
import GoPlayRough from '../BoxForms/Websites/GoPlayRough'
import WeatherApp from '../BoxForms/Websites/WeatherBlog';



class Cardform extends Component {


    render() {
        return (
            <div className={classes.outerwrapper}>

                <div className={classes.wrapper}>

                    <div className={classes.one}>
                        <Banner />
                    </div>
                    <div className={classes.two}>
                        <CssBox />
                        <ScrollParallaxBox />
                        <ReactBox />
                    </div>
                    <div className={classes.three}>
                        <GoPlayRough />
                        <WeatherApp />

                    </div>
                    <div className={classes.four}>
                    </div>

                    

                    <Contactform />


                </div>

            </div>
        )


    }
}

export default Cardform;