# WIP README pro SDS

Implemetace Seznam Design Systému. Toto README.md je zatím silně WIP.

## Jak SDS použít

 1) Přidejte do projektu písmo Trivia Seznam. Pro teď je třeba mít ho v adresáři fonts v rootu projektu.
 2) Pokud používáte React, nainstalujte balík @sznds/react, ten si ve svých závislostech přidá všechny ostatní potřebné. Pokud chcete použít pouze CSS a zbytek si vyrobit po svém, nainstalujte balík @sznds/css.
 3) Pokud pou
 
## Jak přidat komponentu

Když komponenta svým užitím přesahuje tu jednu službu, pro kterou byla navržena, je možné její návrh předat týmu zodpovědnému za SDS. Pokud se rozhodne o jejím zařazení, je dle potřeby upravena, aby byla dostatečně univerzální, navrhnou se všechny stavy, poladí ovládání z hlediska přístupnosti a SEO. Potom přichází na řadu implementace.
3
0

### CSS

V adresáři CSS je projekt, ze kterého se sestavuje balík @sznds/css a tam patří veškeré styly komponent i jiné pomocné třídy. Zdroj je vždy v LESSu, CSS se teprve při balení generuje z něj. Každá komponenta má vlastní soubor v adresáři src/components, pomocné CSS třídy, proměnné a mixiny jsou pak v různých souborech v rámci adresáře src/common.

 * nikdy žádná id nebo názvy tagů jako selektory
 * BEM pojmenovávání tříd (prefix-komponenta__podelement--modifikátor, např. sds-button__text, sds-surface--disabled, …)
 * všechny názvy tříd začínají prefixem sds- a jsou malými písmeny (např. sds-button, sds-card, …), všechny proměnné začínají prefixem sds a užívají camelCase (sdsColorText, sdsShadowOutline, …)

### Javascript

Javascriptová část je rozdělena na několik adresářů. Adresář **react** (NPM balík @sznds/react) obsahuje implementace komponent ve frameworku React. Ty využívají kód nezávislý na framerowku z adresáře **helpers** (NPM balík @sznds/helpers) a definice ikon z adresáře **icons** (NPM balík @sznds/icons). Pokud chcete přidat komponenty pro jiný framework, je třeba mu založit vlastní adresář a v něm balík (package.json) a pak stejně jako v případě Reactu členit komponenty do vlastních podadresářů.

 * pouze ES6 moduly
 * názvy funkcí a proměnných v camelCase
 * každá třída, funkce, konstanta a datový typ (např. objekt s parametry) musí být zdokumentovaný; dokumentace se pak generuje pomocí příkazu `npm run docs` v daném balíku - tím vznikne v adresáři každé komponenty soubor README.md s dokumentací
 * dokumentace je v angličtině a formát je JSDoc přímo v kódu
 * pokud je to jen trochu možné, tak neduplikujte kód - co se dá vyčlenit úplně mimo, to patří do **helpers**, co je specifické pro framework, to do nějaké HOC, HOF či prostě jen pomocné komponenty/funkce

### Obecná pravidla

 * taby, ne mezery
 * konce řádků LF a ne CRLF
 * kódování UTF-8
 * názvy proměnných, selektorů a funkcí anglicky
