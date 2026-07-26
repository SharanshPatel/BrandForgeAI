import { TemplateConfig, TemplateId } from "@/types";
import { ideaTemplate } from "./idea";
import { achievementTemplate } from "./achievement";
import { learningTemplate } from "./learning";
import { projectTemplate } from "./project";
import { problemTemplate } from "./problem";
import { opinionTemplate } from "./opinion";
import { dailyReflectionTemplate } from "./dailyReflection";
import { weeklyReflectionTemplate } from "./weeklyReflection";
import { customTemplate } from "./custom";

export const ALL_TEMPLATES: TemplateConfig[] = [
  ideaTemplate,
  achievementTemplate,
  learningTemplate,
  projectTemplate,
  problemTemplate,
  opinionTemplate,
  dailyReflectionTemplate,
  weeklyReflectionTemplate,
  customTemplate,
];

export function getAllTemplates(): TemplateConfig[] {
  return ALL_TEMPLATES;
}

export function getTemplateById(id: string): TemplateConfig {
  const found = ALL_TEMPLATES.find((t) => t.id === id);
  if (found) return found;

  // Fallback map check for hyphenated variations
  const normalizedId = id.toLowerCase().replace(/_/g, "-");
  const fallback = ALL_TEMPLATES.find((t) => t.id === (normalizedId as TemplateId));
  
  return fallback || ideaTemplate;
}

export {
  ideaTemplate,
  achievementTemplate,
  learningTemplate,
  projectTemplate,
  problemTemplate,
  opinionTemplate,
  dailyReflectionTemplate,
  weeklyReflectionTemplate,
  customTemplate,
};
