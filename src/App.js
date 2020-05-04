import React from "react";
import styles from "./App.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div className={styles.App}>
        <h3>Image Slider</h3>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
