# Color It

Ein kleines Obsidian-Plugin, mit dem du markierten Text per Rechtsklick in einer
Hervorhebungsfarbe oder Textfarbe einfärben kannst.

## Funktionen

- Text markieren → Rechtsklick → **Hervorhebungsfarbe** oder **Textfarbe** wählen
- Feste Farbpalette für beide Modi
- "Entfernen"-Eintrag macht die Formatierung wieder rückgängig
- Funktioniert im Live-Preview- und im Reading-Modus

## Installation

### Manuell

1. Lade die neueste [Release](../../releases) herunter (oder klone dieses Repo).
2. Kopiere `main.js` und `manifest.json` in den Ordner
   `<dein-vault>/.obsidian/plugins/color-it/` (Ordner ggf. anlegen).
3. Obsidian neu laden (`Cmd/Ctrl+R`).
4. Einstellungen → **Community Plugins** → **Color It** aktivieren.

### Aus dem Quellcode

```bash
git clone https://github.com/<dein-user>/color-it.git
cp color-it/main.js color-it/manifest.json <dein-vault>/.obsidian/plugins/color-it/
```

## Benutzung

Text im Editor markieren, Rechtsklick öffnen, im Kontextmenü **Hervorhebungsfarbe**
oder **Textfarbe** wählen und eine Farbe anklicken. Das Plugin fügt dafür ein
`<span style="...">`-Tag um den markierten Text ein.

## Lizenz

MIT
