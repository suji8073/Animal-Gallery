import { useEffect, useState } from "react";

import "../App.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

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
      <div className="Body">
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}{" "}
        {catImages.map((imageUrl: string) => (
          <img className="Image" src={imageUrl} alt="Cat" key={imageUrl} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
