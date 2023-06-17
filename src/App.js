import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { BookShelf } from "./Pages/BookShelf";
import { Search } from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </div>
  );
}

export default App;
