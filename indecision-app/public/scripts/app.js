"use strict";

console.log("App.js is running!");

// JSX -- JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "The App that can't make up its mind!",
    options: []
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var remove = function remove() {
    app.options = [];
    renderFormApp();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    console.log(e.target.elements);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
};

var appRoot = document.getElementById("app");

var renderFormApp = function renderFormApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: remove },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormApp();
