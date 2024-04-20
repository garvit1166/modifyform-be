const { PDFDocument ,rgb} = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function fillData(input, output) {
    try {
        
        const pdfData = await readFile(input);

        const pdfDoc = await PDFDocument.load(pdfData);
        const form=pdfDoc.getForm();
        const fields=form.getFields();
        
        let pdfBytes = await pdfDoc.save();
        
        //console.log({fields});
        fields.forEach(field => {
            console.log('Field Name:', field.getName());
            console.log('Field Type:', field.constructor.name);
        });
        console.log({fields});

        pdfBytes = await pdfDoc.save();
        await writeFile(output, pdfBytes);
        console.log('PDF Created');

    } catch (error) {
        console.error(error);
    }
}

fillData('new.pdf', 'output.pdf');

// export default fillData;
