import { MailTrap } from "../../providers/mail/implementations/mailtrap.provider";
import { SendMailNewUserApplication } from "./send-mail-new-user.application";
import { SendMailNewUserController } from "./send-mail-new-user.controller";

const mailTrap = new MailTrap();
const sendMailNewUserApplication = new SendMailNewUserApplication(mailTrap);
const sendMailNewUserController = new SendMailNewUserController(sendMailNewUserApplication);

export { sendMailNewUserController, sendMailNewUserApplication }