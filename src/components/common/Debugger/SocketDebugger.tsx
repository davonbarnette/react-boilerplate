import React, { Component } from 'react';
import 'jsoneditor/dist/jsoneditor.min.css';
import './styles.scss';
import ReactJson from "react-json-view";
import {Flex} from "../Flex/Flex";
import {observer} from "mobx-react";
import CustomJSONEditor from "./CustomJSONEditor/CustomJSONEditor";
import Button from "../Button/Button";
import * as mobx from 'mobx';

let defaultJSON = {
    "action": "query_base_data",
    "args": {
        "passthrough": {}
    }
};

interface SocketDebuggerProps {
    onSubmitClick:(json:any)=>void,
    jsonTemplates:any
}

interface SocketDebuggerState {

}

class SocketDebugger extends Component<SocketDebuggerProps, SocketDebuggerState> {

    state = {
        json: null,
    };

    onSubmitClick = (json:any) => {
        const { onSubmitClick } = this.props;
        if (!json) return null;
        this.setState({json});
        onSubmitClick(json);
    };

    get buttons(){
        const { jsonTemplates } = this.props;
        if (jsonTemplates){
            let newDebug:any = mobx.toJS(jsonTemplates);
            return Object.keys(newDebug).map((key:string) => {
                let json = newDebug[key];
                return <Button key={key} enabled={true} onClick={()=>this.setState({ json })}>{key}</Button>
            })
        }
    }

    render() {
        return (
            <Flex className="socket-debugger" flexDirection='row'>
                <Flex className='actionable' flexDirection='column'>
                    <Flex className='json-buttons' flexDirection='row'>
                        {this.buttons}
                    </Flex>
                    <CustomJSONEditor id={'socket_debugger'} json={this.state.json || defaultJSON} onSubmit={this.onSubmitClick}/>
                </Flex>
                <div className='payload'>
                    <ReactJson src={{}} name={null}/>
                </div>
            </Flex>
        );
    }
}

export default observer(SocketDebugger);