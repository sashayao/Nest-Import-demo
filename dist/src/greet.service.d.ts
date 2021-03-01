import { MessageService } from './message.service';
export declare class GreetService {
    private message;
    constructor(message: MessageService);
    greet(): void;
}
