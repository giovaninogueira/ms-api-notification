import { IMailAccess, IMessageMail } from "../imail-access.interface";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrap implements IMailAccess {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "",
            port: 0,
            auth: {
                user: "",
                pass: ""
            }
        });
    }

    /**
     * Send Mail
     * @param mail 
     */
    async send(mail: IMessageMail): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: mail.to.name,
                address: mail.to.email,
            },
            from: {
                name: mail.from.name,
                address: mail.from.email,
            },
            subject: mail.subject,
            html: mail.body,
        })
    }
}