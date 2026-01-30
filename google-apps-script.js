function doPost(e) {
  try {
    // 1. Open Google Sheet (CONNECTED SHEET)
    var ss = SpreadsheetApp.openById("17UgJp-WgYKaXueeXcQDO_jERDulsy9q2ZKgtXJ6R-38");
    var sheet = ss.getSheetByName("inquiries");

    if (!sheet) {
      return ContentService.createTextOutput("Sheet not found");
    }

    // 2. Read form values
    var companyName = e.parameter.companyName || "";
    var contactPerson = e.parameter.contactPerson || "";
    var email = e.parameter.email || "";
    var phone = e.parameter.phone || "";
    var industry = e.parameter.industry || "";
    var productRequirement = e.parameter.productRequirement || "";
    var message = e.parameter.message || "";
    var date = new Date();

    // 3. Store data in Google Sheet
    sheet.appendRow([
      date,
      companyName,
      contactPerson,
      email,
      phone,
      industry,
      productRequirement,
      message
    ]);

    // 4. SEND EMAIL NOTIFICATION
    var subject = "🔔 New Inquiry Received - TPS Industries";

    var body =
      "A new inquiry has been submitted:\n\n" +
      "Company Name: " + companyName + "\n" +
      "Contact Person: " + contactPerson + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone + "\n" +
      "Industry: " + industry + "\n" +
      "Product Requirement: " + productRequirement + "\n" +
      "Message: " + message + "\n\n" +
      "Date: " + date;

    MailApp.sendEmail(
      "tpsofficialdata@gmail.com",
      subject,
      body
    );

    return ContentService.createTextOutput("Success");

  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err.message);
  }
}
