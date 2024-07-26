using HWPlatform.BLL.Contracts;
using System;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;

namespace HWPlatform.BLL.Implementations;

internal class EmailService : IEmailService
{
    public void SendEmail(string receiverName, string emailAddress, string text)
    {
        var email = new MimeMessage();

        email.From.Add(new MailboxAddress("HWPlatform AIBest", "hwplatformaibest@gmail.com"));
        email.To.Add(new MailboxAddress(receiverName, emailAddress));

        email.Subject = "New random generated password";
        email.Body = new TextPart(MimeKit.Text.TextFormat.Plain)
        {
            Text = "Your new password is: " + text
        };

        using (var smtp = new SmtpClient())
        {
            smtp.Connect("smtp.gmail.com", 587, false);

            smtp.Authenticate("hwplatformaibest@gmail.com", "HWPlatformAIBest2024");

            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
