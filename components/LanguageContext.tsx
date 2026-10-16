"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Lang } from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
};

// English is the default: it matches the server-rendered <html lang> and og:locale.
const DEFAULT_LANG: Lang = "en";

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  toggle: () => {},
});

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persist only an explicit choice, so first-time visitors keep the default.
  const toggle = useCallback(
    () =>
      setLang((l) => {
        const next = l === "es" ? "en" : "es";
        localStorage.setItem(STORAGE_KEY, next);
        return next;
      }),
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
