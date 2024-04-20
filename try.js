var Excel = require("exceljs");

const { load } = require('@pspdfkit/nodejs');
const fs = require('node:fs');

async function fillPDF(name,dob) {
  try {
    var workbook = new Excel.Workbook();
    const nameParts = name.split(" ");
    workbook.xlsx.readFile("KYC.xlsx").then(function () {
      var worksheet = workbook.getWorksheet(1);
      var row = worksheet.getRow(8);
      if (nameParts.length == 3) {
        row.getCell(3).value = nameParts[0];
        row.getCell(4).value = nameParts[1];
        row.getCell(5).value = nameParts[2];
      }
      else if(nameParts.length == 2){
        row.getCell(3).value = nameParts[0];
        row.getCell(5).value = nameParts[1];
      }
      else{
        row.getCell(3).value = nameParts[0];
      }
      row.commit();
      var row1 = worksheet.getRow(12);
      row1.getCell(2).value=dob;
      row.commit();
       workbook.xlsx.writeFile("new.xlsx");
    });
    
	
  } catch (err) {
    console.error(err);
  }
}
fillPDF("Garvit Chutani","11/06/2001");
