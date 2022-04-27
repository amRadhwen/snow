import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const [recoverState, setrecoverState] = useState(false);

    const toggleRecoverPasswordForm = (e) => {
        console.log("we are inside");
        if( !recoverState ) {
            document.getElementById("customer-login").style.display = "none";
            document.getElementById("recover-password").style.display = "block";
            setrecoverState(true);
        }
        else {
            document.getElementById("recover-password").style.display = "none";
            document.getElementById("customer-login").style.display = "block";
            setrecoverState(false);
        }
    }

    return (
        <section className="content content-area customer login">
            <div className="breadcrumb-navigation">
            </div>
            <div className="page-title">
                <span className="label">Se connecter</span>
            </div>
            <div id="customer-login" className="account-form">
                <form>
                    <input type="hidden" name="form_type"/>
                    <input type="hidden" name="utf8"/>
                    <div className="field-wrap email">
                        <label htmlFor="customer[email]">Email</label>
                        <input type="text" placeholder="your@email.com" name="customer[email]" className="field" />
                    </div>
                    <div className="field-wrap password">
                        <label htmlFor="customer[password]">Mot de passe</label>
                        <input type="password" name="customer[password]" className="field" />
                    </div>
                    <input type="submit" className="action-button submit-button" value="Se connecter"/>
                    <a onClick={toggleRecoverPasswordForm} className="forgot-password helper" href="#recover">Mot de passe oublié?</a>
                </form>
                <div className="secondary-wrap">
                    <p>Nouveau client? <Link to="/account/register">Créer un compte</Link></p>
                </div>
            </div>
            <div id="recover-password" className="account-form">
                <form>
                <input type="hidden" name="form_type"/>
                    <input type="hidden" name="utf8"/>
                    <p className="message">Nous vous enverrons un e-mail pour réinitialiser votre mot de passe.</p>
                    <div className="field-wrap email">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="your@email.com" name="email" className="field" />
                    </div>
                    <input type="submit" className="action-button submit-button" value="Envoyer"/>
                    <a onClick={toggleRecoverPasswordForm} className="forgot-password helper" href="#recover"><span>ou </span>annuler</a>
                </form>
            </div>
        </section>
    )
}
