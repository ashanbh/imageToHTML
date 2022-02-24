# imageInliner (convert image pixels into HTML tags) 
Converts images to HTML Tables, or CSS box shadows. Especially useful for inlining images in emails. Since the images are not in an `<img>` tag, email clients will not be able to strip them out.

Embedding images in emails can be problematic. Email clients (native or otherwise) like Gmail, Outlook etc will strip them out. 
However, if you convert the image to HTML i.e. take the actual pixels and encode them as HTML elements, the "images" will be rendered by all clients. 

See a demo here: https://embed.plnkr.co/NzSA5EHpEFpLhfLQrPhu/

## Orginal Image
> ![Screenshot](/screenshots/1.png)

## Converted to Colored Table cells
> ![as Table cells](/screenshots/3.png)
> ![as table cells](/screenshots/4.png)

## Converted to Colored CSS attributes 
> ![as CSS](/screenshots/2.png)
