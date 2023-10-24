import { Link } from "react-router-dom";


const Error = () => {
    return(
    <div id="app">
        <div className="page-404">
            <div className="vertical-center">
                <div className="text-center">
                    <h1>404!</h1>
                    <h5>We can't seem to find the page you're looking for.</h5>
                    <div className="redirect-link-wrapper u-s-p-t-25">
                        <Link className="redirect-link" to="/">
                            <span>Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Error;