
// pages/api/download.js

const fs = require("fs");
const path = require("path");

export default (req:any, res:any) => {
    // Filename for the downloaded file
    const fileName = "cv-sergiorodrigo.pdf";
    const filePath = path.join(process.cwd(), "public", fileName); // Path to your file
    

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        // console.log('shiberaasa')
        return res.status(404).send("File not found");
    }

    // Define a mapping of file extensions to content types
    const contentTypeMap:any= {
        'svg': "image/svg+xml",
        'ico': "image/x-icon",
        'png': "image/png",
        'jpg': "image/jpeg",
        'pdf': "application/pdf",
    };

    // Get the file extension
    const fileExtension :string = fileName?.split(".")?.pop()?.toLowerCase() || 'pdf';

    // Determine the content type based on the file extension
    const contentType = contentTypeMap[fileExtension] || "application/octet-stream";

    // Set headers to force download
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.setHeader("Content-Type", contentType);

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
}
