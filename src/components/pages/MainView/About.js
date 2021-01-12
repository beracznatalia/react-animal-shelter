import React, {Component} from 'react';
import first from '../../../assets/first.webp';
import second from '../../../assets/second.webp';

class About extends Component {
    render() {
        return (
            <section className="section site-about about--center" id='about'>
                <div className="container">
                    <div className="about__row about__row--top">
                        <div className="about__content about__content--image">
                            <img className="about__img" src={first} alt="First"/>
                        </div>
                        <div className="about__content about__content--text">
                            <h2 className="about__title">Adopt Me</h2>
                            <time className="about__date" dateTime="2019-08-31T00:00">31st August 2019</time>
                            <p className="about__text">
                                Animal Shelter is a nonprofit organization dedicated to the health and well-being of the boxer breed. Animal Shelter is run and managed 100% by volunteers. Our main objective is to rescue, rehabilitate, and re-home boxers that come to us, regardless of age or health, from many sources including local animal shelters, owner surrenders, and strays. Please consider making a tax deductible donation to allow us to save more dogs in need. 
                            </p>
                        </div>
                    </div>
                    <div className="about__row about__row--bottom">
                        <div className="about__content about__content--text">
                            <p className="about__text">
                                Our goal is to provide every boxer we serve, with a second chance to live the life they deserve in an environment where they receive an abundance of love and responsible care. Rescue involves more than just nursing a dog back to health and placing it in a home that will love and care for it. These dogs more often than not, come into rescue sick, injured, traumatized and unwanted. Many lack necessary socialization and have behavior problems. Each issue must be dealt with to make an adoption successful. To complete the circle of success for these rescue boxers, Animal Shelter volunteers also work with the prospective family members as they adjust.
                            </p>
                            <blockquote className="about__blockquote">
                                An animal is not a toy.
                            </blockquote>
                        </div>
                        <div className="about__content about__content--image">
                            <img className="about__img" src={second} alt="Second"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;