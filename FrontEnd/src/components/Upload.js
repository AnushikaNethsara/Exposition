import React, { Component } from 'react';
import { post } from 'axios';


class Upload extends Component {
  /*** File Upload***/
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return  post(url, formData,config)
  }

  /*** File upload end***/
  state = {  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input style={{color:"black"}} type="file" onChange={this.onChange} />

          <button style={{marginTop:'10px'}} className="btn btn-dark" type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default Upload;
