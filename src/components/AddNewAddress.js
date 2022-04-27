import React from 'react'

export default function AddNewAddress() {
    // if no address add new-user to className
  return (
    <section id="add_address" className="add-address" style={{display: "none"}}>
                <div className="edit-add-address">
                    <form method="post" action="/account/addresses" id="address_form_new" acceptCharset="UTF-8"><input type="hidden" name="form_type" defaultValue="customer_address" /><input type="hidden" name="utf8" defaultValue="✓" />
                        <div className="wrap">
                            <label htmlFor="address[first_name]">Nom</label>
                            <input className="field" type="text" name="address[first_name]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[last_name]">Prénom</label>
                            <input className="field" type="text" name="address[last_name]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[company]">Société</label>
                            <input className="field" type="text" name="address[company]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[address1]">Ligne d'adresse 1</label>
                            <input className="field" type="text" name="address[address1]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[address2]">Ligne d'adresse 2</label>
                            <input className="field" type="text" name="address[address2]" />
                        </div>
                        <div className="wrap" id="address-province-container" style={{}}>
                            <label htmlFor="address[province]">Etat / Province</label>
                            <div className="select-wrapper">
                                <select className="styled-select" id="address-province" name="address[province]" data-default>
                                    <option value="jendouba">Jendouba</option>
                                </select>
                            </div>
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[city]">Ville</label>
                            <input className="field" type="text" name="address[city]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[zip]">Code postal</label>
                            <input className="field" type="text" name="address[zip]" />
                        </div>
                        <div className="wrap">
                            <label htmlFor="address[phone]">Téléphone</label>
                            <input className="field" type="text" name="address[phone]" />
                        </div>
                        <div className="default-wrap">
                            <input type="checkbox" id="address_default_address_new" name="address[default]" defaultValue={1} /> <span>Définir comme adresse par défaut ?</span>
                        </div>
                        <div className="submit-wrap">
                            <input className="action-button" type="submit" value="Ajouter adresse" /><span />
                        </div>
                    </form>
                </div>
            </section>
  )
}
