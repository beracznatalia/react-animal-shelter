import React, {Component} from 'react';
import first from '../../../assets/second.webp';

class MainView extends Component {
    render() {
        return (
            <section className="section site-home" id='home'>
                    <div className="home__half">
                        <h1 className="home__title home__title--left">Adopt</h1>
                    </div>
                    <div className="home__half">
                        <div className="home__background">
                            <img className="home__image" src={first} alt="Background"/>
                        </div>
                        <h1 className="home__title home__title--right">Me</h1>
                    </div>
            </section>
        )
    }
}

export default MainView;