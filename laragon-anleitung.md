# 📘 Laragon – Kurzanleitung für Teilnehmende

## Ziel dieser Anleitung

Diese Anleitung zeigt dir, wie du **Laragon** für den Kurs nutzt, um:

- PHP-Dateien lokal auszuführen
- AJAX-Beispiele zu testen
- mit einem lokalen Webserver zu arbeiten

Du brauchst dafür **keine Server-Vorkenntnisse**.

---

## Was ist Laragon?

Laragon ist eine lokale Entwicklungsumgebung für Windows.

Sie bringt u. a. mit:

- Apache (Webserver)
- PHP
- eine einfache Verwaltung von Projekten

👉 Für diesen Kurs nutzen wir Laragon **nur lokal**.

---

## Voraussetzungen

- Laragon ist installiert
- Laragon wurde mindestens einmal gestartet
- GitHub-Repository des Kurses ist lokal vorhanden

---

## 1️⃣ Laragon starten

- Starte Laragon über das Startmenü
- Das Laragon-Fenster öffnet sich

Wichtig:
- Apache und PHP sollten **grün** angezeigt werden

Falls nicht:
- auf **Start All** klicken

---

## 2️⃣ Projektordner richtig ablegen

Laragon nutzt standardmäßig diesen Ordner:

- `C:\laragon\www`

Kopiere oder verschiebe dein Kursprojekt in diesen Ordner.

```bash
C:\laragon\www
```

Danach sollte dein Projekt z. B. so liegen:

- `C:\laragon\www\ajax-jquery-kurs`

---

## 3️⃣ Website in Laragon anlegen

1. Öffne Laragon
2. Klicke auf **Menu**
3. Wähle **www**
4. Wähle **Create virtual host**
5. Gib den Projektordner an (z. B. `ajax-jquery-kurs`)
6. Bestätige

Laragon legt jetzt automatisch eine lokale Website an.

---

## 4️⃣ Projekt im Browser öffnen

Öffne im Browser die Adresse:

- `http://ajax-jquery-kurs.test`

Wenn alles korrekt ist, siehst du:

- die Kurs-Startseite
- oder eine Liste der Tagesordner

---

## 5️⃣ Typische Probleme und Lösungen

### ❌ Seite wird nicht gefunden (404)

- Prüfe:
  - liegt der Ordner wirklich unter `C:\laragon\www`?
  - heißt der Ordner genau so wie der Host?
- Laragon neu starten

---

### ❌ PHP-Dateien werden als Text angezeigt

- Apache läuft nicht
- Laragon nicht korrekt gestartet

→ **Start All** klicken

---

### ❌ AJAX-Requests funktionieren nicht

- Öffne die Entwickler-Tools im Browser
- Prüfe:
  - Console (JavaScript-Fehler?)
  - Network (404 / 500?)

Teste die PHP-Datei direkt im Browser:

```bash
http://ajax-jquery-kurs.test/tag01/02_text_request/server/text.php
```


Wenn dort JSON angezeigt wird, ist der Server in Ordnung.

---

## 6️⃣ Arbeiten im Kurs

- HTML und JavaScript:
  - werden im Browser getestet
- PHP:
  - läuft über Laragon
- Änderungen:
  - Seite neu laden (F5)
  - kein Neustart von Laragon nötig

---

## Wichtig für den Kurs

- Arbeite **immer** im Projektordner unter `www`
- Öffne Projekte **über die .test-Adresse**, nicht über Dateien
- Nutze die Browser-Konsole zum Debuggen

---

## Merksatz

> **Dateien unter www → Laragon läuft → Browser öffnen**

Mehr brauchst du für diesen Kurs nicht.
