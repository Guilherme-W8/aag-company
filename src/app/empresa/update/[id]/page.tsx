import Link from "next/link";
import { FindEmpresa } from "@/app/lib/querys";
import UpdateForm from "@/app/UI/Empresa/update-from";

export default async function Page({ params }: { params: { id: string } }) {

    const { id } = await params;
    const empresa = await FindEmpresa(Number(id));

    return (
        <div>
            <div className="center-title">
                <h1 className="update-page">Atualizando empresa: {empresa?.nome}</h1>
            </div>

            {/* Formulário de atualização */}
            <div>
                <UpdateForm empresa={empresa} />
            </div>

            {/* Link para voltar */}
            <div className="action-buttons">
                <Link href="/">
                    <button className="back-button">Voltar</button>
                </Link>
            </div>
        </div>
    );
}