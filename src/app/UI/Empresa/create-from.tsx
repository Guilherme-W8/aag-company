import { CreateEmpresa } from "@/app/lib/actions";

export default function CreateForm() {
    return (
        <form action={CreateEmpresa} className="create-form">
            <div className="form-group">
                <label htmlFor="id1">Nome</label>
                <input type="text" id="id1" name="c1" required />
            </div>

            <div className="form-group">
                <label htmlFor="id2">Quantidade de Funcionários</label>
                <input type="number" id="id2" name="c2" required />
            </div>

            <div className="form-group">
                <label htmlFor="id3">Proprietário</label>
                <input type="text" id="id3" name="c3" required />
            </div>

            <div className="form-group">
                <label htmlFor="id4">Setores</label>
                <input type="text" id="id4" name="c4" required />
            </div>

            <div className="form-group">
                <label htmlFor="id5">Ramo</label>
                <input type="text" id="id5" name="c5" required />
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-button">
                    Cadastrar Empresa
                </button>
            </div>
        </form>
    );
}
