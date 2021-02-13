const app = require('express')();
const fs = require('fs');
const hls = require('hls-server');
const cors = require('cors');

app.use(cors());

const ROOT_PATH = '/media/narayan/chaser/media/'

app.get('/', (req, res) => {
    return res.status(200).sendFile(`${__dirname}/client.html`);
});

const server = app.listen(3000);
server.keepAliveTimeout = 3000000;

function sendFile(res,PATH){
    const ext = PATH.split('.').pop();
    if (ext !== 'm3u8' && ext !== 'ts') {
        res.sendStatus(404);
    }

    if(ext == 'm3u8'){
        head = {
            'Content-Type': 'application/vnd.apple.mpegurl',
            'Transfer-Encoding': 'chunked'
            }
    }

    if(ext == 'ts'){
        head = {
            'Content-Type': 'video/MP2T',
            'Transfer-Encoding': 'chunked'
            }
    }

    fs.access(PATH, fs.constants.F_OK, function (err) {
                        if (err) {
                            console.log('File not exist');
                            res.sendStatus(404);
                        }  
                    });
    const file = fs.createReadStream(PATH);
    res.writeHead(200, head)
    file.pipe(res)
}

app.get('/hls/series/:name/:season/:episode',(req,res) => {
    console.log(req.params)
    var info = req.params;
    const episodeName = info['episode'].split('.')[0].slice(0,3)

    const PATH = ROOT_PATH + 'Series/' + info['name'] +'/'+ info['season'] + '/'+ episodeName + '/' + info['episode'] 
    const ext = req.url.split('.').pop();
    var head;

    console.log(PATH);

    if (ext !== 'm3u8' && ext !== 'ts') {
        res.sendStatus(404);
    }

    if(ext == 'm3u8'){
        head = {
            'Content-Type': 'application/vnd.apple.mpegurl',
            'Transfer-Encoding': 'chunked'
            }
    }

    if(ext == 'ts'){
        head = {
            'Content-Type': 'video/MP2T',
            'Transfer-Encoding': 'chunked'
            }
    }

    fs.access(PATH, fs.constants.F_OK, function (err) {
                        if (err) {
                            console.log('File not exist');
                            res.sendStatus(404);
                        }  
                    });
    const file = fs.createReadStream(PATH);
    res.writeHead(200, head)
    file.pipe(res)
    });