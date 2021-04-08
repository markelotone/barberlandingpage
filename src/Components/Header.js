import React, {Component} from 'react';

// import ReactDOM from 'react-dom';

export default class Header extends Component {
    constructor () {
        super()
        this.state = {
            display: 'inline-block',
            hidden: true,
            hide: 'none',
        }
        this.ActionLink = this.ActionLink.bind(this);
    }

    ActionLink() {
        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
        }
        if (this.state.hidden === true) {
            this.setState({
                hidden: false,
            });
        console.log("Now Hiding Menu")
        }
        if (this.state.hidden === false) {
            this.setState({
                hidden: true,
            });
            console.log("Now Showing Menu")
            }
      }

    render () {
        const isHidden = this.state.hidden;
        let menuShow;
        if (isHidden) {
            menuShow = <nav className="menu" style={{display: this.state.display}}>
            <a href="#"> Haircuts </a>
            <a href="#"> About Us </a>
            <a href="#"> Contact </a>
        </nav>;
        } else {
            menuShow = <nav className="menu" style={{display: this.state.hide}}>
            <a href="#"> Haircuts </a>
            <a href="#"> About Us </a>
            <a href="#"> Contact </a>
            </nav>;
        }

        return (
            <section id="Header">
                <header className="Header">
                    <h3>Johnny's Barber Shop</h3>
                    <a><i onClick={this.ActionLink} className="fa fa-bars" style={{display: this.state.display}}></i></a>
                    {menuShow}
                </header>
            </section>
          );
    }
}