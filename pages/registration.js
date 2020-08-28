import Head from 'next/head'
import Layout from '../components/layout'

export default function Registration() {
  return (
    <Layout>

<Head>
        <title>User registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <section class="probootstrap-section probootstrap-section-colored">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left section-heading probootstrap-animate">
                        <div class="heading-block topmargin-sm"><h2>Cadastro</h2></div>
                    </div>
                </div>
            </div>
        </section>

        {/* {% if registration_available is False %}
            <section class="probootstrap-section probootstrap-border-top">
                <h1 style="text-align:center">Inscrições encerradas</h1>
            </section>
        {% else %} */}
            {/* <!-- REGISTRATION --> */}
            <section class="probootstrap-section probootstrap-border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xsm-12">
                            <div class="probootstrap-animate" id="probootstrap-content">
                                <h4>Preencha os campos abaixo</h4>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Formulário de cadastro --> */}
                    <form method="post" class="probootstrap-form">
                        
                        {/* <!-- Nome e nome para cracha --> */}
                        <div class="row">
                            <h6 class="text-uppercase probootstrap-uppercase">Informações pessoais</h6>
                        
                            {/* <!-- Nome completo --> */}
                            <div class="col-lg-12 col-md-12 form-group">
                                <label for="name">Nome completo</label>
                                <input type="text" class="form-control" id="name" name="name" required value="{{usuario.nome_usuario}}"/>
                                {/* {% if errors.erro_nome_vazio %}
                                    {{errors.erro_nome_vazio}}
                                    <script>alter_cor("name");</script>
                                {% elif errors.nome_short %}
                                    {{errors.nome_short}}
                                    <script>alter_cor("name");</script>
                                {% elif errors.nome_e_sobrenome %}
                                    {{ errors.nome_e_sobrenome }}
                                    <script>alter_cor("name");</script>
                                {% endif %} */}
                            </div>
                        </div>

                        {/* <!-- Email e telefone --> */}
                        <div class="row">
                            <div class=" col-lg-8 col-md-8 form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required value="{{usuario.email}}"/>
                                {/* {% if errors.erro_email_vazio %}
                                    {{ errors.erro_email_vazio }}
                                    <script>alter_cor("email");</script>
                                
                                {% elif errors.erro_email_existente%}
                                    {{ errors.erro_email_existente }}
                                    <script>alter_cor("email");</script>
                                {% endif %} */}
                            </div>

                            <div class=" col-lg-4 col-md-4 form-group">
                                <label for="telephone">Telefone</label>
                                <input type="tel" placeholder="00 0000-0000" class="form-control" id="telephone" name="telephone" required value="{{usuario.celular}}"/>
                                {/* {% if errors.celular_empty %}
                                    {{ errors.celular_empty }}
                                    <script>alter_cor("telephone");</script>
                                
                                {% elif errors.celular_invalido %}
                                    {{ errors.celular_invalido }}
                                    <script>alter_cor("telephone");</script>
                                {% endif %} */}
                            </div>
                        </div>

                        {/* <!-- Senha, confirmar senha e tipo de perfil --> */}
                        <div class="row">
                        
                            {/* <!-- Senha --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="password">Senha</label>
                                <input type="password" class="form-control" id="password" name="password" required/>
                                {/* {% if errors.senhas_vazias %}
                                    {{errors.senhas_vazias}}
                                    <script>alter_cor("password");</script>

                                {% elif errors.senha_diferentes %}
                                    {{errors.senha_diferentes}}
                                    <script>alter_cor("password");</script>

                                {% elif errors.senha_numerica %}
                                    {{errors.senha_numerica}}
                                    <script>alter_cor("password");</script>

                                {% elif errors.senha_digitos %}
                                    {{errors.senha_digitos}}
                                    <script>alter_cor("password");</script>

                                {% elif errors.senha_pequena %}
                                    {{errors.senha_pequena}}
                                    <script>alter_cor("password");</script>
                                {% endif %} */}
                            </div>

                            {/* <!-- Confirmar senha --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="password">Confirmar senha</label>
                                <input type="password" class="form-control" id="confirm_password" name="confirm_password" required/>
                                {/* {% if errors.senhas_vazias %}
                                    {{errors.senhas_vazias}}
                                    <script>alter_cor("confirm_password");</script>
                                
                                {% elif errors.senha_diferentes %}
                                    {{errors.senha_diferentes}}
                                    <script>alter_cor("confirm_password");</script>
                                {% endif %} */}
                            </div>

                            {/* <!-- Perfil --> */}
                            <div class=" col-lg-4 col-md-4 form-group">
                                <label for="name">Perfil</label>
                                <select size="1" name="perfil" id="perfil" class="form-control required" required>
                                    <option value="" selected="">Selecione um tipo</option>
                                {/* {% for perfil in dados.perfis %}
                                    <option value="{{ perfil.id }}">{{ perfil.nome }}</option>
                                {% endfor %} */}
                                </select>
                                {/* {% if errors.perfil_nao_escolhido %}
                                    {{ errors.perfil_nao_escolhido }}
                                    <script>alter_cor("inscricao");</script>
                                {% endif %} */}
                            </div>
                        </div>

                        {/* <!-- Informações adicionais dependendo do perfil escolhido -->
                        <!-- Caso perfil seja estudante --> */}
                        <div class="row row-perfil-estudante" id="row-perfil-estudante">
                            {/* <!-- Instituicao --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="Instituicao">Instituição</label>
                                <input type="text" class="form-control" id="instituicao" name="instituicao" value="{{ usuario.instituicao }}"/>
                                {/* {% if errors.instituicao_vazia %}
                                    {{ errors.instituicao_vazia }}
                                    <script>alter_cor("instituicao");</script>
                                {% endif %} */}
                            </div>

                            {/* <!-- Curso --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="Curso">Curso</label>
                                <input type="text" class="form-control" id="curso" name="curso" value="{{ usuario.curso }}"/>
                                {/* {% if errors.curso_vazio %}
                                    {{ errors.curso_vazio }}
                                    <script>alter_cor("curso");</script>
                                {% endif %} */}
                            </div>

                            {/* <!-- Formação --> */}
                            <div class=" col-lg-4 col-md-4 form-group">
                                <label for="name">Formação</label>
                                <select size="1" name="formacao" id="formacao_1" class="form-control required" disabled>
                                    <option value="" selected="">Selecione sua formação</option>
                                {/* {% for formacao in dados.formacoes %}
                                    <option value="{{ formacao.id }}">{{ formacao.nome }}</option>   
                                {% endfor %} */}
                                </select>
                                {/* {% if errors.formacao_nao_escolhida %}
                                    {{ errors.formacao_nao_escolhida }}
                                    <script>alter_cor("formacao_1");</script>
                                {% endif %} */}
                            </div>
                        </div>

                        {/* <!-- Caso perfil seja profissional --> */}
                        <div class="row row-perfil-profissional" id="row-perfil-profissional">                        
                            {/* <!-- Cargo --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="cargo">Cargo</label>
                                <input type="text" class="form-control" id="cargo" name="cargo" value="{{ usuario.cargo }}"/>
                                {/* {% if errors.cargo_vazio %}
                                    {{ errors.cargo_vazio }}
                                    <script>alter_cor("cargo");</script>
                                {% endif %} */}
                            </div>

                            {/* <!-- Nome da empresa --> */}
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="Nome da empresa">Nome da empresa</label>
                                <input type="text" class="form-control" id="nome_da_empresa" name="nome_da_empresa" value="{{ usuario.nome_empresa }}"/>
                                {/* {% if errors.nome_da_empresa_vazio %}
                                    {{ errors.nome_da_empresa_vazio }}
                                    <script>alter_cor("nome_da_empresa");</script>
                                {% endif %} */}
                            </div>
                            
                            {/* <!-- Formação --> */}
                            <div class=" col-lg-4 col-md-4 form-group">
                                <label for="name">Formação</label>
                                <select size="1" name="formacao" id="formacao_2" class="form-control required" disabled >
                                    <option value="" selected="">Selecione sua formação</option>
                                {/* {% for formacao in dados.formacoes %}
                                    <option value="{{ formacao.id }}">{{ formacao.nome }}</option>   
                                {% endfor %} */}
                                </select>
                                {/* {% if errors.formacao_nao_escolhida %}
                                    {{ errors.fomamca_nao_escolhida }}
                                    <script>alter_cor("formacao_2");</script>
                                {% endif %} */}
                            </div>
                        </div>

                        <div class="row">
                            <h6 class="text-uppercase probootstrap-uppercase">Endereço</h6>

                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="country">País</label>
                                <select size="1" name="country" id="country" class="form-control required" onchange="selected_country();" required>
                                    <option value="" selected="">Selecione seu país</option>
                                    {/* {% for pais in dados.paises %}
                                        <option value="{{ pais.id }}" {% if pais.nome ==  "Brazil" %}selected{% endif %}>{{ pais.nome }}</option>
                                    {% endfor %} */}
                                </select>
                                {/* // {% if errors.country_nao_escolhido %}
                                //     {{ errors.country_nao_escolhido }}
                                //     <script>alter_cor("country");</script>
                                // {% endif %} */}
                            </div>

                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="zipcode">CEP</label>
                                <input type="text" class="form-control" id="zipcode" name="zipcode" required onblur="pesquisar_zipcode();" value="{{usuario.cep}}"/>
                                {/* {% if errors.cep_empty and not errors.country_nao_escolhido %}
                                    {{ errors.cep_empty }} */}
                                    <script>alter_cor("zipcode");</script>
                                
                                {/* {% elif errors.cep_invalido and not errors.country_nao_escolhido %}
                                    {{ errors.cep_invalido }}
                                    <script>alter_cor("zipcode");</script>
                                {% endif %} */}
                            </div>

                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="state">Estado</label>
                                <select size="1" name="state" id="state" class="form-control required" onchange="select_cidades_por_estado('');" required disabled>
                                    <option value="">Selecione seu estado</option>
                                    {/* {% for estado in dados.estados %} */}
                                    {/* <option value="{{ estado.id }}" id="{{estado.sigla}}" {% if estado.id == usuario.estado %}selected{% endif %}>{{ estado.nome }}</option> */}
                                    {/* // {% endfor %} */}
                                </select>
                                {/* // {% if errors.estado_nao_escolhido %}
                                //     {{ errors.estado_nao_escolhido }}
                                    <script>alter_cor("state");</script>
                                // {% endif %} */}
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-4 form-group">
                                <label for="city">Cidade</label>
                                <select size="1" name="city" id="city" class="form-control required" required disabled>
                                    <option value="" selected="">Selecione sua cidade</option>
                                </select>
                                {/* {% if errors.cidade_nao_escolhido %}
                                    {{ errors.cidade_nao_escolhido }} */}
                                    <script>alter_cor("city");</script>
                                {/* {% endif %} */}
                            </div>

                            <div class="col-lg-8 col-md-8 form-group">
                                <label for="address">Logradouro</label>
                                <input type="text" class="form-control" id="adress" name="adress" value="{{usuario.endereco}}"/>
                                {/* {% if errors.endereco_empty and not errors.country_nao_escolhido%} */}
                                    {/* {{ errors.endereco_empty }} */}
                                    <script>alter_cor("adress");</script>
                                {/* {% endif %} */}
                            </div>
                        </div>

                       
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group text-center">
                                    <input type="submit" class="btn btn-primary btn-lg" id="submit" name="submit" value="Register"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>  


      </main>

    </Layout>


  )
}
