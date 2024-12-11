'use client';

import { Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Terminal className="h-6 w-6" />
        About Me
      </h2>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Senior Software Engineer and DevOps specialist with extensive experience in building and deploying scalable applications. 
          Passionate about cloud architecture, automation, and implementing efficient CI/CD pipelines. 
          Proven track record in leading teams and delivering high-performance solutions across multiple technology stacks.
        </p>
      </Card>
    </section>
  );
}