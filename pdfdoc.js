const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function createPdf(input, output) {
    try {
        
        const pdfData = await readFile(input);

        const pdfDoc = await PDFDocument.load(pdfData);

        //modifying the data
        

        const pdfBytes = await pdfDoc.save();
        await writeFile(output, pdfBytes);
        console.log('PDF Created');
    } catch (error) {
        console.error(error);
    }
}

createPdf('temp.pdf', 'output.pdf');
