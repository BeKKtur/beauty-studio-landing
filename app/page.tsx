import Image from "next/image";

const whatsappNumber = "996552320914";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Здравствуйте! Хочу записаться в Beauty Studio."
)}`;

const contacts = {
  address: "г. Бишкек, ул. Исанова 87",
  phone: "+996 552 320 914",
  instagram: "@beauty.studio",
  whatsapp: "+996 552 320 914"
};

const services = [
  {
    title: "Маникюр",
    description: "Ухоженные руки, стойкое покрытие и аккуратная форма под ваш стиль.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Стрижка",
    description: "Форма, которая легко укладывается и красиво подчеркивает черты лица.",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Окрашивание",
    description: "Мягкие оттенки, сияние волос и бережные профессиональные составы.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Макияж",
    description: "Свежий дневной образ или выразительный вечерний макияж для события.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Брови",
    description: "Архитектура, коррекция и окрашивание для естественного результата.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85"
  }
];

const prices = [
  {
    service: "Маникюр с покрытием",
    description: "Комбинированная обработка, выравнивание и стойкое цветное покрытие.",
    price: "от 1 500 сом"
  },
  {
    service: "Женская стрижка",
    description: "Подбор формы, мытье головы, стрижка и легкая укладка.",
    price: "от 1 200 сом"
  },
  {
    service: "Окрашивание волос",
    description: "Консультация по оттенку, бережное окрашивание и уход после процедуры.",
    price: "от 4 500 сом"
  },
  {
    service: "Вечерний макияж",
    description: "Стойкий образ для события с акцентом на свежесть и выразительность.",
    price: "от 2 500 сом"
  },
  {
    service: "Коррекция и окрашивание бровей",
    description: "Архитектура формы, аккуратная коррекция и мягкое окрашивание.",
    price: "от 900 сом"
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85"
];

const reviews = [
  {
    name: "Айсулуу",
    text: "Очень светлый и спокойный салон. Маникюр держится идеально, а мастер помогла выбрать нежный оттенок."
  },
  {
    name: "Элина",
    text: "После окрашивания волосы выглядят живыми и блестящими. Атмосфера такая, что хочется вернуться."
  },
  {
    name: "Мээрим",
    text: "Делала макияж на мероприятие. Получилось свежо, красиво и совсем не тяжело на лице."
  }
];

const navItems = ["Услуги", "Цены", "Галерея", "Отзывы", "Контакты"];

export default function Home() {
  return (
    <main className="overflow-hidden text-ink">
      <header className="sticky top-0 z-50 mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl sm:mt-5 sm:w-[calc(100%-4rem)] sm:px-6">
        <a className="text-lg font-semibold tracking-normal text-cocoa" href="#">
          Beauty Studio
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
          {navItems.map((item) => (
            <a className="transition duration-300 hover:text-blush-600" href={`#${slugify(item)}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <a
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-blush-600"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          WhatsApp
        </a>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-white/80 bg-white/[0.72] px-4 py-2 text-sm font-medium text-cocoa shadow-sm backdrop-blur">
            Салон красоты в Бишкеке
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Красота начинается с заботы о себе
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">
            Beauty Studio создает мягкие, современные образы: аккуратный маникюр, сияющие
            волосы, выразительные брови и макияж, в котором вы остаетесь собой.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="premium-button whatsapp-pulse inline-flex items-center justify-center rounded-full bg-blush-500 px-7 py-4 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-blush-600"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="relative z-10">Записаться в WhatsApp</span>
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/[0.72] px-7 py-4 text-base font-semibold text-cocoa shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:bg-white"
              href="#uslugi"
            >
              Смотреть услуги
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["5+", "лет опыта"],
              ["1 200+", "клиентов"],
              ["4.9", "рейтинг"]
            ].map(([value, label]) => (
              <div className="rounded-3xl border border-white/70 bg-white/[0.55] p-4 text-center shadow-sm backdrop-blur" key={label}>
                <p className="text-2xl font-semibold text-ink">{value}</p>
                <p className="mt-1 text-xs font-medium text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-blush-200/60 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-champagne/80 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/[0.72] p-3 shadow-premium backdrop-blur">
            <Image
              alt="Светлый интерьер салона красоты"
              className="h-[430px] w-full rounded-[1.75rem] object-cover saturate-[1.03] sm:h-[585px]"
              height={900}
              priority
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=90"
              width={1200}
            />
            <div className="absolute left-7 top-7 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold text-cocoa shadow-card backdrop-blur-xl">
              Premium care
            </div>
            <div className="absolute bottom-7 left-7 right-7 rounded-[1.6rem] border border-white/75 bg-white/[0.82] p-5 shadow-card backdrop-blur-xl">
              <p className="text-sm font-medium text-stone-500">Свободные окна на этой неделе</p>
              <p className="mt-1 text-2xl font-semibold text-ink">Маникюр, волосы, брови</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="uslugi" eyebrow="Что мы делаем" title="Услуги для легкого, ухоженного образа">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              className="group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/[0.78] shadow-card backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-blush-100 hover:shadow-premium"
              key={service.title}
            >
              <Image
                alt={service.title}
                className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                height={360}
                src={service.image}
                width={500}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="ceny" eyebrow="Прайс" title="Прозрачные цены на любимые процедуры">
        <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/[0.82] shadow-premium backdrop-blur">
          {prices.map((item) => (
            <div
              className="grid gap-5 border-b border-stone-100/80 px-5 py-6 transition duration-300 last:border-b-0 hover:bg-blush-50/[0.55] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:px-8 sm:py-7"
              key={item.service}
            >
              <div>
                <p className="text-lg font-semibold text-ink">{item.service}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-500">{item.description}</p>
              </div>
              <p className="text-xl font-semibold text-cocoa sm:pt-0.5 sm:text-right">{item.price}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="galereya" eyebrow="Работы" title="Нежная галерея образов и деталей">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((image, index) => (
            <Image
              alt={`Работа Beauty Studio ${index + 1}`}
              className="aspect-[4/5] w-full rounded-[1.75rem] border border-white/80 object-cover shadow-card transition duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-premium"
              height={720}
              key={image}
              src={image}
              width={576}
            />
          ))}
        </div>
      </Section>

      <Section id="otzyvy" eyebrow="Отзывы" title="Клиенты ценят атмосферу и результат">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article className="rounded-[1.75rem] border border-white/80 bg-white/[0.78] p-7 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium" key={review.name}>
              <div className="mb-5 flex text-blush-500" aria-hidden="true">
                {"★★★★★"}
              </div>
              <p className="text-base leading-7 text-stone-700">“{review.text}”</p>
              <p className="mt-6 font-semibold text-ink">{review.name}</p>
            </article>
          ))}
        </div>
      </Section>

      <section
        className="reveal-section mx-auto mb-10 mt-12 w-full max-w-7xl px-5 sm:mb-14 sm:mt-16 sm:px-8"
        id="kontakty"
      >
        <div className="grid overflow-hidden rounded-[2.25rem] bg-ink text-white shadow-premium lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blush-200">Контакты</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">
              Запишитесь на удобное время
            </h2>
            <a
              className="premium-button mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:bg-blush-100"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="relative z-10">Записаться в WhatsApp</span>
            </a>
          </div>
          <div className="grid gap-3 bg-white/[0.06] p-7 sm:grid-cols-2 sm:p-10 lg:p-12">
            <ContactCard label="Адрес" value={contacts.address} />
            <ContactCard label="Телефон" value={contacts.phone} href={`tel:${contacts.phone.replaceAll(" ", "")}`} />
            <ContactCard label="Instagram" value={contacts.instagram} href="https://instagram.com/" />
            <ContactCard label="WhatsApp" value={contacts.whatsapp} href={whatsappUrl} />
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  children,
  eyebrow,
  id,
  title
}: {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  title: string;
}) {
  return (
    <section className="reveal-section mx-auto w-full max-w-7xl px-5 py-[4.5rem] sm:px-8 sm:py-24" id={id}>
      <div className="mb-10 max-w-2xl sm:mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blush-500">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ContactCard({ href, label, value }: { href?: string; label: string; value: string }) {
  const content = (
    <div className="h-full rounded-3xl border border-white/10 bg-white/10 p-5 transition hover:bg-white/15">
      <p className="text-sm text-white/55">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} rel="noreferrer" target={href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </a>
  );
}

function slugify(value: string) {
  const dictionary: Record<string, string> = {
    Услуги: "uslugi",
    Цены: "ceny",
    Галерея: "galereya",
    Отзывы: "otzyvy",
    Контакты: "kontakty"
  };

  return dictionary[value] ?? value.toLowerCase();
}
