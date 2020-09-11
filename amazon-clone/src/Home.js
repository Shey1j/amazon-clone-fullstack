import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="44332"
            title="Nike Air Max Thea Clear Jade/Summit White"
            price={159.99}
            image="https://images.footway.com/01/246/24628-15/front/705/705/24628-15.png?fwv=1.0&auto=format,compress"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="44333"
            title="Nike Air Max 1"
            price={179.99}
            image="https://sneakerbardetroit.com/wp-content/uploads/2018/11/Nike-Air-Max-1-97-SW-Sean-Wotherspoon.png"
            rating={5}
          />
          <Product
            id="44334"
            title="Nike Air VaporMax Flyknit 2.0 Pale Blue"
            price={179.0}
            rating={4}
            image="https://thesolewomens.co.uk/wp-content/uploads/2019/02/Nike-Air-VaporMax-2019-Aluminum-Blue-AR6632-401.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="44335"
            title="Nike Air Max Plus Miami Vice CI2368-001"
            price={190}
            rating={3}
            image="https://www.sneakerfiles.com/wp-content/uploads/2019/02/nike-air-max-plus-miami-vice-ci2368-001-release-date-1.png"
          />
          <Product
            id="44336"
            title="Nike Air Max 720"
            price={198.99}
            rating={5}
            image="https://cdn.thesolesupplier.co.uk/2019/02/Nike-Air-Max-720-Black-AO2924-007.png"
          />
          <Product
            id="44337"
            title="Nike React Infinity Run Flyknit"
            price={198.99}
            rating={4}
            image="https://cdn.runningshoesguru.com/wp-content/uploads/2020/02/nike-react-infinity-run-957x538.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="44338"
            title="Nike Air Max 270 Hyper Jade CI2451-100"
            price={194.98}
            rating={4}
            image="https://www.sneakerfiles.com/wp-content/uploads/2019/02/nike-air-max-270-hyper-jade-ci2451-100-release-date-1.png"
          />
          <Product
            id="44339"
            title="Nike Air Max 95 SE blanche"
            price={194.98}
            rating={4}
            image="https://media.chausport.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/3/13765-chaussures-nike-air-max-95-se-blanche-vue-exterieure.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="44340"
            title="Nike Air Max Plus Triple Red CQ9748-600"
            price={194.99}
            image="https://www.sneakerfiles.com/wp-content/uploads/2019/07/nike-air-max-plus-triple-red-cq9748-600-release-date-info-2.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
