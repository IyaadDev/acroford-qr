// Primary File For All Compiled Components For This Container
import "../../css/panel.css";
import "../../css/bootstrap.min.css";

// The AppContainer is a panel for the entire application. It is the parent.

function Panel () {
    return (
        <div className="panel">
            <div className="panel-body">
                <h1>DEMO HEADING</h1>
            </div>
        </div>
    );
}

function AppContainer () {
    return (
        <div className="app-container">
            <Panel />
        </div>
    );
}

export default AppContainer;