const keys=require('../../config/keys');

const serveyTemplete=(servey)=>{
    return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input</h3>
          <p>Please answer the following question:</p>
          <p>${servey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/serveys/${servey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/serveys/${servey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
}
//${keys.redirectDomain}/api/surveys/${survey.id}/yes
//${keys.redirectDomain}/api/surveys/${survey.id}/no
module.exports=serveyTemplete;