const axios = require('axios');

// ตั้งค่า Token และ Chat ID สำหรับ HerDays Bot
const TELEGRAM_BOT_TOKEN = '8560693899:AAHap_QPiJl4JAcdyqoo0Rdb4Re-xKG1dfM'; 
const CHAT_ID = '8899142410'; 

// ฟังก์ชันหลักสำหรับส่งข้อความไปยัง Telegram API
async function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    });
    console.log('✅ ส่งข้อความสำเร็จ:', response.data.result.text);
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการส่งข้อความ:', error.message);
  }
}

// 1. ฟังก์ชันส่งแจ้งเตือนให้บันทึกอาการ (Reminder)
async function sendReminder() {
  const message = "อย่าลืมบันทึกอาการประจำวันกับ **HerDays** นะคะ 🌸";
  await sendTelegramMessage(message);
}

// 2. ฟังก์ชันแจ้งเตือนรอบเดือน (Period Alert)
async function sendPeriodAlert() {
  const message = "อีก 2 วันจะถึงกำหนดรอบประจำเดือนของคุณแล้ว เตรียมรับมือได้เลย! 🩸";
  await sendTelegramMessage(message);
}

// 3. ฟังก์ชันแจ้งเตือนอาการผิดปกติ (Symptom Alert)
async function sendSymptomAlert() {
  const message = "⚠️ **แจ้งเตือนสุขภาพ HerDays**\nพบอาการปวดท้องระดับสูงติดต่อกัน หากไม่ดีขึ้นแนะนำให้พักผ่อนหรือพบแพทย์นะคะ";
  await sendTelegramMessage(message);
}

// 4. ฟังก์ชันสรุปรายงานประจำสัปดาห์ (Weekly Report)
async function sendWeeklyReport(additionalData = "") {
  const message = `**สรุปสุขภาพประจำสัปดาห์จาก HerDays ✨**\n${additionalData}`;
  await sendTelegramMessage(message);
}

// ==========================================
// เรียกใช้งานเพื่อทดสอบส่งข้อความทันที
// ==========================================
// บรรทัดใหม่:
sendReminder();
