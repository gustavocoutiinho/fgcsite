import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ChefClaudeTroisgros from "./ChefClaudeTroisgros";
import ChefProfile from "./ChefProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chefs/claude-troisgros" element={<ChefClaudeTroisgros />} />
        <Route path="/chefs/:slug" element={<ChefProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
