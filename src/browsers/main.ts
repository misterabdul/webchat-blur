import Settings from "../configs/settings";
import Configs from "./configs";
import Elements from "./elements";
import Message from "./message";

const elements = new Elements();
const message = new Message();
const configs = new Configs();

configs.readConfig().then((value) => {
  elements.readElements();

  if (value[Settings.CONFIG_WEBCHAT_BLUR_DISABLE] === true) {
    elements.globalUncheck();
  } else {
    if (value[Settings.CONFIG_WEBWHATSAPP_BLUR_DISABLE] === true) {
      elements.whatsAppUncheck();
    }
    if (value[Settings.CONFIG_WEBTELEGRAM_BLUR_DISABLE] === true) {
      elements.telegramUncheck();
    }
  }

  elements.globalOnChangeListener((ev) => {
    if (elements.globalCheckStatus) {
      configs.globalSetConfigEnable();
      message.sendTriggerWhatsApp(Settings.MESSAGE_WEBCHAT_BLUR_ENABLE);
      message.sendTriggerTelegram(Settings.MESSAGE_WEBCHAT_BLUR_ENABLE);
      elements.whatsAppCheck();
      elements.whatsAppEnable();
      elements.telegramCheck();
      elements.telegramEnable();
    } else {
      configs.globalSetConfigDisable();
      message.sendTriggerWhatsApp(Settings.MESSAGE_WEBCHAT_BLUR_DISABLE);
      message.sendTriggerTelegram(Settings.MESSAGE_WEBCHAT_BLUR_DISABLE);
      elements.whatsAppUncheck();
      elements.whatsAppDisable();
      elements.telegramUncheck();
      elements.telegramDisable();
    }
  });

  elements.whatsAppOnChangeListener((ev) => {
    if (elements.whatsAppCheckStatus) {
      configs.whatsappSetConfigEnable();
      message.sendTriggerWhatsApp(Settings.MESSAGE_WEBWHATSAPP_BLUR_ENABLE);
      elements.whatsAppCheck();
    } else {
      configs.whatsappSetConfigDisable();
      message.sendTriggerWhatsApp(Settings.MESSAGE_WEBWHATSAPP_BLUR_DISABLE);
      elements.whatsAppUncheck();
    }
  });

  elements.telegramOnChangeListener((ev) => {
    if (elements.telegramCheckStatus) {
      configs.telegramSetConfigEnable();
      message.sendTriggerTelegram(Settings.MESSAGE_WEBTELEGRAM_BLUR_ENABLE);
      elements.telegramCheck();
    } else {
      configs.telegramSetConfigDisable();
      message.sendTriggerTelegram(Settings.MESSAGE_WEBTELEGRAM_BLUR_DISABLE);
      elements.telegramUncheck();
    }
  });

  window.setTimeout(() => {
    const splash = document.getElementById("splash");
    splash.classList.add("done");
  }, 300);
});
