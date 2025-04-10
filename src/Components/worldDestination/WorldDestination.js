import React, { useRef, useEffect, useState } from "react";
import "./WorldDestination.css";

const WorldDestination = () => {
  const scrollContainerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollBy = (offset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft < maxScroll - 1);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll(); // Set initial state
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const beachCategories = [
    {
      title: "World",
      description: "Discover top beaches across the globe",
      bg: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Europe",
      description: "Explore Europe's finest coastal gems",
      bg: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Asia",
      description: "Uncover Asia's tropical paradises",
      bg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "South Pacific",
      description: "Experience the Pacific's island wonders",
      bg: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Caribbean",
      description: "Best of the Best Beaches Caribbean",
      bg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/94/2a/bc/caption.jpg?w=2880&h=960&s=1",
    },
  ];

  return (
    <div className="container">
      <h2 className="world-heading">
        Explore the world's most stunning seasides
      </h2>
      <h5>2025's Travellers' Choice Awards Best of the Best Beaches</h5>
      <div className="beach-categories-container">
        {showLeft && (
          <button
            className="scroll-btn left"
            onClick={() => scrollBy(-270)}
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="beach-categories" ref={scrollContainerRef}>
          {beachCategories.map((category, index) => (
            <div
              className="category"
              key={index}
              style={{
                backgroundImage: `url(${category.bg})`,
              }}
              // style={{
              //   backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${category.bg})`,
              // }}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        {showRight && (
          <button
            className="scroll-btn right"
            onClick={() => scrollBy(270)}
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default WorldDestination;
