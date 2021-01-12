import React, {Component} from 'react';
import {Link} from 'react-scroll';
import mainImage from "../../assets/logo.jpg";

class PageWrapper extends Component {
    hamburger = '.jsHamburger';
    nav = '.jsNav';
    opening = 'is-opening';
    close = 'is-close';
    closing = 'is-closing';
    displayNav = 'is-display';
    toggleHamburger() {
        let hamburger = document.querySelector(this.hamburger);
        if(hamburger.classList.contains(this.close)) {
            hamburger.classList.toggle(this.closing);
            setTimeout(() => {
                hamburger.classList.toggle(this.closing);
                hamburger.classList.toggle(this.close);
            }, 480);
        } else {
            hamburger.classList.toggle(this.opening);
            setTimeout(() => {
                hamburger.classList.toggle(this.opening);
                hamburger.classList.toggle(this.close);
            }, 480);
        }
        document.querySelector(this.nav).classList.toggle(this.displayNav);
    }
    handleSetActive() {
        this.toggleHamburger();
    }
    render() {
        return (
        <div>
            <header className="header">
                <Link className="link" activeClass="is-active" to="Home" spy={true} smooth={true} >
                    <img className="header__logo" src={mainImage} alt="Logo"/>
                </Link>
                <nav className="header__nav jsNav">
                    <Link className="link nav__item" activeClass="is-active" to="Home" spy={true} smooth={true} onClick={() => this.handleSetActive()}>Home</Link>
                    <Link className="link nav__item" activeClass="is-active" to="About" spy={true} smooth={true} onClick={() => this.handleSetActive()}>About</Link>
                    <Link className="link nav__item" activeClass="is-active" to="Gallery" spy={true} smooth={true} onClick={() => this.handleSetActive()}>Animals</Link>
                    <Link className="link nav__item" activeClass="is-active" to="Contact" spy={true} smooth={true} onClick={() => this.handleSetActive()}>Contact</Link>
                    <div className='nav__followMe'>
                        <p className="nav__title">FOLLOW ME</p>
                        <div className="nav__socials">
                            <a className="link nav__social" href={"tel:" + this.props.social.phone}>tel</a> 
                            <a className="link nav__social" href={"mailto:" + this.props.social.email}>@</a>
                            <a className="link nav__social" href={this.props.social.twitter} target="_blank" rel="noreferrer">tw</a> 
                            <a className="link nav__social" href={this.props.social.facebook} target="_blank" rel="noreferrer">fb</a> 
                            <a className="link nav__social" href={this.props.social.instagram} target="_blank" rel="noreferrer">in</a> 
                        </div>
                    </div>
                </nav>
                <div className="header__hamburger jsHamburger" onClick={() => this.toggleHamburger()}>
                    <div className="hamburger__item hamburger__item--top"></div>
                    <div className="hamburger__item hamburger__item--middle"></div>
                    <div className="hamburger__item hamburger__item--bottom"></div>
                </div>
                <div className='header__followMe'>
                    <p className="header__title">FOLLOW ME</p>
                    <div className='header__socials'>
                        <a className='link header__social' href={"tel:" + this.props.social.phone}>tel</a> 
                        <a className='link header__social' href={"mailto:" + this.props.social.email}>@</a>
                        <a className='link header__social' href={this.props.social.twitter} target="_blank" rel="noreferrer">tw</a> 
                        <a className='link header__social' href={this.props.social.facebook} target="_blank" rel="noreferrer">fb</a> 
                        <a className='link header__social' href={this.props.social.instagram} target="_blank" rel="noreferrer">in</a> 
                    </div>
                </div>
            </header>
            <main className="main">
                {this.props.children}
            </main>
        </div>
        )
    }
}

export default PageWrapper;