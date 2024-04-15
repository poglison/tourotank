import Banner from '../components/banner';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Header from '../components/header';
import Ads from '../components/ads';
import Benefits from '../components/benefits';
import Container from '../templates/container';

export default function App() {
  return (
    <div className='relative overflow-hidden bg-white dark:bg-stone-850'>
      <Header search={true} />
      <Banner />
      <Container>
        <img className="w-72 md:w-96 absolute top-16 -right-40  md:-right-48 select-none -rotate-45" src="imgs/bull/bull.png" alt="Bull" />
        <Ads />
        <Benefits />
        <FAQ />
      </Container>
      <Footer />

    </div>
  );
}

