import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentSelectedNav, setCurrentSelectedNav] = useState(null);

  const fetchNews = async (query) => {
    const API_KEY = "f2481f5ed7d14f99a08aca81522942d4";
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
  };

  useEffect(() => {
    fetchNews("India");
  }, []);

  useEffect(() => {}, [articles]);
  const onNavItemClick = async (id) => {
    const navItem = document.getElementById(id);

    if (!navItem) {
      console.error(`Element with id '${id}' not found.`);
      return;
    }

    currentSelectedNav?.classList?.remove("active");

    setCurrentSelectedNav(navItem);
    navItem.classList.add("active");
    await fetchNews(id);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const searchNews = () => {
    const query = document.getElementById("search-text").value;
    if (!query) return;
    fetchNews(query);
    currentSelectedNav?.classList.remove("active");
    setCurrentSelectedNav(null);
  };

  const onCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <NavBar
        onNavItemClick={onNavItemClick}
        reload={reloadPage}
        searchNews={searchNews}
      />
      <MainContent articles={articles} onCardClick={onCardClick} />
    </div>
  );
};

export default App;
