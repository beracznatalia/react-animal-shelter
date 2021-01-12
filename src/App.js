// import logo from './logo.svg';
import "./assets/scss/style.scss";
import React from 'react';
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {Element} from 'react-scroll';
import MainWrapper from './components/pages/MainWrapper';

import Home from './components/pages/MainView/Home';
import Contact from './components/pages/MainView/Contact';
import Gallery from './components/pages/MainView/Gallery';
import About from './components/pages/MainView/About';

const {store, rrfProps} = configureStore();

class App extends React.Component {
  social = {
    phone: '+48987654321',
    email: 'animalShelter@info.com',
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  }
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <div className="App">
            <MainWrapper social={this.social}>
              <Element id="Home">
                <Home />
              </Element>
              <Element id="About">
                <About />
              </Element>
              <Element id="Gallery">
                <Gallery />
              </Element>
              <Element id="Contact">
                <Contact social={this.social}/>
              </Element>
            </MainWrapper>
          </div>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
