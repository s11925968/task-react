import React, { useEffect, useState } from 'react';

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const [searchTerm, setSearchTerm] = useState('pizza'); // Default search term

  const getRestaurant = async (name) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${name}`);
    let data = await response.json();
    setRestaurant(data.recipes);
  };

  useEffect(() => {
    getRestaurant(searchTerm);
  }, [searchTerm]);

  return (
    <div className="row">
      <div className="mb-3  text-center">
        <button onClick={() => setSearchTerm('onion')}>Search Onion</button>
        <button onClick={() => setSearchTerm('pizza')}>Search Pizza</button>
        <button onClick={() => setSearchTerm('salad')}>Search salad</button>

      </div>
      {restaurant.map((item) => (
        <div className="col-md-4" key={item.recipe_id}>
          <h2>{item.publisher}</h2>
          <h2>{item.title}</h2>
          <img src={item.image_url} alt={item.title} className="w-100 img-fluid" />
        </div>
      ))}
    </div>
  );
}
