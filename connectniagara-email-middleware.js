"use strict";

/**
 * organization controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::recommendation.recommendation",
  ({ strapi }) => ({
    async create(ctx) {
      const { data, meta } = await super.create(ctx);

      // send email
      await strapi.plugins["email"].services.email.send({
        to: "raykeating13@gmail.com", //TODO - change to connectniagara email
        from: "connectniagara.noreply@gmail.com",
        subject: "ConnectNiagara has received a recommendation!",
        html: `<!DOCTYPE html>
            <html>
            <head>
            <style>
            body {
                background-color: #f3f6ff;
                font-family: Open Sans, sans-serif;
                padding: 20px;
            }
            h1 {
                color: #333333;
                font-size: 24px;
            }
            p {
                color: #666666;
            }
            .blockquote {
                background-color: #ffffff;
                border-left: 10px solid #f3f6ff;
                padding: 10px 20px;
            }
            </style>
            </head>
            <body>            
                <div>
                    <h1>ConnectNiagara has received a new recommendation from: ${data.attributes.Name}</h1>
                    <p class="blockquote">${data.attributes.RecommendationDetails}</p>
                    <p>Email: ${data.attributes.Email}</p>
                    <p>Phone: ${data.attributes.PhoneNumber}</p>
                    <p>Nonprofit: ${data.attributes.isNonProfit ? "Yes" : "No"}</p>
                    <p>Business: ${data.attributes.isBusiness ? "Yes" : "No"}</p>
                    <p>Youth: ${data.attributes.isYouth ? "Yes" : "No"}</p>
                    <p>Attachments can be found in <a href="strapi.connectniagara.com">Strapi</a></p>
                </div>
            </body>
            </html>`,
      });

      strapi.log.info("Sent email to raykeating13@gmail.com");

      return { data, meta };
    },
  })
);
