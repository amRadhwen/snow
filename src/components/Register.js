import React from 'react'

export default function Register() {
    return (
        <section className="content content-area customer login">
            <div className="breadcrumb-navigation">
            </div>
            <div className="page-title">
                <span className="label">Créer un compte</span>
            </div>
            <div id="customer-create" className="account-form">
                <form id="create_customer" acceptCharset="UTF-8">
                    <input type="hidden" name="form_type"/>
                    <input type="hidden" name="utf8"/>
                    <div className="field-wrap first-name">
                        <label htmlFor="customer[first_name]">Nom</label>
                        <input type="text" placeholder  name="customer[first_name]" className="field" />
                    </div>
                    <div className="field-wrap last-name">
                        <label htmlFor="customer[last_name]">Prénom</label>
                        <input type="text" placeholder  name="customer[last_name]" className="field" />
                    </div>
                    <div className="field-wrap email">
                        <label htmlFor="customer[email]">Email</label>
                        <input type="text" placeholder="your@email.com"  name="customer[email]" className="field" />
                    </div>
                    <div className="field-wrap password">
                        <label htmlFor="customer[password]">Mot de passe</label>
                        <input type="password" placeholder  name="customer[password]" className="field" />
                    </div>
                    <input type="submit" className="action-button submit-button" value="Créer un compte" />
                </form>
            </div>
        </section>
    )
}
