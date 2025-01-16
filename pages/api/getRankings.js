import { google } from 'googleapis';

export default async function handler(req, res) {
    try {
        const { sheetName } = req.query;
        console.log('Received sheetName:', sheetName);
        if (!sheetName) {
            return res.status(400).json({ error: 'Missing sheetName parameter' });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
        if (!spreadsheetId) {
            return res.status(400).json({ error: 'Spreadsheet ID is missing' });
        }

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheetName}!A1:F`,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return res.status(200).json({ data: [] });
        }

        // 필터
        const data = rows.slice(1) // 첫줄뺌
            .filter(([registrationNumber, date, name, birth, record, event]) => {
                return name || record; // 이름이랑 기록은 있어야 보임
            })
            .map(([registrationNumber, date, name, birth, record, event]) => ({
                registrationNumber: registrationNumber || '',
                date: date || '',
                name: name || 'Unknown',
                birth: birth || '-',
                record: record ? parseFloat(record) : null, // 기록 없는경우
                event: event || '',
            }));

        res.status(200).json({ data });
    } catch (error) {
        console.error('Google API Error:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}