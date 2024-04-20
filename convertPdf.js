const ExcelJS = require("exceljs");

const PDFDocument = require("pdfkit");

const fs = require("fs");

const convertPDF = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("new.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");
  //console.log(worksheet);
  const pdfDoc = new PDFDocument();
  pdfDoc.pipe(fs.createWriteStream("file.pdf"));
  const columnSpacing = 70;
  worksheet.eachRow((row, rowIndex) => {
    row.eachCell((cell, colIndex) => {
        // Check if the cell has any text
        if (cell.text && cell.text.trim() !== '') {
            const xpos = colIndex * 25 + (colIndex - 1) * columnSpacing;
            const ypos = (rowIndex * 20)%735;
            x = xpos;
            y = ypos;
            pdfDoc.text(cell.text, xpos, ypos);
            console.log({ xpos, ypos });
        }
    });
    console.log('\n');
});
  pdfDoc.end();
};
convertPDF();
