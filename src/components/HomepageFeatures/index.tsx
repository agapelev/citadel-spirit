import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  imgUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Shekinah Cloud Mission',
    imgUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800',
    description: (
      <>
      Глобальная миссия по распространению цифрового света. Мы строим
      отказоустойчивые облачные системы, служащие вечным истинам.
      </>
    ),
  },
{
  title: 'Supreme WebDev',
  imgUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
  description: (
    <>
    Архитектурное совершенство на базе Analog.js и современных технологий.
    Создание цифровых интерфейсов как акта созидания и порядка.
    </>
  ),
},
{
  title: 'AI Genesis & Gemini',
  imgUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  description: (
    <>
    Симбиоз человеческого духа и искусственного интеллекта. Интеграция
    высших вычислений для решения задач Цитадели.
    </>
  ),
},
];

function Feature({title, imgUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4 mb-8')}>
    {/* Контейнер изображения с эффектом неона при наведении */}
    <div className="flex justify-center group">
    <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] shadow-lg">
    <img
    src={imgUrl}
    className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
    alt={title}
    />
    {/* Наложение градиента для мистического эффекта */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f011a] via-transparent to-transparent opacity-60" />
    </div>
    </div>

    <div className="text--center px-4 mt-6">
    <Heading as="h3" className="text-cyan-400 italic font-bold tracking-tight text-2xl mb-3">
    {title}
    </Heading>
    <p className="text-slate-300/80 leading-relaxed font-medium">
    {description}
    </p>
    </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="py-16 bg-[#0f011a]">
    <div className="container mx-auto">
    <div className="row">
    {FeatureList.map((props, idx) => (
      <Feature key={idx} {...props} />
    ))}
    </div>
    </div>
    </section>
  );
}
