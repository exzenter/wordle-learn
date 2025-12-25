# 🎮 Wordle Learn - Englisch lernen mit Wordle

Ein modernes, interaktives Wordle-Spiel zum Englischlernen mit integrierter deutscher Übersetzung.

![Wordle Learn](https://img.shields.io/badge/Status-Active-success)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **🎯 Klassisches Wordle-Gameplay**: Rate das 5-Buchstaben-Wort in 6 Versuchen
- **🌍 Echtzeit-Übersetzung**: Sieh die deutsche Übersetzung während du tippst
- **⌨️ Interaktive Tastatur**: Visuelle Rückmeldung für verwendete Buchstaben
- **🎨 Moderne UI**: Schöne Animationen und glassmorphes Design
- **📱 Responsive**: Funktioniert auf Desktop und Mobile
- **🔤 Intelligente Eingabe**: Unterstützt sowohl virtuelle als auch physische Tastatur

## 🚀 Quick Start

### Lokale Nutzung

1. Repository klonen:
```bash
git clone https://github.com/exzenter/wordle-learn.git
cd wordle-learn
```

2. Einen lokalen Server starten:
```bash
# Mit Python
python -m http.server 8000

# Oder mit Node.js
npx http-server -p 8000
```

3. Im Browser öffnen:
```
http://localhost:8000
```

### Direkte Nutzung

Öffne einfach die `index.html` Datei in deinem Browser (die Übersetzungsfunktion funktioniert am besten mit einem lokalen Server).

## 🎮 Spielanleitung

1. **Tippe ein 5-Buchstaben-Wort** mit der Tastatur oder klicke auf die Bildschirmtastatur
2. **Drücke Enter** um deine Vermutung zu überprüfen
3. **Achte auf die Farben**:
   - 🟩 **Grün**: Buchstabe ist korrekt und an der richtigen Position
   - 🟨 **Gelb**: Buchstabe ist im Wort, aber an falscher Position
   - ⬜ **Grau**: Buchstabe ist nicht im Wort
4. **Deutsche Übersetzung**: Während du tippst, erscheint die deutsche Übersetzung automatisch
5. **Gewinne** indem du das Wort in 6 Versuchen errätst!

## 🛠️ Technologie-Stack

- **HTML5**: Semantisches Markup
- **CSS3**: Moderne Animationen, Glassmorphismus, responsive Design
- **Vanilla JavaScript**: Keine Dependencies, pure JS
- **Translation API**: Automatische Übersetzung Englisch → Deutsch

## 📁 Projektstruktur

```
wordle-learn/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Styling und Animationen
├── script.js           # Spiellogik & API-Integration
├── words.js            # Offizielle Wordle-Wortlisten (~14.855 Wörter)
├── README.md           # Diese Datei
└── .gitignore          # Git-Ausschlüsse
```

## 🎨 Design-Features

- **Glassmorphismus-Effekte** für moderne Ästhetik
- **Smooth Animations** beim Tippen und Umdrehen der Kacheln
- **Responsive Layout** für alle Bildschirmgrößen
- **Dunkles Theme** für angenehmes Spielen
- **Google Fonts** (Poppins) für moderne Typografie

## 🔧 Anpassung

### Wortlisten

Das Spiel verwendet zwei Listen aus `words.js`:

**ANSWER_WORDS** (~2.315 Wörter)
- Häufige, bekannte Wörter die als Lösungen verwendet werden
- Sorgt für eine faire Spielerfahrung

**WORD_LIST** (~14.855 Wörter)  
- Alle gültigen 5-Buchstaben-Wörter für die Eingabevalidierung
- Erlaubt auch seltene Wörter beim Raten

Beide Listen stammen aus den offiziellen NYT Wordle-Wortlisten.

### API-Key ändern

Falls du deinen eigenen Translation-API-Key verwenden möchtest, ändere in `script.js`:
```javascript
const ARML_API_KEY = 'dein-api-key';
```

## 🤝 Mitwirken

Contributions sind willkommen! Hier ist wie:

1. Fork das Projekt
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 To-Do / Geplante Features

- [ ] Schwierigkeitsstufen (4, 5, 6 Buchstaben)
- [ ] Statistiken und Streak-Tracking
- [ ] Share-Funktion für Ergebnisse
- [ ] Mehrere Sprach-Optionen
- [ ] Daily Challenge Modus
- [ ] Sound-Effekte
- [ ] Dark/Light Theme Toggle

## 📜 Lizenz

MIT License - siehe [LICENSE](LICENSE) für Details

## 👤 Autor

**exzenter**
- GitHub: [@exzenter](https://github.com/exzenter)

## 🙏 Danksagungen

- Inspiriert vom original [Wordle](https://www.nytimes.com/games/wordle/index.html) von Josh Wardle
- Translation API von [arml.trymagic.xyz](https://arml.trymagic.xyz/)
- Icons und Design-Inspiration von modernen Web-Design-Trends

---

⭐ **Star das Projekt wenn es dir gefällt!** ⭐
