function colorize() {
    const tableRows = Array.from(document.getElementsByTagName('tr'));
    for (const row of tableRows) {
        if(row.rowIndex % 2 !== 0){
            row.style.backgroundColor = 'Teal';
        }
    }
}