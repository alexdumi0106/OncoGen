const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf');

const pdfPath = 'public/CV-personal-oncogen/CV_Tatu_Calin.pdf';
const dataBuffer = fs.readFileSync(pdfPath);

async function extractText() {
  try {
    const pdf = await pdfjsLib.getDocument({ data: dataBuffer }).promise;
    let fullText = '';
    
    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += `\n--- Page ${i + 1} ---\n` + pageText;
    }
    
    fs.writeFileSync('cv_text.txt', fullText);
    console.log('Text extracted. Total pages: ' + pdf.numPages);
  } catch (e) {
    console.log('Error: ' + e.message);
  }
}

extractText();
