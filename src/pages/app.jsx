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

function Attribution () {
    return (
        <div>
            <p className="text-muted">Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>
    );
}

function App () {
    return (
        <>
        <Nav />
        <AppContainer />
        <Attribution />
        </>
    );
}

export default App;