import fs from "fs";
import matter from "gray-matter";
import { ProductObj } from "../interfaces/Interfaces";

// Função para ler o nome de todos os arquivos na pasta
const getAllFilesname = (folderPath: string) => {
  return fs.readdirSync(`./markdown/${folderPath}`);
};

// Função para ler as pastas de articuladores e gavetas
// e gerar uma página (SSG) para cada fornecedor
export const getAllFoldersName = (folder: string) => {
  return fs.readdirSync(`./markdown/${folder}`);
};

// Função para extrair o conteúdo de cada arquivo .md
export const getProductsData = (folderPath: string): ProductObj[] => {
  // Lendo os nomes dos arquivos
  const allFilesname = getAllFilesname(folderPath);

  // Extraindo o conteúdo de cada arquivo
  const filesData = allFilesname.map((filename) =>
    matter(
      fs.readFileSync(`./markdown/${folderPath}/${filename}`, {
        encoding: "utf-8",
      })
    )
  );

  // Padronizando o conteúdo extraído pelo gray-matter
  // para a interface ProductObj
  const products = filesData.map((fileData) => {
    return {
      ...fileData.data,
      tableHTML: fileData.content,
    };
  }) as ProductObj[];

  return products;
};
