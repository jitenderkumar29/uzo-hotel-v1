import React from "react";
import "./HeroGallary.css"; // We'll put the CSS in a separate file
import { CardBody } from "@chakra-ui/react";
import villabangla from "../../Assets/images/villabangla.jpg";
import premiumhome from "../../Assets/images/premiumhome.jpg";

// const GalleryItem = ({
//   imageUrl,
//   altText,
//   title,
//   subtitle,
//   link,
//   linkText,
//   target,
// }) => {
//   return (
//     <li className="item">
//       <div className="img-container">
//         <img src={imageUrl} alt={altText} />
//         <div className="caption">
//           <h3 className="caption-h3">{title}</h3>
//           <h4 className="caption-h4">{subtitle}</h4>
//           <a href={link} className="primarybtn1" target={target || "_self"}>
//             {linkText}
//           </a>
//         </div>
//       </div>
//     </li>
//   );
// };

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
        {/* Always-visible title in top-left */}
        <div className="title-overlay">
          <h3>{title}</h3>
        </div>

        {/* Hover-only caption */}
        <div className="caption">
          <h4>{subtitle}</h4>
          {/* <h3>{linkText}</h3> */}
          {/* <br /> */}

          {/* <a href={link} className="primarybtn1" target={target || "_self"}>
            {linkText}
          </a> */}
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
      altText: "Star Hotels",
      title: "Premium Star Hotels",
      subtitle: "Enjoy Luxury Stays In Star Hotels",
      link: "/in/en/destinations/newlaunch/mumbai-to-new-york.html",
      linkText: "View Route Details",
    },
    {
      imageUrl:
        "https://airindia.scene7.com/is/image/airindia/landing-loyalty-nudge",
      altText: "Ressorts",
      title: "Premium Ressorts",
      subtitle: "Enjoy Your Holiday Stay With Loved One",
      link: "/in/en/maharaja-club/about.html",
      linkText: "Find Out More",
    },
    {
      imageUrl: villabangla,
      // imageUrl: "https://airindia.scene7.com/is/image/airindia/star-alliance-2",
      altText: "Villa bungalows",
      title: "Premium Villa bungalows",
      subtitle: "Enjoy Your Villa Stay & Red Fine Space In Luxury",
      link: "https://www.staralliance.com/en/frequent-flyers",
      linkText: "Learn More",
      target: "_blank",
    },
    {
      imageUrl: "https://airindia.scene7.com/is/image/airindia/AIEstore-1",
      altText: "Apart Hotels & Suites",
      title: "Premium Apart Hotels & Suites",
      subtitle: "Best For Business Professional Equiped Rooms & Suites",
      link: "/in/en/book/e-store.html",
      linkText: "Shop Now",
    },
    {
      imageUrl: premiumhome,
      // imageUrl: "https://airindia.scene7.com/is/image/airindia/Ask_Agent-1",
      altText: "Homes",
      title: "Premium  Homes",
      subtitle: "Discover The Finest Private holiday Homes & Long Stay",
      link: "/in/en/contact-us.html",
      linkText: "Discover",
    },
  ];

  return (
    <div className="hero-gal">
      <div className="gallery-container">
        <header className="topbar">
          <h1>UZO - A Premium Luxury Hotels Chain in The World</h1>
          {/* <h1>UZO - PREMIUM LUXURY HOTEL CHAIN IN WORLD.</h1> */}
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
    </div>
  );
};

export default HeroGallary;
