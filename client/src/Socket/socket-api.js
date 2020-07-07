
import io from 'socket.io-client';





const socket = io('http://localhost:8080');

console.log('import')
class SocketServerApi {

    static createUser() {
        return new Promise((res, rej) => {
            res('1')
        });
    }
}

export default SocketServerApi;