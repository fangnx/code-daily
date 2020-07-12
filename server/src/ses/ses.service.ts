import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { SES } from 'aws-sdk';

@Injectable()
export class SesService {
  private SESConfig: SES.Types.ClientConfiguration;

  constructor() {
    this.SESConfig = {
      accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
      region: process.env.AWS_SES_REGION,
    };
  }

  public sendEmail(): void {
    const params: SES.Types.SendEmailRequest = {
      Source: 'fangnaxin@gmail.com',
      Destination: {
        ToAddresses: ['xinjinhe722@gmail.com'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'Hello <strong>3jane</strong>',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Try try',
        },
      },
    };

    new SES(this.SESConfig)
      .sendEmail(params)
      .promise()
      .then(res => {
        console.log(res);
      });
  }
}
