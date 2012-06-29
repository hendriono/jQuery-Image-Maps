/*!
 * jQuery Image Maps - Memudahkan Pemetaan Gambar
 * Copyleft 2012, Blogger Tune-Up
 * http://modification-blog.blogspot.com/
 * http://twitter.com/bloggertuneup/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Date: Fri Jun 29 04:01:29 2012 -0500
 */
(function ($) {
    $.fn.imgMaps = function (options) {

        var defaults = {
		    speed: 250,
			titik: 'penanda',
			balonMaps: 'buble',
			balonHov: 'area',
			balonAtas: 'buble-up',
			balonBawah: 'buble-down',
			titikAtas: 'atas'
        };

        var options = $.extend(defaults, options);

        return this.each(function () {
            var elemen = $(this),
                lebar = $('img', this).width(),
                tinggi = $('img', this).height();
	
            var pemetaan = {
                wadahPeta: function () {
                    elemen.css({
                        'height': tinggi,
                        'width': lebar
                    });
                    pemetaan.tanda();
                },
                tanda: function (i) {
					var mark = $('.'+options.titik);
                    for (i = 0; i < mark.length; i++) {
						var cekMark = mark.eq(i),
							cekm = cekMark.hasClass(options.titikAtas),
							xpos = cekMark.data('posx'),
							ypos = cekMark.data('posy'),
							isim = cekMark.html();
                        if (cekm) {tanda = options.balonBawah}
						else {tanda = options.balonAtas}
						elemen.append("<div style='left:"+xpos+"px;top:"+ypos+"px' class='"+options.balonHov+" "+tanda+"'>\
						<div class='"+options.balonMaps+"'>"+isim+"</div>\
						</div>");
                    }
                    pemetaan.keto();
                },
                keto: function () {
					$('.'+options.balonHov).mouseenter(function(){
                        $(this).children('.'+options.balonMaps).fadeIn(options.speed);
                    }).mouseleave(function(){
                        $(this).children('.'+options.balonMaps).fadeOut(options.speed);
                    })
                }
            }
            pemetaan.wadahPeta();
        });
    }
})(jQuery);