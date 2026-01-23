# 📘 Git-Kurzanleitung für Teilnehmende (Einsteiger)

## Ziel dieser Anleitung

Diese Anleitung zeigt dir die **Grundlagen von Git**, die du für den Kurs brauchst.  
Du musst **kein Git-Experte** sein.

Du lernst hier:

- wie du den Kurscode bekommst
- wie du Änderungen speicherst
- wie du deinen aktuellen Stand festhältst

---

## Was ist Git?

Git ist ein Werkzeug, mit dem man:

- Dateien versionieren kann
- Änderungen nachvollziehen kann
- den eigenen Arbeitsstand sichern kann

👉 Für diesen Kurs nutzt du Git **nur in einem Repository**.

---

## Voraussetzungen

- Git ist installiert  
  (z. B. *Git for Windows*)
- Du arbeitest mit Terminal oder VS Code

---

## 1️⃣ Repository herunterladen (clone)

Zu Beginn bekommst du vom Trainer eine **Repository-Adresse**.

Erstelle zuerst einen Ordner für den Kurs und wechsle in diesen Ordner.

```bash
mkdir ajax-jquery-kurs
cd ajax-jquery-kurs
```


Danach klonst du das Repository:

```bash
git clone https://github.com/DEIN-REPO/DEIN-KURS.git
```

Jetzt liegt der komplette Kurscode auf deinem Rechner.

---

## 2️⃣ Ordner in VS Code öffnen

- Starte VS Code
- Öffne den Ordner, den du gerade geklont hast
- Du siehst jetzt z. B.:
  - tag01
  - tag02
  - tag03
  - css
  - index.html oder index.php

👉 Ab jetzt arbeitest du **nur in diesem Ordner**.

---

## 3️⃣ Aktuellen Status prüfen

Mit Git kannst du jederzeit prüfen, was sich geändert hat.

```bash
git status
```

Typische Meldungen:

- `nothing to commit` → alles gespeichert
- `modified:` → Datei wurde geändert
- `untracked:` → neue Datei, noch nicht gespeichert

---

## 4️⃣ Änderungen speichern (commit)

Git speichert Änderungen **nicht automatisch**.  
Das passiert immer in **zwei Schritten**.

### Schritt 1: Dateien vormerken (add)

Alle Änderungen vormerken:

```bash
git add .
```

---

### Schritt 2: Commit erstellen

Jetzt speicherst du deinen Stand mit einer kurzen Beschreibung:

```bash
git commit -m "Tag 1: erstes AJAX-Beispiel"
```

Gute Commit-Nachrichten sind z. B.:

- `Tag 1: erstes AJAX-Beispiel`
- `Bugfix bei Suche`
- `Master-Detail Grundgerüst`

---

## 5️⃣ Typischer Arbeitsablauf

1. Du änderst Dateien im Projekt
2. Du prüfst den Status
3. Du fügst Änderungen hinzu
4. Du erstellst einen Commit

```bash
git status
git add .
git commit -m "Kurze Beschreibung der Änderung"
```

---

## 6️⃣ Häufige Fehler

### ❌ „Ich habe etwas geändert, aber Git merkt es nicht“
- Datei wurde nicht gespeichert
- oder liegt außerhalb des Repository-Ordners

### ❌ „Ich habe keinen Commit gemacht“
- Änderungen sind dann **nicht gesichert**

### ❌ „Ich habe Angst, etwas kaputt zu machen“
- Keine Sorge:  
  Git löscht nichts automatisch.

---

## 7️⃣ Wichtig für den Kurs

- Arbeite **immer** im Kurs-Ordner
- Mache regelmäßig Commits
- Committe **nur funktionierenden Code**
- Wenn etwas kaputt ist: **erst reparieren, dann committen**

---

## Merksatz

> **Ändern → add → commit**

Mehr brauchst du für diesen Kurs nicht.
