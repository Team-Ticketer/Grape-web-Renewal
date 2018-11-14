import React, { Component } from 'react';
import { connect } from 'react-redux';
import { headerImageChange, posterImageChange } from '../../core/redux/actions/concertAction';


class InputImage extends Component {
  onFileChange = async (event, type) => {
    const { headerImageChange, posterImageChange } = this.props;
    let fileList = event.target.files;
    let file = fileList[0];

    if (!/^image\//.test(file.type)) {
      alert('이미지 파일만 등록이 가능합니다');
      return false
    }
    const data = await this.encodeBase64ImageFile(file)
    
    type ? headerImageChange(data) : posterImageChange(data)
  }
  encodeBase64ImageFile = (image) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      // convert the file to base64 text
      reader.readAsDataURL(image);
      // on reader load somthing...
      reader.onload = (event) => {
        resolve(event.target.result);
      }
      reader.onerror = (error) => {
        reject(error)
      }
    });
  }
  render() { 
    return (
      <div className="InputImage">
        <div className="MakeConcert__wrapper__title">
          Header Image
        </div>
        <input type="file" onChange={event => this.onFileChange(event, true)}/>
        <div className="MakeConcert__wrapper__title">
          Poster Image
        </div>
        <input type="file" onChange={event => {
          this.onFileChange(event, false)}}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerImage: state.concertReducer.headerImage,
  posterImage: state.concertReducer.posterImage
})

const mapDispatchToProps = dispatch => ({
  headerImageChange: (img) => dispatch(headerImageChange(img)),
  posterImageChange: (img) => dispatch(posterImageChange(img))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputImage);