import { Section } from "@/components/Section/Section";
import { useTranslation } from "../../i18n";

export default async function PrivacyPage({ params: { lang } }) {
  const { t } = await useTranslation(lang, "privacy");

  return (
    <>
      <Section></Section>
      <Section title={t("Private_police")}>
        <h3 className="my-4 font-bold">I. Postanowienia ogólne</h3>
        <ol>
          <li>
            Polityka prywatności określa, jak zbierane, przetwarzane i
            przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
            usług drogą elektroniczną za pośrednictwem serwisu internetowego
            in-brows.pl (dalej: Serwis).
          </li>
          <li>
            Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i
            rozwoju usług w nim oferowanych.
          </li>
          <li>
            Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane
            zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o
            ochronie danych osobowych z dnia 10 maja 2018 r.
          </li>
        </ol>
        <h3 className="my-4 font-bold">II. Administrator danych</h3>
        Administratorem danych osobowych zbieranych poprzez Serwis jest 
        Inna Snisar
        , adres: Wrocław ul.Buforowa 101A/13, 52-131
        , KRS: <span style={{ backgroundColor: "#ffff00" }}>[numer]</span>, NIP:{" "}
        <span style={{ backgroundColor: "#ffff00" }}>[numer]</span>, REGON:{" "}
        <span style={{ backgroundColor: "#ffff00" }}>[numer]</span>, adres
        poczty elektronicznej:{" "}
        <span style={{ backgroundColor: "#ffff00" }}>[adres e-mail]</span>{" "}
        (dalej: Administrator).
        <h3 className="my-4 font-bold">III. Cel zbierania danych osobowych</h3>
        <ol>
          <li>
            Dane osobowe wykorzystywane są w celu:
            <ul>
              <li>rejestracji konta i weryfikacji tożsamości Użytkownika,</li>
              <li>umożliwienia logowania do Serwisu,</li>
              <li>realizacji umowy dotyczącej usług i e-usług,</li>
              <li>
                komunikacji z Użytkownikiem (livechat, formularz kontaktowy
                itp.)
              </li>
              <li>
                wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego
                otrzymywanie),
              </li>
              <li>prowadzenia systemu komentarzy,</li>
              <li>świadczenia usług społecznościowych,</li>
              <li>promocji oferty Administratora,</li>
              <li>marketingu, remarketingu, afiliacji,</li>
              <li>personalizacji Serwisu dla Użytkowników,</li>
              <li>działań analitycznych i statystycznych,</li>
              <li>windykacji należności,</li>
              <li>ustalenia i dochodzenia roszczeń albo obrony przed nimi.</li>
            </ul>
          </li>
          <li>
            Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo
            skorzystania z innych funkcjonalności Serwisu.
          </li>
        </ol>
        <h3 className="my-4 font-bold">
          IV. Rodzaj przetwarzanych danych osobowych
        </h3>
        Administrator może przetwarzać dane osobowe Użytkownika: imię i
        nazwisko, data urodzenia, adres zamieszkania, adres e-mail, numer
        telefonu, NIP.
        <h3 className="my-4 font-bold">
          V. Okres przetwarzania danych osobowych
        </h3>
        Dane osobowe Użytkowników będą przetwarzane przez okres:
        <ul>
          <li>
            gdy podstawą przetwarzania danych jest wykonanie umowy – do momentu
            przedawnienia roszczeń po jej wykonaniu,
          </li>
          <li>
            gdy podstawą przetwarzania danych jest zgoda – do momentu jej
            odwołania, a po odwołaniu zgody do przedawnienia roszczeń.
          </li>
        </ul>
        W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń
        o świadczenia okresowe i roszczeń dotyczących prowadzenia działalności
        gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).
        <h3 className="my-4 font-bold">VI. Udostępnianie danych osobowych</h3>
        <ol>
          <li>
            Dane osobowe Użytkowników mogą być przekazywane: podmiotom
            powiązanym z Administratorem, jego podwykonawcom, podmiotom
            współpracującym z Administratorem np. firmom obsługującym
            e-płatności, firmom świadczącym usługi kurierskie/pocztowe,
            kancelariom prawnym.
          </li>
          <li>
            Dane osobowe Użytkowników{" "}
            <span style={{ backgroundColor: "#ffff00" }}>nie będą/będą</span>{" "}
            przekazywane poza teren Europejskiego Obszaru Gospodarczego (EOG).
          </li>
        </ol>
        <h3 className="my-4 font-bold">VII. Prawa Użytkowników</h3>
        <ol>
          <li>
            Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych
            osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
            przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia
            zgody w każdej chwili (co nie ma wpływu na zgodność z prawem
            przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem).
          </li>
          <li>
            Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem
            wynikającym z wymienionych praw należy przesłać na adres{" "}
            <span style={{ backgroundColor: "#ffff00" }}>[adres e-mail]</span>.
          </li>
          <li>
            Administrator spełnia lub odmawia spełnienia żądania niezwłocznie –
            maksymalnie w ciągu miesiąca od jego otrzymania.
          </li>
          <li>
            Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
            Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i
            wolności (RODO).
          </li>
        </ol>
        <h3 className="my-4 font-bold">VIII. Pliki cookies</h3>
        <ol>
          <li>
            Serwis zbiera informacje za pomocą plików cookies – sesyjnych,
            stałych i podmiotów zewnętrznych.
          </li>
          <li>
            Zbieranie plików cookies wspiera poprawne świadczenie usług w
            Serwisie i służy celom statystycznym.
          </li>
          <li>
            Użytkownik może określić zakres dostępu plików cookies do swojego
            urządzenia w ustawieniach przeglądarki.
          </li>
        </ol>
        <h3 className="my-4 font-bold">
          IX. Zautomatyzowane podejmowanie decyzji i profilowanie
        </h3>
        <ol>
          <li>
            Dane Użytkowników nie mogą być przetwarzane w zautomatyzowany sposób
            tak, że na skutek tego mogłyby zapaść wobec nich jakiekolwiek
            decyzje.
          </li>
          <li>
            Dane Użytkowników mogą być profilowane celem dostosowania treści i
            personalizacji oferty po wyrażeniu przez nich zgody.
          </li>
        </ol>
        <h3 className="my-4 font-bold">X. Postanowienia końcowe</h3>
        <ol>
          <li>
            Administrator ma prawo do wprowadzenia zmian w Polityce prywatności,
            przy czym prawa Użytkowników nie zostaną ograniczone.
          </li>
          <li>
            Informacja o wprowadzonych zmianach pojawi się w formie komunikatu
            dostępnego w Serwisie.
          </li>
          <li>
            W sprawach nieuregulowanych w niniejszej Polityce prywatności
            obowiązują przepisy RODO i przepisy prawa polskiego.
          </li>
        </ol>
        Informacje na temat polityki prywatności i plików cookies znajdziesz na{" "}
        <a
          href="https://www.wygranaonline.com/polityka-prywatnosci-wzor-generator/"
          target="_blank"
          rel="noopener"
        >
          WygranaOnline
        </a>
        .
      </Section>
    </>
  );
}
