function openSpreadsheetById() {
  let spreadSheetId = '1OIF_kmTsu0LQxQznbU4bH5Q4GfigcRBAtjxarzRgYlY'
  let currentSpreadSheet = SpreadsheetApp.openById(spreadSheetId)  // To get the Spread Sheet by Id
  let currentSheet = currentSpreadSheet.getSheets()[1] // To get the sheet by entering their sheet number(starting from 0)
  const data = currentSheet.getRange('A1:E4').getValues()  // To get the values based on their range
  Logger.log(data)
  const currentActiveSheet = SpreadsheetApp.getActiveSpreadsheet() // To get the current active sheet
  const values = currentActiveSheet.getRange('A1:E5').getValues()
  Logger.log(values)
}
