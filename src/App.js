import './App.css';
import {Menu} from "./components/Menu";
import {AboutFund} from "./components/AboutFund";
import {Gallery} from "./components/Gallery";
import {Help} from "./components/Help";
import {Contacts} from "./components/Contacts";
import {Cabinet} from "./components/Cabinet";
import {MainPage} from "./components/MainPage";
import {Articles} from "./components/Articles";
import {Dogs} from "./components/Dogs";
import {OneDog} from "./components/OneDog";
import {Cats} from "./components/Cats";
import {OneCat} from "./components/OneCat";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {MainBanner} from "./components/MainBanner";
import {OnePost} from "./components/OnePost";

function App() {
  return (
      <div>
        <Menu/>
        <Header/>
        <MainBanner/>
        <MainPage/>
        <AboutFund/>
        <Gallery/>
        <Dogs/>
        <OneDog/>
        <Cats/>
        <OneCat/>
        <Help/>
        <Articles/>
        <OnePost/>
        <Contacts/>
        <Cabinet/>
        <Footer/>
      </div>
  )
}

export default App;
