import React, { useContext } from "react";
import { Link } from "react-router-dom";

/** Homepage.
 * Welcome message or login/signup buttons.
 * Routed at /
 */

function Homepage() {

    return (
        <div className="Homepage">
            <div className="container-lg text-center mt-5">
                <h1 className="mb-4 font-weight-bold">Yodlr Design Challenge</h1>
                        <p>
                                <Link className="btn btn-primary font-weight-bold mx-2"
                                to="/signup">
                                    Sign up
                                </Link>
                                <Link className="btn btn-primary font-weight-bold mx-2"
                                to="/admin">
                                    Admin Page
                                </Link>
                        </p>
            </div>
        </div>
    );
}

export default Homepage;