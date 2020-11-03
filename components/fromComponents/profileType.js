export default function ProfileType(props) {

    

    if (props.profile == "") {
        return (
            <>
            </>
        )
    }
    if (props.profile == "professional") {
        return (
            <div className="row row-perfil-profissional" id="row-perfil-profissional">
                {/* <!-- Cargo --> */}
                <div className="col-lg-4 col-md-4 form-group">
                    <label htmlFor="cargo">Cargo</label>
                    <input type="text" className="form-control" id="cargo" name="cargo" />
                </div>

                {/* <!-- Nome da empresa --> */}
                <div className="col-lg-4 col-md-4 form-group">
                    <label htmlFor="Nome da empresa">Nome da empresa</label>
                    <input type="text" className="form-control" id="nome_da_empresa" name="nome_da_empresa" />
                </div>

                {/* <!-- Formação --> */}
                <div className=" col-lg-4 col-md-4 form-group">
                    <label htmlFor="name">Formação</label>
                    <select size="1" name="formacao" id="formacao_2" className="form-control required"  >
                        <option value="" >Selecione sua formação</option>
                        <option value="op1">Técnico</option>
                        <option value="op2">Graduação</option>
                        <option value="op3">Mestrado</option>
                        <option value="op4">Doutorado</option>
                    </select>
                </div>
            </div>

        )
    } else {
        return (
            

            <div className="row row-perfil-estudante" id="row-perfil-estudante">
                {/* <!-- Instituicao --> */}
                <div className="col-lg-4 col-md-4 form-group">
                    <label htmlFor="Instituicao">Instituição</label>
                    <input type="text" className="form-control" id="instituicao" name="instituicao" />
                </div>

                {/* <!-- Curso --> */}
                <div className="col-lg-4 col-md-4 form-group">
                    <label htmlFor="Curso">Curso</label>
                    <input onChange={props.action} type="text" className="form-control" id="course" name="course" required />
                </div>

                {/* <!-- Formação --> */}
                <div className=" col-lg-4 col-md-4 form-group">
                    <label htmlFor="name">Formação</label>
                    <select size="1" name="formacao" id="formacao_1" className="form-control required" >
                        <option value="" >Selecione sua formação</option>
                        <option value="op1">Técnico</option>
                        <option value="op2">Graduação</option>
                        <option value="op3">Mestrado</option>
                        <option value="op4">Doutorado</option>
                    </select>
                </div>
            </div>
        )
    }
}