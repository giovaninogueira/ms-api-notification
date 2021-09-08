import { sendMailNewUserController } from "../../../../app/send-mail-new-user";
import { IMessagerAccessRequest, IMessagerBrokerAccess, IRouterMessageBroker } from "../imessager-broker-access.interface";

export class SendMailNewUserQueue implements IRouterMessageBroker {
    /**
     * Handle
     * @param messagerBorker 
     */
    handle(messagerBorkerT: IMessagerBrokerAccess) {
        messagerBorkerT.listenRPC('send-email-new-user', async (data: IMessagerAccessRequest) => {
            return await sendMailNewUserController.handle(data);
        })
    }
}