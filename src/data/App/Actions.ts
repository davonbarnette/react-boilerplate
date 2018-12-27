import AppStore from "./Store";

export default class AppActions {

    static openFixedComponent(type:string, id:string){
        (AppStore as any)[type] = id;
    }

    static closeFixedComponent(type:string){
        (AppStore as any)[type] = undefined;
    }

}