'use strict';

var Canopy = {};

Canopy.extend = function(destination, source) {
    if (!destination || !source) return destination;
    for (var key in source) {
      if (destination[key] !== source[key])
        destination[key] = source[key];
    }
    return destination;
  };

Canopy.extend(Canopy, {
  Builders: {},

  compile: function(grammar, builder) {
    var compiler = new this.Compiler(grammar, builder);
    return compiler.toSource();
  },

  forEach: function(list, block, context) {
    for (var i = 0, n = list.length; i < n; i++)
      block.call(context, list[i], i);
  },

  formatError: function(input, offset, expected) {
    var lines = input.split(/\n/g),
        lineNo = 0,
        position = 0;

    while (position <= offset) {
      position += lines[lineNo].length + 1;
      lineNo += 1;
    }
    var message = 'Line ' + lineNo + ': expected ' + expected.join(', ') + '\n',
        line = lines[lineNo - 1];

    message += line + '\n';
    position -= line.length + 1;

    while (position < offset) {
      message += ' ';
      position += 1;
    }
    return message + '^';
  },

  inherit: function(subclass, parent) {
    var chain = function() {};
    chain.prototype = parent.prototype;
    subclass.prototype = new chain();
    subclass.prototype.constructor = subclass;
  }
});

(function() {
  'use strict';

  var extend = function (destination, source) {
    if (!destination || !source) return destination;
    for (var key in source) {
      if (destination[key] !== source[key])
        destination[key] = source[key];
    }
    return destination;
  };

  var formatError = function (input, offset, expected) {
    var lines = input.split(/\n/g),
        lineNo = 0,
        position = 0;

    while (position <= offset) {
      position += lines[lineNo].length + 1;
      lineNo += 1;
    }
    var message = 'Line ' + lineNo + ': expected ' + expected.join(', ') + '\n',
        line = lines[lineNo - 1];

    message += line + '\n';
    position -= line.length + 1;

    while (position < offset) {
      message += ' ';
      position += 1;
    }
    return message + '^';
  };

  var inherit = function (subclass, parent) {
    var chain = function() {};
    chain.prototype = parent.prototype;
    subclass.prototype = new chain();
    subclass.prototype.constructor = subclass;
  };

  var TreeNode = function(text, offset, elements) {
    this.text = text;
    this.offset = offset;
    this.elements = elements || [];
  };

  TreeNode.prototype.forEach = function(block, context) {
    for (var el = this.elements, i = 0, n = el.length; i < n; i++) {
      block.call(context, el[i], i, el);
    }
  };

  var TreeNode1 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['grammar_name'] = elements[1];
    this['rules'] = elements[2];
  };
  inherit(TreeNode1, TreeNode);

  var TreeNode2 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['grammar_rule'] = elements[1];
  };
  inherit(TreeNode2, TreeNode);

  var TreeNode3 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['object_identifier'] = elements[3];
  };
  inherit(TreeNode3, TreeNode);

  var TreeNode4 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[0];
    this['assignment'] = elements[1];
    this['parsing_expression'] = elements[2];
  };
  inherit(TreeNode4, TreeNode);

  var TreeNode5 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['parsing_expression'] = elements[2];
  };
  inherit(TreeNode5, TreeNode);

  var TreeNode6 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['first_part'] = elements[0];
    this['choice_part'] = elements[0];
    this['rest'] = elements[1];
  };
  inherit(TreeNode6, TreeNode);

  var TreeNode7 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['expression'] = elements[3];
    this['choice_part'] = elements[3];
  };
  inherit(TreeNode7, TreeNode);

  var TreeNode8 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['type_tag'] = elements[1];
  };
  inherit(TreeNode8, TreeNode);

  var TreeNode9 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['actionable_expression'] = elements[0];
    this['action_tag'] = elements[2];
  };
  inherit(TreeNode9, TreeNode);

  var TreeNode10 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['actionable_expression'] = elements[2];
  };
  inherit(TreeNode10, TreeNode);

  var TreeNode11 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[1];
  };
  inherit(TreeNode11, TreeNode);

  var TreeNode12 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['object_identifier'] = elements[1];
  };
  inherit(TreeNode12, TreeNode);

  var TreeNode13 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['first_part'] = elements[0];
    this['sequence_part'] = elements[0];
    this['rest'] = elements[1];
  };
  inherit(TreeNode13, TreeNode);

  var TreeNode14 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['expression'] = elements[1];
    this['sequence_part'] = elements[1];
  };
  inherit(TreeNode14, TreeNode);

  var TreeNode15 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['expression'] = elements[1];
  };
  inherit(TreeNode15, TreeNode);

  var TreeNode16 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['atom'] = elements[0];
  };
  inherit(TreeNode16, TreeNode);

  var TreeNode17 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['atom'] = elements[0];
    this['quantifier'] = elements[1];
  };
  inherit(TreeNode17, TreeNode);

  var TreeNode18 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['predicate'] = elements[0];
    this['atom'] = elements[1];
  };
  inherit(TreeNode18, TreeNode);

  var TreeNode19 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[0];
  };
  inherit(TreeNode19, TreeNode);

  var TreeNode20 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[0];
  };
  inherit(TreeNode20, TreeNode);

  var TreeNode21 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[0];
  };
  inherit(TreeNode21, TreeNode);

  var TreeNode22 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['identifier'] = elements[1];
  };
  inherit(TreeNode22, TreeNode);

  var FAILURE = {};

  var Grammar = {
    _read_grammar: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._grammar = this._cache._grammar || {};
      var cached = this._cache._grammar[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var remaining0 = 0, index2 = this._offset, elements1 = [], address2 = true;
      while (address2 !== FAILURE) {
        address2 = this._read___();
        if (address2 !== FAILURE) {
          elements1.push(address2);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
        this._offset = this._offset;
      } else {
        address1 = FAILURE;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address3 = FAILURE;
        address3 = this._read_grammar_name();
        if (address3 !== FAILURE) {
          elements0[1] = address3;
          var address4 = FAILURE;
          var remaining1 = 1, index3 = this._offset, elements2 = [], address5 = true;
          while (address5 !== FAILURE) {
            var index4 = this._offset, elements3 = new Array(2);
            var address6 = FAILURE;
            var remaining2 = 0, index5 = this._offset, elements4 = [], address7 = true;
            while (address7 !== FAILURE) {
              address7 = this._read___();
              if (address7 !== FAILURE) {
                elements4.push(address7);
                --remaining2;
              }
            }
            if (remaining2 <= 0) {
              address6 = new TreeNode(this._input.substring(index5, this._offset), index5, elements4);
              this._offset = this._offset;
            } else {
              address6 = FAILURE;
            }
            if (address6 !== FAILURE) {
              elements3[0] = address6;
              var address8 = FAILURE;
              address8 = this._read_grammar_rule();
              if (address8 !== FAILURE) {
                elements3[1] = address8;
              } else {
                elements3 = null;
                this._offset = index4;
              }
            } else {
              elements3 = null;
              this._offset = index4;
            }
            if (elements3 === null) {
              address5 = FAILURE;
            } else {
              address5 = new TreeNode2(this._input.substring(index4, this._offset), index4, elements3);
              this._offset = this._offset;
            }
            if (address5 !== FAILURE) {
              elements2.push(address5);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address4 = new TreeNode(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          } else {
            address4 = FAILURE;
          }
          if (address4 !== FAILURE) {
            elements0[2] = address4;
            var address9 = FAILURE;
            var remaining3 = 0, index6 = this._offset, elements5 = [], address10 = true;
            while (address10 !== FAILURE) {
              address10 = this._read___();
              if (address10 !== FAILURE) {
                elements5.push(address10);
                --remaining3;
              }
            }
            if (remaining3 <= 0) {
              address9 = new TreeNode(this._input.substring(index6, this._offset), index6, elements5);
              this._offset = this._offset;
            } else {
              address9 = FAILURE;
            }
            if (address9 !== FAILURE) {
              elements0[3] = address9;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode1(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Grammar);
      this._cache._grammar[index0] = [address0, this._offset];
      return address0;
    },

    _read_grammar_name: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._grammar_name = this._cache._grammar_name || {};
      var cached = this._cache._grammar_name[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 7);
      }
      if (chunk0 !== null && chunk0.toLowerCase() === 'grammar'.toLowerCase()) {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 7), this._offset);
        this._offset = this._offset + 7;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('`grammar`');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === ':') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('":"');
          }
        }
        if (address2 === FAILURE) {
          address2 = new TreeNode(this._input.substring(index2, index2), index2);
          this._offset = index2;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var remaining0 = 1, index3 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            address4 = this._read___();
            if (address4 !== FAILURE) {
              elements1.push(address4);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address3 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
            this._offset = this._offset;
          } else {
            address3 = FAILURE;
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address5 = FAILURE;
            address5 = this._read_object_identifier();
            if (address5 !== FAILURE) {
              elements0[3] = address5;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode3(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._grammar_name[index0] = [address0, this._offset];
      return address0;
    },

    _read_grammar_rule: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._grammar_rule = this._cache._grammar_rule || {};
      var cached = this._cache._grammar_rule[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      address1 = this._read_identifier();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_assignment();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          address3 = this._read_parsing_expression();
          if (address3 !== FAILURE) {
            elements0[2] = address3;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode4(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.GrammarRule);
      this._cache._grammar_rule[index0] = [address0, this._offset];
      return address0;
    },

    _read_assignment: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._assignment = this._cache._assignment || {};
      var cached = this._cache._assignment[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var remaining0 = 1, index2 = this._offset, elements1 = [], address2 = true;
      while (address2 !== FAILURE) {
        address2 = this._read___();
        if (address2 !== FAILURE) {
          elements1.push(address2);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
        this._offset = this._offset;
      } else {
        address1 = FAILURE;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address3 = FAILURE;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 2);
        }
        if (chunk0 === '<-') {
          address3 = new TreeNode(this._input.substring(this._offset, this._offset + 2), this._offset);
          this._offset = this._offset + 2;
        } else {
          address3 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"<-"');
          }
        }
        if (address3 !== FAILURE) {
          elements0[1] = address3;
          var address4 = FAILURE;
          var remaining1 = 1, index3 = this._offset, elements2 = [], address5 = true;
          while (address5 !== FAILURE) {
            address5 = this._read___();
            if (address5 !== FAILURE) {
              elements2.push(address5);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address4 = new TreeNode(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          } else {
            address4 = FAILURE;
          }
          if (address4 !== FAILURE) {
            elements0[2] = address4;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._assignment[index0] = [address0, this._offset];
      return address0;
    },

    _read_parsing_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._parsing_expression = this._cache._parsing_expression || {};
      var cached = this._cache._parsing_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_choice_expression();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_choice_part();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._parsing_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_parenthesised_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._parenthesised_expression = this._cache._parenthesised_expression || {};
      var cached = this._cache._parenthesised_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(5);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '(') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"("');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          address3 = this._read___();
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address4 = FAILURE;
          address4 = this._read_parsing_expression();
          if (address4 !== FAILURE) {
            elements0[2] = address4;
            var address5 = FAILURE;
            var remaining1 = 0, index3 = this._offset, elements2 = [], address6 = true;
            while (address6 !== FAILURE) {
              address6 = this._read___();
              if (address6 !== FAILURE) {
                elements2.push(address6);
                --remaining1;
              }
            }
            if (remaining1 <= 0) {
              address5 = new TreeNode(this._input.substring(index3, this._offset), index3, elements2);
              this._offset = this._offset;
            } else {
              address5 = FAILURE;
            }
            if (address5 !== FAILURE) {
              elements0[3] = address5;
              var address7 = FAILURE;
              var chunk1 = null;
              if (this._offset < this._inputSize) {
                chunk1 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk1 === ')') {
                address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address7 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('")"');
                }
              }
              if (address7 !== FAILURE) {
                elements0[4] = address7;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode5(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._parenthesised_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_choice_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._choice_expression = this._cache._choice_expression || {};
      var cached = this._cache._choice_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_choice_part();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset, elements2 = new Array(4);
          var address4 = FAILURE;
          var remaining1 = 1, index4 = this._offset, elements3 = [], address5 = true;
          while (address5 !== FAILURE) {
            address5 = this._read___();
            if (address5 !== FAILURE) {
              elements3.push(address5);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address4 = new TreeNode(this._input.substring(index4, this._offset), index4, elements3);
            this._offset = this._offset;
          } else {
            address4 = FAILURE;
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address6 = FAILURE;
            var chunk0 = null;
            if (this._offset < this._inputSize) {
              chunk0 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk0 === '/') {
              address6 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address6 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"/"');
              }
            }
            if (address6 !== FAILURE) {
              elements2[1] = address6;
              var address7 = FAILURE;
              var remaining2 = 1, index5 = this._offset, elements4 = [], address8 = true;
              while (address8 !== FAILURE) {
                address8 = this._read___();
                if (address8 !== FAILURE) {
                  elements4.push(address8);
                  --remaining2;
                }
              }
              if (remaining2 <= 0) {
                address7 = new TreeNode(this._input.substring(index5, this._offset), index5, elements4);
                this._offset = this._offset;
              } else {
                address7 = FAILURE;
              }
              if (address7 !== FAILURE) {
                elements2[2] = address7;
                var address9 = FAILURE;
                address9 = this._read_choice_part();
                if (address9 !== FAILURE) {
                  elements2[3] = address9;
                } else {
                  elements2 = null;
                  this._offset = index3;
                }
              } else {
                elements2 = null;
                this._offset = index3;
              }
            } else {
              elements2 = null;
              this._offset = index3;
            }
          } else {
            elements2 = null;
            this._offset = index3;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode7(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode6(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Choice);
      this._cache._choice_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_choice_part: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._choice_part = this._cache._choice_part || {};
      var cached = this._cache._choice_part[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var index2 = this._offset;
      address1 = this._read_action_expression();
      if (address1 === FAILURE) {
        this._offset = index2;
        address1 = this._read_sequence_expression();
        if (address1 === FAILURE) {
          this._offset = index2;
          address1 = this._read_sequence_part();
          if (address1 === FAILURE) {
            this._offset = index2;
          }
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index3 = this._offset;
        var index4 = this._offset, elements1 = new Array(2);
        var address3 = FAILURE;
        var remaining0 = 1, index5 = this._offset, elements2 = [], address4 = true;
        while (address4 !== FAILURE) {
          address4 = this._read___();
          if (address4 !== FAILURE) {
            elements2.push(address4);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address3 = new TreeNode(this._input.substring(index5, this._offset), index5, elements2);
          this._offset = this._offset;
        } else {
          address3 = FAILURE;
        }
        if (address3 !== FAILURE) {
          elements1[0] = address3;
          var address5 = FAILURE;
          address5 = this._read_type_tag();
          if (address5 !== FAILURE) {
            elements1[1] = address5;
          } else {
            elements1 = null;
            this._offset = index4;
          }
        } else {
          elements1 = null;
          this._offset = index4;
        }
        if (elements1 === null) {
          address2 = FAILURE;
        } else {
          address2 = new TreeNode8(this._input.substring(index4, this._offset), index4, elements1);
          this._offset = this._offset;
        }
        if (address2 === FAILURE) {
          address2 = new TreeNode(this._input.substring(index3, index3), index3);
          this._offset = index3;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.ChoicePart);
      this._cache._choice_part[index0] = [address0, this._offset];
      return address0;
    },

    _read_action_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._action_expression = this._cache._action_expression || {};
      var cached = this._cache._action_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      address1 = this._read_actionable_expression();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          address3 = this._read___();
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address4 = FAILURE;
          address4 = this._read_action_tag();
          if (address4 !== FAILURE) {
            elements0[2] = address4;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode9(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Action);
      this._cache._action_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_actionable_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._actionable_expression = this._cache._actionable_expression || {};
      var cached = this._cache._actionable_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var index2 = this._offset, elements0 = new Array(5);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '(') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"("');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index3 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          address3 = this._read___();
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address4 = FAILURE;
          address4 = this._read_actionable_expression();
          if (address4 !== FAILURE) {
            elements0[2] = address4;
            var address5 = FAILURE;
            var remaining1 = 0, index4 = this._offset, elements2 = [], address6 = true;
            while (address6 !== FAILURE) {
              address6 = this._read___();
              if (address6 !== FAILURE) {
                elements2.push(address6);
                --remaining1;
              }
            }
            if (remaining1 <= 0) {
              address5 = new TreeNode(this._input.substring(index4, this._offset), index4, elements2);
              this._offset = this._offset;
            } else {
              address5 = FAILURE;
            }
            if (address5 !== FAILURE) {
              elements0[3] = address5;
              var address7 = FAILURE;
              var chunk1 = null;
              if (this._offset < this._inputSize) {
                chunk1 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk1 === ')') {
                address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address7 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('")"');
                }
              }
              if (address7 !== FAILURE) {
                elements0[4] = address7;
              } else {
                elements0 = null;
                this._offset = index2;
              }
            } else {
              elements0 = null;
              this._offset = index2;
            }
          } else {
            elements0 = null;
            this._offset = index2;
          }
        } else {
          elements0 = null;
          this._offset = index2;
        }
      } else {
        elements0 = null;
        this._offset = index2;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode10(this._input.substring(index2, this._offset), index2, elements0);
        this._offset = this._offset;
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_sequence_expression();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_repeated_atom();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_terminal_node();
            if (address0 === FAILURE) {
              this._offset = index1;
            }
          }
        }
      }
      this._cache._actionable_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_action_tag: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._action_tag = this._cache._action_tag || {};
      var cached = this._cache._action_tag[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '%') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"%"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_identifier();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode11(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._action_tag[index0] = [address0, this._offset];
      return address0;
    },

    _read_type_tag: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._type_tag = this._cache._type_tag || {};
      var cached = this._cache._type_tag[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '<') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"<"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_object_identifier();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 === '>') {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('">"');
            }
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode12(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._type_tag[index0] = [address0, this._offset];
      return address0;
    },

    _read_sequence_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._sequence_expression = this._cache._sequence_expression || {};
      var cached = this._cache._sequence_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_sequence_part();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 1, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var remaining1 = 1, index4 = this._offset, elements3 = [], address5 = true;
          while (address5 !== FAILURE) {
            address5 = this._read___();
            if (address5 !== FAILURE) {
              elements3.push(address5);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address4 = new TreeNode(this._input.substring(index4, this._offset), index4, elements3);
            this._offset = this._offset;
          } else {
            address4 = FAILURE;
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address6 = FAILURE;
            address6 = this._read_sequence_part();
            if (address6 !== FAILURE) {
              elements2[1] = address6;
            } else {
              elements2 = null;
              this._offset = index3;
            }
          } else {
            elements2 = null;
            this._offset = index3;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode14(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode13(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Sequence);
      this._cache._sequence_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_sequence_part: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._sequence_part = this._cache._sequence_part || {};
      var cached = this._cache._sequence_part[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var index2 = this._offset;
      address1 = this._read_label();
      if (address1 === FAILURE) {
        address1 = new TreeNode(this._input.substring(index2, index2), index2);
        this._offset = index2;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index3 = this._offset;
        address2 = this._read_maybe_atom();
        if (address2 === FAILURE) {
          this._offset = index3;
          address2 = this._read_repeated_atom();
          if (address2 === FAILURE) {
            this._offset = index3;
            address2 = this._read_atom();
            if (address2 === FAILURE) {
              this._offset = index3;
            }
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode15(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.SequencePart);
      this._cache._sequence_part[index0] = [address0, this._offset];
      return address0;
    },

    _read_maybe_atom: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._maybe_atom = this._cache._maybe_atom || {};
      var cached = this._cache._maybe_atom[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_atom();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 === '?') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"?"');
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode16(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Maybe);
      this._cache._maybe_atom[index0] = [address0, this._offset];
      return address0;
    },

    _read_repeated_atom: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._repeated_atom = this._cache._repeated_atom || {};
      var cached = this._cache._repeated_atom[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_atom();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 === '*') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"*"');
          }
        }
        if (address2 === FAILURE) {
          this._offset = index2;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 === '+') {
            address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address2 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"+"');
            }
          }
          if (address2 === FAILURE) {
            this._offset = index2;
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode17(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Repeat);
      this._cache._repeated_atom[index0] = [address0, this._offset];
      return address0;
    },

    _read_atom: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._atom = this._cache._atom || {};
      var cached = this._cache._atom[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_parenthesised_expression();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_predicated_atom();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_reference_expression();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_terminal_node();
            if (address0 === FAILURE) {
              this._offset = index1;
            }
          }
        }
      }
      this._cache._atom[index0] = [address0, this._offset];
      return address0;
    },

    _read_terminal_node: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._terminal_node = this._cache._terminal_node || {};
      var cached = this._cache._terminal_node[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      address0 = this._read_string_expression();
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_ci_string_expression();
        if (address0 === FAILURE) {
          this._offset = index1;
          address0 = this._read_char_class_expression();
          if (address0 === FAILURE) {
            this._offset = index1;
            address0 = this._read_any_char_expression();
            if (address0 === FAILURE) {
              this._offset = index1;
            }
          }
        }
      }
      this._cache._terminal_node[index0] = [address0, this._offset];
      return address0;
    },

    _read_predicated_atom: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._predicated_atom = this._cache._predicated_atom || {};
      var cached = this._cache._predicated_atom[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var index2 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '&') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"&"');
        }
      }
      if (address1 === FAILURE) {
        this._offset = index2;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === '!') {
          address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address1 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"!"');
          }
        }
        if (address1 === FAILURE) {
          this._offset = index2;
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_atom();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode18(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Predicate);
      this._cache._predicated_atom[index0] = [address0, this._offset];
      return address0;
    },

    _read_reference_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._reference_expression = this._cache._reference_expression || {};
      var cached = this._cache._reference_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_identifier();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        address2 = this._read_assignment();
        this._offset = index2;
        if (address2 === FAILURE) {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset), this._offset);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode19(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.Reference);
      this._cache._reference_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_string_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._string_expression = this._cache._string_expression || {};
      var cached = this._cache._string_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var index2 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '"') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('\'"\'');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index3 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index4 = this._offset;
          var index5 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 === '\\') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"\\\\"');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            if (this._offset < this._inputSize) {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('<any char>');
              }
            }
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index5;
            }
          } else {
            elements2 = null;
            this._offset = index5;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode(this._input.substring(index5, this._offset), index5, elements2);
            this._offset = this._offset;
          }
          if (address3 === FAILURE) {
            this._offset = index4;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 !== null && /^[^"]/.test(chunk2)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^"]');
              }
            }
            if (address3 === FAILURE) {
              this._offset = index4;
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address6 = FAILURE;
          var chunk3 = null;
          if (this._offset < this._inputSize) {
            chunk3 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk3 === '"') {
            address6 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address6 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('\'"\'');
            }
          }
          if (address6 !== FAILURE) {
            elements0[2] = address6;
          } else {
            elements0 = null;
            this._offset = index2;
          }
        } else {
          elements0 = null;
          this._offset = index2;
        }
      } else {
        elements0 = null;
        this._offset = index2;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index2, this._offset), index2, elements0);
        this._offset = this._offset;
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var index6 = this._offset, elements3 = new Array(3);
        var address7 = FAILURE;
        var chunk4 = null;
        if (this._offset < this._inputSize) {
          chunk4 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk4 === '\'') {
          address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address7 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"\'"');
          }
        }
        if (address7 !== FAILURE) {
          elements3[0] = address7;
          var address8 = FAILURE;
          var remaining1 = 0, index7 = this._offset, elements4 = [], address9 = true;
          while (address9 !== FAILURE) {
            var index8 = this._offset;
            var index9 = this._offset, elements5 = new Array(2);
            var address10 = FAILURE;
            var chunk5 = null;
            if (this._offset < this._inputSize) {
              chunk5 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk5 === '\\') {
              address10 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address10 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"\\\\"');
              }
            }
            if (address10 !== FAILURE) {
              elements5[0] = address10;
              var address11 = FAILURE;
              if (this._offset < this._inputSize) {
                address11 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address11 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('<any char>');
                }
              }
              if (address11 !== FAILURE) {
                elements5[1] = address11;
              } else {
                elements5 = null;
                this._offset = index9;
              }
            } else {
              elements5 = null;
              this._offset = index9;
            }
            if (elements5 === null) {
              address9 = FAILURE;
            } else {
              address9 = new TreeNode(this._input.substring(index9, this._offset), index9, elements5);
              this._offset = this._offset;
            }
            if (address9 === FAILURE) {
              this._offset = index8;
              var chunk6 = null;
              if (this._offset < this._inputSize) {
                chunk6 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk6 !== null && /^[^']/.test(chunk6)) {
                address9 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address9 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('[^\']');
                }
              }
              if (address9 === FAILURE) {
                this._offset = index8;
              }
            }
            if (address9 !== FAILURE) {
              elements4.push(address9);
              --remaining1;
            }
          }
          if (remaining1 <= 0) {
            address8 = new TreeNode(this._input.substring(index7, this._offset), index7, elements4);
            this._offset = this._offset;
          } else {
            address8 = FAILURE;
          }
          if (address8 !== FAILURE) {
            elements3[1] = address8;
            var address12 = FAILURE;
            var chunk7 = null;
            if (this._offset < this._inputSize) {
              chunk7 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk7 === '\'') {
              address12 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address12 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"\'"');
              }
            }
            if (address12 !== FAILURE) {
              elements3[2] = address12;
            } else {
              elements3 = null;
              this._offset = index6;
            }
          } else {
            elements3 = null;
            this._offset = index6;
          }
        } else {
          elements3 = null;
          this._offset = index6;
        }
        if (elements3 === null) {
          address0 = FAILURE;
        } else {
          address0 = new TreeNode(this._input.substring(index6, this._offset), index6, elements3);
          this._offset = this._offset;
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      extend(address0, this._types.String);
      this._cache._string_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_ci_string_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._ci_string_expression = this._cache._ci_string_expression || {};
      var cached = this._cache._ci_string_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '`') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"`"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset;
          var index4 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 === '\\') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"\\\\"');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            if (this._offset < this._inputSize) {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('<any char>');
              }
            }
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index4;
            }
          } else {
            elements2 = null;
            this._offset = index4;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode(this._input.substring(index4, this._offset), index4, elements2);
            this._offset = this._offset;
          }
          if (address3 === FAILURE) {
            this._offset = index3;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 !== null && /^[^`]/.test(chunk2)) {
              address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address3 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('[^`]');
              }
            }
            if (address3 === FAILURE) {
              this._offset = index3;
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address6 = FAILURE;
          var chunk3 = null;
          if (this._offset < this._inputSize) {
            chunk3 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk3 === '`') {
            address6 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address6 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"`"');
            }
          }
          if (address6 !== FAILURE) {
            elements0[2] = address6;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.CIString);
      this._cache._ci_string_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_any_char_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._any_char_expression = this._cache._any_char_expression || {};
      var cached = this._cache._any_char_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '.') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"."');
        }
      }
      extend(address0, this._types.AnyChar);
      this._cache._any_char_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_char_class_expression: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._char_class_expression = this._cache._char_class_expression || {};
      var cached = this._cache._char_class_expression[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '[') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"["');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === '^') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"^"');
          }
        }
        if (address2 === FAILURE) {
          address2 = new TreeNode(this._input.substring(index2, index2), index2);
          this._offset = index2;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var remaining0 = 1, index3 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var index4 = this._offset;
            var index5 = this._offset, elements2 = new Array(2);
            var address5 = FAILURE;
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 === '\\') {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"\\\\"');
              }
            }
            if (address5 !== FAILURE) {
              elements2[0] = address5;
              var address6 = FAILURE;
              if (this._offset < this._inputSize) {
                address6 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address6 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('<any char>');
                }
              }
              if (address6 !== FAILURE) {
                elements2[1] = address6;
              } else {
                elements2 = null;
                this._offset = index5;
              }
            } else {
              elements2 = null;
              this._offset = index5;
            }
            if (elements2 === null) {
              address4 = FAILURE;
            } else {
              address4 = new TreeNode(this._input.substring(index5, this._offset), index5, elements2);
              this._offset = this._offset;
            }
            if (address4 === FAILURE) {
              this._offset = index4;
              var chunk3 = null;
              if (this._offset < this._inputSize) {
                chunk3 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk3 !== null && /^[^\]]/.test(chunk3)) {
                address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address4 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('[^\\]]');
                }
              }
              if (address4 === FAILURE) {
                this._offset = index4;
              }
            }
            if (address4 !== FAILURE) {
              elements1.push(address4);
              --remaining0;
            }
          }
          if (remaining0 <= 0) {
            address3 = new TreeNode(this._input.substring(index3, this._offset), index3, elements1);
            this._offset = this._offset;
          } else {
            address3 = FAILURE;
          }
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address7 = FAILURE;
            var chunk4 = null;
            if (this._offset < this._inputSize) {
              chunk4 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk4 === ']') {
              address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address7 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"]"');
              }
            }
            if (address7 !== FAILURE) {
              elements0[3] = address7;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      extend(address0, this._types.CharClass);
      this._cache._char_class_expression[index0] = [address0, this._offset];
      return address0;
    },

    _read_label: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._label = this._cache._label || {};
      var cached = this._cache._label[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_identifier();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 === ':') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('":"');
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode20(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._label[index0] = [address0, this._offset];
      return address0;
    },

    _read_object_identifier: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object_identifier = this._cache._object_identifier || {};
      var cached = this._cache._object_identifier[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      address1 = this._read_identifier();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var index3 = this._offset, elements2 = new Array(2);
          var address4 = FAILURE;
          var chunk0 = null;
          if (this._offset < this._inputSize) {
            chunk0 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk0 === '.') {
            address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address4 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"."');
            }
          }
          if (address4 !== FAILURE) {
            elements2[0] = address4;
            var address5 = FAILURE;
            address5 = this._read_identifier();
            if (address5 !== FAILURE) {
              elements2[1] = address5;
            } else {
              elements2 = null;
              this._offset = index3;
            }
          } else {
            elements2 = null;
            this._offset = index3;
          }
          if (elements2 === null) {
            address3 = FAILURE;
          } else {
            address3 = new TreeNode22(this._input.substring(index3, this._offset), index3, elements2);
            this._offset = this._offset;
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode21(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._object_identifier[index0] = [address0, this._offset];
      return address0;
    },

    _read_identifier: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._identifier = this._cache._identifier || {};
      var cached = this._cache._identifier[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[a-zA-Z_]/.test(chunk0)) {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[a-zA-Z_]');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 !== null && /^[a-zA-Z0-9_]/.test(chunk1)) {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('[a-zA-Z0-9_]');
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._identifier[index0] = [address0, this._offset];
      return address0;
    },

    _read___: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache.___ = this._cache.___ || {};
      var cached = this._cache.___[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 !== null && /^[\s]/.test(chunk0)) {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('[\\s]');
        }
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        address0 = this._read_comment();
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache.___[index0] = [address0, this._offset];
      return address0;
    },

    _read_comment: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._comment = this._cache._comment || {};
      var cached = this._cache._comment[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(2);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '#') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"#"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var remaining0 = 0, index2 = this._offset, elements1 = [], address3 = true;
        while (address3 !== FAILURE) {
          var chunk1 = null;
          if (this._offset < this._inputSize) {
            chunk1 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk1 !== null && /^[^\n]/.test(chunk1)) {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('[^\\n]');
            }
          }
          if (address3 !== FAILURE) {
            elements1.push(address3);
            --remaining0;
          }
        }
        if (remaining0 <= 0) {
          address2 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);
          this._offset = this._offset;
        } else {
          address2 = FAILURE;
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0 === null) {
        address0 = FAILURE;
      } else {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._comment[index0] = [address0, this._offset];
      return address0;
    }
  };

  var Parser = function(input, actions, types) {
    this._input = input;
    this._inputSize = input.length;
    this._actions = actions;
    this._types = types;
    this._offset = 0;
    this._cache = {};
    this._failure = 0;
    this._expected = [];
  };

  Parser.prototype.parse = function() {
    var tree = this._read_grammar();
    if (tree !== FAILURE && this._offset === this._inputSize) {
      return tree;
    }
    if (this._expected.length === 0) {
      this._failure = this._offset;
      this._expected.push('<EOF>');
    }
    this.constructor.lastError = {offset: this._offset, expected: this._expected};
    throw new SyntaxError(formatError(this._input, this._failure, this._expected));
  };

  var parse = function(input, options) {
    options = options || {};
    var parser = new Parser(input, options.actions, options.types);
    return parser.parse();
  };
  extend(Parser.prototype, Grammar);

  var exported = {Grammar: Grammar, Parser: Parser, parse: parse};

  if (typeof require === 'function' && typeof exports === 'object') {
    extend(exports, exported);
    if (typeof Canopy !== 'undefined') {
      Canopy.MetaGrammar = exported;
    }
  } else {
    var namespace = typeof this !== 'undefined' ? this : window;
    namespace = namespace.Canopy = namespace.Canopy || {};
    namespace.MetaGrammar = exported;
  }
})();

