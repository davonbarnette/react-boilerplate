import {CreateExampleRequestArgs} from "./Types";
import uuid from 'uuid/v1';
import ExampleConsumer from "./Consumer";

export default class ExampleActions {

    static createOne(name:string){
        let args:CreateExampleRequestArgs = { name, uuid:uuid() };

        // Example of consumer taking in the response from this request.
        ExampleConsumer.onCreateOne(args);
    }
}