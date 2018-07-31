function createWorker(f) {
    let blob = new Blob(['(' + f.toString() + ')()']);
    let url = window.URL.createObjectURL(blob);
    let worker = new Worker(url);
    return worker;
}

let workerExp = createWorker(() => {
    self.addEventListener("message", (event)=>{
        let data = "worker handle done for " + event.data.text;
        self.postMessage(data);
    });
});

workerExp.onmessage = (event)=>{
    console.log(event.data);
}

workerExp.postMessage({text: "test"});

setTimeout(()=> { workerExp.terminate();}, 1000);

setTimeout( () => {workerExp.postMessage({text: "test2"});}, 2000);