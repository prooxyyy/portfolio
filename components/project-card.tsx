'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    website: string;
}

export function ProjectCard({ title, description, techStack, website }: ProjectCardProps) {
    return (
        <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{title}</h3>
                <Button variant="ghost" size="icon" asChild>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </Button>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                        {tech}
                    </Badge>
                ))}
            </div>
        </Card>
    );
}