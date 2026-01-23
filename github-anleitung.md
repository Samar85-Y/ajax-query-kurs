# 📘 GitHub – Eigenes Repository anlegen und nutzen

## Ziel

In dieser Anleitung lernst du:

- wie du auf GitHub ein eigenes Repository anlegst
- wie du dein lokales Kursverzeichnis mit GitHub verbindest
- wie du deinen Code sicherst

---

## Voraussetzungen

- Du hast ein GitHub-Konto
- Git ist installiert
- Du hast den Kursordner bereits lokal auf deinem Rechner

---

## 1️⃣ Neues Repository auf GitHub anlegen

1. Melde dich bei GitHub an
2. Klicke oben rechts auf **New Repository**
3. Vergib einen Namen, z. B.:
   - ajax-jquery-kurs
4. Repository-Sichtbarkeit:
   - **Public** (empfohlen für den Kurs)
5. **Wichtig:**
   - kein README erzeugen
   - kein .gitignore erzeugen
   - keine Lizenz auswählen

Repository erstellen.

---

## 2️⃣ Lokales Projekt mit Git initialisieren

Wechsle im Terminal in deinen Kursordner.

```bash
cd ajax-jquery-kurs
```

Initialisiere Git:

```bash
git init
```

---

## 3️⃣ Ersten Commit erstellen

Alle Dateien zum Commit vormerken:

```bash
git add .
```

Commit erstellen:

```bash
git commit -m "Initialer Kursstand"
```

---

## 4️⃣ GitHub-Repository verbinden (remote)

GitHub zeigt dir nach dem Erstellen des Repositories eine URL an.

Diese verbindest du mit deinem lokalen Projekt:

```bash
git remote add origin https://github.com/DEINNAME/DEIN-REPO.git
```

---

## 5️⃣ Code zu GitHub hochladen (push)

Sende deinen Code zu GitHub:

```bash
git branch -M main
git push -u origin main
```

Danach siehst du deine Dateien auf GitHub im Browser.

---

## 6️⃣ Typischer Arbeitsablauf im Kurs

1. Code ändern
2. Status prüfen
3. Änderungen committen
4. Änderungen pushen

```bash
git status
git add .
git commit -m "Beschreibung der Änderung"
git push
```

---

## Merksatz

> **Lokal arbeiten → commit → push**

Mehr brauchst du für diesen Kurs nicht.
