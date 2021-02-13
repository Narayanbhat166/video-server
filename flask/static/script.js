var chunksQueue
var file
var chunksQuantity
const chunkSize = 1024 * 64

function prepareFile(){
    console.log('File got')
    file = document.getElementById('file').files[0]
    if(file == null)
        console.log("No file selected")
    else{ 
        console.log(file)
        chunksQuantity = Math.ceil(file.size / chunkSize)
        chunksQueue = new Array(chunksQuantity).fill().map((_, index) => index).reverse();
        sendNext(file)
    }
    
}


function upload(chunk, chunkId) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("post", "http://localhost:3000/upload");

        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("X-Chunk-Id", chunkId);
        xhr.setRequestHeader("X-Content-Id", "Temp");
        // xhr.setRequestHeader("Content-Length", chunk.size);

        // Size and real name of whole file, not just a chunk
        xhr.setRequestHeader("X-Content-Length", file.size);
        xhr.setRequestHeader("X-Content-Name", file.name);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve();
            }
        };

        xhr.onerror = reject;

        xhr.send(chunk);
        console.log("Sent "+chunkId)
    });
}

function sendNext(file) {
    if (!chunksQueue.length) {
        console.log("All parts uploaded");
        return;
    }

    const chunkId = chunksQueue.pop();
    const begin = chunkId * chunkSize;
    const chunk = file.slice(begin, begin + chunkSize);

    console.log("Sending "+chunkId)

    upload(chunk, chunkId)
        .then(() => {
            sendNext();
        })
        .catch(() => {
            chunksQueue.push(chunkId);
        });
}

