import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/header/header";
import HomePage from "../pages/home/HomePage";
import { ReactionsPage } from "../pages/reactions/ReactionsPage";
import { TrendingPage } from "../pages/trending/TrendingPage";
import { EntertainmentPage } from "../pages/entertainment/EntertainmentPage";
import { UploadPage } from "../pages/upload/UploadPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="reactions" element={<ReactionsPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};
