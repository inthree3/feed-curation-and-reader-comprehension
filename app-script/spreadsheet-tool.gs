  function doPost(e) {
    try {
      // Use current spreadsheet
      const ss = SpreadsheetApp.getActiveSpreadsheet();

      // Parse the incoming data
      let data = e.parameter;

      // Determine which sheet to use based on feed_type
      const feedType = data.feed_type || 'unknown';
      let sheetName;

      // Map feed types to sheet names
      switch(feedType) {
        case 'recency':
          sheetName = 'Recency Feed';
          break;
        case 'engagement':
          sheetName = 'Engagement Feed';
          break;
        case 'epistemic':
          sheetName = 'Epistemic Feed';
          break;
        default:
          sheetName = 'Other';
      }

      // Get or create the sheet
      let sheet = ss.getSheetByName(sheetName);
      if (!sheet) {
        sheet = ss.insertSheet(sheetName);
      }

      // Check if header row exists, if not create it
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Timestamp',
          'Feed Type',
          'Articles Shown',
          'Q1: Familiarity',
          'Q2: Prior Knowledge',
          'Q3: News Source',
          'Q4: International News Frequency',
          'Q5: Posts Read Count',
          'Q6: Saw Ads',
          'Q7: Answer',
          'Q7: Confidence',
          'Q8: Answer',
          'Q8: Confidence',
          'Q9: Answer',
          'Q9: Confidence',
          'Q10: Answer',
          'Q10: Confidence',
          'Q11: Answer',
          'Q11: Confidence',
          'Q12: Answer',
          'Q12: Confidence',
          'Q13: Answer',
          'Q13: Confidence',
          'Q14: Answer',
          'Q14: Confidence',
          'Q15: Answer',
          'Q15: Confidence',
          'Q16: Answer',
          'Q16: Confidence',
          'Q17: Trust',
          'Q18: Bias',
          'Q19: Emotion',
          'Q20: Contradiction',
          'Q21: Charged Language',
          'Q22: Context',
          'Q23: Attention',
          'Q24: Age',
          'Q25: Education',
          'Q26: Country',
          'Q27: Politics'
        ]);

        // Format header row
        const headerRange = sheet.getRange(1, 1, 1, 39);
        headerRange.setFontWeight('bold');
        headerRange.setBackground('#4285f4');
        headerRange.setFontColor('#ffffff');
      }

      // Append the data
      sheet.appendRow([
        new Date(),
        data.feed_type || '',
        data.articles_shown || '',
        data.q1_familiarity || '',
        data.q2_prior || '',
        data.q3_news_source || '',
        data.q4_intl_freq || '',
        data.q5_read_count || '',
        data.q6_ads || '',
        data.q7 || '',
        data.q7_conf || '',
        data.q8 || '',
        data.q8_conf || '',
        data.q9 || '',
        data.q9_conf || '',
        data.q10 || '',
        data.q10_conf || '',
        data.q11 || '',
        data.q11_conf || '',
        data.q12 || '',
        data.q12_conf || '',
        data.q13 || '',
        data.q13_conf || '',
        data.q14 || '',
        data.q14_conf || '',
        data.q15 || '',
        data.q15_conf || '',
        data.q16 || '',
        data.q16_conf || '',
        data.q17_trust || '',
        data.q18_bias || '',
        data.q19_emotion || '',
        data.q20_contradict || '',
        data.q21_charged || '',
        data.q22_context || '',
        data.q23_attention || '',
        data.q24_age || '',
        data.q25_education || '',
        data.q26_country || '',
        data.q27_politics || ''
      ]);

      Logger.log('Successfully saved to sheet: ' + sheetName);

      return ContentService
        .createTextOutput(JSON.stringify({
          result: "success",
          message: "Survey submitted successfully to " +
  sheetName,
          sheet: sheetName
        }))
        .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
      Logger.log('Error: ' + error.toString());
      return ContentService
        .createTextOutput(JSON.stringify({
          result: "error",
          message: error.toString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // Test function to verify the script works
  function doGet(e) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "Survey endpoint is active",
        timestamp: new Date()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  function testManual() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Spreadsheet name: ' + ss.getName());
  
  const sheet = ss.getSheetByName('Engagement Feed') || ss.insertSheet('Engagement Feed');
  sheet.appendRow([new Date(), 'test', 'manual test']);
  Logger.log('Done!');
}
