"use strict";

console.log("App.js is running!");

var visibility = false;

var showIt = function showIt() {
    // Define visibility as the opposite of what it was.
    visibility = !visibility;
    renderTemplateThree();
};

var appRoot = document.getElementById("app");

var renderTemplateThree = function renderTemplateThree() {
    var templateThree = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: showIt },
            visibility ? 'Hide details' : 'Show Details'
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Hey! This neat-o thing works!"
            )
        )
    );
    ReactDOM.render(templateThree, appRoot);
};

renderTemplateThree();
