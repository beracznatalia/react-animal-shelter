import React from 'react';
import {connect} from 'react-redux';
import * as galleryActions from '../../store/actions/galleryActions';

class Photos extends React.Component {
    categoryImage = 'animals';
    firstSlideIndex;
    numberElementsInRow = this.props.numberElementsInRow;
    numberInChosenRow;

    constructor(props) {
        super(props);
        this.state = {
            photos: this.props.gallery.data,
            photosURLs: this.props.gallery.images
        }
        this.onClickImage = this.onClickImage.bind(this);
        this.props.getData(this.categoryImage);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.gallery.images !== state.photosURLs) {
            return {
                photosURLs: props.gallery.images
            };
        }
        if (props.gallery.data !== state.photos) {
            return {
                photos: props.gallery.data
            };
        }
        return null;
    }

    componentDidUpdate() {
        if(this.state.photos.length > 0) {
            this.init();
        }
    }

    init() {
        let beforefirstSlideIndex = this.firstSlideIndex;
        this.firstSlideIndex = this.calculateFirstSlideIndex();
        if(beforefirstSlideIndex !== this.firstSlideIndex) {
            this.updateImages(beforefirstSlideIndex)
        }
    }

    updateImages() {
        let arrayName = [];
        this.numberInChosenRow = 0;
        for(let i = this.firstSlideIndex; i < this.firstSlideIndex + this.numberElementsInRow; i++) {
            if(this.state.photos[i]) {
                arrayName.push(this.state.photos[i].id);
                this.numberInChosenRow++;
            }
        }
        this.props.getImages(this.categoryImage, arrayName);
    }

    calculateFirstSlideIndex() {
        let chosenRowNumber = parseInt((this.props.chosenPhotosIndex) / (this.numberElementsInRow));
        return chosenRowNumber * this.numberElementsInRow;
    }

    addPhoto(index) {
        let photosIndex = this.firstSlideIndex + index;
        let photosURLIndex = this.state.photosURLs.findIndex((el) => el.id === this.state.photos[photosIndex].id);
        return (
            <div className="carousel__item jsCarouselItem" key={photosIndex}>
                <img 
                    className="carousel__photo" 
                    src={this.state.photosURLs[photosURLIndex].imageUrl}  
                    alt={this.state.photos[photosIndex].name}
                    onClick={() => this.onClickImage(photosIndex)}
                />
            </div>
        )
    }

    onClickImage(chosenPhotosIndex) {
        this.props.onClickImage(chosenPhotosIndex);
    }

    addToIndex(addedIndex) {
        let nextPhotoIndex = this.props.chosenPhotosIndex + addedIndex;
        if(nextPhotoIndex > this.state.photos.length - 1) {
            nextPhotoIndex = 0;
        } else if(nextPhotoIndex < 0) {
            nextPhotoIndex = this.state.photos.length - 1;
        }
        this.props.onClickImage(nextPhotoIndex);
    }

    render() {
        if(this.state.photosURLs.length !== this.numberInChosenRow) {
            return null;
        }
        return (
            <div className="gallery__row gallery__row--carousel">
                <button onClick={() => this.addToIndex(-1)} className="button carousel__button carousel__button--left" >
                    &#10094;
                </button>
                <div className="carousel">
                    { this.state.photosURLs.map((el, index) => {
                        return this.addPhoto(index)
                    }) }
                </div>
                <button onClick={() => this.addToIndex(1)} className="button carousel__button carousel__button--right" >
                    &#10095;
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = (dispatch) => ({
    getData: (galleryName) => {
        dispatch(galleryActions.getData(galleryName));
    },
    getImages: (galleryName, photosId) => {
        dispatch(galleryActions.getImages(galleryName, photosId));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos);