import React, {Component} from 'react';
import {connect} from 'react-redux';

class Photo extends Component {
    numberElementsInRow = this.props.numberElementsInRow;

    constructor(props) {
        super(props);
        this.state = {
            photos: props.gallery.data,
            photosURLs: props.gallery.images
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.gallery.data !== state.photos ||
            props.gallery.images !== state.photosURLs) {
            return {
                photos: props.gallery.data,
                photosURLs: props.gallery.images
            };
        }
        return null;
    }

    render() {
        if (this.state.photos.length === 0 || this.state.photosURLs.length === 0) 
            return null;

        if(!this.state.photosURLs.some(data => data.id === this.state.photos[this.props.chosenPhotosIndex].id))
            return null;

        let chosenPhoto = this.state.photos[this.props.chosenPhotosIndex];
        let chosenPhotoUrl = this.state.photosURLs.findIndex((el) => el.id === chosenPhoto.id);
        
        return (
            <div className="gallery__row">
                <div className="gallery__half jsPhoto">
                    <img className="gallery__img" src={this.state.photosURLs[chosenPhotoUrl].imageUrl} alt={chosenPhoto.name}/>
                </div>
                <div className="gallery__half">
                    <h2 className="gallery__title">{chosenPhoto.name}</h2>
                    <h3 className="gallery__subtitle">
                        {chosenPhoto.description}
                    </h3>
                    <hr />
                    <h3 className="gallery__subtitle">Full spec</h3>
                    <dl className="gallery__desc"> 
                        <div className="gallery__prop">
                            <dt>Age</dt>
                            <dd>{chosenPhoto.age} years</dd>
                        </div>
                        <div className="gallery__prop">
                            <dt>Time of visit</dt>
                            <dd>{chosenPhoto.timeVisit} years</dd>
                        </div>
                        <div className="gallery__prop">
                            <dt>Weight</dt>
                            <dd>{chosenPhoto.weight} kg</dd>
                        </div>
                        <div className="gallery__prop">
                            <dt>Species</dt>
                            <dd>{chosenPhoto.species}</dd>
                        </div>
                        <div className="gallery__prop">
                            <dt>Size</dt>
                            <dd>{chosenPhoto.size}</dd>
                        </div>
                        <div className="gallery__prop">
                            <dt>Character</dt>
                            <dd>{chosenPhoto.character[0]}</dd>
                            <dt></dt>
                            <dd>{chosenPhoto.character[1]}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photo);