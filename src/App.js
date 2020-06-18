import React from "react";
import "./styles.css";
import Slider from './Slider';
// import shoes from './assets/images/shoes.jpg'
import sunset from './assets/images/sunset.webp'
import female from './assets/images/female.webp'

export default function App() {
  return (<Slider images={[ sunset, female]} wrap={true} />);
}
