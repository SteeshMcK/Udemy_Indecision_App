console.log("App.js is running!");


// JSX -- JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "The App that can't make up its mind!"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: "Stesha",
    age: 50
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);