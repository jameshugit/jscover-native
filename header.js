/*
 * delayed jscpverage logic
 */
if (typeof window._$jscoverage == 'undefined') {
  window._$jscoverage = {
    /**
     * Coverage data
     */
    _data: {},
    /**
     * A thread is uploading data
     */
    _uploading: true,
    /**
     * mark code line
     */
    mark: function(file, lines) {
      if(!this._data[file]) this._data[file] = [];
      for (var i in lines) {
        if(!this._data[file][lines[i]]) this._data[file][lines[i]] = 0;
      }
    },
    /**
     * Hit a line
     */
    hit: function(file, line) {
      if(!this._data[file]) this._data[file] = [];

      if(!this._data[file][line]) this._data[file][line] = 1;
      else this._data[file][line] = this._data[file][line] + 1;
    },
    /**
     * Push data to server
     */
    upload: function(force, extra) {
      /**
       * Avoid dup upload
       */
      if(!force && this._uploading) return;

      this._uploading = true;

      try {
        if(extra == undefined) extra = {};
        $.post('/jscoverage/upload', this._serialize({data:this._data,extra:extra}))
        .success(function() {
          for (var file in _$jscoverage._data) {
            var length = _$jscoverage._data[file].length;
            for (var line = 0; line < length; line++) {
              var value = _$jscoverage._data[file][line];
              if (value === undefined || value === null) continue;
              _$jscoverage._data[file][line] = 0;
            }
          }
        })
        .complete(function() {
           _$jscoverage._uploading = false; 
        });
      } catch (e) {
        this._uploading = false;
      }
    },
    /**
     */
    _serialize: function(data) {
      var json = [];

      for (var file in data) {
        var coverage = data[file];

        var array = [];
        var length = coverage.length;
        for (var line = 0; line < length; line++) {
          var value = coverage[line];
          if (value === undefined || value === null) {
            value = 'null';
          }
          array.push(value);
        }

        json.push(this._quote(file) + ':[' + array.join(',') + ']');
      }
  
      return '{' + json.join(',') + '}';
    },
    _quote: function(s) {
      return '"' + s.replace(/[\u0000-\u001f"\\\u007f-\uffff]/g, function (c) {
        switch (c) {
          case '\b': return '\\b';
          case '\f': return '\\f';
          case '\n': return '\\n';
          case '\r': return '\\r';
          case '\t': return '\\t';
          case '"': return '\\"';
          case '\\': return '\\\\';
          default: return '\\u' + this._pad(c.charCodeAt(0).toString(16));
        }
      }) + '"';
    },
    _pad: function(s) {
      return '0000'.substr(s.length) + s;
    },
  };

  $(document).ready(function() {
    $(window).unload(function (e) {
      _$jscoverage.upload(true);
    });
  });
}

