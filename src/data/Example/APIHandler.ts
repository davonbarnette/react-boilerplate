import axios from 'axios'

export default class ExampleAPI {

    static async getAllExamples(){
        let url = ExampleAPIRoutes.exampleBase;
        await axios.get(url);
    }

    static async getExample(exampleId:string){
        let url = ExampleAPIRoutes.getExampleById(exampleId);
        await axios.get(url);
    }

    static async exampleOnUploadProgress(exampleId:string, data:any, onUploadProgress?:(progressEvent:any) => void){
        let url = ExampleAPIRoutes.getExampleById(exampleId);
        await axios({ method:'post', url, data, onUploadProgress});
    }

}

export class ExampleAPIRoutes {

    static base = '/api/example';

    static get exampleBase(){
        return `${ExampleAPIRoutes.base}`
    }

    static getExampleById(exampleId:string){
        return `${ExampleAPIRoutes.exampleBase}/${exampleId}`
    }

}