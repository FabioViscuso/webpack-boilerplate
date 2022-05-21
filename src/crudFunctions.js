import { BACKEND_URL_GET, BACKEND_URL_DELETE } from "./constants";

function deleteDataFromServer(keyValue) {
  fetch(BACKEND_URL_DELETE || "http://localhost:8080/delete-contacts", {
    method: "delete",
    body: JSON.stringify({ key: keyValue }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}

function getDataFromServer() {
  fetch(BACKEND_URL_GET || "http://localhost:8080/get-contacts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}

export { deleteDataFromServer, getDataFromServer };
