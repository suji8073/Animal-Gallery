import { useEffect, useState } from "react";

import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";

function Home() {
  const [catImages, setCatImages] = useState<string[]>([]);

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
      <Header />
      {catImages.map((imageUrl: string) => (
        <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
      ))}
      <Footer />
    </div>
  );
}

export default Home;
