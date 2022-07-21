const Employee = require("../lib/employee");

function unpack(data) {
    let unpackedData = data.map(member =>  `
    <div class="card">
            <div class="innerCard1">
                <div class="name">${member.name}</div>
                <div>${member.getRole()}</div>
            </div>
            <div class="innerCard2">
                <ul>
                    <li>ID: ${member.id}</li>
                    <li>Email: ${member.email}</li>
                    <li>Office number: </li>
                </ul>
            </div>
        </div>
    `)
    let unpackToString = unpackedData.toString();
    return unpackToString;
}

function createHTML(data){
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

