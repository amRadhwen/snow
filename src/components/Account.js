import React from 'react'

export default function Account() {
    return (
        <section className="content content-area customer account">
            <div className="breadcrumb-navigation">
            </div>
            <div className="page-title">
                <span className="label">Compte</span>
                <a className="header-link" href="/account/logout">Se déconnecter</a>
            </div>
            <div className="content-wrap">
                <div className="orders-history">
                    <h2 className="order-history-title">Historique des commandes</h2>
                    <p className="empty">vous n'avez pas encore passé de commande</p>
                </div>
                <div className="account-info">
                    <span className="name">Radhwen Amri</span>
                    <span className="email"><a href="mailto:radhweneamri9631@gmail.com">radhweneamri9631@gmail.com</a></span>
                    <a className="view-addresses" href="/account/addresses">afficher les adresses (0)</a>
                </div>
            </div>
        </section>

    )
}
