import Banner from '../../components/banner';
import FAQ from '../../components/faq';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Projects from '../../components/projects';
import Benefits from '../../components/benefits';
import Video from '../../components/video';
import Container from '../../templates/container';

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <Projects />
        <Benefits />
        <Video />
        <FAQ />
      </Container>
      <Footer />

    </div>
  );
}

