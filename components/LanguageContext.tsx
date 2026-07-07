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

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  toggle: () => {},
});

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(
    () => setLang((l) => (l === "es" ? "en" : "es")),
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
