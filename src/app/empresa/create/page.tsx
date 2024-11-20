import Link from "next/link";
import CreateForm from "@/app/UI/Empresa/create-from";

export default function Page() {
  return (
    <div id="create-page" className="create-container">
      <h1 className="page-title">Cadastrar Nova Empresa</h1>
      <CreateForm />
      <div className="action-buttons">
        <Link href="/">
          <button className="back-button">Voltar</button>
        </Link>
      </div>
    </div>
  );
}
