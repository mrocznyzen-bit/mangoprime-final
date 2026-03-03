# Instrukcja Publikacji Mango PRIME (Netlify)

Twoja strona jest gotowa do wdrożenia na platformie **Netlify** i podpięcia domen z home.pl.

## 1. Wdrożenie na Netlify
1. Załóż konto na [netlify.com](https://netlify.com).
2. Kliknij **"Add new site"** -> **"Deploy manually"**.
3. Przeciągnij folder z projektem do okna przeglądarki.
4. Netlify automatycznie wykryje plik `netlify.toml` i skonfiguruje:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 2. Konfiguracja Domen (Netlify: Site settings -> Domain management)
Dodaj swoje domeny:
- `mangoprime.com` (Ustaw jako PRIMARY)
- `mangoprime.pl` (Netlify automatycznie obsłuży przekierowania, jeśli dodasz obie)

## 3. Ustawienia DNS w home.pl
Dla KAŻDEJ z domen ustaw w panelu home.pl:

| Typ | Host | Wartość |
|-----|------|---------|
| A | @ | 75.2.60.5 |
| CNAME | www | Twoja-nazwa-strony.netlify.app |

*(Dokładne wartości A i CNAME sprawdź w panelu Netlify po dodaniu domeny).*

## 4. Konfiguracja Netlify Forms
Formularz kontaktowy korzysta teraz z wbudowanego systemu Netlify Forms. Nie musisz już konfigurować zmiennych SMTP.

Po wgraniu strony:
1. Wejdź w panelu Netlify w zakładkę **Forms**.
2. Powinieneś zobaczyć tam formularz o nazwie `contact`.
3. Aby otrzymywać powiadomienia e-mail, wejdź w **Site configuration** -> **Forms** -> **Form notifications** i dodaj swój adres e-mail.

## 5. Certyfikat SSL
Netlify automatycznie wygeneruje bezpłatny certyfikat SSL (Let's Encrypt) dla wszystkich domen po poprawnej konfiguracji DNS.

---
*Powodzenia! Twoja witryna Mango PRIME jest zoptymalizowana pod kątem wydajności i responsywności.*
