// HeroSection.js
import React, { useEffect } from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero.jpg';
import featureImage1 from '../assets/images/feature1.jpeg'; // Replace with actual paths
import featureImage2 from '../assets/images/feature2.jpeg';
import featureImage3 from '../assets/images/feature3.avif';
import arrivalImage1 from '../assets/images/arrival1.jpg';
import arrivalImage2 from '../assets/images/arrival2.jpg';
import arrivalImage3 from '../assets/images/arrival3.avif';
import arrivalImage4 from '../assets/images/arrival4.webp';
import bestSellerImage1 from '../assets/images/bestseller1.webp';
import bestSellerImage2 from '../assets/images/bestseller2.avif';
import bestSellerImage3 from '../assets/images/bestseller3.webp';
import bestSellerImage4 from '../assets/images/bestseller4.avif';
import saleImage1 from '../assets/images/sale1.webp'; // Add your sale images
import saleImage2 from '../assets/images/sale2.jpeg';
import saleImage3 from '../assets/images/sale3.jpg';

function HeroSection() {
  useEffect(() => {
    const saleItems = document.querySelectorAll('.sale-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      { threshold: 0.3 }
    );

    saleItems.forEach(item => {
      observer.observe(item);
    });

    // Cleanup on unmount
    return () => {
      saleItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container">
        <img src={heroImage} alt="Clothing" />
        <h1>Welcome to Our Clothing Store</h1>
        <p>Find your style with us!</p>
      </div>

      {/* About Us Section */}
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <p>
          EverydayElegance is your go-to destination for stylish and trendy clothing.
          We believe in providing quality apparel that not only looks good but feels good.
          Our collections are carefully curated to bring you the best in fashion,
          from casual wear to formal attire. At EverydayElegance, fashion meets comfort.
        </p>
      </section>

      {/* Sale & Offers Section */}
      <section className="sale-offers" id="sale-offers">
        <h2>Sale & Offers</h2>
        <div className="sale-grid">
          <div className="sale-item">
            <img src={saleImage1} alt="Sale 1" />
            <div className="sale-text">
              <h3>50% Off Summer Collection</h3>
              <p>Grab the best deals on our summer wear now!</p>
            </div>
          </div>
          <div className="sale-item">
            <img src={saleImage2} alt="Sale 2" />
            <div className="sale-text">
              <h3>Buy 1 Get 1 Free</h3>
              <p>Exclusive offer on selected items.</p>
            </div>
          </div>
          <div className="sale-item">
            <img src={saleImage3} alt="Sale 3" />
            <div className="sale-text">
              <h3>Clearance Sale - Up to 70% Off</h3>
              <p>Last chance to grab these styles at amazing prices!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src={featureImage1} alt="Feature 1" />
            <h3>High Quality</h3>
            <p>We offer the highest quality materials in all our products.</p>
          </div>
          <div className="feature-item">
            <img src={featureImage2} alt="Feature 2" />
            <h3>Modern Design</h3>
            <p>Our designs are up-to-date with the latest fashion trends.</p>
          </div>
          <div className="feature-item">
            <img src={featureImage3} alt="Feature 3" />
            <h3>Comfort First</h3>
            <p>We ensure that comfort is a priority in every piece of clothing.</p>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals" id="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="arrivals-grid">
          <div className="arrival-item">
            <img src={arrivalImage1} alt="New Arrival 1" />
            <h3>Summer Collection</h3>
            <p>Bright and breezy outfits for the summer season.</p>
          </div>
          <div className="arrival-item">
            <img src={arrivalImage2} alt="New Arrival 2" />
            <h3>Classic Denim</h3>
            <p>Our latest collection of classic denim wear.</p>
          </div>
          <div className="arrival-item">
            <img src={arrivalImage3} alt="New Arrival 3" />
            <h3>Evening Gowns</h3>
            <p>Elegant evening gowns for all your special occasions.</p>
          </div>
          <div className="arrival-item">
            <img src={arrivalImage4} alt="New Arrival 4" />
            <h3>Evening Gowns</h3>
            <p>Elegant evening gowns for all your special occasions.</p>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers" id="best-sellers">
        <h2>Best Sellers</h2>
        <div className="bestsellers-grid">
          <div className="bestseller-item">
            <img src={bestSellerImage1} alt="Best Seller 1" />
            <h3>Leather Jacket</h3>
            <p>Our best-selling leather jacket.</p>
          </div>
          <div className="bestseller-item">
            <img src={bestSellerImage2} alt="Best Seller 2" />
            <h3>Formal Suit</h3>
            <p>The perfect suit for any formal occasion.</p>
          </div>
          <div className="bestseller-item">
            <img src={bestSellerImage3} alt="Best Seller 3" />
            <h3>Casual T-Shirt</h3>
            <p>Comfortable and stylish casual t-shirts.</p>
          </div>
          <div className="bestseller-item">
  <img src={bestSellerImage4} alt="Ethnic Lehenga" />
  <h3>Ethnic Lehenga</h3>
  <p>Elegant and traditional ethnic lehenga, perfect for festive occasions and weddings.</p>
</div>

        </div>
      </section>
    </div>
  );
}

export default HeroSection;
