import PyPDF2
import sys

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        num_pages = len(pdf_reader.pages)
        print(f"Number of pages: {num_pages}")

        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()
            text += "\n\n--- Page {page_num + 1} ---\n\n"

    return text

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf.py <pdf_file>")
        sys.exit(1)

    pdf_path = sys.argv[1]
    text = extract_text_from_pdf(pdf_path)

    # Write to file instead of printing to console to avoid encoding issues
    output_file = pdf_path.replace('.pdf', '_extracted.txt')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f"Text extracted to: {output_file}")