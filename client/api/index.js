import request from "superagent";

const allData = "/api/item/";

export function getItemDetails(name) {
  return request.get(allData + name).then(res => res.body);
}

export function addStockToInventory(name, qty) {
  return request
    .post(allData + name)
    .send({ qtytoadd: qty, nametoadd: name })
    .then(res => {
      alert("Successfully added stock :)");
    });
}

export function deleteStockFromInventory(name, qty) {
  const route = "delete/";
  return request
    .post(allData + route + name)
    .send({ qtytodelete: qty, nametodelete: name })
    .then(res => {
      alert("Successfully deleted stock :)");
    });
}
