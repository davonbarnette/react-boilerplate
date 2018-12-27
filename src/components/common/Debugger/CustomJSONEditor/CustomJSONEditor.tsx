import React, { Component } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';
import './styles.scss';
import Button from "../../Button/Button";
import {Flex} from "../../Flex/Flex";

interface CustomJSONEditorProps {
    id:string,
    json:any,
    onSubmit:(json:any) => void,
}

export default class CustomJSONEditor extends Component<CustomJSONEditorProps,any>{

    ref:any;

    constructor(props: any) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidUpdate(props:CustomJSONEditorProps){
        const { json } = this.props;
        this.ref.set(json);
    }

    get id(){
        const {id} = this.props;
        return id + '_curJson';
    }

    componentDidMount(): void {
        const { json } = this.props;
        let jsonEditorConfig = {modes:["code", "tree"]};

        let storageJson = JSON.parse(localStorage.getItem(this.id) || "{}");

        this.ref = new JSONEditor(this.ref.current, jsonEditorConfig as any);
        this.ref.set(json);
    }

    onSubmitClick = () => {
        const {onSubmit} = this.props;
        let json = this.ref.get();
        onSubmit(json);
    };

    onSaveClick = () => {
        let json = this.ref.get();
        localStorage.setItem(this.id, JSON.stringify(json));
    };

    render(){
        return(
            <Flex className='editor-container' flexDirection='column'>
                <div className='custom-json-editor' ref={this.ref}/>
                <Button enabled={true} onClick={this.onSubmitClick}>SUBMIT</Button>
                <Button enabled={true} onClick={this.onSaveClick}
                        style={{marginTop: 12, background: '#6d6dd0'}}>SAVE</Button>
            </Flex>
        )
    }
}