import Head from 'next/head'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { getCountryList, getStateList, getCityList } from '../lib/staticFormData';

import RegistrationForm from '../components/registrationForm'

export default function Registration({ countryList, stateList, cityList }) {
    
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

                <RegistrationForm countryList={countryList} stateList={stateList} cityList={cityList} />

            </main>

        </Layout>


    )
}

export async function getStaticProps(id) {
    const countryList = await getCountryList()
    const stateList = await getStateList()
    const cityList = await getCityList(id)
    return {
        props: {
            countryList,
            stateList,
            cityList,
        }
    }
}