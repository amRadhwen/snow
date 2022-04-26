import React from 'react'

export default function Cart() {
    return (
        <div className="sidebar-drawer-container" data-sidebar-drawer-container data-sidebar-drawer-animation-state="closed" tabIndex={-1}>
            <div className="sidebar-drawer" data-sidebar-drawer tab-index={-1}>
                <div className="sidebar-drawer__header-container">
                    <div className="sidebar-drawer__header" data-sidebar-drawer-header>
                        Your cart
                    </div>
                    <button className="sidebar-drawer__header-close" aria-label="close" data-sidebar-drawer-close>
                        <svg className="svg-icon icon-close-alt " xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 12 12">
                            <path fill="currentColor" fillRule="evenodd" d="M5.025 6L0 .975.975 0 6 5.025 11.025 0 12 .975 6.975 6 12 11.025l-.975.975L6 6.975.975 12 0 11.025 5.025 6z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="sidebar-drawer__content" data-sidebar-drawer-content>
                    <div className="cart-mini-content cart-mini-items" data-cart-mini-content>
                        <div className="cart-mini-empty">
                            You don't have any items in your cart yet.
                        </div>
                    </div>
                    <div className="cart-mini-footer" data-cart-mini-footer>
                    </div>
                </div>
            </div>
        </div>
    )
}
