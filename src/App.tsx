import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Scan from './pages/Scan';
import Fields from './pages/Fields';
import About from './pages/About';
import Help from './pages/Help';
import DownloadPage from './pages/Download';
import NotFound from './pages/NotFound';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="weather" element={<Weather />} />
              <Route path="scan" element={<Scan />} />
              <Route path="fields" element={<Fields />} />
              <Route path="about" element={<About />} />
              <Route path="help" element={<Help />} />
              <Route path="apkdownload" element={<DownloadPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </I18nextProvider>
  );
}

export default App;
