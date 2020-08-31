import Head from 'next/head'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { getCountryList, getStateList } from '../lib/staticFormData';

import RegistrationForm from '../components/registrationForm'

export default function Registration({ countryList, stateList }) {
    
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

                <RegistrationForm countryList={countryList} stateList={stateList} />

            </main>

        </Layout>


    )
}

export async function getStaticProps() {
    const countryList = await getCountryList()
    const stateList = await getStateList()
    return {
        props: {
            countryList,
            stateList
        }
    }
}