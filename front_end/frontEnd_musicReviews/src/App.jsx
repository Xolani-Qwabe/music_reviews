import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nft from './pages/Nft';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Review from './pages/Review';
import Settings from './pages/Settings';
import Submit from './pages/Submit';
import Profile from './pages/Profile';
import NftStore from './pages/NftStore';
import Layout from './Layout'; 
import './App.css';

function App() {
  return (
    <Routes>
      {/* Define the layout as the root route */}
      <Route path="/" element={<Layout />}>
        {/* Define child routes */}
        <Route index element={<Home />} />
        <Route path="reviews" element={<Reviews />}>
          <Route path=":id" element={<Review />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="nftstore" element={<NftStore />}>
          <Route path=":id" element={<Nft />} />
        </Route>
        <Route path="settings" element={<Settings />} />
        <Route path="submit" element={<Submit />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
