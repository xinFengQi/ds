const onDataEmit = {};
const onDataArgsEmit = {};


let key = 0;

function on(emitName, handler) {
    const handerObj = { key: emitName + '__' + key++, handler: handler };
    if (onDataEmit[emitName]) {
        onDataEmit[emitName].push(handerObj);
    } else {
        onDataEmit[emitName] = [handerObj];
    }
    return handerObj.key;
}

function atOn(emitName, handler) {
    if (onDataArgsEmit[emitName]) {
        handler.apply(handler, [...onDataArgsEmit[emitName]])
    }
    return on(emitName, handler)
}


function once(emitName, handler) {
    const handerObj = { key: emitName + '__' + key++, handler: handler, once: true };
    if (onDataEmit[emitName]) {
        onDataEmit[emitName].push(handerObj);
    } else {
        onDataEmit[emitName] = [handerObj];
    }
    return handerObj.key;
}

function atOnceHandler(emitName, handler) {
    if (onDataArgsEmit[emitName]) {
        handler.apply(handler, [...onDataArgsEmit[emitName]])
    }
}


function atOnce(emitName, handler) {
    if (onDataArgsEmit[emitName]) {
        handler.apply(handler, [...onDataArgsEmit[emitName]])
    }
    return once(emitName, handler)
}


function emit() {
    const allArgs = [].slice.call(arguments, 0);
    const eventName = allArgs[0];
    const args = allArgs.slice(1);
    console.log('emit:',eventName, '发送参数:', args);
    onDataArgsEmit[eventName] = [...args];
    if (onDataEmit[eventName]) {
        onDataEmit[eventName].forEach(obj => {
            obj.handler.apply(obj.handler, [...args])
        })
        onDataEmit[eventName] = onDataEmit[eventName].filter(v => !v.once)
    }
}

function destory(key) {
    console.log('删除', key)
    if(!key) {
        return;
    }
    const keys = key.split('__');
    keys.pop();
    const eventName = keys.join('__');
    const index = onDataEmit[eventName].findIndex(v => v.key = key);
    onDataEmit[eventName].splice(index, 1);
}




export { on, atOn, emit, once, atOnce, destory, atOnceHandler }