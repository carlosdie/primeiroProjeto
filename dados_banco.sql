/* contrução do banco e das tabelas*/

CREATE DATABASE `sistemadecadastro` /*passo 01  */;

/* Tabela para salvar as perguntas*/

CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/* tabela para salvar as respostas */

CREATE TABLE `dataResposta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` text NOT NULL,
  `perguntaId` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci /* passo 02*/ ;
