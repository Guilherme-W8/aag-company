import { Empresa } from "@/app/lib/definitions";
import Link from "next/link";

export default function IndexEmpresaUI(p: Empresa[]) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Quantidade de Funcionários</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    p.map((x: Empresa) =>
                        <tr key={x.id}>
                            <td>{x.nome}</td>
                            <td>{x.CNPJ}</td>
                            <td>{x.endereco}</td>
                            <td>{x.telefone}</td>
                            <td>{x.qtdFuncionarios}</td>
                            <td>
                                <Link href={`/empresa/update/${x.id}`}>alterar</Link>
                            </td>
                            <td>
                                <Link href={`/empresa/delete/${x.id}`}>Excluir</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}