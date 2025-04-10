import React from "react";
import "./HeroGallary.css"; // We'll put the CSS in a separate file

const GalleryItem = ({
  imageUrl,
  altText,
  title,
  subtitle,
  link,
  linkText,
  target,
}) => {
  return (
    <li className="item">
      <div className="img-container">
        <img src={imageUrl} alt={altText} />
        <div className="caption">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <a href={link} className="primarybtn1" target={target || "_self"}>
            {linkText}
          </a>
        </div>
      </div>
    </li>
  );
};

const HeroGallary = () => {
  const galleryItems = [
    {
      imageUrl:
        "https://airindia.scene7.com/is/image/airindia/Mumbai_to_NYC_Mob_Clr",
      altText: "Mumbai to NYC",
      title: "Popular: Mumbai to NYC",
      subtitle:
        "Experience New York, Nonstop travel time: 15 hours, 15 minutes",
      link: "/in/en/destinations/newlaunch/mumbai-to-new-york.html",
      linkText: "View Route Details",
    },
    {
      imageUrl:
        "https://airindia.scene7.com/is/image/airindia/landing-loyalty-nudge",
      altText: "Maharaja Club",
      title: "Maharaja Club",
      subtitle: "One stop for all rewards. Join Maharaja Club today!",
      link: "/in/en/maharaja-club/about.html",
      linkText: "Find Out More",
    },
    {
      imageUrl: "https://airindia.scene7.com/is/image/airindia/star-alliance-2",
      altText: "Star Alliance",
      title: "Star Alliance",
      subtitle: "Experience unparalleled priority access",
      link: "https://www.staralliance.com/en/frequent-flyers",
      linkText: "Learn More",
      target: "_blank",
    },
    {
      imageUrl: "https://airindia.scene7.com/is/image/airindia/AIEstore-1",
      altText: "E-Store",
      title: "E-STORE",
      subtitle: "Shop for travel insurance, visas, hotels, and more.",
      link: "/in/en/book/e-store.html",
      linkText: "Shop Now",
    },
    {
      imageUrl: "https://airindia.scene7.com/is/image/airindia/Ask_Agent-1",
      altText: "Talk To Us",
      title: "TALK TO US",
      subtitle: "Ask customer service anytime, 24/7.",
      link: "/in/en/contact-us.html",
      linkText: "Contact Us",
    },
  ];

  return (
    <div className="gallery-container">
      <header className="topbar">
        <h1>A CLASS APART. IT'S THE NEW STANDARD.</h1>
        <p>
          Discover our world of exclusive offers and services that change the
          way you travel.
        </p>
      </header>

      <section className="gallerysec">
        <ul className="gallery2">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              altText={item.altText}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              linkText={item.linkText}
              target={item.target}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HeroGallary;
