function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Dungeon of Logic - เกมตรรกศาสตร์ ม.4')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ฟังก์ชันหลังบ้านสำหรับรับข้อมูลมาบันทึกลง Google Sheet
function saveScore(studentData) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // บันทึก วัน-เวลา, ชื่อนักเรียน, ห้อง, เลขที่, คะแนน, และสถานะการสลับจอ
    sheet.appendRow([
      new Date(), 
      studentData.name, 
      studentData.room,
      studentData.no,
      studentData.score,
      studentData.status
    ]);
    
    return "บันทึกคะแนนลงระบบสำเร็จ!";
  } catch (error) {
    return "เกิดข้อผิดพลาดหลังบ้าน: " + error.toString();
  }
}
