import React, { Suspense } from "react"
import { Switch, Route, HashRouter as Router } from "react-router-dom"
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Loader from "./components/Loader"

const LatestPage = React.lazy(() => import('./pages/LatestPage'))
const UpcomingPage = React.lazy(() => import('./pages/UpcomingPage'))
const TopRatedPage = React.lazy(() => import('./pages/TopRatedPage'))
const GenreListPage = React.lazy(() => import('./pages/GenreListPage'))
const GenrePage = React.lazy(() => import('./pages/GenrePage'))
const DetailsPage = React.lazy(() => import('./pages/DetailsPage'))
const SearchResultPage = React.lazy(() => import('./pages/SearchResultPage'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'))

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrap">
          <Header/>

          <div id="main">
            <Suspense fallback={<Loader />}>
              <Switch>
                  <Route exact path="/" component={LatestPage}></Route>
                  <Route path="/upcoming" component={UpcomingPage}></Route>
                  <Route path="/top-rated/:type" component={TopRatedPage}></Route>
                  <Route path="/top-rated" component={TopRatedPage}></Route>
                  <Route path="/genres" component={GenreListPage}></Route>
                  <Route path="/genre/anime/:id/:page" component={GenrePage}></Route>
                  <Route path="/page/:type/:id" component={DetailsPage} ></Route>
                  <Route path="/search" component={SearchResultPage}></Route>
                  <Route component={PageNotFound} />
              </Switch>
            </Suspense>
          </div>

          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
