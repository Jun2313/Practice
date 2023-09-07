import NavBar from "../components/NavBar";
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