import MainLayout from '../../Layouts/MainLayout';
import Carousel from '../../shared/components/Carousel';
import PageHeader from '../../shared/components/PageHeader';
import { supporters } from '../../shared/data/media';

export default function SupportersIndex() {
    return (
        <MainLayout>
            <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
                <PageHeader
                    eyebrow="ATBALSTĪTĀJI"
                    title="Mūsu atbalstītāji"
                    description="Paldies atbalstītājiem!"
                />

                <div className="mt-10">
                    <Carousel
                        items={supporters}
                        ariaLabel="Atbalstītāju karuselis"
                        renderItem={(supporter) => (
                            <article className="relative min-h-[28rem] overflow-hidden bg-slate-900">
                                <img
                                    src={supporter.image}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover opacity-45"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

                                <div className="relative flex min-h-[28rem] max-w-2xl flex-col justify-end p-8 sm:p-12">
                                    {supporter.website ? (
                                        <a
                                            href={supporter.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mb-6 inline-block w-fit"
                                            aria-label={`Atvērt ${supporter.name} mājaslapu`}
                                        >
                                            <img
                                                src={supporter.logo}
                                                alt={`${supporter.name} logotips`}
                                                className="max-h-24 w-full object-contain transition hover:scale-110"
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={supporter.logo}
                                            alt={`${supporter.name} logotips`}
                                            className="mb-6 h-20 w-40 rounded-xl bg-white object-contain p-3"
                                        />
                                    )}

                                    <h2 className="text-3xl font-black sm:text-4xl">
                                        {supporter.name}
                                    </h2>

                                    <p className="mt-4 text-lg leading-8 text-white/75">
                                        {supporter.description}
                                    </p>

                                    {supporter.website && (
                                        <a
                                            href={supporter.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 w-fit text-cyan-300 transition hover:text-cyan-200"
                                        >
                                            Apmeklēt mājaslapu →
                                        </a>
                                    )}
                                </div>
                            </article>
                        )}
                    />
                </div>


                <div className="mt-14">
                    <h2 className="text-2xl font-black">
                        Visi sponsori un partneri
                    </h2>

                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {supporters.map((supporter) => (
                            <div
                                key={supporter.id}
                                className="flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10"
                            >
                                {supporter.website ? (
                                    <a
                                        href={supporter.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-full w-full items-center justify-center"
                                        aria-label={`Atvērt ${supporter.name} mājaslapu`}
                                    >
                                        <img
                                            src={supporter.logo}
                                            alt={`${supporter.name} logotips`}
                                            loading="lazy"
                                            className="max-h-24 max-w-full object-contain transition hover:scale-110"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={supporter.logo}
                                        alt={`${supporter.name} logotips`}
                                        loading="lazy"
                                        className="max-h-24 w-full object-contain"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
