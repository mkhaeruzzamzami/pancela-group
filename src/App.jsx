import { useState } from 'react';
import { paintingsData } from './data/paintings';
import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import WelcomeScreen from './components/WelcomeScreen';
import PaintingGallery from './components/PaintingGallery';
import PaintingDetail from './components/PaintingDetail';
import SupportPage from './components/SupportPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

function App() {
  const [screen, setScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);

  const handleNavigate = (nextScreen) => {
    setScreen(nextScreen);
    setMenuOpen(false);
    setSelectedPainting(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleSelectPainting = (id) => {
    const painting = paintingsData.find(p => p.id === id);
    if(painting) {
      setSelectedPainting(painting);
      setScreen('detail');
      setMenuOpen(false);
    }
  };

  const handleBack = () => {
    setSelectedPainting(null);
    setScreen('menu');
  };

  const getTitle = () => {
    switch(screen) {
      case 'home': return 'Welcome';
      case 'menu': return 'Gallery';
      case 'support': return 'Support';
      case 'contact': return 'Contact';
      case 'about': return 'About';
      case 'detail': return 'Detail Lukisan';
      default: return 'Pancela';
    }
  };

  return (
    <div className="app">
      {/* Hanya tampilkan navbar jika bukan di halaman home */}
      {screen !== 'home' && (
        <Navbar 
          title={getTitle()} 
          showBack={screen === 'detail'} 
          onBack={handleBack} 
          onMenuToggle={handleMenuToggle} 
        />
      )}
      
      {/* Ubah NavMenu menjadi sidebar */}
      <NavMenu 
        isOpen={menuOpen} 
        onNavigate={handleNavigate} 
        onClose={() => setMenuOpen(false)} 
      />
      
      <main className={`main-content ${screen === 'home' ? 'home-content' : ''}`}>
        {screen === 'home' && <WelcomeScreen onNavigate={() => handleNavigate('menu')} />}
        {screen === 'menu' && <PaintingGallery paintings={paintingsData} onSelectPainting={handleSelectPainting} />}
        {screen === 'detail' && <PaintingDetail painting={selectedPainting} onBack={handleBack} />}
        {screen === 'support' && <SupportPage />}
        {screen === 'contact' && <ContactPage />}
        {screen === 'about' && <AboutPage />}
      </main>
    </div>
  );
}

export default App;