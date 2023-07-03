
async function logJSONData(lang){
    const response = await fetch('config.json');
    const jsonData = await response.json();
    const langData = jsonData[lang];
    // console.log(langData);
    const menuData = langData.menu;
    // console.log(menuData);
    for (let x of menuData){
        console.log(x);
    }
}

function changeToHI() {
    logJSONData('hindi');
    // fetch("config.json").then(response => response.json()).then(data = data['hindi']);
}