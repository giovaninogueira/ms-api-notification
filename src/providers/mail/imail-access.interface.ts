interface IAddressMail {
    email: string;
    name: string;
}

export interface IMessageMail {
    to: IAddressMail;
    from: IAddressMail;
    subject: string;
    body: string;
}

export interface IMailAccess {
    /**
     * Send
     * @param mail 
     */
    send(mail: IMessageMail): Promise<void>;
}