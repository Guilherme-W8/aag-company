import { UpdateEmpresa } from "@/app/lib/actions";

export default async function UpdateForm({ empresa }: { empresa: any }) {
    const updateEmpresaWithId = UpdateEmpresa.bind(null, empresa.id)
    return (
        <form action={updateEmpresaWithId} className="update-form">
            <div className="form-group">
                <label htmlFor="id1">Nome</label>
                <input
                    type="text"
                    defaultValue={empresa.nome}
                    id="id1"
                    name="c1"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="id2">Quantidade de Funcionários</label>
                <input
                    type="number"
                    defaultValue={empresa.qtdFuncionarios}
                    id="id2"
                    name="c2"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="id3">Proprietário</label>
                <input
                    type="text"
                    defaultValue={empresa.proprietario}
                    id="id3"
                    name="c3"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="id4">Setores</label>
                <input
                    type="text"
                    defaultValue={empresa.setores}
                    id="id4"
                    name="c4"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="id5">Ramo</label>
                <input
                    type="text"
                    defaultValue={empresa.ramo}
                    id="id5"
                    name="c5"
                    required
                />
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-button">
                    Atualizar Empresa
                </button>
            </div>
        </form>
    );
}