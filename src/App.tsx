import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    fetchCatImages();
  }, []);

  const fetchCatImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=15&query=cat&client_id=${process.env.REACT_APP_UNSPLASH_TOKEN}`
    );
    const data = await response.json();
    const imageUrls = data.map(
      (image: { [key: string]: any }) => image.urls.regular
    );

    setCatImages(imageUrls);
  };

  return (
    <div className="App">
      {catImages.map((imageUrl) => (
        <img className="Image" src={imageUrl} alt="Cat" />
      ))}
    </div>
  );
}

export default App;
