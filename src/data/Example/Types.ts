export interface ExampleType {
    uuid: string,
    name:string,
}

export interface CreateExampleRequestArgs {
    name:string,
    uuid:string,
}

export interface CreateExampleResponseArgs extends ExampleType {

}
