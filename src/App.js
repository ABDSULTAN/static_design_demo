import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/Layout/PageLayout";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
