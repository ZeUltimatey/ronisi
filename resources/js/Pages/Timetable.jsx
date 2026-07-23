import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { timetable } from '../ronisiContent';

export default function Timetable() {
    const days = Object.keys(timetable);
    const [selectedDay, setSelectedDay] = useState(days[0]);

    return (
        <MainLayout>
            <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">

                <p className="font-bold uppercase tracking-[.3em] text-cyan-300">
                    Pasākuma norise
                </p>

                <h1 className="mt-4 text-4xl font-black md:text-6xl">
                    Laika plāns
                </h1>

                <p className="mt-5 max-w-3xl text-lg text-slate-300">
                    Izvēlies dienu, lai apskatītu tās programmu.
                </p>


                {/* Day selector */}
                <div className="mt-8 flex flex-wrap gap-3">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`
                rounded-full px-6 py-3 font-bold transition
                ${
                                selectedDay === day
                                    ? 'bg-cyan-400 text-black'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }
              `}
                        >
                            {day}
                        </button>
                    ))}
                </div>


                {/* Schedule */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">

                    {timetable[selectedDay].map((item, index) => (
                        <article
                            key={`${item.time}-${item.title}`}
                            className={`
                grid gap-3 p-5
                md:grid-cols-[11rem_1fr_15rem]
                md:items-center
                ${index ? 'border-t border-white/10' : ''}
              `}
                        >
                            <time className="font-black text-cyan-300">
                                {item.time}
                            </time>

                            <h2 className="text-xl font-bold">
                                {item.title}
                            </h2>

                            <p className="text-slate-400 md:text-right">
                                {item.place}
                            </p>

                        </article>
                    ))}

                </div>

            </section>
        </MainLayout>
    );
}
