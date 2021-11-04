import * as browser from "webextension-polyfill";

export class Storage {
  public set(items: { [key: string]: any }): Promise<void> {
    return browser.storage.sync.set(items);
  }
  public get(keys?: string): Promise<{ [key: string]: any }> {
    return browser.storage.sync.get(keys);
  }
}

export class Tab {
  public query(
    queryInfo: browser.Tabs.QueryQueryInfoType
  ): Promise<browser.Tabs.Tab[]> {
    return browser.tabs.query(queryInfo);
  }

  public sendMessage(
    tabId: number,
    message: any,
    options?: browser.Tabs.SendMessageOptionsType
  ): Promise<any> {
    return browser.tabs.sendMessage(tabId, message, options);
  }
}

export class Runtime {
  public onMessageAddListener(
    callback: (message: any, sender: browser.Runtime.MessageSender) => void
  ): void {
    browser.runtime.onMessage.addListener(callback);
  }
}
