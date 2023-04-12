import React from "react";


class MyDiv extends React.Component {
        constructor(props) {
          super(props);
        //   this.handleDivClick = this.handleLoginClick.bind(this);
        //   this.handleButtonClick = this.handleLogoutClick.bind(this);
          this.state = {isDiv: false};
        }

    //     handleDivClick() {
    //       this.setState({isDiv: true});
    //     }

    //     handleLogoutClick() {
    //       this.setState({isDiv: false});
    //     }

    //     render() {
    //     //   const isLoggedIn = this.state.isLoggedIn;
    //     let div;
    //     let isDiv =  this.state.isDiv;
    //       let button;
    //       let isButton = this.button.isButton;

    //       if (isDiv) {
    //         button = <LogoutButton onClick={this.handleLogoutClick} />;
    //       } else {
    //         button = <LoginButton onClick={this.handleLoginClick} />;
    //       }

    //       return (
    //         <div>>
    //           {button}
    //         </div>
    //       );
    //     }
    //   }

    //   function UserGreeting(props) {
    //     return console.log("Div clicked");
    //   }

    //   function GuestGreeting(props) {
    //     return <h1>Please sign up.</h1>;
    //   }

    //   function Greeting(props) {
    //     const isLoggedIn = props.isLoggedIn;
    //     if (isLoggedIn) {
    //       return <UserGreeting />;
    //     }
    //     return <GuestGreeting />;
    //   }

    //   function LoginButton(props) {
    //     return (
    //       <button onClick={props.onClick}>
    //         Login
    //       </button>
    //     );
    //   }

    //   function LogoutButton(props) {
    //     return (
    //       <button onClick={props.onClick}>
    //         Logout
    //       </button>
    //     );


    handlerClickDiv = (data) => () => {
        console.log("Div clicked");
    }

    handlerClickButton = (data) => (e) => {
        console.log("Button clicked");
        // e.stopPropagation();
        !(e.handlerClickDiv);
    }
    render(){
        return(
            <div onClick={this.handlerClickDiv("data text")}>
                <button  onClick={this.handlerClickButton("data text")}>button</button>
            </div>
        )
    }

}



export default MyDiv;