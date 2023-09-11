import Footer from "../components/Footer";
import NavBar from "../components/layout/NavBar";
import MainLayout from "../components/layout/LayoutMain";

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
