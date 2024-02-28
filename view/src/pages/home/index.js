import Banner from '../../components/banner';
import FAQ from '../../components/faq';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Ads from '../../components/ads';
import Benefits from '../../components/benefits';
import Container from '../../templates/container';

export default function App() {
  return (
    <div className='bg-white dark:bg-stone-950'>
      <Header search={true} />
      <Banner />
      <Container>
        <Ads />
        <Benefits />
        <FAQ />
      </Container>
      <Footer />

    </div>
  );
}

