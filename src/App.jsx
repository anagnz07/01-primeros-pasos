import logo from "./logo.png";
import badge from "./badge.png";
import "./App.css";

const entry = {
    name: "MyCorp",
    status: "active",
    url: "http://example.com",
    logo: "https://pbs.twimg.com/profile_images/721710364799283200/5muw-J7c_400x400.jpg",
};

const firstEmployee = {
    name: "Amancio López",
    avatar: "https://images.assetsdelivery.com/compings_v2/microphoto1981/microphoto19811710/microphoto1981171000024.jpg",
};

function App() {
    return (
        <div>
            <h1>
                <img src={logo} alt="My Logo" />
                My Page
            </h1>
            <div className={`company-card ${entry.status}`}>
                <div
                    className="logo"
                    style={{ backgroundImage: `url(${entry.logo})` }}
                />
                <a href={entry.url}>{entry.name}</a>
                <div className="employee-list">
                    Empleados:
                    <div className="employee">
                        <div
                            className="avatar"
                            style={{
                                backgroundImage: `url(${firstEmployee.avatar})`,
                            }}
                        />
                        <div>{firstEmployee.name}</div>
                        <img className="badge" src={badge} alt="Badge" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
