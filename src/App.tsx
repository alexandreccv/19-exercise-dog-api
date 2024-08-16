import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogApi = (() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
      .then(() => setIsLoading(false));
  });

  useEffect(() => {
    fetchDogApi();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Doguinhos</h1>
      <button
        type="button"
        onClick={ fetchDogApi }
      >
        Novo doguinho!
      </button>
      <div>
        <img src={ imageUrl } alt="Doguinho aleatório" />
      </div>
    </div>
  );
}

export default App;
