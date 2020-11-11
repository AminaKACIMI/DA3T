const StreamValues = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');



var JS1 = StreamValues.withParser();

JS1.on('data', ({key, value}) => {
    
    console.log(key, value);
    
     
    

});
    


JS1.on('end', () => {
    console.log('All done');
});

const file1 = path.join(__dirname, '82373126.json');
fs.createReadStream(file1).pipe(JS1.input);