import * as formLogic from "./formLogic";
import { deleteDataFromServer, getDataFromServer } from "./crudFunctions";
import "./styles/index.css";

window.getDataFromServer = getDataFromServer;
window.deleteDataFromServer = deleteDataFromServer;
window.formLogic = formLogic;
