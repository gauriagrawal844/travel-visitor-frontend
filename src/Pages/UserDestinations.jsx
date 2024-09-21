import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 100%;

  .carousel-item {
    height: 400px;
    background-position: center;
    background-cover: no-repeat;

    img {
      display: b;
      height: 100%;
      width:100%;  
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    font-size: 40px;
    color: white;
  }
`;

const StyledButton = styled.button`margin-top: 20px;`;


const UserDestinations = () => {
  return (
    <>
      <StyledCarousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
              className="img-fluid"
              alt="image1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
              className="img-fluid"
              alt="image2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
              className="img-fluid"
              alt="image3"
            />
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
      <StyledButton type="button" className="btn btn-secondary">
        <Link to={"/destinations"}>Destinations</Link>
      </StyledButton>
    </>
  );
};

export default UserDestinations;