import { Tab } from "../browser-api";

export default class Message {
  private tab: Tab;

  constructor() {
    this.tab = new Tab();
  }

  public sendTriggerWhatsApp(message: string): void {
    this.sendMessageByTabQuery("https://web.whatsapp.com/*", message);
  }

  public sendTriggerTelegram(message: string): void {
    this.sendMessageByTabQuery("https://web.telegram.org/*", message);
  }

  private async sendMessageByTabQuery(
    queryUrl: string,
    message: string
  ): Promise<void> {
    const tabs = await this.tab.query({ url: queryUrl });
    if (tabs.length > 0) this.tab.sendMessage(tabs[0].id, { message: message });
  }
}
