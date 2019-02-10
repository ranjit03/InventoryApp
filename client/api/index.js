import request from "superagent";

const allData = "/api/item/";

export function getItemDetails(name) {
  return request.get(allData + name).then(res => res.body);
}
