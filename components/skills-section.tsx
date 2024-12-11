'use client';

import { TerminalSquare } from 'lucide-react';
import { SkillCard } from './skill-card';
import { skillCategories } from '@/lib/config/skills';

export function SkillsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <TerminalSquare className="h-6 w-6" />
        Technical Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCard 
            key={category.name} 
            name={category.name} 
            skills={category.skills} 
          />
        ))}
      </div>
    </section>
  );
}