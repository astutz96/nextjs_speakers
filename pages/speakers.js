import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar';
import Speakers from '../src/components/Speakers';
import Footer from '../src/components/Footer';

function Page() {
    return (
        <div>
            <Header />
            <Menu />
            <SpeakerSearchBar />
            <Speakers />
            <Footer />
        </div>
    );
}
export default Page;