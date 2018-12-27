import Logs from "./Logs";
import {DjangoChannelsManager} from "./DjangoChannelsManager";

export interface SocketEvent {
    event:string,
    args:any,
    passthrough:any
}

export default class EventRouter {

    channel:DjangoChannelsManager;
    callbacks:any;
    onRoute:undefined | ((data:SocketEvent) => void);

    constructor(path:string, actions:any, callbacks:any, onOpenConnection:()=>void, onRoute?:(data:SocketEvent)=>void){
        this.callbacks = callbacks;
        this._route = this._route.bind(this);
        this.channel = new DjangoChannelsManager(path, this._route, onOpenConnection);
        if (onRoute) this.onRoute = onRoute;
    }

    send(action:string, args:any){
        this.channel.send(action, args);
    }

    private _route(data:SocketEvent){
        const { event, args } = data;

        let callback = this.callbacks[event];
        if (this.onRoute) this.onRoute(data);
        if (!callback) return Logs.reaction('No callback for: ', event);

        let serialized = {...args};
        Logs.reaction(`Routing to callback for event: ${event}`, serialized);
        callback(serialized);
    }
}

