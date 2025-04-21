import React, { useState, useRef, useEffect } from "react";
import "./LanguageSelector.css"; // You can keep the same CSS file

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    lang: "en",
    name: "English",
    flag: "🌐",
  });
  const dropdownRef = useRef(null);

  const languages = [
    { lang: "en", name: "English", flag: "🇬🇧" },
    { lang: "hi", name: "Hindi", flag: "in" },
    { lang: "es", name: "Español", flag: "🇪🇸" },
    { lang: "fr", name: "Français", flag: "🇫🇷" },
    { lang: "de", name: "Deutsch", flag: "🇩🇪" },
    { lang: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    const selected = languages.find((l) => l.lang === lang);
    setSelectedLanguage({
      lang: selected.lang,
      name: selected.name,
      flag: selected.flag,
    });
    setIsOpen(false);
    // Here you would implement your language change logic
    console.log("Language changed to:", lang);
  };

  const [country, seCountry] = useState("United States");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected:", { country, language, currency });
    // Add your form submission logic here
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`language-selector ${isOpen ? "active" : ""}`}
      ref={dropdownRef}
    >
      <button className="language-button" onClick={toggleDropdown}>
        <span className="selected-language">
          <span className="flag-icon">{/*{selectedLanguage.flag}*/}</span>{" "}
          {selectedLanguage.name}
        </span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="selector-container">
          <div className="selector-card">
            <div className="section-title-language">
              Select Your Language and Currency
            </div>
            <form onSubmit={handleSubmit}>
              <div className="select-group">
                <label htmlFor="country">Country/Region</label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => seCountry(e.target.value)}
                  className="styled-select"
                >
                  <option value="English">United States</option>
                  <option value="Español">United Kingdom</option>
                  <option value="Español">French</option>
                  <option value="Français">Inida</option>
                  <option value="Deutsch">China</option>
                </select>
              </div>

              <div className="select-group">
                <label htmlFor="currency">Currency</label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="styled-select"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">INR</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>

              <div className="select-group">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="styled-select"
                >
                  <option value="English">English</option>
                  <option value="Español">Español</option>
                  <option value="Français">Français</option>
                  <option value="Français">Hindi</option>
                  <option value="Deutsch">Deutsch</option>
                </select>
              </div>

              <button type="submit" className="confirm-button">
                Confirm language and currency
              </button>
            </form>
          </div>
        </div>

        // old example
        // <div className="language-dropdown">
        //   {languages.map((language) => (
        //     <div
        //       key={language.lang}
        //       className="language-option"
        //       onClick={() => selectLanguage(language.lang)}
        //     >
        //       <span className="flag-icon">{language.flag}</span> {language.name}
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default LanguageSelector;
