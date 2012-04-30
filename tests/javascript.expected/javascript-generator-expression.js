if (! _$jscoverage['javascript-generator-expression.js']) {
  _$jscoverage['javascript-generator-expression.js'] = [];
  _$jscoverage['javascript-generator-expression.js'][3] = 0;
  _$jscoverage['javascript-generator-expression.js'][4] = 0;
  _$jscoverage['javascript-generator-expression.js'][5] = 0;
  _$jscoverage['javascript-generator-expression.js'][6] = 0;
  _$jscoverage['javascript-generator-expression.js'][9] = 0;
  _$jscoverage['javascript-generator-expression.js'][12] = 0;
  _$jscoverage['javascript-generator-expression.js'][13] = 0;
  _$jscoverage['javascript-generator-expression.js'][14] = 0;
  _$jscoverage['javascript-generator-expression.js'][16] = 0;
  _$jscoverage['javascript-generator-expression.js'][18] = 0;
}
_$jscoverage['javascript-generator-expression.js'].source = ["<span class=\"c\">// https://developer.mozilla.org/en/New_in_JavaScript_1.8</span>","","<span class=\"k\">let</span> it <span class=\"k\">=</span> <span class=\"k\">(</span>i <span class=\"k\">+</span> <span class=\"s\">3</span> <span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> someObj<span class=\"k\">));</span>","<span class=\"k\">try</span> <span class=\"k\">{</span>","  <span class=\"k\">while</span> <span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">)</span> <span class=\"k\">{</span>","    document<span class=\"k\">.</span>write<span class=\"k\">(</span>it<span class=\"k\">.</span>next<span class=\"k\">()</span> <span class=\"k\">+</span> <span class=\"s\">\"&lt;br&gt;</span><span class=\"t\">\\n</span><span class=\"s\">\"</span><span class=\"k\">);</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span> <span class=\"k\">catch</span> <span class=\"k\">(</span>err <span class=\"k\">if</span> err <span class=\"k\">instanceof</span> StopIteration<span class=\"k\">)</span> <span class=\"k\">{</span>","  document<span class=\"k\">.</span>write<span class=\"k\">(</span><span class=\"s\">\"End of record.&lt;br&gt;</span><span class=\"t\">\\n</span><span class=\"s\">\"</span><span class=\"k\">);</span>","<span class=\"k\">}</span>","","<span class=\"k\">function</span> handleResults<span class=\"k\">(</span> results <span class=\"k\">)</span> <span class=\"k\">{</span>","  <span class=\"k\">for</span> <span class=\"k\">(</span> <span class=\"k\">let</span> i <span class=\"k\">in</span> results <span class=\"k\">)</span>","    <span class=\"k\">;</span>","<span class=\"k\">}</span>","handleResults<span class=\"k\">(</span> i <span class=\"k\">for</span> <span class=\"k\">(</span> i <span class=\"k\">in</span> obj <span class=\"k\">)</span> <span class=\"k\">if</span> <span class=\"k\">(</span> i <span class=\"k\">&gt;</span> <span class=\"s\">3</span> <span class=\"k\">)</span> <span class=\"k\">);</span>","","it <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"s\">1</span> <span class=\"k\">for</span><span class=\"k\">(</span>a <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">for</span><span class=\"k\">(</span>b <span class=\"k\">in</span> y<span class=\"k\">));</span>"];
_$jscoverage['javascript-generator-expression.js'][3]++;
var it = ((i + 3) for (i in someObj));
_$jscoverage['javascript-generator-expression.js'][4]++;
try {
  _$jscoverage['javascript-generator-expression.js'][5]++;
  while (true) {
    _$jscoverage['javascript-generator-expression.js'][6]++;
    document.write((it.next() + "<br>\n"));
}
}
catch (err if (err instanceof StopIteration)) {
  _$jscoverage['javascript-generator-expression.js'][9]++;
  document.write("End of record.<br>\n");
}
_$jscoverage['javascript-generator-expression.js'][12]++;
function handleResults(results) {
  _$jscoverage['javascript-generator-expression.js'][13]++;
  for (let i in results) {
    _$jscoverage['javascript-generator-expression.js'][14]++;
    ;
}
}
_$jscoverage['javascript-generator-expression.js'][16]++;
handleResults((i for (i in obj) if ((i > 3))));
_$jscoverage['javascript-generator-expression.js'][18]++;
it = (1 for (a in x) for (b in y));
