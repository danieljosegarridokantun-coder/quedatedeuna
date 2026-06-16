'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { specificCourses } from '@/lib/academy-data'
import ModuleLessonList from '@/components/module-lesson-list'
import { CheckCircle2 } from 'lucide-react'

const courseBenefits = [
  'Acceso por 99 días',
  'Guías en PDF',
  'Videoclases completas del temario',
  'Guías de ejercicios + Video explicativo',
  '5 Simuladores descargables con explicación',
]

export function SpecificModulesView({ onCheckout }: { onCheckout: (plan: string) => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Módulos de Especialización
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Concéntrate en los temas cruciales para tu carrera. Cada módulo es un
            camino directo para dominar las materias más exigentes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {specificCourses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter text-gold">
                  {course.name}: {course.subtitle}
                </CardTitle>
                <CardDescription className="text-lg">
                  Pago único de $899 MXN
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <h4 className="mb-4 text-lg font-semibold tracking-tight">
                  ¿Qué incluye el blindaje?
                </h4>
                <ul className="space-y-3">
                  {courseBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold tracking-tight">
                    Contenido del curso:
                  </h4>
                  <ModuleLessonList modules={course.modules} />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => onCheckout(course.name)}
                >
                  Inscribirme a {course.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
