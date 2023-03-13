import { google } from 'googleapis';
import {GoogleSpreadsheet} from 'google-spreadsheet'
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_ID = process.env.SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =process.env.GOOGLE_SERVICE_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const target = ["https://www.googleapis.com/auth/spreadsheets"];
const jwt = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  undefined,
  (process.env.GOOGLE_SERVICE_PRIVATE_KEY || "").split("\\n").join("\n"),
  target
);
const sheets = google.sheets({ version: "v4", auth: jwt });

async function getPrayer() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SERVICE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1', // sheet name
    });

    const rows = response.data.values;
    console.log(rows)
    if (rows.length) {
      return rows.map((row) => ({
        title: row[2],
        subtitle: row[3],
        code: row[4],
        browser: row[5],
        short_name: row[17],
        descriptions: row[19],
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}

// async function savePrayer(row) {
//     try {
//         await doc.useServiceAccountAuth({
//             client_email: GOOGLE_CLIENT_EMAIL,
//             private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//         });
//           // loads document properties and worksheets
//           await doc.loadInfo();
      
//           const sheet = doc.sheetsById[SPREADSHEET_ID];
//           await sheet.addRow(row);
//     } catch (e) {
//         console.error('Error: ', e);
//     };
//     return [];
// } 
 const savePrayer= async (values) => {
  console.log(process.env.SPREADSHEET_ID)
  console.log(process.env.GOOGLE_CLIENT_EMAIL)
  console.log(values)
  process.env.GOOGLE_SERVICE_PRIVATE_KEY 
  const request = {
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values
    }
  };

  return await sheets.spreadsheets.values.append(request);
};
 
export {savePrayer,getPrayer}