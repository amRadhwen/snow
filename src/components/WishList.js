import React from 'react'

export default function WishList() {
    return (
        <div data-section-id data-section-type="static-page">
            <main className="content content-area">
                <div className="breadcrumb-navigation">
                </div>
                <div className="page-title">
                    <h1 id="wk-page-title" className="label">Liste de souhaits</h1>
                </div>
                <div className="clearfix">
                    <div className="rte clearfix">
                        {/* start: include 'wishlist-collection' */}<div className="wishlist-collection">
                            <div className="wk-row">
                                <div className="wk-span12">
                                    <h3 className="wk-wishlist-empty-note">Liste de souhaits vide !</h3>
                                </div>
                            </div>
                        </div>{/* end: include 'wishlist-collection' */}
                    </div>
                </div>
                <div style={{ clear: 'both' }} /></main>
        </div>

    )
}
