// src/components/module-lesson-list.tsx
import React from 'react';
import { PlayCircle, FileText } from 'lucide-react';

// Agregamos 'readonly' a las propiedades para que acepte la data congelada
interface Lesson {
  readonly name: string;
  readonly type: string;
  readonly duration?: string;
  readonly wordCount?: number;
}

interface Module {
  readonly name: string;
  readonly slug?: string;
  readonly lessons: readonly Lesson[]; // <-- Esta es la línea mágica
}

interface ModuleLessonListProps {
  readonly modules: readonly Module[];
}

const ModuleLessonList: React.FC<ModuleLessonListProps> = ({ modules }) => {

  // Unimos los iconos en un solo componente para simplificar
  const LessonIcon: React.FC<{ type: string }> = ({ type }) => {
    if (type === 'video') {
      return <PlayCircle className="h-5 w-5 text-blue-500" />;
    }
    return <FileText className="h-5 w-5 text-green-500" />;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {modules.map((module) => (
        <div key={module.slug} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{module.name}</h2>
          <ul className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
            {module.lessons.map((lesson, index) => (
              <li key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <div className="flex items-center">
                  <LessonIcon type={lesson.type} />
                  <span className="ml-4 text-gray-700 dark:text-gray-300">{lesson.name}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lesson.type === 'video' ? lesson.duration : `${lesson.wordCount} palabras`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ModuleLessonList;
