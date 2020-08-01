import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavLink} from 'reactstrap'

class AppNavbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">SnapCost - A Daily Cost Record App</NavbarBrand>                           
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/cat/total">Browse categories</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/costLog">Cost overview</NavLink>
                  </NavItem>                  
                </Nav>                         
            </Navbar>
          </div>
        );
    }
}
 
export default AppNavbar;