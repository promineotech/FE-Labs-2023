// In React 18+ it is no longer necessary to import React in each child component. 

function Nav(){
 
    return (
      <nav className="navBar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }

export default Nav;
