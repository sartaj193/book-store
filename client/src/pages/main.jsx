
import thirtyImage from "../assets/book/thirty.jpg";
//import "./main.css";
//import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Main = () => {
  return (
    <div className="row">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div>
    <div class="carousel-item active">
      <img src={thirtyImage} class="d-block w-100% height= 100%" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={thirtyImage}  class="d-block w-100%" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={thirtyImage}  class="d-block w-100%" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Main;






