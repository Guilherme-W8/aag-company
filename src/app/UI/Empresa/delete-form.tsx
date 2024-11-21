import { DeleteEmpresa } from "@/app/lib/actions";

export default async function DeleteForm({ empresa }: { empresa: any }) {
    const deleteEmpresaWithId = DeleteEmpresa.bind(null, empresa.id);

    return (
        <div>
            <form action={deleteEmpresaWithId} className="delete-form">
                <p>
                    Tem certeza de que deseja excluir a empresa <strong>{empresa.nome}</strong>?
                </p>
                <div className="form-actions">
                    <button type="submit" className="delete-button">
                        Deletar Empresa
                    </button>
                </div>
            </form>
        </div>
    );
}
