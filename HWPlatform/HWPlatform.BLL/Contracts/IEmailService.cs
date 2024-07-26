namespace HWPlatform.BLL.Contracts;

public interface IEmailService
{
    void SendEmail(string receiverName, string emailAddress, string text);
}
