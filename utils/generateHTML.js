const Employee = require("../lib/employee");

function unpack(data) {

    let unpackedData = [];
    for (var i = 0; i < data.length; i++) {
        var property;
        var emoji;
        if (data[i].officeNumber) {
            property = `Office number: ${data[i].officeNumber}`;
            emoji = `🍵`;
        } else if (data[i].github) {
            property = `GitHub: <a href="https://github.com/${data[i].github}">${data[i].github}</a>`;
            emoji = `👓`;
        }
        else {
            property = `School: ${data[i].school}`;
            emoji = `🎓`;
        }    
        unpackedData[i] = `
        <div class="card">
                <div class="innerCard1">
                    <div class="name">${data[i].name}</div>
                    <div>${emoji}${data[i].getRole()}</div>
                </div>
                <div class="innerCard2">
                    <ul>
                        <li>ID: ${data[i].id}</li>
                        <li>Email: <a href="mailto:email">${data[i].email}</a></li>
                        <li>${property}</li>
                    </ul>
                </div>
            </div>`
    }

    let unpackToString = unpackedData.toString();
    return unpackToString;
}

function createHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>
    <nav>
        <div class="myTeam">
            <h1>My Team</h1>
        </div>
      </nav>
      <section class="wrapper">
        ${unpack(data)}
      </section>
</body>
</html>
`
}

exports.createHTML = createHTML;
exports.unpack = unpack;

