const mix = require("laravel-mix");
mix.disableNotifications();

let browser = "chromium";
if (process.env.WEBCHAT_BLUR_BROWSER === "firefox") browser = "firefox";

switch (browser) {
  case "chromium":
  default:
    mix.setPublicPath('dist/chromium');
    mix.options({manifest: false});

    mix.ts("src/browsers/main.ts", "dist/chromium/popup.js");
    mix.sass("src/browsers/main.scss", "dist/chromium/main.css");
    mix.copy("src/browsers/main.html", "dist/chromium/popup.html");
    mix.copy("src/browsers/chromium/manifest.json", "dist/chromium/manifest.json");
    mix.copy("res/icon.png", "dist/chromium/icon.png");
    mix.copy("res/icon-16x16.png", "dist/chromium/icon-16x16.png");
    mix.copy("res/icon-48x48.png", "dist/chromium/icon-48x48.png");

    mix.ts("src/webchats/telegram/main.ts", "dist/chromium/web-telegram.js");
    mix.sass("src/webchats/telegram/main_k.scss", "dist/chromium/web-telegram-k.css");
    mix.sass("src/webchats/telegram/main_z.scss", "dist/chromium/web-telegram-z.css");
    mix.sass("src/webchats/telegram/main_old.scss", "dist/chromium/web-telegram-old.css");

    mix.ts("src/webchats/whatsapp/main.ts", "dist/chromium/web-whatsapp.js");
    mix.sass("src/webchats/whatsapp/main.scss", "dist/chromium/web-whatsapp.css");
    break;
  case "firefox":
    mix.setPublicPath('dist/firefox');
    mix.options({manifest: false});

    mix.ts("src/browsers/main.ts", "dist/firefox/popup.js");
    mix.sass("src/browsers/main.scss", "dist/firefox/main.css");
    mix.copy("src/browsers/main.html", "dist/firefox/popup.html");
    mix.copy("src/browsers/firefox/manifest.json", "dist/firefox/manifest.json");
    mix.copy("res/icon.png", "dist/firefox/icon.png");
    mix.copy("res/icon-16x16.png", "dist/firefox/icon-16x16.png");
    mix.copy("res/icon-48x48.png", "dist/firefox/icon-48x48.png");

    mix.ts("src/webchats/telegram/main.ts", "dist/firefox/web-telegram.js");
    mix.sass("src/webchats/telegram/main_k.scss", "dist/firefox/web-telegram-k.css");
    mix.sass("src/webchats/telegram/main_z.scss", "dist/firefox/web-telegram-z.css");
    mix.sass("src/webchats/telegram/main_old.scss", "dist/firefox/web-telegram-old.css");

    mix.ts("src/webchats/whatsapp/main.ts", "dist/firefox/web-whatsapp.js");
    mix.sass("src/webchats/whatsapp/main.scss", "dist/firefox/web-whatsapp.css");
    break;
}
