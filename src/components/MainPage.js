import React from 'react';
import {TheBannerHeader} from './Main/TheBannerHeader';
import { Header } from './Main/Header';

export default class MainPage extends React.Component {

    render() {
        return (
            <div id='site-main' className='header-sticky bg-white site-header relative z-[1001]'>
                <TheBannerHeader />
                <Header />
            </div>
        )
    }
}

