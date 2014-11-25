Hooktail with MathJax (Chrome extesion)
========================================

Extension replaces [物理のかぎしっぽ](http://hooktail.sub.jp/) (the "Hooktail") bitmap equations with HTML-CSS ones by re-rendering them with an open source [MathJax](http://mathjax.org/) library. In effect, this allows to scale Hooktail pages without loosing in equation quality.

Left-Click on equation to instantly zoom it to 200% (can be changed via MathJax menu).

Right-Click on equation to show MathJax's context menu with additional options, e.g. "Scale All Math..." to instantly scale all equations on a page, "TeX commands" to see the source TeX equation etc.

Extension is now published under [New BSD License](https://github.com/watiko/wiki-mathjax/blob/master/LICENSE.md) with the source code available [here](https://github.com/watiko/wiki-mathjax).

For bug reports and feature requests, please use [Issue tracker](https://github.com/watiko/wiki-mathjax/issues).

### INSTALLATION:

 - TODO

### UPDATES:

**v.0.0.7:**
 - Alter this extension for Hooktail from Wikipedia.

**v.0.0.6:**

 - Fix MathJax CDN URL (Thanks to Thomas Kriechbaumer).

**v.0.0.5:**

 - Add MathJax *Preview* feature. For smoother user experience original images replaced only after MathJax typesetting is ready (Thanks to Peter Krautzberger).

 - Fix: by default MathJax using different from LaTeX `\color` macro. That makes certain equations unable to render (for example, see [Extended Kalman Filter](http://en.wikipedia.org/wiki/Extended_Kalman_filter#Discrete-time_predict_and_update_equations)). The problem is solved by MathJax' `color` extension.

**v.0.0.4:**

 - Fix the fix: extension now works on secured (https) version of Wikipedia.

**v.0.0.3:**

 - Fix: extension now works on secured (https) version of Wikipedia.

**v.0.0.2:**

 - Now supports some non-standard LaTeX commands specific to Wikipedia markup language.
 
 - Inline equations are scaled down to 100% (previously were same as display equations, i.e. 125%).

### KNOWN ISSUES:

 - Symbols which are not a part of display equation, i.e. not typed in between <math>...</math>, but right after it, will be displayed from the next line. This is along with LaTeX markup rules and won't be fixed.
 
 - **(Fixed)** Fraction bar is oversized on scaled pages in recent versions of Chrome (e.g. 21.0.1180.75), this is a bug in MathJax/Chrome and not related to extension. See [this](https://groups.google.com/forum/?fromgroups#!topic/mathjax-users/TWNUoKIaF4I%5B1-25%5D).
