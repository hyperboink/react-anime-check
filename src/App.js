import './App.css'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Homepage from './pages/HomePage'
import UpcomingPage from './pages/UpcomingPage'
import TopRatedPage from './pages/TopRatedPage'
import GenreListPage from './pages/GenreListPage'
import GenrePage from './pages/GenrePage'
import SinglePage from './pages/SinglePage'
import SearchResultPage from './pages/SearchResultPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="wrap">
          <Header/>

          <div id="main">
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/upcoming" component={UpcomingPage}></Route>
                <Route path="/top-rated/:type" component={TopRatedPage}></Route>
                <Route path="/top-rated" component={TopRatedPage}></Route>
                <Route path="/genres" component={GenreListPage}></Route>
                <Route path="/genre/anime/:id/:page" component={GenrePage}></Route>
                <Route path="/page/:type/:id" component={SinglePage}></Route>
                <Route path="/search" component={SearchResultPage}></Route>
                <Route component={PageNotFound} />
            </Switch>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
