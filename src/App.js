import './App.css';
import React, { useState, useEffect } from 'react';
import ImgCard from './components/ImgCard';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=28045627-fceaf1793bc51ee7dc122737c&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.error(err));
  }, [term])

  return (
    <>
    {/* Search bar */}
      <div className="w-screen flex items-center justify-center h-20 bg-slate-400 fixed inset-0 z-50">
        <input
        type="search"
        name="search"
        id=""
        placeholder="Search..."
        className="w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none"
        onChange={(e) => setTerm(e.target.value)} />

        <i className="fa fa-search border border-l-0 border-slate-300 h-10 leading-10 pr-4 bg-white rounded-lg rounded-l-none"></i>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 ml-5 ">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">I'm feeling lucky!</a>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 ml-5 ">
          <a href="https://sinankarakaya.fr">Learn More</a>
        </button>
      </div>

    {/* Images Results */}
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No results found :(</h1>
      )};
      {isLoading ? (
        <h1 className="text-center text-4xl mt-44">Loading...</h1>
      ) : (
        <main className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-7">
          {images.map(image => (
            <ImgCard key={image.id} image={image} />
          ))}
        </main>
      )}
    </>
  );
}

export default App;
