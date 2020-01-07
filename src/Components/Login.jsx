import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from "../actions";
import { useState } from 'react';

const Login = (props) => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.userLogin(email, password);
    };


    return (
        <div className="main">
            <div className="login-form">
                <h2 className="heading-secondary ma-bt-lg"> Log into your account</h2>
                <form onSubmit={e => handleSubmit(e)} action="" className="form">
                    <div className="form__group">
                        <label htmlFor="email" className="form__label">Email address</label>
                        <input id="email" type="email" placeholder="you@example.com" required={true} className="form__input"
                        onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="form__group ma-bt-md">
                        <label htmlFor="password" className="form__label"> Password </label>
                        <input id="password" type="password" className="form__input" minLength="8"
                               placeholder="*******" required={true} onChange={e => setPassword(e.target.value)}
                                value={password}/>
                    </div>

                    <div className="form__group">
                        <button className="btn btn--green">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { userLogin })(Login);