'use server';

import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateEmpresa(formData: FormData) {
    const obj: any = {
        nome: formData.get("c1"),
        qtdFuncionarios: Number(formData.get("c2")),
        proprietario: formData.get("c3"),
        setores: formData.get("c4"),
        ramo: formData.get("c5")
    };
    6
    const res = await prisma.empresa.create({ data: obj });

    revalidatePath('/');
    redirect('/');
}

export async function UpdateEmpresa(id: number, formData: FormData) {
    const obj: any = {
        nome: formData.get("c1"),
        qtdFuncionarios: Number(formData.get("c2")),
        proprietario: formData.get("c3"),
        setores: formData.get("c4"),
        ramo: formData.get("c5")
    };

    const res = await prisma.empresa.update({ where: { id: id }, data: obj });

    revalidatePath('/');
    redirect('/');
}

export async function DeleteEmpresa(id: number) {
    await prisma.empresa.delete({
        where: { id: id },
    });

    revalidatePath('/');
    redirect('/');
}