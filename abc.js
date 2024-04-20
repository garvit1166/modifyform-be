const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const { writeFile } = require("fs/promises");

async function fillPDF(name, dob, fatherName, PAN, EMAIL ,PHNUMBER, GENDER ,URL) {
  try {
    const pdfTemplateBuffer = fs.readFileSync("temp.pdf");
    const pdfDoc = await PDFDocument.load(pdfTemplateBuffer);

    const jpgUrl = URL;
    const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());
    const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
    
    const page1 = pdfDoc.getPages()[0];
    const page2= pdfDoc.getPages()[1];

    const fontSize = 8;

    const MnameX = 309;
    const MnameY = 625;
    const LnameX = 445;
    const FnameY = 625;
    const LnameY = 625;
    const FnameX = 174;

    const MfatherX = 309;
    const MfatherY = 598;
    const LfatherX = 445;
    const FfatherY = 598;
    const LfatherY = 598;
    const FfatherX = 174;

    const dobX = 135;
    const dobY = 570;

    const panX = 133;
    const panY = 542;

    const emailX = 64;
    const emailY = 753;

    const phoneX = 410;
    const phoneY = 770;

    const maleGenderX=132;
    const maleGenderY=556;
    const femaleGenderX=221;
    const femaleGenderY=556;
    const transGenderX=301;
    const transGenderY=556;

    const imageX=490;
    const imageY=360;

    const cityX=463;
    const cityY=297;

    const line1X=78;
    const line1Y=323;

    const districtX=77;
    const districtY=286;

    const postcodeX=265;
    const postcodeY=286;

    const utcodeX=411;
    const utcodeY=286;

    const countrycodeX=544;
    const countrycodeY=286;


    const nameParts = name.toUpperCase().split(" ");
    const FnameParts = fatherName.toUpperCase().split(" ");
    const datee = dob.split("");
    const pan = PAN.split("");
    const email=EMAIL.toUpperCase().split("");
    const phone=PHNUMBER.split("");
    const gender=GENDER;
    const city='Gurugram'.toUpperCase().split("");
    const district='Gurugram'.toUpperCase().split("");
    const postcode='122101'.toUpperCase().split("");
    const utcode='06'.split("");
    const countrycode='91'.split("");
    const line1='91 Sector 22 Rohini'.toUpperCase().split('')


    if (nameParts.length == 1) {
      for (let i = 0; i < nameParts[0].length; i++) {
        const character = nameParts[0][i];
        const x = FnameX + i * 10;
        page1.drawText(character, { x, y: FnameY, size: fontSize });
      }
    } else if (nameParts.length == 2) {
      for (let i = 0; i < nameParts[0].length; i++) {
        const character = nameParts[0][i];
        const x = FnameX + i * 10;
        page1.drawText(character, { x, y: FnameY, size: fontSize });
      }
      for (let i = 0; i < nameParts[1].length; i++) {
        const character = nameParts[1][i];
        const x = LnameX + i * 10;
        page1.drawText(character, { x, y: LnameY, size: fontSize });
      }
    } else {
      for (let i = 0; i < nameParts[0].length; i++) {
        const character = nameParts[0][i];
        const x = FnameX + i * 10;
        page1.drawText(character, { x, y: FnameY, size: fontSize });
      }
      for (let i = 0; i < nameParts[1].length; i++) {
        const character = nameParts[1][i];
        const x = MnameX + i * 10;
        page1.drawText(character, { x, y: MnameY, size: fontSize });
      }
      for (let i = 0; i < nameParts[2].length; i++) {
        const character = nameParts[2][i];
        const x = LnameX + i * 10;
        page1.drawText(character, { x, y: LnameY, size: fontSize });
      }
    }

    if (FnameParts.length == 1) {
      for (let i = 0; i < FnameParts[0].length; i++) {
        const character = FnameParts[0][i];
        const x = FfatherX + i * 10;
        page1.drawText(character, { x, y: FfatherY, size: fontSize });
      }
    } else if (FnameParts.length == 2) {
      for (let i = 0; i < FnameParts[0].length; i++) {
        const character = FnameParts[0][i];
        const x = FfatherX + i * 10;
        page1.drawText(character, { x, y: FfatherY, size: fontSize });
      }
      for (let i = 0; i < FnameParts[1].length; i++) {
        const character = FnameParts[1][i];
        const x = LfatherX + i * 10;
        page1.drawText(character, { x, y: LfatherY, size: fontSize });
      }
    } else {
      for (let i = 0; i < FnameParts[0].length; i++) {
        const character = FnameParts[0][i];
        const x = FfatherX + i * 10;
        page1.drawText(character, { x, y: FfatherY, size: fontSize });
      }
      for (let i = 0; i < FnameParts[1].length; i++) {
        const character = FnameParts[1][i];
        const x = MfatherX + i * 10;
        page1.drawText(character, { x, y: MfatherY, size: fontSize });
      }
      for (let i = 0; i < FnameParts[2].length; i++) {
        const character = FnameParts[2][i];
        const x = LfatherX + i * 10;
        page1.drawText(character, { x, y: LfatherY, size: fontSize });
      }
    }

    for (let i = 0; i < datee.length; i++) {
      const character = datee[i];
      const x = dobX + i * 11;
      if (character == "/" || character == "-") {
        page1.drawText(" ", { x, y: dobY, size: fontSize });
      } else {
        page1.drawText(character, { x, y: dobY, size: fontSize });
      }
    }

    for (let i = 0; i < pan.length; i++) {
      const character = pan[i];
      const x = panX + i * 10;
      page1.drawText(character, { x, y: panY, size: fontSize });
    }

    for (let i = 0; i < email.length; i++) {
      const character = email[i];
      const x = emailX + i * 10;
      page2.drawText(character, { x, y: emailY, size: fontSize });
    }

    for (let i = 0; i < phone.length; i++) {
      const character = phone[i];
      const x = phoneX + i * 10;
      page2.drawText(character, { x, y: phoneY, size: fontSize });
    }

    if(gender=='M'){
      //const character= $`&#x1F5F8`;
      page1.drawText(gender,{x:maleGenderX,y:maleGenderY,size:fontSize});
    }
    if(gender=='F'){
      //const character= $`&#x1F5F8`;
      page1.drawText(gender,{x:femaleGenderX,y:femaleGenderY,size:fontSize});
    }
    if(gender=='T'){
      //const character= $`&#x1F5F8`;
      page1.drawText(gender,{x:transGenderX,y:transGenderY,size:fontSize});
    }

    page1.drawImage(jpgImage, {
      x: imageX,
      y: imageY,
      width: 75,
      height: 80,
      opacity:1,
    })

    for (let i = 0; i < line1.length; i++) {
      const character = line1[i];
      const x = line1X + i * 10;
      page1.drawText(character, { x, y: line1Y, size: fontSize });
    }

    for (let i = 0; i < district.length; i++) {
      const character = district[i];
      const x = districtX + i * 10;
      page1.drawText(character, { x, y: districtY, size: fontSize });
    }

    for (let i = 0; i < city.length; i++) {
      const character = city[i];
      const x = cityX + i * 10;
      page1.drawText(character, { x, y: cityY, size: fontSize });
    }

    for (let i = 0; i < postcode.length; i++) {
      const character = postcode[i];
      const x = postcodeX + i * 10;
      page1.drawText(character, { x, y: postcodeY, size: fontSize });
    }

    for (let i = 0; i < utcode.length; i++) {
      const character = utcode[i];
      const x = utcodeX + i * 10;
      page1.drawText(character, { x, y: utcodeY, size: fontSize });
    }

    for (let i = 0; i < countrycode.length; i++) {
      const character = countrycode[i];
      const x = countrycodeX + i * 10;
      page1.drawText(character, { x, y: countrycodeY, size: fontSize });
    }

    const filledPdfBytes = await pdfDoc.save();
    await writeFile("output.pdf", filledPdfBytes);

    return filledPdfBytes;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

fillPDF("Garvit Chutani", "11/06/2001", "Ajay Chutani","ABCDE1234F","garvitchutani07@gmail.com","9971896392",'M',"https://fileinfo.com/img/ss/xl/jpeg_43-2.jpg");

module.exports = {
  fillPDF,
};
