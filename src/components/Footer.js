import React from 'react'

export default function Footer() {
    return (
        <>
            <div id="shopify-section-static-footer" className="shopify-section">
                <div className="static-footer">
                    <footer className="main-footer content-area" id="main-footer">
                        <ul className="connect clearfix module-count-2">
                            <li className="social">
                                <h2 className="title">Follow us out there</h2>
                                <aside className="social-links">
                                    <a href="http://pinterest.com/odin_parker" className="social-link pinterest" target="_blank">
                                        <svg className="svg-icon icon-pinterest " xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                                            <path fill="currentColor" fillRule="evenodd" d="M16 0C7.2 0 0 7.2 0 16c0 6.8 4.2 12.6 10.2 15-.2-1.4-.3-3.3 0-4.7l2-8s-.6-1-.6-2.3c0-2.2 1.3-4 3-4 1.3 0 2 1 2 2.3 0 1.4-1 3.5-1.4 5.4-.4 1.6.8 3 2.4 3 2.8 0 5-3 5-7.5 0-3.8-2.7-6.5-6.7-6.5-4.6 0-7.3 3.4-7.3 7 0 1.4.5 2.8 1.2 3.6v.5c0 .5-.4 1.6-.4 1.8 0 .3-.3.4-.6.2-2-1-3.2-3.8-3.2-6.2 0-5 3.7-9.7 10.6-9.7 5.5 0 9.8 4 9.8 9.2 0 5.5-3.5 10-8.3 10-1.7 0-3.2-1-3.8-2l-1 4c-.3 1.3-1.3 3-2 4 1.6.6 3.2.8 4.8.8 8.8 0 16-7.2 16-16S24.8 0 16 0" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/odinparker" className="social-link instagram" target="_blank">
                                        <svg className="svg-icon icon-instagram " xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                                            <g fill="currentColor" fillRule="evenodd">
                                                <path d="M16 2.887c4.27 0 4.777.016 6.463.093 1.56.071 2.407.332 2.97.551.747.29 1.28.637 1.84 1.196.56.56.906 1.093 1.196 1.84.219.563.48 1.41.55 2.97.078 1.686.094 2.192.094 6.463 0 4.27-.016 4.777-.093 6.463-.071 1.56-.332 2.407-.551 2.97a4.955 4.955 0 0 1-1.196 1.84c-.56.56-1.093.906-1.84 1.196-.563.219-1.41.48-2.97.55-1.686.078-2.192.094-6.463.094s-4.777-.016-6.463-.093c-1.56-.071-2.407-.332-2.97-.551a4.955 4.955 0 0 1-1.84-1.196 4.955 4.955 0 0 1-1.196-1.84c-.219-.563-.48-1.41-.55-2.97-.078-1.686-.094-2.192-.094-6.463 0-4.27.016-4.777.093-6.463.071-1.56.332-2.407.551-2.97.29-.747.637-1.28 1.196-1.84a4.956 4.956 0 0 1 1.84-1.196c.563-.219 1.41-.48 2.97-.55 1.686-.078 2.192-.094 6.463-.094m0-2.882c-4.344 0-4.889.018-6.595.096C7.703.18 6.54.45 5.523.845A7.84 7.84 0 0 0 2.69 2.69 7.84 7.84 0 0 0 .845 5.523C.449 6.54.179 7.703.1 9.405.023 11.111.005 11.656.005 16c0 4.344.018 4.889.096 6.595.078 1.702.348 2.865.744 3.882A7.84 7.84 0 0 0 2.69 29.31a7.84 7.84 0 0 0 2.833 1.845c1.017.396 2.18.666 3.882.744 1.706.078 2.251.096 6.595.096 4.344 0 4.889-.018 6.595-.096 1.702-.078 2.865-.348 3.882-.744a7.84 7.84 0 0 0 2.833-1.845 7.84 7.84 0 0 0 1.845-2.833c.396-1.017.666-2.18.744-3.882.078-1.706.096-2.251.096-6.595 0-4.344-.018-4.889-.096-6.595-.078-1.702-.348-2.865-.744-3.882A7.84 7.84 0 0 0 29.31 2.69 7.84 7.84 0 0 0 26.477.845C25.46.449 24.297.179 22.595.1 20.889.023 20.344.005 16 .005" />
                                                <path d="M16 7.786a8.214 8.214 0 1 0 0 16.428 8.214 8.214 0 0 0 0-16.428zm0 13.546a5.332 5.332 0 1 1 0-10.664 5.332 5.332 0 0 1 0 10.664zM26.458 7.462a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0" />
                                            </g>
                                        </svg>
                                    </a>
                                </aside>
                            </li>
                            <li className="newsletter">
                                <h2 className="title">Newsletter</h2>
                                <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form"><input type="hidden" name="form_type" /><input type="hidden" name="utf8" />
                                    <div className="newsletter-wrap">
                                        <input type="hidden" id="contact_tags" name="contact[tags]" />
                                        <input className="email" name="contact[email]" type="email" placeholder="Email address" />
                                        <input className="submit" name="subscribe" type="submit" />
                                    </div>
                                </form>
                            </li>
                        </ul>
                        <div className="sub-footer">
                            <div className="sub-footer__section--left">
                                <nav className="footer-nav">
                                    <ul>
                                        <li><a href="/policies/terms-of-service">Terms &amp; Conditions</a></li>
                                        <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/policies/refund-policy">Returns, Exchanges &amp; Refund Policy</a></li>
                                        {/*<li><a href="/policies/shipping-policy">Shipping Policy</a></li>*/}
                                        <li><a href="/policies/terms-of-service">Terms of Service</a></li>
                                    </ul>
                                </nav>
                                <p>© 2022. All rights reserved to <a href="http://www.snow.tn">www.snow.tn</a></p>
                            </div>
                            <div className="sub-footer__section--right">
                                <ul className="payment-options">
                                    <li className="payment-icon">
                                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><circle fill="#EB001B" cx={15} cy={12} r={7} /><circle fill="#F79E1B" cx={23} cy={12} r={7} /><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" /></svg>
                                    </li>
                                    <li className="payment-icon">
                                        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" /><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" /><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688" /></svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
                <div style={{ clear: 'both' }} /></div>
        </>
    )
}
