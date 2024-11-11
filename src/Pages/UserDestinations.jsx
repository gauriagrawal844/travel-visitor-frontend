import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDestinations } from "../services/destinationApi";

const StyledCarousel = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

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

    .carousel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }

    .carousel-caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      padding: 20px;
      border-radius: 10px;
      max-width: 90%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    h5 {
      font-size: 2.5rem;
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
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: none;
    opacity: 0.7;
    transition: opacity 0.5s ease-in-out;
    margin-top: 250px;

    &:hover {
      opacity: 1;
    }
  }
`;

const StyledButton = styled.button`
  margin: 20px auto;
  padding: 12px 25px;
  font-size: 1.2rem;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 8px;
  display: block;
  text-align: center;
  cursor: pointer;
  width: 90%;
  max-width: 300px;

  &:hover {
    background-color: #0056b3;
  }
`;

const IntroText = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: #333;
  max-width: 800px;
  margin: 40px auto 20px;
  padding: 0 20px;

  p {
    line-height: 1.6;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  padding: 0 20px;

  .card {
    width: 300px;
    margin: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    background: white;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-body {
      padding: 20px;
      text-align: center;

      h5 {
        font-size: 1.4rem;
        margin-bottom: 12px;
        color: #007bff;
      }

      p {
        font-size: 1rem;
        color: #666;
        line-height: 1.4;
      }
    }
  }
`;

const carouselItems = [
  {
    src: "https://images.unsplash.com/photo-1727994193255-31518875b3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Explore the Beaches",
    description: "Discover the serenity of oceanfront destinations.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=1170",
    title: "Conquer the Mountains",
    description: "Adventure awaits in stunning mountain landscapes.",
  },
  {
    src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    title: "Discover the Cities",
    description: "Experience the vibrant life of iconic cities.",
  },
];

const UserDestinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  const handleClick = (id) => {
    navigate(`/Details/${id}`);
  };

  useEffect(() => {
    getDestinations().then((response) => {
      setDestinations(response.data);
    });
  }, []);

  return (
    <>
      <img
        src="https://travelmatevr.com/wp-content/uploads/2023/11/Screenshot-2023-11-03-at-13.20.20-1.png"
        alt="Welcome to TravelMate"
        style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
      />

      <IntroText>
        <p>
          Welcome to TravelMate, your gateway to breathtaking destinations
          around the world! From serene beaches and rugged mountains to vibrant
          cityscapes, we’re here to inspire your next great adventure. Dive into
          a world of travel possibilities and start planning your unforgettable
          journey today!
        </p>
      </IntroText>

      <StyledCarousel
        id="carouselExampleAutoplaying"
        className="carousel slide p-10"
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={item.src} className="img-fluid" alt={item.title} />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </StyledCarousel>

      <StyledCards>
        {destinations.map((item) => (
          <div
            onClick={() => handleClick(item._id)}
            className="card"
            key={item._id}
          >
            <img src={item.image} alt={item.destination} />
            <div className="card-body">
              <h5>{item.destination}</h5>
              <div dangerouslySetInnerHTML={{ __html: item.about }} />
            </div>
          </div>
        ))}
      </StyledCards>

      <Link to="/destinations">
        <StyledButton type="button">Add New Destination</StyledButton>
      </Link>
    </>
  );
};

export default UserDestinations;
