import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./features/home/Home";
import Layout from "./features/layout/Layout";
import Providers from "./features/providers/Providers";
import MasterAgreement from "./features/master-agreements/MasterAgreement";
import NoMatch from "./components/no-match/NoMatch";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="providers" element={<Providers />} />
          <Route path="masteragreements" element={<MasterAgreement />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  )
}

export default App
