import React from "react";
import styles from "./AddOns.module.css";
// import adonsImage from "../../Assets/images/adOns3.jpg";

const AddOns = () => {
  // Sample data – replace or fetch dynamically as needed
  const addonList = [
    {
      title: "Discount On Booking",
      price: "₹899",
      description: "Members Rate",
    },
    {
      title: "Earn Free Nights and Free Breakfast",
      price: "₹1515",
      description: "Get Free Voucher",
    },
    {
      title: "Faster Check-In Check-Out",
      price: "₹150",
      description: "Priority Check-Out & Get Bill On Your Email and Whatsapp",
    },
    // {
    //   title: "Pre book 6E Prime starting at.",
    //   price: "₹899",
    //   description: "Seat, snack combo and Fast Forward.",
    // },
    // {
    //   title: "Pre-paid excess baggage starting at.",
    //   price: "₹1515",
    //   description: "Excess baggage and additional piece.",
    // },
    // {
    //   title: "Pre book seat starting.",
    //   price: "₹150",
    //   description: "Window, aisle or seat with extra legroom.",
    // },
    // {
    //   title: "Premium Support",
    //   price: "$49.99",
    //   description: "Get priority access to our support team.",
    // },
    // {
    //   title: "Extended Warranty",
    //   price: "$29.99",
    //   description: "Covers your product for an extra year.",
    // },
    // {
    //   title: "Onboarding Help",
    //   price: "Free",
    //   description: "Personalized walkthrough and setup support.",
    // },
  ];

  return (
    <div className={styles.addOnsContainer}>
      {/* Banner */}
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerOverlayContainer}>
          <img
            src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/new_banners/Banner_above_footer.png" // Replace with your image path
            // src={adonsImage} // Replace with your image path
            alt="Add-ons Banner"
            className={styles.bannerImage}
          />
          <div className={styles.overlayContent}>
            <div className={styles.addonsHeader2}>
              <span className={styles.addonsHeader2span}>
                Add more add-Ons{" "}
              </span>{" "}
              <br />
              <span>Join Our Loyalty Journey</span>
              {/* <span>to your journey </span> */}
            </div>
            <div className={styles.addonsHeaderMember}>
              <span>Become a Member</span>
              <br />
              <button type="button" className={styles.addOns2Button}>
                Join Now
              </button>
              {/* <span>to your journey </span> */}
            </div>
            {/* <div className={styles.termsConditions}>T & C apply</div> */}
            {/* <h1 className={styles.addonsHeader}>Enhance Your Experience</h1> */}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardsContainer}>
        <div className={styles.addonsGrid}>
          {addonList.map((addon, index) => (
            <div key={index} className={styles.addonCard}>
              <div>
                <div className={styles.addonTitle}>
                  {addon.title}
                  {/* {addon.price} */}
                </div>
                {/* <div className={styles.addonPrice}>{addon.price}</div> */}
              </div>
              <div className={styles.addonDescription}>
                <span className={styles.highlight}>{addon.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
