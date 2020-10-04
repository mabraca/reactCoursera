import React, {Component} from 'react';
import { NavbarBrand, Navbar, Jumbotron } from 'reactstrap';

class Header extends Component {
    render (){
        return(
            <React.Fragment> 
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className=" row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p> We take inspiration from the World's best cusines, and create an unique fusion experience. Our lipsmacking creation will tickle   </p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    };
}

export default Header;