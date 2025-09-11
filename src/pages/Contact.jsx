import React, { Component } from 'react';

// Images
import envelope from '../asset/svg/envelope-at.svg';
import geoalt from '../asset/svg/geo-alt.svg';
import map from '../asset/svg/map.svg';
import phone from '../asset/svg/phone.svg';

import '../style/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_name: "",
            contact_email: "",
            contact_tel: "",
            sujet: "",
            texte: ""
        };
    }

    // Fonction récupérer les donnés du form
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // Fonction Envoyer
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données du formulaire :", this.state);
    }

    render() {
        return (
            <div className="Contact">
                <div>
                    <h1>Contact</h1>
                    <p>
                        <small>
                            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                        </small>
                    </p>
                    <hr className="border border-primary border-2 opacity-100 mx-auto" style={{ width: "35%" }} />
                </div>

                <div className="Contenue-box container text-start">
                    <div className='row my-5'>
                        <div className='col-md-6'>
                            <h2>Formulaire de contact</h2>
                            <hr className="border border-primary border-2 opacity-100" />
                            <form onSubmit={this.handleSubmit} className='form'>
                                <input
                                    type="text"
                                    name="contact_name"
                                    className="form-control"
                                    placeholder="Votre nom"
                                    value={this.state.contact_name}
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="contact_email"
                                    className="form-control"
                                    placeholder="Votre adresse email"
                                    value={this.state.contact_email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="contact_tel"
                                    className="form-control"
                                    placeholder="Votre numéro de téléphone"
                                    value={this.state.contact_tel}
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="sujet"
                                    className="form-control"
                                    placeholder="Sujet"
                                    value={this.state.sujet}
                                    onChange={this.handleChange}
                                    required
                                />
                                <textarea
                                    name="texte"
                                    className="form-control"
                                    placeholder="Votre message"
                                    value={this.state.texte}
                                    onChange={this.handleChange}
                                />
                                <input type="submit" className="btn btn-primary mt-3" value="Envoyer" />
                            </form>
                        </div>

                        <div className='col-md-6'>
                            <h2>Mes coordonnées</h2>
                            <hr className="border border-primary border-2 opacity-100" />
                            <div>
                                <h3>John Doe</h3>
                                <address className="d-flex flex-column">
                                    <ul>
                                        <li className="p-2">
                                            <img src={map} alt='localisation' width="16" height="16" />
                                            40 rue Laure Diebold
                                        </li>
                                        <li className="p-2">
                                            <img src={geoalt} alt='localisation' width="16" height="16" />
                                            69009 Lyon, France
                                        </li>
                                        <li className="p-2">
                                            <img src={phone} alt="Adresse" width="16" height="16" />
                                            10 20 30 40 50
                                        </li>
                                        <li className="p-2">
                                            <img src={envelope} alt="Adresse" width="16" height="16" />
                                            john.doe@gmail.com
                                        </li>
                                    </ul>
                                </address>
                                <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508184!2d4.796403976553837!3d45.778665712401754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1757520935329!5m2!1sfr!2sfr"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
