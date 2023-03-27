function sumTable() {
const tableElements = document.getElementsByTagName('td');
const sumElement = document.getElementById('sum');

let totalSum = 0;

for (let index = 0; index < tableElements.length - 1; index++) {
    if(index % 2 !== 0){
        totalSum += Number(tableElements[index].textContent);
    }
}
sumElement.textContent = totalSum.toFixed(2);

}