import http from "http";
function createNewServer(statusCode, contentType, port) {
  http
    .createServer((request, response) => {
      response.writeHead(statusCode, {
        "Content-Type": contentType,
      });
      response.end(console.log("서버 생성 됨"));
    })
    .listen(port, () => {
      console.log("서버 실행");
    });
}
createNewServer(200, "text/html; charset=utf-8", 8080);
