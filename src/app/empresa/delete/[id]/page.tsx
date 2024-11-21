import Link from 'next/link';
import DeleteForm from '@/app/UI/Empresa/delete-form';
import { FindEmpresa } from '@/app/lib/querys';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const empresa = await FindEmpresa(Number(id));
    return (
        <div className="delete">
            <DeleteForm empresa={empresa} />
            <Link href="/">
                <button className="back-button">Voltar</button>
            </Link>
        </div>
    )
}