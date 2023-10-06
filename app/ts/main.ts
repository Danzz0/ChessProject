import { Campo } from "./Campo"
import { TabuController } from "./controllers/TabuController"

let tab = new TabuController()


document.querySelector(".form").addEventListener('submit', tab.main.bind(tab))










