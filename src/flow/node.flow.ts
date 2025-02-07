import BotWhatsapp from "@bot-whatsapp/bot";

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
  .addAnswer(
    "¿Como es tu email? lo necesito para generar link de",
    { capture: true },
    async (ctx, { state, fallBack }) => {
      if (!ctx.body.includes("@")) {
        return fallBack("Eyy!bro esto no es un email valido! ponte serio");
      }
      await state.update({ email: ctx.body.toLowerCase() });
    }
  )
  .addAnswer("...generando link de pago de curso de node");
