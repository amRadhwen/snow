import React from 'react'
import AddNewAddress from "./AddNewAddress.js";
import AddressList from './AddressList';

export default function Addresses() {
    return (
        <section className="content content-area customer addresses">
            <div className="breadcrumb-navigation">
            </div>
            <div className="page-title">
                <a className="back-link" href="/account">Retour au compte</a>
                <span className="label">Adresses</span>
                <a className="header-link" href="/account/logout">se déconnecter</a>
            </div>
            <AddressList />
            <AddNewAddress />
        </section>

    )
}
