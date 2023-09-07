
import MainLayout from "../components/layout/LayoutMain";
import Footer from "../components/Footer";
import NavBar from "../components/layout/NavBar";
function Movie() {
    return (
      <>
        <NavBar />
            <div className="Movie">
            <MainLayout />
            </div>
        <Footer />
      </>
    );
  }
  
  export default Movie;