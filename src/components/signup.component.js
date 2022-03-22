import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './App.css'
import './index.css'


export default class SignUp extends Component {
    render() {
        return (
            <form>
              <div className="App">
            <div className="auth-wrapper">
        <div className="auth-inner">
                <h3>Sign Up</h3>

                <div className="form-group">
                    {/* <label>Sign Up</label> */}
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                {/* <button type="submit" className="btn btn-primary btn-block">Create Password</button> */}
                <Link  to={"/sign-in"}><button type="submit" className="btn btn-primary btn-block">Create Password</button></Link>
            </div>
            </div>
            </div>
            </form>
        );
    }
}