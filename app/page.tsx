'use client';

import {Separator} from '@/components/ui/separator';
import {HeroSection} from '@/components/hero-section';
import {AboutSection} from '@/components/about-section';
import {SkillsSection} from '@/components/skills-section';
import {ProjectsSection} from "@/components/projects-section";

export default function Home() {
    return (
        <main className="min-h-screen bg-background p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <HeroSection/>
                <Separator/>
                <AboutSection/>
                <ProjectsSection/>
                <SkillsSection/>
            </div>
        </main>
    );
}