import NavBar from "../components/layout/NavBar";
import Footer from "../components/Footer";

function Main() {
    return (
        <>
            <NavBar />
            <div className="Main">
                <div className="HomeContainer">
                    <img src="/deadfool.jpg" alt="Deadfool" style={{
                        height: '700px'
                    }}/>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Main;