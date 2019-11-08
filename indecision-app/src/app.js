console.log("App.js is running!");


// JSX -- JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "The App that can't make up its mind!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(e.target.elements);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
};

const remove = () => {
    app.options = [];
    renderFormApp();
}

const appRoot = document.getElementById("app");

const renderFormApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p> 
            <p>{app.options.length}</p>
            <button onClick={remove}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderFormApp();
