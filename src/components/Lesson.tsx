import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonPropsInterface {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonPropsInterface) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return (
        <a href={props.slug} className="text-gray-300">
            <span>
                {availableDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className="text-xs text-white font-bold rounded py-[0.125rem] px-2 border border-green-300">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}