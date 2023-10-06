"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/jquery@3.7.1/node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/.pnpm/jquery@3.7.1/node_modules/jquery/dist/jquery.js"(exports, module) {
      init_live_reload();
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice2 = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push2 = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString2 = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction2 = function isFunction3(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i2, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i2 in preservedScriptAttributes) {
              val = node[i2] || node.getAttribute && node.getAttribute(i2);
              if (val) {
                script.setAttribute(i2, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString2.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector3, context3) {
          return new jQuery.fn.init(selector3, context3);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice2.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice2.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i2) {
              return callback.call(elem, i2, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice2.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i2) {
              return (i2 + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i2) {
              return i2 % 2;
            }));
          },
          eq: function(i2) {
            var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push: push2,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i2] || {};
            i2++;
          }
          if (typeof target !== "object" && !isFunction2(target)) {
            target = {};
          }
          if (i2 === length) {
            target = this;
            i2--;
          }
          for (; i2 < length; i2++) {
            if ((options = arguments[i2]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString2.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i2 = 0;
            if (isArrayLike2(obj)) {
              length = obj.length;
              for (; i2 < length; i2++) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            } else {
              for (i2 in obj) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += jQuery.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike2(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push2.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i2) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j = 0, i2 = first.length;
            for (; j < len; j++) {
              first[i2++] = second[j];
            }
            first.length = i2;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
            for (; i2 < length; i2++) {
              callbackInverse = !callback(elems[i2], i2);
              if (callbackInverse !== callbackExpect) {
                matches2.push(elems[i2]);
              }
            }
            return matches2;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i2 = 0, ret = [];
            if (isArrayLike2(elems)) {
              length = elems.length;
              for (; i2 < length; i2++) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i2 in elems) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i2, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike2(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction2(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery.contains = function(a, b) {
          var bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push2;
        (function() {
          var i2, Expr, outermostContext, sortInput, hasDuplicate, push3 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches2, expando2 = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push3.apply(
              arr = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push3 = {
              apply: function(target, els) {
                pushNative.apply(target, slice2.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice2.call(arguments, 1));
              }
            };
          }
          function find(selector3, context3, results, seed) {
            var m, i3, elem, nid, match, groups, newSelector, newContext = context3 && context3.ownerDocument, nodeType = context3 ? context3.nodeType : 9;
            results = results || [];
            if (typeof selector3 !== "string" || !selector3 || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context3);
              context3 = context3 || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector3))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context3.getElementById(m)) {
                        if (elem.id === m) {
                          push3.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && find.contains(context3, elem) && elem.id === m) {
                        push3.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push3.apply(results, context3.getElementsByTagName(selector3));
                    return results;
                  } else if ((m = match[3]) && context3.getElementsByClassName) {
                    push3.apply(results, context3.getElementsByClassName(m));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector3 + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector3))) {
                  newSelector = selector3;
                  newContext = context3;
                  if (nodeType === 1 && (rdescend.test(selector3) || rleadingCombinator.test(selector3))) {
                    newContext = rsibling.test(selector3) && testContext(context3.parentNode) || context3;
                    if (newContext != context3 || !support.scope) {
                      if (nid = context3.getAttribute("id")) {
                        nid = jQuery.escapeSelector(nid);
                      } else {
                        context3.setAttribute("id", nid = expando2);
                      }
                    }
                    groups = tokenize(selector3);
                    i3 = groups.length;
                    while (i3--) {
                      groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push3.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector3, true);
                  } finally {
                    if (nid === expando2) {
                      context3.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector3.replace(rtrimCSS, "$1"), context3, results, seed);
          }
          function createCache() {
            var keys2 = [];
            function cache2(key, value) {
              if (keys2.push(key + " ") > Expr.cacheLength) {
                delete cache2[keys2.shift()];
              }
              return cache2[key + " "] = value;
            }
            return cache2;
          }
          function markFunction(fn) {
            fn[expando2] = true;
            return fn;
          }
          function assert2(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches3) {
                var j, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j = matchIndexes[i3]]) {
                    seed[j] = !(matches3[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context3) {
            return context3 && typeof context3.getElementsByTagName !== "undefined" && context3;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document3);
            matches2 = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert2(function(el) {
              documentElement2.appendChild(el).id = jQuery.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
            });
            support.disconnectedMatch = assert2(function(el) {
              return matches2.call(el, "*");
            });
            support.scope = assert2(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert2(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id, context3) {
                if (typeof context3.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context3.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id, context3) {
                if (typeof context3.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i3, elems, elem = context3.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context3.getElementsByName(id);
                    i3 = 0;
                    while (elem = elems[i3++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context3) {
              if (typeof context3.getElementsByTagName !== "undefined") {
                return context3.getElementsByTagName(tag);
              } else {
                return context3.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context3) {
              if (typeof context3.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context3.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert2(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando2 + "' href='' disabled='disabled'></a><select id='" + expando2 + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando2 + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando2 + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches2.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context3, elem) {
            if ((context3.ownerDocument || context3) != document3) {
              setDocument(context3);
            }
            return jQuery.contains(context3, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i3 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice2.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j = duplicates.push(i3);
                }
              }
              while (j--) {
                splice.call(results, duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice2.apply(this)));
          };
          Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context4, xml) {
                  var cache2, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando2] || (parent[expando2] = {});
                      cache2 = outerCache[type] || [];
                      nodeIndex = cache2[0] === dirruns && cache2[1];
                      diff = nodeIndex && cache2[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando2] || (elem[expando2] = {});
                        cache2 = outerCache[type] || [];
                        nodeIndex = cache2[0] === dirruns && cache2[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando2] || (node[expando2] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn[expando2]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches3) {
                    var idx, matched = fn(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf.call(seed, matched[i3]);
                      seed[idx] = !(matches3[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector3) {
                var input = [], results = [], matcher = compile(selector3.replace(rtrimCSS, "$1"));
                return matcher[expando2] ? markFunction(function(seed, matches3, _context4, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches3[i3] = elem);
                    }
                  }
                }) : function(elem, _context4, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector3) {
                return function(elem) {
                  return find(selector3, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash = window2.location && window2.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3;
                if (argument < 0) {
                  i3 = argument + length;
                } else if (argument > length) {
                  i3 = length;
                } else {
                  i3 = argument;
                }
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector3, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector3 + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector3;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector3) : (
              // Cache the tokens
              tokenCache(selector3, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector3 = "";
            for (; i3 < len; i3++) {
              selector3 += tokens[i3].value;
            }
            return selector3;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context3, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context3, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context3, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context3, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando2] || (elem[expando2] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context3, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context3, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context3, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector3, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              find(selector3, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context3, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context3, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector3, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando2]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando2]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context3, xml) {
              var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector3 || "*",
                context3.nodeType ? [context3] : context3,
                []
              ), matcherIn = preFilter && (seed || !selector3) ? condense(elems, preMap, preFilter, context3, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context3, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context3, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push3.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context3, xml) {
              var ret = !leadingRelative && (xml || context3 != outermostContext) || ((checkContext = context3).nodeType ? matchContext(elem, context3, xml) : matchAnyContext(elem, context3, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando2]) {
                  j = ++i3;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i3 > 1 && elementMatcher(matchers),
                    i3 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i3 < j && matcherFromTokens(tokens.slice(i3, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context3, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context3 == document3 || context3 || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context3 && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context3 || document3, xml)) {
                      push3.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context3, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push3.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector3, match) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector3 + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector3);
              }
              i3 = match.length;
              while (i3--) {
                cached = matcherFromTokens(match[i3]);
                if (cached[expando2]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector3,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector3;
            }
            return cached;
          }
          function select(selector3, context3, results, seed) {
            var i3, tokens, token, type, find2, compiled = typeof selector3 === "function" && selector3, match = !seed && tokenize(selector3 = compiled.selector || selector3);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context3.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context3 = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context3
                ) || [])[0];
                if (!context3) {
                  return results;
                } else if (compiled) {
                  context3 = context3.parentNode;
                }
                selector3 = selector3.slice(tokens.shift().value.length);
              }
              i3 = matchExpr.needsContext.test(selector3) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context3.parentNode) || context3
                  )) {
                    tokens.splice(i3, 1);
                    selector3 = seed.length && toSelector(tokens);
                    if (!selector3) {
                      push3.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector3, match))(
              seed,
              context3,
              !documentIsHTML,
              results,
              !context3 || rsibling.test(selector3) && testContext(context3.parentNode) || context3
            );
            return results;
          }
          support.sortStable = expando2.split("").sort(sortOrder).join("") === expando2;
          setDocument();
          support.sortDetached = assert2(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery.find = find;
          jQuery.expr[":"] = jQuery.expr.pseudos;
          jQuery.unique = jQuery.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery.escapeSelector;
          find.getText = jQuery.text;
          find.isXML = jQuery.isXMLDoc;
          find.selectors = jQuery.expr;
          find.support = jQuery.support;
          find.uniqueSort = jQuery.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n2, elem) {
          var matched = [];
          for (; n2; n2 = n2.nextSibling) {
            if (n2.nodeType === 1 && n2 !== elem) {
              matched.push(n2);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction2(qualifier)) {
            return jQuery.grep(elements, function(elem, i2) {
              return !!qualifier.call(elem, i2, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector3) {
            var i2, ret, len = this.length, self2 = this;
            if (typeof selector3 !== "string") {
              return this.pushStack(jQuery(selector3).filter(function() {
                for (i2 = 0; i2 < len; i2++) {
                  if (jQuery.contains(self2[i2], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i2 = 0; i2 < len; i2++) {
              jQuery.find(selector3, self2[i2], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector3) {
            return this.pushStack(winnow(this, selector3 || [], false));
          },
          not: function(selector3) {
            return this.pushStack(winnow(this, selector3 || [], true));
          },
          is: function(selector3) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector3 === "string" && rneedsContext.test(selector3) ? jQuery(selector3) : selector3 || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init4 = jQuery.fn.init = function(selector3, context3, root) {
          var match, elem;
          if (!selector3) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector3 === "string") {
            if (selector3[0] === "<" && selector3[selector3.length - 1] === ">" && selector3.length >= 3) {
              match = [null, selector3, null];
            } else {
              match = rquickExpr.exec(selector3);
            }
            if (match && (match[1] || !context3)) {
              if (match[1]) {
                context3 = context3 instanceof jQuery ? context3[0] : context3;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context3 && context3.nodeType ? context3.ownerDocument || context3 : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context3)) {
                  for (match in context3) {
                    if (isFunction2(this[match])) {
                      this[match](context3[match]);
                    } else {
                      this.attr(match, context3[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context3 || context3.jquery) {
              return (context3 || root).find(selector3);
            } else {
              return this.constructor(context3).find(selector3);
            }
          } else if (selector3.nodeType) {
            this[0] = selector3;
            this.length = 1;
            return this;
          } else if (isFunction2(selector3)) {
            return root.ready !== void 0 ? root.ready(selector3) : (
              // Execute immediately if ready is not present
              selector3(jQuery)
            );
          }
          return jQuery.makeArray(selector3, this);
        };
        init4.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l2 = targets.length;
            return this.filter(function() {
              var i2 = 0;
              for (; i2 < l2; i2++) {
                if (jQuery.contains(this, targets[i2])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context3) {
            var cur, i2 = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i2 < l2; i2++) {
                for (cur = this[i2]; cur && cur !== context3; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector3, context3) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector3, context3))
              )
            );
          },
          addBack: function(selector3) {
            return this.add(
              selector3 == null ? this.prevObject : this.prevObject.filter(selector3)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i2, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i2, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i2, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector3) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector3 = until;
            }
            if (selector3 && typeof selector3 === "string") {
              matched = jQuery.filter(selector3, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction2(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context3, args) {
              if (!locked) {
                args = args || [];
                args = [context3, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction2(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction2(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i2, tuple) {
                    var fn = isFunction2(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction2(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction2(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getErrorHook) {
                        process.error = jQuery.Deferred.getErrorHook();
                      } else if (jQuery.Deferred.getStackHook) {
                        process.error = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction2(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction2(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction2(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i2, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i2][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i2][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice2.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i3) {
              return function(value) {
                resolveContexts[i3] = this;
                resolveValues[i3] = arguments.length > 1 ? slice2.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i2)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction2(resolveValues[i2] && resolveValues[i2].then)) {
                return primary.then();
              }
            }
            while (i2--) {
              adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i2 = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction2(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i2 < len; i2++) {
                fn(
                  elems[i2],
                  key,
                  raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache2 = this.cache(owner);
            if (typeof data === "string") {
              cache2[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache2[camelCase(prop)] = data[prop];
              }
            }
            return cache2;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i2, cache2 = owner[this.expando];
            if (cache2 === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache2 ? [key] : key.match(rnothtmlwhite) || [];
              }
              i2 = key.length;
              while (i2--) {
                delete cache2[key[i2]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache2)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache2 = owner[this.expando];
            return cache2 !== void 0 && !jQuery.isEmptyObject(cache2);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i2 = attrs.length;
                  while (i2--) {
                    if (attrs[i2]) {
                      name = attrs[i2].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i2--) {
              tmp = dataPriv.get(elements[i2], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit2 = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit2 !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit2) {
            initial = initial / 2;
            unit2 = unit2 || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit2);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit2);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit2;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display2 = defaultDisplayMap[nodeName2];
          if (display2) {
            return display2;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display2 = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display2 === "none") {
            display2 = "block";
          }
          defaultDisplayMap[nodeName2] = display2;
          return display2;
        }
        function showHide(elements, show) {
          var display2, elem, values2 = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display2 = elem.style.display;
            if (show) {
              if (display2 === "none") {
                values2[index] = dataPriv.get(elem, "display") || null;
                if (!values2[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values2[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display2 !== "none") {
                values2[index] = "none";
                dataPriv.set(elem, "display", display2);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values2[index] != null) {
              elements[index].style.display = values2[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context3, tag) {
          var ret;
          if (typeof context3.getElementsByTagName !== "undefined") {
            ret = context3.getElementsByTagName(tag || "*");
          } else if (typeof context3.querySelectorAll !== "undefined") {
            ret = context3.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context3, tag)) {
            return jQuery.merge([context3], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            dataPriv.set(
              elems[i2],
              "globalEval",
              !refElements || dataPriv.get(refElements[i2], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context3, scripts, selection, ignored) {
          var elem, tmp, tag, wrap3, attached, j, fragment = context3.createDocumentFragment(), nodes = [], i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            elem = elems[i2];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context3.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context3.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap3 = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap3[1] + jQuery.htmlPrefilter(elem) + wrap3[2];
                j = wrap3[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i2 = 0;
          while (elem = nodes[i2++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on(elem, types, selector3, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector3 !== "string") {
              data = data || selector3;
              selector3 = void 0;
            }
            for (type in types) {
              on(elem, type, selector3, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector3;
            data = selector3 = void 0;
          } else if (fn == null) {
            if (typeof selector3 === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector3;
              selector3 = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector3);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector3) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector3 = handleObjIn.selector;
            }
            if (selector3) {
              jQuery.find.matchesSelector(documentElement, selector3);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector3 ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector: selector3,
                needsContext: selector3 && jQuery.expr.match.needsContext.test(selector3),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector3) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector3, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector3, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector3 ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector3 || selector3 === handleObj.selector || selector3 === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i2 = 1; i2 < arguments.length; i2++) {
              args[i2] = arguments[i2];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i2 = 0;
            while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i2 = 0; i2 < delegateCount; i2++) {
                    handleObj = handlers[i2];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction2(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice2.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery.event.fix(nativeEvent)
              );
            }
          }
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector3, data, fn) {
            return on(this, types, selector3, data, fn);
          },
          one: function(types, selector3, data, fn) {
            return on(this, types, selector3, data, fn, 1);
          },
          off: function(types, selector3, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector3, types[type]);
              }
              return this;
            }
            if (selector3 === false || typeof selector3 === "function") {
              fn = selector3;
              selector3 = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector3);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i2, l2, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i2 = 0, l2 = events[type].length; i2 < l2; i2++) {
                  jQuery.event.add(dest, type, events[type][i2]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction2(value);
          if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l2) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i2 < l2; i2++) {
                node = fragment;
                if (i2 !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i2], node, i2);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i2 = 0; i2 < hasScripts; i2++) {
                  node = scripts[i2];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove3(elem, selector3, keepData) {
          var node, nodes = selector3 ? jQuery.filter(selector3, elem) : elem, i2 = 0;
          for (; (node = nodes[i2]) != null; i2++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i2, l2, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                fixInput(srcElements[i2], destElements[i2]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                  cloneCopyEvent(srcElements[i2], destElements[i2]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i2 = 0;
            for (; (elem = elems[i2]) !== void 0; i2++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector3) {
            return remove3(this, selector3, true);
          },
          remove: function(selector3) {
            return remove3(this, selector3);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i2 = 0;
            for (; (elem = this[i2]) != null; i2++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i2 = 0, l2 = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i2 < l2; i2++) {
                    elem = this[i2] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector3) {
            var elems, ret = [], insert = jQuery(selector3), last = insert.length - 1, i2 = 0;
            for (; i2 <= last; i2++) {
              elems = i2 === last ? this : this.clone(true);
              jQuery(insert[i2])[original](elems);
              push2.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style2 = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style2.width;
              minWidth = style2.minWidth;
              maxWidth = style2.maxWidth;
              style2.minWidth = style2.maxWidth = style2.width = ret;
              ret = computed.width;
              style2.width = width;
              style2.minWidth = minWidth;
              style2.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
          while (i2--) {
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches2 = rcssNum.exec(value);
          return matches2 ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i2 < 4; i2 += 2) {
            if (box === "margin") {
              marginDelta += jQuery.css(elem, box + cssExpand[i2], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style2 = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style2[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style2.setProperty(name, value);
                } else {
                  style2[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style2[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i2, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches2, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i2 < 4; i2++) {
                expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i2 = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i2 < len; i2++) {
                  map[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween2(elem, options, prop, end, easing2) {
          return new Tween2.prototype.init(elem, options, prop, end, easing2);
        }
        jQuery.Tween = Tween2;
        Tween2.prototype = {
          constructor: Tween2,
          init: function(elem, options, prop, end, easing2, unit2) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing2 || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit2 || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween2.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween2.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween2.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween2.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween2.prototype.init.prototype = Tween2.prototype;
        Tween2.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween2.propHooks.scrollTop = Tween2.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween2.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i2 = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i2 < 4; i2 += 2 - includeWidth) {
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation2.tweeners[prop] || []).concat(Animation2.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display2, isBox = "width" in props || "height" in props, anim = this, orig = {}, style2 = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style2.overflow, style2.overflowX, style2.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display2 = jQuery.css(elem, "display");
            if (display2 === "none") {
              if (restoreDisplay) {
                display2 = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display2 = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display2 === "inline" || display2 === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style2.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display2 = style2.display;
                    restoreDisplay = display2 === "none" ? "" : display2;
                  }
                }
                style2.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style2.overflow = "hidden";
            anim.always(function() {
              style2.overflow = opts.overflow[0];
              style2.overflowX = opts.overflow[1];
              style2.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing2, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing2 = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing2 = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing2;
                }
              }
            } else {
              specialEasing[name] = easing2;
            }
          }
        }
        function Animation2(elem, properties, options) {
          var result, stopped, index = 0, length = Animation2.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation2.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction2(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction2(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation2, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction2(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation2.tweeners[prop] = Animation2.tweeners[prop] || [];
              Animation2.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation2.prefilters.unshift(callback);
            } else {
              Animation2.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing2, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing2 || isFunction2(speed) && speed,
            duration: speed,
            easing: fn && easing2 || easing2 && !isFunction2(easing2) && easing2
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction2(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing2, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing2, callback);
          },
          animate: function(prop, speed, easing2, callback) {
            var empty2 = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing2, callback), doAnimation = function() {
              var anim = Animation2(this, jQuery.extend({}, prop), optall);
              if (empty2 || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty2 || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i2, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing2, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing2, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing2, callback) {
            return this.animate(props, speed, easing2, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i2 = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i2 < timers.length; i2++) {
            timer = timers[i2];
            if (!timer() && timers[i2] === timer) {
              timers.splice(i2--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i2++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i2, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction2(value)) {
              return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction2(value)) {
              return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i2, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction2(value)) {
              return this.each(function(i3) {
                jQuery(this).toggleClass(
                  value.call(this, i3, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self2 = jQuery(this);
                for (i2 = 0; i2 < classNames.length; i2++) {
                  className = classNames[i2];
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector3) {
            var className, elem, i2 = 0;
            className = " " + selector3 + " ";
            while (elem = this[i2++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction2(value);
            return this.each(function(i2) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i2, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values2 = one ? null : [], max2 = one ? index + 1 : options.length;
                if (index < 0) {
                  i2 = max2;
                } else {
                  i2 = one ? index : 0;
                }
                for (; i2 < max2; i2++) {
                  option = options[i2];
                  if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values2.push(value);
                  }
                }
                return values2;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values2 = jQuery.makeArray(value), i2 = options.length;
                while (i2--) {
                  option = options[i2];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values2) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values2;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i2 = 0;
            while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i2 > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction2(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i2, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s2 = [], add = function(key, valueOrFunction) {
            var value = isFunction2(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s2.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i2, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction2(func)) {
              while (dataType = dataTypes[i2++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s2, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s2, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s2.converters) {
              converters[conv.toLowerCase()] = s2.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s2.responseFields[current]) {
              jqXHR[s2.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s2.dataFilter) {
              response = s2.dataFilter(response, s2.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s2.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s2 = jQuery.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s2.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s2.url = ((url || s2.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s2.type = options.method || options.type || s2.method || s2.type;
            s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s2.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s2.url;
                urlAnchor.href = urlAnchor.href;
                s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s2.crossDomain = true;
              }
            }
            if (s2.data && s2.processData && typeof s2.data !== "string") {
              s2.data = jQuery.param(s2.data, s2.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s2.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s2.type = s2.type.toUpperCase();
            s2.hasContent = !rnoContent.test(s2.type);
            cacheURL = s2.url.replace(rhash, "");
            if (!s2.hasContent) {
              uncached = s2.url.slice(cacheURL.length);
              if (s2.data && (s2.processData || typeof s2.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
                delete s2.data;
              }
              if (s2.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s2.url = cacheURL + uncached;
            } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s2.data = s2.data.replace(r20, "+");
            }
            if (s2.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s2.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]
            );
            for (i2 in s2.headers) {
              jqXHR.setRequestHeader(i2, s2.headers[i2]);
            }
            if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s2.complete);
            jqXHR.done(s2.success);
            jqXHR.fail(s2.error);
            transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s2.async && s2.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s2.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s2, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s2.dataTypes) > -1 && jQuery.inArray("json", s2.dataTypes) < 0) {
                s2.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s2, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s2.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s2.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s2, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i2, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction2(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s2) {
          var i2;
          for (i2 in s2.headers) {
            if (i2.toLowerCase() === "content-type") {
              s2.contentType = s2.headers[i2] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap3;
            if (this[0]) {
              if (isFunction2(html)) {
                html = html.call(this[0]);
              }
              wrap3 = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap3.insertBefore(this[0]);
              }
              wrap3.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction2(html)) {
              return this.each(function(i2) {
                jQuery(this).wrapInner(html.call(this, i2));
              });
            }
            return this.each(function() {
              var self2 = jQuery(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction2(html);
            return this.each(function(i2) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
            });
          },
          unwrap: function(selector3) {
            this.parent(selector3).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i2, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i2 in options.xhrFields) {
                    xhr[i2] = options.xhrFields[i2];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i2 in headers) {
                  xhr.setRequestHeader(i2, headers[i2]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s2) {
          if (s2.crossDomain) {
            s2.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s2) {
          if (s2.cache === void 0) {
            s2.cache = false;
          }
          if (s2.crossDomain) {
            s2.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s2) {
          if (s2.crossDomain || s2.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
          if (jsonProp || s2.dataTypes[0] === "jsonp") {
            callbackName = s2.jsonpCallback = isFunction2(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
            if (jsonProp) {
              s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s2.jsonp !== false) {
              s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
            }
            s2.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s2.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s2[callbackName]) {
                s2.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction2(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context3, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context3 === "boolean") {
            keepScripts = context3;
            context3 = false;
          }
          var base, parsed, scripts;
          if (!context3) {
            if (support.createHTMLDocument) {
              context3 = document2.implementation.createHTMLDocument("");
              base = context3.createElement("base");
              base.href = document2.location.href;
              context3.head.appendChild(base);
            } else {
              context3 = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context3.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context3, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector3, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector3 = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction2(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector3 ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector3)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction2(options)) {
              options = options.call(elem, i2, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i2) {
                jQuery.offset.setOffset(this, options, i2);
              });
            }
            var rect2, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect2 = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect2.top + win.pageYOffset,
              left: rect2.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i2, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i2, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector3, types, data, fn) {
            return this.on(types, selector3, data, fn);
          },
          undelegate: function(selector3, types, fn) {
            return arguments.length === 1 ? this.off(selector3, "**") : this.off(types, selector3 || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i2, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context3) {
          var tmp, args, proxy;
          if (typeof context3 === "string") {
            tmp = fn[context3];
            context3 = fn;
            fn = tmp;
          }
          if (!isFunction2(fn)) {
            return void 0;
          }
          args = slice2.call(arguments, 2);
          proxy = function() {
            return fn.apply(context3 || this, args.concat(slice2.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction2;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l2 = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2; ) {
    }
    return i2 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l2; i2++) {
      tween = a[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n2 = parseFloat(value);
    return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults4) {
    for (var p in defaults4) {
      p in obj || (obj[p] = defaults4[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults4) {
      for (var p in defaults4) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults4[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child2, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child2[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child2._next = prev._next;
      prev._next = child2;
    } else {
      child2._next = parent[firstProp];
      parent[firstProp] = child2;
    }
    if (child2._next) {
      child2._next._prev = child2;
    } else {
      parent[lastProp] = child2;
    }
    child2._prev = prev;
    child2.parent = child2._dp = parent;
    return child2;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child2, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child2._prev, next = child2._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child2) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child2) {
      parent[lastProp] = prev;
    }
    child2._next = child2._prev = child2.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child2, onlyIfParentHasAutoRemove) {
    child2.parent && (!onlyIfParentHasAutoRemove || child2.parent.autoRemoveChildren) && child2.parent.remove && child2.parent.remove(child2);
    child2._act = 0;
  };
  var _uncache = function _uncache2(animation, child2) {
    if (animation && (!child2 || child2._end > animation._dur || child2._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child2) {
    return (parentTime - child2._start) * child2._ts + (child2._ts >= 0 ? 0 : child2._dirty ? child2.totalDuration() : child2._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child2) {
    var t;
    if (child2._time || !child2._dur && child2._initted || child2._start < timeline2._time && (child2._dur || !child2.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child2);
      if (!child2._dur || _clamp(0, child2.totalDuration(), t) - child2._tTime > _tinyNum) {
        child2.render(t, true);
      }
    }
    if (_uncache(timeline2, child2)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child2, position, skipChecks) {
    child2.parent && _removeFromParent(child2);
    child2._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child2) : timeline2._time) + child2._delay);
    child2._end = _roundPrecise(child2._start + (child2.totalDuration() / Math.abs(child2.timeScale()) || 0));
    _addLinkedListItem(timeline2, child2, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child2) || (timeline2._recent = child2);
    skipChecks || _postAddChecks(timeline2, child2);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child2;
    if (time > prevTime) {
      child2 = animation._first;
      while (child2 && child2._start <= time) {
        if (child2.data === "isPause" && child2._start > prevTime) {
          return child2;
        }
        child2 = child2._next;
      }
    } else {
      child2 = animation._last;
      while (child2 && child2._start >= time) {
        if (child2.data === "isPause" && child2._start < prevTime) {
          return child2;
        }
        child2 = child2._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min2, max2, value) {
    return value < min2 ? min2 : value > max2 ? max2 : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min2, max2, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min2, max2, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache2 = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i2, target, a) {
      var l2 = (a || vars).length, distances = cache2[l2], originX, originY, x, y, d, j, max2, min2, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max2 = -_bigNum;
          while (max2 < (max2 = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt--;
        }
        distances = cache2[l2] = [];
        originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max2 = 0;
        min2 = _bigNum;
        for (j = 0; j < l2; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max2 && (max2 = d);
          d < min2 && (min2 = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max2 - min2;
        distances.min = min2;
        distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l2 < 0 ? base - l2 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l2 < 0 ? _invertEase(ease) : ease;
      }
      l2 = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n2 = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n2 - n2 % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray3 = _isArray(snapTo), radius, is2D;
    if (!isArray3 && _isObject(snapTo)) {
      radius = isArray3 = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray3 ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min2 = _bigNum, closest2 = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x;
          dy = snapTo[i2].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x);
        }
        if (dx < min2) {
          min2 = dx;
          closest2 = i2;
        }
      }
      closest2 = !radius || min2 <= radius ? snapTo[closest2] : raw;
      return is2D || closest2 === raw || _isNumber(raw) ? closest2 : closest2 + getUnit(raw);
    });
  };
  var random = function random2(min2, max2, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min2) ? !max2 : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min2) ? min2[~~(Math.random() * min2.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min2 - roundingIncrement / 2 + Math.random() * (max2 - min2 + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit2) {
    return function(value) {
      return func(parseFloat(value)) + (unit2 || getUnit(value));
    };
  };
  var normalize = function normalize2(min2, max2, value) {
    return mapRange(min2, max2, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min2, max2, value) {
    var range = max2 - min2;
    return _isArray(min2) ? _wrapArray(min2, wrap2(0, min2.length), max2) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min2) % range) % range + min2;
    });
  };
  var wrapYoyo = function wrapYoyo2(min2, max2, value) {
    var range = max2 - min2, total = range * 2;
    return _isArray(min2) ? _wrapArray(min2, wrapYoyo2(0, min2.length - 1), max2) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min2) % total) % total || 0;
      return min2 + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s2 = "", i2, nums, end, isArray3;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray3 = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray3 ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i2 - prev) + random(isArray3 ? nums : +nums[0], isArray3 ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString3 = _isString(start), master = {}, p, i2, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString3) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l2 = start.length;
        il = l2 - 2;
        for (i2 = 1; i2 < l2; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l2--;
        func = function func2(p2) {
          p2 *= l2;
          var i3 = Math.min(il, ~~p2);
          return interpolators[i3](p2 - i3);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString3 ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min2 = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min2 > (distance = Math.abs(distance))) {
        label = p;
        min2 = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (_windowExists() && config3) {
      config3 = !config3.name && config3["default"] || config3;
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      config3 && _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r2, g, b, h, s2, l2, max2, min2, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r2 = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r2 + r2 + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s2 = +a[1] / 100;
          l2 = +a[2] / 100;
          g = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
          r2 = l2 * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r2, g);
          a[1] = _hue(h, r2, g);
          a[2] = _hue(h - 1 / 3, r2, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r2 = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max2 = Math.max(r2, g, b);
      min2 = Math.min(r2, g, b);
      l2 = (max2 + min2) / 2;
      if (max2 === min2) {
        h = s2 = 0;
      } else {
        d = max2 - min2;
        s2 = l2 > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
        h = max2 === r2 ? (g - b) / d + (g < b ? 6 : 0) : max2 === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s2 * 100 + 0.5);
      a[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values2 = [], c2 = [], i2 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values2.push.apply(values2, a);
      c2.push(i2 += a.length + 1);
    });
    values2.c = c2;
    return values2;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c2, shell, d, l2;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s2);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i2 < l2; i2++) {
          result += shell[i2] + (~c2.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l2 = shell.length - 1;
      for (; i2 < l2; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s2 += "|" + p + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id2, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id2 = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id2 && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id2);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove3(callback, i2) {
        ~(i2 = _listeners3.indexOf(callback)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split2 = value.substr(1, value.length - 3).split(":"), key = split2[0], i2 = 1, l2 = split2.length, index, val, parsedVal;
    for (; i2 < l2; i2++) {
      val = split2[i2];
      index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split2 = (name + "").split("("), ease = _easeMap[split2[0]];
    return ease && split2.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split2[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child2 = timeline2._first, ease;
    while (child2) {
      if (child2 instanceof Timeline) {
        _propagateYoyoEase2(child2, isYoyo);
      } else if (child2.vars.yoyoEase && (!child2._yoyo || !child2._repeat) && child2._yoyo !== isYoyo) {
        if (child2.timeline) {
          _propagateYoyoEase2(child2.timeline, isYoyo);
        } else {
          ease = child2._ease;
          child2._ease = child2._yEase;
          child2._yEase = ease;
          child2._yoyo = isYoyo;
        }
      }
      child2 = child2._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n2, c2) {
    var n1 = 1 / c2, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n2 * p * p : p < n22 ? n2 * Math.pow(p - 1.5 / c2, 2) + 0.75 : p < n3 ? n2 * (p -= 2.25 / c2) * p + 0.9375 : n2 * Math.pow(p - 2.625 / c2, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max2 = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max2, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set2(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child2, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child2 = this._first;
          while (child2) {
            next = child2._next;
            if ((child2._act || time >= child2._start) && child2._ts && pauseTween !== child2) {
              if (child2.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child2.render(child2._ts > 0 ? (time - child2._start) * child2._ts : (child2._dirty ? child2.totalDuration() : child2._tDur) + (time - child2._start) * child2._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child2 = next;
          }
        } else {
          child2 = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child2) {
            next = child2._prev;
            if ((child2._act || adjustedTime <= child2._end) && child2._ts && pauseTween !== child2) {
              if (child2.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child2.render(child2._ts > 0 ? (adjustedTime - child2._start) * child2._ts : (child2._dirty ? child2.totalDuration() : child2._tDur) + (adjustedTime - child2._start) * child2._ts, suppressEvents, force || _reverting && (child2._initted || child2._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child2 = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child2, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child2));
      if (!(child2 instanceof Animation)) {
        if (_isArray(child2)) {
          child2.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child2)) {
          return this.addLabel(child2, position);
        }
        if (_isFunction(child2)) {
          child2 = Tween.delayedCall(0, child2);
        } else {
          return this;
        }
      }
      return this !== child2 ? _addToTimeline(this, child2, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child2 = this._first;
      while (child2) {
        if (child2._start >= ignoreBeforeTime) {
          if (child2 instanceof Tween) {
            tweens && a.push(child2);
          } else {
            timelines && a.push(child2);
            nested && a.push.apply(a, child2.getChildren(true, tweens, timelines));
          }
        }
        child2 = child2._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove3(child2) {
      if (_isString(child2)) {
        return this.removeLabel(child2);
      }
      if (_isFunction(child2)) {
        return this.killTweensOf(child2);
      }
      _removeLinkedListItem(this, child2);
      if (child2 === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child2 = this._first;
      position = _parsePosition(this, position);
      while (child2) {
        if (child2._start === position && child2.data === "isPause") {
          _removeFromParent(child2);
        }
        child2 = child2._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child2 = this._first, isGlobalTime = _isNumber(onlyActive), children2;
      while (child2) {
        if (child2 instanceof Tween) {
          if (_arrayContainsAny(child2._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child2._initted && child2._ts) && child2.globalTime(0) <= onlyActive && child2.globalTime(child2.totalDuration()) > onlyActive : !onlyActive || child2.isActive())) {
            a.push(child2);
          }
        } else if ((children2 = child2.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children2);
        }
        child2 = child2._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child2 = this._first, labels = this.labels, p;
      while (child2) {
        if (child2._start >= ignoreBeforeTime) {
          child2._start += amount;
          child2._end += amount;
        }
        child2 = child2._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child2 = this._first;
      this._lock = 0;
      while (child2) {
        child2.invalidate(soft);
        child2 = child2._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child2 = this._first, next;
      while (child2) {
        next = child2._next;
        this.remove(child2);
        child2 = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max2 = 0, self2 = this, child2 = self2._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child2) {
          prev = child2._prev;
          child2._dirty && child2.totalDuration();
          start = child2._start;
          if (start > prevStart && self2._sort && child2._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child2, start - child2._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child2._ts) {
            max2 -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child2._end > max2 && child2._ts && (max2 = child2._end);
          child2 = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max2 ? self2._time : max2, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child2 = _globalTimeline._first;
        if (!child2 || !child2._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child2 && !child2._ts) {
              child2 = child2._next;
            }
            child2 || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i2;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i2 = tween._targets.length;
      while (i2--) {
        pt = lookup[i2][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i2 = ptCache.length;
    while (i2--) {
      rootPT = ptCache[i2];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy[aliases[i2]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i2) {
        return a.push({
          t: i2 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults4 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l2, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults4 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l2 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i2 = 0; i2 < l2; i2++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i2 = 0; i2 < a.length; i2++) {
                kf = a[i2];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i2 ? a[i2 - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i2;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set2(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt) {
        s2 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s2;
        pt = pt._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches2 = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c2) {
        var queries = c2.queries, conditions = c2.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c2.revert();
          anyMatch && matches2.push(c2);
        }
      });
      _dispatch("matchMediaRevert");
      matches2.forEach(function(c2) {
        return c2.onMatch(c2);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self2 = this, f = function f2() {
        var prev = _context, prevSelector = self2.selector, result;
        prev && prev !== self2 && prev.data.push(self2);
        scope && (self2.selector = selector(scope));
        _context = self2;
        result = func.apply(self2, arguments);
        _isFunction(result) && self2._r.push(result);
        _context = prev;
        self2.selector = prevSelector;
        self2.isReverted = false;
        return result;
      };
      self2.last = f;
      return name === _isFunction ? f(self2) : name ? self2[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia3) {
      var _this4 = this;
      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function(t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function(t) {
          return {
            g: t.globalTime(0),
            t
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o2) {
          return o2.t.revert(revert);
        });
        this.data.forEach(function(e) {
          return !(e instanceof Tween) && e.revert && e.revert(revert);
        });
        this._r.forEach(function(f) {
          return f(revert, _this4);
        });
        this.isReverted = true;
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia3) {
        var i2 = _media.length;
        while (i2--) {
          _media[i2].id === this.id && _media.splice(i2, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3);
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c2) {
        return c2.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit2, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format2 = unit2 ? _passThrough : _numericIfPossible;
      unit2 === "native" && (unit2 = "");
      return !target ? target : !property ? function(property2, unit3, uncache2) {
        return format2((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit3, uncache2));
      } : format2((_plugins[property] && _plugins[property].get || getter)(target, property, unit2, uncache));
    },
    quickSetter: function quickSetter(target, property, unit2) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit2);
        }), l2 = setters.length;
        return function(value) {
          var i2 = l2;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache2 = _getCache(target), p = cache2.harness && (cache2.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit2 ? value + unit2 : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache2.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit2 ? value + unit2 : value, cache2, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults4 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults4), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child2, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child2 = _globalTimeline._first;
      while (child2) {
        next = child2._next;
        if (includeDelayedCalls || !(!child2._dur && child2 instanceof Tween && child2.vars.onComplete === child2._targets[0])) {
          _addToTimeline(tl, child2, child2._start - child2._delay);
        }
        child2 = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia2(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c2) {
        var cond = c2.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c2.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i2 = a && a.indexOf(callback);
      i2 >= 0 && a.splice(i2, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i2, pt;
    for (p in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt = tween._ptLookup[i2][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i2], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.2";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache2 = target._gsap;
    cache2.scaleX = cache2.scaleY = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache2 = target._gsap;
    cache2[property] = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style2 = target.style;
    if (property in _transformProps && style2) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style2 || isNotCSS) && this.props.push(property, isNotCSS, style2[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style2) {
    if (style2.translate) {
      style2.removeProperty("translate");
      style2.removeProperty("scale");
      style2.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style2 = target.style, cache2 = target._gsap, i2, p;
    for (i2 = 0; i2 < props.length; i2 += 3) {
      props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style2[props[i2]] = props[i2 + 2] : style2.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache2[p] = this.tfm[p];
      }
      if (cache2.svg) {
        cache2.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i2 = _reverting2();
      if ((!i2 || !i2.isStart) && !style2[_transformProp]) {
        _removeIndependentTransforms(style2);
        cache2.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s2 = e.style, i2 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s2)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style2 = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style2.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style2.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style2.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit2) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit2 === "px", toPercent = unit2 === "%", px, parent, cache2, isSVG;
    if (unit2 === curUnit || !curValue || _nonConvertibleUnits[unit2] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit2);
    parent = ~property.indexOf("adius") || unit2 === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache2 = parent._gsap;
    if (cache2 && toPercent && cache2.width && horizontal && cache2.time === _ticker.time && !cache2.uncache) {
      return _round(curValue / cache2.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style2.position = _getComputedProperty(target, "position"));
      parent === target && (style2.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style2.position = "absolute";
      if (horizontal && toPercent) {
        cache2 = _getCache(parent);
        cache2.time = _ticker.time;
        cache2.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit2, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit2) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit2 && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit2) + unit2 : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s2 = p && _getComputedProperty(target, p, 1);
      if (s2 && s2 !== start) {
        prop = p;
        start = s2;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split2 = value.split(" "), x = split2[0], y = split2[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split2[0] = _keywordToPercent[x] || x;
    split2[1] = _keywordToPercent[y] || y;
    return split2.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style2 = target.style, props = data.u, cache2 = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style2.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache2) {
          cache2.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache2.uncache = 1;
          _removeIndependentTransforms(style2);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache2 = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache2.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache2.svg) {
      temp = style2.display;
      style2.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style2.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache2 = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache2.xOrigin || 0, yOriginOld = cache2.yOrigin || 0, xOffsetOld = cache2.xOffset || 0, yOffsetOld = cache2.yOffset || 0, a = matrix[0], b = matrix[1], c2 = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c2)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache2.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache2.xOffset = xOffsetOld + (tx * a + ty * c2) - tx;
      cache2.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache2.xOffset = cache2.yOffset = 0;
    }
    cache2.xOrigin = xOrigin;
    cache2.yOrigin = yOrigin;
    cache2.smooth = !!smooth;
    cache2.origin = origin;
    cache2.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOffset", xOffsetOld, cache2.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOffset", yOffsetOld, cache2.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache2 = target._gsap || new GSCache(target);
    if ("x" in cache2 && !uncache && !cache2.uncache) {
      return cache2;
    }
    var style2 = target.style, invertedScaleX = cache2.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c2, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache2.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style2[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style2.scale = style2.rotate = style2.translate = "none";
    }
    matrix = _getMatrix(target, cache2.svg);
    if (cache2.svg) {
      if (cache2.uncache) {
        t2 = target.getBBox();
        origin = cache2.xOrigin - t2.x + "px " + (cache2.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache2.originIsAbsolute, cache2.smooth !== false, matrix);
    }
    xOrigin = cache2.xOrigin || 0;
    yOrigin = cache2.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c2 = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c2 * c2);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c2 || d ? _atan2(c2, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache2.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c2);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c2 = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c2 * c2));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache2.svg) {
        t1 = target.getAttribute("transform");
        cache2.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache2.uncache;
    cache2.x = x - ((cache2.xPercent = x && (!uncache && cache2.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache2.xPercent / 100 : 0) + px;
    cache2.y = y - ((cache2.yPercent = y && (!uncache && cache2.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache2.yPercent / 100 : 0) + px;
    cache2.z = z + px;
    cache2.scaleX = _round(scaleX);
    cache2.scaleY = _round(scaleY);
    cache2.rotation = _round(rotation) + deg;
    cache2.rotationX = _round(rotationX) + deg;
    cache2.rotationY = _round(rotationY) + deg;
    cache2.skewX = skewX + deg;
    cache2.skewY = skewY + deg;
    cache2.transformPerspective = perspective + px;
    if (cache2.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style2[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache2.xOffset = cache2.yOffset = 0;
    cache2.force3D = _config.force3D;
    cache2.renderTransform = cache2.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache2.uncache = 0;
    return cache2;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit2 = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit2))) + unit2;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache2) {
    cache2.z = "0px";
    cache2.rotationY = cache2.rotationX = "0deg";
    cache2.force3D = 0;
    _renderCSSTransforms(ratio, cache2);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache2) {
    var _ref = cache2 || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache2) {
    var _ref2 = cache2 || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString3 = _isString(endValue), endNum = parseFloat(endValue) * (isString3 && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString3) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style2[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r2 = "Right", b = "Bottom", l2 = "Left", props = (index < 3 ? [t, r2, b, l2] : [t + l2, t + r2, b + r2, b + l2]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i2) {
        return vars[prop] = a[i2] = a[i2] || a[(i2 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache2, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style2, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style2[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style2.visibility);
              _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache2 = target._gsap;
              cache2.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache2.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp, 0, 1, cache2.renderTransform, cache2, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache2, "scaleY", cache2.scaleY, (relative ? _parseRelative(cache2.scaleY, relative + endNum) : endNum) - cache2.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style2[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache2.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache2.zOrigin && _addNonTweeningPT(this, cache2, "zOrigin", cache2.zOrigin, endUnit);
                _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache2, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache2, "smooth", cache2.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache2[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style2)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache2 : style2, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style2)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style2 ? inlineProps.push(p, 0, style2[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split2 = name.split(":");
      _propertyAliases[split2[1]] = all[split2[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/Flip.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc3;
  var _win3;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win3 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc3 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div");
      _body.appendChild(d1);
      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp2] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;
      _body.removeChild(d1);
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e) {
    var a, cache2;
    while (e && e !== _body) {
      cache2 = e._gsap;
      cache2 && cache2.uncache && cache2.get(e, "x");
      if (cache2 && !cache2.scaleX && !cache2.scaleY && cache2.renderTransform) {
        cache2.scaleX = cache2.scaleY = 1e-4;
        cache2.renderTransform(1, cache2);
        a ? a.push(cache2) : a = [cache2];
      }
      e = e.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win3.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i2) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i2 ? "rect" : "g" : "div", x = i2 !== 2 ? 0 : 100, y = i2 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i2) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e);
        }
      }
      return e;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c2 = new Matrix2D(), i2 = 0;
    for (; i2 < m.numberOfItems; i2++) {
      c2.multiply(m.getItem(i2).matrix);
    }
    return c2;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win3) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win3.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a, b, c2, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c2;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c2, d, e, f) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c2 === void 0) {
        c2 = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e === void 0) {
        e = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a, b, c2, d, e, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c2 = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c2 || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c2 / determinant, a / determinant, (c2 * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c2 = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c22 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a2 * a + c22 * c2, a2 * b + c22 * d, b2 * a + d2 * c2, b2 * b + d2 * d, e + e2 * a + f2 * c2, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c2 = this.c, d = this.d, e = this.e, f = this.f;
      return a === matrix.a && b === matrix.b && c2 === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply2(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a = this.a, b = this.b, c2 = this.c, d = this.d, e = this.e, f = this.f;
      decoratee.x = x * a + y * c2 + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/Flip.js
  var _id = 1;
  var _toArray;
  var gsap2;
  var _batch;
  var _batchAction;
  var _body2;
  var _closestTenth;
  var _getStyleSaver3;
  var _forEachBatch = function _forEachBatch2(batch, name) {
    return batch.actions.forEach(function(a) {
      return a.vars[name] && a.vars[name](a);
    });
  };
  var _batchLookup = {};
  var _RAD2DEG2 = 180 / Math.PI;
  var _DEG2RAD2 = Math.PI / 180;
  var _emptyObj = {};
  var _dashedNameLookup = {};
  var _memoizedRemoveProps = {};
  var _listToArray = function _listToArray2(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
  };
  var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
  var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
  var _getEl = function _getEl2(target) {
    return _toArray(target)[0] || console.warn("Element not found:", target);
  };
  var _round3 = function _round4(value) {
    return Math.round(value * 1e4) / 1e4 || 0;
  };
  var _toggleClass = function _toggleClass2(targets, className, action) {
    return targets.forEach(function(el) {
      return el.classList[action](className);
    });
  };
  var _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  };
  var _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  };
  var _camelToDashed = function _camelToDashed2(p) {
    return p.replace(/([A-Z])/g, "-$1").toLowerCase();
  };
  var _copy = function _copy2(obj, exclude) {
    var result = {}, p;
    for (p in obj) {
      exclude[p] || (result[p] = obj[p]);
    }
    return result;
  };
  var _memoizedProps = {};
  var _memoizeProps = function _memoizeProps2(props) {
    var p = _memoizedProps[props] = _listToArray(props);
    _memoizedRemoveProps[props] = p.concat(_removeProps);
    return p;
  };
  var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
    var cache2 = el._gsap || gsap2.core.getCache(el);
    if (cache2.gmCache === gsap2.ticker.frame) {
      return cache2.gMatrix;
    }
    cache2.gmCache = gsap2.ticker.frame;
    return cache2.gMatrix = getGlobalMatrix(el, true, false, true);
  };
  var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
    if (level === void 0) {
      level = 0;
    }
    var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l2 = invert ? -inc * 900 : 0;
    while (el) {
      l2 += inc;
      el = el.previousSibling;
    }
    return parent ? l2 + _getDOMDepth2(parent, invert, level + 1) : l2;
  };
  var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
    comps.forEach(function(comp) {
      return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function(c1, c2) {
      return c1.d - c2.d;
    });
    return comps;
  };
  var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
    var style2 = elState.element.style, a = elState.css = elState.css || [], i2 = props.length, p, v;
    while (i2--) {
      p = props[i2];
      v = style2[p] || style2.getPropertyValue(p);
      a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }
    return style2;
  };
  var _applyInlineStyles = function _applyInlineStyles2(state) {
    var css = state.css, style2 = state.element.style, i2 = 0;
    state.cache.uncache = 1;
    for (; i2 < css.length; i2 += 2) {
      css[i2 + 1] ? style2[css[i2]] = css[i2 + 1] : style2.removeProperty(css[i2]);
    }
    if (!css[css.indexOf("transform") + 1] && style2.translate) {
      style2.removeProperty("translate");
      style2.removeProperty("scale");
      style2.removeProperty("rotate");
    }
  };
  var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
    comps.forEach(function(c2) {
      return c2.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
  };
  var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
  var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style2 = element.style, i2 = 4, result, displayIsNone, cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);
    if (_batch && ignoreBatch !== 1) {
      _batch._abs.push({
        t: element,
        b: elState,
        a: elState,
        sd: 0
      });
      _batch._final.push(function() {
        return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
      });
      return element;
    }
    displayIsNone = getProp("display") === "none";
    if (!elState.isVisible || displayIsNone) {
      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
      elState.matrix = fallbackNode.matrix;
      elState.width = width = elState.width || fallbackNode.width;
      elState.height = height = elState.height || fallbackNode.height;
    }
    _recordInlineStyles(elState, _absoluteProps);
    cs = window.getComputedStyle(element);
    while (i2--) {
      style2[_absoluteProps[i2]] = cs[_absoluteProps[i2]];
    }
    style2.gridArea = "1 / 1 / 1 / 1";
    style2.transition = "none";
    style2.position = "absolute";
    style2.width = width + "px";
    style2.height = height + "px";
    style2.top || (style2.top = "0px");
    style2.left || (style2.left = "0px");
    if (uncache) {
      result = new ElementState(element);
    } else {
      result = _copy(elState, _emptyObj);
      result.position = "absolute";
      if (elState.simple) {
        var bounds = element.getBoundingClientRect();
        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
      } else {
        result.matrix = getGlobalMatrix(element, false, false, true);
      }
    }
    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
  };
  var _filterComps = function _filterComps2(comps, targets) {
    if (targets !== true) {
      targets = _toArray(targets);
      comps = comps.filter(function(c2) {
        if (targets.indexOf((c2.sd < 0 ? c2.b : c2.a).element) !== -1) {
          return true;
        } else {
          c2.t._gsap.renderTransform(1);
          if (c2.b.isVisible) {
            c2.t.style.width = c2.b.width + "px";
            c2.t.style.height = c2.b.height + "px";
          }
        }
      });
    }
    return comps;
  };
  var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
    return _orderByDOMDepth(comps, true).forEach(function(c2) {
      return (c2.a.isVisible || c2.b.isVisible) && _makeAbsolute(c2.sd < 0 ? c2.b : c2.a, c2.b, 1);
    });
  };
  var _findElStateInState = function _findElStateInState2(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
  };
  var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
  };
  var _recordProps = function _recordProps2(elState, props) {
    var getProp = gsap2.getProperty(elState.element, null, "native"), obj = elState.props = {}, i2 = props.length;
    while (i2--) {
      obj[props[i2]] = (getProp(props[i2]) + "").trim();
    }
    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
  };
  var _applyProps = function _applyProps2(element, props) {
    var style2 = element.style || element, p;
    for (p in props) {
      style2[p] = props[p];
    }
  };
  var _getID = function _getID2(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
  };
  var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
    return elStates.map(function(elState) {
      return elState.element;
    });
  };
  var _handleCallback = function _handleCallback2(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
  };
  var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element, cache2 = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
    if (simple || !parent) {
      scaleX = scaleY = 1;
      rotation = skewX = 0;
    } else {
      parentMatrix = _getInverseGlobalMatrix(parent);
      matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
      rotation = _round3(Math.atan2(matrix.b, matrix.a) * _RAD2DEG2);
      skewX = _round3(Math.atan2(matrix.c, matrix.d) * _RAD2DEG2 + rotation) % 360;
      scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
      scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD2);
      if (fitChild) {
        fitChild = _toArray(fitChild)[0];
        getProp = gsap2.getProperty(fitChild);
        bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
        dimensionState = {
          scaleX: getProp("scaleX"),
          scaleY: getProp("scaleY"),
          width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
          height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
        };
      }
      cache2.rotation = rotation + "deg";
      cache2.skewX = skewX + "deg";
    }
    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache2.scaleX = scaleX;
      cache2.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
      x += e - fromState.matrix.e;
      y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache2.renderTransform(1, cache2);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e,
        y: f
      });
      x += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e - fromState.matrix.e,
        y: f - fromState.matrix.f
      });
      x += toPoint.x;
      y += toPoint.y;
    }
    x = _closestTenth(x, 0.02);
    y = _closestTenth(y, 0.02);
    if (vars && !(vars instanceof ElementState)) {
      styles && styles.revert();
    } else {
      cache2.x = x + "px";
      cache2.y = y + "px";
      cache2.renderTransform(1, cache2);
    }
    if (vars) {
      vars.x = x;
      vars.y = y;
      vars.rotation = rotation;
      vars.skewX = skewX;
      if (scale) {
        vars.scaleX = scaleX;
        vars.scaleY = scaleY;
      } else {
        vars.width = width;
        vars.height = height;
      }
    }
    return vars || cache2;
  };
  var _parseState = function _parseState2(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
  };
  var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
    var to1 = toState.idLookup[id], to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
  };
  var _bodyMetrics = [];
  var _bodyProps = "width,height,overflowX,overflowY".split(",");
  var _bodyLocked;
  var _lockBodyScroll = function _lockBodyScroll2(lock) {
    if (lock !== _bodyLocked) {
      var s2 = _body2.style, w = _body2.clientWidth === window.outerWidth, h = _body2.clientHeight === window.outerHeight, i2 = 4;
      if (lock && (w || h)) {
        while (i2--) {
          _bodyMetrics[i2] = s2[_bodyProps[i2]];
        }
        if (w) {
          s2.width = _body2.clientWidth + "px";
          s2.overflowY = "hidden";
        }
        if (h) {
          s2.height = _body2.clientHeight + "px";
          s2.overflowX = "hidden";
        }
        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i2--) {
          _bodyMetrics[i2] ? s2[_bodyProps[i2]] = _bodyMetrics[i2] : s2.removeProperty(_camelToDashed(_bodyProps[i2]));
        }
        _bodyLocked = lock;
      }
    }
  };
  var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};
    var _vars = vars, clearProps2 = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass2 = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap2.timeline({
      delay,
      paused,
      repeat,
      repeatDelay,
      yoyo,
      data: "isFlip"
    }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
      return spinNum;
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i2, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
    for (p in toState.idLookup) {
      toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
      el = toNode.element;
      fromNode = fromState.idLookup[p];
      fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
      if (fromNode) {
        comp = {
          t: el,
          b: fromNode,
          a: toNode,
          sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
        };
        comps.push(comp);
        if (comp.sd) {
          if (comp.sd < 0) {
            comp.b = toNode;
            comp.a = fromNode;
          }
          interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
          fade && comps.push(comp.swap = {
            t: fromNode.element,
            b: comp.b,
            a: comp.a,
            sd: -comp.sd,
            swap: comp
          });
        }
        el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
      } else if (toNode.isVisible) {
        comps.push({
          t: el,
          b: _copy(toNode, {
            isVisible: 1
          }),
          a: toNode,
          sd: 0,
          entering: 1
        });
        el._flip = _batch ? _batch.timeline : animation;
      }
    }
    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
      return tweenVars[p2] = function(i3) {
        return comps[i3].a.props[p2];
      };
    });
    comps.finalStates = finalStates = [];
    run = function run2() {
      _orderByDOMDepth(comps);
      _lockBodyScroll(true);
      for (i2 = 0; i2 < comps.length; i2++) {
        comp = comps[i2];
        a = comp.a;
        b = comp.b;
        if (prune && !a.isDifferent(b) && !comp.entering) {
          comps.splice(i2--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i2 && (a.matrix = getGlobalMatrix(el, false, false, true));
          if (b.isVisible && a.isVisible) {
            if (comp.sd < 0) {
              state = new ElementState(el, props, fromState.simple);
              _fit(state, a, scale, 0, 0, state);
              state.matrix = getGlobalMatrix(el, false, false, true);
              state.css = comp.b.css;
              comp.a = a = state;
              fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
              stagger && swapOutTargets.push(el);
            } else if (comp.sd > 0 && fade) {
              el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
            }
            _fit(a, b, scale, props);
          } else if (b.isVisible !== a.isVisible) {
            if (!b.isVisible) {
              a.isVisible && entering.push(a);
              comps.splice(i2--, 1);
            } else if (!a.isVisible) {
              b.css = a.css;
              leaving.push(b);
              comps.splice(i2--, 1);
              absolute && nested && _fit(a, b, scale, props);
            }
          }
          if (!scale) {
            el.style.maxWidth = Math.max(a.width, b.width) + "px";
            el.style.maxHeight = Math.max(a.height, b.height) + "px";
            el.style.minWidth = Math.min(a.width, b.width) + "px";
            el.style.minHeight = Math.min(a.height, b.height) + "px";
          }
          nested && toggleClass2 && el.classList.add(toggleClass2);
        }
        finalStates.push(a);
      }
      var classTargets;
      if (toggleClass2) {
        classTargets = finalStates.map(function(s2) {
          return s2.element;
        });
        nested && classTargets.forEach(function(e) {
          return e.classList.remove(toggleClass2);
        });
      }
      _lockBodyScroll(false);
      if (scale) {
        tweenVars.scaleX = function(i3) {
          return comps[i3].a.scaleX;
        };
        tweenVars.scaleY = function(i3) {
          return comps[i3].a.scaleY;
        };
      } else {
        tweenVars.width = function(i3) {
          return comps[i3].a.width + "px";
        };
        tweenVars.height = function(i3) {
          return comps[i3].a.height + "px";
        };
        tweenVars.autoRound = vars.autoRound || false;
      }
      tweenVars.x = function(i3) {
        return comps[i3].a.x + "px";
      };
      tweenVars.y = function(i3) {
        return comps[i3].a.y + "px";
      };
      tweenVars.rotation = function(i3) {
        return comps[i3].a.rotation + (spin ? spinFunc(i3, targets[i3], targets) * 360 : 0);
      };
      tweenVars.skewX = function(i3) {
        return comps[i3].a.skewX;
      };
      targets = comps.map(function(c2) {
        return c2.t;
      });
      if (_zIndex || _zIndex === 0) {
        tweenVars.modifiers = {
          zIndex: function zIndex() {
            return _zIndex;
          }
        };
        tweenVars.zIndex = _zIndex;
        tweenVars.immediateRender = vars.immediateRender !== false;
      }
      fade && (tweenVars.opacity = function(i3) {
        return comps[i3].sd < 0 ? 0 : comps[i3].sd > 0 ? comps[i3].a.opacity : "+=0";
      });
      if (swapOutTargets.length) {
        stagger = gsap2.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);
        tweenVars.stagger = function(i3, el2) {
          return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i3].swap.t) : i3, el2, dummyArray);
        };
      }
      _callbacks.forEach(function(name) {
        return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
      });
      if (custom && targets.length) {
        remainingProps = _copy(tweenVars, _reserved);
        if ("scale" in custom) {
          custom.scaleX = custom.scaleY = custom.scale;
          delete custom.scale;
        }
        for (p in custom) {
          v = _copy(custom[p], _fitReserved);
          v[p] = tweenVars[p];
          !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
          v.stagger = tweenVars.stagger;
          addFunc.call(animation, targets, v, 0);
          delete remainingProps[p];
        }
      }
      if (targets.length || leaving.length || entering.length) {
        toggleClass2 && animation.add(function() {
          return _toggleClass(classTargets, toggleClass2, animation._zTime < 0 ? "remove" : "add");
        }, 0) && !paused && _toggleClass(classTargets, toggleClass2, "add");
        targets.length && addFunc.call(animation, targets, remainingProps, 0);
      }
      _handleCallback(onEnter, entering, animation);
      _handleCallback(onLeave, leaving, animation);
      var batchTl = _batch && _batch.timeline;
      if (batchTl) {
        batchTl.add(animation, 0);
        _batch._final.push(function() {
          return _setFinalStates(comps, !clearProps2);
        });
      }
      endTime = animation.duration();
      animation.call(function() {
        var forward = animation.time() >= endTime;
        forward && !batchTl && _setFinalStates(comps, !clearProps2);
        toggleClass2 && _toggleClass(classTargets, toggleClass2, forward ? "remove" : "add");
      });
    };
    absoluteOnLeave && (absolute = comps.filter(function(comp2) {
      return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
    }).map(function(comp2) {
      return comp2.a.element;
    }));
    if (_batch) {
      var _batch$_abs;
      absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
      _batch._run.push(run);
    } else {
      absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
      run();
    }
    var anim = _batch ? _batch.timeline : animation;
    anim.revert = function() {
      return _killFlip(anim, 1, 1);
    };
    return anim;
  };
  var _interrupt3 = function _interrupt4(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt4);
  };
  var _killFlip = function _killFlip2(tl, action, force) {
    if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
      if (action) {
        _interrupt3(tl);
        action < 2 && tl.progress(1);
        tl.kill();
      }
      return true;
    }
  };
  var _createLookup = function _createLookup2(state) {
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i2 = elStates.length, elState;
    while (i2--) {
      elState = elStates[i2];
      lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
  };
  var FlipState = /* @__PURE__ */ function() {
    function FlipState2(targets, vars, targetsAreElementStates) {
      this.props = vars && vars.props;
      this.simple = !!(vars && vars.simple);
      if (targetsAreElementStates) {
        this.targets = _elementsFromElementStates(targets);
        this.elementStates = targets;
        _createLookup(this);
      } else {
        this.targets = _toArray(targets);
        var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
        _batch && !soft && _batch._kill.push(this);
        this.update(soft || !!_batch);
      }
    }
    var _proto = FlipState2.prototype;
    _proto.update = function update(soft) {
      var _this = this;
      this.elementStates = this.targets.map(function(el) {
        return new ElementState(el, _this.props, _this.simple);
      });
      _createLookup(this);
      this.interrupt(soft);
      this.recordInlineStyles();
      return this;
    };
    _proto.clear = function clear() {
      this.targets.length = this.elementStates.length = 0;
      _createLookup(this);
      return this;
    };
    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i2 = 0, fromNode, toNode;
      for (; i2 < elStatesInOrder.length; i2++) {
        fromNode = elStatesInOrder[i2];
        nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
        toNode = toElStates[fromNode.id];
        toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
        fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
      }
      return this;
    };
    _proto.getProperty = function getProperty2(element, property) {
      var es = this.getElementState(element) || _emptyObj;
      return (property in es ? es : es.props || _emptyObj)[property];
    };
    _proto.add = function add(state) {
      var i2 = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
      while (i2--) {
        es = state.elementStates[i2];
        es2 = lookup[es.id];
        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i2]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i2]);
          this.elementStates.push(es);
        }
      }
      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);
      _createLookup(this);
      return this;
    };
    _proto.compare = function compare(state) {
      var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
        return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
      }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
        return targets.indexOf(el2) < 0 && place(s12, s22, el2);
      }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
      for (p in l1) {
        s1Alt = a1[p];
        s2Alt = a2[p];
        s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
        el = s1.element;
        s2 = l2[p];
        if (s2Alt) {
          c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }
          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
          placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
        } else {
          !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
        }
      }
      for (p in l2) {
        if (!l1[p]) {
          leave.push(l2[p].element);
          a2[p] && leave.push(a2[p].element);
        }
      }
      return {
        changed,
        unchanged,
        enter,
        leave
      };
    };
    _proto.recordInlineStyles = function recordInlineStyles() {
      var props = _memoizedRemoveProps[this.props] || _removeProps, i2 = this.elementStates.length;
      while (i2--) {
        _recordInlineStyles(this.elementStates[i2], props);
      }
    };
    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;
      var timelines = [];
      this.targets.forEach(function(t) {
        var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
        soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
          return _this2.updateVisibility();
        });
        foundInProgress && timelines.push(tl);
      });
      !soft && timelines.length && this.updateVisibility();
      this.interrupted || (this.interrupted = !!timelines.length);
    };
    _proto.updateVisibility = function updateVisibility() {
      this.elementStates.forEach(function(es) {
        var b = es.element.getBoundingClientRect();
        es.isVisible = !!(b.width || b.height || b.top || b.left);
        es.uncache = 1;
      });
    };
    _proto.getElementState = function getElementState(element) {
      return this.elementStates[this.targets.indexOf(_getEl(element))];
    };
    _proto.makeAbsolute = function makeAbsolute() {
      return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };
    return FlipState2;
  }();
  var ElementState = /* @__PURE__ */ function() {
    function ElementState2(element, props, simple) {
      this.element = element;
      this.update(props, simple);
    }
    var _proto2 = ElementState2.prototype;
    _proto2.isDifferent = function isDifferent(state) {
      var b1 = this.bounds, b2 = state.bounds;
      return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };
    _proto2.update = function update(props, simple) {
      var self2 = this, element = self2.element, getProp = gsap2.getProperty(element), cache2 = gsap2.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self2.getProp = getProp;
      self2.element = element;
      self2.id = _getID(element);
      self2.matrix = m;
      self2.cache = cache2;
      self2.bounds = bounds;
      self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self2.display = getProp("display");
      self2.position = getProp("position");
      self2.parent = element.parentNode;
      self2.x = getProp("x");
      self2.y = getProp("y");
      self2.scaleX = cache2.scaleX;
      self2.scaleY = cache2.scaleY;
      self2.rotation = getProp("rotation");
      self2.skewX = getProp("skewX");
      self2.opacity = getProp("opacity");
      self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
      self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
      props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
      self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
      self2.simple = simple || _round3(m.a) === 1 && !_round3(m.b) && !_round3(m.c) && _round3(m.d) === 1;
      self2.uncache = 0;
    };
    return ElementState2;
  }();
  var FlipAction = /* @__PURE__ */ function() {
    function FlipAction2(vars, batch) {
      this.vars = vars;
      this.batch = batch;
      this.states = [];
      this.timeline = batch.timeline;
    }
    var _proto3 = FlipAction2.prototype;
    _proto3.getStateById = function getStateById(id) {
      var i2 = this.states.length;
      while (i2--) {
        if (this.states[i2].idLookup[id]) {
          return this.states[i2];
        }
      }
    };
    _proto3.kill = function kill() {
      this.batch.remove(this);
    };
    return FlipAction2;
  }();
  var FlipBatch = /* @__PURE__ */ function() {
    function FlipBatch2(id) {
      this.id = id;
      this.actions = [];
      this._kill = [];
      this._final = [];
      this._abs = [];
      this._run = [];
      this.data = {};
      this.state = new FlipState();
      this.timeline = gsap2.timeline();
    }
    var _proto4 = FlipBatch2.prototype;
    _proto4.add = function add(config3) {
      var result = this.actions.filter(function(action) {
        return action.vars === config3;
      });
      if (result.length) {
        return result[0];
      }
      result = new FlipAction(typeof config3 === "function" ? {
        animate: config3
      } : config3, this);
      this.actions.push(result);
      return result;
    };
    _proto4.remove = function remove3(action) {
      var i2 = this.actions.indexOf(action);
      i2 >= 0 && this.actions.splice(i2, 1);
      return this;
    };
    _proto4.getState = function getState(merge2) {
      var _this3 = this;
      var prevBatch = _batch, prevAction = _batchAction;
      _batch = this;
      this.state.clear();
      this._kill.length = 0;
      this.actions.forEach(function(action) {
        if (action.vars.getState) {
          action.states.length = 0;
          _batchAction = action;
          action.state = action.vars.getState(action);
        }
        merge2 && action.states.forEach(function(s2) {
          return _this3.state.add(s2);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };
    _proto4.animate = function animate() {
      var _this4 = this;
      var prevBatch = _batch, tl = this.timeline, i2 = this.actions.length, finalStates, endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function(a) {
        a.vars.animate && a.vars.animate(a);
        var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s2, result;
        if (targets && targets.length && (onEnter || onLeave)) {
          s2 = new FlipState();
          a.states.forEach(function(state) {
            return s2.add(state);
          });
          result = s2.compare(Flip.getState(targets));
          result.enter.length && onEnter && onEnter(result.enter);
          result.leave.length && onLeave && onLeave(result.leave);
        }
      });
      _makeCompsAbsolute(this._abs);
      this._run.forEach(function(f) {
        return f();
      });
      endTime = tl.duration();
      finalStates = this._final.slice(0);
      tl.add(function() {
        if (endTime <= tl.time()) {
          finalStates.forEach(function(f) {
            return f();
          });
          _forEachBatch(_this4, "onComplete");
        }
      });
      _batch = prevBatch;
      while (i2--) {
        this.actions[i2].vars.once && this.actions[i2].kill();
      }
      _forEachBatch(this, "onStart");
      tl.restart();
      return this;
    };
    _proto4.loadState = function loadState(done) {
      done || (done = function done2() {
        return 0;
      });
      var queue = [];
      this.actions.forEach(function(c2) {
        if (c2.vars.loadState) {
          var i2, f = function f2(targets) {
            targets && (c2.targets = targets);
            i2 = queue.indexOf(f2);
            if (~i2) {
              queue.splice(i2, 1);
              queue.length || done();
            }
          };
          queue.push(f);
          c2.vars.loadState(f);
        }
      });
      queue.length || done();
      return this;
    };
    _proto4.setState = function setState() {
      this.actions.forEach(function(c2) {
        return c2.targets = c2.vars.setState && c2.vars.setState(c2);
      });
      return this;
    };
    _proto4.killConflicts = function killConflicts(soft) {
      this.state.interrupt(soft);
      this._kill.forEach(function(state) {
        return state.interrupt(soft);
      });
      return this;
    };
    _proto4.run = function run(skipGetState, merge2) {
      var _this5 = this;
      if (this !== _batch) {
        skipGetState || this.getState(merge2);
        this.loadState(function() {
          if (!_this5._killed) {
            _this5.setState();
            _this5.animate();
          }
        });
      }
      return this;
    };
    _proto4.clear = function clear(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
      var i2 = this.actions.length, s2;
      while (i2--) {
        s2 = this.actions[i2].getStateById(id);
        if (s2) {
          return s2;
        }
      }
      return this.state.idLookup[id] && this.state;
    };
    _proto4.kill = function kill() {
      this._killed = 1;
      this.clear();
      delete _batchLookup[this.id];
    };
    return FlipBatch2;
  }();
  var Flip = /* @__PURE__ */ function() {
    function Flip2() {
    }
    Flip2.getState = function getState(targets, vars) {
      var state = _parseState(targets, vars);
      _batchAction && _batchAction.states.push(state);
      vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
      return state;
    };
    Flip2.from = function from(state, vars) {
      vars = vars || {};
      "clearProps" in vars || (vars.clearProps = true);
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, -1);
    };
    Flip2.to = function to(state, vars) {
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, 1);
    };
    Flip2.fromTo = function fromTo(fromState, toState, vars) {
      return _fromTo(fromState, toState, vars);
    };
    Flip2.fit = function fit(fromEl, toEl, vars) {
      var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before2 = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before2), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;
      props && _applyProps(v, before2.props);
      if (runBackwards) {
        _recordInlineStyles(after, inlineProps);
        "immediateRender" in v || (v.immediateRender = true);
        v.onComplete = function() {
          _applyInlineStyles(after);
          onComplete && onComplete.apply(this, arguments);
        };
      }
      absolute && _makeAbsolute(after, before2);
      v = _fit(after, before2, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
      return getVars ? v : v.duration ? gsap2.to(after.element, v) : null;
    };
    Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
      return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };
    Flip2.batch = function batch(id) {
      id || (id = "default");
      return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };
    Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
      (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t) {
        return t && _killFlip(t._flip, complete !== false ? 1 : 2);
      });
    };
    Flip2.isFlipping = function isFlipping(target) {
      var f = Flip2.getByTarget(target);
      return !!f && f.isActive();
    };
    Flip2.getByTarget = function getByTarget(target) {
      return (_getEl(target) || _emptyObj)._flip;
    };
    Flip2.getElementState = function getElementState(target, props) {
      return new ElementState(_getEl(target), props);
    };
    Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    };
    Flip2.register = function register(core) {
      _body2 = typeof document !== "undefined" && document.body;
      if (_body2) {
        gsap2 = core;
        _setDoc(_body2);
        _toArray = gsap2.utils.toArray;
        _getStyleSaver3 = gsap2.core.getStyleSaver;
        var snap3 = gsap2.utils.snap(0.1);
        _closestTenth = function _closestTenth2(value, add) {
          return snap3(parseFloat(value) + add);
        };
      }
    };
    return Flip2;
  }();
  Flip.version = "3.12.2";
  typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap3;
  var _coreInitted2;
  var _clamp3;
  var _win4;
  var _doc4;
  var _docEl;
  var _body3;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP = function _getGSAP2() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win4.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(value, _vertical.sc()) : _win4.pageXOffset || _doc4[_scrollLeft] || _docEl[_scrollLeft] || _body3[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win4.scrollTo(_horizontal.sc(), value) : _win4.pageYOffset || _doc4[_scrollTop] || _docEl[_scrollTop] || _body3[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap3.utils.toArray)(t)[0] || (typeof t === "string" && gsap3.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc4.scrollingElement || _docEl);
    var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    _scrollers[i2 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap3.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min2 = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min2 * 3), update = function update2(value2, force) {
      var t = _getTime();
      if (force || t - t1 > min2) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max2 = Math.max.apply(Math, a), min2 = Math.min.apply(Math, a);
    return Math.abs(max2) >= Math.abs(min2) ? max2 : min2;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap3.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore3 = function _initCore4(core) {
    gsap3 = core || _getGSAP();
    if (gsap3 && typeof document !== "undefined" && document.body) {
      _win4 = window;
      _doc4 = document;
      _docEl = _doc4.documentElement;
      _body3 = _doc4.body;
      _root = [_win4, _doc4, _docEl, _body3];
      _clamp3 = gsap3.utils.clamp;
      _context2 = gsap3.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win4.matchMedia && _win4.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win4 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted2 = 1;
    }
    return _coreInitted2;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init4(vars) {
      _coreInitted2 || _initCore3(gsap3) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap3.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win4.getComputedStyle(_body3).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc4, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
        return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update = function update2() {
        var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self2.deltaX > 0 && onRight(self2);
          onLeft && self2.deltaX < 0 && onLeft(self2);
          onChangeX && onChangeX(self2);
          onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
          prevDeltaX = self2.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self2.deltaY > 0 && onDown(self2);
          onUp && self2.deltaY < 0 && onUp(self2);
          onChangeY && onChangeY(self2);
          onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
          prevDeltaY = self2.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self2);
          if (dragged) {
            onDrag(self2);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self2);
        if (wheeled) {
          onWheel(self2);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self2._vx.update(x);
        self2._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self2._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self2._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
        self2.x = x;
        self2.y = y;
        if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e.clientX;
        self2.startY = self2.y = e.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
        if (!wasDragging && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap3.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, wasDragging);
      }, _onGestureStart = function _onGestureStart2(e) {
        return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll = function onScroll2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win4.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
        self2.x = x;
        self2.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e) {
        self2.event = e;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e) {
        self2.event = e;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
      };
      onStopDelayedCall = self2._dc = gsap3.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context2(this);
      self2.enable = function(e) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, false, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o2) {
            return o2 !== self2 && _isViewport(o2.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self2.isEnabled = self2.isPressed = self2.isDragging = false;
          onDisable && onDisable(self2);
        }
      };
      self2.kill = self2.revert = function() {
        self2.disable();
        var i2 = _observers.indexOf(self2);
        i2 >= 0 && _observers.splice(i2, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get2() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get2() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.12.2";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore3;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o2) {
      return o2.vars.id === id;
    })[0];
  };
  _getGSAP() && gsap3.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.12.2/node_modules/gsap/ScrollTrigger.js
  var gsap4;
  var _coreInitted3;
  var _win5;
  var _doc5;
  var _docEl2;
  var _body4;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp3;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self2) {
    var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self2["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp4) {
    return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round5 = function _round6(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap4 || _windowExists5() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _isViewport3 = function _isViewport4(e) {
    return !!~_root2.indexOf(e);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win5["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body4["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win5.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s2 = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a = _getProxyProp(element, s2)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s2] || _body4[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self2, func) {
    if (self2.enabled) {
      var result = func(self2);
      result && result.totalTime && (self2.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win5.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults4) {
    for (var p in defaults4) {
      p in obj || (obj[p] = defaults4[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp3] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap4.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap4.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap4.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i2;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i2 = 0; i2 < a.length; i2++) {
          if (a[i2] >= value) {
            return a[i2];
          }
        }
        return a[i2 - 1];
      } else {
        i2 = a.length;
        value += threshold;
        while (i2--) {
          if (a[i2] <= value) {
            return a[i2];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc5.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap4.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body4.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win5.innerWidth;
    _baseScreenHeight = _win5.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc5.fullscreenElement && !_doc5.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win5.innerWidth || Math.abs(_win5.innerHeight - _baseScreenHeight) > _win5.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win5.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body4.appendChild(_div100vh);
    _100vh = _div100vh.offsetHeight || _win5.innerHeight;
    _body4.removeChild(_div100vh);
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t) {
      return t.refresh();
    });
    _triggers.forEach(function(t, i2) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _triggers.forEach(function(t) {
      var max2 = _maxScroll(t.scroller, t._dir);
      (t.vars.end === "max" || t._endClamp && t.end > max2) && t.setPositions(t.start, Math.max(t.start + 1, max2), true);
    });
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
      return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll2 = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll2 ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll2);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache2 = pin._gsap;
    if (cache2.spacerIsNative) {
      _setState(cache2.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i2--) {
        p = _propNamesToCopy[i2];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style2 = state.t.style, l2 = state.length, i2 = 0, p, value;
      (state.t._gsap || gsap4.core.getCache(state.t)).uncache = 1;
      for (; i2 < l2; i2 += 2) {
        value = state[i2 + 1];
        p = state[i2];
        if (value) {
          style2[p] = value;
        } else if (style2[p]) {
          style2.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style2 = element.style, state = [], i2 = 0;
    for (; i2 < l2; i2++) {
      state.push(_stateProps[i2], style2[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i2 = omitOffsets ? 8 : 0, p;
    for (; i2 < l2; i2 += 2) {
      p = state[i2];
      result.push(p, p in override ? override[p] : state[i2 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll2, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value) && (value = value(self2));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber3(value)) {
      _isFunction3(trigger) && (trigger = trigger(self2));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display2;
      element = _getTarget(trigger, self2) || _body4;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display2 = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display2 ? element.style.display = display2 : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll2 - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap4.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self2[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style2 = element.style, p, cs;
      if (parent === _body4) {
        element._stOrig = style2.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style2[p] === "string" && p !== "0") {
            style2[p] = cs[p];
          }
        }
        style2.top = top;
        style2.left = left;
      } else {
        style2.cssText = element._stOrig;
      }
      gsap4.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap4.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap4.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted3 || ScrollTrigger3.register(gsap4) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass2 = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win5), scrollerCache = gsap4.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self2._startClamp = self2._endClamp = false;
      self2._dir = direction;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self2);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self2.scrubDuration = function(value) {
        scrubSmooth = _isNumber3(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap4.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self2);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        self2.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap4.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o2) {
          return _isFunction3(o2) && o2.target === (isViewport ? _doc5.scrollingElement || _docEl2 : scroller) && (o2.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap4.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap4.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll3 = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll3) {
            var progress = (scroll3 - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap4.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp4(0, 1, snapFunc(naturalEnd, self2)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            if (scroll3 <= end && scroll3 >= start && endScroll !== scroll3) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll3)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll3),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  self2.update();
                  lastSnap = scrollFunc();
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll3, change1 * change, endScroll - scroll3 - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive && lastSnap !== scroll3) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self2));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass2) && (toggleClass2 = {
        targets: trigger,
        className: toggleClass2
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        pinCache = gsap4.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc5.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap4.set(pin, {
          force3D: true
        });
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap4.getProperty(pin);
        pinSetter = gsap4.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap4.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap4.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap4.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap4.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert, temp) {
        if (!temp) {
          return self2.kill(true);
        }
        var r2 = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r2 !== self2.isReverted) {
          if (r2) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r2 ? "none" : "block";
          });
          if (r2) {
            _refreshing = self2;
            self2.update(r2);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r2) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r2 || self2.update(r2);
          _refreshing = prevRefreshing;
          self2.isReverted = r2;
        }
      };
      self2.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self2);
        _refreshing = self2;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self2.isReverted || self2.revert(true, true);
        self2._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max2 = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i2 = triggerIndex, cs2, bounds, scroll3, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap4.getProperty(markerEndTrigger, direction.p);
        }
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i2]) {
            triggerIndex--;
            i2--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max2, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap4.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max2), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max2, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._startClamp && (self2._startClamp += offset2);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap4.utils.clamp(0, 1, gsap4.utils.normalize(start, end, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap4.set([markerStart, markerEnd], cs2);
        }
        if (pin) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll3 = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max2 && end > 1) {
            forcedOverflow = (isViewport ? _doc5.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body4)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i2 && spacerState.push(direction.d, i2 + _px);
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll3 - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll3 - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false, true);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap4.utils.normalize(start, end, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap4.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self2.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self2);
          executingOnRefresh = false;
        }
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.labelToScroll = function(label) {
        return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name) {
        var i2 = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return (_isString3(name) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function(t) {
          return self2.direction > 0 ? t.end <= start : t.start >= end;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll3 = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll3 - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll3;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll3 + (scroll3 - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round5(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll3 && scroll3 + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll3 - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass2 && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass2.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass2.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self2, onToggle);
              callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n2 = containerAnimation ? scroll3 / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll3;
          markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n2);
        }
        caMarkerSetter && caMarkerSetter(-scroll3 / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self2.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
        }, pinOffset);
        self2.update();
      };
      self2.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i2 = spacerState.indexOf(direction.d) + 1;
          spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert(true, true);
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i2 = _triggers.indexOf(self2);
        i2 >= 0 && _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self2.scroller && (i2 = 1);
        });
        i2 || _refreshingAll || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self2 && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i2 = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self2);
      };
      _triggers.push(self2);
      self2.enable(false, false);
      customRevertReturn && customRevertReturn(self2);
      if (animation && animation.add && !change) {
        var updateFunc = self2.update;
        self2.update = function() {
          self2.update = updateFunc;
          start || end || self2.refresh();
        };
        gsap4.delayedCall(0.01, self2.update);
        change = 0.01;
        start = end = 0;
      } else {
        self2.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted3) {
        gsap4 = core || _getGSAP3();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted3 = _enabled;
      }
      return _coreInitted3;
    };
    ScrollTrigger3.defaults = function defaults4(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win5, "wheel", _onScroll3);
      _removeListener3(_doc5, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc5, "touchcancel", _passThrough3);
      _removeListener3(_body4, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
        _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win5 = window;
      _doc5 = document;
      _docEl2 = _doc5.documentElement;
      _body4 = _doc5.body;
      if (gsap4) {
        _toArray2 = gsap4.utils.toArray;
        _clamp4 = gsap4.utils.clamp;
        _context3 = gsap4.core.context || _passThrough3;
        _suppressOverwrites2 = gsap4.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win5.history.scrollRestoration || "auto";
        _lastScroll = _win5.pageYOffset;
        gsap4.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body4) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap4);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _addListener3(_win5, "wheel", _onScroll3);
          _root2 = [_win5, _doc5, _docEl2, _body4];
          if (gsap4.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap4.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap4.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap4.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap4.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap4.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc5, "scroll", _onScroll3);
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap4.core.Animation.prototype, bounds, i2;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body4);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap4.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc5, "touchcancel", _passThrough3);
          _addListener3(_body4, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc5, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc5, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp3 = gsap4.utils.checkPrefix("transform");
          _stateProps.push(_transformProp3);
          _coreInitted3 = _getTime2();
          _resizeDelay = gsap4.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc5, "visibilitychange", function() {
            var w = _win5.innerWidth, h = _win5.innerHeight;
            if (_doc5.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc5, "DOMContentLoaded", _refreshAll, _win5, "load", _refreshAll, _win5, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
            _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i2 = _scrollers.indexOf(t), isViewport = _isViewport3(t);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win5, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query2) {
      _triggers.forEach(function(t) {
        return t._ctx && t._ctx.query === query2 && t._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win5.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win5.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win5.innerWidth : (bounds.top + offset) / _win5.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.2";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap4.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i2 = a && a.indexOf(callback);
    i2 >= 0 && a.splice(i2, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap4.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max2) {
    current > max2 ? scrollFunc(max2) : current < 0 && scrollFunc(0);
    return end > max2 ? (max2 - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body4, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache2 = node._gsap || gsap4.core.getCache(node), time = _getTime2(), cs;
    if (!cache2._isScrollT || time - cache2._isScrollT > 2e3) {
      while (node && node !== _body4 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache2._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache2._isScrollT = time;
    }
    if (cache2._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc5, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc5, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap4.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win5.visualViewport ? _win5.visualViewport.scale * _win5.visualViewport.width : _win5.outerWidth) / _win5.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self2);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round5(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round5(self2.deltaY / 2), scroll2 = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll2 !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll2 - scrollFuncY.v;
          var y = _round5((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap4.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round5((_win5.visualViewport && _win5.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap4.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self3);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self3, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win5, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win5, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self2 = new Observer(vars);
    self2.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap4.ticker.add(_passThrough3);
    onStopDelayedCall = self2._dc;
    tween = gsap4.to(self2, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self2;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      return _normalizer2 && _normalizer2.kill();
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP3() && gsap4.registerPlugin(ScrollTrigger2);

  // src/utils/smooth-scroll.ts
  init_live_reload();

  // node_modules/.pnpm/github.com+quentinhocde+loconative-scroll@8e0937aceed576e25ff5caca5df8395a5990b99b/node_modules/loconative-scroll/dist/loconative-scroll.esm.js
  init_live_reload();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _setPrototypeOf(o2, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
      o3.__proto__ = p2;
      return o3;
    };
    return _setPrototypeOf(o2, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized2(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get3(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get3 = Reflect.get;
    } else {
      _get3 = function _get4(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get3(target, property, receiver || target);
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i2 = arr[Symbol.iterator](), _s; !(_n = (_s = _i2.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i2["return"] != null)
          _i2["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var defaults2 = {
    el: document.querySelector("body"),
    wrapper: window,
    name: "scroll",
    offset: [0, 0],
    repeat: false,
    smooth: true,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: "vertical",
    gestureDirection: "vertical",
    reloadOnContextChange: true,
    "class": "is-inview",
    scrollingClass: "has-scroll-scrolling",
    smoothClass: "has-scroll-smooth",
    initClass: "has-scroll-init",
    duration: 1.2,
    easing: function easing(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // https://easings.net,
    scrollToEasing: function scrollToEasing(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // https://easings.net
    scrollFromAnywhere: false,
    touchMultiplier: 3,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "horizontal",
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical"
    }
  };
  var _default = /* @__PURE__ */ function() {
    function _default2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      Object.assign(this, defaults2, options);
      this.smartphone = defaults2.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults2.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && window.innerWidth >= this.tablet.breakpoint;
      if (this.isMobile) {
        this.smooth = this.smartphone.smooth;
      }
      if (this.isTablet) {
        this.smooth = this.tablet.smooth;
      }
      this.namespace = "locomotive";
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.onScroll = this.onScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        delta: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };
      if (this.isMobile) {
        if (this.isTablet) {
          this.context = "tablet";
        } else {
          this.context = "smartphone";
        }
      } else {
        this.context = "desktop";
      }
      if (this.isMobile)
        this.direction = this[this.context].direction;
      if (this.isMobile)
        this.gestureDirection = this[this.context].gestureDirection;
      if (this.direction === "horizontal") {
        this.directionAxis = "x";
      } else {
        this.directionAxis = "y";
      }
      this.instance.direction = null;
      this.instance.speed = 0;
      this.html.classList.add(this.initClass);
      window.addEventListener("resize", this.checkResize, false);
    }
    _createClass2(_default2, [{
      key: "init",
      value: function init4() {
        this.initEvents();
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;
        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function() {
            _this.resize();
            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {
      }
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange)
          return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;
        if (this.isMobile) {
          if (this.isTablet) {
            this.context = "tablet";
          } else {
            this.context = "smartphone";
          }
        } else {
          this.context = "desktop";
        }
        if (oldContext != this.context) {
          var oldSmooth = oldContext == "desktop" ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == "desktop" ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth)
            window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;
        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function(el) {
          el.addEventListener("click", _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute("href"), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {
      }
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), i2 = _ref2[0], el = _ref2[1];
          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === "horizontal") {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i2);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i2);
              }
            }
          }
          if (el && el.inView) {
            if (_this3.direction === "horizontal") {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i2);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i2);
              }
            }
          }
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i2) {
        this.els[i2].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i2] = current;
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "enter");
          if (!current.repeat) {
            this.els[i2].call = false;
          }
        }
      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i2) {
        var _this4 = this;
        this.els[i2].inView = false;
        Object.keys(this.currentElements).forEach(function(el) {
          el === i2 && delete _this4.currentElements[el];
        });
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "exit");
        }
        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(",").map(function(item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1)
          this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + "call");
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + "scroll");
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        var list = this.listeners[event];
        list.push(func);
        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }
        if (event === "call") {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event])
          return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0)
          return;
        list.splice(index, 1);
        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;
        var name = event.type.replace(this.namespace, "");
        var list = this.listeners[name];
        if (!list || list.length === 0)
          return;
        list.forEach(function(func) {
          switch (name) {
            case "scroll":
              return func(_this5.instance);
            case "call":
              return func(_this5.callValue, _this5.callWay, _this5.callObj);
            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        window.removeEventListener("resize", this.checkResize, false);
        Object.keys(this.listeners).forEach(function(event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function(el) {
          el.removeEventListener("click", _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);
    return _default2;
  }();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
      function polyfill() {
        var w = window;
        var d = document;
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }
        var Element2 = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element2.prototype.scroll || scrollElement,
          scrollIntoView: Element2.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            return true;
          }
          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            return false;
          }
          throw new TypeError(
            "behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior."
          );
        }
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }
        function step(context3) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context3.startTime) / SCROLL_TIME;
          elapsed = elapsed > 1 ? 1 : elapsed;
          value = ease(elapsed);
          currentX = context3.startX + (context3.x - context3.startX) * value;
          currentY = context3.startY + (context3.y - context3.startY) * value;
          context3.method.call(context3.scrollable, currentX, currentY);
          if (currentX !== context3.x || currentY !== context3.y) {
            w.requestAnimationFrame(step.bind(w, context3));
          }
        }
        function smoothScroll2(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }
          step({
            scrollable,
            method,
            startTime,
            startX,
            startY,
            x,
            y
          });
        }
        w.scroll = w.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset,
              // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset
            );
            return;
          }
          smoothScroll2.call(
            w,
            d.body,
            arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset,
            arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset
          );
        };
        w.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0,
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
            );
            return;
          }
          smoothScroll2.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
          );
        };
        Element2.prototype.scroll = Element2.prototype.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(
              this,
              // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft,
              // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
            );
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;
          smoothScroll2.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
          );
        };
        Element2.prototype.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
              this,
              arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
              arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
            );
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };
        Element2.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
              this,
              arguments[0] === void 0 ? true : arguments[0]
            );
            return;
          }
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            smoothScroll2.call(
              this,
              scrollableParent,
              scrollableParent.scrollLeft + clientRects.left - parentRects.left,
              scrollableParent.scrollTop + clientRects.top - parentRects.top
            );
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      {
        module.exports = { polyfill };
      }
    })();
  });
  var smoothscroll_1 = smoothscroll.polyfill;
  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle)
      return;
    var style2 = getComputedStyle(el);
    var transform = style2.transform || style2.webkitTransform || style2.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
    }
    return translate;
  }
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  function E() {
  }
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self2 = this;
      function listener() {
        self2.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i2 = 0;
      var len = evtArr.length;
      for (i2; i2 < len; i2++) {
        evtArr[i2].fn.apply(evtArr[i2].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i2 = 0, len = evts.length; i2 < len; i2++) {
          if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
            liveEvents.push(evts[i2]);
        }
      }
      liveEvents.length ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  var tinyEmitter = E;
  var TinyEmitter = E;
  tinyEmitter.TinyEmitter = TinyEmitter;
  var virtualscroll = createCommonjsModule(function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(commonjsGlobal, function() {
      var e = 0;
      function t(t2) {
        return "__private_" + e++ + "_" + t2;
      }
      function i2(e2, t2) {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new TypeError("attempted to use private field on non-instance");
        return e2;
      }
      function n2() {
      }
      n2.prototype = { on: function(e2, t2, i3) {
        var n3 = this.e || (this.e = {});
        return (n3[e2] || (n3[e2] = [])).push({ fn: t2, ctx: i3 }), this;
      }, once: function(e2, t2, i3) {
        var n3 = this;
        function o3() {
          n3.off(e2, o3), t2.apply(i3, arguments);
        }
        return o3._ = t2, this.on(e2, o3, i3);
      }, emit: function(e2) {
        for (var t2 = [].slice.call(arguments, 1), i3 = ((this.e || (this.e = {}))[e2] || []).slice(), n3 = 0, o3 = i3.length; n3 < o3; n3++)
          i3[n3].fn.apply(i3[n3].ctx, t2);
        return this;
      }, off: function(e2, t2) {
        var i3 = this.e || (this.e = {}), n3 = i3[e2], o3 = [];
        if (n3 && t2)
          for (var s3 = 0, h2 = n3.length; s3 < h2; s3++)
            n3[s3].fn !== t2 && n3[s3].fn._ !== t2 && o3.push(n3[s3]);
        return o3.length ? i3[e2] = o3 : delete i3[e2], this;
      } };
      var o2 = n2;
      o2.TinyEmitter = n2;
      var s2, h = "virtualscroll", r2 = t("options"), a = t("el"), l2 = t("emitter"), u = t("event"), c2 = t("touchStart"), d = t("bodyTouchAction");
      return function() {
        function e2(e3) {
          var t3 = this;
          Object.defineProperty(this, r2, { writable: true, value: void 0 }), Object.defineProperty(this, a, { writable: true, value: void 0 }), Object.defineProperty(this, l2, { writable: true, value: void 0 }), Object.defineProperty(this, u, { writable: true, value: void 0 }), Object.defineProperty(this, c2, { writable: true, value: void 0 }), Object.defineProperty(this, d, { writable: true, value: void 0 }), this._onWheel = function(e4) {
            var n3 = i2(t3, r2)[r2], o3 = i2(t3, u)[u];
            o3.deltaX = e4.wheelDeltaX || -1 * e4.deltaX, o3.deltaY = e4.wheelDeltaY || -1 * e4.deltaY, s2.isFirefox && 1 === e4.deltaMode && (o3.deltaX *= n3.firefoxMultiplier, o3.deltaY *= n3.firefoxMultiplier), o3.deltaX *= n3.mouseMultiplier, o3.deltaY *= n3.mouseMultiplier, t3._notify(e4);
          }, this._onMouseWheel = function(e4) {
            var n3 = i2(t3, u)[u];
            n3.deltaX = e4.wheelDeltaX ? e4.wheelDeltaX : 0, n3.deltaY = e4.wheelDeltaY ? e4.wheelDeltaY : e4.wheelDelta, t3._notify(e4);
          }, this._onTouchStart = function(e4) {
            var n3 = e4.targetTouches ? e4.targetTouches[0] : e4;
            i2(t3, c2)[c2].x = n3.pageX, i2(t3, c2)[c2].y = n3.pageY;
          }, this._onTouchMove = function(e4) {
            var n3 = i2(t3, r2)[r2];
            n3.preventTouch && !e4.target.classList.contains(n3.unpreventTouchClass) && e4.preventDefault();
            var o3 = i2(t3, u)[u], s3 = e4.targetTouches ? e4.targetTouches[0] : e4;
            o3.deltaX = (s3.pageX - i2(t3, c2)[c2].x) * n3.touchMultiplier, o3.deltaY = (s3.pageY - i2(t3, c2)[c2].y) * n3.touchMultiplier, i2(t3, c2)[c2].x = s3.pageX, i2(t3, c2)[c2].y = s3.pageY, t3._notify(e4);
          }, this._onKeyDown = function(e4) {
            var n3 = i2(t3, u)[u];
            n3.deltaX = n3.deltaY = 0;
            var o3 = window.innerHeight - 40;
            switch (e4.keyCode) {
              case 37:
              case 38:
                n3.deltaY = i2(t3, r2)[r2].keyStep;
                break;
              case 39:
              case 40:
                n3.deltaY = -i2(t3, r2)[r2].keyStep;
                break;
              case 32:
                n3.deltaY = o3 * (e4.shiftKey ? 1 : -1);
                break;
              default:
                return;
            }
            t3._notify(e4);
          }, i2(this, a)[a] = window, e3 && e3.el && (i2(this, a)[a] = e3.el, delete e3.el), s2 || (s2 = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }), i2(this, r2)[r2] = Object.assign({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: false, unpreventTouchClass: "vs-touchmove-allowed", useKeyboard: true, useTouch: true }, e3), i2(this, l2)[l2] = new o2(), i2(this, u)[u] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, i2(this, c2)[c2] = { x: null, y: null }, i2(this, d)[d] = null, void 0 !== i2(this, r2)[r2].passive && (this.listenerOptions = { passive: i2(this, r2)[r2].passive });
        }
        var t2 = e2.prototype;
        return t2._notify = function(e3) {
          var t3 = i2(this, u)[u];
          t3.x += t3.deltaX, t3.y += t3.deltaY, i2(this, l2)[l2].emit(h, { x: t3.x, y: t3.y, deltaX: t3.deltaX, deltaY: t3.deltaY, originalEvent: e3 });
        }, t2._bind = function() {
          s2.hasWheelEvent && i2(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), s2.hasMouseWheelEvent && i2(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s2.hasTouch && i2(this, r2)[r2].useTouch && (i2(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i2(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s2.hasPointer && s2.hasTouchWin && (i2(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i2(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
        }, t2._unbind = function() {
          s2.hasWheelEvent && i2(this, a)[a].removeEventListener("wheel", this._onWheel), s2.hasMouseWheelEvent && i2(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), s2.hasTouch && (i2(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i2(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), s2.hasPointer && s2.hasTouchWin && (document.body.style.msTouchAction = i2(this, d)[d], i2(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
        }, t2.on = function(e3, t3) {
          i2(this, l2)[l2].on(h, e3, t3);
          var n3 = i2(this, l2)[l2].e;
          n3 && n3[h] && 1 === n3[h].length && this._bind();
        }, t2.off = function(e3, t3) {
          i2(this, l2)[l2].off(h, e3, t3);
          var n3 = i2(this, l2)[l2].e;
          (!n3[h] || n3[h].length <= 0) && this._unbind();
        }, t2.destroy = function() {
          i2(this, l2)[l2].off(), this._unbind();
        }, e2;
      }();
    });
  });
  function o(t, e) {
    for (var o2 = 0; o2 < e.length; o2++) {
      var i2 = e[o2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t, i2.key, i2);
    }
  }
  function i(t, e, i2) {
    return e && o(t.prototype, e), i2 && o(t, i2), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o2 = arguments[e];
        for (var i2 in o2)
          Object.prototype.hasOwnProperty.call(o2, i2) && (t[i2] = o2[i2]);
      }
      return t;
    }, r.apply(this, arguments);
  }
  function n(t, e) {
    return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, n(t, e);
  }
  var s = ["duration", "easing"];
  var l = /* @__PURE__ */ function() {
    function t() {
    }
    var e = t.prototype;
    return e.to = function(t2, e2) {
      var o2 = this, i2 = void 0 === e2 ? {} : e2, n2 = i2.duration, l2 = void 0 === n2 ? 1 : n2, c2 = i2.easing, a = void 0 === c2 ? function(t3) {
        return t3;
      } : c2, h = function(t3, e3) {
        if (null == t3)
          return {};
        var o3, i3, r2 = {}, n3 = Object.keys(t3);
        for (i3 = 0; i3 < n3.length; i3++)
          e3.indexOf(o3 = n3[i3]) >= 0 || (r2[o3] = t3[o3]);
        return r2;
      }(i2, s);
      this.target = t2, this.fromKeys = r({}, h), this.toKeys = r({}, h), this.keys = Object.keys(r({}, h)), this.keys.forEach(function(e3) {
        o2.fromKeys[e3] = t2[e3];
      }), this.duration = l2, this.easing = a, this.currentTime = 0, this.isRunning = true;
    }, e.stop = function() {
      this.isRunning = false;
    }, e.raf = function(t2) {
      var e2 = this;
      if (this.isRunning) {
        this.currentTime = Math.min(this.currentTime + 1e-3 * t2, this.duration);
        var o2 = this.easing(this.progress);
        this.keys.forEach(function(t3) {
          var i2 = e2.fromKeys[t3];
          e2.target[t3] = i2 + (e2.toKeys[t3] - i2) * o2;
        }), 1 === o2 && (this.isRunning = false);
      }
    }, i(t, [{ key: "progress", get: function() {
      return this.currentTime / this.duration;
    } }]), t;
  }();
  var c = /* @__PURE__ */ function(t) {
    var o2, r2;
    function s2(o3) {
      var i2, r3, n2, s3, c3 = void 0 === o3 ? {} : o3, a = c3.duration, h = void 0 === a ? 1.2 : a, p = c3.easing, u = void 0 === p ? function(t2) {
        return 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2);
      } : p, d = c3.smooth, f = void 0 === d || d, v = c3.smoothTouch, g = void 0 !== v && v, w = c3.touchMultiplier, m = void 0 === w ? 2 : w, y = c3.direction, b = void 0 === y ? "vertical" : y, S = c3.gestureDirection, N = void 0 === S ? "vertical" : S, O = c3.wrapper, z = void 0 === O ? window : O, R = c3.content, W = void 0 === R ? document.body : R;
      (s3 = t.call(this) || this).onWindowResize = function() {
        s3.wrapperWidth = window.innerWidth, s3.wrapperHeight = window.innerHeight;
      }, s3.onWrapperResize = function(t2) {
        var e = t2[0];
        if (e) {
          var o4 = e.contentRect;
          s3.wrapperWidth = o4.width, s3.wrapperHeight = o4.height;
        }
      }, s3.onContentResize = function(t2) {
        var e = t2[0];
        if (e) {
          var o4 = e.contentRect;
          s3.contentWidth = o4.width, s3.contentHeight = o4.height;
        }
      }, s3.onVirtualScroll = function(t2) {
        var e = t2.deltaY, o4 = t2.deltaX, i3 = t2.originalEvent;
        i3.ctrlKey || (s3.smooth = i3.changedTouches ? s3.smoothTouch : s3.options.smooth, s3.stopped ? i3.preventDefault() : s3.smooth && 4 !== i3.buttons && (s3.smooth && i3.preventDefault(), s3.targetScroll -= "both" === s3.gestureDirection ? o4 + e : "horizontal" === s3.gestureDirection ? o4 : e, s3.targetScroll = Math.max(0, Math.min(s3.targetScroll, s3.limit)), s3.scrollTo(s3.targetScroll)));
      }, s3.onScroll = function(t2) {
        s3.isScrolling && s3.smooth || (s3.targetScroll = s3.scroll = s3.lastScroll = s3.wrapperNode[s3.scrollProperty], s3.notify());
      }, window.lenisVersion = "0.2.9", s3.options = { duration: h, easing: u, smooth: f, smoothTouch: g, touchMultiplier: m, direction: b, gestureDirection: N, wrapper: z, content: W }, s3.duration = h, s3.easing = u, s3.smooth = f, s3.smoothTouch = g, s3.touchMultiplier = m, s3.direction = b, s3.gestureDirection = N, s3.wrapperNode = z, s3.contentNode = W, s3.wrapperNode.addEventListener("scroll", s3.onScroll), s3.wrapperNode === window ? (s3.wrapperNode.addEventListener("resize", s3.onWindowResize), s3.onWindowResize()) : (s3.wrapperHeight = s3.wrapperNode.offsetHeight, s3.wrapperWidth = s3.wrapperNode.offsetWidth, s3.wrapperObserver = new ResizeObserver(s3.onWrapperResize), s3.wrapperObserver.observe(s3.wrapperNode)), s3.contentHeight = s3.contentNode.offsetHeight, s3.contentWidth = s3.contentNode.offsetWidth, s3.contentObserver = new ResizeObserver(s3.onContentResize), s3.contentObserver.observe(s3.contentNode), s3.targetScroll = s3.scroll = s3.lastScroll = s3.wrapperNode[s3.scrollProperty], s3.animate = new l();
      var T = (null == (i2 = navigator) || null == (r3 = i2.userAgentData) ? void 0 : r3.platform) || (null == (n2 = navigator) ? void 0 : n2.platform) || "unknown";
      return s3.virtualScroll = new virtualscroll({ el: s3.wrapperNode, firefoxMultiplier: 50, mouseMultiplier: T.includes("Win") ? 1 : 0.4, useKeyboard: false, touchMultiplier: s3.touchMultiplier, useTouch: true, passive: false }), s3.virtualScroll.on(s3.onVirtualScroll), s3;
    }
    r2 = t, (o2 = s2).prototype = Object.create(r2.prototype), o2.prototype.constructor = o2, n(o2, r2);
    var c2 = s2.prototype;
    return c2.start = function() {
      this.stopped = false;
    }, c2.stop = function() {
      this.stopped = true, this.animate.stop();
    }, c2.destroy = function() {
      var t2;
      this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t2 = this.wrapperObserver) || t2.disconnect(), this.contentObserver.disconnect();
    }, c2.raf = function(t2) {
      var e = t2 - (this.now || 0);
      this.now = t2, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(e), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
    }, c2.setScroll = function(t2) {
      "horizontal" === this.direction ? this.wrapperNode.scrollTo(t2, 0) : this.wrapperNode.scrollTo(0, t2);
    }, c2.notify = function() {
      this.emit("scroll", { scroll: this.scroll, limit: this.limit, velocity: this.velocity, direction: this.direction, progress: this.scroll / this.limit });
    }, c2.scrollTo = function(t2, e) {
      var o3 = void 0 === e ? {} : e, i2 = o3.offset, r3 = void 0 === i2 ? 0 : i2, n2 = o3.immediate, s3 = void 0 !== n2 && n2, l2 = o3.duration, c3 = void 0 === l2 ? this.duration : l2, a = o3.easing, h = void 0 === a ? this.easing : a;
      if (null != t2) {
        var p;
        if ("number" == typeof t2)
          p = t2;
        else if ("top" === t2 || "#top" === t2)
          p = 0;
        else if ("bottom" === t2)
          p = this.limit;
        else {
          var u;
          if ("string" == typeof t2)
            u = document.querySelector(t2);
          else {
            if (null == t2 || !t2.nodeType)
              return;
            u = t2;
          }
          if (!u)
            return;
          var d = 0;
          if (this.wrapperNode !== window) {
            var f = this.wrapperNode.getBoundingClientRect();
            d = "horizontal" === this.direction ? f.left : f.top;
          }
          var v = u.getBoundingClientRect();
          p = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - d;
        }
        this.targetScroll = p += r3, !this.smooth || s3 ? this.setScroll(this.targetScroll) : this.animate.to(this, { duration: c3, easing: h, scroll: this.targetScroll });
      }
    }, i(s2, [{ key: "scrollProperty", get: function() {
      return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop";
    } }, { key: "limit", get: function() {
      return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
    } }, { key: "velocity", get: function() {
      return this.scroll - this.lastScroll;
    } }]), s2;
  }(tinyEmitter);
  var _default$1 = /* @__PURE__ */ function(_Core) {
    _inherits(_default2, _Core);
    var _super = _createSuper(_default2);
    function _default2() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, _default2);
      _this = _super.call(this, options);
      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
      }
      if (window.smoothscrollPolyfill === void 0) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }
      return _this;
    }
    _createClass2(_default2, [{
      key: "init",
      value: function init4() {
        if (this.smooth) {
          this.html.classList.add(this.smoothClass);
          this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        }
        this.addElements();
        this.detectElements();
        this.transformElements(true, true);
        this.initContainerSize();
        this.lenis = new c({
          wrapper: this.wrapper,
          content: this.el,
          duration: this.duration,
          easing: this.easing,
          direction: this.direction,
          gestureDirection: this.gestureDirection,
          smooth: this.smooth,
          smoothTouch: this.smooth,
          touchMultiplier: this.touchMultiplier
        });
        this.bindOnScroll = this.onScroll.bind(this);
        this.lenis.on("scroll", this.bindOnScroll);
        this.lenis.on("scroll", function(_ref) {
          var scroll2 = _ref.scroll, limit = _ref.limit, velocity = _ref.velocity, direction = _ref.direction, progress = _ref.progress;
        });
        this.raf(0);
        _get3(_getPrototypeOf(_default2.prototype), "init", this).call(this);
      }
    }, {
      key: "raf",
      value: function raf2(time) {
        var _this2 = this;
        this.lenis.raf(time);
        this.rafInstance = requestAnimationFrame(function() {
          return _this2.raf(Date.now());
        });
      }
    }, {
      key: "onScroll",
      value: function onScroll(_ref2) {
        var _this3 = this;
        var scroll2 = _ref2.scroll, velocity = _ref2.velocity;
        if (scroll2 > this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (scroll2 < this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
        this.instance.scroll[this.directionAxis] = scroll2;
        this.instance.speed = velocity;
        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function() {
              _this3.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
        _get3(_getPrototypeOf(_default2.prototype), "onScroll", this).call(this);
        this.transformElements();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.checkContext();
        this.initContainerSize();
        if (Object.entries(this.els).length) {
          this.update();
        }
      }
    }, {
      key: "initContainerSize",
      value: function initContainerSize() {
        if (this.direction === "horizontal") {
          var elWidth = 0;
          for (var childIndex = 0; childIndex < this.el.children.length; childIndex++) {
            var child2 = this.el.children[childIndex];
            elWidth += child2.getBoundingClientRect().width;
          }
          this.el.style.setProperty("--scrollContainerWidth", elWidth + "px");
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this4 = this;
        this.els = {};
        this.parallaxElements = {};
        var els = this.el.querySelectorAll("[data-" + this.name + "]");
        els.forEach(function(el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this4.name + "Class"] || _this4["class"];
          var id = typeof el.dataset[_this4.name + "Id"] === "string" ? el.dataset[_this4.name + "Id"] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this4.name + "Offset"] === "string" ? el.dataset[_this4.name + "Offset"].split(",") : _this4.offset;
          var repeat = el.dataset[_this4.name + "Repeat"];
          var call = el.dataset[_this4.name + "Call"];
          var position = el.dataset[_this4.name + "Position"];
          var delay = el.dataset[_this4.name + "Delay"];
          var direction = el.dataset[_this4.name + "Direction"];
          var sticky = typeof el.dataset[_this4.name + "Sticky"] === "string";
          if (sticky) {
            console.warn("You use data-scroll-sticky, it's not recommended for performances. Please adapt your code and play with position:sticky.");
          }
          var target = el.dataset[_this4.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this4.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this4.instance.scroll.x - getTranslate(targetEl).x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this4.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this4.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this4.repeat;
          }
          var speed = el.dataset[_this4.name + "Speed"] ? parseFloat(el.dataset[_this4.name + "Speed"]) / 10 : false;
          if (speed) {
            offset = 0;
          }
          var relativeOffset = [0, 0];
          if (offset) {
            if (_this4.direction === "horizontal") {
              for (var i2 = 0; i2 < offset.length; i2++) {
                if (typeof offset[i2] == "string") {
                  if (offset[i2].includes("%")) {
                    relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * _this4.windowWidth / 100);
                  } else {
                    relativeOffset[i2] = parseInt(offset[i2]);
                  }
                } else {
                  relativeOffset[i2] = offset[i2];
                }
              }
              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i2 = 0; i2 < offset.length; i2++) {
                if (typeof offset[i2] == "string") {
                  if (offset[i2].includes("%")) {
                    relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * _this4.windowHeight / 100);
                  } else {
                    relativeOffset[i2] = parseInt(offset[i2]);
                  }
                } else {
                  relativeOffset[i2] = offset[i2];
                }
              }
              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }
          var mappedEl = {
            el,
            targetEl,
            id,
            "class": cl,
            top,
            bottom,
            middle,
            left,
            right,
            position,
            delay,
            direction,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call,
            speed,
            sticky
          };
          _this4.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this4.setInView(_this4.els[id], id);
          }
          if (speed !== false || sticky) {
            _this4.parallaxElements[id] = mappedEl;
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this5 = this;
        Object.entries(this.els).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), i2 = _ref4[0], el = _ref4[1];
          var top = el.targetEl.getBoundingClientRect().top + _this5.instance.scroll.y;
          var bottom = top + el.targetEl.offsetHeight;
          var relativeOffset = _this5.getRelativeOffset(el.offset);
          _this5.els[i2].top = top + relativeOffset[0];
          _this5.els[i2].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform2;
        if (!delay) {
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }
        element.style.webkitTransform = transform2;
        element.style.msTransform = transform2;
        element.style.transform = transform2;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this6 = this;
        var setAllElements = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!this.smooth)
          return;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), i2 = _ref6[0], current = _ref6[1];
          var transformDistance = false;
          if (isForced) {
            transformDistance = 0;
          }
          if (current.inView || setAllElements) {
            switch (current.position) {
              case "top":
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;
              case "elementTop":
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;
              case "bottom":
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollBottom + _this6.windowHeight) * current.speed;
                break;
              case "left":
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;
              case "elementLeft":
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;
              case "right":
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollRight + _this6.windowHeight) * current.speed;
                break;
              default:
                transformDistance = (scrollMiddle[_this6.directionAxis] - current.middle[_this6.directionAxis]) * -current.speed;
                break;
            }
          }
          if (current.sticky) {
            if (current.inView) {
              if (_this6.direction === "horizontal") {
                transformDistance = _this6.instance.scroll.x - current.left + _this6.windowWidth;
              } else {
                transformDistance = _this6.instance.scroll.y - current.top + _this6.windowHeight;
              }
            } else {
              if (_this6.direction === "horizontal") {
                if (_this6.instance.scroll.x < current.left - _this6.windowWidth && _this6.instance.scroll.x < current.left - _this6.windowWidth / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.x > current.right && _this6.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + _this6.windowWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this6.instance.scroll.y < current.top - _this6.windowHeight && _this6.instance.scroll.y < current.top - _this6.windowHeight / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.y > current.bottom && _this6.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + _this6.windowHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }
          if (transformDistance !== false) {
            if (current.direction === "horizontal" || _this6.direction === "horizontal" && current.direction !== "vertical") {
              _this6.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this6.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];
        if (offset) {
          for (var i2 = 0; i2 < offset.length; i2++) {
            if (typeof offset[i2] == "string") {
              if (offset[i2].includes("%")) {
                relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * this.windowHeight / 100);
              } else {
                relativeOffset[i2] = parseInt(offset[i2]);
              }
            } else {
              relativeOffset[i2] = offset[i2];
            }
          }
        }
        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target - node, string, "top", "bottom", int - The DOM element we want to scroll to
       *          options {object} - Options object for additional settings.
       * @return {void}
       */
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var duration = options.duration || 1;
        var easing2 = this.scrollToEasing;
        this.lenis.scrollTo(target, {
          offset,
          immediate: options.immediate,
          duration,
          easing: easing2
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
        this.transformElements(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        if (this.lenis != void 0) {
          this.lenis.start();
        }
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        if (this.lenis != void 0) {
          this.lenis.stop();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get3(_getPrototypeOf(_default2.prototype), "destroy", this).call(this);
        cancelAnimationFrame(this.rafInstance);
      }
    }]);
    return _default2;
  }(_default);
  var Main = /* @__PURE__ */ function() {
    function Main2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, Main2);
      this.options = options;
      Object.assign(this, defaults2, options);
      this.smartphone = defaults2.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults2.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible");
      if (!this.tablet.smooth && this.tablet.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)");
      if (!this.smartphone.smooth && this.smartphone.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)");
      this.init();
    }
    _createClass2(Main2, [{
      key: "init",
      value: function init4() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.smooth = true;
        } else {
          this.smooth = false;
        }
        this.scroll = new _default$1(this.options);
        this.scroll.init();
        if (window.location.hash) {
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id);
          if (target)
            this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);
    return Main2;
  }();
  var loconative_scroll_esm_default = Main;

  // src/utils/smooth-scroll.ts
  var smoothScroll = () => {
    const scroll2 = new loconative_scroll_esm_default({
      smooth: true
    });
  };

  // src/Global-Codes/button-effect_code.ts
  init_live_reload();
  var import_jquery = __toESM(require_jquery(), 1);

  // node_modules/.pnpm/split-type@0.3.3/node_modules/split-type/dist/index.js
  init_live_reload();
  (() => {
    function append2(...nodes) {
      const length = nodes.length;
      for (let i2 = 0; i2 < length; i2++) {
        const node = nodes[i2];
        if (node.nodeType === 1 || node.nodeType === 11)
          this.appendChild(node);
        else
          this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren(...nodes) {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (nodes.length)
        this.append(...nodes);
    }
    function replaceWith(...nodes) {
      const parent = this.parentNode;
      let i2 = nodes.length;
      if (!parent)
        return;
      if (!i2)
        parent.removeChild(this);
      while (i2--) {
        let node = nodes[i2];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i2) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append2;
        DocumentFragment.prototype.append = append2;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce((extended, key) => {
      const currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      const newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings(settings = {}) {
    const object = extend(settings);
    let types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map((type) => String(type).trim()).filter((type) => /((line)|(word)|(char))/i.test(type));
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    const types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray3(value) {
    if (isArray(value))
      return value;
    if (value == null)
      return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    let elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray3(elements).reduce((result, element) => {
      return [...result, ...toArray3(element).filter(isNode)];
    }, []);
  }
  var {
    entries,
    keys,
    values
  } = Object;
  var expando = `_splittype`;
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    const id = owner[expando] || (owner[expando] = ++uid);
    const data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = {
          ...data,
          ...key
        };
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    const id = isObject(owner) ? owner[expando] : null;
    const data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    const id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function cleanup() {
    entries(cache).forEach(([id, {
      isRoot,
      isSplit
    }]) => {
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value, separator = " ") {
    const string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = `[${rsAstralRange}]`;
  var rsCombo = `[${rsComboMarksRange}${rsComboSymbolsRange}]`;
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = `(?:${rsCombo}|${rsFitz})`;
  var rsNonAstral = `[^${rsAstralRange}]`;
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = `${rsModifier}?`;
  var rsOptVar = `[${rsVarRange}]?`;
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = `(?:${[`${rsNonAstral}${rsCombo}?`, rsCombo, rsRegional, rsSurrPair, rsAstral].join("|")}
)`;
  var reUnicode = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol}${rsSeq}`, "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp(`[${unicodeRange.join("")}]`);
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string, separator = "") {
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    const element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach((attribute) => {
      const rawValue = attributes[attribute];
      const value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "")
        return;
      if (attribute === "children") {
        element.append(...toArray3(value));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults3 = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults3, settings);
    const types = parseTypes(settings.types);
    const TAG_NAME = settings.tagName;
    const VALUE = textNode.nodeValue;
    const splitText = document.createDocumentFragment();
    let words = [];
    let chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce((result, WORD, idx, arr) => {
      let wordElement;
      let characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map((CHAR) => {
          const characterElement = createElement(TAG_NAME, {
            class: `${settings.splitClass} ${settings.charClass}`,
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [...chars, characterElement];
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          class: `${settings.wordClass} ${settings.splitClass}`,
          style: `display: inline-block; ${types.words && settings.absolute ? `position: relative;` : ""}`,
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach((characterElement) => {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    const type = node.nodeType;
    const wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    const childNodes = toArray3(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        const nextSibling = node.nextSibling;
        const prevSibling = node.previousSibling;
        const text = node.textContent || "";
        const textAfter = nextSibling ? nextSibling.textContent : " ";
        const textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce((result, child2) => {
      const {
        words,
        chars
      } = split(child2, settings);
      return {
        words: [...result.words, ...words],
        chars: [...result.chars, ...chars]
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    const parent = node.offsetParent;
    const [scrollX, scrollY] = scrollPos;
    let parentX = 0;
    let parentY = 0;
    if (parent && parent !== document.body) {
      const parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    const {
      width,
      height,
      x,
      y
    } = node.getBoundingClientRect();
    const top = y + scrollY - parentY;
    const left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray3(element.children).forEach((child2) => unSplitWords(child2));
    } else {
      remove(element);
      element.replaceWith(...element.childNodes);
    }
  }
  var createFragment = () => document.createDocumentFragment();
  function repositionAfterSplit(element, settings, scrollPos) {
    const types = parseTypes(settings.types);
    const TAG_NAME = settings.tagName;
    const nodes = element.getElementsByTagName("*");
    const wordsInEachLine = [];
    let wordsInCurrentLine = [];
    let lineOffsetY = null;
    let elementHeight;
    let elementWidth;
    let contentBox;
    let lines = [];
    const parent = element.parentElement;
    const nextSibling = element.nextElementSibling;
    const splitText = createFragment();
    const cs = window.getComputedStyle(element);
    const align = cs.textAlign;
    const fontSize = parseFloat(cs.fontSize);
    const lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray3(nodes).forEach((node) => {
      const isWordLike = node.parentElement === element;
      const {
        width,
        height,
        top,
        left
      } = getPosition(node, isWordLike, settings, scrollPos);
      if (/^br$/i.test(node.nodeName))
        return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map((wordsInThisLine) => {
        const lineElement = createElement(TAG_NAME, {
          class: `${settings.splitClass} ${settings.lineClass}`,
          style: `display: block; text-align: ${align}; width: 100%;`
        });
        set(lineElement, "isLine", true);
        const lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach((wordOrElement, idx, arr) => {
          const {
            isWordEnd,
            top,
            height
          } = get(wordOrElement);
          const next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = `${element.style.width || elementWidth}px`;
      element.style.height = `${elementHeight}px`;
      toArray3(nodes).forEach((node) => {
        const {
          isLine,
          top,
          left,
          width,
          height
        } = get(node);
        const parentData = get(node.parentElement);
        const isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = `${isChildOfLineNode ? top - parentData.top : top}px`;
        node.style.left = isLine ? `${contentBox.left}px` : `${left - (isChildOfLineNode ? contentBox.left : 0)}px`;
        node.style.height = `${height}px`;
        node.style.width = isLine ? `${contentBox.width}px` : `${width}px`;
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling)
        parent.insertBefore(element, nextSibling);
      else
        parent.appendChild(element);
    }
    return lines;
  }
  var _defaults3 = extend(defaults3, {});
  var SplitType = class {
    /**
     * The internal data store
     */
    static get data() {
      return cache;
    }
    /**
     * The default settings for all splitType instances
     * @static
     */
    static get defaults() {
      return _defaults3;
    }
    /**
     * Sets the default settings for all SplitType instances.
     *
     * Setting `SplitType.defaults` to an object will merge that object with the
     * existing defaults.
     *
     * @param {Object} settings an object containing the settings to override
     * @deprecated
     * @static
     * @example
     * SplitType.defaults = { "position": "absolute" }
     */
    static set defaults(options) {
      _defaults3 = extend(_defaults3, parseSettings(options));
    }
    /**
     * Sets the default settings for all SplitType instances.
     * The provided object will be merged with the existing defaults objects.
     *
     * @param {Object} settings an object containing the settings to override
     * @returns {Object} the new default settings
     * @public
     * @static
     * @example
     * SplitType.setDefaults({ "position": "absolute" })
     */
    static setDefaults(options) {
      _defaults3 = extend(_defaults3, parseSettings(options));
      return defaults3;
    }
    /**
     * Revert target elements to their original html content
     * Has no effect on that
     *
     * @param {any} elements The target elements to revert. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @static
     */
    static revert(elements) {
      getTargetElements(elements).forEach((element) => {
        const {
          isSplit,
          html,
          cssWidth,
          cssHeight
        } = get(element);
        if (isSplit) {
          element.innerHTML = html;
          element.style.width = cssWidth || "";
          element.style.height = cssHeight || "";
          remove(element);
        }
      });
    }
    /**
     * Creates a new SplitType instance
     * This static method provides a way to create a `SplitType` instance without
     * using the `new` keyword.
     *
     * @param {any} target The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     * @return {SplitType} the SplitType instance
     * @static
     */
    static create(target, options) {
      return new SplitType(target, options);
    }
    /**
     * Creates a new `SplitType` instance
     *
     * @param {any} elements The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     */
    constructor(elements, options) {
      this.isSplit = false;
      this.settings = extend(_defaults3, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    /**
     * Splits the text in all target elements. This method is called
     * automatically when a new SplitType instance is created. It can also be
     * called manually to re-split text with new options.
     * @param {Object} options
     * @public
     */
    split(options) {
      this.revert();
      this.elements.forEach((element) => {
        set(element, "html", element.innerHTML);
      });
      this.lines = [];
      this.words = [];
      this.chars = [];
      const scrollPos = [window.pageXOffset, window.pageYOffset];
      if (options !== void 0) {
        this.settings = extend(this.settings, parseSettings(options));
      }
      const types = parseTypes(this.settings.types);
      if (types.none) {
        return;
      }
      this.elements.forEach((element) => {
        set(element, "isRoot", true);
        const {
          words,
          chars
        } = split(element, this.settings);
        this.words = [...this.words, ...words];
        this.chars = [...this.chars, ...chars];
      });
      this.elements.forEach((element) => {
        if (types.lines || this.settings.absolute) {
          const lines = repositionAfterSplit(element, this.settings, scrollPos);
          this.lines = [...this.lines, ...lines];
        }
      });
      this.isSplit = true;
      window.scrollTo(scrollPos[0], scrollPos[1]);
      cleanup();
    }
    /**
     * Reverts target element(s) back to their original html content
     * Deletes all stored data associated with the target elements
     * Resets the properties on the splitType instance
     *
     * @public
     */
    revert() {
      if (this.isSplit) {
        this.lines = null;
        this.words = null;
        this.chars = null;
        this.isSplit = false;
      }
      SplitType.revert(this.elements);
    }
  };

  // src/Global-Codes/button-effect_code.ts
  function initializeButtonEffect() {
    function attr(defaultVal, attrVal) {
      if (attrVal === null || attrVal.trim() === "") {
        return defaultVal;
      }
      if (typeof defaultVal === "string") {
        return attrVal;
      }
      if (typeof defaultVal === "number" && !isNaN(Number(attrVal))) {
        return +attrVal;
      }
      if (typeof defaultVal === "boolean") {
        if (attrVal === "true") {
          return true;
        }
        if (attrVal === "false") {
          return false;
        }
      }
      return defaultVal;
    }
    const splitType = new SplitType("[text-split]", {
      types: "words, chars",
      // Corrected the typo here
      tagName: "span"
    });
    (0, import_jquery.default)("[hoverstagger='link']").each(function() {
      const text1 = (0, import_jquery.default)(this).find("[hoverstagger='text']").eq(0);
      const text2 = (0, import_jquery.default)(this).find("[hoverstagger='text']").eq(1);
      const durationSetting = attr(0.3, (0, import_jquery.default)(this).attr("hoverstagger-duration"));
      const staggerDuration = durationSetting * 0.6666666667;
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.to(text1.find(".char"), {
        yPercent: -100,
        duration: durationSetting,
        stagger: { amount: staggerDuration }
      });
      tl.from(
        text2.find(".char"),
        {
          yPercent: 100,
          duration: durationSetting,
          stagger: { amount: staggerDuration }
        },
        0
      );
      (0, import_jquery.default)(this).on("mouseenter", function() {
        tl.restart();
      });
    });
  }

  // src/utils/main-navbar.ts
  init_live_reload();
  var import_jquery2 = __toESM(require_jquery(), 1);
  var mainNavbar = () => {
    (0, import_jquery2.default)(".nav_wrap").each(function() {
      const $this = (0, import_jquery2.default)(this);
      const hamburgerEl = $this.find(".nav_hamburger_wrap");
      const navLineEl = $this.find(".nav_hamburger_line");
      const menuContainEl = $this.find(".menu_contain");
      const flipItemEl = $this.find(".nav_hamburger_base");
      const menuWrapEl = $this.find(".menu_wrap");
      const menuBaseEl = $this.find(".menu_base");
      const menuLinkEl = $this.find(".menu_link");
      const flipDuration = 0.6;
      const tl = gsapWithCSS.timeline({ paused: true });
      const openClass = "nav-open";
      function flip(forwards) {
        const state = Flip.getState(flipItemEl);
        flipItemEl.appendTo(forwards ? menuContainEl : hamburgerEl);
        Flip.from(state, { duration: flipDuration });
      }
      function openMenu(open) {
        if (!tl.isActive()) {
          if (open) {
            tl.play();
            hamburgerEl.addClass(openClass);
          } else {
            tl.reverse();
            hamburgerEl.removeClass(openClass);
          }
        }
      }
      tl.set(menuWrapEl, { display: "flex" }).from(menuBaseEl, {
        opacity: 0,
        duration: flipDuration,
        ease: "none",
        onStart: () => {
          flip(true);
        }
      }).to(navLineEl.eq(0), { y: 4, rotate: 45, duration: flipDuration }, "<").to(navLineEl.eq(1), { y: -4, rotate: -45, duration: flipDuration }, "<").from(menuLinkEl, {
        opacity: 0,
        yPercent: 50,
        duration: 0.2,
        stagger: { amount: 0.2 },
        onReverseComplete: () => {
          flip(false);
        }
      });
      hamburgerEl.on("click", function() {
        openMenu(!(0, import_jquery2.default)(this).hasClass(openClass));
      });
      menuBaseEl.on("mouseenter click", function() {
        openMenu(false);
      });
      (0, import_jquery2.default)(document).on("keydown", function(e) {
        if (e.key === "Escape") {
          openMenu(false);
        }
      });
    });
  };

  // src/utils/home-carrosel.ts
  init_live_reload();

  // node_modules/.pnpm/@splidejs+splide@4.1.4/node_modules/@splidejs/splide/dist/js/splide.esm.js
  init_live_reload();
  function _defineProperties3(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
  var CREATED = 1;
  var MOUNTED = 2;
  var IDLE = 3;
  var MOVING = 4;
  var SCROLLING = 5;
  var DRAGGING = 6;
  var DESTROYED = 7;
  var STATES = {
    CREATED,
    MOUNTED,
    IDLE,
    MOVING,
    SCROLLING,
    DRAGGING,
    DESTROYED
  };
  function empty(array) {
    array.length = 0;
  }
  function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
  }
  function apply(func) {
    return func.bind.apply(func, [null].concat(slice(arguments, 1)));
  }
  var nextTick = setTimeout;
  var noop = function noop2() {
  };
  function raf(func) {
    return requestAnimationFrame(func);
  }
  function typeOf(type, subject) {
    return typeof subject === type;
  }
  function isObject2(subject) {
    return !isNull(subject) && typeOf("object", subject);
  }
  var isArray2 = Array.isArray;
  var isFunction = apply(typeOf, "function");
  var isString2 = apply(typeOf, "string");
  var isUndefined = apply(typeOf, "undefined");
  function isNull(subject) {
    return subject === null;
  }
  function isHTMLElement(subject) {
    try {
      return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
      return false;
    }
  }
  function toArray4(value) {
    return isArray2(value) ? value : [value];
  }
  function forEach(values2, iteratee) {
    toArray4(values2).forEach(iteratee);
  }
  function includes(array, value) {
    return array.indexOf(value) > -1;
  }
  function push(array, items) {
    array.push.apply(array, toArray4(items));
    return array;
  }
  function toggleClass(elm, classes, add) {
    if (elm) {
      forEach(classes, function(name) {
        if (name) {
          elm.classList[add ? "add" : "remove"](name);
        }
      });
    }
  }
  function addClass(elm, classes) {
    toggleClass(elm, isString2(classes) ? classes.split(" ") : classes, true);
  }
  function append(parent, children2) {
    forEach(children2, parent.appendChild.bind(parent));
  }
  function before(nodes, ref2) {
    forEach(nodes, function(node) {
      var parent = (ref2 || node).parentNode;
      if (parent) {
        parent.insertBefore(node, ref2);
      }
    });
  }
  function matches(elm, selector3) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector3);
  }
  function children(parent, selector3) {
    var children2 = parent ? slice(parent.children) : [];
    return selector3 ? children2.filter(function(child2) {
      return matches(child2, selector3);
    }) : children2;
  }
  function child(parent, selector3) {
    return selector3 ? children(parent, selector3)[0] : parent.firstElementChild;
  }
  var ownKeys = Object.keys;
  function forOwn(object, iteratee, right) {
    if (object) {
      (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
      });
    }
    return object;
  }
  function assign(object) {
    slice(arguments, 1).forEach(function(source) {
      forOwn(source, function(value, key) {
        object[key] = source[key];
      });
    });
    return object;
  }
  function merge(object) {
    slice(arguments, 1).forEach(function(source) {
      forOwn(source, function(value, key) {
        if (isArray2(value)) {
          object[key] = value.slice();
        } else if (isObject2(value)) {
          object[key] = merge({}, isObject2(object[key]) ? object[key] : {}, value);
        } else {
          object[key] = value;
        }
      });
    });
    return object;
  }
  function omit(object, keys2) {
    forEach(keys2 || ownKeys(object), function(key) {
      delete object[key];
    });
  }
  function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
      forEach(attrs, function(attr) {
        elm && elm.removeAttribute(attr);
      });
    });
  }
  function setAttribute(elms, attrs, value) {
    if (isObject2(attrs)) {
      forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
      });
    } else {
      forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
      });
    }
  }
  function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) {
      isString2(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    }
    parent && append(parent, elm);
    return elm;
  }
  function style(elm, prop, value) {
    if (isUndefined(value)) {
      return getComputedStyle(elm)[prop];
    }
    if (!isNull(value)) {
      elm.style[prop] = "" + value;
    }
  }
  function display(elm, display2) {
    style(elm, "display", display2);
  }
  function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
      preventScroll: true
    });
  }
  function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
  }
  function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
  }
  function rect(target) {
    return target.getBoundingClientRect();
  }
  function remove2(nodes) {
    forEach(nodes, function(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
  }
  function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
  }
  function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  function query(parent, selector3) {
    return parent && parent.querySelector(selector3);
  }
  function queryAll(parent, selector3) {
    return selector3 ? slice(parent.querySelectorAll(selector3)) : [];
  }
  function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
  }
  function timeOf(e) {
    return e.timeStamp;
  }
  function unit(value) {
    return isString2(value) ? value : value ? value + "px" : "";
  }
  var PROJECT_CODE = "splide";
  var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
  function assert(condition, message) {
    if (!condition) {
      throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
    }
  }
  var min = Math.min;
  var max = Math.max;
  var floor = Math.floor;
  var ceil = Math.ceil;
  var abs = Math.abs;
  function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
  }
  function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
  }
  function clamp3(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
  }
  function sign(x) {
    return +(x > 0) - +(x < 0);
  }
  function format(string, replacements) {
    forEach(replacements, function(replacement) {
      string = string.replace("%s", "" + replacement);
    });
    return string;
  }
  function pad(number) {
    return number < 10 ? "0" + number : "" + number;
  }
  var ids = {};
  function uniqueId(prefix) {
    return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
  }
  function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
      forEachEvent(targets, events, function(target, event, namespace) {
        var isEventTarget = "addEventListener" in target;
        var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
        isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
        listeners.push([target, event, namespace, callback, remover]);
      });
    }
    function unbind(targets, events, callback) {
      forEachEvent(targets, events, function(target, event, namespace) {
        listeners = listeners.filter(function(listener) {
          if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
            listener[4]();
            return false;
          }
          return true;
        });
      });
    }
    function dispatch(target, type, detail) {
      var e;
      var bubbles = true;
      if (typeof CustomEvent === "function") {
        e = new CustomEvent(type, {
          bubbles,
          detail
        });
      } else {
        e = document.createEvent("CustomEvent");
        e.initCustomEvent(type, bubbles, false, detail);
      }
      target.dispatchEvent(e);
      return e;
    }
    function forEachEvent(targets, events, iteratee) {
      forEach(targets, function(target) {
        target && forEach(events, function(events2) {
          events2.split(" ").forEach(function(eventNS) {
            var fragment = eventNS.split(".");
            iteratee(target, fragment[0], fragment[1]);
          });
        });
      });
    }
    function destroy() {
      listeners.forEach(function(data) {
        data[4]();
      });
      empty(listeners);
    }
    return {
      bind,
      unbind,
      dispatch,
      destroy
    };
  }
  var EVENT_MOUNTED = "mounted";
  var EVENT_READY = "ready";
  var EVENT_MOVE = "move";
  var EVENT_MOVED = "moved";
  var EVENT_CLICK = "click";
  var EVENT_ACTIVE = "active";
  var EVENT_INACTIVE = "inactive";
  var EVENT_VISIBLE = "visible";
  var EVENT_HIDDEN = "hidden";
  var EVENT_REFRESH = "refresh";
  var EVENT_UPDATED = "updated";
  var EVENT_RESIZE = "resize";
  var EVENT_RESIZED = "resized";
  var EVENT_DRAG = "drag";
  var EVENT_DRAGGING = "dragging";
  var EVENT_DRAGGED = "dragged";
  var EVENT_SCROLL = "scroll";
  var EVENT_SCROLLED = "scrolled";
  var EVENT_OVERFLOW = "overflow";
  var EVENT_DESTROY = "destroy";
  var EVENT_ARROWS_MOUNTED = "arrows:mounted";
  var EVENT_ARROWS_UPDATED = "arrows:updated";
  var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
  var EVENT_PAGINATION_UPDATED = "pagination:updated";
  var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
  var EVENT_AUTOPLAY_PLAY = "autoplay:play";
  var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
  var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
  var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
  var EVENT_SLIDE_KEYDOWN = "sk";
  var EVENT_SHIFTED = "sh";
  var EVENT_END_INDEX_CHANGED = "ei";
  function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
      binder.bind(bus, toArray4(events).join(" "), function(e) {
        callback.apply(callback, isArray2(e.detail) ? e.detail : []);
      });
    }
    function emit(event) {
      binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) {
      Splide2.event.on(EVENT_DESTROY, binder.destroy);
    }
    return assign(binder, {
      bus,
      on,
      off: apply(binder.unbind, bus),
      emit
    });
  }
  function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
      if (!paused) {
        rate = interval ? min((now() - startTime) / interval, 1) : 1;
        onUpdate && onUpdate(rate);
        if (rate >= 1) {
          onInterval();
          startTime = now();
          if (limit && ++count >= limit) {
            return pause();
          }
        }
        id = raf(update);
      }
    }
    function start(resume) {
      resume || cancel();
      startTime = now() - (resume ? rate * interval : 0);
      paused = false;
      id = raf(update);
    }
    function pause() {
      paused = true;
    }
    function rewind() {
      startTime = now();
      rate = 0;
      if (onUpdate) {
        onUpdate(rate);
      }
    }
    function cancel() {
      id && cancelAnimationFrame(id);
      rate = 0;
      id = 0;
      paused = true;
    }
    function set2(time) {
      interval = time;
    }
    function isPaused() {
      return paused;
    }
    return {
      start,
      rewind,
      pause,
      cancel,
      set: set2,
      isPaused
    };
  }
  function State(initialState) {
    var state = initialState;
    function set2(value) {
      state = value;
    }
    function is(states) {
      return includes(toArray4(states), state);
    }
    return {
      set: set2,
      is
    };
  }
  function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
      interval.isPaused() && interval.start();
    };
  }
  function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
      var isMin = options.mediaQuery === "min";
      ownKeys(breakpoints).sort(function(n2, m) {
        return isMin ? +n2 - +m : +m - +n2;
      }).forEach(function(key) {
        register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
      });
      register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
      update();
    }
    function destroy(completely) {
      if (completely) {
        binder.destroy();
      }
    }
    function register(options2, query2) {
      var queryList = matchMedia(query2);
      binder.bind(queryList, "change", update);
      queries.push([options2, queryList]);
    }
    function update() {
      var destroyed = state.is(DESTROYED);
      var direction = options.direction;
      var merged = queries.reduce(function(merged2, entry) {
        return merge(merged2, entry[1].matches ? entry[0] : {});
      }, {});
      omit(options);
      set2(merged);
      if (options.destroy) {
        Splide2.destroy(options.destroy === "completely");
      } else if (destroyed) {
        destroy(true);
        Splide2.mount();
      } else {
        direction !== options.direction && Splide2.refresh();
      }
    }
    function reduce(enable) {
      if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
        enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
      }
    }
    function set2(opts, base, notify) {
      merge(options, opts);
      base && merge(Object.getPrototypeOf(options), opts);
      if (notify || !state.is(CREATED)) {
        Splide2.emit(EVENT_UPDATED, options);
      }
    }
    return {
      setup,
      destroy,
      reduce,
      set: set2
    };
  }
  var ARROW = "Arrow";
  var ARROW_LEFT = ARROW + "Left";
  var ARROW_RIGHT = ARROW + "Right";
  var ARROW_UP = ARROW + "Up";
  var ARROW_DOWN = ARROW + "Down";
  var RTL = "rtl";
  var TTB = "ttb";
  var ORIENTATION_MAP = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [ARROW_UP, ARROW_RIGHT],
    ArrowRight: [ARROW_DOWN, ARROW_LEFT]
  };
  function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
      direction = direction || options.direction;
      var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
      return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
        var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
        return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
      });
    }
    function orient(value) {
      return value * (options.direction === RTL ? 1 : -1);
    }
    return {
      resolve,
      orient
    };
  }
  var ROLE = "role";
  var TAB_INDEX = "tabindex";
  var DISABLED = "disabled";
  var ARIA_PREFIX = "aria-";
  var ARIA_CONTROLS = ARIA_PREFIX + "controls";
  var ARIA_CURRENT = ARIA_PREFIX + "current";
  var ARIA_SELECTED = ARIA_PREFIX + "selected";
  var ARIA_LABEL = ARIA_PREFIX + "label";
  var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
  var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
  var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
  var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
  var ARIA_LIVE = ARIA_PREFIX + "live";
  var ARIA_BUSY = ARIA_PREFIX + "busy";
  var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
  var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
  var CLASS_PREFIX = PROJECT_CODE + "__";
  var STATUS_CLASS_PREFIX = "is-";
  var CLASS_ROOT = PROJECT_CODE;
  var CLASS_TRACK = CLASS_PREFIX + "track";
  var CLASS_LIST = CLASS_PREFIX + "list";
  var CLASS_SLIDE = CLASS_PREFIX + "slide";
  var CLASS_CLONE = CLASS_SLIDE + "--clone";
  var CLASS_CONTAINER = CLASS_SLIDE + "__container";
  var CLASS_ARROWS = CLASS_PREFIX + "arrows";
  var CLASS_ARROW = CLASS_PREFIX + "arrow";
  var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
  var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
  var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
  var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
  var CLASS_PROGRESS = CLASS_PREFIX + "progress";
  var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
  var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
  var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
  var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
  var CLASS_SPINNER = CLASS_PREFIX + "spinner";
  var CLASS_SR = CLASS_PREFIX + "sr";
  var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
  var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
  var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
  var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
  var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
  var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
  var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
  var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
  var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
  var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
  };
  function closest(from, selector3) {
    if (isFunction(from.closest)) {
      return from.closest(selector3);
    }
    var elm = from;
    while (elm && elm.nodeType === 1) {
      if (matches(elm, selector3)) {
        break;
      }
      elm = elm.parentElement;
    }
    return elm;
  }
  var FRICTION = 5;
  var LOG_INTERVAL = 200;
  var POINTER_DOWN_EVENTS = "touchstart mousedown";
  var POINTER_MOVE_EVENTS = "touchmove mousemove";
  var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
  function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
      collect();
      init4();
      update();
    }
    function mount() {
      on(EVENT_REFRESH, destroy);
      on(EVENT_REFRESH, setup);
      on(EVENT_UPDATED, update);
      bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
        isUsingKey = e.type === "keydown";
      }, {
        capture: true
      });
      bind(root, "focusin", function() {
        toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
      });
    }
    function destroy(completely) {
      var attrs = ALL_ATTRIBUTES.concat("style");
      empty(slides);
      removeClass(root, rootClasses);
      removeClass(track, trackClasses);
      removeAttribute([track, list], attrs);
      removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
    }
    function update() {
      removeClass(root, rootClasses);
      removeClass(track, trackClasses);
      rootClasses = getClasses(CLASS_ROOT);
      trackClasses = getClasses(CLASS_TRACK);
      addClass(root, rootClasses);
      addClass(track, trackClasses);
      setAttribute(root, ARIA_LABEL, options.label);
      setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
      track = find("." + CLASS_TRACK);
      list = child(track, "." + CLASS_LIST);
      assert(track && list, "A track/list element is missing.");
      push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
      forOwn({
        arrows: CLASS_ARROWS,
        pagination: CLASS_PAGINATION,
        prev: CLASS_ARROW_PREV,
        next: CLASS_ARROW_NEXT,
        bar: CLASS_PROGRESS_BAR,
        toggle: CLASS_TOGGLE
      }, function(className, key) {
        elements[key] = find("." + className);
      });
      assign(elements, {
        root,
        track,
        list,
        slides
      });
    }
    function init4() {
      var id = root.id || uniqueId(PROJECT_CODE);
      var role = options.role;
      root.id = id;
      track.id = track.id || id + "-track";
      list.id = list.id || id + "-list";
      if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
        setAttribute(root, ROLE, role);
      }
      setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
      setAttribute(list, ROLE, "presentation");
    }
    function find(selector3) {
      var elm = query(root, selector3);
      return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
      return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
    }
    return assign(elements, {
      setup,
      mount,
      destroy
    });
  }
  var SLIDE = "slide";
  var LOOP = "loop";
  var FADE = "fade";
  function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
      if (!isClone) {
        slide.id = root.id + "-slide" + pad(index + 1);
        setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
        setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
        setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
      }
      listen();
    }
    function listen() {
      bind(slide, "click", apply(emit, EVENT_CLICK, self2));
      bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self2));
      on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
      on(EVENT_NAVIGATION_MOUNTED, initNavigation);
      if (updateOnMove) {
        on(EVENT_MOVE, onMove);
      }
    }
    function destroy() {
      destroyed = true;
      event.destroy();
      removeClass(slide, STATUS_CLASSES);
      removeAttribute(slide, ALL_ATTRIBUTES);
      setAttribute(slide, "style", styles);
      setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
      var controls = Splide2.splides.map(function(target) {
        var Slide2 = target.splide.Components.Slides.getAt(index);
        return Slide2 ? Slide2.slide.id : "";
      }).join(" ");
      setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
      setAttribute(slide, ARIA_CONTROLS, controls);
      setAttribute(slide, ROLE, slideFocus ? "button" : "");
      slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
      if (!destroyed) {
        update();
      }
    }
    function update() {
      if (!destroyed) {
        var curr = Splide2.index;
        updateActivity();
        updateVisibility();
        toggleClass(slide, CLASS_PREV, index === curr - 1);
        toggleClass(slide, CLASS_NEXT, index === curr + 1);
      }
    }
    function updateActivity() {
      var active = isActive();
      if (active !== hasClass(slide, CLASS_ACTIVE)) {
        toggleClass(slide, CLASS_ACTIVE, active);
        setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
        emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self2);
      }
    }
    function updateVisibility() {
      var visible = isVisible();
      var hidden = !visible && (!isActive() || isClone);
      if (!Splide2.state.is([MOVING, SCROLLING])) {
        setAttribute(slide, ARIA_HIDDEN, hidden || "");
      }
      setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
      if (slideFocus) {
        setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
      }
      if (visible !== hasClass(slide, CLASS_VISIBLE)) {
        toggleClass(slide, CLASS_VISIBLE, visible);
        emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self2);
      }
      if (!visible && document.activeElement === slide) {
        var Slide2 = Components.Slides.getAt(Splide2.index);
        Slide2 && focus(Slide2.slide);
      }
    }
    function style$1(prop, value, useContainer) {
      style(useContainer && container || slide, prop, value);
    }
    function isActive() {
      var curr = Splide2.index;
      return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
      if (Splide2.is(FADE)) {
        return isActive();
      }
      var trackRect = rect(Components.Elements.track);
      var slideRect = rect(slide);
      var left = resolve("left", true);
      var right = resolve("right", true);
      return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
      var diff = abs(from - index);
      if (!isClone && (options.rewind || Splide2.is(LOOP))) {
        diff = min(diff, Splide2.length - diff);
      }
      return diff <= distance;
    }
    var self2 = {
      index,
      slideIndex,
      slide,
      container,
      isClone,
      mount,
      destroy,
      update,
      style: style$1,
      isWithin
    };
    return self2;
  }
  function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
      init4();
      on(EVENT_REFRESH, destroy);
      on(EVENT_REFRESH, init4);
    }
    function init4() {
      slides.forEach(function(slide, index) {
        register(slide, index, -1);
      });
    }
    function destroy() {
      forEach$1(function(Slide2) {
        Slide2.destroy();
      });
      empty(Slides2);
    }
    function update() {
      forEach$1(function(Slide2) {
        Slide2.update();
      });
    }
    function register(slide, index, slideIndex) {
      var object = Slide$1(Splide2, index, slideIndex, slide);
      object.mount();
      Slides2.push(object);
      Slides2.sort(function(Slide1, Slide2) {
        return Slide1.index - Slide2.index;
      });
    }
    function get2(excludeClones) {
      return excludeClones ? filter(function(Slide2) {
        return !Slide2.isClone;
      }) : Slides2;
    }
    function getIn(page) {
      var Controller2 = Components2.Controller;
      var index = Controller2.toIndex(page);
      var max2 = Controller2.hasFocus() ? 1 : options.perPage;
      return filter(function(Slide2) {
        return between(Slide2.index, index, index + max2 - 1);
      });
    }
    function getAt(index) {
      return filter(index)[0];
    }
    function add(items, index) {
      forEach(items, function(slide) {
        if (isString2(slide)) {
          slide = parseHtml(slide);
        }
        if (isHTMLElement(slide)) {
          var ref2 = slides[index];
          ref2 ? before(slide, ref2) : append(list, slide);
          addClass(slide, options.classes.slide);
          observeImages(slide, apply(emit, EVENT_RESIZE));
        }
      });
      emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
      remove2(filter(matcher).map(function(Slide2) {
        return Slide2.slide;
      }));
      emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
      get2(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
      return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
        return isString2(matcher) ? matches(Slide2.slide, matcher) : includes(toArray4(matcher), Slide2.index);
      });
    }
    function style2(prop, value, useContainer) {
      forEach$1(function(Slide2) {
        Slide2.style(prop, value, useContainer);
      });
    }
    function observeImages(elm, callback) {
      var images = queryAll(elm, "img");
      var length = images.length;
      if (length) {
        images.forEach(function(img) {
          bind(img, "load error", function() {
            if (!--length) {
              callback();
            }
          });
        });
      } else {
        callback();
      }
    }
    function getLength(excludeClones) {
      return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
      return Slides2.length > options.perPage;
    }
    return {
      mount,
      destroy,
      update,
      register,
      get: get2,
      getIn,
      getAt,
      add,
      remove: remove$1,
      forEach: forEach$1,
      filter,
      style: style2,
      getLength,
      isEnough
    };
  }
  function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides2.getAt, styleSlides = Slides2.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
      init4();
      bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
      on([EVENT_UPDATED, EVENT_REFRESH], init4);
      on(EVENT_RESIZE, resize);
    }
    function init4() {
      vertical = options.direction === TTB;
      style(root, "maxWidth", unit(options.width));
      style(track, resolve("paddingLeft"), cssPadding(false));
      style(track, resolve("paddingRight"), cssPadding(true));
      resize(true);
    }
    function resize(force) {
      var newRect = rect(root);
      if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
        style(track, "height", cssTrackHeight());
        styleSlides(resolve("marginRight"), unit(options.gap));
        styleSlides("width", cssSlideWidth());
        styleSlides("height", cssSlideHeight(), true);
        rootRect = newRect;
        emit(EVENT_RESIZED);
        if (overflow !== (overflow = isOverflow())) {
          toggleClass(root, CLASS_OVERFLOW, overflow);
          emit(EVENT_OVERFLOW, overflow);
        }
      }
    }
    function cssPadding(right) {
      var padding = options.padding;
      var prop = resolve(right ? "right" : "left");
      return padding && unit(padding[prop] || (isObject2(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
      var height = "";
      if (vertical) {
        height = cssHeight();
        assert(height, "height or heightRatio is missing.");
        height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
      }
      return height;
    }
    function cssHeight() {
      return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
      return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
      return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
      var gap = unit(options.gap);
      return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
      return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
      var Slide2 = getAt(index || 0);
      return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
      var Slide2 = getAt(index);
      if (Slide2) {
        var right = rect(Slide2.slide)[resolve("right")];
        var left = rect(list)[resolve("left")];
        return abs(right - left) + (withoutGap ? 0 : getGap());
      }
      return 0;
    }
    function sliderSize(withoutGap) {
      return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
      var Slide2 = getAt(0);
      return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
      return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
      return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
      mount,
      resize,
      listSize,
      slideSize,
      sliderSize,
      totalSize,
      getPadding,
      isOverflow
    };
  }
  var MULTIPLIER = 2;
  function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
      on(EVENT_REFRESH, remount);
      on([EVENT_UPDATED, EVENT_RESIZE], observe);
      if (cloneCount = computeCloneCount()) {
        generate(cloneCount);
        Components2.Layout.resize(true);
      }
    }
    function remount() {
      destroy();
      mount();
    }
    function destroy() {
      remove2(clones);
      empty(clones);
      event.destroy();
    }
    function observe() {
      var count = computeCloneCount();
      if (cloneCount !== count) {
        if (cloneCount < count || !count) {
          event.emit(EVENT_REFRESH);
        }
      }
    }
    function generate(count) {
      var slides = Slides2.get().slice();
      var length = slides.length;
      if (length) {
        while (slides.length < count) {
          push(slides, slides);
        }
        push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
          var isHead = index < count;
          var clone = cloneDeep(Slide2.slide, index);
          isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
          push(clones, clone);
          Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
        });
      }
    }
    function cloneDeep(elm, index) {
      var clone = elm.cloneNode(true);
      addClass(clone, options.classes.clone);
      clone.id = Splide2.root.id + "-clone" + pad(index + 1);
      return clone;
    }
    function computeCloneCount() {
      var clones2 = options.clones;
      if (!Splide2.is(LOOP)) {
        clones2 = 0;
      } else if (isUndefined(clones2)) {
        var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
        var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
        clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
      }
      return clones2;
    }
    return {
      mount,
      destroy
    };
  }
  function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set2 = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
      Transition = Components2.Transition;
      on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
    }
    function reposition() {
      if (!Components2.Controller.isBusy()) {
        Components2.Scroll.cancel();
        jump(Splide2.index);
        Components2.Slides.update();
      }
    }
    function move(dest, index, prev, callback) {
      if (dest !== index && canShift(dest > prev)) {
        cancel();
        translate(shift(getPosition2(), dest > prev), true);
      }
      set2(MOVING);
      emit(EVENT_MOVE, index, prev, dest);
      Transition.start(index, function() {
        set2(IDLE);
        emit(EVENT_MOVED, index, prev, dest);
        callback && callback();
      });
    }
    function jump(index) {
      translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
      if (!Splide2.is(FADE)) {
        var destination = preventLoop ? position : loop(position);
        style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
        position !== destination && emit(EVENT_SHIFTED);
      }
    }
    function loop(position) {
      if (Splide2.is(LOOP)) {
        var index = toIndex(position);
        var exceededMax = index > Components2.Controller.getEnd();
        var exceededMin = index < 0;
        if (exceededMin || exceededMax) {
          position = shift(position, exceededMax);
        }
      }
      return position;
    }
    function shift(position, backwards) {
      var excess = position - getLimit(backwards);
      var size = sliderSize();
      position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
      return position;
    }
    function cancel() {
      translate(getPosition2(), true);
      Transition.cancel();
    }
    function toIndex(position) {
      var Slides2 = Components2.Slides.get();
      var index = 0;
      var minDistance = Infinity;
      for (var i2 = 0; i2 < Slides2.length; i2++) {
        var slideIndex = Slides2[i2].index;
        var distance = abs(toPosition(slideIndex, true) - position);
        if (distance <= minDistance) {
          minDistance = distance;
          index = slideIndex;
        } else {
          break;
        }
      }
      return index;
    }
    function toPosition(index, trimming) {
      var position = orient(totalSize(index - 1) - offset(index));
      return trimming ? trim(position) : position;
    }
    function getPosition2() {
      var left = resolve("left");
      return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
      if (options.trimSpace && Splide2.is(SLIDE)) {
        position = clamp3(position, 0, orient(sliderSize(true) - listSize()));
      }
      return position;
    }
    function offset(index) {
      var focus2 = options.focus;
      return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
    }
    function getLimit(max2) {
      return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
      var shifted = orient(shift(getPosition2(), backwards));
      return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max2, position) {
      position = isUndefined(position) ? getPosition2() : position;
      var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
      var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
      return exceededMin || exceededMax;
    }
    return {
      mount,
      move,
      jump,
      translate,
      shift,
      cancel,
      toIndex,
      toPosition,
      getPosition: getPosition2,
      getLimit,
      exceededLimit,
      reposition
    };
  }
  function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move2 = Components2.Move;
    var getPosition2 = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
      init4();
      on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init4);
      on(EVENT_RESIZED, onResized);
    }
    function init4() {
      slideCount = getLength(true);
      perMove = options.perMove;
      perPage = options.perPage;
      endIndex = getEnd();
      var index = clamp3(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
      if (index !== currIndex) {
        currIndex = index;
        Move2.reposition();
      }
    }
    function onResized() {
      if (endIndex !== getEnd()) {
        emit(EVENT_END_INDEX_CHANGED);
      }
    }
    function go(control, allowSameIndex, callback) {
      if (!isBusy()) {
        var dest = parse(control);
        var index = loop(dest);
        if (index > -1 && (allowSameIndex || index !== currIndex)) {
          setIndex(index);
          Move2.move(dest, index, prevIndex, callback);
        }
      }
    }
    function scroll2(destination, duration, snap3, callback) {
      Components2.Scroll.scroll(destination, duration, snap3, function() {
        var index = loop(Move2.toIndex(getPosition2()));
        setIndex(omitEnd ? min(index, endIndex) : index);
        callback && callback();
      });
    }
    function parse(control) {
      var index = currIndex;
      if (isString2(control)) {
        var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
        if (indicator === "+" || indicator === "-") {
          index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
        } else if (indicator === ">") {
          index = number ? toIndex(+number) : getNext(true);
        } else if (indicator === "<") {
          index = getPrev(true);
        }
      } else {
        index = isLoop ? control : clamp3(control, 0, endIndex);
      }
      return index;
    }
    function getAdjacent(prev, destination) {
      var number = perMove || (hasFocus() ? 1 : perPage);
      var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
      if (dest === -1 && isSlide) {
        if (!approximatelyEqual(getPosition2(), getLimit(!prev), 1)) {
          return prev ? 0 : endIndex;
        }
      }
      return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
      if (isEnough() || hasFocus()) {
        var index = computeMovableDestIndex(dest);
        if (index !== dest) {
          from = dest;
          dest = index;
          snapPage = false;
        }
        if (dest < 0 || dest > endIndex) {
          if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
            dest = toIndex(toPage(dest));
          } else {
            if (isLoop) {
              dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
            } else if (options.rewind) {
              dest = dest < 0 ? endIndex : 0;
            } else {
              dest = -1;
            }
          }
        } else {
          if (snapPage && dest !== from) {
            dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
          }
        }
      } else {
        dest = -1;
      }
      return dest;
    }
    function computeMovableDestIndex(dest) {
      if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
        var position = getPosition2();
        while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
          dest < currIndex ? --dest : ++dest;
        }
      }
      return dest;
    }
    function loop(index) {
      return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
      var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
      while (omitEnd && end-- > 0) {
        if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
          end++;
          break;
        }
      }
      return clamp3(end, 0, slideCount - 1);
    }
    function toIndex(page) {
      return clamp3(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
      return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
      var closest2 = Move2.toIndex(destination);
      return isSlide ? clamp3(closest2, 0, endIndex) : closest2;
    }
    function setIndex(index) {
      if (index !== currIndex) {
        prevIndex = currIndex;
        currIndex = index;
      }
    }
    function getIndex(prev) {
      return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
      return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
      return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
    }
    return {
      mount,
      go,
      scroll: scroll2,
      getNext,
      getPrev,
      getAdjacent,
      getEnd,
      setIndex,
      getIndex,
      toIndex,
      toPage,
      toDest,
      hasFocus,
      isBusy
    };
  }
  var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
  var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
  var SIZE = 40;
  function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var placeholder = Elements2.arrows, track = Elements2.track;
    var wrapper = placeholder;
    var prev = Elements2.prev;
    var next = Elements2.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
      init4();
      on(EVENT_UPDATED, remount);
    }
    function remount() {
      destroy();
      mount();
    }
    function init4() {
      var enabled = options.arrows;
      if (enabled && !(prev && next)) {
        createArrows();
      }
      if (prev && next) {
        assign(arrows, {
          prev,
          next
        });
        display(wrapper, enabled ? "" : "none");
        addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
        if (enabled) {
          listen();
          update();
          setAttribute([prev, next], ARIA_CONTROLS, track.id);
          emit(EVENT_ARROWS_MOUNTED, prev, next);
        }
      }
    }
    function destroy() {
      event.destroy();
      removeClass(wrapper, wrapperClasses);
      if (created) {
        remove2(placeholder ? [prev, next] : wrapper);
        prev = next = null;
      } else {
        removeAttribute([prev, next], ALL_ATTRIBUTES);
      }
    }
    function listen() {
      on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
      bind(next, "click", apply(go, ">"));
      bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
      Controller2.go(control, true);
    }
    function createArrows() {
      wrapper = placeholder || create("div", classes.arrows);
      prev = createArrow(true);
      next = createArrow(false);
      created = true;
      append(wrapper, [prev, next]);
      !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
      var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
      return parseHtml(arrow);
    }
    function update() {
      if (prev && next) {
        var index = Splide2.index;
        var prevIndex = Controller2.getPrev();
        var nextIndex = Controller2.getNext();
        var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
        var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
        prev.disabled = prevIndex < 0;
        next.disabled = nextIndex < 0;
        setAttribute(prev, ARIA_LABEL, prevLabel);
        setAttribute(next, ARIA_LABEL, nextLabel);
        emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
      }
    }
    return {
      arrows,
      mount,
      destroy,
      update
    };
  }
  var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
  function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
      if (autoplay) {
        listen();
        toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
        stopped || play();
        update();
      }
    }
    function listen() {
      if (options.pauseOnHover) {
        bind(root, "mouseenter mouseleave", function(e) {
          hovered = e.type === "mouseenter";
          autoToggle();
        });
      }
      if (options.pauseOnFocus) {
        bind(root, "focusin focusout", function(e) {
          focused = e.type === "focusin";
          autoToggle();
        });
      }
      if (toggle) {
        bind(toggle, "click", function() {
          stopped ? play() : pause(true);
        });
      }
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
      on(EVENT_MOVE, onMove);
    }
    function play() {
      if (isPaused() && Components2.Slides.isEnough()) {
        interval.start(!options.resetProgress);
        focused = hovered = stopped = false;
        update();
        emit(EVENT_AUTOPLAY_PLAY);
      }
    }
    function pause(stop) {
      if (stop === void 0) {
        stop = true;
      }
      stopped = !!stop;
      update();
      if (!isPaused()) {
        interval.pause();
        emit(EVENT_AUTOPLAY_PAUSE);
      }
    }
    function autoToggle() {
      if (!stopped) {
        hovered || focused ? pause(false) : play();
      }
    }
    function update() {
      if (toggle) {
        toggleClass(toggle, CLASS_ACTIVE, !stopped);
        setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
      }
    }
    function onAnimationFrame(rate) {
      var bar = Elements2.bar;
      bar && style(bar, "width", rate * 100 + "%");
      emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
      var Slide2 = Components2.Slides.getAt(index);
      interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
      mount,
      destroy: interval.cancel,
      play,
      pause,
      isPaused
    };
  }
  function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
      if (options.cover) {
        on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
        on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
      }
    }
    function cover(cover2) {
      Components2.Slides.forEach(function(Slide2) {
        var img = child(Slide2.container || Slide2.slide, "img");
        if (img && img.src) {
          toggle(cover2, img, Slide2);
        }
      });
    }
    function toggle(cover2, img, Slide2) {
      Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
      display(img, cover2 ? "none" : "");
    }
    return {
      mount,
      destroy: apply(cover, false)
    };
  }
  var BOUNCE_DIFF_THRESHOLD = 10;
  var BOUNCE_DURATION = 600;
  var FRICTION_FACTOR = 0.6;
  var BASE_VELOCITY = 1.5;
  var MIN_DURATION = 800;
  function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set2 = Splide2.state.set;
    var Move2 = Components2.Move;
    var getPosition2 = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
      on(EVENT_MOVE, clear);
      on([EVENT_UPDATED, EVENT_REFRESH], cancel);
    }
    function scroll2(destination, duration, snap3, onScrolled, noConstrain) {
      var from = getPosition2();
      clear();
      if (snap3 && (!isSlide || !exceededLimit())) {
        var size = Components2.Layout.sliderSize();
        var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
        destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
      }
      var noDistance = approximatelyEqual(from, destination, 1);
      friction = 1;
      duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
      callback = onScrolled;
      interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
      set2(SCROLLING);
      emit(EVENT_SCROLL);
      interval.start();
    }
    function onEnd() {
      set2(IDLE);
      callback && callback();
      emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
      var position = getPosition2();
      var target = from + (to - from) * easing2(rate);
      var diff = (target - position) * friction;
      translate(position + diff);
      if (isSlide && !noConstrain && exceededLimit()) {
        friction *= FRICTION_FACTOR;
        if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
          scroll2(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
      }
    }
    function clear() {
      if (interval) {
        interval.cancel();
      }
    }
    function cancel() {
      if (interval && !interval.isPaused()) {
        clear();
        onEnd();
      }
    }
    function easing2(t) {
      var easingFunc = options.easingFunc;
      return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
      mount,
      destroy: clear,
      scroll: scroll2,
      cancel
    };
  }
  var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
  };
  function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition2 = Move2.getPosition, exceededLimit = Move2.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
      bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
      bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
      bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
      bind(track, "click", onClick, {
        capture: true
      });
      bind(track, "dragstart", prevent);
      on([EVENT_MOUNTED, EVENT_UPDATED], init4);
    }
    function init4() {
      var drag = options.drag;
      disable(!drag);
      isFree = drag === "free";
    }
    function onPointerDown(e) {
      clickPrevented = false;
      if (!disabled) {
        var isTouch = isTouchEvent(e);
        if (isDraggable(e.target) && (isTouch || !e.button)) {
          if (!Controller2.isBusy()) {
            target = isTouch ? track : window;
            dragging = state.is([MOVING, SCROLLING]);
            prevBaseEvent = null;
            bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
            bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
            Move2.cancel();
            Scroll2.cancel();
            save(e);
          } else {
            prevent(e, true);
          }
        }
      }
    }
    function onPointerMove(e) {
      if (!state.is(DRAGGING)) {
        state.set(DRAGGING);
        emit(EVENT_DRAG);
      }
      if (e.cancelable) {
        if (dragging) {
          Move2.translate(basePosition + constrain(diffCoord(e)));
          var expired = diffTime(e) > LOG_INTERVAL;
          var hasExceeded = exceeded !== (exceeded = exceededLimit());
          if (expired || hasExceeded) {
            save(e);
          }
          clickPrevented = true;
          emit(EVENT_DRAGGING);
          prevent(e);
        } else if (isSliderDirection(e)) {
          dragging = shouldStart(e);
          prevent(e);
        }
      }
    }
    function onPointerUp(e) {
      if (state.is(DRAGGING)) {
        state.set(IDLE);
        emit(EVENT_DRAGGED);
      }
      if (dragging) {
        move(e);
        prevent(e);
      }
      unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
      unbind(target, POINTER_UP_EVENTS, onPointerUp);
      dragging = false;
    }
    function onClick(e) {
      if (!disabled && clickPrevented) {
        prevent(e, true);
      }
    }
    function save(e) {
      prevBaseEvent = baseEvent;
      baseEvent = e;
      basePosition = getPosition2();
    }
    function move(e) {
      var velocity = computeVelocity(e);
      var destination = computeDestination(velocity);
      var rewind = options.rewind && options.rewindByDrag;
      reduce(false);
      if (isFree) {
        Controller2.scroll(destination, 0, options.snap);
      } else if (Splide2.is(FADE)) {
        Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
      } else if (Splide2.is(SLIDE) && exceeded && rewind) {
        Controller2.go(exceededLimit(true) ? ">" : "<");
      } else {
        Controller2.go(Controller2.toDest(destination), true);
      }
      reduce(true);
    }
    function shouldStart(e) {
      var thresholds = options.dragMinThreshold;
      var isObj = isObject2(thresholds);
      var mouse = isObj && thresholds.mouse || 0;
      var touch = (isObj ? thresholds.touch : +thresholds) || 10;
      return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
      return abs(diffCoord(e)) > abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
      if (Splide2.is(LOOP) || !exceeded) {
        var time = diffTime(e);
        if (time && time < LOG_INTERVAL) {
          return diffCoord(e) / time;
        }
      }
      return 0;
    }
    function computeDestination(velocity) {
      return getPosition2() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
      return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
      return timeOf(e) - timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
      return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
      return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
      return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
      var noDrag = options.noDrag;
      return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e) {
      return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
      return dragging;
    }
    function disable(value) {
      disabled = value;
    }
    return {
      mount,
      disable,
      isDragging
    };
  }
  var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
  };
  function normalizeKey(key) {
    key = isString2(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
  }
  var KEYBOARD_EVENT = "keydown";
  function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
      init4();
      on(EVENT_UPDATED, destroy);
      on(EVENT_UPDATED, init4);
      on(EVENT_MOVE, onMove);
    }
    function init4() {
      var keyboard = options.keyboard;
      if (keyboard) {
        target = keyboard === "global" ? window : root;
        bind(target, KEYBOARD_EVENT, onKeydown);
      }
    }
    function destroy() {
      unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
      disabled = value;
    }
    function onMove() {
      var _disabled = disabled;
      disabled = true;
      nextTick(function() {
        disabled = _disabled;
      });
    }
    function onKeydown(e) {
      if (!disabled) {
        var key = normalizeKey(e);
        if (key === resolve(ARROW_LEFT)) {
          Splide2.go("<");
        } else if (key === resolve(ARROW_RIGHT)) {
          Splide2.go(">");
        }
      }
    }
    return {
      mount,
      destroy,
      disable
    };
  }
  var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
  var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
  var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
  function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [EVENT_MOVED, EVENT_SCROLLED];
    var entries2 = [];
    function mount() {
      if (options.lazyLoad) {
        init4();
        on(EVENT_REFRESH, init4);
      }
    }
    function init4() {
      empty(entries2);
      register();
      if (isSequential) {
        loadNext();
      } else {
        off(events);
        on(events, check);
        check();
      }
    }
    function register() {
      Components2.Slides.forEach(function(Slide2) {
        queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
          var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
          var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
          if (src !== img.src || srcset !== img.srcset) {
            var className = options.classes.spinner;
            var parent = img.parentElement;
            var spinner = child(parent, "." + className) || create("span", className, parent);
            entries2.push([img, Slide2, spinner]);
            img.src || display(img, "none");
          }
        });
      });
    }
    function check() {
      entries2 = entries2.filter(function(data) {
        var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
        return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
      });
      entries2.length || off(events);
    }
    function load(data) {
      var img = data[0];
      addClass(data[1].slide, CLASS_LOADING);
      bind(img, "load error", apply(onLoad, data));
      setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
      setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
      removeAttribute(img, SRC_DATA_ATTRIBUTE);
      removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
      var img = data[0], Slide2 = data[1];
      removeClass(Slide2.slide, CLASS_LOADING);
      if (e.type !== "error") {
        remove2(data[2]);
        display(img, "");
        emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
        emit(EVENT_RESIZE);
      }
      isSequential && loadNext();
    }
    function loadNext() {
      entries2.length && load(entries2.shift());
    }
    return {
      mount,
      destroy: apply(empty, entries2),
      check
    };
  }
  function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements2.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
      destroy();
      on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
      var enabled = options.pagination;
      placeholder && display(placeholder, enabled ? "" : "none");
      if (enabled) {
        on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
        createPagination();
        update();
        emit(EVENT_PAGINATION_MOUNTED, {
          list,
          items
        }, getAt(Splide2.index));
      }
    }
    function destroy() {
      if (list) {
        remove2(placeholder ? slice(list.children) : list);
        removeClass(list, paginationClasses);
        empty(items);
        list = null;
      }
      event.destroy();
    }
    function createPagination() {
      var length = Splide2.length;
      var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
      var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
      list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
      addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
      setAttribute(list, ROLE, "tablist");
      setAttribute(list, ARIA_LABEL, i18n.select);
      setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
      for (var i2 = 0; i2 < max2; i2++) {
        var li = create("li", null, list);
        var button = create("button", {
          class: classes.page,
          type: "button"
        }, li);
        var controls = Slides2.getIn(i2).map(function(Slide2) {
          return Slide2.slide.id;
        });
        var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
        bind(button, "click", apply(onClick, i2));
        if (options.paginationKeyboard) {
          bind(button, "keydown", apply(onKeydown, i2));
        }
        setAttribute(li, ROLE, "presentation");
        setAttribute(button, ROLE, "tab");
        setAttribute(button, ARIA_CONTROLS, controls.join(" "));
        setAttribute(button, ARIA_LABEL, format(text, i2 + 1));
        setAttribute(button, TAB_INDEX, -1);
        items.push({
          li,
          button,
          page: i2
        });
      }
    }
    function onClick(page) {
      go(">" + page, true);
    }
    function onKeydown(page, e) {
      var length = items.length;
      var key = normalizeKey(e);
      var dir = getDirection();
      var nextPage = -1;
      if (key === resolve(ARROW_RIGHT, false, dir)) {
        nextPage = ++page % length;
      } else if (key === resolve(ARROW_LEFT, false, dir)) {
        nextPage = (--page + length) % length;
      } else if (key === "Home") {
        nextPage = 0;
      } else if (key === "End") {
        nextPage = length - 1;
      }
      var item = items[nextPage];
      if (item) {
        focus(item.button);
        go(">" + nextPage);
        prevent(e, true);
      }
    }
    function getDirection() {
      return options.paginationDirection || options.direction;
    }
    function getAt(index) {
      return items[Controller2.toPage(index)];
    }
    function update() {
      var prev = getAt(getIndex(true));
      var curr = getAt(getIndex());
      if (prev) {
        var button = prev.button;
        removeClass(button, CLASS_ACTIVE);
        removeAttribute(button, ARIA_SELECTED);
        setAttribute(button, TAB_INDEX, -1);
      }
      if (curr) {
        var _button = curr.button;
        addClass(_button, CLASS_ACTIVE);
        setAttribute(_button, ARIA_SELECTED, true);
        setAttribute(_button, TAB_INDEX, "");
      }
      emit(EVENT_PAGINATION_UPDATED, {
        list,
        items
      }, prev, curr);
    }
    return {
      items,
      mount,
      destroy,
      getAt,
      update
    };
  }
  var TRIGGER_KEYS = [" ", "Enter"];
  function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
      Splide2.splides.forEach(function(target) {
        if (!target.isParent) {
          sync(Splide2, target.splide);
          sync(target.splide, Splide2);
        }
      });
      if (isNavigation) {
        navigate();
      }
    }
    function destroy() {
      events.forEach(function(event) {
        event.destroy();
      });
      empty(events);
    }
    function remount() {
      destroy();
      mount();
    }
    function sync(splide, target) {
      var event = EventInterface(splide);
      event.on(EVENT_MOVE, function(index, prev, dest) {
        target.go(target.is(LOOP) ? dest : index);
      });
      events.push(event);
    }
    function navigate() {
      var event = EventInterface(Splide2);
      var on = event.on;
      on(EVENT_CLICK, onClick);
      on(EVENT_SLIDE_KEYDOWN, onKeydown);
      on([EVENT_MOUNTED, EVENT_UPDATED], update);
      events.push(event);
      event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
      setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide2) {
      Splide2.go(Slide2.index);
    }
    function onKeydown(Slide2, e) {
      if (includes(TRIGGER_KEYS, normalizeKey(e))) {
        onClick(Slide2);
        prevent(e);
      }
    }
    return {
      setup: apply(Components2.Media.set, {
        slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
      }, true),
      mount,
      destroy,
      remount
    };
  }
  function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
      if (options.wheel) {
        bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
      }
    }
    function onWheel(e) {
      if (e.cancelable) {
        var deltaY = e.deltaY;
        var backwards = deltaY < 0;
        var timeStamp = timeOf(e);
        var _min = options.wheelMinThreshold || 0;
        var sleep = options.wheelSleep || 0;
        if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
          Splide2.go(backwards ? "<" : ">");
          lastTime = timeStamp;
        }
        shouldPrevent(backwards) && prevent(e);
      }
    }
    function shouldPrevent(backwards) {
      return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
      mount
    };
  }
  var SR_REMOVAL_DELAY = 90;
  function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
      if (enabled) {
        disable(!Components2.Autoplay.isPaused());
        setAttribute(track, ARIA_ATOMIC, true);
        sr.textContent = "\u2026";
        on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
        on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
        on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
      }
    }
    function toggle(active) {
      setAttribute(track, ARIA_BUSY, active);
      if (active) {
        append(track, sr);
        interval.start();
      } else {
        remove2(sr);
        interval.cancel();
      }
    }
    function destroy() {
      removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
      remove2(sr);
    }
    function disable(disabled) {
      if (enabled) {
        setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
      }
    }
    return {
      mount,
      disable,
      destroy
    };
  }
  var ComponentConstructors = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Media,
    Direction,
    Elements,
    Slides,
    Layout,
    Clones,
    Move,
    Controller,
    Arrows,
    Autoplay,
    Cover,
    Scroll,
    Drag,
    Keyboard,
    LazyLoad,
    Pagination,
    Sync,
    Wheel,
    Live
  });
  var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
  };
  var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause"
    }
  };
  function Fade(Splide2, Components2, options) {
    var Slides2 = Components2.Slides;
    function mount() {
      EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init4);
    }
    function init4() {
      Slides2.forEach(function(Slide2) {
        Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
      });
    }
    function start(index, done) {
      Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
      nextTick(done);
    }
    return {
      mount,
      start,
      cancel: noop
    };
  }
  function Slide(Splide2, Components2, options) {
    var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
      EventInterface(Splide2).bind(list, "transitionend", function(e) {
        if (e.target === list && endCallback) {
          cancel();
          endCallback();
        }
      });
    }
    function start(index, done) {
      var destination = Move2.toPosition(index, true);
      var position = Move2.getPosition();
      var speed = getSpeed(index);
      if (abs(destination - position) >= 1 && speed >= 1) {
        if (options.useScroll) {
          Scroll2.scroll(destination, speed, false, done);
        } else {
          transition("transform " + speed + "ms " + options.easing);
          Move2.translate(destination, true);
          endCallback = done;
        }
      } else {
        Move2.jump(index);
        done();
      }
    }
    function cancel() {
      transition("");
      Scroll2.cancel();
    }
    function getSpeed(index) {
      var rewindSpeed = options.rewindSpeed;
      if (Splide2.is(SLIDE) && rewindSpeed) {
        var prev = Controller2.getIndex(true);
        var end = Controller2.getEnd();
        if (prev === 0 && index >= end || prev >= end && index === 0) {
          return rewindSpeed;
        }
      }
      return options.speed;
    }
    return {
      mount,
      start,
      cancel
    };
  }
  var _Splide = /* @__PURE__ */ function() {
    function _Splide2(target, options) {
      this.event = EventInterface();
      this.Components = {};
      this.state = State(CREATED);
      this.splides = [];
      this._o = {};
      this._E = {};
      var root = isString2(target) ? query(document, target) : target;
      assert(root, root + " is invalid.");
      this.root = root;
      options = merge({
        label: getAttribute(root, ARIA_LABEL) || "",
        labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
      }, DEFAULTS, _Splide2.defaults, options || {});
      try {
        merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
      } catch (e) {
        assert(false, "Invalid JSON");
      }
      this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide2.prototype;
    _proto.mount = function mount(Extensions, Transition) {
      var _this = this;
      var state = this.state, Components2 = this.Components;
      assert(state.is([CREATED, DESTROYED]), "Already mounted!");
      state.set(CREATED);
      this._C = Components2;
      this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
      this._E = Extensions || this._E;
      var Constructors = assign({}, ComponentConstructors, this._E, {
        Transition: this._T
      });
      forOwn(Constructors, function(Component, key) {
        var component = Component(_this, Components2, _this._o);
        Components2[key] = component;
        component.setup && component.setup();
      });
      forOwn(Components2, function(component) {
        component.mount && component.mount();
      });
      this.emit(EVENT_MOUNTED);
      addClass(this.root, CLASS_INITIALIZED);
      state.set(IDLE);
      this.emit(EVENT_READY);
      return this;
    };
    _proto.sync = function sync(splide) {
      this.splides.push({
        splide
      });
      splide.splides.push({
        splide: this,
        isParent: true
      });
      if (this.state.is(IDLE)) {
        this._C.Sync.remount();
        splide.Components.Sync.remount();
      }
      return this;
    };
    _proto.go = function go(control) {
      this._C.Controller.go(control);
      return this;
    };
    _proto.on = function on(events, callback) {
      this.event.on(events, callback);
      return this;
    };
    _proto.off = function off(events) {
      this.event.off(events);
      return this;
    };
    _proto.emit = function emit(event) {
      var _this$event;
      (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
      return this;
    };
    _proto.add = function add(slides, index) {
      this._C.Slides.add(slides, index);
      return this;
    };
    _proto.remove = function remove3(matcher) {
      this._C.Slides.remove(matcher);
      return this;
    };
    _proto.is = function is(type) {
      return this._o.type === type;
    };
    _proto.refresh = function refresh() {
      this.emit(EVENT_REFRESH);
      return this;
    };
    _proto.destroy = function destroy(completely) {
      if (completely === void 0) {
        completely = true;
      }
      var event = this.event, state = this.state;
      if (state.is(CREATED)) {
        EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
      } else {
        forOwn(this._C, function(component) {
          component.destroy && component.destroy(completely);
        }, true);
        event.emit(EVENT_DESTROY);
        event.destroy();
        completely && empty(this.splides);
        state.set(DESTROYED);
      }
      return this;
    };
    _createClass3(_Splide2, [{
      key: "options",
      get: function get2() {
        return this._o;
      },
      set: function set2(options) {
        this._C.Media.set(options, true, true);
      }
    }, {
      key: "length",
      get: function get2() {
        return this._C.Slides.getLength(true);
      }
    }, {
      key: "index",
      get: function get2() {
        return this._C.Controller.getIndex();
      }
    }]);
    return _Splide2;
  }();
  var Splide = _Splide;
  Splide.defaults = {};
  Splide.STATES = STATES;

  // src/utils/home-carrosel.ts
  var homeCarrosel = () => {
    const splide = new Splide("#slider1", {
      perPage: 3,
      fixedWidth: 385,
      // Uncomment this line
      fixedHeight: 414,
      // Uncomment this line
      isNavigation: true,
      // Uncomment this line
      gap: 23,
      pagination: false,
      cover: true,
      // Uncomment this line
      dragMinThreshold: {
        mouse: 4,
        touch: 10
      },
      type: "slide",
      drag: "free",
      snap: true,
      // Uncomment this line
      // perPage: 3, // You have perPage: 3 already defined above, no need to duplicate it.
      breakpoints: {
        768: {
          fixedWidth: 260
        }
      }
    });
    splide.mount();
  };

  // src/index.ts
  smoothScroll();
  mainNavbar();
  homeCarrosel();
  initializeButtonEffect();
  gsapWithCSS.registerPlugin(Flip, ScrollTrigger2);
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)
*/
//# sourceMappingURL=index.js.map
