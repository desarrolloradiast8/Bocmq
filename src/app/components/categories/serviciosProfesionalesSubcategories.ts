import imgAbogados from "figma:asset/b77867d031bd865f1f195713fd667b9b81cdbdb6.png";
import imgAgenciasMedios from "figma:asset/15622db4ca5eeeb973c7ea87d89b7f782edf3286.png";
import imgAgenciasPublicidad from "figma:asset/e02da445dc9705e73bebf996aa6ec5bd04cae7d6.png";
import imgArquitectos from "figma:asset/878f9fd9eaf978e78fc444b7c191e0c6394ec322.png";
import imgAuditores from "figma:asset/a3fba4fc57e1d26c817183182469a93a4a4f8a19.png";
import imgCapacitacion from "figma:asset/544e5c377587be08dded943867a2d9cfacb85d01.png";
import imgEmpresasConsultoras from "figma:asset/2156f220ea3cded055c02963d48d2e2df2c9f93e.png";
import imgEmpresasMarketingDigital from "figma:asset/6ed67a02dce7a0cc78a5ea8e4671737ad3b328f2.png";
import imgEscaparatismoMerchandising from "figma:asset/c29a07c7ce6a3ef57f638aeab2351847807e744c.png";
import imgFotografos from "figma:asset/91ab249fa119e1ce62f2eeef17482c194a5db79a.png";
import imgIngenieros from "figma:asset/3da24f98b6d7ada35e4a889214ab647960cd19f8.png";
import imgNotarias from "figma:asset/0f5043d63e00cda27b1949f70bfcc47c076daaaf.png";
import imgPeriodistas from "figma:asset/5f7f26997d44f8347eb340872d257b2e80941929.png";

export interface SubcategoryWithImage {
  name: string;
  image?: string;
}

export const serviciosProfesionalesSubcategories: SubcategoryWithImage[] = [
  { name: "Abogados", image: imgAbogados },
  { name: "Agencias de medios", image: imgAgenciasMedios },
  { name: "Agencias de publicidad", image: imgAgenciasPublicidad },
  { name: "Arquitectos", image: imgArquitectos },
  { name: "Auditores", image: imgAuditores },
  { name: "Capacitación", image: imgCapacitacion },
  { name: "Empresas consultoras", image: imgEmpresasConsultoras },
  { name: "Empresas de marketing digital", image: imgEmpresasMarketingDigital },
  { name: "Escaparatismo y merchandising", image: imgEscaparatismoMerchandising },
  { name: "Fotógrafos", image: imgFotografos },
  { name: "Ingenieros", image: imgIngenieros },
  { name: "Notarías", image: imgNotarias },
  { name: "Periodistas", image: imgPeriodistas },
];