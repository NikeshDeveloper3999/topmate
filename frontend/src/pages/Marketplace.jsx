import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/commonCompo/Navbar";
import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
import SearchBar from "../components/MarketPlaceComponent/SearchBar";
import service_userDataHook from "../hooks/Service_userDataHook";

const BLOCKED_CATEGORIES = {
  workshop: "cohort",
  package: "package",
};

const Marketplace = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || null;
  const searchQuery = searchParams.get("search") || "";

  const updateURLParams = (updates) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  const handleCategoryChange = (category) => {
    if (BLOCKED_CATEGORIES[category]) {
      const type = BLOCKED_CATEGORIES[category];
      toast(`${type === "cohort" ? "Cohorts & Workshops" : "Packages"} coming soon!`, { icon: "🚧" });
      navigate("/upcoming", { state: { type } });
      return;
    }
    updateURLParams({ category });
  };

  const handleSearch = (query) => {
    updateURLParams({ search: query || null });
  };

  const params = {};
  if (selectedCategory) params.category = selectedCategory;
  if (searchQuery) params.search = searchQuery;

  const { data, isLoading, isError } = service_userDataHook(params);

  return (
    <>
      <Navbar/>
      <CategoryNavbar activeval={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <DetailsCardArea detailsOfDeveloper={data?.data} isLoading={isLoading} isError={isError}/>
      <SearchBar onSearch={handleSearch} defaultValue={searchQuery} />
    </>
  );
};

export default Marketplace; 