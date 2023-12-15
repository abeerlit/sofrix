// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "apikey",
    pass: "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",
  },
});
export const POST = async (req: NextRequest, res: NextApiRequest) => {
  const data = await req.json();

  const mailOptions = {
    from: 'support@sofrix.com',
    to: 'abeerahmad204@gmail.com',
    subject: 'subject',
    text: 'message'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('eheheradadsadasd', error);

    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  return NextResponse.json(data, { status: 200 });
};
