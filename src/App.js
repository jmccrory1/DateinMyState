import './App.css';
import slide1 from './dateimage1.jpeg';
import slide2 from './dateimage2.jpeg';
import slide3 from './dateimage3.jpeg';
import slide4 from './dateimage4.jpg';
import slide5 from './dateimage5.jpg';
import slide6 from './dateimage6.jpeg';
import slide7 from './dateimage7.jpg';
import logo from './dateinmystate.png';
import motto from './motto.png';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand">
        <button class="navbar-toggler" tyspe="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-4 mx-auto">
            <li class="nav-item active">
              <a href="https://www.match.com/">Love Test</a>
            </li>
            <li class="nav-item dropdown ml-4 mt-0">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Date Ideas
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.movietickets.com/">Movies</a>
                <a class="dropdown-item" href="https://seatgeek.com/">Concerts & Sports Games</a>
                <a class="dropdown-item" href="https://www.opentable.com/">Restaurants</a>
                <a class="dropdown-item" href="https://www.tripadvisor.com/">Travel</a>
                <a class="dropdown-item" href="https://www.planetware.com/">Tourism</a>
                <a class="dropdown-item" href="https://www.yelp.com/search?find_desc=Picnic+Areas&find_loc=Baton+Rouge%2C+LA">Picnics</a>
                <a class="dropdown-item" href="https://www.williams-sonoma.com/pages/store-events/cooking-classes-events/?cm_type=gnav">Cooking Classes</a>
                <a class="dropdown-item" href="https://www.yelp.com/search?find_desc=bars&find_loc=Baton%20Rouge%2C%20LA">Bars</a>
                <a class="dropdown-item" href="https://www.tripadvisor.com/Attractions-g40024-Activities-c56-Baton_Rouge_Louisiana.html">Activities & Games</a>

               </div>
            </li>
            <li class="nav-item ml-4">
              <a href="https://weather.com/weather/tenday/l/8cafaf9a8d962a59958d8f84fc9e6756fb1d33ac27eaa1e2156384aa715f2d92">Weather</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="App-header">

        <div class="rectangle">
          <div>
            <br></br>
            <img src={logo} alt="logo" height="100px" width="500px" />
            <br></br>
            <img src={motto} alt="motto" height="50px" width="400px" />
          </div>

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img src={slide2} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img src={slide3} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img src={slide4} alt="Fourth slide" />
              </div>
              <div class="carousel-item">
                <img src={slide5} alt="Fifth slide" />
              </div>
              <div class="carousel-item">
                <img src={slide6} alt="Sixth slide" />
              </div>
              <div class="carousel-item">
                <img src={slide7} alt="Seventh slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>

    </div>

  );
}

export default App;
