import './App.css';
import React from "react";
import {Menu} from "./components/Menu";
import {AboutFund} from "./components/AboutFund";
import {Gallery} from "./components/Gallery";
import {Help} from "./components/Help";
import {Contacts} from "./components/Contacts";
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
import {Admin} from "./admin/Admin";
import {Route, BrowserRouter} from "react-router-dom";
import {Partners} from "./components/Partners";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Menu/>
              <Route exact path="/" render={()=><Header/>}/>
              <Route exact path="/" render={()=><MainBanner/>}/>
              <Route exact path="/" render={()=><MainPage/>}/>
              <Route path="/about" render={()=><AboutFund/>}/>
              <Route path="/gallery" render={()=><Gallery/>}/>
              <Route path="/dogs" render={()=><Dogs/>}/>
              <Route path="/dog" render={()=><OneDog/>}/>
              <Route path="/cats" render={()=><Cats/>}/>
              <Route path="/cat" render={()=><OneCat/>}/>
              <Route path="/help" render={()=><Help/>}/>
              <Route path="/articles" render={()=><Articles/>}/>
              <Route path="/post" render={()=><OnePost/>}/>
              <Route path="/contacts" render={()=><Contacts/>}/>
              <Route path="/partners" render={()=><Partners/>}/>
              <Route path="/admin" render={()=><Admin/>}/>
              <Footer/>
          </BrowserRouter>
      </div>
  )
}

export default App;
