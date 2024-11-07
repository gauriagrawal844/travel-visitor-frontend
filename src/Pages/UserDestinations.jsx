import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 100%;
  .carousel-item {
    position: relative;
    height: 600px;
    background-position: center;
    background-size: cover;
   

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0.8;
    }

    .carousel-caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0);
      padding: 20px;
      border-radius: 10px;
    }

    h5 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 0;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    border: none;
    opacity: 0.6;
    transition: opacity 0.5s ease-in-out;
    margin-top: 250px;

    &:hover {
      opacity: 1;
    }
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    font-size: 1.5rem;
    color: white;
  }
`;

const StyledButton = styled.button`
  margin:20px;
  padding: 10px 20px;
  width:95%;
  font-size: 1.1rem;
  background-color:blue;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color:blue;
    opacity:0.5;
  }
`;

const IntroText = styled.div`
  margin: 20px auto;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  max-width: 800px;
  padding: 0 20px;

  p {
    line-height: 1.5;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;

  .card {
    width: 300px;
    margin: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-body {
      padding: 15px;
      text-align: center;

      h5 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #333;
      }

      p {
        font-size: 1rem;
        color: #666;
      }
    }
  }
`;

const UserDestinations = () => {
  return (
    <>
      <img
        src="https://travelmatevr.com/wp-content/uploads/2023/11/Screenshot-2023-11-03-at-13.20.20-1.png"
        alt="Welcome to TravelMate"
      />

      <IntroText>
        <p>
          Welcome to TravelMate, your gateway to breathtaking destinations
          around the world! From serene beaches and rugged mountains to vibrant
          cityscapes, we’re here to inspire your next great adventure. Dive
          into a world of travel possibilities and start planning your
          unforgettable journey today!
        </p>
      </IntroText>

      <StyledCarousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1727994193255-31518875b3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid"
              alt="Beach"
            />
            <div className="carousel-caption">
              <h5>Explore the Beaches</h5>
              <p>Discover the serenity of oceanfront destinations.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=1170"
              className="img-fluid"
              alt="Mountain"
            />
            <div className="carousel-caption">
              <h5>Conquer the Mountains</h5>
              <p>Adventure awaits in stunning mountain landscapes.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
              className="img-fluid"
              alt="City"
            />
            <div className="carousel-caption">
              <h5>Discover the Cities</h5>
              <p>Experience the vibrant life of iconic cities.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </StyledCarousel>

      <StyledCards>
        <div className="card">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" alt="Tropical Paradise" />
          <div className="card-body">
            <h5>Tropical Paradise</h5>
            <p>Enjoy crystal-clear waters, sandy beaches, and swaying palm trees.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg" alt="Mountain Escape" />
          <div className="card-body">
            <h5>Mountain Escape</h5>
            <p>Explore peaceful trails and scenic vistas in high-altitude destinations.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="City Lights" />
          <div className="card-body">
            <h5>City Lights</h5>
            <p>Discover the energy and excitement of the world's most famous cities.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg" alt="Misty Forests" />
          <div className="card-body">
            <h5>Misty Forests</h5>
            <p>Wander through enchanting, mist-filled forests and reconnect with nature.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1457264635001-828d0cbd483e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800" alt="Desert Dunes" />
          <div className="card-body">
            <h5>Desert Dunes</h5>
            <p>Experience the vast and quiet beauty of golden desert landscapes.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg" alt="Historical Wonders" />
          <div className="card-body">
            <h5>Historical Wonders</h5>
            <p>Step back in time with visits to ancient ruins and cultural sites.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg" alt="Island Escapes" />
          <div className="card-body">
            <h5>Island Escapes</h5>
            <p>Relax on secluded islands with breathtaking views and crystal-clear waters.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/1581792/pexels-photo-1581792.jpeg" alt="Countryside Retreats" />
          <div className="card-body">
            <h5>Countryside Retreats</h5>
            <p>Embrace tranquility and scenic beauty in picturesque rural settings.</p>
          </div>
        </div>
      </StyledCards>

      <StyledButton type="button" className="btn btn-secondary">
        <Link to={"/destinations"}>Explore Destinations</Link>
      </StyledButton>
    </>
  );
};

export default UserDestinations;
