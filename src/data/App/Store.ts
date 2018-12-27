import {decorate, observable} from "mobx";
import {BaseMapManager} from "../../global/managers/BaseMapManager";
import {ExampleType} from "../Example/Types";
import ExampleActions from "../Example/Actions";

class AppStoreClass {

    //Data Types
    example:    BaseMapManager<string, ExampleType> = new BaseMapManager('uuid');

    drawer?:    string;
    modal?:     string;

    constructor(){

    }

    initialize(){
        //Delete this when you actually initialize, this is just for testing:
        ExampleActions.createOne('Testing');
    }

}

decorate(AppStoreClass,{
    // Data Decorators
    example:    observable,

    drawer:     observable,
    modal:      observable,
});

const AppStore = new AppStoreClass();
export default AppStore;