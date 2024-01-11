import logo from "./images/flipkartlo.jpg";
export function Footer(){
    return(
        <div className="row bg-secondary text-light">
            <div className="col-sm-12 col-md-6 col-lg-3">
                <h1>Visit us on</h1>
                <ul>
                    <li><a className="nav-link" href="https://facebook.com">Facebook</a></li>
                    <li><a className="nav-link" href="https://instagram.com">instagram</a></li>
                    <li><a className="nav-link" href="https://twitter.com">Twitter</a></li>
                    <li><a className="nav-link" href="https://whatsapp.com">Whatsapp</a></li>
                </ul>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
                <h1>Blogs</h1>
                <ol>
                    <li><a className="nav-link" href="#">Blog1</a></li>
                    <li><a className="nav-link" href="#">Blog2</a></li>
                    <li><a className="nav-link" href="#">Blog3</a></li>
                    <li><a className="nav-link" href="#">Blog4</a></li>
                    <li><a className="nav-link" href="#">Blog5</a></li>
                </ol>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <h1>Topic</h1>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <a href="https://flipkart.com"> <img src={logo} alt="logo" /> </a>
            </div>
        </div>
    )
}