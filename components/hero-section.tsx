'use client';

import { Github, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src="https://avatars.githubusercontent.com/u/94528892?v=4"
            alt="Denys"
            width={100}
            height={100}
            className="rounded-full border-2 border-primary"
          />
          <div>
            <h1 className="text-4xl font-bold text-primary">Denys</h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <MapPin size={16} />
              <span>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/prooxyyy" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://t.me/proo0xy" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5"/>
            </a>
          </Button>
        </div>
      </div>
      <p className="text-xl text-muted-foreground">
        Senior Software Engineer & DevOps Specialist
      </p>
    </section>
  );
}