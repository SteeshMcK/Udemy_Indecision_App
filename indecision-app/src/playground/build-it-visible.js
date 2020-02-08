console.log("App.js is running!");

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
       this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           };
       });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {/* If visibility is true, render div! */}
                {this.state.visibility && (
                    <div>
                        <p>Hey! This neat-o thing works!</p>
                    </div>    
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const showIt = () => {
//     // Define visibility as the opposite of what it was.
//     visibility = !visibility;
//     renderTemplateThree();
// }

// const appRoot = document.getElementById("app");

// const renderTemplateThree = () => {
    // const templateThree = (
    //     <div>
    //         <h1>Visibility Toggle</h1>
    //         <button onClick={showIt}>
    //             {/* Is visibility true? if so, render button with text 'Hide details'. If not, render button
    //             with text 'Show Details' */}
    //             {visibility ? 'Hide details' : 'Show Details'}
    //         </button>
    //         {/* If visibility is true, render div! */}
    //         {visibility && (
    //             <div>
    //                 <p>Hey! This neat-o thing works!</p>
    //             </div>    
    //         )}
    //     </div>
    // );
//     ReactDOM.render(templateThree, appRoot);
// }

// renderTemplateThree();
