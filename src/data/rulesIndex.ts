import { rulesContent } from './rulesContent1';
import { rulesContent2 } from './rulesContent2';
import { rulesContent3 } from './rulesContent3';
import { groups } from './ruleGroups';

export const allRules = [...rulesContent, ...rulesContent2, ...rulesContent3];

export const bySlug = new Map(allRules.map((rule) => [rule.slug, rule]));

export function rulesOfGroup(groupId: string) {
  const group = groups.find((item) => item.id === groupId);

  if (!group) return [];

  return group.ids
    .map((id) => allRules.find((rule) => rule.id === id))
    .filter((rule): rule is (typeof allRules)[number] => Boolean(rule));
}

export function neighbourRule(id: number) {
  const index = allRules.findIndex((rule) => rule.id === id);

  return {
    previous: index > 0 ? allRules[index - 1] : null,
    next: index >= 0 && index < allRules.length - 1 ? allRules[index + 1] : null,
  };
}
