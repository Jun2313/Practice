import NavBar from "../components/layout/NavBar";
import Footer from "../components/Footer";
import ActorContent from "../components/ActorContent";


function Actor() {
    

    return (
        <>
            <NavBar />
            <div className="Actor">
                <ActorContent />
            </div>
            <Footer />
        </>
    );
}
export default Actor;