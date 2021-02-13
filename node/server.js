const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/video', function(req, res) {
  const videoName = req.query.video
  const path = '/mnt/usb-SanDisk_Cruzer_Blade_4C530001320728112273-0:0-part1/media/'+videoName
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    if(start >= fileSize) {
      res.status(416).send('Requested range not satisfiable\n'+start+' >= '+fileSize);
      return
    }
    const chunksize = (end-start)+1
    // const chunksize = 1000000;
    kbBytesRequested = (end-start) / 1000;
    mbBytesRequested = kbBytesRequested / 1000;
    if(kbBytesRequested > 0)
    console.log("KB :"+kbBytesRequested)
    else
    console.log("MB :"+mbBytesRequested)

    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mkv',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})

function sendBadRequest(response) {
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({status: 400}));
    response.end();
}

app.get('/hls',(req,res) => {
    
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})