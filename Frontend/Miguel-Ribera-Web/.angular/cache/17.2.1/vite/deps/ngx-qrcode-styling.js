import {
  Component,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-PKH7FTTY.js";
import {
  AsyncSubject
} from "./chunk-WSA2QMXP.js";
import {
  __async,
  __commonJS,
  __forAwait,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-77MI3L3A.js";

// node_modules/qr-code-styling/lib/qr-code-styling.js
var require_qr_code_styling = __commonJS({
  "node_modules/qr-code-styling/lib/qr-code-styling.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QRCodeStyling = e() : t.QRCodeStyling = e();
    }(self, function() {
      return (() => {
        var t = { 192: (t2, e2) => {
          var r2, n, o = function() {
            var t3 = function(t4, e4) {
              var r4 = t4, n3 = a[e4], o3 = null, i2 = 0, u2 = null, v2 = [], w2 = {}, m = function(t5, e5) {
                o3 = function(t6) {
                  for (var e6 = new Array(t6), r5 = 0; r5 < t6; r5 += 1) {
                    e6[r5] = new Array(t6);
                    for (var n4 = 0; n4 < t6; n4 += 1)
                      e6[r5][n4] = null;
                  }
                  return e6;
                }(i2 = 4 * r4 + 17), b(0, 0), b(i2 - 7, 0), b(0, i2 - 7), x(), _(), M(t5, e5), r4 >= 7 && S(t5), null == u2 && (u2 = A(r4, n3, v2)), C(u2, e5);
              }, b = function(t5, e5) {
                for (var r5 = -1; r5 <= 7; r5 += 1)
                  if (!(t5 + r5 <= -1 || i2 <= t5 + r5))
                    for (var n4 = -1; n4 <= 7; n4 += 1)
                      e5 + n4 <= -1 || i2 <= e5 + n4 || (o3[t5 + r5][e5 + n4] = 0 <= r5 && r5 <= 6 && (0 == n4 || 6 == n4) || 0 <= n4 && n4 <= 6 && (0 == r5 || 6 == r5) || 2 <= r5 && r5 <= 4 && 2 <= n4 && n4 <= 4);
              }, _ = function() {
                for (var t5 = 8; t5 < i2 - 8; t5 += 1)
                  null == o3[t5][6] && (o3[t5][6] = t5 % 2 == 0);
                for (var e5 = 8; e5 < i2 - 8; e5 += 1)
                  null == o3[6][e5] && (o3[6][e5] = e5 % 2 == 0);
              }, x = function() {
                for (var t5 = s.getPatternPosition(r4), e5 = 0; e5 < t5.length; e5 += 1)
                  for (var n4 = 0; n4 < t5.length; n4 += 1) {
                    var i3 = t5[e5], a2 = t5[n4];
                    if (null == o3[i3][a2])
                      for (var u3 = -2; u3 <= 2; u3 += 1)
                        for (var h2 = -2; h2 <= 2; h2 += 1)
                          o3[i3 + u3][a2 + h2] = -2 == u3 || 2 == u3 || -2 == h2 || 2 == h2 || 0 == u3 && 0 == h2;
                  }
              }, S = function(t5) {
                for (var e5 = s.getBCHTypeNumber(r4), n4 = 0; n4 < 18; n4 += 1) {
                  var a2 = !t5 && 1 == (e5 >> n4 & 1);
                  o3[Math.floor(n4 / 3)][n4 % 3 + i2 - 8 - 3] = a2;
                }
                for (n4 = 0; n4 < 18; n4 += 1)
                  a2 = !t5 && 1 == (e5 >> n4 & 1), o3[n4 % 3 + i2 - 8 - 3][Math.floor(n4 / 3)] = a2;
              }, M = function(t5, e5) {
                for (var r5 = n3 << 3 | e5, a2 = s.getBCHTypeInfo(r5), u3 = 0; u3 < 15; u3 += 1) {
                  var h2 = !t5 && 1 == (a2 >> u3 & 1);
                  u3 < 6 ? o3[u3][8] = h2 : u3 < 8 ? o3[u3 + 1][8] = h2 : o3[i2 - 15 + u3][8] = h2;
                }
                for (u3 = 0; u3 < 15; u3 += 1)
                  h2 = !t5 && 1 == (a2 >> u3 & 1), u3 < 8 ? o3[8][i2 - u3 - 1] = h2 : u3 < 9 ? o3[8][15 - u3 - 1 + 1] = h2 : o3[8][15 - u3 - 1] = h2;
                o3[i2 - 8][8] = !t5;
              }, C = function(t5, e5) {
                for (var r5 = -1, n4 = i2 - 1, a2 = 7, u3 = 0, h2 = s.getMaskFunction(e5), c2 = i2 - 1; c2 > 0; c2 -= 2)
                  for (6 == c2 && (c2 -= 1); ; ) {
                    for (var l2 = 0; l2 < 2; l2 += 1)
                      if (null == o3[n4][c2 - l2]) {
                        var d2 = false;
                        u3 < t5.length && (d2 = 1 == (t5[u3] >>> a2 & 1)), h2(n4, c2 - l2) && (d2 = !d2), o3[n4][c2 - l2] = d2, -1 == (a2 -= 1) && (u3 += 1, a2 = 7);
                      }
                    if ((n4 += r5) < 0 || i2 <= n4) {
                      n4 -= r5, r5 = -r5;
                      break;
                    }
                  }
              }, A = function(t5, e5, r5) {
                for (var n4 = c.getRSBlocks(t5, e5), o4 = l(), i3 = 0; i3 < r5.length; i3 += 1) {
                  var a2 = r5[i3];
                  o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
                }
                var u3 = 0;
                for (i3 = 0; i3 < n4.length; i3 += 1)
                  u3 += n4[i3].dataCount;
                if (o4.getLengthInBits() > 8 * u3)
                  throw "code length overflow. (" + o4.getLengthInBits() + ">" + 8 * u3 + ")";
                for (o4.getLengthInBits() + 4 <= 8 * u3 && o4.put(0, 4); o4.getLengthInBits() % 8 != 0; )
                  o4.putBit(false);
                for (; !(o4.getLengthInBits() >= 8 * u3 || (o4.put(236, 8), o4.getLengthInBits() >= 8 * u3)); )
                  o4.put(17, 8);
                return function(t6, e6) {
                  for (var r6 = 0, n5 = 0, o5 = 0, i4 = new Array(e6.length), a3 = new Array(e6.length), u4 = 0; u4 < e6.length; u4 += 1) {
                    var c2 = e6[u4].dataCount, l2 = e6[u4].totalCount - c2;
                    n5 = Math.max(n5, c2), o5 = Math.max(o5, l2), i4[u4] = new Array(c2);
                    for (var d2 = 0; d2 < i4[u4].length; d2 += 1)
                      i4[u4][d2] = 255 & t6.getBuffer()[d2 + r6];
                    r6 += c2;
                    var f2 = s.getErrorCorrectPolynomial(l2), g2 = h(i4[u4], f2.getLength() - 1).mod(f2);
                    for (a3[u4] = new Array(f2.getLength() - 1), d2 = 0; d2 < a3[u4].length; d2 += 1) {
                      var p2 = d2 + g2.getLength() - a3[u4].length;
                      a3[u4][d2] = p2 >= 0 ? g2.getAt(p2) : 0;
                    }
                  }
                  var v3 = 0;
                  for (d2 = 0; d2 < e6.length; d2 += 1)
                    v3 += e6[d2].totalCount;
                  var w3 = new Array(v3), y2 = 0;
                  for (d2 = 0; d2 < n5; d2 += 1)
                    for (u4 = 0; u4 < e6.length; u4 += 1)
                      d2 < i4[u4].length && (w3[y2] = i4[u4][d2], y2 += 1);
                  for (d2 = 0; d2 < o5; d2 += 1)
                    for (u4 = 0; u4 < e6.length; u4 += 1)
                      d2 < a3[u4].length && (w3[y2] = a3[u4][d2], y2 += 1);
                  return w3;
                }(o4, n4);
              };
              w2.addData = function(t5, e5) {
                var r5 = null;
                switch (e5 = e5 || "Byte") {
                  case "Numeric":
                    r5 = d(t5);
                    break;
                  case "Alphanumeric":
                    r5 = f(t5);
                    break;
                  case "Byte":
                    r5 = g(t5);
                    break;
                  case "Kanji":
                    r5 = p(t5);
                    break;
                  default:
                    throw "mode:" + e5;
                }
                v2.push(r5), u2 = null;
              }, w2.isDark = function(t5, e5) {
                if (t5 < 0 || i2 <= t5 || e5 < 0 || i2 <= e5)
                  throw t5 + "," + e5;
                return o3[t5][e5];
              }, w2.getModuleCount = function() {
                return i2;
              }, w2.make = function() {
                if (r4 < 1) {
                  for (var t5 = 1; t5 < 40; t5++) {
                    for (var e5 = c.getRSBlocks(t5, n3), o4 = l(), i3 = 0; i3 < v2.length; i3++) {
                      var a2 = v2[i3];
                      o4.put(a2.getMode(), 4), o4.put(a2.getLength(), s.getLengthInBits(a2.getMode(), t5)), a2.write(o4);
                    }
                    var u3 = 0;
                    for (i3 = 0; i3 < e5.length; i3++)
                      u3 += e5[i3].dataCount;
                    if (o4.getLengthInBits() <= 8 * u3)
                      break;
                  }
                  r4 = t5;
                }
                m(false, function() {
                  for (var t6 = 0, e6 = 0, r5 = 0; r5 < 8; r5 += 1) {
                    m(true, r5);
                    var n4 = s.getLostPoint(w2);
                    (0 == r5 || t6 > n4) && (t6 = n4, e6 = r5);
                  }
                  return e6;
                }());
              }, w2.createTableTag = function(t5, e5) {
                t5 = t5 || 2;
                var r5 = "";
                r5 += '<table style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: " + (e5 = void 0 === e5 ? 4 * t5 : e5) + "px;", r5 += '">', r5 += "<tbody>";
                for (var n4 = 0; n4 < w2.getModuleCount(); n4 += 1) {
                  r5 += "<tr>";
                  for (var o4 = 0; o4 < w2.getModuleCount(); o4 += 1)
                    r5 += '<td style="', r5 += " border-width: 0px; border-style: none;", r5 += " border-collapse: collapse;", r5 += " padding: 0px; margin: 0px;", r5 += " width: " + t5 + "px;", r5 += " height: " + t5 + "px;", r5 += " background-color: ", r5 += w2.isDark(n4, o4) ? "#000000" : "#ffffff", r5 += ";", r5 += '"/>';
                  r5 += "</tr>";
                }
                return (r5 += "</tbody>") + "</table>";
              }, w2.createSvgTag = function(t5, e5, r5, n4) {
                var o4 = {};
                "object" == typeof arguments[0] && (t5 = (o4 = arguments[0]).cellSize, e5 = o4.margin, r5 = o4.alt, n4 = o4.title), t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5, (r5 = "string" == typeof r5 ? { text: r5 } : r5 || {}).text = r5.text || null, r5.id = r5.text ? r5.id || "qrcode-description" : null, (n4 = "string" == typeof n4 ? { text: n4 } : n4 || {}).text = n4.text || null, n4.id = n4.text ? n4.id || "qrcode-title" : null;
                var i3, a2, s2, u3, h2 = w2.getModuleCount() * t5 + 2 * e5, c2 = "";
                for (u3 = "l" + t5 + ",0 0," + t5 + " -" + t5 + ",0 0,-" + t5 + "z ", c2 += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c2 += o4.scalable ? "" : ' width="' + h2 + 'px" height="' + h2 + 'px"', c2 += ' viewBox="0 0 ' + h2 + " " + h2 + '" ', c2 += ' preserveAspectRatio="xMinYMin meet"', c2 += n4.text || r5.text ? ' role="img" aria-labelledby="' + k([n4.id, r5.id].join(" ").trim()) + '"' : "", c2 += ">", c2 += n4.text ? '<title id="' + k(n4.id) + '">' + k(n4.text) + "</title>" : "", c2 += r5.text ? '<description id="' + k(r5.id) + '">' + k(r5.text) + "</description>" : "", c2 += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c2 += '<path d="', a2 = 0; a2 < w2.getModuleCount(); a2 += 1)
                  for (s2 = a2 * t5 + e5, i3 = 0; i3 < w2.getModuleCount(); i3 += 1)
                    w2.isDark(a2, i3) && (c2 += "M" + (i3 * t5 + e5) + "," + s2 + u3);
                return (c2 += '" stroke="transparent" fill="black"/>') + "</svg>";
              }, w2.createDataURL = function(t5, e5) {
                t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
                var r5 = w2.getModuleCount() * t5 + 2 * e5, n4 = e5, o4 = r5 - e5;
                return y(r5, r5, function(e6, r6) {
                  if (n4 <= e6 && e6 < o4 && n4 <= r6 && r6 < o4) {
                    var i3 = Math.floor((e6 - n4) / t5), a2 = Math.floor((r6 - n4) / t5);
                    return w2.isDark(a2, i3) ? 0 : 1;
                  }
                  return 1;
                });
              }, w2.createImgTag = function(t5, e5, r5) {
                t5 = t5 || 2, e5 = void 0 === e5 ? 4 * t5 : e5;
                var n4 = w2.getModuleCount() * t5 + 2 * e5, o4 = "";
                return o4 += "<img", o4 += ' src="', o4 += w2.createDataURL(t5, e5), o4 += '"', o4 += ' width="', o4 += n4, o4 += '"', o4 += ' height="', o4 += n4, o4 += '"', r5 && (o4 += ' alt="', o4 += k(r5), o4 += '"'), o4 + "/>";
              };
              var k = function(t5) {
                for (var e5 = "", r5 = 0; r5 < t5.length; r5 += 1) {
                  var n4 = t5.charAt(r5);
                  switch (n4) {
                    case "<":
                      e5 += "&lt;";
                      break;
                    case ">":
                      e5 += "&gt;";
                      break;
                    case "&":
                      e5 += "&amp;";
                      break;
                    case '"':
                      e5 += "&quot;";
                      break;
                    default:
                      e5 += n4;
                  }
                }
                return e5;
              };
              return w2.createASCII = function(t5, e5) {
                if ((t5 = t5 || 1) < 2)
                  return function(t6) {
                    t6 = void 0 === t6 ? 2 : t6;
                    var e6, r6, n5, o5, i4, a3 = 1 * w2.getModuleCount() + 2 * t6, s3 = t6, u4 = a3 - t6, h3 = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, c3 = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, l3 = "";
                    for (e6 = 0; e6 < a3; e6 += 2) {
                      for (n5 = Math.floor((e6 - s3) / 1), o5 = Math.floor((e6 + 1 - s3) / 1), r6 = 0; r6 < a3; r6 += 1)
                        i4 = "█", s3 <= r6 && r6 < u4 && s3 <= e6 && e6 < u4 && w2.isDark(n5, Math.floor((r6 - s3) / 1)) && (i4 = " "), s3 <= r6 && r6 < u4 && s3 <= e6 + 1 && e6 + 1 < u4 && w2.isDark(o5, Math.floor((r6 - s3) / 1)) ? i4 += " " : i4 += "█", l3 += t6 < 1 && e6 + 1 >= u4 ? c3[i4] : h3[i4];
                      l3 += "\n";
                    }
                    return a3 % 2 && t6 > 0 ? l3.substring(0, l3.length - a3 - 1) + Array(a3 + 1).join("▀") : l3.substring(0, l3.length - 1);
                  }(e5);
                t5 -= 1, e5 = void 0 === e5 ? 2 * t5 : e5;
                var r5, n4, o4, i3, a2 = w2.getModuleCount() * t5 + 2 * e5, s2 = e5, u3 = a2 - e5, h2 = Array(t5 + 1).join("██"), c2 = Array(t5 + 1).join("  "), l2 = "", d2 = "";
                for (r5 = 0; r5 < a2; r5 += 1) {
                  for (o4 = Math.floor((r5 - s2) / t5), d2 = "", n4 = 0; n4 < a2; n4 += 1)
                    i3 = 1, s2 <= n4 && n4 < u3 && s2 <= r5 && r5 < u3 && w2.isDark(o4, Math.floor((n4 - s2) / t5)) && (i3 = 0), d2 += i3 ? h2 : c2;
                  for (o4 = 0; o4 < t5; o4 += 1)
                    l2 += d2 + "\n";
                }
                return l2.substring(0, l2.length - 1);
              }, w2.renderTo2dContext = function(t5, e5) {
                e5 = e5 || 2;
                for (var r5 = w2.getModuleCount(), n4 = 0; n4 < r5; n4++)
                  for (var o4 = 0; o4 < r5; o4++)
                    t5.fillStyle = w2.isDark(n4, o4) ? "black" : "white", t5.fillRect(n4 * e5, o4 * e5, e5, e5);
              }, w2;
            };
            t3.stringToBytes = (t3.stringToBytesFuncs = { default: function(t4) {
              for (var e4 = [], r4 = 0; r4 < t4.length; r4 += 1) {
                var n3 = t4.charCodeAt(r4);
                e4.push(255 & n3);
              }
              return e4;
            } }).default, t3.createStringToBytes = function(t4, e4) {
              var r4 = function() {
                for (var r5 = w(t4), n4 = function() {
                  var t5 = r5.read();
                  if (-1 == t5)
                    throw "eof";
                  return t5;
                }, o3 = 0, i2 = {}; ; ) {
                  var a2 = r5.read();
                  if (-1 == a2)
                    break;
                  var s2 = n4(), u2 = n4() << 8 | n4();
                  i2[String.fromCharCode(a2 << 8 | s2)] = u2, o3 += 1;
                }
                if (o3 != e4)
                  throw o3 + " != " + e4;
                return i2;
              }(), n3 = "?".charCodeAt(0);
              return function(t5) {
                for (var e5 = [], o3 = 0; o3 < t5.length; o3 += 1) {
                  var i2 = t5.charCodeAt(o3);
                  if (i2 < 128)
                    e5.push(i2);
                  else {
                    var a2 = r4[t5.charAt(o3)];
                    "number" == typeof a2 ? (255 & a2) == a2 ? e5.push(a2) : (e5.push(a2 >>> 8), e5.push(255 & a2)) : e5.push(n3);
                  }
                }
                return e5;
              };
            };
            var e3, r3, n2, o2, i, a = { L: 1, M: 0, Q: 3, H: 2 }, s = (e3 = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], r3 = 1335, n2 = 7973, i = function(t4) {
              for (var e4 = 0; 0 != t4; )
                e4 += 1, t4 >>>= 1;
              return e4;
            }, (o2 = {}).getBCHTypeInfo = function(t4) {
              for (var e4 = t4 << 10; i(e4) - i(r3) >= 0; )
                e4 ^= r3 << i(e4) - i(r3);
              return 21522 ^ (t4 << 10 | e4);
            }, o2.getBCHTypeNumber = function(t4) {
              for (var e4 = t4 << 12; i(e4) - i(n2) >= 0; )
                e4 ^= n2 << i(e4) - i(n2);
              return t4 << 12 | e4;
            }, o2.getPatternPosition = function(t4) {
              return e3[t4 - 1];
            }, o2.getMaskFunction = function(t4) {
              switch (t4) {
                case 0:
                  return function(t5, e4) {
                    return (t5 + e4) % 2 == 0;
                  };
                case 1:
                  return function(t5, e4) {
                    return t5 % 2 == 0;
                  };
                case 2:
                  return function(t5, e4) {
                    return e4 % 3 == 0;
                  };
                case 3:
                  return function(t5, e4) {
                    return (t5 + e4) % 3 == 0;
                  };
                case 4:
                  return function(t5, e4) {
                    return (Math.floor(t5 / 2) + Math.floor(e4 / 3)) % 2 == 0;
                  };
                case 5:
                  return function(t5, e4) {
                    return t5 * e4 % 2 + t5 * e4 % 3 == 0;
                  };
                case 6:
                  return function(t5, e4) {
                    return (t5 * e4 % 2 + t5 * e4 % 3) % 2 == 0;
                  };
                case 7:
                  return function(t5, e4) {
                    return (t5 * e4 % 3 + (t5 + e4) % 2) % 2 == 0;
                  };
                default:
                  throw "bad maskPattern:" + t4;
              }
            }, o2.getErrorCorrectPolynomial = function(t4) {
              for (var e4 = h([1], 0), r4 = 0; r4 < t4; r4 += 1)
                e4 = e4.multiply(h([1, u.gexp(r4)], 0));
              return e4;
            }, o2.getLengthInBits = function(t4, e4) {
              if (1 <= e4 && e4 < 10)
                switch (t4) {
                  case 1:
                    return 10;
                  case 2:
                    return 9;
                  case 4:
                  case 8:
                    return 8;
                  default:
                    throw "mode:" + t4;
                }
              else if (e4 < 27)
                switch (t4) {
                  case 1:
                    return 12;
                  case 2:
                    return 11;
                  case 4:
                    return 16;
                  case 8:
                    return 10;
                  default:
                    throw "mode:" + t4;
                }
              else {
                if (!(e4 < 41))
                  throw "type:" + e4;
                switch (t4) {
                  case 1:
                    return 14;
                  case 2:
                    return 13;
                  case 4:
                    return 16;
                  case 8:
                    return 12;
                  default:
                    throw "mode:" + t4;
                }
              }
            }, o2.getLostPoint = function(t4) {
              for (var e4 = t4.getModuleCount(), r4 = 0, n3 = 0; n3 < e4; n3 += 1)
                for (var o3 = 0; o3 < e4; o3 += 1) {
                  for (var i2 = 0, a2 = t4.isDark(n3, o3), s2 = -1; s2 <= 1; s2 += 1)
                    if (!(n3 + s2 < 0 || e4 <= n3 + s2))
                      for (var u2 = -1; u2 <= 1; u2 += 1)
                        o3 + u2 < 0 || e4 <= o3 + u2 || 0 == s2 && 0 == u2 || a2 == t4.isDark(n3 + s2, o3 + u2) && (i2 += 1);
                  i2 > 5 && (r4 += 3 + i2 - 5);
                }
              for (n3 = 0; n3 < e4 - 1; n3 += 1)
                for (o3 = 0; o3 < e4 - 1; o3 += 1) {
                  var h2 = 0;
                  t4.isDark(n3, o3) && (h2 += 1), t4.isDark(n3 + 1, o3) && (h2 += 1), t4.isDark(n3, o3 + 1) && (h2 += 1), t4.isDark(n3 + 1, o3 + 1) && (h2 += 1), 0 != h2 && 4 != h2 || (r4 += 3);
                }
              for (n3 = 0; n3 < e4; n3 += 1)
                for (o3 = 0; o3 < e4 - 6; o3 += 1)
                  t4.isDark(n3, o3) && !t4.isDark(n3, o3 + 1) && t4.isDark(n3, o3 + 2) && t4.isDark(n3, o3 + 3) && t4.isDark(n3, o3 + 4) && !t4.isDark(n3, o3 + 5) && t4.isDark(n3, o3 + 6) && (r4 += 40);
              for (o3 = 0; o3 < e4; o3 += 1)
                for (n3 = 0; n3 < e4 - 6; n3 += 1)
                  t4.isDark(n3, o3) && !t4.isDark(n3 + 1, o3) && t4.isDark(n3 + 2, o3) && t4.isDark(n3 + 3, o3) && t4.isDark(n3 + 4, o3) && !t4.isDark(n3 + 5, o3) && t4.isDark(n3 + 6, o3) && (r4 += 40);
              var c2 = 0;
              for (o3 = 0; o3 < e4; o3 += 1)
                for (n3 = 0; n3 < e4; n3 += 1)
                  t4.isDark(n3, o3) && (c2 += 1);
              return r4 + Math.abs(100 * c2 / e4 / e4 - 50) / 5 * 10;
            }, o2), u = function() {
              for (var t4 = new Array(256), e4 = new Array(256), r4 = 0; r4 < 8; r4 += 1)
                t4[r4] = 1 << r4;
              for (r4 = 8; r4 < 256; r4 += 1)
                t4[r4] = t4[r4 - 4] ^ t4[r4 - 5] ^ t4[r4 - 6] ^ t4[r4 - 8];
              for (r4 = 0; r4 < 255; r4 += 1)
                e4[t4[r4]] = r4;
              return { glog: function(t5) {
                if (t5 < 1)
                  throw "glog(" + t5 + ")";
                return e4[t5];
              }, gexp: function(e5) {
                for (; e5 < 0; )
                  e5 += 255;
                for (; e5 >= 256; )
                  e5 -= 255;
                return t4[e5];
              } };
            }();
            function h(t4, e4) {
              if (void 0 === t4.length)
                throw t4.length + "/" + e4;
              var r4 = function() {
                for (var r5 = 0; r5 < t4.length && 0 == t4[r5]; )
                  r5 += 1;
                for (var n4 = new Array(t4.length - r5 + e4), o3 = 0; o3 < t4.length - r5; o3 += 1)
                  n4[o3] = t4[o3 + r5];
                return n4;
              }(), n3 = { getAt: function(t5) {
                return r4[t5];
              }, getLength: function() {
                return r4.length;
              }, multiply: function(t5) {
                for (var e5 = new Array(n3.getLength() + t5.getLength() - 1), r5 = 0; r5 < n3.getLength(); r5 += 1)
                  for (var o3 = 0; o3 < t5.getLength(); o3 += 1)
                    e5[r5 + o3] ^= u.gexp(u.glog(n3.getAt(r5)) + u.glog(t5.getAt(o3)));
                return h(e5, 0);
              }, mod: function(t5) {
                if (n3.getLength() - t5.getLength() < 0)
                  return n3;
                for (var e5 = u.glog(n3.getAt(0)) - u.glog(t5.getAt(0)), r5 = new Array(n3.getLength()), o3 = 0; o3 < n3.getLength(); o3 += 1)
                  r5[o3] = n3.getAt(o3);
                for (o3 = 0; o3 < t5.getLength(); o3 += 1)
                  r5[o3] ^= u.gexp(u.glog(t5.getAt(o3)) + e5);
                return h(r5, 0).mod(t5);
              } };
              return n3;
            }
            var c = /* @__PURE__ */ function() {
              var t4 = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], e4 = function(t5, e5) {
                var r5 = {};
                return r5.totalCount = t5, r5.dataCount = e5, r5;
              }, r4 = { getRSBlocks: function(r5, n3) {
                var o3 = function(e5, r6) {
                  switch (r6) {
                    case a.L:
                      return t4[4 * (e5 - 1) + 0];
                    case a.M:
                      return t4[4 * (e5 - 1) + 1];
                    case a.Q:
                      return t4[4 * (e5 - 1) + 2];
                    case a.H:
                      return t4[4 * (e5 - 1) + 3];
                    default:
                      return;
                  }
                }(r5, n3);
                if (void 0 === o3)
                  throw "bad rs block @ typeNumber:" + r5 + "/errorCorrectionLevel:" + n3;
                for (var i2 = o3.length / 3, s2 = [], u2 = 0; u2 < i2; u2 += 1)
                  for (var h2 = o3[3 * u2 + 0], c2 = o3[3 * u2 + 1], l2 = o3[3 * u2 + 2], d2 = 0; d2 < h2; d2 += 1)
                    s2.push(e4(c2, l2));
                return s2;
              } };
              return r4;
            }(), l = function() {
              var t4 = [], e4 = 0, r4 = { getBuffer: function() {
                return t4;
              }, getAt: function(e5) {
                var r5 = Math.floor(e5 / 8);
                return 1 == (t4[r5] >>> 7 - e5 % 8 & 1);
              }, put: function(t5, e5) {
                for (var n3 = 0; n3 < e5; n3 += 1)
                  r4.putBit(1 == (t5 >>> e5 - n3 - 1 & 1));
              }, getLengthInBits: function() {
                return e4;
              }, putBit: function(r5) {
                var n3 = Math.floor(e4 / 8);
                t4.length <= n3 && t4.push(0), r5 && (t4[n3] |= 128 >>> e4 % 8), e4 += 1;
              } };
              return r4;
            }, d = function(t4) {
              var e4 = t4, r4 = { getMode: function() {
                return 1;
              }, getLength: function(t5) {
                return e4.length;
              }, write: function(t5) {
                for (var r5 = e4, o4 = 0; o4 + 2 < r5.length; )
                  t5.put(n3(r5.substring(o4, o4 + 3)), 10), o4 += 3;
                o4 < r5.length && (r5.length - o4 == 1 ? t5.put(n3(r5.substring(o4, o4 + 1)), 4) : r5.length - o4 == 2 && t5.put(n3(r5.substring(o4, o4 + 2)), 7));
              } }, n3 = function(t5) {
                for (var e5 = 0, r5 = 0; r5 < t5.length; r5 += 1)
                  e5 = 10 * e5 + o3(t5.charAt(r5));
                return e5;
              }, o3 = function(t5) {
                if ("0" <= t5 && t5 <= "9")
                  return t5.charCodeAt(0) - "0".charCodeAt(0);
                throw "illegal char :" + t5;
              };
              return r4;
            }, f = function(t4) {
              var e4 = t4, r4 = { getMode: function() {
                return 2;
              }, getLength: function(t5) {
                return e4.length;
              }, write: function(t5) {
                for (var r5 = e4, o3 = 0; o3 + 1 < r5.length; )
                  t5.put(45 * n3(r5.charAt(o3)) + n3(r5.charAt(o3 + 1)), 11), o3 += 2;
                o3 < r5.length && t5.put(n3(r5.charAt(o3)), 6);
              } }, n3 = function(t5) {
                if ("0" <= t5 && t5 <= "9")
                  return t5.charCodeAt(0) - "0".charCodeAt(0);
                if ("A" <= t5 && t5 <= "Z")
                  return t5.charCodeAt(0) - "A".charCodeAt(0) + 10;
                switch (t5) {
                  case " ":
                    return 36;
                  case "$":
                    return 37;
                  case "%":
                    return 38;
                  case "*":
                    return 39;
                  case "+":
                    return 40;
                  case "-":
                    return 41;
                  case ".":
                    return 42;
                  case "/":
                    return 43;
                  case ":":
                    return 44;
                  default:
                    throw "illegal char :" + t5;
                }
              };
              return r4;
            }, g = function(e4) {
              var r4 = t3.stringToBytes(e4);
              return { getMode: function() {
                return 4;
              }, getLength: function(t4) {
                return r4.length;
              }, write: function(t4) {
                for (var e5 = 0; e5 < r4.length; e5 += 1)
                  t4.put(r4[e5], 8);
              } };
            }, p = function(e4) {
              var r4 = t3.stringToBytesFuncs.SJIS;
              if (!r4)
                throw "sjis not supported.";
              !function(t4, e5) {
                var n4 = r4("友");
                if (2 != n4.length || 38726 != (n4[0] << 8 | n4[1]))
                  throw "sjis not supported.";
              }();
              var n3 = r4(e4);
              return { getMode: function() {
                return 8;
              }, getLength: function(t4) {
                return ~~(n3.length / 2);
              }, write: function(t4) {
                for (var e5 = n3, r5 = 0; r5 + 1 < e5.length; ) {
                  var o3 = (255 & e5[r5]) << 8 | 255 & e5[r5 + 1];
                  if (33088 <= o3 && o3 <= 40956)
                    o3 -= 33088;
                  else {
                    if (!(57408 <= o3 && o3 <= 60351))
                      throw "illegal char at " + (r5 + 1) + "/" + o3;
                    o3 -= 49472;
                  }
                  o3 = 192 * (o3 >>> 8 & 255) + (255 & o3), t4.put(o3, 13), r5 += 2;
                }
                if (r5 < e5.length)
                  throw "illegal char at " + (r5 + 1);
              } };
            }, v = function() {
              var t4 = [], e4 = { writeByte: function(e5) {
                t4.push(255 & e5);
              }, writeShort: function(t5) {
                e4.writeByte(t5), e4.writeByte(t5 >>> 8);
              }, writeBytes: function(t5, r4, n3) {
                r4 = r4 || 0, n3 = n3 || t5.length;
                for (var o3 = 0; o3 < n3; o3 += 1)
                  e4.writeByte(t5[o3 + r4]);
              }, writeString: function(t5) {
                for (var r4 = 0; r4 < t5.length; r4 += 1)
                  e4.writeByte(t5.charCodeAt(r4));
              }, toByteArray: function() {
                return t4;
              }, toString: function() {
                var e5 = "";
                e5 += "[";
                for (var r4 = 0; r4 < t4.length; r4 += 1)
                  r4 > 0 && (e5 += ","), e5 += t4[r4];
                return e5 + "]";
              } };
              return e4;
            }, w = function(t4) {
              var e4 = t4, r4 = 0, n3 = 0, o3 = 0, i2 = { read: function() {
                for (; o3 < 8; ) {
                  if (r4 >= e4.length) {
                    if (0 == o3)
                      return -1;
                    throw "unexpected end of file./" + o3;
                  }
                  var t5 = e4.charAt(r4);
                  if (r4 += 1, "=" == t5)
                    return o3 = 0, -1;
                  t5.match(/^\s$/) || (n3 = n3 << 6 | a2(t5.charCodeAt(0)), o3 += 6);
                }
                var i3 = n3 >>> o3 - 8 & 255;
                return o3 -= 8, i3;
              } }, a2 = function(t5) {
                if (65 <= t5 && t5 <= 90)
                  return t5 - 65;
                if (97 <= t5 && t5 <= 122)
                  return t5 - 97 + 26;
                if (48 <= t5 && t5 <= 57)
                  return t5 - 48 + 52;
                if (43 == t5)
                  return 62;
                if (47 == t5)
                  return 63;
                throw "c:" + t5;
              };
              return i2;
            }, y = function(t4, e4, r4) {
              for (var n3 = function(t5, e5) {
                var r5 = t5, n4 = e5, o4 = new Array(t5 * e5), i3 = { setPixel: function(t6, e6, n5) {
                  o4[e6 * r5 + t6] = n5;
                }, write: function(t6) {
                  t6.writeString("GIF87a"), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(128), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(0), t6.writeByte(255), t6.writeByte(255), t6.writeByte(255), t6.writeString(","), t6.writeShort(0), t6.writeShort(0), t6.writeShort(r5), t6.writeShort(n4), t6.writeByte(0);
                  var e6 = a3(2);
                  t6.writeByte(2);
                  for (var o5 = 0; e6.length - o5 > 255; )
                    t6.writeByte(255), t6.writeBytes(e6, o5, 255), o5 += 255;
                  t6.writeByte(e6.length - o5), t6.writeBytes(e6, o5, e6.length - o5), t6.writeByte(0), t6.writeString(";");
                } }, a3 = function(t6) {
                  for (var e6 = 1 << t6, r6 = 1 + (1 << t6), n5 = t6 + 1, i4 = s3(), a4 = 0; a4 < e6; a4 += 1)
                    i4.add(String.fromCharCode(a4));
                  i4.add(String.fromCharCode(e6)), i4.add(String.fromCharCode(r6));
                  var u3, h3, c2, l2 = v(), d2 = (u3 = l2, h3 = 0, c2 = 0, { write: function(t7, e7) {
                    if (t7 >>> e7 != 0)
                      throw "length over";
                    for (; h3 + e7 >= 8; )
                      u3.writeByte(255 & (t7 << h3 | c2)), e7 -= 8 - h3, t7 >>>= 8 - h3, c2 = 0, h3 = 0;
                    c2 |= t7 << h3, h3 += e7;
                  }, flush: function() {
                    h3 > 0 && u3.writeByte(c2);
                  } });
                  d2.write(e6, n5);
                  var f2 = 0, g2 = String.fromCharCode(o4[f2]);
                  for (f2 += 1; f2 < o4.length; ) {
                    var p2 = String.fromCharCode(o4[f2]);
                    f2 += 1, i4.contains(g2 + p2) ? g2 += p2 : (d2.write(i4.indexOf(g2), n5), i4.size() < 4095 && (i4.size() == 1 << n5 && (n5 += 1), i4.add(g2 + p2)), g2 = p2);
                  }
                  return d2.write(i4.indexOf(g2), n5), d2.write(r6, n5), d2.flush(), l2.toByteArray();
                }, s3 = function() {
                  var t6 = {}, e6 = 0, r6 = { add: function(n5) {
                    if (r6.contains(n5))
                      throw "dup key:" + n5;
                    t6[n5] = e6, e6 += 1;
                  }, size: function() {
                    return e6;
                  }, indexOf: function(e7) {
                    return t6[e7];
                  }, contains: function(e7) {
                    return void 0 !== t6[e7];
                  } };
                  return r6;
                };
                return i3;
              }(t4, e4), o3 = 0; o3 < e4; o3 += 1)
                for (var i2 = 0; i2 < t4; i2 += 1)
                  n3.setPixel(i2, o3, r4(i2, o3));
              var a2 = v();
              n3.write(a2);
              for (var s2 = function() {
                var t5 = 0, e5 = 0, r5 = 0, n4 = "", o4 = {}, i3 = function(t6) {
                  n4 += String.fromCharCode(a3(63 & t6));
                }, a3 = function(t6) {
                  if (t6 < 0)
                    ;
                  else {
                    if (t6 < 26)
                      return 65 + t6;
                    if (t6 < 52)
                      return t6 - 26 + 97;
                    if (t6 < 62)
                      return t6 - 52 + 48;
                    if (62 == t6)
                      return 43;
                    if (63 == t6)
                      return 47;
                  }
                  throw "n:" + t6;
                };
                return o4.writeByte = function(n5) {
                  for (t5 = t5 << 8 | 255 & n5, e5 += 8, r5 += 1; e5 >= 6; )
                    i3(t5 >>> e5 - 6), e5 -= 6;
                }, o4.flush = function() {
                  if (e5 > 0 && (i3(t5 << 6 - e5), t5 = 0, e5 = 0), r5 % 3 != 0)
                    for (var o5 = 3 - r5 % 3, a4 = 0; a4 < o5; a4 += 1)
                      n4 += "=";
                }, o4.toString = function() {
                  return n4;
                }, o4;
              }(), u2 = a2.toByteArray(), h2 = 0; h2 < u2.length; h2 += 1)
                s2.writeByte(u2[h2]);
              return s2.flush(), "data:image/gif;base64," + s2;
            };
            return t3;
          }();
          o.stringToBytesFuncs["UTF-8"] = function(t3) {
            return function(t4) {
              for (var e3 = [], r3 = 0; r3 < t4.length; r3++) {
                var n2 = t4.charCodeAt(r3);
                n2 < 128 ? e3.push(n2) : n2 < 2048 ? e3.push(192 | n2 >> 6, 128 | 63 & n2) : n2 < 55296 || n2 >= 57344 ? e3.push(224 | n2 >> 12, 128 | n2 >> 6 & 63, 128 | 63 & n2) : (r3++, n2 = 65536 + ((1023 & n2) << 10 | 1023 & t4.charCodeAt(r3)), e3.push(240 | n2 >> 18, 128 | n2 >> 12 & 63, 128 | n2 >> 6 & 63, 128 | 63 & n2));
              }
              return e3;
            }(t3);
          }, void 0 === (n = "function" == typeof (r2 = function() {
            return o;
          }) ? r2.apply(e2, []) : r2) || (t2.exports = n);
        }, 676: (t2, e2, r2) => {
          "use strict";
          r2.d(e2, { default: () => q });
          var n = function() {
            return (n = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          }, o = function() {
            for (var t3 = 0, e3 = 0, r3 = arguments.length; e3 < r3; e3++)
              t3 += arguments[e3].length;
            var n2 = Array(t3), o2 = 0;
            for (e3 = 0; e3 < r3; e3++)
              for (var i2 = arguments[e3], a2 = 0, s2 = i2.length; a2 < s2; a2++, o2++)
                n2[o2] = i2[a2];
            return n2;
          }, i = function(t3) {
            return !!t3 && "object" == typeof t3 && !Array.isArray(t3);
          };
          function a(t3) {
            for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
              e3[r3 - 1] = arguments[r3];
            if (!e3.length)
              return t3;
            var s2 = e3.shift();
            return void 0 !== s2 && i(t3) && i(s2) ? (t3 = n({}, t3), Object.keys(s2).forEach(function(e4) {
              var r4 = t3[e4], n2 = s2[e4];
              Array.isArray(r4) && Array.isArray(n2) ? t3[e4] = n2 : i(r4) && i(n2) ? t3[e4] = a(Object.assign({}, r4), n2) : t3[e4] = n2;
            }), a.apply(void 0, o([t3], e3))) : t3;
          }
          function s(t3, e3) {
            var r3 = document.createElement("a");
            r3.download = e3, r3.href = t3, document.body.appendChild(r3), r3.click(), document.body.removeChild(r3);
          }
          function u(t3) {
            return e3 = this, r3 = void 0, o2 = function() {
              return function(t4, e4) {
                var r4, n3, o3, i2, a2 = { label: 0, sent: function() {
                  if (1 & o3[0])
                    throw o3[1];
                  return o3[1];
                }, trys: [], ops: [] };
                return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
                  return this;
                }), i2;
                function s2(i3) {
                  return function(s3) {
                    return function(i4) {
                      if (r4)
                        throw new TypeError("Generator is already executing.");
                      for (; a2; )
                        try {
                          if (r4 = 1, n3 && (o3 = 2 & i4[0] ? n3.return : i4[0] ? n3.throw || ((o3 = n3.return) && o3.call(n3), 0) : n3.next) && !(o3 = o3.call(n3, i4[1])).done)
                            return o3;
                          switch (n3 = 0, o3 && (i4 = [2 & i4[0], o3.value]), i4[0]) {
                            case 0:
                            case 1:
                              o3 = i4;
                              break;
                            case 4:
                              return a2.label++, { value: i4[1], done: false };
                            case 5:
                              a2.label++, n3 = i4[1], i4 = [0];
                              continue;
                            case 7:
                              i4 = a2.ops.pop(), a2.trys.pop();
                              continue;
                            default:
                              if (!((o3 = (o3 = a2.trys).length > 0 && o3[o3.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                                a2 = 0;
                                continue;
                              }
                              if (3 === i4[0] && (!o3 || i4[1] > o3[0] && i4[1] < o3[3])) {
                                a2.label = i4[1];
                                break;
                              }
                              if (6 === i4[0] && a2.label < o3[1]) {
                                a2.label = o3[1], o3 = i4;
                                break;
                              }
                              if (o3 && a2.label < o3[2]) {
                                a2.label = o3[2], a2.ops.push(i4);
                                break;
                              }
                              o3[2] && a2.ops.pop(), a2.trys.pop();
                              continue;
                          }
                          i4 = e4.call(t4, a2);
                        } catch (t5) {
                          i4 = [6, t5], n3 = 0;
                        } finally {
                          r4 = o3 = 0;
                        }
                      if (5 & i4[0])
                        throw i4[1];
                      return { value: i4[0] ? i4[1] : void 0, done: true };
                    }([i3, s3]);
                  };
                }
              }(this, function(e4) {
                return [2, new Promise(function(e5) {
                  var r4 = new XMLHttpRequest();
                  r4.onload = function() {
                    var t4 = new FileReader();
                    t4.onloadend = function() {
                      e5(t4.result);
                    }, t4.readAsDataURL(r4.response);
                  }, r4.open("GET", t3), r4.responseType = "blob", r4.send();
                })];
              });
            }, new ((n2 = void 0) || (n2 = Promise))(function(t4, i2) {
              function a2(t5) {
                try {
                  u2(o2.next(t5));
                } catch (t6) {
                  i2(t6);
                }
              }
              function s2(t5) {
                try {
                  u2(o2.throw(t5));
                } catch (t6) {
                  i2(t6);
                }
              }
              function u2(e4) {
                var r4;
                e4.done ? t4(e4.value) : (r4 = e4.value, r4 instanceof n2 ? r4 : new n2(function(t5) {
                  t5(r4);
                })).then(a2, s2);
              }
              u2((o2 = o2.apply(e3, r3 || [])).next());
            });
            var e3, r3, n2, o2;
          }
          const h = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
          var c = function() {
            return (c = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const l = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "dots":
                  o2 = this._drawDot;
                  break;
                case "classy":
                  o2 = this._drawClassy;
                  break;
                case "classy-rounded":
                  o2 = this._drawClassyRounded;
                  break;
                case "rounded":
                  o2 = this._drawRounded;
                  break;
                case "extra-rounded":
                  o2 = this._drawExtraRounded;
                  break;
                case "square":
                default:
                  o2 = this._drawSquare;
              }
              o2.call(this, { x: t4, y: e3, size: r3, getNeighbor: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
              } }));
            }, t3.prototype._basicSideRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, 0 " + -r3);
              } }));
            }, t3.prototype._basicCornerRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
              } }));
            }, t3.prototype._basicCornerExtraRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "a " + r3 + " " + r3 + ", 0, 0, 0, " + -r3 + " " + -r3);
              } }));
            }, t3.prototype._basicCornersRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(c(c({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + r3 / 2 + " " + r3 / 2 + "h " + r3 / 2 + "v " + -r3 / 2 + "a " + r3 / 2 + " " + r3 / 2 + ", 0, 0, 0, " + -r3 / 2 + " " + -r3 / 2);
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
              if (0 !== h2)
                if (h2 > 2 || i2 && a2 || s2 && u2)
                  this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
                else {
                  if (2 === h2) {
                    var c2 = 0;
                    return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                  }
                  if (1 === h2)
                    return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
              else
                this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawExtraRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0, h2 = i2 + a2 + s2 + u2;
              if (0 !== h2)
                if (h2 > 2 || i2 && a2 || s2 && u2)
                  this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 });
                else {
                  if (2 === h2) {
                    var c2 = 0;
                    return i2 && s2 ? c2 = Math.PI / 2 : s2 && a2 ? c2 = Math.PI : a2 && u2 && (c2 = -Math.PI / 2), void this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                  }
                  if (1 === h2)
                    return c2 = 0, s2 ? c2 = Math.PI / 2 : a2 ? c2 = Math.PI : u2 && (c2 = -Math.PI / 2), void this._basicSideRounded({ x: e3, y: r3, size: n2, rotation: c2 });
                }
              else
                this._basicDot({ x: e3, y: r3, size: n2, rotation: 0 });
            }, t3.prototype._drawClassy = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
              0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
            }, t3.prototype._drawClassyRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.getNeighbor, i2 = o2 ? +o2(-1, 0) : 0, a2 = o2 ? +o2(1, 0) : 0, s2 = o2 ? +o2(0, -1) : 0, u2 = o2 ? +o2(0, 1) : 0;
              0 !== i2 + a2 + s2 + u2 ? i2 || s2 ? a2 || u2 ? this._basicSquare({ x: e3, y: r3, size: n2, rotation: 0 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: e3, y: r3, size: n2, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: e3, y: r3, size: n2, rotation: Math.PI / 2 });
            }, t3;
          }();
          var d = function() {
            return (d = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const f = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "square":
                  o2 = this._drawSquare;
                  break;
                case "extra-rounded":
                  o2 = this._drawExtraRounded;
                  break;
                case "dot":
                default:
                  o2 = this._drawDot;
              }
              o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + (n2 + r3 / 2) + " " + o2 + "a " + r3 / 2 + " " + r3 / 2 + " 0 1 0 0.1 0zm 0 " + i2 + "a " + (r3 / 2 - i2) + " " + (r3 / 2 - i2) + " 0 1 1 -0.1 0Z");
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + o2 + "v " + r3 + "h " + r3 + "v " + -r3 + "zM " + (n2 + i2) + " " + (o2 + i2) + "h " + (r3 - 2 * i2) + "v " + (r3 - 2 * i2) + "h " + (2 * i2 - r3) + "z");
              } }));
            }, t3.prototype._basicExtraRounded = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y, i2 = r3 / 7;
              this._rotateFigure(d(d({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e3._element.setAttribute("clip-rule", "evenodd"), e3._element.setAttribute("d", "M " + n2 + " " + (o2 + 2.5 * i2) + "v " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * i2 + "h " + 2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * i2 + " " + 2.5 * -i2 + "v " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * -i2 + "h " + -2 * i2 + "a " + 2.5 * i2 + " " + 2.5 * i2 + ", 0, 0, 0, " + 2.5 * -i2 + " " + 2.5 * i2 + "M " + (n2 + 2.5 * i2) + " " + (o2 + i2) + "h " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * i2 + "v " + 2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * i2 + "h " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * -i2 + " " + 1.5 * -i2 + "v " + -2 * i2 + "a " + 1.5 * i2 + " " + 1.5 * i2 + ", 0, 0, 1, " + 1.5 * i2 + " " + 1.5 * -i2);
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawExtraRounded = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicExtraRounded({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3;
          }();
          var g = function() {
            return (g = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          const p = function() {
            function t3(t4) {
              var e3 = t4.svg, r3 = t4.type;
              this._svg = e3, this._type = r3;
            }
            return t3.prototype.draw = function(t4, e3, r3, n2) {
              var o2;
              switch (this._type) {
                case "square":
                  o2 = this._drawSquare;
                  break;
                case "dot":
                default:
                  o2 = this._drawDot;
              }
              o2.call(this, { x: t4, y: e3, size: r3, rotation: n2 });
            }, t3.prototype._rotateFigure = function(t4) {
              var e3, r3 = t4.x, n2 = t4.y, o2 = t4.size, i2 = t4.rotation, a2 = void 0 === i2 ? 0 : i2, s2 = r3 + o2 / 2, u2 = n2 + o2 / 2;
              (0, t4.draw)(), null === (e3 = this._element) || void 0 === e3 || e3.setAttribute("transform", "rotate(" + 180 * a2 / Math.PI + "," + s2 + "," + u2 + ")");
            }, t3.prototype._basicDot = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(g(g({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e3._element.setAttribute("cx", String(n2 + r3 / 2)), e3._element.setAttribute("cy", String(o2 + r3 / 2)), e3._element.setAttribute("r", String(r3 / 2));
              } }));
            }, t3.prototype._basicSquare = function(t4) {
              var e3 = this, r3 = t4.size, n2 = t4.x, o2 = t4.y;
              this._rotateFigure(g(g({}, t4), { draw: function() {
                e3._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e3._element.setAttribute("x", String(n2)), e3._element.setAttribute("y", String(o2)), e3._element.setAttribute("width", String(r3)), e3._element.setAttribute("height", String(r3));
              } }));
            }, t3.prototype._drawDot = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicDot({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3.prototype._drawSquare = function(t4) {
              var e3 = t4.x, r3 = t4.y, n2 = t4.size, o2 = t4.rotation;
              this._basicSquare({ x: e3, y: r3, size: n2, rotation: o2 });
            }, t3;
          }(), v = "circle";
          var w = function(t3, e3, r3, n2) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(t4) {
                try {
                  u2(n2.next(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function s2(t4) {
                try {
                  u2(n2.throw(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function u2(t4) {
                var e4;
                t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                  t5(e4);
                })).then(a2, s2);
              }
              u2((n2 = n2.apply(t3, e3 || [])).next());
            });
          }, y = function(t3, e3) {
            var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                        return o2;
                      switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = e3.call(t3, a2);
                    } catch (t4) {
                      i4 = [6, t4], n2 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, m = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], b = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
          const _ = function() {
            function t3(t4) {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t4.width)), this._element.setAttribute("height", String(t4.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t4;
            }
            return Object.defineProperty(t3.prototype, "width", { get: function() {
              return this._options.width;
            }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "height", { get: function() {
              return this._options.height;
            }, enumerable: false, configurable: true }), t3.prototype.getElement = function() {
              return this._element;
            }, t3.prototype.drawQR = function(t4) {
              return w(this, void 0, void 0, function() {
                var e3, r3, n2, o2, i2, a2, s2, u2, c2, l2, d2 = this;
                return y(this, function(f2) {
                  switch (f2.label) {
                    case 0:
                      return e3 = t4.getModuleCount(), r3 = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n2 = this._options.shape === v ? r3 / Math.sqrt(2) : r3, o2 = Math.floor(n2 / e3), i2 = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t4, this._options.image ? [4, this.loadImage()] : [3, 2];
                    case 1:
                      if (f2.sent(), !this._image)
                        return [2];
                      a2 = this._options, s2 = a2.imageOptions, u2 = a2.qrOptions, c2 = s2.imageSize * h[u2.errorCorrectionLevel], l2 = Math.floor(c2 * e3 * e3), i2 = function(t5) {
                        var e4 = t5.originalHeight, r4 = t5.originalWidth, n3 = t5.maxHiddenDots, o3 = t5.maxHiddenAxisDots, i3 = t5.dotSize, a3 = { x: 0, y: 0 }, s3 = { x: 0, y: 0 };
                        if (e4 <= 0 || r4 <= 0 || n3 <= 0 || i3 <= 0)
                          return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                        var u3 = e4 / r4;
                        return a3.x = Math.floor(Math.sqrt(n3 / u3)), a3.x <= 0 && (a3.x = 1), o3 && o3 < a3.x && (a3.x = o3), a3.x % 2 == 0 && a3.x--, s3.x = a3.x * i3, a3.y = 1 + 2 * Math.ceil((a3.x * u3 - 1) / 2), s3.y = Math.round(s3.x * u3), (a3.y * a3.x > n3 || o3 && o3 < a3.y) && (o3 && o3 < a3.y ? (a3.y = o3, a3.y % 2 == 0 && a3.x--) : a3.y -= 2, s3.y = a3.y * i3, a3.x = 1 + 2 * Math.ceil((a3.y / u3 - 1) / 2), s3.x = Math.round(s3.y / u3)), { height: s3.y, width: s3.x, hideYDots: a3.y, hideXDots: a3.x };
                      }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l2, maxHiddenAxisDots: e3 - 14, dotSize: o2 }), f2.label = 2;
                    case 2:
                      return this.drawBackground(), this.drawDots(function(t5, r4) {
                        var n3, o3, a3, s3, u3, h2;
                        return !(d2._options.imageOptions.hideBackgroundDots && t5 >= (e3 - i2.hideXDots) / 2 && t5 < (e3 + i2.hideXDots) / 2 && r4 >= (e3 - i2.hideYDots) / 2 && r4 < (e3 + i2.hideYDots) / 2 || (null === (n3 = m[t5]) || void 0 === n3 ? void 0 : n3[r4]) || (null === (o3 = m[t5 - e3 + 7]) || void 0 === o3 ? void 0 : o3[r4]) || (null === (a3 = m[t5]) || void 0 === a3 ? void 0 : a3[r4 - e3 + 7]) || (null === (s3 = b[t5]) || void 0 === s3 ? void 0 : s3[r4]) || (null === (u3 = b[t5 - e3 + 7]) || void 0 === u3 ? void 0 : u3[r4]) || (null === (h2 = b[t5]) || void 0 === h2 ? void 0 : h2[r4 - e3 + 7]));
                      }), this.drawCorners(), this._options.image ? [4, this.drawImage({ width: i2.width, height: i2.height, count: e3, dotSize: o2 })] : [3, 4];
                    case 3:
                      f2.sent(), f2.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            }, t3.prototype.drawBackground = function() {
              var t4, e3, r3, n2 = this._element, o2 = this._options;
              if (n2) {
                var i2 = null === (t4 = o2.backgroundOptions) || void 0 === t4 ? void 0 : t4.gradient, a2 = null === (e3 = o2.backgroundOptions) || void 0 === e3 ? void 0 : e3.color;
                if ((i2 || a2) && this._createColor({ options: i2, color: a2, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "background-color" }), null === (r3 = o2.backgroundOptions) || void 0 === r3 ? void 0 : r3.round) {
                  var s2 = Math.min(o2.width, o2.height), u2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                  this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), u2.setAttribute("x", String((o2.width - s2) / 2)), u2.setAttribute("y", String((o2.height - s2) / 2)), u2.setAttribute("width", String(s2)), u2.setAttribute("height", String(s2)), u2.setAttribute("rx", String(s2 / 2 * o2.backgroundOptions.round)), this._backgroundClipPath.appendChild(u2);
                }
              }
            }, t3.prototype.drawDots = function(t4) {
              var e3, r3, n2 = this;
              if (!this._qr)
                throw "QR code is not defined";
              var o2 = this._options, i2 = this._qr.getModuleCount();
              if (i2 > o2.width || i2 > o2.height)
                throw "The canvas is too small.";
              var a2 = Math.min(o2.width, o2.height) - 2 * o2.margin, s2 = o2.shape === v ? a2 / Math.sqrt(2) : a2, u2 = Math.floor(s2 / i2), h2 = Math.floor((o2.width - i2 * u2) / 2), c2 = Math.floor((o2.height - i2 * u2) / 2), d2 = new l({ svg: this._element, type: o2.dotsOptions.type });
              this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: null === (e3 = o2.dotsOptions) || void 0 === e3 ? void 0 : e3.gradient, color: o2.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: o2.height, width: o2.width, name: "dot-color" });
              for (var f2 = function(e4) {
                for (var o3 = function(o4) {
                  return t4 && !t4(e4, o4) ? "continue" : (null === (r3 = g2._qr) || void 0 === r3 ? void 0 : r3.isDark(e4, o4)) ? (d2.draw(h2 + e4 * u2, c2 + o4 * u2, u2, function(r4, a4) {
                    return !(e4 + r4 < 0 || o4 + a4 < 0 || e4 + r4 >= i2 || o4 + a4 >= i2) && !(t4 && !t4(e4 + r4, o4 + a4)) && !!n2._qr && n2._qr.isDark(e4 + r4, o4 + a4);
                  }), void (d2._element && g2._dotsClipPath && g2._dotsClipPath.appendChild(d2._element))) : "continue";
                }, a3 = 0; a3 < i2; a3++)
                  o3(a3);
              }, g2 = this, p2 = 0; p2 < i2; p2++)
                f2(p2);
              if (o2.shape === v) {
                var w2 = Math.floor((a2 / u2 - i2) / 2), y2 = i2 + 2 * w2, m2 = h2 - w2 * u2, b2 = c2 - w2 * u2, _2 = [], x2 = Math.floor(y2 / 2);
                for (p2 = 0; p2 < y2; p2++) {
                  _2[p2] = [];
                  for (var S2 = 0; S2 < y2; S2++)
                    p2 >= w2 - 1 && p2 <= y2 - w2 && S2 >= w2 - 1 && S2 <= y2 - w2 || Math.sqrt((p2 - x2) * (p2 - x2) + (S2 - x2) * (S2 - x2)) > x2 ? _2[p2][S2] = 0 : _2[p2][S2] = this._qr.isDark(S2 - 2 * w2 < 0 ? S2 : S2 >= i2 ? S2 - 2 * w2 : S2 - w2, p2 - 2 * w2 < 0 ? p2 : p2 >= i2 ? p2 - 2 * w2 : p2 - w2) ? 1 : 0;
                }
                var M2 = function(t5) {
                  for (var e4 = function(e5) {
                    if (!_2[t5][e5])
                      return "continue";
                    d2.draw(m2 + t5 * u2, b2 + e5 * u2, u2, function(r5, n3) {
                      var o3;
                      return !!(null === (o3 = _2[t5 + r5]) || void 0 === o3 ? void 0 : o3[e5 + n3]);
                    }), d2._element && C2._dotsClipPath && C2._dotsClipPath.appendChild(d2._element);
                  }, r4 = 0; r4 < y2; r4++)
                    e4(r4);
                }, C2 = this;
                for (p2 = 0; p2 < y2; p2++)
                  M2(p2);
              }
            }, t3.prototype.drawCorners = function() {
              var t4 = this;
              if (!this._qr)
                throw "QR code is not defined";
              var e3 = this._element, r3 = this._options;
              if (!e3)
                throw "Element code is not defined";
              var n2 = this._qr.getModuleCount(), o2 = Math.min(r3.width, r3.height) - 2 * r3.margin, i2 = r3.shape === v ? o2 / Math.sqrt(2) : o2, a2 = Math.floor(i2 / n2), s2 = 7 * a2, u2 = 3 * a2, h2 = Math.floor((r3.width - n2 * a2) / 2), c2 = Math.floor((r3.height - n2 * a2) / 2);
              [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(e4) {
                var o3, i3, d2, g2, v2, w2, y2, _2, x2, S2, M2, C2, A2 = e4[0], k2 = e4[1], O2 = e4[2], D2 = h2 + A2 * a2 * (n2 - 7), P2 = c2 + k2 * a2 * (n2 - 7), z2 = t4._dotsClipPath, B2 = t4._dotsClipPath;
                if (((null === (o3 = r3.cornersSquareOptions) || void 0 === o3 ? void 0 : o3.gradient) || (null === (i3 = r3.cornersSquareOptions) || void 0 === i3 ? void 0 : i3.color)) && ((z2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + A2 + "-" + k2), t4._defs.appendChild(z2), t4._cornersSquareClipPath = t4._cornersDotClipPath = B2 = z2, t4._createColor({ options: null === (d2 = r3.cornersSquareOptions) || void 0 === d2 ? void 0 : d2.gradient, color: null === (g2 = r3.cornersSquareOptions) || void 0 === g2 ? void 0 : g2.color, additionalRotation: O2, x: D2, y: P2, height: s2, width: s2, name: "corners-square-color-" + A2 + "-" + k2 })), null === (v2 = r3.cornersSquareOptions) || void 0 === v2 ? void 0 : v2.type) {
                  var q2 = new f({ svg: t4._element, type: r3.cornersSquareOptions.type });
                  q2.draw(D2, P2, s2, O2), q2._element && z2 && z2.appendChild(q2._element);
                } else
                  for (var I = new l({ svg: t4._element, type: r3.dotsOptions.type }), E = function(t5) {
                    for (var e5 = function(e6) {
                      if (!(null === (w2 = m[t5]) || void 0 === w2 ? void 0 : w2[e6]))
                        return "continue";
                      I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                        var o4;
                        return !!(null === (o4 = m[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                      }), I._element && z2 && z2.appendChild(I._element);
                    }, r4 = 0; r4 < m[t5].length; r4++)
                      e5(r4);
                  }, L = 0; L < m.length; L++)
                    E(L);
                if (((null === (y2 = r3.cornersDotOptions) || void 0 === y2 ? void 0 : y2.gradient) || (null === (_2 = r3.cornersDotOptions) || void 0 === _2 ? void 0 : _2.color)) && ((B2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + A2 + "-" + k2), t4._defs.appendChild(B2), t4._cornersDotClipPath = B2, t4._createColor({ options: null === (x2 = r3.cornersDotOptions) || void 0 === x2 ? void 0 : x2.gradient, color: null === (S2 = r3.cornersDotOptions) || void 0 === S2 ? void 0 : S2.color, additionalRotation: O2, x: D2 + 2 * a2, y: P2 + 2 * a2, height: u2, width: u2, name: "corners-dot-color-" + A2 + "-" + k2 })), null === (M2 = r3.cornersDotOptions) || void 0 === M2 ? void 0 : M2.type) {
                  var R = new p({ svg: t4._element, type: r3.cornersDotOptions.type });
                  R.draw(D2 + 2 * a2, P2 + 2 * a2, u2, O2), R._element && B2 && B2.appendChild(R._element);
                } else {
                  I = new l({ svg: t4._element, type: r3.dotsOptions.type });
                  var N = function(t5) {
                    for (var e5 = function(e6) {
                      if (!(null === (C2 = b[t5]) || void 0 === C2 ? void 0 : C2[e6]))
                        return "continue";
                      I.draw(D2 + t5 * a2, P2 + e6 * a2, a2, function(r5, n3) {
                        var o4;
                        return !!(null === (o4 = b[t5 + r5]) || void 0 === o4 ? void 0 : o4[e6 + n3]);
                      }), I._element && B2 && B2.appendChild(I._element);
                    }, r4 = 0; r4 < b[t5].length; r4++)
                      e5(r4);
                  };
                  for (L = 0; L < b.length; L++)
                    N(L);
                }
              });
            }, t3.prototype.loadImage = function() {
              var t4 = this;
              return new Promise(function(e3, r3) {
                var n2 = t4._options, o2 = new Image();
                if (!n2.image)
                  return r3("Image is not defined");
                "string" == typeof n2.imageOptions.crossOrigin && (o2.crossOrigin = n2.imageOptions.crossOrigin), t4._image = o2, o2.onload = function() {
                  e3();
                }, o2.src = n2.image;
              });
            }, t3.prototype.drawImage = function(t4) {
              var e3 = t4.width, r3 = t4.height, n2 = t4.count, o2 = t4.dotSize;
              return w(this, void 0, void 0, function() {
                var t5, i2, a2, s2, h2, c2, l2, d2, f2;
                return y(this, function(g2) {
                  switch (g2.label) {
                    case 0:
                      return t5 = this._options, i2 = Math.floor((t5.width - n2 * o2) / 2), a2 = Math.floor((t5.height - n2 * o2) / 2), s2 = i2 + t5.imageOptions.margin + (n2 * o2 - e3) / 2, h2 = a2 + t5.imageOptions.margin + (n2 * o2 - r3) / 2, c2 = e3 - 2 * t5.imageOptions.margin, l2 = r3 - 2 * t5.imageOptions.margin, (d2 = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(s2)), d2.setAttribute("y", String(h2)), d2.setAttribute("width", c2 + "px"), d2.setAttribute("height", l2 + "px"), [4, u(t5.image || "")];
                    case 1:
                      return f2 = g2.sent(), d2.setAttribute("href", f2 || ""), this._element.appendChild(d2), [2];
                  }
                });
              });
            }, t3.prototype._createColor = function(t4) {
              var e3 = t4.options, r3 = t4.color, n2 = t4.additionalRotation, o2 = t4.x, i2 = t4.y, a2 = t4.height, s2 = t4.width, u2 = t4.name, h2 = s2 > a2 ? s2 : a2, c2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              if (c2.setAttribute("x", String(o2)), c2.setAttribute("y", String(i2)), c2.setAttribute("height", String(a2)), c2.setAttribute("width", String(s2)), c2.setAttribute("clip-path", "url('#clip-path-" + u2 + "')"), e3) {
                var l2;
                if ("radial" === e3.type)
                  (l2 = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("fx", String(o2 + s2 / 2)), l2.setAttribute("fy", String(i2 + a2 / 2)), l2.setAttribute("cx", String(o2 + s2 / 2)), l2.setAttribute("cy", String(i2 + a2 / 2)), l2.setAttribute("r", String(h2 / 2));
                else {
                  var d2 = ((e3.rotation || 0) + n2) % (2 * Math.PI), f2 = (d2 + 2 * Math.PI) % (2 * Math.PI), g2 = o2 + s2 / 2, p2 = i2 + a2 / 2, v2 = o2 + s2 / 2, w2 = i2 + a2 / 2;
                  f2 >= 0 && f2 <= 0.25 * Math.PI || f2 > 1.75 * Math.PI && f2 <= 2 * Math.PI ? (g2 -= s2 / 2, p2 -= a2 / 2 * Math.tan(d2), v2 += s2 / 2, w2 += a2 / 2 * Math.tan(d2)) : f2 > 0.25 * Math.PI && f2 <= 0.75 * Math.PI ? (p2 -= a2 / 2, g2 -= s2 / 2 / Math.tan(d2), w2 += a2 / 2, v2 += s2 / 2 / Math.tan(d2)) : f2 > 0.75 * Math.PI && f2 <= 1.25 * Math.PI ? (g2 += s2 / 2, p2 += a2 / 2 * Math.tan(d2), v2 -= s2 / 2, w2 -= a2 / 2 * Math.tan(d2)) : f2 > 1.25 * Math.PI && f2 <= 1.75 * Math.PI && (p2 += a2 / 2, g2 += s2 / 2 / Math.tan(d2), w2 -= a2 / 2, v2 -= s2 / 2 / Math.tan(d2)), (l2 = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", u2), l2.setAttribute("gradientUnits", "userSpaceOnUse"), l2.setAttribute("x1", String(Math.round(g2))), l2.setAttribute("y1", String(Math.round(p2))), l2.setAttribute("x2", String(Math.round(v2))), l2.setAttribute("y2", String(Math.round(w2)));
                }
                e3.colorStops.forEach(function(t5) {
                  var e4 = t5.offset, r4 = t5.color, n3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                  n3.setAttribute("offset", 100 * e4 + "%"), n3.setAttribute("stop-color", r4), l2.appendChild(n3);
                }), c2.setAttribute("fill", "url('#" + u2 + "')"), this._defs.appendChild(l2);
              } else
                r3 && c2.setAttribute("fill", r3);
              this._element.appendChild(c2);
            }, t3;
          }(), x = "canvas";
          for (var S = {}, M = 0; M <= 40; M++)
            S[M] = M;
          const C = { type: x, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: S[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: true, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
          var A = function() {
            return (A = Object.assign || function(t3) {
              for (var e3, r3 = 1, n2 = arguments.length; r3 < n2; r3++)
                for (var o2 in e3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(e3, o2) && (t3[o2] = e3[o2]);
              return t3;
            }).apply(this, arguments);
          };
          function k(t3) {
            var e3 = A({}, t3);
            if (!e3.colorStops || !e3.colorStops.length)
              throw "Field 'colorStops' is required in gradient";
            return e3.rotation ? e3.rotation = Number(e3.rotation) : e3.rotation = 0, e3.colorStops = e3.colorStops.map(function(t4) {
              return A(A({}, t4), { offset: Number(t4.offset) });
            }), e3;
          }
          function O(t3) {
            var e3 = A({}, t3);
            return e3.width = Number(e3.width), e3.height = Number(e3.height), e3.margin = Number(e3.margin), e3.imageOptions = A(A({}, e3.imageOptions), { hideBackgroundDots: Boolean(e3.imageOptions.hideBackgroundDots), imageSize: Number(e3.imageOptions.imageSize), margin: Number(e3.imageOptions.margin) }), e3.margin > Math.min(e3.width, e3.height) && (e3.margin = Math.min(e3.width, e3.height)), e3.dotsOptions = A({}, e3.dotsOptions), e3.dotsOptions.gradient && (e3.dotsOptions.gradient = k(e3.dotsOptions.gradient)), e3.cornersSquareOptions && (e3.cornersSquareOptions = A({}, e3.cornersSquareOptions), e3.cornersSquareOptions.gradient && (e3.cornersSquareOptions.gradient = k(e3.cornersSquareOptions.gradient))), e3.cornersDotOptions && (e3.cornersDotOptions = A({}, e3.cornersDotOptions), e3.cornersDotOptions.gradient && (e3.cornersDotOptions.gradient = k(e3.cornersDotOptions.gradient))), e3.backgroundOptions && (e3.backgroundOptions = A({}, e3.backgroundOptions), e3.backgroundOptions.gradient && (e3.backgroundOptions.gradient = k(e3.backgroundOptions.gradient))), e3;
          }
          var D = r2(192), P = r2.n(D), z = function(t3, e3, r3, n2) {
            return new (r3 || (r3 = Promise))(function(o2, i2) {
              function a2(t4) {
                try {
                  u2(n2.next(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function s2(t4) {
                try {
                  u2(n2.throw(t4));
                } catch (t5) {
                  i2(t5);
                }
              }
              function u2(t4) {
                var e4;
                t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
                  t5(e4);
                })).then(a2, s2);
              }
              u2((n2 = n2.apply(t3, e3 || [])).next());
            });
          }, B = function(t3, e3) {
            var r3, n2, o2, i2, a2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r3 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                        return o2;
                      switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, n2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < o2[1]) {
                            a2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && a2.label < o2[2]) {
                            a2.label = o2[2], a2.ops.push(i4);
                            break;
                          }
                          o2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = e3.call(t3, a2);
                    } catch (t4) {
                      i4 = [6, t4], n2 = 0;
                    } finally {
                      r3 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          const q = function() {
            function t3(t4) {
              this._options = t4 ? O(a(C, t4)) : C, this.update();
            }
            return t3._clearContainer = function(t4) {
              t4 && (t4.innerHTML = "");
            }, t3.prototype._setupSvg = function() {
              var t4 = this;
              if (this._qr) {
                var e3 = new _(this._options);
                this._svg = e3.getElement(), this._svgDrawingPromise = e3.drawQR(this._qr).then(function() {
                  var r3;
                  t4._svg && (null === (r3 = t4._extension) || void 0 === r3 || r3.call(t4, e3.getElement(), t4._options));
                });
              }
            }, t3.prototype._setupCanvas = function() {
              var t4, e3 = this;
              this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = null === (t4 = this._svgDrawingPromise) || void 0 === t4 ? void 0 : t4.then(function() {
                if (e3._svg) {
                  var t5 = e3._svg, r3 = new XMLSerializer().serializeToString(t5), n2 = "data:image/svg+xml;base64," + btoa(r3), o2 = new Image();
                  return new Promise(function(t6) {
                    o2.onload = function() {
                      var r4, n3;
                      null === (n3 = null === (r4 = e3._canvas) || void 0 === r4 ? void 0 : r4.getContext("2d")) || void 0 === n3 || n3.drawImage(o2, 0, 0), t6();
                    }, o2.src = n2;
                  });
                }
              }));
            }, t3.prototype._getElement = function(t4) {
              return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
                return B(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return "svg" !== t4.toLowerCase() ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                    case 1:
                      return e3.sent(), [2, this._svg];
                    case 2:
                      return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                    case 3:
                      return e3.sent(), [2, this._canvas];
                  }
                });
              });
            }, t3.prototype.update = function(e3) {
              t3._clearContainer(this._container), this._options = e3 ? O(a(this._options, e3)) : this._options, this._options.data && (this._qr = P()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t4) {
                switch (true) {
                  case /^[0-9]*$/.test(t4):
                    return "Numeric";
                  case /^[0-9A-Z $%*+\-./:]*$/.test(t4):
                    return "Alphanumeric";
                  default:
                    return "Byte";
                }
              }(this._options.data)), this._qr.make(), this._options.type === x ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
            }, t3.prototype.append = function(t4) {
              if (t4) {
                if ("function" != typeof t4.appendChild)
                  throw "Container should be a single DOM node";
                this._options.type === x ? this._canvas && t4.appendChild(this._canvas) : this._svg && t4.appendChild(this._svg), this._container = t4;
              }
            }, t3.prototype.applyExtension = function(t4) {
              if (!t4)
                throw "Extension function should be defined.";
              this._extension = t4, this.update();
            }, t3.prototype.deleteExtension = function() {
              this._extension = void 0, this.update();
            }, t3.prototype.getRawData = function(t4) {
              return void 0 === t4 && (t4 = "png"), z(this, void 0, void 0, function() {
                var e3, r3, n2;
                return B(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return [4, this._getElement(t4)];
                    case 1:
                      return (e3 = o2.sent()) ? "svg" === t4.toLowerCase() ? (r3 = new XMLSerializer(), n2 = r3.serializeToString(e3), [2, new Blob(['<?xml version="1.0" standalone="no"?>\r\n' + n2], { type: "image/svg+xml" })]) : [2, new Promise(function(r4) {
                        return e3.toBlob(r4, "image/" + t4, 1);
                      })] : [2, null];
                  }
                });
              });
            }, t3.prototype.download = function(t4) {
              return z(this, void 0, void 0, function() {
                var e3, r3, n2, o2, i2;
                return B(this, function(a2) {
                  switch (a2.label) {
                    case 0:
                      if (!this._qr)
                        throw "QR code is empty";
                      return e3 = "png", r3 = "qr", "string" == typeof t4 ? (e3 = t4, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t4 && null !== t4 && (t4.name && (r3 = t4.name), t4.extension && (e3 = t4.extension)), [4, this._getElement(e3)];
                    case 1:
                      return (n2 = a2.sent()) ? ("svg" === e3.toLowerCase() ? (o2 = new XMLSerializer(), i2 = '<?xml version="1.0" standalone="no"?>\r\n' + (i2 = o2.serializeToString(n2)), s("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i2), r3 + ".svg")) : s(n2.toDataURL("image/" + e3), r3 + "." + e3), [2]) : [2];
                  }
                });
              });
            }, t3;
          }();
        } }, e = {};
        function r(n) {
          if (e[n])
            return e[n].exports;
          var o = e[n] = { exports: {} };
          return t[n](o, o.exports, r), o.exports;
        }
        return r.n = (t2) => {
          var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
          return r.d(e2, { a: e2 }), e2;
        }, r.d = (t2, e2) => {
          for (var n in e2)
            r.o(e2, n) && !r.o(t2, n) && Object.defineProperty(t2, n, { enumerable: true, get: e2[n] });
        }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r(676);
      })().default;
    });
  }
});

// node_modules/ngx-qrcode-styling/fesm2022/ngx-qrcode-styling.mjs
var import_qr_code_styling = __toESM(require_qr_code_styling(), 1);
var _c0 = ["*"];
var Templates = (name) => {
  switch (name) {
    case "default":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#202020"
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
    case "ocean":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "dots",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#36CDA5"
            }, {
              offset: 1,
              color: "#1582AE"
            }, {
              offset: 2,
              color: "#0277BD"
            }]
          }
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersSquareOptions: {
          type: "square"
        }
      };
    case "sunflower":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "dots",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#BB8412"
            }, {
              offset: 1,
              color: "#4D762E"
            }, {
              offset: 2,
              color: "#2F702F"
            }]
          }
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#006B3B",
          type: "dot"
        },
        cornersSquareOptions: {
          color: "#006B3B",
          type: "extra-rounded"
        }
      };
    case "luxury":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "classy-rounded",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#E29C0F"
            }, {
              offset: 1,
              color: "#913C0C"
            }, {
              offset: 2,
              color: "#732E0C"
            }]
          }
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#732E0C",
          type: "dot"
        },
        cornersSquareOptions: {
          color: "#732E0C",
          type: "extra-rounded"
        }
      };
    case "bitcoin":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#3a3a3a",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#ff9900"
        },
        cornersSquareOptions: {
          type: "extra-rounded"
        }
      };
    case "starbucks":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#3a3a3a",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#00643C",
          type: "dot"
        },
        cornersSquareOptions: {
          color: "#00643C",
          type: "extra-rounded"
        }
      };
    case "angular":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#c3002f",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
    case "facebook":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#4D72A9",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
    case "beans":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#416B2C",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#60A541",
          type: "dot"
        },
        cornersSquareOptions: {
          type: "extra-rounded"
        }
      };
    case "green":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#006B3B",
          type: "dots"
        },
        backgroundOptions: {
          color: "#ffffff"
        },
        cornersDotOptions: {
          color: "#006B3B",
          type: "dot"
        },
        cornersSquareOptions: {
          color: "#006B3B",
          type: "extra-rounded"
        }
      };
    case "sky":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#2c7597",
          type: "rounded"
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
    case "mosaic":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "rounded",
          gradient: {
            rotation: 190,
            type: "linear",
            colorStops: [{
              offset: 0,
              color: "#0277BD"
            }, {
              offset: 1,
              color: "#943A40"
            }, {
              offset: 2,
              color: "#A13535"
            }]
          }
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
    case "coffee":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#5E4F39",
          type: "dots"
        },
        backgroundOptions: {
          color: "#FAEDE7"
        }
      };
    case "vintage":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#2D7363",
          type: "extra-rounded"
        },
        backgroundOptions: {
          color: "#E7E5C5"
        },
        cornersDotOptions: {
          color: "#BE8C49"
        },
        cornersSquareOptions: {
          color: "#2D7363"
        }
      };
    case "stamp":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#2a3c16",
          type: "square"
        },
        backgroundOptions: {
          color: "#9cc66e"
        },
        cornersDotOptions: {
          color: "#4c692c"
        },
        cornersSquareOptions: {
          color: "#2a3c16"
        }
      };
    case "chess":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#F4EAA5",
          type: "dots"
        },
        backgroundOptions: {
          color: "#494B49"
        }
      };
    case "jungle":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "classy-rounded",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#84b931"
            }, {
              offset: 1,
              color: "#537234"
            }, {
              offset: 2,
              color: "#537234"
            }]
          }
        },
        cornersSquareOptions: {
          color: "#434343",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#84b931"
            }, {
              offset: 1,
              color: "#537234"
            }, {
              offset: 2,
              color: "#537234"
            }]
          }
        }
      };
    case "arabic":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "classy-rounded",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#393939"
            }, {
              offset: 1,
              color: "#393939"
            }, {
              offset: 2,
              color: "#393939"
            }]
          }
        },
        cornersSquareOptions: {
          color: "#434343",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#393939"
            }, {
              offset: 1,
              color: "#72a28b"
            }, {
              offset: 2,
              color: "#72a28b"
            }]
          }
        }
      };
    case "tea":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "extra-rounded",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#72b0b4"
            }, {
              offset: 1,
              color: "#035558"
            }, {
              offset: 2,
              color: "#035558"
            }]
          }
        },
        cornersSquareOptions: {
          color: "#434343",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#72b0b4"
            }, {
              offset: 1,
              color: "#035558"
            }, {
              offset: 2,
              color: "#035558"
            }]
          }
        }
      };
    case "grape":
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          type: "rounded",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#7076ae"
            }, {
              offset: 1,
              color: "#2a3240"
            }, {
              offset: 2,
              color: "#2a3240"
            }]
          }
        },
        cornersSquareOptions: {
          color: "#434343",
          gradient: {
            type: "radial",
            colorStops: [{
              offset: 0,
              color: "#7b7cb5"
            }, {
              offset: 1,
              color: "#2a3240"
            }, {
              offset: 2,
              color: "#2a3240"
            }]
          }
        }
      };
    default:
      return {
        data: "",
        qrOptions: {
          errorCorrectionLevel: "Q"
        },
        dotsOptions: {
          color: "#202020"
        },
        backgroundOptions: {
          color: "#ffffff"
        }
      };
  }
};
function drawQrcode(config, container) {
  const subject = new AsyncSubject();
  if (!config || !container) {
    subject.error("Container or Config not available!");
    subject.complete();
    return subject;
  }
  ;
  const element = document.createElement("div");
  const QRCODE_NONE_FRAME = () => {
    if (config?.frameOptions) {
      return false;
    } else {
      const encodeConfig = () => {
        let deep = config && JSON.parse(JSON.stringify(config));
        return Object.assign({
          data: window.unescape(encodeURIComponent(deep?.data ?? ""))
        }, deep);
      };
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      const CR = new import_qr_code_styling.default(encodeConfig());
      CR.append(container);
      return true;
    }
  };
  const styleName = config?.frameOptions?.style ?? "F_020";
  const height = config?.frameOptions?.height ?? 300;
  const width = config?.frameOptions?.width ?? 300;
  const x = config?.frameOptions?.x ?? 50;
  const y = config?.frameOptions?.y ?? 50;
  const ADD_FRAME_SVG_TO_ELEMENT = () => {
    const http = fetch(`https://cdn.jsdelivr.net/gh/id1945/ngx-qrcode-styling/svg/1.2.9/${styleName}.svg`, {
      method: "GET"
    });
    return new Promise((resolve, reject) => {
      http.then((response) => response.text()).then((result) => {
        if (result !== "404: Not Found") {
          upgradeSvg(result);
        }
        resolve(result);
      }).catch((error) => {
        console.error(error);
        reject(error);
      });
    });
  };
  const upgradeSvg = (result) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(result, "image/svg+xml");
    if (doc) {
      const svgEl = doc.documentElement.children[styleName + "_svg"];
      if (!svgEl)
        return;
      const textEls = svgEl.getElementsByClassName("frame-text");
      const contentEls = svgEl.getElementsByClassName("frame-content");
      const containerEls = svgEl.getElementsByClassName("frame-container");
      config?.frameOptions?.background && svgEl.setAttribute("style", `background: ${config?.frameOptions?.background};${svgEl?.getAttribute("style")}`);
      const updateStyle = (el, config2) => {
        if (el) {
          for (const key in config2) {
            if (["x", "y", "transform"].includes(key)) {
              el.setAttribute(key, config2 && config2[key]);
            } else if (["textContent"].includes(key)) {
              el[key] = config2 && config2[key];
            } else {
              el.style[key] = config2 && config2[key];
            }
          }
        }
      };
      const createElementNS = (config2) => {
        const svgNS = "http://www.w3.org/2000/svg";
        const newText = document.createElementNS(svgNS, "text");
        updateStyle(newText, config2);
        svgEl.appendChild(newText);
      };
      if (config?.frameOptions?.texts) {
        [...config.frameOptions.texts].forEach((text, i) => {
          const el = [...textEls]?.[i];
          el ? updateStyle(el, text) : createElementNS(text);
        });
      }
      if (config?.frameOptions?.containers) {
        [...containerEls].forEach((el, i) => {
          updateStyle(el, config?.frameOptions?.containers?.[i]);
        });
      }
      if (config?.frameOptions?.contents) {
        [...contentEls].forEach((el, i) => {
          updateStyle(el, config?.frameOptions?.contents?.[i]);
        });
      }
      element.appendChild(doc.documentElement);
    }
  };
  const UPDATE_POSITION_QRCODE_ON_FRAME = () => {
    const after = element.querySelector(".ngx_qrcode_styling_after");
    if (after && config?.zIndex === 1) {
      after?.setAttribute("transform", `translate(${x},${y})`);
      return after;
    }
    const before = element.querySelector(".ngx_qrcode_styling_before");
    before?.setAttribute("transform", `translate(${x},${y})`);
    return before;
  };
  const UPDATE_ROTATE_SCALE_QRCODE_ON_FRAME = (svg) => {
    if (svg && config?.rotate) {
      svg?.childNodes?.[0]?.childNodes?.forEach((node) => {
        if (node.nodeName === "rect") {
          node.style.transformOrigin = `50% 50%`;
          node.style.transform = `rotate(${config?.rotate ?? 0}deg)`;
        }
      });
    }
    if (svg && config?.scale) {
      svg?.childNodes?.[0]?.childNodes?.forEach((node) => {
        if (node.nodeName === "rect") {
          node.style.scale = config?.scale ?? 0;
        }
      });
    }
  };
  const CREATE_QRCODE_INTO_FRAME = (addsvg) => {
    const defaultConfig = () => {
      let deep = config && JSON.parse(JSON.stringify(config));
      deep = __spreadValues(__spreadValues({}, deep), {
        type: "svg",
        data: window.unescape(encodeURIComponent(deep?.data ?? ""))
      });
      delete deep.frameOptions;
      delete deep.template;
      return deep;
    };
    while (container?.firstChild) {
      container.removeChild(container.lastChild);
    }
    const CR = new import_qr_code_styling.default(defaultConfig());
    return CR?._svgDrawingPromise?.then(() => {
      CR.append(addsvg);
    }).catch((error) => console.error(error));
  };
  const QRCODE_TYPE_SVG = () => {
    if (config?.type === "svg") {
      UPDATE_SIZE_SVG();
      container.appendChild(element);
      return true;
    }
    return false;
  };
  const CREATE_CANVAS_WITH_SIZE = () => {
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    container.appendChild(canvas);
    return canvas;
  };
  const ELEMENT_CONVERT_TO_BASE64 = (s1) => {
    let b64 = "data:image/svg+xml;base64,";
    const xml = s1 && new XMLSerializer().serializeToString(s1);
    return b64 += xml && btoa(unescape(encodeURIComponent(xml)));
  };
  const UPDATE_SIZE_SVG = () => {
    const s1 = element.querySelector(`#${styleName}_svg`);
    s1 && s1.setAttribute("height", `${height}px`);
    s1 && s1.setAttribute("width", `${width}px`);
    return s1;
  };
  const BASE64_TO_BLOB = (base64Image) => {
    const parts = base64Image.split(";base64,");
    const imageType = parts[0].split(":")[1];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: imageType
    });
  };
  const CREATE_IMAGE = () => {
    const img = new Image();
    const ctx = CREATE_CANVAS_WITH_SIZE().getContext("2d");
    img.onload = function() {
      ctx && ctx.drawImage(img, 0, 0);
    };
    const blob = BASE64_TO_BLOB(ELEMENT_CONVERT_TO_BASE64(UPDATE_SIZE_SVG()));
    const blobUrl = URL.createObjectURL(blob);
    img.src = blobUrl;
  };
  (function() {
    return __async(this, null, function* () {
      if (QRCODE_NONE_FRAME()) {
        subject.next({
          config,
          container
        });
        subject.complete();
        return;
      } else {
        yield ADD_FRAME_SVG_TO_ELEMENT();
        const ADDSVG = UPDATE_POSITION_QRCODE_ON_FRAME();
        yield CREATE_QRCODE_INTO_FRAME(ADDSVG);
        UPDATE_ROTATE_SCALE_QRCODE_ON_FRAME(ADDSVG);
        if (QRCODE_TYPE_SVG()) {
          subject.next({
            config,
            container
          });
          subject.complete();
        } else {
          CREATE_IMAGE();
          subject.next({
            config,
            container
          });
          subject.complete();
        }
      }
    });
  })();
  return subject;
}
var defaultTemplate = (config) => {
  let deep = config && JSON.parse(JSON.stringify(config));
  return config?.template ? __spreadValues(__spreadValues({}, Templates(config.template.toLocaleLowerCase())), deep) : deep;
};
var deepUpdate = (config, configUpdate) => __async(void 0, null, function* () {
  const origin = config && JSON.parse(JSON.stringify(config));
  let clone = __spreadValues(__spreadValues({}, origin), configUpdate);
  const keys = ["frameOptions", "qrOptions", "imageOptions", "dotsOptions", "cornersSquareOptions", "cornersDotOptions", "backgroundOptions"];
  try {
    for (var iter = __forAwait(keys), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
      const key = temp.value;
      if (key in configUpdate) {
        const update = {
          [key]: __spreadValues(__spreadValues({}, origin[key]), configUpdate[key])
        };
        clone = __spreadValues(__spreadValues({}, clone), update);
      }
    }
  } catch (temp) {
    error = [temp];
  } finally {
    try {
      more && (temp = iter.return) && (yield temp.call(iter));
    } finally {
      if (error)
        throw error[0];
    }
  }
  return clone;
});
var _NgxQrcodeStylingService = class _NgxQrcodeStylingService {
  /**
   * create
   * @param config
   * @param container
   * @returns
   */
  create(config, container) {
    return drawQrcode(defaultTemplate(config), container);
  }
  /**
   * update
   * @param config
   * @param configUpdate
   * @param container
   * @returns
   */
  update(config, configUpdate, container) {
    const subject = new AsyncSubject();
    (function() {
      return __async(this, null, function* () {
        const conf = yield deepUpdate(defaultTemplate(config), defaultTemplate(configUpdate));
        drawQrcode(conf, container).subscribe((s) => {
          subject.next(s);
          subject.complete();
        });
      });
    })();
    return subject;
  }
  /**
   * download image
   * @param fileName eg: demo.png
   * @param container
   * @param timeout
   * @returns
   */
  download(container, fileName = "", timeout = 0) {
    const subject = new AsyncSubject();
    const _fileName = (type) => {
      if (!fileName) {
        fileName = `ngx_qrcode_styling_${Date.now()}.${type}`;
      }
    };
    const _download = (dataURL) => {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataURL;
      link.click();
      link.remove();
    };
    const _complete = (url) => {
      if (url) {
        _download(url);
        subject.next({
          fileName,
          container,
          url
        });
        subject.complete();
      } else {
        subject.error("Container not found!");
        subject.complete();
      }
    };
    setTimeout(() => {
      const canvas = container?.querySelector("canvas");
      if (canvas) {
        _fileName("png");
        const typeImg = fileName ? fileName?.split(".")?.slice(-1)?.toString() : "png";
        canvas.toBlob((blob) => _complete(URL.createObjectURL(blob)), "image/" + typeImg);
      } else {
        const svg = container?.querySelector("svg");
        if (svg) {
          _fileName("svg");
          const svgData = svg.outerHTML;
          const svgBlob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8"
          });
          const svgUrl = URL.createObjectURL(svgBlob);
          _complete(svgUrl);
        } else {
          _complete("");
        }
      }
    }, timeout);
    return subject;
  }
};
_NgxQrcodeStylingService.ɵfac = function NgxQrcodeStylingService_Factory(t) {
  return new (t || _NgxQrcodeStylingService)();
};
_NgxQrcodeStylingService.ɵprov = ɵɵdefineInjectable({
  token: _NgxQrcodeStylingService,
  factory: _NgxQrcodeStylingService.ɵfac,
  providedIn: "root"
});
var NgxQrcodeStylingService = _NgxQrcodeStylingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxQrcodeStylingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NgxQrcodeStylingComponent = class _NgxQrcodeStylingComponent {
  constructor(canvas, service) {
    this.canvas = canvas;
    this.service = service;
    this.template = "default";
    this.scale = 0;
    this.rotate = 0;
    this.zIndex = 2;
  }
  ngOnInit() {
    if (this.canvas) {
      if (this.template)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          template: this.template
        });
      if (this.type)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          type: this.type
        });
      if (this.shape)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          shape: this.shape
        });
      if (this.width)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          width: this.width
        });
      if (this.height)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          height: this.height
        });
      if (this.margin)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          margin: this.margin
        });
      if (this.data)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          data: this.data
        });
      if (this.image)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          image: this.image
        });
      if (this.scale)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          scale: this.scale
        });
      if (this.rotate)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          rotate: this.rotate
        });
      if (this.zIndex)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          zIndex: this.zIndex
        });
      if (this.frameOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          frameOptions: this.frameOptions
        });
      if (this.qrOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          qrOptions: this.qrOptions
        });
      if (this.imageOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          imageOptions: this.imageOptions
        });
      if (this.dotsOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          dotsOptions: this.dotsOptions
        });
      if (this.cornersSquareOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          cornersSquareOptions: this.cornersSquareOptions
        });
      if (this.cornersDotOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          cornersDotOptions: this.cornersDotOptions
        });
      if (this.backgroundOptions)
        this.config = __spreadProps(__spreadValues({}, this.config), {
          backgroundOptions: this.backgroundOptions
        });
      this.create(this.config);
    }
  }
  /**
   * create
   * @param config
   * @returns
   */
  create(config) {
    return this.service.create(config, this.canvas.nativeElement);
  }
  /**
   * update
   * @param config
   * @param configUpdate
   * @returns
   */
  update(config, configUpdate) {
    return this.service.update(config, configUpdate, this.canvas.nativeElement);
  }
  /**
   * download image
   * @param fileName eg: demo.png
   * @param timeout
   * @returns
   */
  download(fileName, timeout = 0) {
    return this.service.download(this.canvas.nativeElement, fileName, timeout);
  }
};
_NgxQrcodeStylingComponent.ɵfac = function NgxQrcodeStylingComponent_Factory(t) {
  return new (t || _NgxQrcodeStylingComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxQrcodeStylingService));
};
_NgxQrcodeStylingComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxQrcodeStylingComponent,
  selectors: [["ngx-qrcode-styling"]],
  inputs: {
    config: "config",
    template: "template",
    type: "type",
    shape: "shape",
    width: "width",
    height: "height",
    margin: "margin",
    data: "data",
    image: "image",
    scale: "scale",
    rotate: "rotate",
    zIndex: "zIndex",
    frameOptions: "frameOptions",
    qrOptions: "qrOptions",
    imageOptions: "imageOptions",
    dotsOptions: "dotsOptions",
    cornersSquareOptions: "cornersSquareOptions",
    cornersDotOptions: "cornersDotOptions",
    backgroundOptions: "backgroundOptions"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NgxQrcodeStylingComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NgxQrcodeStylingComponent = _NgxQrcodeStylingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxQrcodeStylingComponent, [{
    type: Component,
    args: [{
      selector: "ngx-qrcode-styling",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgxQrcodeStylingService
    }];
  }, {
    config: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    scale: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    frameOptions: [{
      type: Input
    }],
    qrOptions: [{
      type: Input
    }],
    imageOptions: [{
      type: Input
    }],
    dotsOptions: [{
      type: Input
    }],
    cornersSquareOptions: [{
      type: Input
    }],
    cornersDotOptions: [{
      type: Input
    }],
    backgroundOptions: [{
      type: Input
    }]
  });
})();
var _NgxQrcodeStylingModule = class _NgxQrcodeStylingModule {
};
_NgxQrcodeStylingModule.ɵfac = function NgxQrcodeStylingModule_Factory(t) {
  return new (t || _NgxQrcodeStylingModule)();
};
_NgxQrcodeStylingModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxQrcodeStylingModule,
  declarations: [NgxQrcodeStylingComponent],
  exports: [NgxQrcodeStylingComponent]
});
_NgxQrcodeStylingModule.ɵinj = ɵɵdefineInjector({
  providers: [NgxQrcodeStylingService]
});
var NgxQrcodeStylingModule = _NgxQrcodeStylingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxQrcodeStylingModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxQrcodeStylingComponent],
      exports: [NgxQrcodeStylingComponent],
      providers: [NgxQrcodeStylingService]
    }]
  }], null, null);
})();
export {
  NgxQrcodeStylingComponent,
  NgxQrcodeStylingModule,
  NgxQrcodeStylingService,
  Templates
};
//# sourceMappingURL=ngx-qrcode-styling.js.map
