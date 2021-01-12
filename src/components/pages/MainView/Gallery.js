import React, {Component} from 'react';
import {connect} from 'react-redux';
import Photos from '../../partials/Photos';
import Photo from '../../partials/Photo';

class Gallery extends Component {
    numberElementsInRow = 4;
    constructor(props) {
        super(props);
        this.state = {
            chosenPhotosIndex: 0
        }
        this.onClickImage = this.onClickImage.bind(this);
    }

    onClickImage(chosenPhotosIndex) {
        this.setState({chosenPhotosIndex: chosenPhotosIndex});
    }

    render() {
        return (
            <section className="section site-gallery gallery--center">
                <div className="container">
                    <Photo chosenPhotosIndex={this.state.chosenPhotosIndex} numberElementsInRow={this.numberElementsInRow}/>
                    <Photos chosenPhotosIndex={this.state.chosenPhotosIndex} numberElementsInRow={this.numberElementsInRow} onClickImage={this.onClickImage}/>
                </div>
            </section>
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
)(Gallery);