import { TemplateConfig } from "@/types";
import { ALL_TEMPLATES, getTemplateById as getRegTemplate, getAllTemplates } from "@/lib/templates";

export const TEMPLATES_DATA: TemplateConfig[] = ALL_TEMPLATES;

export function getTemplateById(id: string): TemplateConfig {
  return getRegTemplate(id);
}
