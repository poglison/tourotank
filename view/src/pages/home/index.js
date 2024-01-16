import Banner from '../../components/banner';
import FAQ from '../../components/faq';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Projects from '../../components/projects';
import Benefits from '../../components/benefits';
import Skeleton from '../../templates/skeleton';

export default function App() {
  return (
    <div className='overflow-hidden relative mx-auto max-w-[2000px]'>
      <Header className="md:!pr-20" />
      <Skeleton />
      <Banner />
      <Projects />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}

