import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from './assets/Loding.json'
import './css/withLoding.scss';

const withLoding = (WrappedComponent) => {
  return class extends Component {
    constructor(){
      super();
      this.changeLodingState = this.changeLodingState.bind(this);
    }
    state = {
      isLoding: false,
    }
    changeLodingState() {
      this.setState((prevstate)=>({isLoding: !prevstate.isLoding}));
    }
    render() {
      const { isLoding } = this.state;
      if( isLoding ){
        return (
          <React.Fragment>
            <div className="Loding">
              <div className="Loding__wrapper">
                <Lottie options= {{
                          loop: true,
                          autoplay: true, 
                          animationData: animationData,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                          }
                        }}
                        height={500}
                        width={500}
                />
                <div className="Loding__wrapper__msg">
                  Grape is Working!<br/>
                  Wait a second!
                </div>
              </div>
            </div>
          <WrappedComponent changeLodingState={this.changeLodingState}/>
          </React.Fragment>
        )
      }
      return <WrappedComponent {...this.props} changeLodingState={this.changeLodingState}/>
    }
  }
}

export default withLoding;