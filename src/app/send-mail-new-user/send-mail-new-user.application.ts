import { IMailAccess } from "../../providers/mail/imail-access.interface";
import { ISendMailNewUserDTO } from "./isend-mail-new-user-dto.interface";

export class SendMailNewUserApplication {
    constructor(private readonly mailAccess: IMailAccess) {}
    
    /**
     * Handle
     * @param mailReq 
     */
    async handle(mailReq: ISendMailNewUserDTO): Promise<void> {
        await this.mailAccess.send({
            to: {
                email: mailReq.email,
                name: mailReq.name
            },
            from: {
                email: 'swm@swm.com',
                name: 'SWM Tecnologia'
            },
            subject: `Seja bem vindo(a) ${mailReq.name}`,
            body: `<p>Seja bem vindo(a) ${mailReq.name}</p>`
        });
        console.log(`Send email for ${mailReq.email}`)
    }
}