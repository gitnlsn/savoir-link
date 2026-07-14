import { describe, expect, it } from "vitest";

import { CONTACT_MASK, maskContactInfo } from "~/lib/contact-mask";

describe("maskContactInfo", () => {
  describe("masks contact info", () => {
    const masked: Array<[string, string]> = [
      ["e-mail", "meu email x@y.com"],
      ["obfuscated e-mail", "nome arroba gmail ponto com"],
      ["phone with separators", "me liga 11 99999-8888"],
      ["phone in parens", "zap (11)99998888"],
      ["spaced-out digits", "9 9 9 9 9 8 8 8 8"],
      ["country code phone", "+55 11 99999 8888"],
      ["wa.me link", "chama no wa.me/5511999998888"],
      ["instagram handle", "me segue @meuinsta"],
      ["instagram url", "instagram.com/meuperfil"],
      ["http url", "veja https://meusite.com/contato"],
      ["spelled-out phone", "nove nove nove nove nove oito oito oito oito"],
      ["spelled DDD + number", "um um, nove nove nove nove nove oito sete seis"],
      ["spelled with meia", "meia meia sete oito nove um dois tres"],
      ["mixed word/digit", "nove nove 99998888"],
      ["english spelled", "nine nine nine eight seven six five four"],
    ];

    it.each(masked)("masks %s", (_label, input) => {
      const result = maskContactInfo(input);
      expect(result.masked).toBe(true);
      expect(result.text).toContain(CONTACT_MASK);
    });
  });

  describe("leaves legitimate content untouched", () => {
    const clean = [
      "Preciso reformar 2 quartos e 1 banheiro",
      "Área de 200m² para pintar",
      "Orçamento estimado de R$ 500",
      "Apartamento no apto 12, bloco A",
      "Quero dois quartos e uma sala reformados",
      "Instalação de chuveiro elétrico com fiação nova",
    ];

    it.each(clean)("keeps %j unchanged", (input) => {
      const result = maskContactInfo(input);
      expect(result.masked).toBe(false);
      expect(result.text).toBe(input);
    });
  });

  it("masks only the contact and preserves surrounding text", () => {
    const result = maskContactInfo("me liga 11 99999-8888 hoje");
    expect(result.text).toContain("me liga");
    expect(result.text).toContain("hoje");
    expect(result.text).not.toMatch(/\d{4}/);
  });
});
