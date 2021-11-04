import Settings from "../configs/settings";
import { Storage } from "../browser-api";

export default class Configs {
  private storage: Storage;

  constructor() {
    this.storage = new Storage();
  }

  public async readConfig() {
    const value = await this.storage.get(Settings.CONFIG_WEBCHAT_BLUR_DISABLE);
    return value;
  }

  public globalSetConfigEnable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBCHAT_BLUR_DISABLE] = null;
    this.storage.set(configStorage);
  }

  public globalSetConfigDisable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBCHAT_BLUR_DISABLE] = true;
    this.storage.set(configStorage);
  }

  public whatsappSetConfigEnable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBWHATSAPP_BLUR_DISABLE] = null;
    this.storage.set(configStorage);
  }

  public whatsappSetConfigDisable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBWHATSAPP_BLUR_DISABLE] = true;
    this.storage.set(configStorage);
  }

  public telegramSetConfigEnable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBTELEGRAM_BLUR_DISABLE] = null;
    this.storage.set(configStorage);
  }

  public telegramSetConfigDisable(): void {
    let configStorage: { [key: string]: any } = {};
    configStorage[Settings.CONFIG_WEBTELEGRAM_BLUR_DISABLE] = true;
    this.storage.set(configStorage);
  }
}
