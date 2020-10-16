import Head from 'next/head'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { getCountryList, getStateList, getCityList } from '../lib/staticFormData';

import RegistrationForm from '../components/registrationForm'

export default function Registration({ countryList, stateList, cityListByState }) {

    console.log(cityListByState)
    
    return (
        <Layout>

            <Head>
                <title>User registration</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                <section >
                    <Container >
                        <div className="row">
                            <div className="col-md-12 text-left section-heading" >
                                <div className="heading-block topmargin-sm"><h2>Cadastro</h2></div>
                            </div>
                        </div>
                    </Container>
                </section>            

                <RegistrationForm countryList={countryList} stateList={stateList} cityList={cityListByState} />

            </main>

        </Layout>


    )
}

export async function getStaticProps() {
    const countryList = await getCountryList()
    const stateList = await getStateList(),
    cityListByState = {}
    for (const state of stateList) {
        cityListByState[state.id] = await getCityList(state.id)
    }
    
    return {
        props: {
            countryList,
            stateList,
            cityListByState,
        }
    }
}