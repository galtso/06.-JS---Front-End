function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items > li'));
    const textArea = document.getElementById('result');

    for (const li of liElements) {
        textArea.textContent += li.textContent + `\n`;
    }
}