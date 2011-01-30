(function($) {
	$.fn.munis = function() {
		//Hlavicka (otazky)
		var row = $("<tr/>");
		$.each(otazky, function(index, value) {
			var cell = $("<th/>");
			cell.text(value);
			cell.appendTo(row);
		});
		$("table").append(row);
	
		// Odpovedi
		$.get("data.xml", function(xml) {
			//console.log(xml);
			//console.log($("VERZE", xml).text());
		
			var otazek = [];
			$("ODP", xml).each(function() {
				otazek.push(parseInt($(this).attr("POR")));
			});
			//console.log(otazek);	//Jeste pole
			otazek = otazek.sort(function(a, b) {return b - a})[0];
			//console.log(otazek);	//Pocet otazek
		
			//console.log($("PROCHAZEJICI", xml).length);	//Pocet pruchodu (vcetne prazdnych!)
			$("PROCHAZEJICI", xml).each(function() {
				var row = $("<tr/>");
				for (var i = 1; i <= otazek; i++) {
					//console.log(i, $("AKCE:last ODP[POR='" + i + "']", this));
					var odpovedi_arr = Array();
					$("AKCE:last ODP[POR='" + i + "']", this).each(function() {
						var odpoved = $(this).attr("HOD");
						if (odpovedi[i] && !isNaN(odpoved)) {
							odpovedi_arr.push(odpovedi[i][parseInt(odpoved) - 1]);
						} else {
							odpovedi_arr.push(odpoved);
						}
					});
					var cell = $("<td/>");
					cell.text(odpovedi_arr.join(", "))
					cell.appendTo(row);
				}
				if (row.text()) {	//Vyhodime prazdne odpovedi
					$("table").append(row);
				}
			});
		}, "xml");	//Format
	};
})(jQuery);
