import { IMailAccess, IMessageMail } from "./imail-access.interface";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrap implements IMailAccess {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "dd14c11501e3ac",
              pass: "1c4d4e866518e5"
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