import React from "react";
import Header from "../_Header";
import SearchBarMultiple from "../searchBarMultiple/SearchBarMultiple";
import FooterUzo from "../footerUzo/FooterUzo";
import { useSearchParams } from "react-router-dom";

const Book = () => {
  const [searchParams] = useSearchParams();
  const searchMode = searchParams.get("searchMode");
  console.log("searchMode in book");
  console.log(searchMode);

  return (
    <>
      <Header />
      <SearchBarMultiple searchMode={searchMode} />
      <FooterUzo />
    </>
  );
};

export default Book;
