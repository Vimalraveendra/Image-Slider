import React from "react";
import styles from "./App.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

let settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  speed: 500
};
class App extends React.Component {
  state = {
    images: []
  };
  async componentDidMount() {
    try {
      const {
        data: { hits }
      } = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=red+cars&image_type=photo&per_page=10`
      );
      this.setState({ images: hits });
    } catch (error) {
      console.log("error", error);
    }
  }
  render() {
    console.log("images", this.state.images);
    return (
      <div className={styles.App}>
        <h3>Image Slider</h3>
        <Slider {...settings}>
          {this.state.images.map(image => {
            return (
              <div className={styles.container} key={image.id}>
                <img
                  className={styles.images}
                  src={image.userImageURL}
                  alt="user-view"
                ></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default App;
