<!DOCTYPE html>
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inital-scale=1.0">
            <title>About Us</title>
        <style>
            body {

                font-family: Baskerville, sans-serif; //will change later
                margin: 0;
                padding 0;
                background-color:#D1C3B8 ; //neutral base background
            }
            .container {
                width: 100%; //change width?
                margin: auto;
                padding: 20px;
                background-color: //color?
                //border-radius: 5px;? needed?
                margin-top: 50px;
            {"}"}
            h1, p {
                text-align: center;
            }
        </style>
        </head>
        <body>
            <div class ="container">
                <h1>About Us</h1>
            </div>
            <script>
                const aboutInfo = {
                    companyName: "AABB Skin",
                    founded: 2024,
                    location: "Northridge, CA", 
                    description: "Skincare line", //will put more info later
                    founders: ["Andre", "Alana", "Beth", "Brianna"]
                };
</script>
<!-- generates the about page -->

function generateAboutContent(info) { 
            const { companyName, founded, location, description, founders } = info;
            const aboutContent = `
                <strong>Company Name:</strong> ${companyName}<br>
                <strong>Founded:</strong> ${founded}<br>
                <strong>Location:</strong> ${location}<br><br>
                <p>${description}</p><br>
                <strong>Key Founders:</strong><br>
                <ul>
                    ${founders.map(member => `<li>${member}</li>`).join('')}
                </ul>
            `;
            return aboutContent;
}
//Will make the About page actually display
document.getElementById('aboutContent').innerHTML = generateAboutContent(aboutInfo);
            </script>
        </body>
        </html>
