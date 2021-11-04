export default class Elements {
  private globalCheckbox: HTMLInputElement | null;
  private webWhatsappCheckbox: HTMLInputElement | null;
  private webTelegramCheckbox: HTMLInputElement | null;

  public readElements(): void {
    this.globalCheckbox = this.getInputElementById("checkbox-global");
    this.webWhatsappCheckbox = this.getInputElementById(
      "checkbox-web-whatsapp"
    );
    this.webTelegramCheckbox = this.getInputElementById(
      "checkbox-web-telegram"
    );
  }

  get globalCheckStatus(): boolean {
    return this.globalCheckbox.checked;
  }

  set globalCheckStatus(checked: boolean) {
    this.globalCheckbox.checked = checked;
  }

  public globalUncheck(): void {
    this.globalCheckbox.removeAttribute("checked");
    this.globalCheckbox.checked = false;
    this.whatsAppUncheck();
    this.telegramUncheck();
  }

  public globalCheck(): void {
    this.globalCheckbox.setAttribute("checked", "checked");
    this.globalCheckbox.checked = true;
    this.whatsAppCheck();
    this.telegramCheck();
  }

  public globalOnChangeListener(listener: (ev: Event) => any) {
    this.globalCheckbox.addEventListener("change", listener);
  }

  get whatsAppCheckStatus(): boolean {
    return this.webWhatsappCheckbox.checked;
  }

  set whatsAppCheckStatus(checked: boolean) {
    this.webWhatsappCheckbox.checked = checked;
  }

  public whatsAppUncheck(): void {
    this.webWhatsappCheckbox.removeAttribute("checked");
    this.webWhatsappCheckbox.checked = false;
  }

  public whatsAppDisable(): void {
    this.webWhatsappCheckbox.setAttribute("disabled", "disabled");
    this.webWhatsappCheckbox.disabled = true;
  }

  public whatsAppCheck(): void {
    this.webWhatsappCheckbox.setAttribute("checked", "checked");
    this.webWhatsappCheckbox.checked = true;
  }

  public whatsAppEnable(): void {
    this.webWhatsappCheckbox.removeAttribute("disabled");
    this.webWhatsappCheckbox.disabled = false;
  }

  public whatsAppOnChangeListener(listener: (ev: Event) => any) {
    this.webWhatsappCheckbox.addEventListener("change", listener);
  }

  get telegramCheckStatus(): boolean {
    return this.webTelegramCheckbox.checked;
  }

  set telegramCheckStatus(checked: boolean) {
    this.webTelegramCheckbox.checked = checked;
  }

  public telegramUncheck(): void {
    this.webTelegramCheckbox.removeAttribute("checked");
    this.webTelegramCheckbox.checked = false;
  }

  public telegramDisable(): void {
    this.webTelegramCheckbox.setAttribute("disabled", "disabled");
    this.webTelegramCheckbox.disabled = true;
  }

  public telegramCheck(): void {
    this.webTelegramCheckbox.setAttribute("checked", "checked");
    this.webTelegramCheckbox.checked = true;
  }

  public telegramEnable(): void {
    this.webTelegramCheckbox.removeAttribute("disabled");
    this.webTelegramCheckbox.disabled = false;
  }

  public telegramOnChangeListener(listener: (ev: Event) => any) {
    this.webTelegramCheckbox.addEventListener("change", listener);
  }

  protected getInputElementById(elementId: string): HTMLInputElement | null {
    let _element = document.getElementById(elementId);
    if (_element instanceof HTMLInputElement) return _element;
    return null;
  }
}
