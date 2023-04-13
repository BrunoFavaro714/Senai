-- CreateTable
CREATE TABLE `Colaborador` (
    `matricula` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `pin` INTEGER NOT NULL,

    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Os` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `colaborador` INTEGER NOT NULL,
    `executor` INTEGER NOT NULL,
    `abertura` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `encerramento` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `os` INTEGER NOT NULL,
    `colaborador` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `comentario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Os` ADD CONSTRAINT `Os_colaborador_fkey` FOREIGN KEY (`colaborador`) REFERENCES `Colaborador`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Os` ADD CONSTRAINT `Os_executor_fkey` FOREIGN KEY (`executor`) REFERENCES `Colaborador`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_colaborador_fkey` FOREIGN KEY (`colaborador`) REFERENCES `Colaborador`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_os_fkey` FOREIGN KEY (`os`) REFERENCES `Os`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
