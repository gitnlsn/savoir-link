import { Globe, Handshake, MapPin, ShieldCheck } from "lucide-react";

// Feature/value band shown in place of vanity metrics — every claim reflects
// how the platform actually works (contact privacy, local matching, no
// commission, nationwide), so it holds up before there is any traction.
const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Contato protegido",
    text: "Seus dados nunca ficam públicos — só profissionais interessados recebem seu contato.",
  },
  {
    icon: MapPin,
    title: "Profissionais da sua região",
    text: "Encontre quem atende perto de você, em mais de 50 categorias de serviço.",
  },
  {
    icon: Handshake,
    title: "Sem comissão sobre o serviço",
    text: "Você negocia direto com o profissional. Não ficamos com uma parte do combinado.",
  },
  {
    icon: Globe,
    title: "Atendimento em todo o Brasil",
    text: "Publique de qualquer cidade e receba contatos de profissionais locais.",
  },
];

/** Value-proposition band highlighting how the platform works. */
export function Features() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface-container-lowest py-10 md:py-12">
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-label-lg font-bold text-on-surface">
                  {title}
                </h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
