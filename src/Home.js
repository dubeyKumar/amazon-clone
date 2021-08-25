import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71TTlXHzFwL._SX3000_.jpg"
        />

        <div className="home__row">
          <Product
            id="78697445"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="38284289"
            title="Victus by HP Ryzen 7 5800H 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/4GB RTX 3050Ti Graphics/Flicker Free Display/144Hz/Win 10/MS Office/Mica Silver/2.48 Kg), 16-e0078AX"
            price={249.0}
            image="https://m.media-amazon.com/images/I/713aQxv9KHS._SL1324_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="72388329"
            title="TIMEX Analog Blue Men Watch TW00ZR262E"
            price={139.0}
            image="https://m.media-amazon.com/images/I/71Kx6rgmlRS._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="3293902"
            title="MSI Optix G242 23.8 inch IPS Gaming Monitor – Full HD - 144Hz Refresh Rate - 1ms Response time – Adaptive Sync for Esports"
            price={569.0}
            image="https://m.media-amazon.com/images/I/61IuIj5gCSL._SL1024_.jpg"
            rating={6}
          />
          <Product
            id="133800287"
            title="Metro Women Synthetic Handbag (66-5600)"
            price={24.14}
            image="https://m.media-amazon.com/images/I/61OnYWWDl+L._UL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="328102789"
            title="(Renewed) Zebronics Zeb-Fame 2.0 Multi Media Speakers with AUX, USB and Volume Control (Black)"
            price={278.14}
            image="https://m.media-amazon.com/images/S/gladiator-image-upload-prod/4/A21TJRUUN4KGV/5df0c4473fa24e61040020adbc8465c9._CR0,0,1200,628_SX430_QL70_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
