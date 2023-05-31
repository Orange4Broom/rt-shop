import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props): JSX.Element => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