(function() {
  var Builder = function(parent, name) {
    if (parent) {
      this._parent = parent;
      this._indentLevel = parent._indentLevel;
    } else {
      this._buffer = '';
      this._indentLevel = 0;
    }
    this._name = name;
    this._varIndex = {};

    this._buffers = {};
    this._currentBuffer = null;
    this._labels = {};
  };

  var TYPES = {
    address:    'TreeNode',
    chunk:      'String',
    elements:   'List<TreeNode>',
    index:      'int',
    remaining:  'int'
  };

  Builder.create = function(filename, sep) {
    var builder = new Builder();
    builder.filename = filename;
    builder.pathsep = sep;
    return builder;
  };

  Canopy.extend(Builder.prototype, {
    serialize: function() {
      return this._buffers;
    },

    _newBuffer: function(name) {
      this._currentBuffer = this.filename.replace(/\.peg$/, this.pathsep + name + '.java');
      var namespace = this.filename.replace(/\.peg$/, '').split(this.pathsep);
      this._buffers[this._currentBuffer] = 'package ' + namespace.join('.') + ';\n\n';
    },

    _write: function(string) {
      if (this._parent) return this._parent._write(string);
      this._buffers[this._currentBuffer] += string;
    },

    _indent: function(block, context) {
      this._indentLevel += 1;
      block.call(context, this);
      this._indentLevel -= 1;
    },

    _newline: function() {
      this._write('\n');
    },

    _line: function(source, semicolon) {
      var i = this._indentLevel;
      while (i--) this._write('    ');
      this._write(source);
      if (semicolon !== false) this._write(';');
      this._newline();
    },

    _quote: function(string) {
      string = string.replace(/\\/g, '\\\\')
                     .replace(/"/g, '\\"')
                     .replace(/\x08/g, '\\b')
                     .replace(/\t/g, '\\t')
                     .replace(/\n/g, '\\n')
                     .replace(/\f/g, '\\f')
                     .replace(/\r/g, '\\r');

      return '"' + string + '"';
    },

    package_: function(name, block, context) {
      this._grammarName = name.replace(/\./g, '');
      block.call(context, this);
    },

    syntaxNodeClass_: function() {
      this._newBuffer('TreeNode');

      var imports = ['ArrayList', 'EnumMap', 'Iterator', 'List', 'Map'];
      for (var i = 0, n = imports.length; i < n; i++)
        this._line('import java.util.' + imports[i]);

      var name = 'TreeNode';

      this._newline();
      this._line('public class ' + name + ' implements Iterable<' + name + '> {', false);
      this._indent(function(builder) {
        builder._line('public String text');
        builder._line('public int offset');
        builder._line('public List<' + name + '> elements');
        builder._newline();
        builder._line('Map<Label, ' + name + '> labelled');

        builder._newline();
        builder._line('public ' + name + '() {', false);
        builder._indent(function(builder) {
          builder._line('this("", -1, new ArrayList<' + name + '>(0))');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('public ' + name + '(String text, int offset) {', false);
        builder._indent(function(builder) {
          builder._line('this(text, offset, new ArrayList<' + name + '>(0))');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('public ' + name + '(String text, int offset, List<' + name + '> elements) {', false);
        builder._indent(function(builder) {
          builder.assign_('this.text', 'text');
          builder.assign_('this.offset', 'offset');
          builder.assign_('this.elements', 'elements');
          builder.assign_('this.labelled', 'new EnumMap<Label, ' + name + '>(Label.class)');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('public ' + name + ' get(Label key) {', false);
        builder._indent(function(builder) {
          builder.return_('labelled.get(key)');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('public Iterator<' + name + '> iterator() {', false);
        builder._indent(function(builder) {
          builder.return_('elements.iterator()');
        });
        builder._line('}', false);
      });
      this._line('}', false);

      return name;
    },

    grammarModule_: function(actions, block, context) {
      this._newBuffer('CacheRecord');
      this._line('class CacheRecord {', false);
      this._indent(function(builder) {
        builder._line('TreeNode node');
        builder._line('int tail');
        builder._newline();
        builder._line('CacheRecord(TreeNode node, int tail) {', false);
        builder._indent(function(builder) {
          builder.assign_('this.node', 'node');
          builder.assign_('this.tail', 'tail');
        });
        builder._line('}', false);
      });
      this._line('}', false);

      this._newBuffer('Actions');
      this._line('import java.util.List');
      this._newline();
      this._line('public interface Actions {', false);
      this._indent(function(builder) {
        for (var i = 0, n = actions.length ; i < n; i++)
          builder._line('public TreeNode ' + actions[i] + '(String input, int start, int end, List<TreeNode> elements)');
      });
      this._line('}', false);

      this._newBuffer('Grammar');
      this._line('import java.util.ArrayList');
      this._line('import java.util.HashMap');
      this._line('import java.util.List');
      this._line('import java.util.Map');
      this._line('import java.util.regex.Pattern');
      this._newline();
      this._line('abstract class Grammar {', false);
      this._indent(function(builder) {
        builder.assign_('static TreeNode ' + builder.nullNode_(), 'new TreeNode()');
        builder._newline();
        builder._line('int inputSize, offset, failure');
        builder._line('String input');
        builder._line('List<String> expected');
        builder._line('Map<Label, Map<Integer, CacheRecord>> cache');
        builder._line('Actions actions');
        builder._newline();
        block.call(context, builder);
      });
      this._line('}', false);
    },

    compileRegex_: function(charClass, name) {
      var regex  = charClass.toRegExp(),
          source = regex.source.replace(/^\^/, '\\A');

      this.assign_('private static Pattern ' + name, 'Pattern.compile(' + this._quote(source) + ')');
      charClass.constName = name;
    },

    parserClass_: function(root) {
      this._newBuffer('ParseError');
      this._line('public class ParseError extends Exception {', false);
      this._indent(function(builder) {
        builder._line('public ParseError(String message) {', false);
        builder._indent(function(builder) {
          builder._line('super(message)');
        });
        builder._line('}', false);
      });
      this._line('}', false);

      this._newBuffer(this._grammarName);
      this._line('import java.util.ArrayList');
      this._line('import java.util.EnumMap');
      this._line('import java.util.List');
      this._line('import java.util.Map');

      this._newline();
      this._line('public class ' + this._grammarName + ' extends Grammar {', false);
      this._indent(function(builder) {
        builder._line('public ' + this._grammarName + '(String input, Actions actions) {', false);
        builder._indent(function(builder) {
          builder.assign_('this.input', 'input');
          builder.assign_('this.inputSize', 'input.length()');
          builder.assign_('this.actions', 'actions');
          builder.assign_('this.offset', '0');
          builder.assign_('this.cache', 'new EnumMap<Label, Map<Integer, CacheRecord>>(Label.class)');
          builder.assign_('this.failure', '0');
          builder.assign_('this.expected', 'new ArrayList<String>()');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('public static TreeNode parse(String input, Actions actions) throws ParseError {', false);
        builder._indent(function(builder) {
          builder.assign_(this._grammarName + ' parser', 'new ' + this._grammarName + '(input, actions)');
          builder.return_('parser.parse()');
        }, this);
        builder._line('}', false);

        builder._newline();
        builder._line('public static TreeNode parse(String input) throws ParseError {', false);
        builder._indent(function(builder) {
          builder.return_('parse(input, null)');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('private static String formatError(String input, int offset, List<String> expected) {', false);
        builder._indent(function(builder) {
          builder.assign_('String[] lines', 'input.split("\\n")');
          builder._line('int lineNo = 0, position = 0');
          builder._line('while (position <= offset) {', false);
          builder._indent(function(builder) {
            builder._line('position += lines[lineNo].length() + 1');
            builder._line('lineNo += 1');
          });
          builder._line('}', false);
          builder.assign_('String message', '"Line " + lineNo + ": expected " + expected + "\\n"');
          builder.assign_('String line', 'lines[lineNo - 1]');
          builder._line('message += line + "\\n"');
          builder._line('position -= line.length() + 1');
          builder._line('while (position < offset) {', false);
          builder._indent(function(builder) {
            builder._line('message += " "');
            builder._line('position += 1');
          });
          builder._line('}', false);
          builder.return_('message + "^"');
        });
        builder._line('}', false);

        builder._newline();
        builder._line('private TreeNode parse() throws ParseError {', false);
        builder._indent(function(builder) {
          builder.jump_('TreeNode tree', root);
          builder.if_('tree != ' + builder.nullNode_() + ' && offset == inputSize', function(builder) {
            builder.return_('tree');
          });
          builder.if_('expected.isEmpty()', function(builder) {
            builder.assign_('failure', 'offset');
            builder.append_('expected', '"<EOF>"');
          });
          builder._line('throw new ParseError(formatError(input, failure, expected))');
        });
        builder._line('}', false);
      }, this);
      this._line('}', false);
    },

    exports_: function() {
      var labels = [];
      for (var name in this._labels) labels.push(name);
      labels = labels.sort();
      this._newBuffer('Label');
      this._line('public enum Label {', false);
      this._indent(function(builder) {
        for (var i = 0, n = labels.length; i < n; i++)
          builder._line(labels[i] + (i < n - 1 ? ',' : ''), false);
      });
      this._line('}', false);
    },

    class_: function(name, parent, block, context) {
      this._newline();
      this._line('class ' + name + ' extends ' + parent + ' {', false);
      new Builder(this, name)._indent(block, context);
      this._line('}', false);
    },

    constructor_: function(args, block, context) {
      this._line(this._name + '(String text, int offset, List<TreeNode> elements) {', false);
      this._indent(function(builder) {
        builder._line('super(text, offset, elements)');
        block.call(context, builder);
      }, this);
      this._line('}', false);
    },

    method_: function(name, args, block, context) {
      this._newline();
      this._line('TreeNode ' + name + '() {', false);
      new Builder(this)._indent(block, context);
      this._line('}', false);
    },

    cache_: function(name, block, context) {
      var builder = this;
      while (builder._parent) builder = builder._parent;
      builder._labels[name] = true;

      var temp    = this.localVars_({address: this.nullNode_(), index: 'offset'}),
          address = temp.address,
          offset  = temp.index;

      this.assign_('Map<Integer, CacheRecord> rule', 'cache.get(Label.' + name + ')');
      this.if_('rule == null', function(builder) {
        builder.assign_('rule', 'new HashMap<Integer, CacheRecord>()');
        builder._line('cache.put(Label.' + name + ', rule)');
      });
      this.if_('rule.containsKey(offset)', function(builder) {
        builder.assign_(address, 'rule.get(offset).node');
        builder.assign_('offset', 'rule.get(offset).tail');
      }, function(builder) {
        block.call(context, builder, address);
        builder._line('rule.put(' + offset + ', new CacheRecord(' + address + ', offset))');
      });
      this.return_(address);
    },

    attributes_: function() {},

    attribute_: function(name, value) {
      var builder = this;
      while (builder._parent) builder = builder._parent;
      builder._labels[name] = true;
      this._line('labelled.put(Label.' + name + ', ' + value + ')');
    },

    localVars_: function(vars) {
      var names = {}, code = [], varName;
      for (var name in vars)
        names[name] = this.localVar_(name, vars[name]);
      return names;
    },

    localVar_: function(name, value) {
      this._varIndex[name] = this._varIndex[name] || 0;
      var varName = name + this._varIndex[name];
      this._varIndex[name] += 1;
      this.assign_(TYPES[name] + ' ' + varName, (value === undefined) ? this.nullNode_() : value);
      return varName;
    },

    chunk_: function(length) {
      var chunk = this.localVar_('chunk', this.null_()), input = 'input', of = 'offset';
      this.if_(of + ' < inputSize', function(builder) {
        builder._line(chunk + ' = ' + input + '.substring(' + of + ', ' + of + ' + ' + length + ')');
      });
      return chunk;
    },

    syntaxNode_: function(address, start, end, elements, action, nodeClass) {
      var args;

      if (action) {
        action = 'actions.' + action;
        args   = ['input', start, end];
      } else {
        action = 'new ' + (nodeClass || 'TreeNode');
        args   = ['input.substring(' + start + ', ' + end + ')', start];
      }
      if (elements) args.push(elements);

      this.assign_(address, action + '(' + args.join(', ') + ')');
      this.assign_('offset', end);
    },

    ifNode_: function(address, block, else_, context) {
      this.if_(address + ' != ' + this.nullNode_(), block, else_, context);
    },

    unlessNode_: function(address, block, else_, context) {
      this.if_(address + ' == ' + this.nullNode_(), block, else_, context);
    },

    ifNull_: function(elements, block, else_, context) {
      this.if_(elements + ' == null', block, else_, context);
    },

    extendNode_: function(address, nodeType) {
      if (!nodeType) return;
      // TODO
    },

    failure_: function(address, expected) {
      expected = this._quote(expected);
      this.assign_(address, this.nullNode_());

      this.if_('offset > failure', function(builder) {
        builder.assign_('failure', 'offset');
        builder.assign_('expected', 'new ArrayList<String>()');
      });
      this.if_('offset == failure', function(builder) {
        builder.append_('expected', expected);
      });
    },

    assign_: function(name, value) {
      this._line(name + ' = ' + value);
    },

    jump_: function(address, rule) {
      this.assign_(address, '_read_' + rule + '()');
    },

    conditional_: function(kwd, condition, block, else_, context) {
      if (typeof else_ !== 'function') {
        context = else_;
        else_   = null;
      }
      this._line(kwd + ' (' + condition + ') {', false);
      this._indent(block, context);
      if (else_) {
        this._line('} else {', false);
        this._indent(else_, context);
      }
      this._line('}', false);
    },

    if_: function(condition, block, else_, context) {
      this.conditional_('if', condition, block, else_, context);
    },

    whileNotNull_: function(expression, block, context) {
      this.conditional_('while', expression + ' != ' + this.nullNode_(), block, context);
    },

    stringMatch_: function(expression, string) {
      return expression + ' != null && ' + expression + '.equals(' + this._quote(string) + ')';
    },

    stringMatchCI_: function(expression, string) {
      return expression + ' != null && ' + expression + '.toLowerCase().equals(' + this._quote(string) + '.toLowerCase())';
    },

    regexMatch_: function(regex, string) {
      return string + ' != null && ' + regex + '.matcher(' + string + ').matches()';
    },

    return_: function(expression) {
      this._line('return ' + expression);
    },

    arrayLookup_: function(expression, offset) {
      return expression + '.get(' + offset + ')';
    },

    append_: function(list, value, index) {
      if (index === undefined)
        this._line(list + '.add(' + value + ')');
      else
        this._line(list + '.add(' + index + ', ' + value + ')');
    },

    decrement_: function(variable) {
      this._line('--' + variable);
    },

    isZero_: function(expression) {
      return expression + ' <= 0';
    },

    hasChars_: function() {
      return 'offset < inputSize';
    },

    nullNode_: function() {
      return 'FAILURE';
    },

    offset_: function() {
      return 'offset';
    },

    emptyList_: function(size) {
      return 'new ArrayList<TreeNode>(' + (size ? size : '') + ')';
    },

    emptyString_: function() {
      return '""';
    },

    true_: function() {
      return 'new TreeNode("", -1)';
    },

    null_: function() {
      return 'null';
    }
  });

  Canopy.Builders.Java = Builder;
})();

(function() {
  var Builder = function(parent, name, parentName) {
    if (parent) {
      this._parent = parent;
      this._indentLevel = parent._indentLevel;
    } else {
      this._buffer = '';
      this._indentLevel = 0;
    }
    this._name = name;
    this._parentName = parentName;
    this._methodSeparator = '';
    this._varIndex = {};
  };

  Builder.create = function(filename) {
    var builder = new Builder();
    builder.filename = filename;
    return builder;
  };

  Canopy.extend(Builder.prototype, {
    serialize: function() {
      var files = {};
      files[this._outputPathname()] = this._buffer;
      return files;
    },

    _outputPathname: function() {
      return this.filename.replace(/\.peg$/, '.js');
    },

    _write: function(string) {
      if (this._parent) return this._parent._write(string);
      this._buffer += string;
    },

    _indent: function(block, context) {
      this._indentLevel += 1;
      block.call(context, this);
      this._indentLevel -= 1;
    },

    _newline: function() {
      this._write('\n');
    },

    _line: function(source, semicolon) {
      var i = this._indentLevel;
      while (i--) this._write('  ');
      this._write(source);
      if (semicolon !== false) this._write(';');
      this._newline();
    },

    _quote: function(string) {
      string = string.replace(/\\/g, '\\\\')
                     .replace(/'/g, "\\'")
                     .replace(/\x08/g, '\\b')
                     .replace(/\t/g, '\\t')
                     .replace(/\n/g, '\\n')
                     .replace(/\v/g, '\\v')
                     .replace(/\f/g, '\\f')
                     .replace(/\r/g, '\\r');

      return "'" + string + "'";
    },

    package_: function(name, block, context) {
      this._line('(function() {', false);
      this._indent(function(builder) {
        builder._line("'use strict'");

        builder._newline();
        builder._line('var extend = ' + Canopy.extend.toString());
        builder._newline();
        builder._line('var formatError = ' + Canopy.formatError.toString());
        builder._newline();
        builder._line('var inherit = ' + Canopy.inherit.toString());

        this._grammarName = name;
        block.call(context, this);
      }, this);
      this._line('})()');
    },

    syntaxNodeClass_: function() {
      var name = 'TreeNode';
      this.function_('var ' + name, ['text', 'offset', 'elements'], function(builder) {
        builder._line('this.text = text');
        builder._line('this.offset = offset');
        builder._line('this.elements = elements || []');
      });
      this.function_(name + '.prototype.forEach', ['block', 'context'], function(builder) {
        builder._line('for (var el = this.elements, i = 0, n = el.length; i < n; i++) {', false);
        builder._indent(function(builder) {
          builder._line('block.call(context, el[i], i, el)');
        });
        builder._line('}', false);
      });
      return name;
    },

    grammarModule_: function(actions, block, context) {
      this._newline();
      this.assign_('var ' + this.nullNode_(), '{}');
      this._newline();
      this._line('var Grammar = {', false);
      new Builder(this)._indent(block, context);
      this._newline();
      this._line('}');
    },

    compileRegex_: function() {},

    parserClass_: function(root) {
      this.function_('var Parser', ['input', 'actions', 'types'], function(builder) {
        builder.assign_('this._input', 'input');
        builder.assign_('this._inputSize', 'input.length');
        builder.assign_('this._actions', 'actions');
        builder.assign_('this._types', 'types');
        builder.assign_('this._offset', '0');
        builder.assign_('this._cache', '{}');
        builder.assign_('this._failure', '0');
        builder.assign_('this._expected', '[]');
      });

      this.function_('Parser.prototype.parse', [], function(builder) {
        builder.jump_('var tree', root);

        builder.if_('tree !== ' + builder.nullNode_() + ' && this._offset === this._inputSize', function(builder) {
          builder.return_('tree');
        });
        builder.if_('this._expected.length === 0', function(builder) {
          builder.assign_('this._failure', 'this._offset');
          builder.append_('this._expected', "'<EOF>'");
        });
        builder.assign_('this.constructor.lastError', '{offset: this._offset, expected: this._expected}');
        builder._line('throw new SyntaxError(formatError(this._input, this._failure, this._expected))');
      });

      this.function_('var parse', ['input', 'options'], function(builder) {
        builder.assign_('options', 'options || {}');
        builder.assign_('var parser', 'new Parser(input, options.actions, options.types)');
        builder.return_('parser.parse()');
      });

      this._line('extend(Parser.prototype, Grammar)');
      this._newline();
    },

    exports_: function() {
      var grammar   = this._grammarName,
          namespace = grammar.split('.'),
          last      = namespace.pop(),
          n         = namespace.length,
          condition = [];

      for (var i = 0; i < n; i++)
        condition.push('typeof ' + namespace.slice(0,i+1).join('.') + " !== 'undefined'");

      this.assign_('var exported', '{Grammar: Grammar, Parser: Parser, parse: parse}');
      this._newline();

      this.if_("typeof require === 'function' && typeof exports === 'object'", function(builder) {
        builder._line('extend(exports, exported)');
        if (condition.length > 0) builder.if_(condition.join(' &&' ), function(builder) {
          builder.assign_(grammar, 'exported');
        });
      }, function(builder) {
        builder.assign_('var namespace', "typeof this !== 'undefined' ? this : window");
        for (var i = 0; i < n; i++) {
          builder.assign_('namespace', 'namespace.' + namespace[i] + ' = namespace.' + namespace[i] + ' || {}');
        }
        builder.assign_('namespace.' + last, 'exported');
      });
    },

    class_: function(name, parent, block, context) {
      var builder = new Builder(this, name, parent);
      block.call(context, builder);
    },

    constructor_: function(args, block, context) {
      this.function_('var ' + this._name, args, function(builder) {
        builder._line(this._parentName + '.apply(this, arguments)');
        block.call(context, builder);
      }, this);
      this._line('inherit(' + this._name + ', ' + this._parentName + ')');
    },

    function_: function(name, args, block, context) {
      this._newline();
      this._line(name + ' = function(' + args.join(', ') + ') {', false);
      new Builder(this, this._name, this._parentName)._indent(block, context);
      this._line('}');
    },

    method_: function(name, args, block, context) {
      this._write(this._methodSeparator);
      this._methodSeparator = ',\n\n';
      this._line(name + ': function(' + args.join(', ') + ') {', false);
      new Builder(this)._indent(block, context);
      var n = this._indentLevel;
      while (n--) this._write('  ');
      this._write('}');
    },

    cache_: function(name, block, context) {
      var temp      = this.localVars_({address: this.nullNode_(), index: 'this._offset'}),
          address   = temp.address,
          offset    = temp.index,
          cacheMap  = 'this._cache._' + name,
          cacheAddr = cacheMap + '[' + offset + ']';

      this.assign_(cacheMap, cacheMap + ' || {}');
      this.assign_('var cached', cacheAddr);

      this.if_('cached', function(builder) {
        builder.assign_('this._offset', 'cached[1]');
        builder.return_('cached[0]');
      });

      block.call(context, this, address);
      this.assign_(cacheAddr,  '[' + address + ', this._offset]');
      this.return_(address);
    },

    attributes_: function() {},

    attribute_: function(name, value) {
      this.assign_("this['" + name + "']", value);
    },

    localVars_: function(vars) {
      var names = {}, code = [], varName;
      for (var name in vars) {
        this._varIndex[name] = this._varIndex[name] || 0;
        varName = name + this._varIndex[name];
        this._varIndex[name] += 1;
        code.push(varName + ' = ' + vars[name]);
        names[name] = varName;
      }
      this._line('var ' + code.join(', '));
      return names;
    },

    localVar_: function(name, value) {
      this._varIndex[name] = this._varIndex[name] || 0;
      var varName = name + this._varIndex[name];
      this._varIndex[name] += 1;
      this.assign_('var ' + varName, (value === undefined) ? this.nullNode_() : value);
      return varName;
    },

    chunk_: function(length) {
      var chunk = this.localVar_('chunk', this.null_()), input = 'this._input', of = 'this._offset';
      this.if_(of + ' < this._inputSize', function(builder) {
        builder._line(chunk + ' = ' + input + '.substring(' + of + ', ' + of + ' + ' + length + ')');
      });
      return chunk;
    },

    syntaxNode_: function(address, start, end, elements, action, nodeClass) {
      var args;

      if (action) {
        action = 'this._actions.' + action;
        args   = ['this._input', start, end];
      } else {
        action = 'new ' + (nodeClass || 'TreeNode');
        args   = ['this._input.substring(' + start + ', ' + end + ')', start];
      }
      if (elements) args.push(elements);

      this.assign_(address, action + '(' + args.join(', ') + ')');
      this.assign_('this._offset', end);
    },

    ifNode_: function(address, block, else_, context) {
      this.if_(address + ' !== ' + this.nullNode_(), block, else_, context);
    },

    unlessNode_: function(address, block, else_, context) {
      this.if_(address + ' === ' + this.nullNode_(), block, else_, context);
    },

    ifNull_: function(elements, block, else_, context) {
      this.if_(elements + ' === null', block, else_, context);
    },

    extendNode_: function(address, nodeType) {
      if (!nodeType) return;
      this._line('extend(' + address + ', this._types.' + nodeType + ')');
    },

    failure_: function(address, expected) {
      expected = this._quote(expected);
      this.assign_(address, this.nullNode_());

      this.if_('this._offset > this._failure', function(builder) {
        builder.assign_('this._failure', 'this._offset');
        builder.assign_('this._expected', '[]');
      });
      this.if_('this._offset === this._failure', function(builder) {
        builder.append_('this._expected', expected);
      });
    },

    assign_: function(name, value) {
      this._line(name + ' = ' + value);
    },

    jump_: function(address, rule) {
      this.assign_(address, 'this._read_' + rule + '()');
    },

    conditional_: function(kwd, condition, block, else_, context) {
      if (typeof else_ !== 'function') {
        context = else_;
        else_   = null;
      }
      this._line(kwd + ' (' + condition + ') {', false);
      this._indent(block, context);
      if (else_) {
        this._line('} else {', false);
        this._indent(else_, context);
      }
      this._line('}', false);
    },

    if_: function(condition, block, else_, context) {
      this.conditional_('if', condition, block, else_, context);
    },

    whileNotNull_: function(expression, block, context) {
      this.conditional_('while', expression + ' !== ' + this.nullNode_(), block, context);
    },

    stringMatch_: function(expression, string) {
      return expression + ' === ' + this._quote(string);
    },

    stringMatchCI_: function(expression, string) {
      return expression + ' !== null && ' +
        expression + '.toLowerCase() === ' + this._quote(string) + '.toLowerCase()';
    },

    regexMatch_: function(regex, string) {
      return string + ' !== null && /' + regex.source + '/.test(' + string + ')';
    },

    return_: function(expression) {
      this._line('return ' + expression);
    },

    arrayLookup_: function(expression, offset) {
      return expression + '[' + offset + ']';
    },

    append_: function(list, value, index) {
      if (index === undefined)
        this._line(list + '.push(' + value + ')');
      else
        this._line(list + '[' + index + '] = ' + value);
    },

    decrement_: function(variable) {
      this._line('--' + variable);
    },

    isZero_: function(expression) {
      return expression + ' <= 0';
    },

    hasChars_: function() {
      return 'this._offset < this._inputSize';
    },

    nullNode_: function() {
      return 'FAILURE';
    },

    offset_: function() {
      return 'this._offset';
    },

    emptyList_: function(size) {
      return size ? 'new Array(' + size + ')' : '[]';
    },

    emptyString_: function() {
      return "''";
    },

    true_: function() {
      return 'true';
    },

    null_: function() {
      return 'null';
    }
  });

  Canopy.Builders.JavaScript = Builder;
})();

(function() {
  var Builder = function(parent, name) {
    if (parent) {
      this._parent = parent;
      this._indentLevel = parent._indentLevel;
    } else {
      this._buffer = '';
      this._indentLevel = 0;
    }
    this._name = name;
    this._methodSeparator = '';
    this._varIndex = {};
  };

  Builder.create = function(filename) {
    var builder = new Builder();
    builder.filename = filename;
    return builder;
  };

  Canopy.extend(Builder.prototype, {
    serialize: function() {
      var files = {};
      files[this._outputPathname()] = this._buffer;
      return files;
    },

    _outputPathname: function() {
      return this.filename.replace(/\.peg$/, '.py');
    },

    _write: function(string) {
      if (this._parent) return this._parent._write(string);
      this._buffer += string;
    },

    _indent: function(block, context) {
      this._indentLevel += 1;
      block.call(context, this);
      this._indentLevel -= 1;
    },

    _newline: function() {
      this._write('\n');
    },

    _line: function(source) {
      var i = this._indentLevel;
      while (i--) this._write('    ');
      this._write(source);
      this._newline();
    },

    _quote: function(string) {
      string = string.replace(/\\/g, '\\\\')
                     .replace(/'/g, "\\'")
                     .replace(/\x07/g, '\\a')
                     .replace(/\x08/g, '\\b')
                     .replace(/\t/g, '\\t')
                     .replace(/\n/g, '\\n')
                     .replace(/\v/g, '\\v')
                     .replace(/\f/g, '\\f')
                     .replace(/\r/g, '\\r')
                     .replace(/\x1b/g, '\\e');

      return "'" + string + "'";
    },

    package_: function(name, block, context) {
      this._line('from collections import defaultdict');
      this._line('import re');
      this._newline();
      this._newline();
      block.call(context, this);
    },

    syntaxNodeClass_: function() {
      var name = 'TreeNode';
      this.class_(name, 'object', function(builder) {
        builder.method_('__init__', ['text', 'offset', 'elements=None'], function(builder) {
          builder.attribute_('text', 'text');
          builder.attribute_('offset', 'offset');
          builder.attribute_('elements', 'elements or []');
        });
        builder.method_('__iter__', [], function(builder) {
          builder._line('for el in self.elements:');
          builder._indent(function(builder) {
            builder._line('yield el');
          });
        });
      });
      return name;
    },

    grammarModule_: function(actions, block, context) {
      this.class_('ParseError', 'SyntaxError', function(builder) {
        builder._line('pass');
      });
      this.assign_(this.nullNode_(), 'object()');
      this._newline();
      this._newline();
      this.class_('Grammar', 'object', block, context);
    },

    compileRegex_: function(charClass, name) {
      var regex = charClass.toRegExp();
      this.assign_(name, 're.compile(' + this._quote(regex.source) + ')');
      charClass.constName = name;
      this._methodSeparator = '\n';
    },

    parserClass_: function(root) {
      this.class_('Parser', 'Grammar', function(builder) {
        builder.method_('__init__', ['input', 'actions', 'types'], function(builder) {
          builder.attribute_('_input', 'input');
          builder.attribute_('_input_size', 'len(input)');
          builder.attribute_('_actions', 'actions');
          builder.attribute_('_types', 'types');
          builder.attribute_('_offset', '0');
          builder.attribute_('_cache', 'defaultdict(dict)');
          builder.attribute_('_failure', '0');
          builder.attribute_('_expected', '[]');
        });

        builder.method_('parse', [], function(builder) {
          builder.jump_('tree', root);
          builder.if_('tree is not ' + builder.nullNode_() + ' and self._offset == self._input_size', function(builder) {
            builder.return_('tree');
          });
          builder.if_('not self._expected', function(builder) {
            builder.assign_('self._failure', 'self._offset');
            builder.append_('self._expected', "'<EOF>'");
          });
          builder._line('raise ParseError(format_error(self._input, self._failure, self._expected))');
        });
      });

      this._line('def format_error(input, offset, expected):');
      this._indent(function(builder) {
       builder._line("lines, line_no, position = input.split('\\n'), 0, 0");
        builder._line('while position <= offset:');
        builder._indent(function(builder) {
          builder._line('position += len(lines[line_no]) + 1');
          builder._line('line_no += 1');
        });
        builder._line("message, line = 'Line ' + str(line_no) + ': expected ' + ', '.join(expected) + '\\n', lines[line_no - 1]");
        builder._line("message += line + '\\n'");
        builder._line('position -= len(line) + 1');
        builder._line("message += ' ' * (offset - position)");
        builder.return_("message + '^'");
      });
      this._newline();
    },

    exports_: function() {
      this._line('def parse(input, actions=None, types=None):');
      this._indent(function(builder) {
        builder.assign_('parser', 'Parser(input, actions, types)');
        builder.return_('parser.parse()');
      });
    },

    class_: function(name, parent, block, context) {
      this._line('class ' + name + '(' + parent + '):');
      new Builder(this, name, parent)._indent(block, context);
      this._newline();
      this._newline();
    },

    constructor_: function(args, block, context) {
      this.method_('__init__', args, function(builder) {
        builder._line('super(' + this._name + ', self).__init__(' + args.join(', ') + ')');
        block.call(context, builder);
      }, this);
    },

    method_: function(name, args, block, context) {
      this._write(this._methodSeparator);
      this._methodSeparator = '\n';
      args = ['self'].concat(args).join(', ');
      this._line('def ' + name + '(' + args + '):');
      new Builder(this)._indent(block, context);
    },

    cache_: function(name, block, context) {
      var temp      = this.localVars_({address: this.nullNode_(), index: 'self._offset'}),
          address   = temp.address,
          offset    = temp.index,
          cacheMap  = "self._cache['" + name + "']",
          cacheAddr = cacheMap + '[' + offset + ']';

      this.assign_('cached', cacheMap + '.get(' + offset + ')');

      this.if_('cached', function(builder) {
        builder.assign_('self._offset', 'cached[1]');
        builder.return_('cached[0]');
      });

      block.call(context, this, address);
      this.assign_(cacheAddr, '(' + address + ', self._offset)');
      this.return_(address);
    },

    attributes_: function(names) {},

    attribute_: function(name, value) {
      this.assign_('self.' + name, value);
    },

    localVars_: function(vars) {
      var names = {}, lhs = [], rhs = [], varName;
      for (var name in vars) {
        this._varIndex[name] = this._varIndex[name] || 0;
        varName = name + this._varIndex[name];
        this._varIndex[name] += 1;
        lhs.push(varName);
        rhs.push(vars[name]);
        names[name] = varName;
      }
      this.assign_(lhs.join(', '), rhs.join(', '));
      return names;
    },

    localVar_: function(name, value) {
      this._varIndex[name] = this._varIndex[name] || 0;
      var varName = name + this._varIndex[name];
      this._varIndex[name] += 1;
      this.assign_(varName, (value === undefined) ? this.nullNode_() : value);
      return varName;
    },

    chunk_: function(length) {
      var chunk = this.localVar_('chunk', this.null_()), input = 'self._input', of = 'self._offset';
      this.if_(of + ' < self._input_size', function(builder) {
        builder.assign_(chunk, input + '[' + of + ':' + of + ' + ' + length + ']');
      });
      return chunk;
    },

    syntaxNode_: function(address, start, end, elements, action, nodeClass) {
      var args;

      if (action) {
        action = 'self._actions.' + action;
        args   = ['self._input', start, end];
      } else {
        action = nodeClass || 'TreeNode';
        args   = ['self._input[' + start + ':' + end + ']', start];
      }
      if (elements) args.push(elements);

      this.assign_(address, action + '(' + args.join(', ') + ')');
      this.assign_('self._offset', end);
    },

    ifNode_: function(address, block, else_, context) {
      this.if_(address + ' is not ' + this.nullNode_(), block, else_, context);
    },

    unlessNode_: function(address, block, else_, context) {
      this.if_(address + ' is ' + this.nullNode_(), block, else_, context);
    },

    ifNull_: function(elements, block, else_, context) {
      this.if_(elements + ' is None', block, else_, context);
    },

    extendNode_: function(address, nodeType) {
      if (!nodeType) return;
      var cls = this.localVar_('cls', 'type(' + address + ')');
      this.assign_(address + '.__class__', "type(" + cls + ".__name__ + '" + nodeType + "', (" + cls + ", self._types." + nodeType + "), {})");
    },

    failure_: function(address, expected) {
      expected = this._quote(expected);
      this.assign_(address, this.nullNode_());

      this.if_('self._offset > self._failure', function(builder) {
        builder.assign_('self._failure', 'self._offset');
        builder.assign_('self._expected', '[]');
      });
      this.if_('self._offset == self._failure', function(builder) {
        builder.append_('self._expected', expected);
      });
    },

    assign_: function(name, value) {
      this._line(name + ' = ' + value);
    },

    jump_: function(address, name) {
      this.assign_(address, 'self._read_' + name + '()');
    },

    if_: function(condition, block, else_, context) {
      if (typeof else_ !== 'function') {
        context = else_;
        else_   = null;
      }
      this._line('if ' + condition + ':');
      this._indent(block, context);
      if (else_) {
        this._line('else:');
        this._indent(else_, context);
      }
    },

    whileNotNull_: function(expression, block, context) {
      this._line('while ' + expression + ' is not ' + this.nullNode_() + ':');
      this._indent(block, context);
    },

    stringMatch_: function(expression, string) {
      return expression + ' == ' + this._quote(string);
    },

    stringMatchCI_: function(expression, string) {
      return expression + ' is not None and ' +
        expression + '.lower() == ' + this._quote(string) + '.lower()';
    },

    regexMatch_: function(regex, string) {
      return string + ' is not None and Grammar.' + regex + '.search(' + string + ')';
    },

    return_: function(expression) {
      this._line('return ' + expression);
    },

    arrayLookup_: function(expression, index) {
      return expression + '[' + index + ']';
    },

    append_: function(list, value) {
      this._line(list + '.append(' + value + ')');
    },

    decrement_: function(variable) {
      this._line(variable + ' -= 1');
    },

    hasChars_: function() {
      return 'self._offset < self._input_size';
    },

    isZero_: function(expression) {
      return expression + ' <= 0';
    },

    nullNode_: function() {
      return 'FAILURE';
    },

    offset_: function() {
      return 'self._offset';
    },

    emptyList_: function() {
      return '[]';
    },

    emptyString_: function() {
      return "''";
    },

    true_: function() {
      return 'True';
    },

    null_: function() {
      return 'None';
    }
  });

  Canopy.Builders.Python = Builder;
})();

(function() {
  var Builder = function(parent) {
    if (parent) {
      this._parent = parent;
      this._indentLevel = parent._indentLevel;
    } else {
      this._buffer = '';
      this._indentLevel = 0;
    }
    this._methodSeparator = '';
    this._varIndex = {};
  };

  Builder.create = function(filename) {
    var builder = new Builder();
    builder.filename = filename;
    return builder;
  };

  Canopy.extend(Builder.prototype, {
    serialize: function() {
      var files = {};
      files[this._outputPathname()] = this._buffer;
      return files;
    },

    _outputPathname: function() {
      return this.filename.replace(/\.peg$/, '.rb');
    },

    _write: function(string) {
      if (this._parent) return this._parent._write(string);
      this._buffer += string;
    },

    _indent: function(block, context) {
      this._indentLevel += 1;
      block.call(context, this);
      this._indentLevel -= 1;
    },

    _newline: function() {
      this._write('\n');
    },

    _line: function(source) {
      var i = this._indentLevel;
      while (i--) this._write('  ');
      this._write(source);
      this._newline();
    },

    _quote: function(string) {
      string = string.replace(/\\/g, '\\\\')
                     .replace(/"/g, '\\"')
                     .replace(/#\{/g, '\\#{')
                     .replace(/\x07/g, '\\a')
                     .replace(/\x08/g, '\\b')
                     .replace(/\t/g, '\\t')
                     .replace(/\n/g, '\\n')
                     .replace(/\v/g, '\\v')
                     .replace(/\f/g, '\\f')
                     .replace(/\r/g, '\\r')
                     .replace(/\x1b/g, '\\e');

      return '"' + string + '"';
    },

    package_: function(name, block, context) {
      this._line('module ' + name.replace(/\./g, '::'));
      this._indent(block, context);
      this._line('end');
    },

    syntaxNodeClass_: function() {
      var name = 'TreeNode';
      this._line('class ' + name);
      this._indent(function(builder) {
        builder._line('include Enumerable');
        builder.attributes_(['text', 'offset', 'elements']);
        builder.method_('initialize', ['text', 'offset', 'elements = []'], function(builder) {
          builder.attribute_('text', 'text');
          builder.attribute_('offset', 'offset');
          builder.attribute_('elements', 'elements');
        });
        builder.method_('each', ['&block'], function(builder) {
          builder._line('@elements.each(&block)');
        });
      });
      this._line('end');
      this._newline();
      return name;
    },

    grammarModule_: function(actions, block, context) {
      this.assign_('ParseError', 'Class.new(StandardError)');
      this._newline();
      this.assign_(this.nullNode_(), 'Object.new');
      this._newline();
      this._line('module Grammar');
      new Builder(this)._indent(block, context);
      this._line('end');
      this._newline();
    },

    compileRegex_: function() {},

    parserClass_: function(root) {
      this._line('class Parser');
      this._indent(function(builder) {
        builder._line('include Grammar');
        builder._methodSeparator = '\n';

        builder.method_('initialize', ['input', 'actions', 'types'], function(builder) {
          builder.attribute_('input', 'input');
          builder.attribute_('input_size', 'input.size');
          builder.attribute_('actions', 'actions');
          builder.attribute_('types', 'types');
          builder.attribute_('offset', '0');
          builder.attribute_('cache', 'Hash.new { |h,k| h[k] = {} }');
          builder.attribute_('failure', '0');
          builder.attribute_('expected', '[]');
        });

        builder.method_('parse', [], function(builder) {
          builder.jump_('tree', root);
          builder.if_('tree != ' + builder.nullNode_() + ' and @offset == @input_size', function(builder) {
            builder.return_('tree');
          });
          builder.if_('@expected.empty?', function(builder) {
            builder.assign_('@failure', '@offset');
            builder.append_('@expected', '"<EOF>"');
          });
          builder._line('raise ParseError, Parser.format_error(@input, @failure, @expected)');
        });

        builder.method_('self.format_error', ['input', 'offset', 'expected'], function(builder) {
          builder._line('lines, line_no, position = input.split(/\\n/), 0, 0');
          builder._line('while position <= offset');
          builder._indent(function(builder) {
            builder._line('position += lines[line_no].size + 1');
            builder._line('line_no += 1');
          });
          builder._line('end');
          builder._line('message, line = "Line #{line_no}: expected #{expected * ", "}\\n", lines[line_no - 1]');
          builder._line('message += "#{line}\\n"');
          builder._line('position -= line.size + 1');
          builder._line('message += " " * (offset - position)');
          builder.return_('message + "^"');
        });
      });
      this._line('end');
      this._newline();
    },

    exports_: function() {
      this._line('def self.parse(input, options = {})');
      this._indent(function(builder) {
        builder.assign_('parser', 'Parser.new(input, options[:actions], options[:types])');
        builder._line('parser.parse');
      });
      this._line('end');
    },

    class_: function(name, parent, block, context) {
      this._line('class ' + name + ' < ' + parent);
      new Builder(this)._indent(block, context);
      this._line('end');
      this._newline();
    },

    constructor_: function(args, block, context) {
      this.method_('initialize', args, function(builder) {
        builder._line('super');
        block.call(context, builder);
      });
    },

    method_: function(name, args, block, context) {
      this._write(this._methodSeparator);
      this._methodSeparator = '\n';
      args = (args.length > 0) ? '(' + args.join(', ') + ')' : '';
      this._line('def ' + name + args);
      new Builder(this)._indent(block, context);
      this._line('end');
    },

    cache_: function(name, block, context) {
      var temp      = this.localVars_({address: this.nullNode_(), index: '@offset'}),
          address   = temp.address,
          offset    = temp.index,
          cacheMap  = '@cache[:' + name + ']',
          cacheAddr = cacheMap + '[' + offset + ']';

      this.assign_('cached', cacheAddr);

      this.if_('cached', function(builder) {
        builder._line('@offset = cached[1]');
        builder.return_('cached[0]');
      }, this);

      block.call(context, this, address);
      this.assign_(cacheAddr, '[' + address + ', @offset]');
      this.return_(address);
    },

    attributes_: function(names) {
      var keys = [];
      for (var i = 0, n = names.length; i < n; i++) keys.push(':' + names[i]);
      this._line('attr_reader ' + keys.join(', '));
      this._methodSeparator = '\n';
    },

    attribute_: function(name, value) {
      this.assign_('@' + name, value);
    },

    localVars_: function(vars) {
      var names = {}, lhs = [], rhs = [], varName;
      for (var name in vars) {
        this._varIndex[name] = this._varIndex[name] || 0;
        varName = name + this._varIndex[name];
        this._varIndex[name] += 1;
        lhs.push(varName);
        rhs.push(vars[name]);
        names[name] = varName;
      }
      this.assign_(lhs.join(', '), rhs.join(', '));
      return names;
    },

    localVar_: function(name, value) {
      this._varIndex[name] = this._varIndex[name] || 0;
      var varName = name + this._varIndex[name];
      this._varIndex[name] += 1;
      this.assign_(varName, (value === undefined) ? this.nullNode_(): value);
      return varName;
    },

    chunk_: function(length) {
      var chunk = this.localVar_('chunk', this.null_()), input = '@input', of = '@offset';
      this.if_(of + ' < @input_size', function(builder) {
        builder.assign_(chunk, input + '[' + of + '...' + of + ' + ' + length + ']');
      });
      return chunk;
    },

    syntaxNode_: function(address, start, end, elements, action, nodeClass) {
      var args;

      if (action) {
        action = '@actions.' + action;
        args   = ['@input', start, end];
      } else {
        action = (nodeClass || 'TreeNode') + '.new';
        args   = ['@input[' + start + '...' + end + ']', start];
      }
      if (elements) args.push(elements);

      this.assign_(address, action + '(' + args.join(', ') + ')');
      this.assign_('@offset', end);
    },

    ifNode_: function(address, block, else_, context) {
      this.unless_(address + ' == ' + this.nullNode_(), block, else_, context);
    },

    unlessNode_: function(address, block, else_, context) {
      this.if_(address + ' == ' + this.nullNode_(), block, else_, context);
    },

    ifNull_: function(elements, block, else_, context) {
      this.if_(elements + '.nil?', block, else_, context);
    },

    extendNode_: function(address, nodeType) {
      if (!nodeType) return;
      this._line(address + '.extend(@types::' + nodeType.replace(/\./g, '::') + ')');
    },

    failure_: function(address, expected) {
      expected = this._quote(expected);
      this.assign_(address, this.nullNode_());

      this.if_('@offset > @failure', function(builder) {
        builder.assign_('@failure', '@offset');
        builder.assign_('@expected', '[]');
      });
      this.if_('@offset == @failure', function(builder) {
        builder.append_('@expected', expected);
      });
    },

    assign_: function(name, value) {
      this._line(name + ' = ' + value);
    },

    jump_: function(address, name) {
      this.assign_(address, '_read_' + name);
    },

    conditional_: function(type, condition, block, else_, context) {
      if (typeof else_ !== 'function') {
        context = else_;
        else_   = null;
      }
      this._line(type + ' ' + condition);
      this._indent(block, context);
      if (else_) {
        this._line('else');
        this._indent(else_, context);
      }
      this._line('end');
    },

    if_: function(condition, block, else_, context) {
      this.conditional_('if', condition, block, else_, context);
    },

    unless_: function(condition, block, else_, context) {
      this.conditional_('unless', condition, block, else_, context);
    },

    whileNotNull_: function(expression, block, context) {
      this._line('until ' + expression + ' == ' + this.nullNode_());
      this._indent(block, context);
      this._line('end');
    },

    stringMatch_: function(expression, string) {
      return expression + ' == ' + this._quote(string);
    },

    stringMatchCI_: function(expression, string) {
      return '!' + expression + '.nil? && ' +
        expression + '.downcase == ' + this._quote(string) + '.downcase';
    },

    regexMatch_: function(regex, string) {
      var source = regex.source.replace(/^\^/g, '\\A');
      return string + ' =~ /' + source + '/';
    },

    return_: function(expression) {
      this._line('return ' + expression);
    },

    arrayLookup_: function(expression, index) {
      return expression + '[' + index + ']';
    },

    append_: function(list, value) {
      this._line(list + ' << ' + value);
    },

    decrement_: function(variable) {
      this._line(variable + ' -= 1');
    },

    hasChars_: function() {
      return '@offset < @input_size';
    },

    isZero_: function(expression) {
      return expression + ' <= 0';
    },

    nullNode_: function() {
      return 'FAILURE';
    },

    offset_: function() {
      return '@offset';
    },

    emptyList_: function() {
      return '[]';
    },

    emptyString_: function() {
      return '""';
    },

    true_: function() {
      return 'true';
    },

    null_: function() {
      return 'nil';
    }
  });

  Canopy.Builders.Ruby = Builder;
})();

Canopy.Compiler = function(grammarText, builder) {
  this._grammarText = grammarText;
  this._builder = builder;
};

Canopy.extend(Canopy.Compiler.prototype, {
  parseTree: function() {
    if (this._tree) return this._tree;
    var P = Canopy.MetaGrammar, message;

    this._tree = P.parse(this._grammarText, {types: Canopy.Compiler});
    if (this._tree) return this._tree;

    message = P.formatError(P.Parser.lastError);
    throw new Error(message);
  },

  toSexp: function(tree) {
    return this.parseTree().toSexp();
  },

  toSource: function() {
    this.parseTree().compile(this._builder);
    return this._builder.serialize();
  }
});

Canopy.Compiler.Grammar = {
  grammarName: function() {
    return this.grammar_name.object_identifier.text
  },

  toSexp: function() {
    var sexp = ['grammar', this.grammarName()];
    this.rules.forEach(function(rule) {
      sexp.push(rule.grammar_rule.toSexp());
    });
    return sexp;
  },

  compile: function(builder) {
    var scan = function(node, callback, context) {
      callback.call(context, node);
      node.forEach(function(child) { scan(child, callback, context) });
    };

    builder.package_(this.grammarName(), function(builder) {
      var actions = [];
      scan(this, function(node) {
        if (node.action_tag) actions.push(node.action_tag.identifier.text);
      });

      var nodeClassName = builder.syntaxNodeClass_(), subclassIndex = 1;
      scan(this, function(node) {
        var subclassName = nodeClassName + subclassIndex,
            labels = node.collectLabels && node.collectLabels(subclassName);

        if (!labels) return;

        builder.class_(subclassName, nodeClassName, function(builder) {
          var keys = [];
          for (var key in labels) keys.push(key);
          builder.attributes_(keys);
          builder.constructor_(['text', 'offset', 'elements'], function(builder) {
            for (var key in labels)
              builder.attribute_(key, builder.arrayLookup_('elements', labels[key]));
          });
        });
        subclassIndex += 1;
      });

      builder.grammarModule_(actions.sort(), function(builder) {
        var regexName = 'REGEX_', regexIndex = 1;
        scan(this, function(node) {
          if (node.regex) builder.compileRegex_(node, regexName + (regexIndex++));
        });

        this.rules.forEach(function(rule) {
          rule.grammar_rule.compile(builder);
        });
      }, this);

      var root = this.rules.elements[0].grammar_rule.name();

      builder.parserClass_(root);
      builder.exports_();
    }, this);
  }
};

Canopy.Compiler.GrammarRule = {
  name: function() {
    return this.identifier.text;
  },

  toSexp: function() {
    return ['rule', this.name(), this.parsing_expression.toSexp()];
  },

  compile: function(builder) {
    var name = this.name();

    builder.method_('_read_' + name, [], function(builder) {
      builder.cache_(name, function(builder, address) {
        this.parsing_expression.compile(builder, address);
      }, this);
    }, this);
  }
};

Canopy.Compiler.Choice = {
  expressions: function() {
    if (this._expressions) return this._expressions;
    this._expressions = [this.first_part];
    this.rest.forEach(function(choice) {
      this._expressions.push(choice.expression);
    }, this);
    return this._expressions;
  },

  toSexp: function() {
    var sexp = ['choice'];
    Canopy.forEach(this.expressions(), function(expression) {
      sexp.push(expression.toSexp());
    });
    return sexp;
  },

  compile: function(builder, address) {
    var startOffset = builder.localVar_('index', builder.offset_());
    this._compileChoices(builder, 0, address, startOffset);
  },

  _compileChoices: function(builder, index, address, startOffset) {
    var expressions = this.expressions();
    if (index === expressions.length) return;

    expressions[index].compile(builder, address);

    builder.unlessNode_(address, function(builder) {
      builder.assign_(builder.offset_(), startOffset);
      this._compileChoices(builder, index + 1, address, startOffset);
    }, this);
  }
};

Canopy.Compiler.ChoicePart = {
  nodeType: function() {
    var element = this.elements[1].type_tag;
    return element ? element.object_identifier.text : null;
  },

  toSexp: function() {
    var sexp = this.elements[0].toSexp(), type;
    if (type = this.nodeType()) sexp = ['type', type, sexp];
    return sexp;
  },

  compile: function(builder, address) {
    this.elements[0].compile(builder, address);
    builder.extendNode_(address, this.nodeType());
  }
};

Canopy.Compiler.Action = {
  expression: function() {
    var expr = this;
    while (expr.actionable_expression) expr = expr.actionable_expression;
    return expr;
  },

  actionName: function() {
    return this.action_tag.identifier.text;
  },

  toSexp: function() {
    return ['action', this.actionName(), this.expression().toSexp()];
  },

  compile: function(builder, address) {
    this.expression().compile(builder, address, this.actionName());
  }
};

Canopy.Compiler.AnyChar = {
  toSexp: function() {
    return ['any-char'];
  },

  compile: function(builder, address, action) {
    builder.if_(builder.hasChars_(), function(builder) {
      var of = builder.offset_();
      builder.syntaxNode_(address, of, of + ' + 1', null, action);
    }, function(builder) {
      builder.failure_(address, '<any char>');
    });
  }
};

Canopy.Compiler.CharClass = {
  regex: true,

  toRegExp: function() {
    return new RegExp('^' + this.text);
  },

  toSexp: function() {
    return ['char-class', this.text];
  },

  compile: function(builder, address, action) {
    var regex = this.constName || this.toRegExp(),
        chunk = builder.chunk_(1);

    builder.if_(builder.regexMatch_(regex, chunk), function(builder) {
      var of = builder.offset_();
      builder.syntaxNode_(address, of, of + ' + 1', null, action);
    }, function(builder) {
      builder.failure_(address, this.text);
    }, this);
  }
};

Canopy.Compiler.String = {
  toSexp: function() {
    return ['string', eval(this.text)];
  },

  compile: function(builder, address, action) {
    var string = eval(this.text),
        length = string.length,
        chunk  = builder.chunk_(length);

    builder.if_(builder.stringMatch_(chunk, string), function(builder) {
      var of = builder.offset_();
      builder.syntaxNode_(address, of, of + ' + ' + length, null, action);
    }, function(builder) {
      builder.failure_(address, this.text);
    }, this);
  }
};

Canopy.Compiler.CIString = {
  toSexp: function() {
    return ['ci-string', this.stringValue()];
  },

  compile: function(builder, address, action) {
    var string = this.stringValue(),
        length = string.length,
        chunk  = builder.chunk_(length);

    builder.if_(builder.stringMatchCI_(chunk, string), function(builder) {
      var of = builder.offset_();
      builder.syntaxNode_(address, of, of + ' + ' + length, null, action);
    }, function(builder) {
      builder.failure_(address, this.text);
    }, this);
  },

  stringValue: function() {
    var string = '"' + this.elements[1].text + '"';
    return eval(string);
  }
};

Canopy.Compiler.Predicate = {
  atomic: function() {
    var expression = this.atom;
    return expression.parsing_expression || expression;
  },

  toSexp: function() {
    var expression = this.atomic(),
        table      = {'&': 'and', '!': 'not'},
        predicate  = table[this.predicate.text];

    return [predicate, expression.toSexp()];
  },

  compile: function(builder, address) {
    var startOffset = builder.localVar_('index', builder.offset_()),
        table       = {'&': 'ifNode_', '!': 'unlessNode_'},
        branch      = table[this.predicate.text];

    this.atomic().compile(builder, address);
    builder.assign_(builder.offset_(), startOffset);

    builder[branch](address, function(builder) {
      var of = builder.offset_();
      builder.syntaxNode_(address, of, of, null);
    }, function(builder) {
      builder.assign_(address, builder.nullNode_());
    });
  }
};

Canopy.Compiler.Maybe = {
  atomic: function() {
    var expression = this.atom;
    return expression.parsing_expression || expression;
  },

  toSexp: function() {
    var expression = this.atomic(),
        sexp = expression.toSexp();

    return ['maybe', sexp];
  },

  compile: function(builder, address) {
    var startOffset = builder.localVar_('index', builder.offset_());
    this.atomic().compile(builder, address);

    builder.unlessNode_(address, function(builder) {
      builder.syntaxNode_(address, startOffset, startOffset, null);
    });
  }
};

Canopy.Compiler.Repeat = {
  QUANTITIES: {'*': 0, '+': 1},

  atomic: function() {
    var expression = this.atom;
    return expression.parsing_expression || expression;
  },

  toSexp: function() {
    var expression = this.atomic(),
        sexp = expression.toSexp();

    switch (this.quantifier.text) {
      case '*': sexp = ['repeat', 0, sexp]; break;
      case '+': sexp = ['repeat', 1, sexp]; break;
    }
    return sexp;
  },

  compile: function(builder, address, action) {
    var quantifier = this.quantifier.text;

    var minimum = this.QUANTITIES[quantifier],
        temp = builder.localVars_({
          remaining: minimum,
          index:     builder.offset_(),
          elements:  builder.emptyList_(),
          address:   builder.true_()
        }),

        remaining   = temp.remaining,
        startOffset = temp.index,
        elements    = temp.elements,
        elAddr      = temp.address;

    builder.whileNotNull_(elAddr, function(builder) {
      this.atomic().compile(builder, elAddr);
      builder.ifNode_(elAddr, function(builder) {
        builder.append_(elements, elAddr);
        builder.decrement_(remaining);
      });
    }, this);

    builder.if_(builder.isZero_(remaining), function(builder) {
      builder.syntaxNode_(address, startOffset, builder.offset_(), elements, action);
    }, function(builder) {
      builder.assign_(address, builder.nullNode_());
    });
  }
};

Canopy.Compiler.Sequence = {
  expressions: function() {
    if (this._expressions) return this._expressions;
    this._expressions = [this.first_part];
    this.rest.forEach(function(part) {
      this._expressions.push(part.expression);
    }, this);
    return this._expressions;
  },

  toSexp: function() {
    var sexp = ['sequence'];
    Canopy.forEach(this.expressions(), function(expression) {
      sexp.push(expression.toSexp());
    });
    return sexp;
  },

  collectLabels: function(subclassName) {
    var expressions = this.expressions(),
        labels      = {},
        anyLabels   = false,
        exprLabels, i, j, m, n;

    for (i = 0, n = expressions.length; i < n; i++) {
      exprLabels = expressions[i].labels();
      if (exprLabels.length === 0) continue;
      anyLabels = true;
      for (j = 0, m = exprLabels.length; j < m; j++)
        labels[exprLabels[j]] = i;
    }

    if (anyLabels) {
      this._nodeClassName = subclassName;
      return labels;
    } else {
      return null;
    }
  },

  compile: function(builder, address, action) {
    var temp = builder.localVars_({
      index:    builder.offset_(),
      elements: builder.emptyList_(this.expressions().length)
    });

    var startOffset = temp.index,
        elements    = temp.elements;

    this._compileExpressions(builder, 0, startOffset, elements);

    builder.ifNull_(elements, function(builder) {
      builder.assign_(address, builder.nullNode_());
    }, function(builder) {
      builder.syntaxNode_(address, startOffset, builder.offset_(), elements, action, this._nodeClassName);
    }, this);
  },

  _compileExpressions: function(builder, index, startOffset, elements) {
    var expressions = this.expressions();
    if (index === expressions.length) return;

    var expAddr = builder.localVar_('address');

    expressions[index].compile(builder, expAddr);

    builder.ifNode_(expAddr, function(builder) {
      builder.append_(elements, expAddr, index);
      this._compileExpressions(builder, index + 1, startOffset, elements);
    }, function(builder) {
      builder.assign_(elements, builder.null_());
      builder.assign_(builder.offset_(), startOffset);
    }, this);
  }
};

Canopy.Compiler.SequencePart = {
  atomic: function() {
    var expression = this.expression;
    return expression.parsing_expression || expression;
  },

  labels: function() {
    var element    = this.elements[0].identifier,
        expression = this.atomic(),
        labels     = [];

    if (element) labels.push(element.text);
    if (expression.referenceName) labels.push(expression.referenceName());

    return labels;
  },

  toSexp: function() {
    var expression = this.atomic(),
        labels     = this.labels(),
        sexp       = expression.toSexp();

    if (this.elements[0].identifier) sexp = ['label', labels[0], sexp];

    return sexp;
  },

  compile: function(builder, address) {
    return this.atomic().compile(builder, address);
  }
};

Canopy.Compiler.Reference = {
  referenceName: function() {
    return this.identifier.text;
  },

  toSexp: function() {
    return ['reference', this.referenceName()];
  },

  compile: function(builder, address) {
    builder.jump_(address, this.referenceName());
  }
};

(function() {
  for (var type in Canopy.Compiler) {
    if (/^[A-Z]/.test(type))
      Canopy.MetaGrammar.Parser[type] = Canopy.Compiler[type];
  }

  if (typeof exports === 'object') {
    module.exports = exports;
    Canopy.extend(exports, Canopy);
    exports.compile = Canopy.compile;
  }
})();