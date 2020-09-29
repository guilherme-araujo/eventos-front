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

    const user = {
        name: "Lucas",
        address: {
            street:'Eucaliptos',
            number: 123,
        }
    }

    async function handleSubmit(data, { reset }) {

        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                address: Yup.object().shape({
                    city: Yup.string()
                        .min(3, 'No mínimo 3 caracters')
                        .required('A cidade é obrigatória')
                })
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

                formRef.curent.setErrors(errorMessages)
            }
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            formRef.current.setData({
               name: 'Lucas Vieira',
               email: 'lucas208@ufrn.edu.br',
               address: {
                   city:'Natal'
               } 
            })
        }, 2000)
    }, [])
    
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
                            <Form ref={formRef}  onSubmit={handleSubmit}>
                                <Input name="name" />
                                <Input type="email" name="email" />
                                <Input type="password" name="password" />
                                
                                <Scope path="address">
                                    <Input name="street" />
                                    <Input name="city" />
                                    <Input name="state" />
                                    <Input name="neighborhood" />
                                    <Input name="number" />
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

