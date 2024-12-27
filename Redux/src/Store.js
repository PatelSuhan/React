import { legacy_createStore as createStore } from "redux";
import reducer from "./Reduser";

const store = createStore(reducer)

export default store