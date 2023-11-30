import "../css/bootstrap.min.css";
import Nav from "../components/HomeNav.jsx";
import AppContainer from "../components/appContainer/index.jsx";

function HomePage () {
    return (
        <>
        <Nav />
        </>
    );
}

function App () {
    return (
        <>
        <Nav />
        <AppContainer />
        </>
    );
}

export default App;