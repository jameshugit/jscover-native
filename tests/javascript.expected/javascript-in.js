if (! _$jscoverage['javascript-in.js']) {
  _$jscoverage['javascript-in.js'] = [];
  _$jscoverage['javascript-in.js'][1] = 0;
  _$jscoverage['javascript-in.js'][2] = 0;
  _$jscoverage['javascript-in.js'][3] = 0;
}
_$jscoverage['javascript-in.js'].source = ["<span class=\"k\">var</span> x <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","<span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">'a'</span> <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">{</span>","  x <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">;</span>","<span class=\"k\">}</span>"];
_$jscoverage['javascript-in.js'][1]++;
var x = {};
_$jscoverage['javascript-in.js'][2]++;
if (("a" in x)) {
  _$jscoverage['javascript-in.js'][3]++;
  x = null;
}
