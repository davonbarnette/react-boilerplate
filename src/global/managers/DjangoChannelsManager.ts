import { WebSocketBridge } from 'django-channels';
import Logs from "./Logs";

export class DjangoChannelsManager {

    bridge:any;

    constructor(path:string, cb:(...args:any)=>void, onOpenConnection?:()=>void){
        this.bridge = new WebSocketBridge();
        this.bridge.connect(path);
        this.bridge.listen(cb);
        this.bridge.socket.addEventListener('open', onOpenConnection);

        (window as any)['ws'] = this.bridge;
    }

    send(action:string, args:any){
        Logs.action('sending to django-channels', { action, args });
        this.bridge.send({ action, args });
    }
}


