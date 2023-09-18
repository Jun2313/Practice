import NavBar from "../components/layout/NavBar";
import Footer from "../components/Footer";
import RecommendedActor from "../components/Contents/RecommendedActor";
import RecommendedMovie from "../components/Contents/RecommendedMovie";


function Main() {
    
    return (
        <>
            <NavBar />
            <div className="Main">
                <RecommendedMovie/>
                <RecommendedActor/>
            </div>
            <Footer />
        </>
    );
}
export default Main;