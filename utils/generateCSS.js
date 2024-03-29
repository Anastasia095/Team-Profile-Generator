function createCSS() {
    return `
    body {
        font-family: monospace, sans-serif;
        padding: 0;
        margin: 0;
    }
    nav {
        background-color: rgb(212, 97, 97);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        margin: 0;
        color: white;
    }
    
    nav h1 {
        margin: 0;
    }
    
    .myTeam {
        width: 100%;
        text-align: center;
    }
    .wrapper {
        padding: 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        min-width: 28%;
        margin: 2.5%;
        border: solid;
        border-width: thin;
        background-color: #f5f1fa;
    }
    
    ul {
        border: solid;
        font-size: small;
        margin: 10% 5% 10%;
        list-style: none;
        padding: 3%;
    }
    
    li {
        border: solid;
        padding: 3%;
    }
    
    .innerCard1{
        background-color: #2A7CF6;
        color: white;
        padding: 4%
    }
    
    .name {
        font-weight: bolder;
    }`
}

module.exports = createCSS;