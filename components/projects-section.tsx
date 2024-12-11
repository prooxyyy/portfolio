'use client';

import { Code2 } from 'lucide-react';
import { ProjectCard } from './project-card';
import { projects } from '@/lib/config/projects';

export function ProjectsSection() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Code2 className="h-6 w-6" />
                Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        website={project.website}
                    />
                ))}
            </div>
        </section>
    );
}