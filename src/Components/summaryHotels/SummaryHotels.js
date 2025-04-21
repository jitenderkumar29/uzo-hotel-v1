import React, { useState } from "react";
import styles from "./SummaryHotels.module.css";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import HotelCard from "./HotelCard/HotelCard";

function SummaryHotels() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.container}>
      {/* Mobile header */}
      <div className={styles.header}>
        <h1>Hotels in Delhi</h1>
      </div>

      {/* Mobile filter toggle */}
      <div className={styles.filterToggle} onClick={toggleSidebar}>
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 2h8M6 8h8M6 14h8M2 2h0M2 8h0M2 14h0"></path>
        </svg>
        <span>Filters</span>
      </div>

      <FilterSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />

      <main className={styles.mainContent}>
        <HotelCard />
        {/* Additional HotelCard components would go here */}
      </main>
    </div>
  );
}

export default SummaryHotels;
