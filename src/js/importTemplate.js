const dir = '../ressources/templates';
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
});