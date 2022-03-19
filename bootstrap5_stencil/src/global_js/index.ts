
import '@popperjs/core'
import 'bootstrap';

export class golbalJs {
    constructor() {
        if (!window['ds']) {
            window['ds'] = {};
        }
        window['ds'].tsetFun = this.tsetFun;
    }

    tsetFun(str: any) {
        return str;
    }
}

new golbalJs();