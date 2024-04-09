# Projekt: Diagramy

Vytvořte aplikaci, která umožní zobrazovat a vytvářet jednoduché diagramy jako na obrázku:
![Výsledek](https://kodim.cz/cms/assets/kurzy/zaklady-ts/lekce/react/projekt/diagram.png)

### Zobrazení diagramů

Než se pustíme do možnosti diagramy vytvářet, musíme nejdříve umět diagram umět zobrazit.

1. Na základě dat z API serveru vytvořte datový model v TypeScriptu.
2. Vytvořte komponentu, která bude zobrazovat jeden box, nazvěte ji například `BoxView`. Stáhněte data z API a zobrazte všechny boxy diagramu.
3. Vytvořte komponentu, která bude zobrazovat spojnice mezi boxy, nazvěte ji například `ConnectionView`. Stáhněte data z API a zobrazte všechny spojnice diagramu. Spojnice vždy spojují středy boxů, bude tedy vždy potřeba spočítat správný střed boxu. Pozor, že všechny spojnice musí být vykresleny dříve, než boxy, aby byly vidět pod nimi a nepřekrývaly je.
4. Nezapomeňte také v hlavičce stránky zobrazit název diagramu.

Nyní byste měli mít hotovou aplikaci, která umí zobrazit libovolný diagram z API serveru.

### Vytváření diagramů

Vytváření diagramů uživateleme je složitější než zobrazení, neboť uživatel může interagovat s diagramem a měnit jeho obsah. Vytvoření diagramu funguje takto

- Uživatel může přidat nový box do digramu tak, že provede Ctrl+Click na prázdné místo a nový box se objeví s nějakým výchozím textem, například "Nová položka".
- Každý box lze vybrat kliknutím myší a editovat jeho text.
- Boxy lze propojit spojnicemi, které se zobrazí mezi středy boxů. Když uživatel vybere box, může pomocí Ctrl+Click na jiný box vytvořit mezi těmito boxy spojnici.
  Ukázku vytváření diagramu můžete vidět [tomto videu](https://kodim.cz/cms/assets/kurzy/zaklady-ts/lekce/react/projekt/vytvareni/tvorba-diagramu.mp4)
