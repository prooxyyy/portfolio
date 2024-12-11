'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  name: string;
  skills: string[];
}

export function SkillCard({ name, skills }: SkillCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="hover:bg-accent transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}