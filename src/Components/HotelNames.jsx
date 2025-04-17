import React from "react";
import { useEffect, useState } from "react";

export function HotelNames() {
  const [hotelNames, setHotelNames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((res) => res.json())
      .then((data) => setHotelNames(data));
  }, []);
  return (
    <div>
      {hotelNames.map((hotels, index) => (
        <div key={index}>{hotels.name}</div>
      ))}
    </div>
  );
}
