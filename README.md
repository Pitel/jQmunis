jQmunis
======
jQuery plugin pro zpracování XMLek z dotazníku ISu Masarykovy univerzity.

Použití
-------
	$("table").munis("data.xml", ["Jméno, Příjmení, Věk"], [, , ["0–50", "50–100"]]);
Povšimněte si, že druhé pole má nedefinované hodnoty u otézek které nemají jako odpovědi radiobuttony nebo checkboxy.

Plugin očekává, že bude použit nad tabulkou. Pokud není, nic se neděje. Tato tabulka je vyprázdněna a poté naplněna daty z odpovědníku.
