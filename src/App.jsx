import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ChardhamYatra } from './pages/ChardhamYatra';
import { DoDhamYatra } from './pages/DoDhamYatra';
import { Fleet } from './pages/Fleet';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chardham-yatra" element={<ChardhamYatra />} />
          <Route path="/do-dham-yatra" element={<DoDhamYatra />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes will be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
