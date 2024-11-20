-- CreateTable
CREATE TABLE `Empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `qtdFuncionarios` INTEGER NOT NULL,
    `proprietario` VARCHAR(100) NOT NULL,
    `setores` VARCHAR(255) NOT NULL,
    `ramo` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
