import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from "../actions/userActions";

export default function Register() {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, success, error} = useSelector(state=>state.auth)
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            first_name,
            last_name,
            email,
            password
        })
        dispatch(signup({
            first_name,
            last_name,
            email,
            password
        }))
        
    }

    useEffect(()=>{
        console.log(loading)
        console.log(success)
        console.log(error)
    }, [])


    return (
        <section className="content content-area customer login">
            <div className="breadcrumb-navigation">
            </div>
            <div className="page-title">
                <span className="label">Créer un compte</span>
            </div>
            <div id="customer-create" className="account-form">
                <form id="create_customer" acceptCharset="UTF-8" onSubmit={handleSubmit}>
                    <input type="hidden" />
                    <input type="hidden" />
                    <div className="field-wrap first-name">
                        <label htmlFor="first_name">Nom</label>
                        <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" placeholder="Nom"  id="first_name" className="field" />
                    </div>
                    <div className="field-wrap last-name">
                        <label htmlFor="last_name">Prénom</label>
                        <input onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder="Prénom"  id="last_name" className="field" />
                    </div>
                    <div className="field-wrap email">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="adresse@email.com"  id="email" className="field" />
                    </div>
                    <div className="field-wrap password">
                        <label htmlFor="password">Mot de passe</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder  id="password" className="field" />
                    </div>
                    <input type="submit" className="action-button submit-button" value="Créer un compte" />
                </form>
            </div>
        </section>
    )
}
