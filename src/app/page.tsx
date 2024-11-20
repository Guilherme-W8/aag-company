import Link from "next/link";
import { IndexEmpresa } from "@/app/lib/querys"; // Função para buscar empresas do banco

export const metadata = {
  title: "Gestão de Empresas",
};

export default async function Home() {
  const empresas = await IndexEmpresa(); // Busca empresas do banco

  return (
    <div id="container">
      <header>
        <h1>Gestão de Empresas</h1>
      </header>

      <main>
        {/* Botão para cadastrar nova empresa */}
        <div className="action-buttons">
          <Link href="/empresa/create/">
            <button id="new-empresa-button">Cadastrar Nova Empresa</button>
          </Link>
        </div>

        {/* Lista de empresas */}
        <div id="empresa-list">
          {empresas && empresas.length > 0 ? (
            empresas.map((empresa) => (
              <div className="empresa-card" key={empresa.id}>
                <h2>{empresa.nome}</h2>
                <p><span>Ramo de atividade</span> {empresa.ramo || "Sem descrição"}</p>

                {/* Botões de edição e exclusão */}
                <div className="empresa-actions">
                  <Link href={`/empresa/update/${empresa.id}`}>
                    <button className="edit-button">Editar</button>
                  </Link>
                  <Link href={`/empresa/delete/${empresa.id}`}>
                    <button className="delete-button">Deletar</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma empresa cadastrada.</p>
          )}
        </div>
      </main>
    </div>
  );
}
