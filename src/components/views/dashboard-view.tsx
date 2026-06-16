// src/components/views/dashboard-view.tsx
"use client"

import React, { useState } from 'react'
import { specificCourses } from '@/lib/academy-data'
import ModuleLessonList from '@/components/module-lesson-list'

const allModules = specificCourses.flatMap(course => 
  course.modules.map(module => ({
    ...module,
    description: course.subtitle,
    courseId: course.id
  }))
);

interface Lesson {
  name: string;
  type: string;
  duration?: string;
  wordCount?: number;
}

interface Module {
  slug: string;
  name: string;
  description: string;
  lessons: readonly Lesson[];
  courseId: string;
}

interface SidebarProps {
  activeModule: Module | null;
  setActiveModule: (module: Module) => void;
  onExit: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule, onExit }) => (
  <aside className="flex flex-col w-80 border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
    <div className="flex h-14 items-center justify-between px-6 border-b border-sidebar-border">
      <h1 className="text-xl font-bold">Mis Cursos</h1>
      <button
        onClick={onExit}
        className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        Salir
      </button>
    </div>
    <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
      {allModules.map(module => (
        <button
          key={module.slug}
          onClick={() => setActiveModule(module as any)}
          className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            activeModule?.slug === module.slug
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'hover:bg-sidebar-accent/50'
          }`}
        >
          {module.name}
        </button>
      ))}
    </nav>
  </aside>
);

interface MainContentProps {
  module: Module | null;
}

const MainContent: React.FC<MainContentProps> = ({ module }) => {
    if (!module) {
        return (
            <div className="flex h-full items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Bienvenido a tu Dashboard</h2>
                    <p className="mt-2 text-muted-foreground">Selecciona un módulo para comenzar tu preparación.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-foreground">{module.name}</h1>
            <p className="mt-2 text-xl text-muted-foreground">{module.description}</p>
            <div className="mt-8">
                <ModuleLessonList modules={[module]} />
            </div>
        </div>
    )
}

interface DashboardViewProps {
  onExit: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onExit }) => {
  const [activeModule, setActiveModule] = useState<Module | null>(allModules[0] as any || null);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} onExit={onExit} />
      <main className="flex-1 overflow-y-auto">
        <MainContent module={activeModule} />
      </main>
    </div>
  )
}
