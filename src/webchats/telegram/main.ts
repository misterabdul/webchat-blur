import { Runtime } from "../../browser-api";
import Settings from "../../configs/settings";
import Utils from "../utils";

const utils = new Utils();
const runtime = new Runtime();

utils.readSettings(Settings.CONFIG_WEBCHAT_BLUR_DISABLE);
runtime.onMessageAddListener((request, sender) => {
  const message = request["message"];
  switch (message) {
    case Settings.MESSAGE_WEBCHAT_BLUR_DISABLE:
    case Settings.MESSAGE_WEBCHAT_BLUR_ENABLE:
      utils.readSettings(Settings.CONFIG_WEBCHAT_BLUR_DISABLE);
      break;
    case Settings.MESSAGE_WEBTELEGRAM_BLUR_DISABLE:
    case Settings.MESSAGE_WEBTELEGRAM_BLUR_ENABLE:
      utils.readSettings(Settings.CONFIG_WEBTELEGRAM_BLUR_DISABLE);
      break;
    default:
      break;
  }
});
