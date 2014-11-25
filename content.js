$(function(){

// Wrap the span for legacy zoom levels.
// Could it be an option within the Chrome extension?
$('img.inlinemath').each(function() {
  if($(this).parent().is('td,blockquote')) {
    $(this).wrap('<span class="math_font" />');
  }
});

// Get value of 100% font-size : Int
var basesize = parseInt($('body').css('font-size'), 10);

// Check page url : Array
// TODO : find solution
var latexImpress = location.href.match(/latexImpress/)

// Workaround xtream small font
$('head').append('\
<style>\
td span.math_font span {\
  color: #556;\
}\
.footnote td span.math_font span {\
  font-size:' + basesize * 0.85 + 'px;\
}\
.footnote td span.math_font #MathJax_Zoom span {\
  font-size:' + basesize * 0.85 * 2 + 'px;\
}\
</style>\
');

// Wrap images in MathJax_Preview spans and attach the MathJax math script.
// MathJax will remove the preview when it's done typesetting.
$('img.inlinemath').wrap('<span class="MathJax_Preview" />');
$('img.dispmath').wrap('<div class="MathJax_Preview" />');

if (!latexImpress){
  $('.MathJax_Preview').after(function () {
    tex = $(this).find('img').attr("alt");
    // Workaround for .has (chrome)
    if($(this).find('img').attr('class') == 'dispmath') {
      return '<script type="math/tex; mode=display">\\begin{align*}' + tex + '\\end{align*}</script>';
    }else{
      return '<script type="math/tex">' + tex + '</script>';
    }
  });
};

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

});
