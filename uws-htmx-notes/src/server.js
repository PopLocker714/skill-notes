// @ts-check
import uWS from "uWebSockets.js";
import fs from "node:fs";
import path from "node:path";

// import config from 'config.json' with { type: "json" };

// console.log(config);

// Функция для отправки файлов
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    res.cork(() => {
      if (err) {
        res.writeStatus("404 Not Found");
        res.writeHeader("Content-Type", "text/html");
        res.end("<h1>404 - File Not Found</h1>");
      } else {
        res.writeHeader("Content-Type", contentType);
        res.end(data);
      }
    });
  });
}

// Функция для отправки страницы 404
function serve404(res) {
  res.cork(() => {
    res.writeStatus("404 Not Found");
    res.writeHeader("Content-Type", "text/html");
    // res.end("<h1>404 - Page Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>");
    serveFile(res, './frontend/dist' + '/404.html', "text/html");
  });
}

uWS
  .App()
  // Главная страница
  .get("/", (res, req) => {
    res.onAborted(() => {
      console.log("Request aborted by the client");
    });
    serveFile(res, './frontend/dist' + '/index.html', "text/html");
  })

  // Обслуживание статических файлов
  .get("/*", (res, req) => {
    const filePath = './frontend/dist' + req.getUrl();
    const ext = path.extname(filePath).toLowerCase();
    let contentType = "text/plain";

    switch (ext) {
      case ".html":
        contentType = "text/html";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "application/javascript";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpeg";
        break;
      default:
        contentType = "application/octet-stream";
    }

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // Если файл не найден, показываем страницу 404
        serve404(res);
      } else {
        serveFile(res, filePath, contentType);
      }
    });

    // Обрабатываем возможное прерывание запроса
    res.onAborted(() => {
      console.log("Request aborted by the client");
    });
  })

  // Обработчик всех остальных маршрутов (страница 404)
  .any("/*", (res, req) => {
    // Обрабатываем возможное прерывание запроса
    res.onAborted(() => {
      console.log("Request aborted by the client");
    });

    // Отправляем страницу 404
    serve404(res);
  })

  .listen(8000, (listenSocket) => {
    if (listenSocket) {
      console.log("Server listening on port 3000");
    }
  });
