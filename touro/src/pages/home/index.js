import Banner from '../../components/banner';
import FAQ from '../../components/faq';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Projects from '../../components/projects';
import Benefits from '../../components/benefits';

export default function App() {
  return (
    <div className='overflow-hidden relative'>
      <Header />
      <Banner />
      <Projects />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}

