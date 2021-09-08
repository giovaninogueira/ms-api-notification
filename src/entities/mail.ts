export class Mail {
    public of: string;
    public from: string;
    public subject: string;
    public message: string;

    constructor (mail: Mail) {
        this.of = mail.of;
        this.from = mail.from;
        this.subject = mail.subject;
        this.message = mail.message;
    }
}