const PricePerNight = () => {
  const prices = [2500, 2000, 1500, 1000, 500];

  return (
    <div>
      <h3>Prices Per Night</h3>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>${price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricePerNight;
