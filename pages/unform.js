import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import * as Yup from 'yup'

import Input from '../components/Form/Input'

export default function Unform() {
    const formRef = useRef(null)


    async function handleSubmit(data, { reset }) {

        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório')

                // Exemplo de validação para atributos compostos
                    /*address: Yup.object().shape({
                    city: Yup.string()
                        .min(3, 'No mínimo 3 caracters')
                        .required('A cidade é obrigatória')
                })
                */
            })        
            
            await schema.validate(data, {
                abortEarly: false,
            })
            console.log(data)

            formRef.current.setErrors({})
    
            reset()
        }catch(err) {
            if(err instanceof Yup.ValidationError){
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
            }
        }
        
    }
    /* Essa parte foi só para testar o autopreenchimento de alguns campos buscando os dados
    useEffect(() => {
        setTimeout(() => {
            formRef.current.setData({
               name: 'Lucas Vieira',
               email: 'lucas208@ufrn.edu.br',
               
            })
        }, 2000)
    }, [])
    */
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
                                <div className="heading-block topmargin-sm"><h2>Registration</h2></div>
                            </div>
                            <Form ref={formRef}  onSubmit={handleSubmit}>
                                <Input name="name" placeholder="name" />
                                <Input type="email" name="email" placeholder="email" />
                                <Input type="password" name="password" placeholder="password" />
                                <Input name="course" placeholder="course" />
                                <Input name="phone" placeholder="phone" />
                                <Scope path="country">
                                    <Input name="id" placeholder="country_id"/>
                                </Scope>
                                <Scope path="state">
                                    <Input name="id" placeholder="state_id"/>
                                </Scope>
                                <Scope path="city">
                                    <Input name="id" placeholder="city_id"/>
                                </Scope>
                                <Input name="address" placeholder="address" />
                                <Scope path="registrationType">
                                    <Input name="id" placeholder="type_id"/>
                                </Scope>

                                <button type="submit">Enviar</button>
                            </Form>
                        </div>
                    </Container>
                </section>            

            </main>

        </Layout>

    )
}

