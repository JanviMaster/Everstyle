import React from 'react'; 
import Footer from '../components/Footer';
import './Explore.css';
import Everstyle7 from '../assets/Everstyle7.jpeg';
import Everstyle4 from '../assets/Everstyle4.jpeg';
import Everstyle8 from '../assets/Everstyle8.jpeg';
import Everstyle12 from '../assets/Everstyle12.jpeg';
import Everstyle13 from '../assets/Everstyle13.jpeg';
import Everstyle14 from '../assets/Everstyle14.jpeg';

import { Link } from 'react-router-dom';

const Card = ({ title, text, image, price, specs }) => {
  return (
    <div className="explore-card">
      <img src={image} className="explore-card-img-top" alt={title} />
      <div className="explore-card-body">
        <h5 className="explore-card-title">{title}</h5>
        <p className="explore-card-text">{text}</p>
      </div>
      <ul className="explore-list-group list-group-flush">
        {specs.map((spec, index) => (
          <li key={index} className="explore-list-group-item">{spec}</li>
        ))}
        <li className="explore-list-group-item">Rs {price}</li>
      </ul>
      <div className="explore-card-body">
        <Link to="#" className="explore-card-link">SHOP NOW</Link>
        <Link to="#" className="explore-card-link">See more..</Link>
      </div>
    </div>
  );
};

const Explore = () => {
  const cardData = [
    {
      title: "Black floral Maxi Dresss",
      text: "Littlebox",
      image: Everstyle14,
      price: 2870,
      specs: ["Maxi", "Polyester", "Regular"]
    },
    {
      title: "Pink Sifon maxi dress",
      text: "Myntra",
      image: Everstyle13,
      price: 3580,
      specs: ["Ethnic", "Embroidered", "Motifs"]
    },
    {
      title: "Women's night blue printed suit",
      text: "Ajio",
      image: Everstyle12,
      price: 5789,
      specs: ["Regular", "Print"]
    },
    {
      title: "Mesh Ruffle Green Maxi Dress",
      text: "Littlebox",
      image: Everstyle7,
      price: 2870,
      specs: ["Maxi", "Polyester", "Regular"]
    },
    {
      title: "Embroidered peach motifs dress",
      text: "Myntra",
      image: Everstyle8,
      price: 3580,
      specs: ["Ethnic", "Embroidered", "Motifs"]
    },
    {
      title: "Women's night blue printed suit",
      text: "Ajio",
      image: Everstyle4,
      price: 5789,
      specs: ["Regular", "Print"]
    }
  ];

  return (
    <>
      <div className='everstyle-main' style={{ padding: '70px' }}>
        <center><p className='head'>EXPLORE</p></center>
        <div className="explore-card-container">
          {cardData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              text={data.text}
              image={data.image}
              price={data.price}
              specs={data.specs}
            />
          ))}
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default Explore;
