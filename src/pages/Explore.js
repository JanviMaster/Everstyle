import React from 'react';
import Footer from '../components/Footer';
import './Page.css';
import Everstyle7 from '../assets/Everstyle7.jpeg';
import Everstyle4 from '../assets/Everstyle4.jpeg';
import Everstyle8 from '../assets/Everstyle8.jpeg';
import { Link } from 'react-router-dom';

const Card = ({ title, text, image, price, specs }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        {specs.map((spec, index) => (
          <li key={index} className="list-group-item">{spec}</li>
        ))}
        <li className="list-group-item">Rs {price}</li>
        <li className="list-group-item">SHOP NOW</li>
      </ul>
      <div className="card-body">
        <Link to="#" className="card-link">Card link</Link>
        <Link to="#" className="card-link">Another link</Link>
      </div>
    </div>
  );
};

const Explore = () => {
  const cardData = [
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
      title: " Womens night blue printed suit",
      text: "Ajio",
      image: Everstyle4,
      price: 5789,
      specs: ["Rgular", "Print"]
    }
  ];

  return (
    <>
      <div style={{ padding: '70px' }}>
        <h1>Explore</h1>
      
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
      <Footer /> 
    </>
  );
};

export default Explore;
