const character = "#";
const count = 8;
const rows = [];


function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
  }


padRow()

for (let i = 0; i < count; i = i + 1) {
    rows.push((i + 1))
  }
  
  let result = ""
  
  for (const row of rows) {
    result = result + "\n" + row;
  }
  
  console.log(result);