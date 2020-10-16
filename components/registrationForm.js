import { Container } from 'react-bootstrap';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import ProfileType from './fromComponents/profileType';
import { useState, useEffect } from 'react';

export default function RegistrationForm({ countryList, stateList, cityList }) {

    const { data, error } = useSWR('/api/registration_active', fetcher);

    const [profile, setProfile] = useState("");
    const [selectedCountry, setCountry] = useState("");
    const [selectedState, setState] = useState("");
    const [selectedCity, setCity] = useState("");
    const [selectedCitiesInState, setSelectedCitiesInState] = useState([])

    const updateProfileType = event => {
        setProfile(event.target.value);
    }

    const updateCountry = event => {
        setCountry(event.target.value);
        setState("")
        setCity("")
    }

    const updateState = event => {
        setState(event.target.value);        
    }

    const updateCity = event => {
        setCity(event.target.value);
    }

    useEffect(() => {
        if (selectedState) {
            setSelectedCitiesInState(cityList[selectedState]);
        }
    }, [selectedState]);

    if (error) return (
        <h1>Erro</h1>
    )

    if (!data) return (
        <h1>Loading...</h1>
    )

    if (!(data.open==="true")) {
        return (
            <Container>
                <section >
                    <h1 >Inscrições encerradas</h1>
                </section>
            </Container>
        )

    } else {
        return (
            <section >
                <Container >
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                            <div >
                                <h4>Preencha os campos abaixo</h4>
                            </div>
                        </div>
                    </div>

                    <form method="post" >

                        <div className="row">
                            <h6 className="text-uppercase ">Informações pessoais</h6>
                        </div>

                        <div className="row">


                            {/* Nome Completo*/}
                            <div className="col-lg-12 col-md-12 form-group">
                                <label htmlFor="name">Nome completo</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                        </div>

                        {/* <!-- Email e telefone --> */}
                        <div className="row">
                            <div className=" col-lg-8 col-md-8 form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required />

                            </div>

                            <div className=" col-lg-4 col-md-4 form-group">
                                <label htmlFor="telephone">Telefone</label>
                                <input type="tel" placeholder="00 0000-0000" className="form-control" id="telephone" name="telephone" required />

                            </div>
                        </div>

                        {/* <!-- Senha, confirmar senha e tipo de perfil --> */}
                        <div className="row">

                            {/* <!-- Senha --> */}
                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="password">Senha</label>
                                <input type="password" className="form-control" id="password" name="password" required />

                            </div>

                            {/* <!-- Confirmar senha --> */}
                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="password">Confirmar senha</label>
                                <input type="password" className="form-control" id="confirm_password" name="confirm_password" required />

                            </div>

                            {/* <!-- Perfil --> */}
                            <div className=" col-lg-4 col-md-4 form-group">
                                <label htmlFor="name">Perfil</label>
                                <select onChange={updateProfileType} size="1" name="perfil" id="perfil" className="form-control required" required>
                                    <option value="" >Selecione um tipo</option>
                                    <option value="professional">Profissional</option>
                                    <option value="student">Estudante</option>

                                </select>

                            </div>
                        </div>

                        <ProfileType profile={profile} />

                        <div className="row">
                            <h6 className="text-uppercase ">Endereço</h6>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="country">País</label>

                                <select onChange={updateCountry} size="1" name="country" id="country" className="form-control required" required>
                                    <option value="" >Selecione seu país</option>
                                    {countryList.map( (country, index) => (
                                        <option value={country.id} key={index} >{country.name}</option>
                                    ))}
                                    <option value="brazil" >Brazil</option>
                                </select>
                            </div>

                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="zipcode">CEP</label>
                                <input type="text" className="form-control" id="zipcode" name="zipcode" required disabled={selectedCountry !== "30"} />
                            </div>

                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="state">Estado</label>
                                <select size="1" onChange={updateState} value={selectedState} name="state" id="state" className="form-control required" required disabled={selectedCountry !== "30"}>
                                    <option value="">Selecione seu estado</option>
                                    {stateList.map( (state, index) => (
                                        <option value={state.id} key={index}>{state.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-4 form-group">
                                <label htmlFor="city">Cidade</label>
                                <select size="1" onChange={updateCity} value={selectedCity} name="city" id="city" className="form-control required" required disabled={selectedState===''}>
                                    <option value="" >Selecione sua cidade</option>
                                        { 
                                            selectedCitiesInState !== [] ? (
                                                selectedCitiesInState.map((city, index) =>(
                                                <option value={city.id} key={index}>{city.name}</option>
                                            ))
                                            ) : (
                                                <></>
                                            )
                                        }
                                </select>
                            </div>

                            <div className="col-lg-8 col-md-8 form-group">
                                <label htmlFor="address">Logradouro</label>
                                <input type="text" className="form-control" id="adress" name="adress" />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group text-center">
                                    <input type="submit" className="btn btn-primary btn-lg" id="submit" name="submit" value="Register" />
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
            </section>
        )

    }


}

