const { Readable } = require("stream");
const readline = require("readline");
const jsonexport = require("jsonexport");
const Blob = require("buffer").Blob;
const path = require("path");

const PrecosCombustiveis = require("../models/PrecosCombustiveis");

module.exports = {
  upload: async (req, res) => {
    const { file } = req;
    const { buffer } = file;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const productsLine = readline.createInterface({
      input: readableFile,
    });

    for await (let line of productsLine) {
      try {
        const linha = line.split(";");
        const cadastroItens = await PrecosCombustiveis.create({
          regiao: linha[0],
          sigla_estado: linha[1],
          sigla_municipio: linha[2],
          revenda: linha[3],
          cnpj_revenda: linha[4],
          nome_da_rua: linha[5],
          numero_da_rua: linha[6],
          complemento: linha[7],
          bairro: linha[8],
          cep: linha[9],
          produto: linha[10],
          data_da_coleta: linha[11],
          valor_venda: linha[12],
          valor_compra: linha[13],
          unidade_de_medida: linha[14],
          bandeira: linha[15],
        });
      } catch (error) {
        res.status(422).send("Falta de parametros!");
      }
    }
    return res.send();
  },
  show: async (req, res) => {
    const produtos = await PrecosCombustiveis.findAll();
    return res.json(produtos);
  },
  export: async (req, res) => {
    const { file } = req.body;
    let fileToExport = [];
    for await (item of file) {
      const file = await PrecosCombustiveis.findByPk(item + 1);
      fileToExport.push(file.dataValues);

      let csvfile = "";
      jsonexport(fileToExport, { rowDelimiter: ";" }, function (err, csv) {
        if (err) return console.error(err);
        csvfile = csv;
      });
    }
  },
  download: async (req, res) => {
    res.writeHead(200, { "Content-Type": "application/csv" });
    res.end(path.dirname("relatorio.csv"), "binary");
  },
};
