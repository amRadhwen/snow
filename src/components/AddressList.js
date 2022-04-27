import React from 'react'

export default function AddressList() {
    return (
        <>
        <section className="address-list">
            <ul className="list">
                <li className="first ">
                    <div id="view_address_7673963610333">
                        <p className="name">Amri Radhwen <span className="default">(default address)</span></p>
                        <p className="address-1">ain draham, jendouba, tunisia</p>
                        <p className="address-2">ain draham</p>
                        <p className="address-3">Tunisia 8134</p>
                        <span className="action">
                            <a href="#" data-edit-address={7673963610333}>Edit</a>
                            <a href="#" data-delete-address={7673963610333}>Delete</a>
                        </span>
                    </div>
                    <section id="edit_address_7673963610333" className="edit-address" style={{ display: 'none' }}>
                        <div className="edit-add-address">
                            <form method="post" action="/account/addresses/7673963610333" id="address_form_7673963610333" acceptCharset="UTF-8"><input type="hidden" name="form_type" defaultValue="customer_address" /><input type="hidden" name="utf8" defaultValue="✓" />
                                <div className="wrap">
                                    <label htmlFor="address[first_name]">First Name</label>
                                    <input className="field" type="text" name="address[first_name]" defaultValue="Amri" />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[last_name]">Last Name</label>
                                    <input className="field" type="text" name="address[last_name]" defaultValue="Radhwen" />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[company]">Company</label>
                                    <input className="field" type="text" name="address[company]" defaultValue />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[address1]">Address line 1</label>
                                    <input className="field" type="text" name="address[address1]" defaultValue="ain draham, jendouba, tunisia" />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[address2]">Address line 2</label>
                                    <input className="field" type="text" name="address[address2]" defaultValue />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[city]">City</label>
                                    <input className="field" type="text" name="address[city]" defaultValue="ain draham" />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[country]">Country</label>
                                    <div className="select-wrapper">
                                        <select className="styled-select" id="address-country-7673963610333" name="address[country]" data-default="Tunisia">
                                        </select>
                                    </div>
                                </div>
                                <div className="wrap" id="address-province-container-7673964396765" style={{ display: 'none' }}>
                                    <label htmlFor="address[province]">State / Province</label>
                                    <div className="select-wrapper">
                                        <select className="styled-select" id="address-province-7673964396765" name="address[province]" data-default />
                                    </div>
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[zip]">ZIP / Postal code</label>
                                    <input className="field" type="text" name="address[zip]" defaultValue={8134} />
                                </div>
                                <div className="wrap">
                                    <label htmlFor="address[phone]">Phone</label>
                                    <input className="field" type="text" name="address[phone]" defaultValue={+21626794992} />
                                </div>
                                <div className="default-wrap">
                                    <input type="checkbox" id="address_default_address_7673964396765" name="address[default]" defaultValue={1} /> <span>Set as Default Address?</span>
                                </div>
                                <div className="submit-wrap">
                                    <input className="action-button" type="submit" id="submit-7673964396765" defaultValue="Submit" /><span>or <a href="#" onclick="Shopify.CustomerAddress.toggleForm(7673964396765); return false;" data-toggle-address-edit>cancel</a></span>
                                </div>
                                <input type="hidden" name="_method" defaultValue="put" /></form>
                        </div>
                    </section>
                </li>
            </ul>
        </section>
        <a class="add-new" href="#" data-toggle-address-form="">Add new address</a>
        </>
    )
}
