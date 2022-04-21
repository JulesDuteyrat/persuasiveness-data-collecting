const fs = require('fs');
const dir = './ressources/templates';
rdm = new Random();
fs.readdir(dir, (err, files) => {
select = rdm.nextInt(0,(files.length-1));
fs.readFile(dir+'/'+files[select], 'utf8', (err, data) => { 
    print(data);
    document.getElementById('msg').appendChild(data) });
});