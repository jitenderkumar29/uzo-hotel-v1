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
        <div className="language-dropdown">
          {languages.map((language) => (
            <div
              key={language.lang}
              className="language-option"
              onClick={() => selectLanguage(language.lang)}
            >
              <span className="flag-icon">{/*{language.flag}*/}</span>{" "}
              {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
