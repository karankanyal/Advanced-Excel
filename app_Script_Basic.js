// function openSpreadsheetById() {
//   let spreadSheetId = '1OIF_kmTsu0LQxQznbU4bH5Q4GfigcRBAtjxarzRgYlY'
//   let currentSpreadSheet = SpreadsheetApp.openById(spreadSheetId)  // To get the Spread Sheet by Id
//   let currentSheet = currentSpreadSheet.getSheets()[1] // To get the sheet by entering their sheet number(starting from 0)
//   const data = currentSheet.getRange('A1:E4').getValues()  // To get the values based on their range
//   Logger.log(data)
//   const currentActiveSheet = SpreadsheetApp.getActiveSpreadsheet() // To get the current active sheet
//   const values = currentActiveSheet.getRange('A1:E5').getValues()
//   Logger.log(values)
// }


function numberToWords(number) {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];
  
  let word = '';
  let i = 0;
  let str = '';
  
  if (number == 0) return "Zero";
  
  while (number > 0) {
    let n = number % 1000;
    if (n != 0) {
      if (n % 100 < 20 && n % 100 > 10) {
        str = teens[(n % 100) - 11] + " ";
        console.log(str)
      } else {
        str = tens[Math.floor(n % 100 / 10)] + " " + ones[n % 10] + " ";
        console.log(str)
      }
      if (Math.floor(n / 100) > 0) {
        str = ones[Math.floor(n / 100)] + " Hundred " + str;
        console.log(str)
      }
      word = str + thousands[i] + " " + word;
    }
    number = Math.floor(number / 1000);
    i++;
  }
}

numberToWords(200000)