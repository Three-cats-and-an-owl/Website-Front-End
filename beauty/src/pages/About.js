<<<<<<< Updated upstream
<!DOCTYPE html>
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inital-scale=1.0">
            <title>About Us</title>
        <style>
            body {

                font-family: Bakerville, sans-serif; //will change later
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
=======
import React from 'react'

const About = () => {
  return (
    <div className="wrapper">
    <div className="body">
        About Us
    </div>
    <p>
    At A.A.B.B. Skin, we are dedicated to crafting skincare solutions that nourish, protect, and enhance your natural beauty, inside and out.
Founded on the principles of innovation, integrity, and inclusivity, A.A.B.B. Skin is committed to delivering high-quality products that cater to diverse skin types and concerns. Our formulations are meticulously curated, blending cutting-edge scientific research with time-tested botanical ingredients to create effective, results-driven skincare solutions.
We understand that skincare is not one-size-fits-all, which is why we offer a diverse range of products designed to address specific needs, whether it's hydration, anti-aging, acne control, or brightening. Transparency and sustainability are core values that guide everything we do. We believe in transparency not only in our ingredients but also in our processes, ensuring that our customers can trust the products they use on their skin. Additionally, we are committed to minimizing our environmental footprint by using eco-friendly packaging and sourcing responsibly sourced ingredients whenever possible.
    </p>
    </div>
  )
}

export default About
>>>>>>> Stashed changes
