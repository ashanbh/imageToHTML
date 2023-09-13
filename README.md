# imageInliner (convert image pixels into HTML tags) 
Converts images to HTML Tables, or CSS box shadows. Especially useful for inlining images in emails. Since the images are not in an `<img>` tag, email clients will not be able to strip them out. Completely eliminates any need to download images (network traffic) or even read multipart message attachments. The image is rendered as an HTML table, or box shadows, and is simply indistinguishible from regular HTML content.

Embedding images in emails can be problematic. Email clients (native or otherwise) like Gmail, Outlook etc will strip them out. 
However, if you convert the image to HTML i.e. take the actual pixels and encode them as HTML elements, the "images" will be rendered by all clients. 

The code reads image data and then will re draw this image as a table. Each pixel of the image is converted to a corresponding table cell. To email clients this looks just like a regular table, and not an image. This is also a clever way of embedding tiny images directly into your HTML. (Alhough there are many other ways of doing embedding images into HTML -  data-uri, fonts, SVG etc.). 

See a demo here: https://embed.plnkr.co/dLC6Yy/

## Orginal Image
> ![Screenshot](/screenshots/1.png)

## Converted to Colored Table cells
> ![as Table cells](/screenshots/3.png)
> ![as table cells](/screenshots/4.png)

## Converted to Colored CSS attributes 
> ![as CSS](/screenshots/2.png)
