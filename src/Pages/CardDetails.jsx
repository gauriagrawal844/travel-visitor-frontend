import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDestination } from '../services/destinationApi';

const CardDetails = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const [destination,setDestination] = useState({});
  useEffect(() => {
    const query = `?_id=${id}`;
    getDestination(query).then((response) => {
      setDestination(response.data);

    });
}, []);
console.log(destination);

  return (
    <div>
      <h2>Details for ID: {id}</h2>
      <div dangerouslySetInnerHTML={{ __html: destination.about }}>
    </div>
    </div>
  );
};

export default CardDetails;
