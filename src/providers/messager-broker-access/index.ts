import { IRouterMessageBroker } from "./implementations/imessager-broker-access.interface";
import { RabbitMQ } from "./implementations/rabbit-mq/rabbit-mq.provider";
import { SendMailNewUserQueue } from "./implementations/router/send-mail-new-user-queue.router";

const listQueuesListen: Array<IRouterMessageBroker> = [
    new SendMailNewUserQueue()
];

const app = {
    listen: (callback: CallableFunction) => {
        const messagerBrokerAccess = new RabbitMQ();
        listQueuesListen.map((queueListeb) => {
            queueListeb.handle(messagerBrokerAccess);
        })
        callback();
    }
}


export { app };