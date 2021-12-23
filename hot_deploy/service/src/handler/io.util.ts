import { Socket } from "socket.io";


let  io: Socket | null = null;

function setIo(ioParams: Socket) {
    if(!io) {
        io = ioParams;
    } else {
        throw 'io已初始化'
    }
}


function getIo() {
    if(!io) {
        throw 'io未初始化'
    }
    return io;
}



export {
    setIo,
    getIo
}