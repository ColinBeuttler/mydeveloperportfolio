import React from 'react';
import classes from './Banner.css';
import { Parallax } from 'react-scroll-parallax';

const banner = () => (
    
    <Parallax className={classes.container} >

        <h1 className={classes.banner1}>
            Colin Beuttler
    </h1>
        <h2 className={classes.banner2}>
            ...Creater
    </h2>
        <h3 className={classes.banner3}>
            ...Designer
    </h3>
        <h4 className={classes.banner4}>
            ...Developer
    </h4>

    </Parallax>
)

export default banner;