// Primary File For All Compiled Components For This Container
import "../../css/panel.css";
// /components/appContainer/index.jsx
import QRCodeGenerator from './QRCodeGenerator';
// The AppContainer is a panel for the entire application. It is the parent.

function Panel () {
    return (
        <div className="panel text-center align-items-center justify-content-center">
            <div className="panel-body">
                <h1>DEMO HEADING</h1>
                <QRCodeGenerator />
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