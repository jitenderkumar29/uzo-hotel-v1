import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hero1Jpg from "../Assets/images/hero1.jpg";
import hero2Jpg from "../Assets/images/hero2.jpg";
import hero3Jpg from "../Assets/images/hero3.jpg";

const StoreContext = createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StateStore({ children }) {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const searchParams = (key) => {
    return new URL(window.location.href).searchParams.get(key);
  };
  const cityList = {
    agra: {
      name: "Agra",
    },
    bareilly: {
      name: "Bareilly",
    },
    chennai: {
      name: "Chennai",
    },
    hydrabad: {
      name: "Hyderabad",
    },
    mumbai: {
      name: "Mumbai",
    },
    bangalore: {
      name: "Bangalore",
    },
    delhi: {
      name: "Delhi",
    },
    gurgaon: {
      name: "Gurgaon",
    },
    goa: {
      name: "Goa",
    },
    kolkata: {
      name: "Kolkata",
    },
    mumbai: {
      name: "Mumbai",
    },
    noida: {
      name: "Noida",
    },
    pune: {
      name: "Pune",
    },
    ghaziabad: {
      name: "Ghaziabad",
    },
    noida: {
      name: "Noida",
    },

    shirdi: {
      name: "Cities",
    },
  };

  const hotelsList = {
    Agra: [
      { name: "Taj Hotel", address: "Near Taj Mahal, Agra", rating: 4.5 },
      { name: "Agra Palace", address: "MG Road, Agra", rating: 4.0 },
      { name: "Agra Palace One", address: "MG Road, Agra", rating: 4.0 },
      { name: "Agra Palace Two", address: "MG Road, Agra", rating: 4.0 },
      { name: "Agra Palace Three", address: "MG Road, Agra", rating: 4.0 },
      { name: "Agra Palace Four", address: "MG Road, Agra", rating: 4.0 },
      { name: "Agra Palace Five", address: "MG Road, Agra", rating: 4.0 },
      { name: "All of Agra", address: "", rating: 0 },
    ],
    Bareilly: [
      { name: "Bareilly Inn", address: "Civil Lines, Bareilly", rating: 3.8 },
      {
        name: "Bareilly Inn One",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
      {
        name: "Bareilly Inn Two",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
      {
        name: "Bareilly Inn Three",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
      {
        name: "Bareilly Inn Four",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
      {
        name: "Bareilly Inn Five",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
      {
        name: "All of Bareilly",
        address: "Civil Lines, Bareilly",
        rating: 3.8,
      },
    ],
    Chennai: [
      { name: "Chennai Residency", address: "T Nagar, Chennai", rating: 4.2 },
      {
        name: "Chennai Residency One",
        address: "T Nagar, Chennai",
        rating: 4.2,
      },
      {
        name: "Chennai Residency Two",
        address: "T Nagar, Chennai",
        rating: 4.2,
      },
      {
        name: "Chennai Residency Three",
        address: "T Nagar, Chennai",
        rating: 4.2,
      },
      {
        name: "Chennai Residency Four",
        address: "T Nagar, Chennai",
        rating: 4.2,
      },
      {
        name: "Chennai Residency Five",
        address: "T Nagar, Chennai",
        rating: 4.2,
      },
    ],
    Hyderabad: [
      { name: "Pearl Hotel", address: "Banjara Hills, Hyderabad", rating: 4.4 },
      {
        name: "Pearl Hotel One",
        address: "Banjara Hills, Hyderabad",
        rating: 4.4,
      },
    ],
    Mumbai: [
      { name: "Sea View Hotel", address: "Marine Drive, Mumbai", rating: 4.7 },
      { name: "Mumbai Grand", address: "Andheri West, Mumbai", rating: 4.3 },
    ],
    Bangalore: [
      { name: "Silicon Stay", address: "Koramangala, Bangalore", rating: 4.1 },
      {
        name: "Silicon Stay One",
        address: "Koramangala, Bangalore",
        rating: 4.1,
      },
    ],
    Delhi: [
      { name: "Delhi Heights", address: "Connaught Place, Delhi", rating: 4.0 },
      {
        name: "Delhi Heights One",
        address: "Connaught Place, Delhi",
        rating: 4.0,
      },
    ],
    Gurgaon: [
      {
        name: "Cyber City Hotel",
        address: "DLF Phase 3, Gurgaon",
        rating: 4.5,
      },
      {
        name: "Cyber City Hotel One",
        address: "DLF Phase 3, Gurgaon",
        rating: 4.5,
      },
    ],
    Goa: [
      { name: "Beach Resort", address: "Calangute, Goa", rating: 4.6 },
      { name: "Beach Resort One", address: "Calangute, Goa", rating: 4.6 },
    ],
    Kolkata: [
      { name: "Kolkata Comfort", address: "Park Street, Kolkata", rating: 4.2 },
      {
        name: "Kolkata Comfort One",
        address: "Park Street, Kolkata",
        rating: 4.2,
      },
    ],
    Noida: [
      { name: "Noida Suites", address: "Sector 18, Noida", rating: 4.3 },
      { name: "Noida Suites One", address: "Sector 18, Noida", rating: 4.3 },
    ],
    Pune: [
      { name: "Pune Paradise", address: "Viman Nagar, Pune", rating: 4.1 },
      { name: "Pune Paradise One", address: "Viman Nagar, Pune", rating: 4.1 },
    ],
    Ghaziabad: [
      { name: "Hotel Ghaziabad", address: "Vaishali, Ghaziabad", rating: 3.9 },
      {
        name: "Hotel Ghaziabad One",
        address: "Vaishali, Ghaziabad",
        rating: 3.9,
      },
    ],
    Cities: [
      { name: "Sai Ashram", address: "Near Sai Temple, Shirdi", rating: 4.4 },
      { name: "Hotel Ghaziabad", address: "Vaishali, Ghaziabad", rating: 3.9 },
      {
        name: "Hotel Ghaziabad One",
        address: "Vaishali, Ghaziabad",
        rating: 3.9,
      },
    ],
  };

  const matrimonyType = {
    agra: {
      name: "Agra",
      // name: "NRI",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    bareilly: {
      name: "Bareilly",
      // name: "Assamese",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    chennai: {
      name: "Chennai",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    hydrabad: {
      name: "Hydrabad",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    mumbai: {
      name: "Mumbai",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    bangalore: {
      name: "Bangalore",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    delhi: {
      name: "Delhi",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    gurgaon: {
      name: "Gurgaon",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    goa: {
      name: "Goa",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    kolkata: {
      name: "Kolkata",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    mumbai: {
      name: "Mumbai",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    noida: {
      name: "Noida",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    pune: {
      name: "Pune",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    ghaziabad: {
      name: "Ghaziabad",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    noida: {
      name: "Noida",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    // haridwar: {
    //   name: "Haridwar",
    //   banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    // },
    shirdi: {
      name: "All Cities",
      // name: "Shirdi",
      banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    },
    // varansi: {
    //   name: "Varansi",
    //   banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    // },
    // divorcee: {
    //   name: "All",
    //   banners: [hero1Jpg, hero2Jpg, hero3Jpg],
    // },
  };

  const data = {
    language: [
      "Bihari",
      "Bengali",
      "Hindi",
      "Gujrati",
      "Kannada",
      "Malayalam",
      "Marathi",
      "Oriya",
      "Punjabi",
      "Rajasthani",
      "Konkani",
      "Himachali",
      "Haryanvi",
      "Assamese",
      "Kashmiri",
      "Nepali",
      "Tulu",
    ],
    caste: [
      "Aggarwal",
      "Brahmin",
      "Khatri",
      "Rajput",
      "Arora",
      "Bania",
      "Sikh Jat",
      "Vaishnav",
      "Aggarwal",
      "Brahmin",
      "Khatri",
      "Rajput",
      "Arora",
      "Bania",
      "Sikh Jat",
      "Vaishnav",
      "Aggarwal",
      "Brahmin",
      "Khatri",
      "Rajput",
      "Arora",
      "Bania",
      "Sikh Jat",
    ],
    religion: [
      "Hindu",
      "Muslim",
      "Christian",
      "Buddhist",
      "Sikh",
      "Jain",
      "Parsi",
      "Jewish",
      "Bahai",
    ],
    city: [
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
    ],
    state: [
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
      "Panvel",
      "Kolkata",
      "Pune",
      "Lucknow",
      "New Delhi",
    ],
    nri: [
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
    ],
    age: [
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
    ],
    height: [
      "4.0 Ft",
      "4.1 Ft",
      "4.2 Ft",
      "4.3 Ft",
      "4.4 Ft",
      "4.5 Ft",
      "4.6 Ft",
      "4.7 Ft",
      "4.8 Ft",
      "4.9 Ft",
      "4.10 Ft",
      "4.11 Ft",
      "5.0 Ft",
      "5.1 Ft",
      "5.2 Ft",
      "5.3 Ft",
      "5.4 Ft",
      "5.5 Ft",
      "5.6 Ft",
      "5.7 Ft",
      "5.8 Ft",
      "5.9 Ft",
      "5.10 Ft",
      "5.11 Ft",
      "6.0 Ft",
      "6.1 Ft",
      "6.2 Ft",
      "6.3 Ft",
      "6.4 Ft",
      "6.5 Ft",
      "6.6 Ft",
      "6.7 Ft",
      "6.8 Ft",
      "6.9 Ft",
      "6.10 Ft",
      "6.11 Ft",
      "7.0 Ft",
    ],
    maritalStatus: [
      "Never Married",
      "Awating Divorce",
      "Divorced",
      "Widowed",
      "Annulled",
    ],
    haveChildren: ["No", "Yes, Living Together", "Yes, Living Separately"],
    country: [
      "India",
      "Australia",
      "Dubai",
      "London",
      "Italy",
      "Rome",
      "Russia",
    ],
    manglik: ["Manglik", "Non Manglik", "Angshik Manglik"],
    highestEducation: [
      "B.Arch",
      "B.Des",
      "B.E / B.Tech",
      "B.Pharma",
      "M.Arch",
      "M.Des",
      "M.E / M.Tech",
      "M.Pharma",
      "M.S ( Engineering )",
    ],
    occupation: [
      "Government",
      "Civil Services",
      "Defence",
      "Self Employed",
      "Not Working",
      "Doctor",
      "Engineering",
      "Architect",
    ],
    income: {
      rupee: [
        "No Income",
        "Rs. 1 Lakh",
        "Rs. 2 Lakh",
        "Rs. 3 Lakh",
        "Rs. 4 Lakh",
        "Rs. 5 Lakh",
        "Rs. 7.5 Lakh",
        "Rs. 10 Lakh",
        "Rs. 15 Lakh",
        "Rs. 20 Lakh",
        "Rs. 25 Lakh",
        "Rs. 35 Lakh",
        "Rs. 50 Lakh",
        "Rs. 70 Lakh",
        "Rs. 1 Crore",
        "And Above",
      ],
      dollar: [
        "No Income",
        "25,000 USD",
        "40,000 USD",
        "60,000 USD",
        "80,000 USD",
        "100,000 USD",
        "150,000 USD",
        "200,000 USD",
        "And Above",
      ],
    },
    dietaryHabits: ["Vegetarian", "Non Vegetarian", "Jain", "Eggetarian"],
    drinkingHabits: ["Yes", "No", "Occasionally"],
    smokingHabits: ["Yes", "No", "Occasionally"],
    challenged: [
      "Doesn't Matter",
      "None",
      "Cripple",
      "Hearing Impaired",
      "Visually Impaired",
      "Others",
    ],
  };

  const membershipData = {
    membershipPlans: {
      ePrime: {
        packages: [
          {
            duration: "3 Months",
            price: "4900",
            offerPrice: "1999",
            contactAccess: 0,
          },
          {
            duration: "6 Months",
            price: "5600",
            offerPrice: "2699",
            contactAccess: 0,
          },
          {
            duration: "12 Months",
            price: "8400",
            offerPrice: "4999",
            contactAccess: 0,
          },
        ],
        benefits: 2,
      },
      eGold: {
        packages: [
          {
            duration: "3 Months",
            price: "6900",
            offerPrice: "2999",
            contactAccess: 60,
          },
          {
            duration: "6 Months",
            price: "9999",
            offerPrice: "4999",
            contactAccess: 130,
          },
          {
            duration: "12 Months",
            price: "12500",
            offerPrice: "6999",
            contactAccess: 250,
          },
        ],
        benefits: 4,
      },
      eDiamond: {
        packages: [
          {
            duration: "3 Months",
            price: "12999",
            offerPrice: "5999",
            contactAccess: 100,
          },
          {
            duration: "6 Months",
            price: "16999",
            offerPrice: "9890",
            contactAccess: 220,
          },
          {
            duration: "12 Months",
            price: "18999",
            offerPrice: "12999",
            contactAccess: 480,
          },
        ],
        benefits: 8,
      },
    },
    membershipBenefits: [
      "Send unlimited messages",
      "Priority customer service",
      "View contact numbers",
      "Unlimited voice & video calls",
      "Make your contact details visible",
      "On-top of search & daily recommendations",
      "Get match of the day notifications",
      "Online shaadi meet through video conferencing",
    ],
    nsPrivilegePlans: {
      packages: [
        {
          duration: "3 Months",
          price: "31000",
          offerPrice: "16999",
          benefits: [
            "Send unlimited messages to ePrime, eGold, eDiamond and Sapphire premier members.",
            "Contact profiles shortlisted by you and arrange meeting through video conferencing.",
            "Send interest to handpicked profiles matching your criteria.",
            "View contact details of 150 ePrime, eGold, eDiamond members.",
            "Unlimited Voice and Video Call.",
          ],
        },
        {
          duration: "6 Months",
          price: "52000",
          offerPrice: "31000",
          benefits: [
            "A relationship manager is assigned to you who will,",
            "Understand qualities that you are looking for in your desired partner.",
            "Send interest to hand picked profiles matching your criteria.",
            "Contact profiles shortlisted by you and arrange meeting through video conferencing.",
            "Send unlimited messages to ePrime, eGold, eDiamond and Sapphire premier members.",
            "Arrange meeting over video conferencing.",
            "Unlimited video and voice calls.",
            "View contact details of 200 no. of ePrime, eGold, eDiamond and 20 contacts of Sapphire premier members.",
          ],
        },
        {
          duration: "12 Months",
          price: "71000",
          offerPrice: "42000",
          benefits: [
            "A relationship manager is assigned to you who will,",
            "Understand qualities that you are looking for in your desired partner.",
            "Send interest to hand picked profiles matching your criteria.",
            "Contact profiles shortlisted by you and arrange meeting through video conferencing.",
            "Send unlimited messages to ePrime, eGold, eDiamond and Sapphire premier members.",
            "Arrange meeting over video conferencing.",
            "Unlimited video and voice calls.",
            "View contact details of 300 no. of ePrime, eGold, eDiamond and 40 contacts of Sapphire premier members.",
          ],
        },
      ],
    },
    sapphirePremierPlans: {
      packages: [
        {
          duration: "3 Months",
          price: "92000",
          offerPrice: "62000",
          benefits: [
            "A Relationship Manager is assigned to you who",
            "Send unlimited messages and chat with NS privilege and Sapphire Premier Members.",
            "Unlimited voice and video calls.",
            "View contact details of NS privilege and Sapphire Premier.",
            "Contact profiles shortlisted by you and arrange meeting throgh video conferencing.",
            "Sends interests to handpicked profiles matching your criteria to NS Privilege and Sapphire Premier.",
          ],
        },
        {
          duration: "6 Months",
          price: "120000",
          offerPrice: "92000",
          benefits: [
            "Understands qualities that you are looking for in your desired partner.",
            "Social media verification of all the selected profiles.",
            "Screening your profile with affluent HNIs profiles and arrange meeting with each other.",
            "Dedicated manager will share matched profiles on weekly basis.",
            "Sends interests to handpicked profiles matching your criteria to NS Privilege and Sapphire Members.",
            "Send unlimited messages, chats, voice and video calls to NS Privilege & Sapphire Premier Members.",
            "View contact details of NS Privilege and Sapphire Premier Members.",
          ],
        },
        {
          duration: "12 Months",
          price: "200000",
          offerPrice: "142000",
          benefits: [
            "Understands qualities that you are looking for in your desired partner.",
            "Social media verification of all the selected profiles.",
            "Screening your profile with affluent HNIs profiles and arrange meeting with each other.",
            "Dedicated manager will share matched profiles on weekly basis.",
            "Sends interests to handpicked profiles matching your criteria to NS Privilege and Sapphire Members.",
            "Send unlimited messages, chats, voice and video calls to NS Privilege & Sapphire Premier Members.",
            "View contact details of NS Privilege and Sapphire Premier Members.",
          ],
        },
      ],
    },
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = {
    login,
    setLogin,
    data,
    matrimonyType,
    cityList,
    hotelsList,
    membershipData,
    navigate,
    searchParams,
  };

  return (
    <StoreContext.Provider value={value}>
      {!loading && children}
    </StoreContext.Provider>
  );
}
