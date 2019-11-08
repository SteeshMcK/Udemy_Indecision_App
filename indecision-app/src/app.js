console.log("App.js is running!");


// JSX -- JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "The App that can't make up its mind!",
    options: []
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const remove = () => {
    app.options = [];
    renderFormApp();
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

const appRoot = document.getElementById("app");

const renderFormApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p> 
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li>)
                }
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
