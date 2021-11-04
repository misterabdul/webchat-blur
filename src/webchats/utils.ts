import Settings from "../configs/settings";

export default class Utils {
  private bodyElement: HTMLBodyElement | null;
  private settingsDisabled: boolean = false;

  constructor() {
    this.bodyElement = document.getElementsByTagName("body")[0];
    this.setBlur();
  }

  public async readSettings(key: string) {
    const value = await chrome.storage.sync.get(key);
    switch (true) {
      case value[Settings.CONFIG_WEBCHAT_BLUR_DISABLE] === true:
      case value[Settings.CONFIG_WEBTELEGRAM_BLUR_DISABLE] === true:
      case value[Settings.CONFIG_WEBWHATSAPP_BLUR_DISABLE] === true:
        this.settingsDisabled = true;
        break;
      default:
        this.settingsDisabled = false;
        break;
    }

    if (this.settingsDisabled) {
      this.setNoBlur();
    } else {
      this.setBlur();
    }
  }

  protected setNoBlur(): void {
    this.bodyElement.classList.remove("webchat-blur");
  }

  protected setBlur(): void {
    this.bodyElement.classList.add("webchat-blur");
  }
}
