//$('table.wikitable').each(function (){
//    $(this).replaceWith( $(this).html()
//        .replace(/<tbody/gi, "<div class='wikitable'")
//        .replace(/<tr/gi, "<div class=''")
//        .replace(/<\/tr>/gi, "</div>")
//        .replace(/<td/gi, "<span")
//        .replace(/<\/td>/gi, "</span>")
//        .replace(/<\/tbody/gi, "<\/div")
//    );
//});


// // Replace image tags with MathJax math scripts
// $('img.tex').replaceWith(function() {
//   var $otag, $ctag, $disp, $scale;
//   if($(this).parent().is('dd')) {
//     $otag = '[mjax]'; $ctag = '[/mjax]';
//     $disp = '; mode=display';
//     $scale = '125%';
//   }else{
//     $otag = '[mjax-inline]'; $ctag = '[/mjax-inline]';
//     $disp = '';
//     $scale = '100%';
//   }
//   return '<span style="font-size: ' + $scale + '"><script type="math/tex' + $disp + '">' + $(this).attr('alt') + '</script></span>';
// //  return '<div style="font-size: 125%">' + $otag + $(this).attr('alt') + $ctag + '</div>';
// });



// Wrap the span for legacy zoom levels.
// Could it be an option within the Chrome extension?
$('img.inlinemath').each(function() {
  if($(this).parent().is('td,blockquote')) {
    $(this).wrap('<span class="math_font" />');
  }
});

// Workaround for span span span ... getting extra small font-size
$('head').append('\
<style>\
td span.math_font {\
  font-size:' + $('table.footnote').css('font-size') + ';\
}\
td span.math_font span {\
  font-size: 100%;\
  color: #556;\
}\
</style>\
');

// Wrap images in MathJax_Preview spans and attach the MathJax math script.
// MathJax will remove the preview when it's done typesetting.
+$('img.inlinemath').wrap('<span class="MathJax_Preview" />');
+$('img.dispmath').wrap('<div class="MathJax_Preview" />');
$('.MathJax_Preview').after(function () {
  var $scale;
  tex = $(this).find('img').attr("alt");
  // Workaround for .has (chrome)
  if($(this).find('img').attr('class') == 'dispmath') {
    return '<script type="math/tex; mode=display">\\begin{align*}' + tex + '\\end{align*}</script>';
  }else{
    return '<script type="math/tex">' + tex + '</script>';
  }
});

//    extensions: ["tex2jax.js"],\
//    tex2jax: {\
//      inlineMath: [ ["[mjax-inline]","[/mjax-inline]"]],\
//      displayMath: [ ["[mjax]","[/mjax]"]]\
//    },\
//    "HTML-CSS":{\
//      scale:100,\
//      availableFonts:["STIX","TeX"],\
//      preferredFont:"TeX",\
//      webFont:"TeX",\
//      imageFont:"TeX",\
//      showMathMenu:false,\
//      styles:{},\
//    },\
// Inject config code for MathJax
// TODO: add texvc macros from https://git.wikimedia.org/blob/mediawiki%2Fextensions%2FMath/0476fd66d5ed73103349ca8c376601656bb2bec9/modules%2FMathJax%2Fextensions%2FTeX%2Ftexvc.js

$('script').append('<script type="text/x-mathjax-config">\
  MathJax.Hub.Config({\
    displayIndent: "2.7em",\
    displayAlign: "left",\
    TeX: {\
      extensions: ["color.js"],\
      Macros: {\
        C:            "\\\\mathbb{C}",\
        cnums:        "\\\\mathbb{C}",\
        Complex:      "\\\\mathbb{C}",\
        N:            "\\\\mathbb{N}",\
        natnums:      "\\\\mathbb{N}",\
        Q:            "\\\\mathbb{Q}",\
        R:            "\\\\mathbb{R}",\
        reals:        "\\\\mathbb{R}",\
        Reals:        "\\\\mathbb{R}",\
        Z:            "\\\\mathbb{Z}",\
        sect:         "\\\\mathbb{S}",\
        P:            "\\\\mathbb{P}",\
        sgn:          "\\\\operatorname{sgn}",\
        part:         "\\\\partial",\
\
        empty:        "\\\\emptyset",\
        O:            "\\\\emptyset",\
\
	or:	      "\\\\lor",\
	and:	      "\\\\land",\
\
        Alpha:        "\\\\mathrm{A}",\
        Beta:         "\\\\mathrm{B}",\
        Epsilon:      "\\\\mathrm{E}",\
        Zeta:         "\\\\mathrm{Z}",\
        Eta:          "\\\\mathrm{H}",\
        Iota:         "\\\\mathrm{I}",\
        Kappa:        "\\\\mathrm{K}",\
        Mu:           "\\\\mathrm{M}",\
        Nu:           "\\\\mathrm{N}",\
        Omicron:      "\\\\mathrm{O}",\
        Rho:          "\\\\mathrm{R}",\
        Tau:          "\\\\mathrm{T}",\
        Chi:          "\\\\mathrm{X}",\
\
        bm:           ["{\\\\boldsymbol #1}",1],\
        bold:         ["{\\\\boldsymbol #1}",1],\
        boldmath:     ["{\\\\boldsymbol #1}",1],\
        ointop:       "\\\\oint",\
      }\
    },\
    menuSettings: {\
      zoom: "Click",\
      zscale: "200%"\
    },\
    MathZoom: {\
      styles: {\
        "#MathJax_Zoom": {\
          "background-color": "#FFFFFF"\
        }\
      }\
    }\
  });\
</script>');

// To ensure that we loading MathJax AFTER substituting images, we load it manualy
// TODO: follow Wikipedia's configuration https://git.wikimedia.org/blob/mediawiki%2Fextensions%2FMath/0476fd66d5ed73103349ca8c376601656bb2bec9/modules%2FMathJax%2Fconfig%2FTeX-AMS-texvc_HTML.js
$('script').append('<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>');


