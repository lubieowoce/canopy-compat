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
    this['__'] = elements[2];
  };
  inherit(TreeNode1, TreeNode);

  var TreeNode2 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['pair'] = elements[1];
  };
  inherit(TreeNode2, TreeNode);

  var TreeNode3 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['pair'] = elements[1];
  };
  inherit(TreeNode3, TreeNode);

  var TreeNode4 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['__'] = elements[1];
  };
  inherit(TreeNode4, TreeNode);

  var TreeNode5 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['__'] = elements[2];
    this['string'] = elements[1];
    this['value'] = elements[4];
  };
  inherit(TreeNode5, TreeNode);

  var TreeNode6 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['value'] = elements[1];
  };
  inherit(TreeNode6, TreeNode);

  var TreeNode7 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['value'] = elements[1];
  };
  inherit(TreeNode7, TreeNode);

  var TreeNode8 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['__'] = elements[1];
  };
  inherit(TreeNode8, TreeNode);

  var TreeNode9 = function(text, offset, elements) {
    TreeNode.apply(this, arguments);
    this['__'] = elements[2];
  };
  inherit(TreeNode9, TreeNode);

  var FAILURE = {};

  var Grammar = {
    _read_document: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._document = this._cache._document || {};
      var cached = this._cache._document[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        address2 = this._read_object();
        if (address2 === FAILURE) {
          this._offset = index2;
          address2 = this._read_array();
          if (address2 === FAILURE) {
            this._offset = index2;
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          address3 = this._read___();
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
        address0 = new TreeNode1(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._document[index0] = [address0, this._offset];
      return address0;
    },

    _read_object: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._object = this._cache._object || {};
      var cached = this._cache._object[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var index2 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '{') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"{"');
        }
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_pair();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var remaining0 = 0, index3 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var index4 = this._offset, elements2 = new Array(2);
            var address5 = FAILURE;
            var chunk1 = null;
            if (this._offset < this._inputSize) {
              chunk1 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk1 === ',') {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('","');
              }
            }
            if (address5 !== FAILURE) {
              elements2[0] = address5;
              var address6 = FAILURE;
              address6 = this._read_pair();
              if (address6 !== FAILURE) {
                elements2[1] = address6;
              } else {
                elements2 = null;
                this._offset = index4;
              }
            } else {
              elements2 = null;
              this._offset = index4;
            }
            if (elements2 === null) {
              address4 = FAILURE;
            } else {
              address4 = new TreeNode3(this._input.substring(index4, this._offset), index4, elements2);
              this._offset = this._offset;
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
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 === '}') {
              address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address7 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"}"');
              }
            }
            if (address7 !== FAILURE) {
              elements0[3] = address7;
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
        address0 = new TreeNode2(this._input.substring(index2, this._offset), index2, elements0);
        this._offset = this._offset;
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var index5 = this._offset, elements3 = new Array(3);
        var address8 = FAILURE;
        var chunk3 = null;
        if (this._offset < this._inputSize) {
          chunk3 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk3 === '{') {
          address8 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address8 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"{"');
          }
        }
        if (address8 !== FAILURE) {
          elements3[0] = address8;
          var address9 = FAILURE;
          address9 = this._read___();
          if (address9 !== FAILURE) {
            elements3[1] = address9;
            var address10 = FAILURE;
            var chunk4 = null;
            if (this._offset < this._inputSize) {
              chunk4 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk4 === '}') {
              address10 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address10 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"}"');
              }
            }
            if (address10 !== FAILURE) {
              elements3[2] = address10;
            } else {
              elements3 = null;
              this._offset = index5;
            }
          } else {
            elements3 = null;
            this._offset = index5;
          }
        } else {
          elements3 = null;
          this._offset = index5;
        }
        if (elements3 === null) {
          address0 = FAILURE;
        } else {
          address0 = new TreeNode4(this._input.substring(index5, this._offset), index5, elements3);
          this._offset = this._offset;
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._object[index0] = [address0, this._offset];
      return address0;
    },

    _read_pair: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._pair = this._cache._pair || {};
      var cached = this._cache._pair[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(5);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        address2 = this._read_string();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          address3 = this._read___();
          if (address3 !== FAILURE) {
            elements0[2] = address3;
            var address4 = FAILURE;
            var chunk0 = null;
            if (this._offset < this._inputSize) {
              chunk0 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk0 === ':') {
              address4 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address4 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('":"');
              }
            }
            if (address4 !== FAILURE) {
              elements0[3] = address4;
              var address5 = FAILURE;
              address5 = this._read_value();
              if (address5 !== FAILURE) {
                elements0[4] = address5;
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
      this._cache._pair[index0] = [address0, this._offset];
      return address0;
    },

    _read_array: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._array = this._cache._array || {};
      var cached = this._cache._array[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var index2 = this._offset, elements0 = new Array(4);
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
        address2 = this._read_value();
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          var remaining0 = 0, index3 = this._offset, elements1 = [], address4 = true;
          while (address4 !== FAILURE) {
            var index4 = this._offset, elements2 = new Array(2);
            var address5 = FAILURE;
            var chunk1 = null;
            if (this._offset < this._inputSize) {
              chunk1 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk1 === ',') {
              address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address5 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('","');
              }
            }
            if (address5 !== FAILURE) {
              elements2[0] = address5;
              var address6 = FAILURE;
              address6 = this._read_value();
              if (address6 !== FAILURE) {
                elements2[1] = address6;
              } else {
                elements2 = null;
                this._offset = index4;
              }
            } else {
              elements2 = null;
              this._offset = index4;
            }
            if (elements2 === null) {
              address4 = FAILURE;
            } else {
              address4 = new TreeNode7(this._input.substring(index4, this._offset), index4, elements2);
              this._offset = this._offset;
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
            var chunk2 = null;
            if (this._offset < this._inputSize) {
              chunk2 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk2 === ']') {
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
        address0 = new TreeNode6(this._input.substring(index2, this._offset), index2, elements0);
        this._offset = this._offset;
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var index5 = this._offset, elements3 = new Array(3);
        var address8 = FAILURE;
        var chunk3 = null;
        if (this._offset < this._inputSize) {
          chunk3 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk3 === '[') {
          address8 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address8 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"["');
          }
        }
        if (address8 !== FAILURE) {
          elements3[0] = address8;
          var address9 = FAILURE;
          address9 = this._read___();
          if (address9 !== FAILURE) {
            elements3[1] = address9;
            var address10 = FAILURE;
            var chunk4 = null;
            if (this._offset < this._inputSize) {
              chunk4 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk4 === ']') {
              address10 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address10 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"]"');
              }
            }
            if (address10 !== FAILURE) {
              elements3[2] = address10;
            } else {
              elements3 = null;
              this._offset = index5;
            }
          } else {
            elements3 = null;
            this._offset = index5;
          }
        } else {
          elements3 = null;
          this._offset = index5;
        }
        if (elements3 === null) {
          address0 = FAILURE;
        } else {
          address0 = new TreeNode8(this._input.substring(index5, this._offset), index5, elements3);
          this._offset = this._offset;
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._array[index0] = [address0, this._offset];
      return address0;
    },

    _read_value: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._value = this._cache._value || {};
      var cached = this._cache._value[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(3);
      var address1 = FAILURE;
      address1 = this._read___();
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index2 = this._offset;
        address2 = this._read_object();
        if (address2 === FAILURE) {
          this._offset = index2;
          address2 = this._read_array();
          if (address2 === FAILURE) {
            this._offset = index2;
            address2 = this._read_string();
            if (address2 === FAILURE) {
              this._offset = index2;
              address2 = this._read_number();
              if (address2 === FAILURE) {
                this._offset = index2;
                address2 = this._read_boolean_();
                if (address2 === FAILURE) {
                  this._offset = index2;
                  address2 = this._read_null_();
                  if (address2 === FAILURE) {
                    this._offset = index2;
                  }
                }
              }
            }
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address3 = FAILURE;
          address3 = this._read___();
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
        address0 = new TreeNode9(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      }
      this._cache._value[index0] = [address0, this._offset];
      return address0;
    },

    _read_string: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._string = this._cache._string || {};
      var cached = this._cache._string[index0];
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
      this._cache._string[index0] = [address0, this._offset];
      return address0;
    },

    _read_number: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._number = this._cache._number || {};
      var cached = this._cache._number[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset, elements0 = new Array(4);
      var address1 = FAILURE;
      var index2 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 1);
      }
      if (chunk0 === '-') {
        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
        this._offset = this._offset + 1;
      } else {
        address1 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"-"');
        }
      }
      if (address1 === FAILURE) {
        address1 = new TreeNode(this._input.substring(index2, index2), index2);
        this._offset = index2;
      }
      if (address1 !== FAILURE) {
        elements0[0] = address1;
        var address2 = FAILURE;
        var index3 = this._offset;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk1 === '0') {
          address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address2 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"0"');
          }
        }
        if (address2 === FAILURE) {
          this._offset = index3;
          var index4 = this._offset, elements1 = new Array(2);
          var address3 = FAILURE;
          var chunk2 = null;
          if (this._offset < this._inputSize) {
            chunk2 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk2 !== null && /^[1-9]/.test(chunk2)) {
            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address3 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('[1-9]');
            }
          }
          if (address3 !== FAILURE) {
            elements1[0] = address3;
            var address4 = FAILURE;
            var remaining0 = 0, index5 = this._offset, elements2 = [], address5 = true;
            while (address5 !== FAILURE) {
              var chunk3 = null;
              if (this._offset < this._inputSize) {
                chunk3 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk3 !== null && /^[0-9]/.test(chunk3)) {
                address5 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address5 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('[0-9]');
                }
              }
              if (address5 !== FAILURE) {
                elements2.push(address5);
                --remaining0;
              }
            }
            if (remaining0 <= 0) {
              address4 = new TreeNode(this._input.substring(index5, this._offset), index5, elements2);
              this._offset = this._offset;
            } else {
              address4 = FAILURE;
            }
            if (address4 !== FAILURE) {
              elements1[1] = address4;
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
            address2 = new TreeNode(this._input.substring(index4, this._offset), index4, elements1);
            this._offset = this._offset;
          }
          if (address2 === FAILURE) {
            this._offset = index3;
          }
        }
        if (address2 !== FAILURE) {
          elements0[1] = address2;
          var address6 = FAILURE;
          var index6 = this._offset;
          var index7 = this._offset, elements3 = new Array(2);
          var address7 = FAILURE;
          var chunk4 = null;
          if (this._offset < this._inputSize) {
            chunk4 = this._input.substring(this._offset, this._offset + 1);
          }
          if (chunk4 === '.') {
            address7 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
            this._offset = this._offset + 1;
          } else {
            address7 = FAILURE;
            if (this._offset > this._failure) {
              this._failure = this._offset;
              this._expected = [];
            }
            if (this._offset === this._failure) {
              this._expected.push('"."');
            }
          }
          if (address7 !== FAILURE) {
            elements3[0] = address7;
            var address8 = FAILURE;
            var remaining1 = 1, index8 = this._offset, elements4 = [], address9 = true;
            while (address9 !== FAILURE) {
              var chunk5 = null;
              if (this._offset < this._inputSize) {
                chunk5 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk5 !== null && /^[0-9]/.test(chunk5)) {
                address9 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address9 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('[0-9]');
                }
              }
              if (address9 !== FAILURE) {
                elements4.push(address9);
                --remaining1;
              }
            }
            if (remaining1 <= 0) {
              address8 = new TreeNode(this._input.substring(index8, this._offset), index8, elements4);
              this._offset = this._offset;
            } else {
              address8 = FAILURE;
            }
            if (address8 !== FAILURE) {
              elements3[1] = address8;
            } else {
              elements3 = null;
              this._offset = index7;
            }
          } else {
            elements3 = null;
            this._offset = index7;
          }
          if (elements3 === null) {
            address6 = FAILURE;
          } else {
            address6 = new TreeNode(this._input.substring(index7, this._offset), index7, elements3);
            this._offset = this._offset;
          }
          if (address6 === FAILURE) {
            address6 = new TreeNode(this._input.substring(index6, index6), index6);
            this._offset = index6;
          }
          if (address6 !== FAILURE) {
            elements0[2] = address6;
            var address10 = FAILURE;
            var index9 = this._offset;
            var index10 = this._offset, elements5 = new Array(3);
            var address11 = FAILURE;
            var index11 = this._offset;
            var chunk6 = null;
            if (this._offset < this._inputSize) {
              chunk6 = this._input.substring(this._offset, this._offset + 1);
            }
            if (chunk6 === 'e') {
              address11 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
              this._offset = this._offset + 1;
            } else {
              address11 = FAILURE;
              if (this._offset > this._failure) {
                this._failure = this._offset;
                this._expected = [];
              }
              if (this._offset === this._failure) {
                this._expected.push('"e"');
              }
            }
            if (address11 === FAILURE) {
              this._offset = index11;
              var chunk7 = null;
              if (this._offset < this._inputSize) {
                chunk7 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk7 === 'E') {
                address11 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address11 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('"E"');
                }
              }
              if (address11 === FAILURE) {
                this._offset = index11;
              }
            }
            if (address11 !== FAILURE) {
              elements5[0] = address11;
              var address12 = FAILURE;
              var index12 = this._offset;
              var chunk8 = null;
              if (this._offset < this._inputSize) {
                chunk8 = this._input.substring(this._offset, this._offset + 1);
              }
              if (chunk8 === '+') {
                address12 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                this._offset = this._offset + 1;
              } else {
                address12 = FAILURE;
                if (this._offset > this._failure) {
                  this._failure = this._offset;
                  this._expected = [];
                }
                if (this._offset === this._failure) {
                  this._expected.push('"+"');
                }
              }
              if (address12 === FAILURE) {
                this._offset = index12;
                var chunk9 = null;
                if (this._offset < this._inputSize) {
                  chunk9 = this._input.substring(this._offset, this._offset + 1);
                }
                if (chunk9 === '-') {
                  address12 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                  this._offset = this._offset + 1;
                } else {
                  address12 = FAILURE;
                  if (this._offset > this._failure) {
                    this._failure = this._offset;
                    this._expected = [];
                  }
                  if (this._offset === this._failure) {
                    this._expected.push('"-"');
                  }
                }
                if (address12 === FAILURE) {
                  this._offset = index12;
                  var chunk10 = null;
                  if (this._offset < this._inputSize) {
                    chunk10 = this._input.substring(this._offset, this._offset + 0);
                  }
                  if (chunk10 === '') {
                    address12 = new TreeNode(this._input.substring(this._offset, this._offset + 0), this._offset);
                    this._offset = this._offset + 0;
                  } else {
                    address12 = FAILURE;
                    if (this._offset > this._failure) {
                      this._failure = this._offset;
                      this._expected = [];
                    }
                    if (this._offset === this._failure) {
                      this._expected.push('""');
                    }
                  }
                  if (address12 === FAILURE) {
                    this._offset = index12;
                  }
                }
              }
              if (address12 !== FAILURE) {
                elements5[1] = address12;
                var address13 = FAILURE;
                var remaining2 = 1, index13 = this._offset, elements6 = [], address14 = true;
                while (address14 !== FAILURE) {
                  var chunk11 = null;
                  if (this._offset < this._inputSize) {
                    chunk11 = this._input.substring(this._offset, this._offset + 1);
                  }
                  if (chunk11 !== null && /^[0-9]/.test(chunk11)) {
                    address14 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
                    this._offset = this._offset + 1;
                  } else {
                    address14 = FAILURE;
                    if (this._offset > this._failure) {
                      this._failure = this._offset;
                      this._expected = [];
                    }
                    if (this._offset === this._failure) {
                      this._expected.push('[0-9]');
                    }
                  }
                  if (address14 !== FAILURE) {
                    elements6.push(address14);
                    --remaining2;
                  }
                }
                if (remaining2 <= 0) {
                  address13 = new TreeNode(this._input.substring(index13, this._offset), index13, elements6);
                  this._offset = this._offset;
                } else {
                  address13 = FAILURE;
                }
                if (address13 !== FAILURE) {
                  elements5[2] = address13;
                } else {
                  elements5 = null;
                  this._offset = index10;
                }
              } else {
                elements5 = null;
                this._offset = index10;
              }
            } else {
              elements5 = null;
              this._offset = index10;
            }
            if (elements5 === null) {
              address10 = FAILURE;
            } else {
              address10 = new TreeNode(this._input.substring(index10, this._offset), index10, elements5);
              this._offset = this._offset;
            }
            if (address10 === FAILURE) {
              address10 = new TreeNode(this._input.substring(index9, index9), index9);
              this._offset = index9;
            }
            if (address10 !== FAILURE) {
              elements0[3] = address10;
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
      this._cache._number[index0] = [address0, this._offset];
      return address0;
    },

    _read_boolean_: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._boolean_ = this._cache._boolean_ || {};
      var cached = this._cache._boolean_[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var index1 = this._offset;
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 4);
      }
      if (chunk0 === 'true') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 4), this._offset);
        this._offset = this._offset + 4;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"true"');
        }
      }
      if (address0 === FAILURE) {
        this._offset = index1;
        var chunk1 = null;
        if (this._offset < this._inputSize) {
          chunk1 = this._input.substring(this._offset, this._offset + 5);
        }
        if (chunk1 === 'false') {
          address0 = new TreeNode(this._input.substring(this._offset, this._offset + 5), this._offset);
          this._offset = this._offset + 5;
        } else {
          address0 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('"false"');
          }
        }
        if (address0 === FAILURE) {
          this._offset = index1;
        }
      }
      this._cache._boolean_[index0] = [address0, this._offset];
      return address0;
    },

    _read_null_: function() {
      var address0 = FAILURE, index0 = this._offset;
      this._cache._null_ = this._cache._null_ || {};
      var cached = this._cache._null_[index0];
      if (cached) {
        this._offset = cached[1];
        return cached[0];
      }
      var chunk0 = null;
      if (this._offset < this._inputSize) {
        chunk0 = this._input.substring(this._offset, this._offset + 4);
      }
      if (chunk0 === 'null') {
        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 4), this._offset);
        this._offset = this._offset + 4;
      } else {
        address0 = FAILURE;
        if (this._offset > this._failure) {
          this._failure = this._offset;
          this._expected = [];
        }
        if (this._offset === this._failure) {
          this._expected.push('"null"');
        }
      }
      this._cache._null_[index0] = [address0, this._offset];
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
      var remaining0 = 0, index1 = this._offset, elements0 = [], address1 = true;
      while (address1 !== FAILURE) {
        var chunk0 = null;
        if (this._offset < this._inputSize) {
          chunk0 = this._input.substring(this._offset, this._offset + 1);
        }
        if (chunk0 !== null && /^[\s]/.test(chunk0)) {
          address1 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset);
          this._offset = this._offset + 1;
        } else {
          address1 = FAILURE;
          if (this._offset > this._failure) {
            this._failure = this._offset;
            this._expected = [];
          }
          if (this._offset === this._failure) {
            this._expected.push('[\\s]');
          }
        }
        if (address1 !== FAILURE) {
          elements0.push(address1);
          --remaining0;
        }
      }
      if (remaining0 <= 0) {
        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);
        this._offset = this._offset;
      } else {
        address0 = FAILURE;
      }
      this._cache.___[index0] = [address0, this._offset];
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
    var tree = this._read_document();
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
  } else {
    var namespace = typeof this !== 'undefined' ? this : window;
    namespace.CanopyJson = exported;
  }
})();
