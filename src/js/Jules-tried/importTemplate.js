/*const dir = '../ressources/templates';
requirejs(["fs"],function(fs){
window.onload = function(){
    fetch(dir+"/example.txt").then(response => response.text()).then(data => {
        data = data.split("\n")
        console.log(data);
        for (var line in data){
            var text = document.createTextNode(data[line]);
            if (line == 0){
                document.getElementById("titre").appendChild(text);
            }
            else{
                document.getElementById("corps").appendChild(text);
            }
        }
    });
}
});*/
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText("../ressources/templates");
}

loadHome();