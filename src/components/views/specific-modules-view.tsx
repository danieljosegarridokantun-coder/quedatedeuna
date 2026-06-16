// src/components/views/specific-modules-view.tsx
import React from 'react';
import { specificCourses } from '@/lib/academy-data';
import ModuleLessonList from '@/components/module-lesson-list';

// Definimos los tipos para las props del componente
interface SpecificModulesViewProps {
  onCheckout: (courseName: string) => void;
}

export const SpecificModulesView: React.FC<SpecificModulesViewProps> = ({ onCheckout }) => {
  const ingenieriaCourse = specificCourses.find(course => course.id === 'ingenieria');
  const medicinaCourse = specificCourses.find(course => course.id === 'medicina');

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Módulos Específicos</h2>
      <div className="space-y-16">
        {ingenieriaCourse && (
          <div>
            <h3 className="text-3xl font-bold mb-2 text-center text-blue-400">{ingenieriaCourse.name} - {ingenieriaCourse.subtitle}</h3>
            <p className="text-center text-gray-400 mb-6">{ingenieriaCourse.type} / Acceso por {ingenieriaCourse.duration}</p>
            <ModuleLessonList modules={ingenieriaCourse.modules} />
            <div className="text-center mt-6">
              <button onClick={() => onCheckout(ingenieriaCourse.name)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Adquirir curso de {ingenieriaCourse.name}
              </button>
            </div>
          </div>
        )}
        {medicinaCourse && (
          <div>
            <h3 className="text-3xl font-bold mb-2 text-center text-teal-300">{medicinaCourse.name} - {medicinaCourse.subtitle}</h3>
            <p className="text-center text-gray-400 mb-6">{medicinaCourse.type} / Acceso por {medicinaCourse.duration}</p>
            <ModuleLessonList modules={medicinaCourse.modules} />
            <div className="text-center mt-6">
              <button onClick={() => onCheckout(medicinaCourse.name)} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg">
                Adquirir curso de {medicinaCourse.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};