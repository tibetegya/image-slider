import React, { Component } from 'react'
import './assets/styles/slider.css'

export default class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentImage: '',
      currentIndex: 0,
      wrap: false,

    }
  }
  componentDidMount = () => {
    const { images, wrap } = this.props
    const { currentIndex } = this.state

    images && this.setState({
      images,
      currentImage: images[currentIndex]
    })

    wrap && this.setState({
      wrap,
    })
  }
  handleClick = event => {
    const { images, currentIndex, wrap } = this.state
    const { target: { name, value } } = event;
    let wrapIndex;
    let prevIndex;
    let nextIndex;

    switch(name){
      case 'marker':
        this.setState({
          currentImage: images[value],
          currentIndex: value
        })
        break;
      case 'prev':
        prevIndex = currentIndex - 1
        if (prevIndex >= 0){
          this.setState({
            currentImage: images[prevIndex],
            currentIndex: prevIndex
          })
        } else {
          if (wrap) {
            wrapIndex = images.length - 1
            this.setState({
              currentImage: images[wrapIndex],
              currentIndex: wrapIndex
            })
          }
        }
        break;
      case 'next':
        nextIndex = currentIndex + 1
        if (nextIndex < images.length){
          this.setState({
            currentImage: images[nextIndex],
            currentIndex: nextIndex
          })
        } else {
            if (wrap) {
              wrapIndex = 0
              this.setState({
                currentImage: images[wrapIndex],
                currentIndex: wrapIndex
              })
            }
        }
        break;
      default:
          console.log('clicked');
    }
  }
  render() {
      const { currentImage, images } = this.state;
    return (
      <div className="slider">
        <button onClick={this.handleClick} name="prev" className="direction prev"><span>&#x276E;</span></button>
        <button onClick={this.handleClick} name="next" className="direction next"><span>&#x276F;</span></button>
        <div className="tint"></div>
        <div className="image-bg">
            { images.length > 0 && <img src={currentImage} alt="" />}
        </div>
        <div className="markers">
            { images.length > 0 && images.map( (image,index) => 
              (
                <button
                  onClick={this.handleClick}
                  key={index} name="marker"
                  value={index}
                  className="slide-indicator"
                >
                </button>
              ))}
        </div>
      </div>
    )
  }
}
