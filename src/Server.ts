import { App } from './App';
import { PostsController } from './post/posts.controller';

class Server {
    private app = new App([new PostsController], 3000);

    public async start(): Promise<any> {
        try {
            await this.app.listen()
        } catch(e){
            console.log(e);
        }
    }
}

const server = new Server();
server.start();