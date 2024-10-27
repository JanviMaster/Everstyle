import React from 'react';
import ImageHolder from '../assets/ImageHolder.png';
// import Everstyle1 from '../assets/Everstyle1.jpeg';
import Everstyle2 from '../assets/Everstyle2.jpeg'; 
import Everstyle3 from '../assets/Everstyle3.jpeg';
import Everstyle4 from '../assets/Everstyle4.jpeg';
import Everstyle5 from '../assets/Everstyle5.jpeg';
// import Everstyle6 from '../assets/Everstyle6.jpeg';
import Everstyle7 from '../assets/Everstyle7.jpeg';
import Everstyle8 from '../assets/Everstyle8.jpeg';
import'./Dashboard.css';

const Dashboard = () => {
    const carouselImages = [
        { src: ImageHolder, alt: "Product display" },
        { src: ImageHolder, alt: "Alternative view of product" },
        { src: ImageHolder, alt: "Close-up of product details" },
    ];

    const Carousel = () => (
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselImages.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval={10000}>
                        <img src={image.src} className="d-block w-100" alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );

    const Card = ({ title, text, imgSrc }) => (
        <div className="col">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Carousel />
            <br /><br />
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
               <center> <Card title="Statement dressing" text="Unleash the boldest look - where style meets statement" imgSrc={Everstyle7} /></center>
               <center><Card title="The Latest drops" text="Fresh find, just dropped. Discover the latest looks before they're gone." imgSrc={Everstyle8} /></center>
               <Card title="Autumn season collection" text="Women's all new Autumn season collection" imgSrc={Everstyle2} />
               <Card title="Comfort & Stylish casuals" text="Discover the all new comfy and chic casuals" imgSrc={Everstyle4} />
               <Card title="Timeless Formals" text="Elevate your elegance - formals that define sophistication." imgSrc={Everstyle3} />
               <Card title="Streetstyle" text="Effortlessly cool. Bringing the street to life, one step at a time." imgSrc={Everstyle5} />
            </div>
        </>
    );
};

export default Dashboard;