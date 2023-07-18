import PropTypes from 'prop-types'

export default function Navbar(props){
return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.about}</a>
      </li>
     
      
  
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
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