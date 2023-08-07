import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props){
return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    {/* backticks are used to use templete literals in the tring and curly braces shows the usesage of javascript */}
<div className="container-fluid">
  <Link className="navbar-brand" to="/textform">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/textform">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
      </li>
     
      
  
    </ul>
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}` }>
  <input onClick={props.toogleMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  onClick={props.toogleMode} className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.labelText}</label>
</div>
  </div>
</div>
</nav>
  
);
}


// For reminding ourself to remeber which prop type we have to send in props
// Navbar.propTypes= {
//   title: PropTypes.string,
//   about: PropTypes.string

// }


// You can make any prop value as a default value through this unless u pass the value as a prop in main component where the Navbar is rendering,
// Navbar.defaultProps ={
//   title : 'Set title here'
// }

// If there is no default value for props other than we are not sending any kind of value then isRequaired gives an error if you not giving any value to props . if u see an isRequired then u must send a value.
//Use this in most of the cases.
// Navbar.propTypes= {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired

// }