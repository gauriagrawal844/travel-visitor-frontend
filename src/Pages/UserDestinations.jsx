import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDestinations } from "../services/destinationApi";


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
  margin: 20px;
  padding: 10px 20px;
  width: 97%;
  font-size: 1.1rem;
  background-color: blue;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: blue;
    opacity: 0.5;
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

const cardItems = [
  {
    src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
    title: "Tropical Paradise",
    description: "Enjoy crystal-clear waters, sandy beaches, and swaying palm trees.",
    id: 1,
  },
  {
    src: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",
    title: "Mountain Escape",
    description: "Explore peaceful trails and scenic vistas in high-altitude destinations.",
    id: 2,
  },
  {
    src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    title: "City Lights",
    description: "Discover the energy and excitement of the world's most famous cities.",
    id: 3,
  },
  {
    src: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg",
    title: "Misty Forests",
    description: "Wander through enchanting, mist-filled forests and reconnect with nature.",
    id: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1457264635001-828d0cbd483e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1200&h=800",
    title: "Desert Dunes",
    description: "Experience the vast and quiet beauty of golden desert landscapes.",
    id: 5,
  },
  {
    src: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
    title: "Historical Wonders",
    description: "Step back in time with visits to ancient ruins and cultural sites.",
    id: 6,
  },
  {
    src: "https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg",
    title: "Island Escapes",
    description: "Relax on secluded islands with breathtaking views and crystal-clear waters.",
    id: 7,
  },
  {
    src: "https://images.pexels.com/photos/1581792/pexels-photo-1581792.jpeg",
    title: "Countryside Retreats",
    description: "Embrace tranquility and scenic beauty in picturesque rural settings.",
    id: 8,
  },
];

const UserDestinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  const handleClick = (id) => {
    navigate(`/Details/${id}`);
    console.log(id);
  };

  useEffect(() => {
    getDestinations().then((response) => {
      setDestinations(response.data);
      // console.log(response);
    });
  }, []);


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
          {carouselItems.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img src={item.src} className="img-fluid" alt={item.title} />
              <div className="carousel-caption">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
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
        {destinations.map((item, index) => (
          <div onClick={() => handleClick(item._id)} className="card" key={index}>
            <img src={item.image} alt={item.destination} />
            <div className="card-body">
              <h5>{item.destination}</h5>
              <div dangerouslySetInnerHTML={{ __html: item.about }} />
                 
              </div>
            </div>
        ))}
      </StyledCards>

      <Link to="/destinations">
        <StyledButton type="button" className="btn btn-secondary">
          Explore Destinations
        </StyledButton>
      </Link>

    </>
  );
};

export default UserDestinations;
