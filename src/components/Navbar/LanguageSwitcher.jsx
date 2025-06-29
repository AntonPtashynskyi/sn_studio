"use client";

import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageChanger({ pageLanguage }) {
  const router = useRouter();
  const currentPathname = usePathname();
  const { t } = useTranslation(pageLanguage, "common");

  const handleChange = (e) => {
    const newLocale = e.target.value;
    

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (pageLanguage === newLocale) {
      return;
    } else {
      router.push(currentPathname.replace(`/${pageLanguage}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <>
      <label htmlFor="language-select" className="sr-only">{t("Choose language:")}</label>
      <select onChange={handleChange} value={pageLanguage} id="language-select">
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="ua">UA</option>
        <option value="ru">RU</option>
      </select>
    </>
  );
}
