import {CreateExampleResponseArgs} from "./Types";
import AppStore from "../App/Store";

export default class ExampleConsumer {

    static onCreateOne(data:CreateExampleResponseArgs){
        AppStore.example.setOne(data);
    }

}