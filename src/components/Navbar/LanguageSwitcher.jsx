"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageChanger({ pageLanguage }) {
  const router = useRouter();
  const currentPathname = usePathname();

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
    <select onChange={handleChange} value={pageLanguage}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
      <option value="ua">UA</option>
      <option value="ru">RU</option>
    </select>
  );
}
