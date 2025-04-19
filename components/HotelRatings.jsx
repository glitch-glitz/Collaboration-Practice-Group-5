import React, { useEffect, useState } from "react";

const HotelRatings = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, []);

  return (
    <div>
      <h2>Hotel Ratings</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.rating} stars
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelRatings;