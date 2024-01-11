import {Link} from "react-router-dom";

export function Nav() {
  return(
    <div className="navbar bg-danger px-4">
      <a href="https://www.flipkart.com/" className="navbar-brand">Flipkart</a>
      <div className="nav ms-auto">
        <Link className="nav-link" to="/" >Home</Link>
        <Link className="nav-link" to="/contact" >Contacts</Link>
        <Link className="nav-link" to="/blog" >Blogs</Link>
        <Link className="nav-link" to="/project" >Projects</Link>
      </div>
      <button className="btn btn-success">Order Now</button>
    </div>
  )
}
