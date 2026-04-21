import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const schedule = [
  {
    time: "10:00 – 11:30",
    emoji: "👋",
    title: "Знакомство с компанией и командами",
    desc: "Расскажем о миссии, ценностях и познакомим с каждой командой лично",
    border: "#2e3f8a",
    bg: "#1e3178",
  },
  {
    time: "11:30 – 13:00",
    emoji: "🍽️",
    title: "Обед и нетворкинг",
    desc: "Неформальное общение, вкусный обед и новые знакомства в приятной атмосфере",
    border: "#2e3f8a",
    bg: "#1e3178",
  },
  {
    time: "13:00 – 14:30",
    emoji: "🛠️",
    title: "Инструменты и процессы",
    desc: "Покажем все рабочие инструменты, расскажем о процессах и как всё устроено",
    border: "#2e3f8a",
    bg: "#1e3178",
  },
  {
    time: "14:30 – 16:00",
    emoji: "💬",
    title: "Q&A с основателями",
    desc: "Открытый разговор с основателями — любые вопросы, честные ответы",
    border: "#2e3f8a",
    bg: "#1e3178",
  },
];

const departments = [
  "Разработка",
  "Дизайн",
  "Маркетинг",
  "Продажи",
  "HR",
  "Финансы",
  "Операции",
  "Другое",
];

export default function Index() {
  const [form, setForm] = useState({ name: "", department: "", startDate: "" });
  const [submitted, setSubmitted] = useState(false);
  const countdown = useCountdown(new Date("2026-05-15T10:00:00"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-golos" style={{ background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6e 60%, #0d1a4a 100%)" }}>
      {/* Decorative blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #FFD200 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #FFD200 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      {/* HEADER */}
      <header className="relative px-6 pt-8 flex justify-center">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#FFD200" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="10,2 12.4,7.5 18.5,7.5 13.8,11.3 15.6,17 10,13.5 4.4,17 6.2,11.3 1.5,7.5 7.6,7.5" fill="#1A2A5E"/>
            </svg>
          </div>
          <span className="text-xl font-black tracking-wide" style={{ color: "#FFD200" }}>СТОЛОТО</span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-12 pb-16 text-center max-w-3xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(255,210,0,0.15)", color: "#FFD200", border: "1px solid rgba(255,210,0,0.3)" }}>
            <Icon name="Sparkles" size={14} />
            Для тех, кто вышел в апреле и мае
          </span>
        </div>

        <h1 className="animate-fade-up text-5xl md:text-6xl font-black leading-tight mb-3"
          style={{ animationDelay: "0.1s", color: "#ffffff" }}>
          Onboarding
          <span className="font-caveat block text-6xl md:text-7xl mt-1"
            style={{ color: "#FFD200" }}>
            Day ✨
          </span>
        </h1>

        <p className="animate-fade-up text-lg mb-8 max-w-md mx-auto"
          style={{ animationDelay: "0.2s", color: "rgba(255,255,255,0.6)" }}>
          Тёплая встреча для новых коллег — знакомства, обед и всё, что нужно знать о компании
        </p>

        {/* Countdown */}
        <div className="animate-fade-up flex justify-center gap-3 mb-10"
          style={{ animationDelay: "0.25s" }}>
          {[
            { value: countdown.days, label: "дней" },
            { value: countdown.hours, label: "часов" },
            { value: countdown.minutes, label: "минут" },
            { value: countdown.seconds, label: "секунд" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center px-4 py-3 rounded-2xl min-w-[64px]"
              style={{ background: i === 3 ? "rgba(255,210,0,0.12)" : "rgba(255,255,255,0.07)", border: i === 3 ? "1px solid rgba(255,210,0,0.4)" : "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-2xl font-black tabular-nums leading-none" style={{ color: i === 3 ? "#FFD200" : "#ffffff" }}>
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.3s" }}>
          {[
            { icon: "Calendar", text: "15 мая 2026", sub: "10:00 – 16:00" },
            { icon: "MapPin", text: "Переговорная «Альфа»", sub: "Офис, 3 этаж" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 px-5 py-4 rounded-2xl text-left"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,210,0,0.2)", boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,210,0,0.15)" }}>
                <Icon name={item.icon} size={18} style={{ color: "#FFD200" }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "#ffffff" }}>{item.text}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <h2 className="animate-fade-up text-center text-3xl font-bold mb-2"
          style={{ animationDelay: "0.4s", color: "#ffffff" }}>
          Программа дня
        </h2>
        <p className="animate-fade-up text-center text-sm mb-10"
          style={{ animationDelay: "0.45s", color: "rgba(255,255,255,0.5)" }}>
          4 блока по 1,5 часа — насыщенно и без лишней воды
        </p>

        <div className="relative">
          <div className="absolute left-7 top-4 bottom-4 w-0.5 rounded-full hidden sm:block"
            style={{ background: "linear-gradient(180deg, #FFD200, rgba(255,210,0,0.2))" }} />

          <div className="flex flex-col gap-4">
            {schedule.map((item, i) => (
              <div key={i}
                className="animate-fade-up flex gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  animationDelay: `${0.5 + i * 0.1}s`,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,210,0,0.15)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                }}>
                <div className="flex flex-col items-center gap-2 flex-shrink-0 sm:pl-1">
                  <div className="w-3.5 h-3.5 rounded-full mt-1 ring-4 hidden sm:block"
                    style={{ background: "#FFD200", ringColor: "rgba(255,210,0,0.2)" }} />
                  <span className="text-2xl mt-1">{item.emoji}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#FFD200" }}>{item.time}</div>
                  <div className="font-bold mb-1" style={{ color: "#ffffff" }}>{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-24 max-w-lg mx-auto">
        <div className="animate-fade-up rounded-3xl p-8 md:p-10"
          style={{
            animationDelay: "0.9s",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,210,0,0.2)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#ffffff" }}>Вы зарегистрированы!</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Ждём вас 15 мая в 10:00.<br />Переговорная «Альфа», 3 этаж.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <span className="text-3xl">📋</span>
                <h2 className="text-2xl font-bold mt-2" style={{ color: "#ffffff" }}>Регистрация</h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Займёт меньше минуты</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,210,0,0.2)", color: "#ffffff" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,210,0,0.2)")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Отдел
                  </label>
                  <select
                    required
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,210,0,0.2)", color: form.department ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,210,0,0.2)")}
                  >
                    <option value="" disabled style={{ background: "#1a2a6e" }}>Выберите отдел</option>
                    {departments.map((d) => (
                      <option key={d} value={d} style={{ background: "#1a2a6e", color: "#ffffff" }}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Дата выхода на работу
                  </label>
                  <input
                    type="date"
                    required
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    min="2026-04-01"
                    max="2026-05-31"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,210,0,0.2)", color: "#ffffff", colorScheme: "dark" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FFD200")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,210,0,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl font-bold text-base transition-all duration-200 hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                  style={{ background: "#FFD200", color: "#1A2A5E", boxShadow: "0 4px 24px rgba(255,210,0,0.35)" }}
                >
                  Зарегистрироваться →
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        Onboarding Day · 15 мая 2026
      </footer>
    </div>
  );
}