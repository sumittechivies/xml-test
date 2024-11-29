const express = require('express');  // Import express
const app = express();
const port = 3000;

// Middleware to parse JSON data from POST requests
app.use(express.json());

// POST endpoint to return XML response
app.post('/get-xml', (req, res) => {
    // Set the response content type to application/xml
    res.setHeader('Content-Type', 'application/xml');

    const printjobid = Math.random().toString(36).substring(2, 12); // Random alphanumeric string

    let xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<PrintRequestInfo Version="2.00">
    <ePOSPrint>
        <Parameter>
            <devid>test-sumit</devid>
            <timeout>1000</timeout>
            <printjobid>${printjobid}</printjobid>
        </Parameter>
        <PrintData>
            <epos-print force="true" xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
                <text lang="en"></text>
                <text smooth="true"></text>
                <text font="font_d"></text>
                <text width="2" height="2"></text>
                <text reverse="false" ul="false" em="false" color="color_1"></text>
                <text align="center"></text>
                <text em="true"></text>
                <text>St. Louis</text>
                <feed line="1"></feed>
                <feed line="1"></feed>
                <text font="font_a"></text>
                <text width="1" height="1"></text>
                <text em="false"></text>
                <text>4814 washington blvd</text>
                <feed line="1"></feed>
                <text>saint louis, MO, 63108</text>
                <feed line="1"></feed>
                <text>(314) 291-5450</text>
                <feed line="2"></feed>
                <text font="font_a"></text>
                <text width="1" height="1"></text>
                <text>____________________________________________</text>
                <feed line="2"></feed>
                <text font="font_b"></text>
                <text width="2" height="2"></text>
                <text>CARRYOUT</text>
                <feed line="1"></feed>
                <text>#002</text>
                <feed line="1"></feed>
                <feed line="1"></feed>
                <feed line="1"></feed>
                <text font="font_a"></text>
                <text width="1" height="1"></text>
                <feed line="1"></feed>
                <text>Order to be ready:</text>
                <feed line="1"></feed>
                <text>11/27/24 10:30 am</text>
                <feed line="1"></feed>
                <text em="false"></text>
                <text align="left"></text>
                <text>  ____________________________________________</text>
                <feed line="2"></feed>
                <text>  Name: TEST MODE</text>
                <feed line="1"></feed>
                <text>  Phone: 650-555-5555</text>
                <feed line="1"></feed>
                <text>  Card Ending In: 1111</text>
                <feed line="1"></feed>
                <text>  Payment: $6.50</text>
                <feed line="1"></feed>
                <feed line="1"></feed>
                <text>  Order Place On:                       Order#</text>
                <feed line="1"></feed>
                <text>  11/27/24 12:06 am                     wwy5wa</text>
                <feed line="1"></feed>
                <text>  ____________________________________________</text>
                <feed line="2"></feed>
                <text>  Qty Item / Modifications               Price</text>
                <feed line="1"></feed>
                <text em="true"></text>
                <text>  </text>
                <text em="false"></text>
                <feed line="1"></feed>
                <text>     1 Chicken Noodle Soup                5.00</text>
                <feed line="1"></feed>
                <text lang="en"></text>
                <text>         Cup</text>
                <feed line="1"></feed>
                <text lang="en"></text>
                <text>        </text>
                <feed line="1"></feed
                <text>  ____________________________________________</text>
                <feed line="2"></feed>
                <text>                 subtotal:             $5.00</text>
                <feed line="1"></feed>
                <text>          convenience fee:             $1.00</text>
                <feed line="1"></feed>
                <text>                      tax:             $0.50</text>
                <feed line="1"></feed>
                <text>                      tip:             $0.00</text>
                <feed line="1"></feed>
                <text em="true"></text>
                <text>                    total:             $6.50</text>
                <feed line="1"></feed>
                <feed line="2"></feed>
                <feed line="3"></feed>
                <text align="center"></text>
                <text em="false"></text>
                <text font="font_b"></text>
                <text width="2" height="2"></text>
                <text>Thank you for your business.</text>
                <feed line="1"></feed>
                <text>powered by e|tab</text>
                <feed line="1"></feed>
                <feed line="3"></feed>
                <cut type="feed"></cut>
            </epos-print>
        </PrintData>
    </ePOSPrint>`
    // XML data
    // const xmlData = `
    //     <?xml version="1.0" encoding="UTF-8"?>
    //     <response>
    //         <status>Success</status>
    //         <message>Your request has been processed successfully</message>
    //     </response>
    // `;

    // Send the XML response
    res.status(200).send(xmlData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
