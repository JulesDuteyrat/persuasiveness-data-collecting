const fs = require('fs');
const dir = './ressources/templates';
rdm = new Random();
fs.readdir(dir, (err, files) => {
select = rdm.nextInt(0,(files.length));
fs.readFile(dir+'/'+files[select], 'utf8', (err, data) => { 
        print(data);
        const para = document.createElement("p");
        const node = document.createTextNode(data);
        para.appendChild(node);

        const element = document.getElementById("msg");
        element.appendChild(para); });
});
