"undefined" != typeof window && function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Hls = e() : t.Hls = e()
}(this, (function() {
    return function(t) {
        var e = {};

        function r(i) {
            if (e[i]) return e[i].exports;
            var a = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, i) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var a in t) r.d(i, a, function(e) {
                    return t[e]
                }.bind(null, a));
            return i
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/dist/", r(r.s = 19)
    }([function(t, e, r) {
        "use strict";
        var i;
        r.d(e, "a", (function() {
                return i
            })),
            function(t) {
                t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"
            }(i || (i = {}))
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })), r.d(e, "b", (function() {
            return l
        }));
        var i = function() {},
            a = {
                trace: i,
                debug: i,
                log: i,
                warn: i,
                info: i,
                error: i
            },
            n = a;

        function s(t) {
            var e = self.console[t];
            return e ? e.bind(self.console, "[" + t + "] >") : i
        }

        function o(t) {
            if (self.console && !0 === t || "object" == typeof t) {
                ! function(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                    r.forEach((function(e) {
                        n[e] = t[e] ? t[e].bind(t) : s(e)
                    }))
                }(t, "debug", "log", "info", "warn", "error");
                try {
                    n.log()
                } catch (t) {
                    n = a
                }
            } else n = a
        }
        var l = a
    }, function(t, e, r) {
        "use strict";
        var i, a;
        r.d(e, "b", (function() {
                return i
            })), r.d(e, "a", (function() {
                return a
            })),
            function(t) {
                t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError"
            }(i || (i = {})),
            function(t) {
                t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown"
            }(a || (a = {}))
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = Number.isFinite || function(t) {
            return "number" == typeof t && isFinite(t)
        };
        Number.MAX_SAFE_INTEGER
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        })), r.d(e, "c", (function() {
            return g
        })), r.d(e, "b", (function() {
            return v
        }));
        var i, a = r(3),
            n = r(10),
            s = r(1),
            o = r(16),
            l = r(11);

        function u(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, d(t, e)
        }

        function d(t, e) {
            return (d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function h(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function c(t, e, r) {
            return e && h(t.prototype, e), r && h(t, r), t
        }! function(t) {
            t.AUDIO = "audio", t.VIDEO = "video", t.AUDIOVIDEO = "audiovideo"
        }(i || (i = {}));
        var f = function() {
                function t(t) {
                    var e;
                    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[i.AUDIO] = null, e[i.VIDEO] = null, e[i.AUDIOVIDEO] = null, e), this.baseurl = t
                }
                return t.prototype.setByteRange = function(t, e) {
                    var r = t.split("@", 2),
                        i = [];
                    1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
                }, c(t, [{
                    key: "byteRange",
                    get: function() {
                        return this._byteRange ? this._byteRange : []
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0]
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1]
                    }
                }, {
                    key: "url",
                    get: function() {
                        return !this._url && this.baseurl && this.relurl && (this._url = Object(n.buildAbsoluteURL)(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url || ""
                    },
                    set: function(t) {
                        this._url = t
                    }
                }]), t
            }(),
            g = function(t) {
                function e(e, r) {
                    var i;
                    return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkey = void 0, i.type = void 0, i.loader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.appendedPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new l.a, i.urlId = 0, i.data = void 0, i.bitrateTest = !1, i.title = null, i.type = e, i
                }
                u(e, t);
                var r = e.prototype;
                return r.createInitializationVector = function(t) {
                    for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                    return e
                }, r.setDecryptDataFromLevelKey = function(t, e) {
                    var r = t;
                    return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((r = o.a.fromURI(t.uri)).method = t.method, r.iv = this.createInitializationVector(e), r.keyFormat = "identity"), r
                }, r.setElementaryStreamInfo = function(t, e, r, i, a, n) {
                    void 0 === n && (n = !1);
                    var s = this.elementaryStreams,
                        o = s[t];
                    o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, a)) : s[t] = {
                        startPTS: e,
                        endPTS: r,
                        startDTS: i,
                        endDTS: a,
                        partial: n
                    }
                }, r.clearElementaryStreamInfo = function() {
                    var t = this.elementaryStreams;
                    t[i.AUDIO] = null, t[i.VIDEO] = null, t[i.AUDIOVIDEO] = null
                }, c(e, [{
                    key: "decryptdata",
                    get: function() {
                        if (!this.levelkey && !this._decryptdata) return null;
                        if (!this._decryptdata && this.levelkey) {
                            var t = this.sn;
                            "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                        }
                        return this._decryptdata
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration
                    }
                }, {
                    key: "endProgramDateTime",
                    get: function() {
                        if (null === this.programDateTime) return null;
                        if (!Object(a.a)(this.programDateTime)) return null;
                        var t = Object(a.a)(this.duration) ? this.duration : 0;
                        return this.programDateTime + 1e3 * t
                    }
                }, {
                    key: "encrypted",
                    get: function() {
                        var t;
                        return !(null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
                    }
                }]), e
            }(f),
            v = function(t) {
                function e(e, r, i, a, n) {
                    var s;
                    (s = t.call(this, i) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new l.a, s.duration = e.decimalFloatingPoint("DURATION"), s.gap = e.bool("GAP"), s.independent = !e.INDEPENDENT || e.bool("INDEPENDENT"), s.relurl = e.enumeratedString("URI"), s.fragment = r, s.index = a;
                    var o = e.enumeratedString("BYTERANGE");
                    return o && s.setByteRange(o, n), n && (s.fragOffset = n.fragOffset + n.duration), s
                }
                return u(e, t), c(e, [{
                    key: "start",
                    get: function() {
                        return this.fragment.start + this.fragOffset
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration
                    }
                }, {
                    key: "loaded",
                    get: function() {
                        var t = this.elementaryStreams;
                        return !!(t.audio || t.video || t.audiovideo)
                    }
                }]), e
            }(f)
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return d
        })), r.d(e, "g", (function() {
            return h
        })), r.d(e, "f", (function() {
            return c
        })), r.d(e, "d", (function() {
            return f
        })), r.d(e, "c", (function() {
            return g
        })), r.d(e, "e", (function() {
            return p
        })), r.d(e, "h", (function() {
            return m
        })), r.d(e, "a", (function() {
            return y
        }));
        var i = r(8),
            a = r(4),
            n = Math.pow(2, 32) - 1,
            s = [].push;

        function o(t) {
            return String.fromCharCode.apply(null, t)
        }

        function l(t, e) {
            "data" in t && (e += t.start, t = t.data);
            var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
            return r < 0 ? 4294967296 + r : r
        }

        function u(t, e, r) {
            "data" in t && (e += t.start, t = t.data), t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
        }

        function d(t, e) {
            var r, i, a, n = [];
            if (!e.length) return n;
            "data" in t ? (r = t.data, i = t.start, a = t.end) : (i = 0, a = (r = t).byteLength);
            for (var u = i; u < a;) {
                var h = l(r, u),
                    c = h > 1 ? u + h : a;
                if (o(r.subarray(u + 4, u + 8)) === e[0])
                    if (1 === e.length) n.push({
                        data: r,
                        start: u + 8,
                        end: c
                    });
                    else {
                        var f = d({
                            data: r,
                            start: u + 8,
                            end: c
                        }, e.slice(1));
                        f.length && s.apply(n, f)
                    } u = c
            }
            return n
        }

        function h(t) {
            var e = d(t, ["moov"]),
                r = e ? e[0] : null,
                i = r ? r.end : null,
                a = d(t, ["sidx"]);
            if (!a || !a[0]) return null;
            var n = [],
                s = a[0],
                o = s.data[0],
                u = 0 === o ? 8 : 16,
                h = l(s, u);
            u += 4;
            u += 0 === o ? 8 : 16, u += 2;
            var c = s.end + 0,
                f = function(t, e) {
                    "data" in t && (e += t.start, t = t.data);
                    var r = t[e] << 8 | t[e + 1];
                    return r < 0 ? 65536 + r : r
                }(s, u);
            u += 2;
            for (var g = 0; g < f; g++) {
                var v = u,
                    p = l(s, v);
                v += 4;
                var m = 2147483647 & p;
                if (1 === (2147483648 & p) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
                var y = l(s, v);
                v += 4, n.push({
                    referenceSize: m,
                    subsegmentDuration: y,
                    info: {
                        duration: y / h,
                        start: c,
                        end: c + m - 1
                    }
                }), c += m, u = v += 4
            }
            return {
                earliestPresentationTime: 0,
                timescale: h,
                version: o,
                referencesCount: f,
                references: n,
                moovEndOffset: i
            }
        }

        function c(t) {
            for (var e = [], r = d(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                var n = r[i],
                    s = d(n, ["tkhd"])[0];
                if (s) {
                    var u = s.data[s.start],
                        h = 0 === u ? 12 : 20,
                        c = l(s, h),
                        f = d(n, ["mdia", "mdhd"])[0];
                    if (f) {
                        var g = l(f, h = 0 === (u = f.data[f.start]) ? 12 : 20),
                            v = d(n, ["mdia", "hdlr"])[0];
                        if (v) {
                            var p = o(v.data.subarray(v.start + 8, v.start + 12)),
                                m = {
                                    soun: a.a.AUDIO,
                                    vide: a.a.VIDEO
                                } [p];
                            if (m) {
                                var y = d(n, ["mdia", "minf", "stbl", "stsd"]),
                                    T = void 0;
                                if (y.length) {
                                    var E = y[0];
                                    T = o(E.data.subarray(E.start + 12, E.start + 16))
                                }
                                e[c] = {
                                    timescale: g,
                                    type: m
                                }, e[m] = {
                                    timescale: g,
                                    id: c,
                                    codec: T
                                }
                            }
                        }
                    }
                }
            }
            return d(t, ["moov", "mvex", "trex"]).forEach((function(t) {
                var r = l(t, 4),
                    i = e[r];
                i && (i.default = {
                    duration: l(t, 12),
                    flags: l(t, 20)
                })
            })), e
        }

        function f(t, e) {
            return d(e, ["moof", "traf"]).reduce((function(e, r) {
                var i = d(r, ["tfdt"])[0],
                    a = i.data[i.start],
                    n = d(r, ["tfhd"]).reduce((function(e, r) {
                        var n = l(r, 4),
                            s = t[n];
                        if (s) {
                            var o = l(i, 4);
                            1 === a && (o *= Math.pow(2, 32), o += l(i, 8));
                            var u = o / (s.timescale || 9e4);
                            if (isFinite(u) && (null === e || u < e)) return u
                        }
                        return e
                    }), null);
                return null !== n && isFinite(n) && (null === e || n < e) ? n : e
            }), null) || 0
        }

        function g(t, e) {
            for (var r = 0, i = 0, n = 0, s = d(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
                var u = s[o],
                    c = d(u, ["tfhd"])[0],
                    f = e[l(c, 4)];
                if (f) {
                    var g = f.default,
                        p = l(c, 0) | (null == g ? void 0 : g.flags),
                        m = null == g ? void 0 : g.duration;
                    8 & p && (m = l(c, 2 & p ? 12 : 8));
                    for (var y = f.timescale || 9e4, T = d(u, ["trun"]), E = 0; E < T.length; E++) {
                        if (m) r = m * l(T[E], 4);
                        else r = v(T[E]);
                        f.type === a.a.VIDEO ? i += r / y : f.type === a.a.AUDIO && (n += r / y)
                    }
                }
            }
            if (0 === i && 0 === n) {
                var b = h(t);
                if (null != b && b.references) return b.references.reduce((function(t, e) {
                    return t + e.info.duration || 0
                }), 0)
            }
            return i || n
        }

        function v(t) {
            var e = l(t, 0),
                r = 8;
            1 & e && (r += 4), 4 & e && (r += 4);
            for (var i = 0, a = l(t, 4), n = 0; n < a; n++) {
                if (256 & e) i += l(t, r), r += 4;
                512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4)
            }
            return i
        }

        function p(t, e, r) {
            d(e, ["moof", "traf"]).forEach((function(e) {
                d(e, ["tfhd"]).forEach((function(i) {
                    var a = l(i, 4),
                        s = t[a];
                    if (s) {
                        var o = s.timescale || 9e4;
                        d(e, ["tfdt"]).forEach((function(t) {
                            var e = t.data[t.start],
                                i = l(t, 4);
                            if (0 === e) u(t, 4, i - r * o);
                            else {
                                i *= Math.pow(2, 32), i += l(t, 8), i -= r * o, i = Math.max(i, 0);
                                var a = Math.floor(i / (n + 1)),
                                    s = Math.floor(i % (n + 1));
                                u(t, 4, a), u(t, 8, s)
                            }
                        }))
                    }
                }))
            }))
        }

        function m(t) {
            var e = {
                    valid: null,
                    remainder: null
                },
                r = d(t, ["moof"]);
            if (!r) return e;
            if (r.length < 2) return e.remainder = t, e;
            var a = r[r.length - 1];
            return e.valid = Object(i.a)(t, 0, a.start - 8), e.remainder = Object(i.a)(t, a.start - 8), e
        }

        function y(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t), r.set(e, t.length), r
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return s
        })), r.d(e, "a", (function() {
            return l
        })), r.d(e, "d", (function() {
            return u
        })), r.d(e, "e", (function() {
            return d
        })), r.d(e, "c", (function() {
            return c
        })), r.d(e, "f", (function() {
            return y
        }));
        var i, a = function(t, e) {
                return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            },
            n = function(t, e) {
                return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            },
            s = function(t, e) {
                for (var r = e, i = 0; a(t, e);) {
                    i += 10, i += o(t, e + 6), n(t, e + 10) && (i += 10), e += i
                }
                if (i > 0) return t.subarray(r, r + i)
            },
            o = function(t, e) {
                var r = 0;
                return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
            },
            l = function(t, e) {
                return a(t, e) && o(t, e + 6) + 10 <= t.length - e
            },
            u = function(t) {
                for (var e = c(t), r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (d(i)) return m(i)
                }
            },
            d = function(t) {
                return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
            },
            h = function(t) {
                var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                    r = o(t, 4);
                return {
                    type: e,
                    size: r,
                    data: t.subarray(10, 10 + r)
                }
            },
            c = function(t) {
                for (var e = 0, r = []; a(t, e);) {
                    for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s;) {
                        var l = h(t.subarray(e)),
                            u = f(l);
                        u && r.push(u), e += l.size + 10
                    }
                    n(t, e) && (e += 10)
                }
                return r
            },
            f = function(t) {
                return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
            },
            g = function(t) {
                if (!(t.size < 2)) {
                    var e = y(t.data, !0),
                        r = new Uint8Array(t.data.subarray(e.length + 1));
                    return {
                        key: t.type,
                        info: e,
                        data: r.buffer
                    }
                }
            },
            v = function(t) {
                if (!(t.size < 2)) {
                    if ("TXXX" === t.type) {
                        var e = 1,
                            r = y(t.data.subarray(e), !0);
                        e += r.length + 1;
                        var i = y(t.data.subarray(e));
                        return {
                            key: t.type,
                            info: r,
                            data: i
                        }
                    }
                    var a = y(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: a
                    }
                }
            },
            p = function(t) {
                if ("WXXX" === t.type) {
                    if (t.size < 2) return;
                    var e = 1,
                        r = y(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = y(t.data.subarray(e));
                    return {
                        key: t.type,
                        info: r,
                        data: i
                    }
                }
                var a = y(t.data);
                return {
                    key: t.type,
                    data: a
                }
            },
            m = function(t) {
                if (8 === t.data.byteLength) {
                    var e = new Uint8Array(t.data),
                        r = 1 & e[3],
                        i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                    return i /= 45, r && (i += 47721858.84), Math.round(i)
                }
            },
            y = function(t, e) {
                void 0 === e && (e = !1);
                var r = T();
                if (r) {
                    var i = r.decode(t);
                    if (e) {
                        var a = i.indexOf("\0");
                        return -1 !== a ? i.substring(0, a) : i
                    }
                    return i.replace(/\0/g, "")
                }
                for (var n, s, o, l = t.length, u = "", d = 0; d < l;) {
                    if (0 === (n = t[d++]) && e) return u;
                    if (0 !== n && 3 !== n) switch (n >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            u += String.fromCharCode(n);
                            break;
                        case 12:
                        case 13:
                            s = t[d++], u += String.fromCharCode((31 & n) << 6 | 63 & s);
                            break;
                        case 14:
                            s = t[d++], o = t[d++], u += String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | (63 & o) << 0)
                    }
                }
                return u
            };

        function T() {
            return i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")), i
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return a
        })), r.d(e, "b", (function() {
            return n
        })), r.d(e, "a", (function() {
            return s
        }));

        function i(t, e, r, i) {
            void 0 === r && (r = 1), void 0 === i && (i = !1);
            var a = t * e * r;
            return i ? Math.round(a) : a
        }

        function a(t, e, r, a) {
            return void 0 === r && (r = 1), void 0 === a && (a = !1), i(t, e, 1 / r, a)
        }

        function n(t, e) {
            return void 0 === e && (e = !1), i(t, 1e3, 1 / 9e4, e)
        }

        function s(t, e) {
            return void 0 === e && (e = 1), i(t, 9e4, 1 / e)
        }
    }, function(t, e, r) {
        "use strict";

        function i(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }
        r.d(e, "a", (function() {
            return i
        }))
    }, function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return st
        })), r.d(e, "d", (function() {
            return lt
        })), r.d(e, "a", (function() {
            return ut
        })), r.d(e, "b", (function() {
            return dt
        }));
        var i = r(0),
            a = r(2),
            n = r(14),
            s = r(3),
            o = r(6);
        var l = r(5),
            u = r(8),
            d = function() {
                function t() {
                    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null
                }
                var e = t.prototype;
                return e.resetInitSegment = function(t, e, r) {
                    this._id3Track = {
                        type: "id3",
                        id: 0,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0
                    }
                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {}, e.canParse = function(t, e) {
                    return !1
                }, e.appendFrame = function(t, e, r) {}, e.demux = function(t, e) {
                    this.cachedData && (t = Object(l.a)(this.cachedData, t), this.cachedData = null);
                    var r, i, a = o.b(t, 0),
                        n = a ? a.length : 0,
                        s = this._audioTrack,
                        d = this._id3Track,
                        c = a ? o.d(a) : void 0,
                        f = t.length;
                    for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = h(c, e)), a && a.length > 0 && d.samples.push({
                            pts: this.initPTS,
                            dts: this.initPTS,
                            data: a
                        }), i = this.initPTS; n < f;) {
                        if (this.canParse(t, n)) {
                            var g = this.appendFrame(s, t, n);
                            g ? (this.frameIndex++, i = g.sample.pts, r = n += g.length) : n = f
                        } else o.a(t, n) ? (a = o.b(t, n), d.samples.push({
                            pts: i,
                            dts: i,
                            data: a
                        }), r = n += a.length) : n++;
                        if (n === f && r !== f) {
                            var v = Object(u.a)(t, r);
                            this.cachedData ? this.cachedData = Object(l.a)(this.cachedData, v) : this.cachedData = v
                        }
                    }
                    return {
                        audioTrack: s,
                        avcTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        id3Track: d,
                        textTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        }
                    }
                }, e.demuxSampleAes = function(t, e, r) {
                    return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
                }, e.flush = function(t) {
                    return this.cachedData && this.demux(this.cachedData, 0), this.frameIndex = 0, this.cachedData = null, {
                        audioTrack: this._audioTrack,
                        avcTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        id3Track: this._id3Track,
                        textTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        }
                    }
                }, e.destroy = function() {}, t
            }(),
            h = function(t, e) {
                return Object(s.a)(t) ? 90 * t : 9e4 * e
            },
            c = d,
            f = r(1);

        function g(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }

        function v(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }

        function p(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }

        function m(t, e) {
            return e + 1 < t.length && g(t, e)
        }

        function y(t, e) {
            if (m(t, e)) {
                var r = v(t, e);
                if (e + r >= t.length) return !1;
                var i = p(t, e);
                if (i <= r) return !1;
                var a = e + i;
                return a === t.length || m(t, a)
            }
            return !1
        }

        function T(t, e, r, n, s) {
            if (!t.samplerate) {
                var o = function(t, e, r, n) {
                    var s, o, l, u, d = navigator.userAgent.toLowerCase(),
                        h = n,
                        c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    s = 1 + ((192 & e[r + 2]) >>> 6);
                    var g = (60 & e[r + 2]) >>> 2;
                    if (!(g > c.length - 1)) return l = (1 & e[r + 2]) << 2, l |= (192 & e[r + 3]) >>> 6, f.b.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + g + "[" + c[g] + "Hz],channelConfig:" + l), /firefox/i.test(d) ? g >= 6 ? (s = 5, u = new Array(4), o = g - 3) : (s = 2, u = new Array(2), o = g) : -1 !== d.indexOf("android") ? (s = 2, u = new Array(2), o = g) : (s = 5, u = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && g >= 6 ? o = g - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (g >= 6 && 1 === l || /vivaldi/i.test(d)) || !n && 1 === l) && (s = 2, u = new Array(2)), o = g)), u[0] = s << 3, u[0] |= (14 & g) >> 1, u[1] |= (1 & g) << 7, u[1] |= l << 3, 5 === s && (u[1] |= (14 & o) >> 1, u[2] = (1 & o) << 7, u[2] |= 8, u[3] = 0), {
                        config: u,
                        samplerate: c[g],
                        channelCount: l,
                        codec: "mp4a.40." + s,
                        manifestCodec: h
                    };
                    t.trigger(i.a.ERROR, {
                        type: a.b.MEDIA_ERROR,
                        details: a.a.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + g
                    })
                }(e, r, n, s);
                if (!o) return;
                t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, f.b.log("parsed codec:" + t.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
            }
        }

        function E(t) {
            return 9216e4 / t
        }

        function b(t, e, r, i, a) {
            var n = function(t, e, r, i, a) {
                var n = t.length,
                    s = v(t, e),
                    o = p(t, e);
                if ((o -= s) > 0 && e + s + o <= n) return {
                    headerLength: s,
                    frameLength: o,
                    stamp: r + i * a
                }
            }(e, r, i, a, E(t.samplerate));
            if (n) {
                var s = n.stamp,
                    o = n.headerLength,
                    l = n.frameLength,
                    u = {
                        unit: e.subarray(r + o, r + o + l),
                        pts: s,
                        dts: s
                    };
                return t.samples.push(u), {
                    sample: u,
                    length: l + o
                }
            }
        }

        function S(t, e) {
            return (S = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var L = function(t) {
            var e, r;

            function i(e, r) {
                var i;
                return (i = t.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, S(e, r);
            var a = i.prototype;
            return a.resetInitSegment = function(e, r, i) {
                t.prototype.resetInitSegment.call(this, e, r, i), this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 0,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !0,
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }, i.probe = function(t) {
                if (!t) return !1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                    if (y(t, e)) return f.b.log("ADTS sync word found !"), !0;
                return !1
            }, a.canParse = function(t, e) {
                return function(t, e) {
                    return function(t, e) {
                        return e + 5 < t.length
                    }(t, e) && g(t, e) && p(t, e) < t.length - e
                }(t, e)
            }, a.appendFrame = function(t, e, r) {
                return T(t, this.observer, e, r, t.manifestCodec), b(t, e, r, this.initPTS, this.frameIndex)
            }, i
        }(c);
        L.minProbeByteLength = 9;
        var A = L,
            R = function() {
                function t(t, e) {
                    this.remainderData = null, this.config = void 0, this.config = e
                }
                var e = t.prototype;
                return e.resetTimeStamp = function() {}, e.resetInitSegment = function() {}, e.resetContiguity = function() {}, t.probe = function(t) {
                    return Object(l.b)({
                        data: t,
                        start: 0,
                        end: Math.min(t.length, 16384)
                    }, ["moof"]).length > 0
                }, e.demux = function(t) {
                    var e = t,
                        r = {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        };
                    if (this.config.progressive) {
                        this.remainderData && (e = Object(l.a)(this.remainderData, t));
                        var i = Object(l.h)(e);
                        this.remainderData = i.remainder, r.samples = i.valid || new Uint8Array
                    } else r.samples = e;
                    return {
                        audioTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        avcTrack: r,
                        id3Track: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        textTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        }
                    }
                }, e.flush = function() {
                    var t = {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    };
                    return t.samples = this.remainderData || new Uint8Array, this.remainderData = null, {
                        audioTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        avcTrack: t,
                        id3Track: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        },
                        textTrack: {
                            type: "",
                            id: -1,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: -1,
                            samples: [],
                            dropped: 0
                        }
                    }
                }, e.demuxSampleAes = function(t, e, r) {
                    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                }, e.destroy = function() {}, t
            }();
        R.minProbeByteLength = 1024;
        var D = R,
            _ = null,
            k = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            I = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            w = [
                [0, 72, 144, 12],
                [0, 0, 0, 0],
                [0, 72, 144, 12],
                [0, 144, 144, 12]
            ],
            C = [0, 1, 1, 4];

        function O(t, e, r, i, a) {
            if (!(r + 24 > e.length)) {
                var n = x(e, r);
                if (n && r + n.frameLength <= e.length) {
                    var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
                        o = {
                            unit: e.subarray(r, r + n.frameLength),
                            pts: s,
                            dts: s
                        };
                    return t.config = [], t.channelCount = n.channelCount, t.samplerate = n.sampleRate, t.samples.push(o), {
                        sample: o,
                        length: n.frameLength
                    }
                }
            }
        }

        function x(t, e) {
            var r = t[e + 1] >> 3 & 3,
                i = t[e + 1] >> 1 & 3,
                a = t[e + 2] >> 4 & 15,
                n = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
                var s = t[e + 2] >> 1 & 1,
                    o = t[e + 3] >> 6,
                    l = 1e3 * k[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + a - 1],
                    u = I[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + n],
                    d = 3 === o ? 1 : 2,
                    h = w[r][i],
                    c = C[i],
                    f = 8 * h * c,
                    g = Math.floor(h * l / u + s) * c;
                if (null === _) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    _ = v ? parseInt(v[1]) : 0
                }
                return !!_ && _ <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                    sampleRate: u,
                    channelCount: d,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }

        function P(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }

        function M(t, e) {
            return e + 1 < t.length && P(t, e)
        }

        function F(t, e) {
            if (e + 1 < t.length && P(t, e)) {
                var r = x(t, e),
                    i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var a = e + i;
                return a === t.length || M(t, a)
            }
            return !1
        }
        var N = function() {
                function t(t) {
                    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
                }
                var e = t.prototype;
                return e.loadWord = function() {
                    var t = this.data,
                        e = this.bytesAvailable,
                        r = t.byteLength - e,
                        i = new Uint8Array(4),
                        a = Math.min(4, e);
                    if (0 === a) throw new Error("no bytes available");
                    i.set(t.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a
                }, e.skipBits = function(t) {
                    var e;
                    this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                }, e.readBits = function(t) {
                    var e = Math.min(this.bitsAvailable, t),
                        r = this.word >>> 32 - e;
                    return t > 32 && f.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                }, e.skipLZ = function() {
                    var t;
                    for (t = 0; t < this.bitsAvailable; ++t)
                        if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                    return this.loadWord(), t + this.skipLZ()
                }, e.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, e.readUEG = function() {
                    var t = this.skipLZ();
                    return this.readBits(t + 1) - 1
                }, e.readEG = function() {
                    var t = this.readUEG();
                    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                }, e.readBoolean = function() {
                    return 1 === this.readBits(1)
                }, e.readUByte = function() {
                    return this.readBits(8)
                }, e.readUShort = function() {
                    return this.readBits(16)
                }, e.readUInt = function() {
                    return this.readBits(32)
                }, e.skipScalingList = function(t) {
                    for (var e = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r
                }, e.readSPS = function() {
                    var t, e, r, i = 0,
                        a = 0,
                        n = 0,
                        s = 0,
                        o = this.readUByte.bind(this),
                        l = this.readBits.bind(this),
                        u = this.readUEG.bind(this),
                        d = this.readBoolean.bind(this),
                        h = this.skipBits.bind(this),
                        c = this.skipEG.bind(this),
                        f = this.skipUEG.bind(this),
                        g = this.skipScalingList.bind(this);
                    o();
                    var v = o();
                    if (l(5), h(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                        var p = u();
                        if (3 === p && h(1), f(), f(), h(1), d())
                            for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) d() && g(r < 6 ? 16 : 64)
                    }
                    f();
                    var m = u();
                    if (0 === m) u();
                    else if (1 === m)
                        for (h(1), c(), c(), t = u(), r = 0; r < t; r++) c();
                    f(), h(1);
                    var y = u(),
                        T = u(),
                        E = l(1);
                    0 === E && h(1), h(1), d() && (i = u(), a = u(), n = u(), s = u());
                    var b = [1, 1];
                    if (d() && d()) switch (o()) {
                        case 1:
                            b = [1, 1];
                            break;
                        case 2:
                            b = [12, 11];
                            break;
                        case 3:
                            b = [10, 11];
                            break;
                        case 4:
                            b = [16, 11];
                            break;
                        case 5:
                            b = [40, 33];
                            break;
                        case 6:
                            b = [24, 11];
                            break;
                        case 7:
                            b = [20, 11];
                            break;
                        case 8:
                            b = [32, 11];
                            break;
                        case 9:
                            b = [80, 33];
                            break;
                        case 10:
                            b = [18, 11];
                            break;
                        case 11:
                            b = [15, 11];
                            break;
                        case 12:
                            b = [64, 33];
                            break;
                        case 13:
                            b = [160, 99];
                            break;
                        case 14:
                            b = [4, 3];
                            break;
                        case 15:
                            b = [3, 2];
                            break;
                        case 16:
                            b = [2, 1];
                            break;
                        case 255:
                            b = [o() << 8 | o(), o() << 8 | o()]
                    }
                    return {
                        width: Math.ceil(16 * (y + 1) - 2 * i - 2 * a),
                        height: (2 - E) * (T + 1) * 16 - (E ? 2 : 4) * (n + s),
                        pixelRatio: b
                    }
                }, e.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }, t
            }(),
            U = function() {
                function t(t, e, r) {
                    this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new n.a(t, e, {
                        removePKCS7Padding: !1
                    })
                }
                var e = t.prototype;
                return e.decryptBuffer = function(t, e) {
                    this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
                }, e.decryptAacSample = function(t, e, r, i) {
                    var a = t[e].unit,
                        n = a.subarray(16, a.length - a.length % 16),
                        s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
                        o = this;
                    this.decryptBuffer(s, (function(n) {
                        var s = new Uint8Array(n);
                        a.set(s, 16), i || o.decryptAacSamples(t, e + 1, r)
                    }))
                }, e.decryptAacSamples = function(t, e, r) {
                    for (;; e++) {
                        if (e >= t.length) return void r();
                        if (!(t[e].unit.length < 32)) {
                            var i = this.decrypter.isSync();
                            if (this.decryptAacSample(t, e, r, i), !i) return
                        }
                    }
                }, e.getAvcEncryptedData = function(t) {
                    for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, a = 32; a <= t.length - 16; a += 160, i += 16) r.set(t.subarray(a, a + 16), i);
                    return r
                }, e.getAvcDecryptedUnit = function(t, e) {
                    for (var r = new Uint8Array(e), i = 0, a = 32; a <= t.length - 16; a += 160, i += 16) t.set(r.subarray(i, i + 16), a);
                    return t
                }, e.decryptAvcSample = function(t, e, r, i, a, n) {
                    var s = q(a.data),
                        o = this.getAvcEncryptedData(s),
                        l = this;
                    this.decryptBuffer(o.buffer, (function(o) {
                        a.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(t, e, r + 1, i)
                    }))
                }, e.decryptAvcSamples = function(t, e, r, i) {
                    if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                    for (;; e++, r = 0) {
                        if (e >= t.length) return void i();
                        for (var a = t[e].units; !(r >= a.length); r++) {
                            var n = a[r];
                            if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                                var s = this.decrypter.isSync();
                                if (this.decryptAvcSample(t, e, r, i, n, s), !s) return
                            }
                        }
                    }
                }, t
            }(),
            B = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            },
            G = function() {
                function t(t, e, r) {
                    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = r
                }
                t.probe = function(e) {
                    var r = t.syncOffset(e);
                    return !(r < 0) && (r && f.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
                }, t.syncOffset = function(t) {
                    for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                        if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                        r++
                    }
                    return -1
                }, t.createTrack = function(t, e) {
                    return {
                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                        type: t,
                        id: B[t],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0,
                        duration: "audio" === t ? e : void 0
                    }
                };
                var e = t.prototype;
                return e.resetInitSegment = function(e, r, i) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", i), this._audioTrack = t.createTrack("audio", i), this._id3Track = t.createTrack("id3", i), this._txtTrack = t.createTrack("text", i), this._audioTrack.isAAC = !0, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = e, this.videoCodec = r, this._duration = i
                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {
                    var t = this._audioTrack,
                        e = this._avcTrack,
                        r = this._id3Track;
                    t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null
                }, e.demux = function(e, r, n, s) {
                    var o;
                    void 0 === n && (n = !1), void 0 === s && (s = !1), n || (this.sampleAes = null);
                    var u = this._avcTrack,
                        d = this._audioTrack,
                        h = this._id3Track,
                        c = u.pid,
                        g = u.pesData,
                        v = d.pid,
                        p = h.pid,
                        m = d.pesData,
                        y = h.pesData,
                        T = !1,
                        E = this.pmtParsed,
                        b = this._pmtId,
                        S = e.length;
                    if (this.remainderData && (S = (e = Object(l.a)(this.remainderData, e)).length, this.remainderData = null), S < 188 && !s) return this.remainderData = e, {
                        audioTrack: d,
                        avcTrack: u,
                        id3Track: h,
                        textTrack: this._txtTrack
                    };
                    var L = Math.max(0, t.syncOffset(e));
                    (S -= (S + L) % 188) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, S, e.buffer.byteLength - S));
                    for (var A = L; A < S; A += 188)
                        if (71 === e[A]) {
                            var R = !!(64 & e[A + 1]),
                                D = ((31 & e[A + 1]) << 8) + e[A + 2],
                                _ = void 0;
                            if ((48 & e[A + 3]) >> 4 > 1) {
                                if ((_ = A + 5 + e[A + 4]) === A + 188) continue
                            } else _ = A + 4;
                            switch (D) {
                                case c:
                                    R && (g && (o = V(g)) && this.parseAVCPES(o, !1), g = {
                                        data: [],
                                        size: 0
                                    }), g && (g.data.push(e.subarray(_, A + 188)), g.size += A + 188 - _);
                                    break;
                                case v:
                                    R && (m && (o = V(m)) && (d.isAAC ? this.parseAACPES(o) : this.parseMPEGPES(o)), m = {
                                        data: [],
                                        size: 0
                                    }), m && (m.data.push(e.subarray(_, A + 188)), m.size += A + 188 - _);
                                    break;
                                case p:
                                    R && (y && (o = V(y)) && this.parseID3PES(o), y = {
                                        data: [],
                                        size: 0
                                    }), y && (y.data.push(e.subarray(_, A + 188)), y.size += A + 188 - _);
                                    break;
                                case 0:
                                    R && (_ += e[_] + 1), b = this._pmtId = j(e, _);
                                    break;
                                case b:
                                    R && (_ += e[_] + 1);
                                    var k = H(e, _, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, n);
                                    (c = k.avc) > 0 && (u.pid = c), (v = k.audio) > 0 && (d.pid = v, d.isAAC = k.isAAC), (p = k.id3) > 0 && (h.pid = p), T && !E && (f.b.log("reparse from beginning"), T = !1, A = L - 188), E = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    T = !0
                            }
                        } else this.observer.emit(i.a.ERROR, i.a.ERROR, {
                            type: a.b.MEDIA_ERROR,
                            details: a.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                    return u.pesData = g, d.pesData = m, h.pesData = y, {
                        audioTrack: d,
                        avcTrack: u,
                        id3Track: h,
                        textTrack: this._txtTrack
                    }
                }, e.flush = function() {
                    var t, e = this.remainderData;
                    return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                        audioTrack: this._audioTrack,
                        avcTrack: this._avcTrack,
                        textTrack: this._txtTrack,
                        id3Track: this._id3Track
                    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                }, e.extractRemainingSamples = function(t) {
                    var e, r = t.audioTrack,
                        i = t.avcTrack,
                        a = t.id3Track,
                        n = i.pesData,
                        s = r.pesData,
                        o = a.pesData;
                    n && (e = V(n)) ? (this.parseAVCPES(e, !0), i.pesData = null) : i.pesData = n, s && (e = V(s)) ? (r.isAAC ? this.parseAACPES(e) : this.parseMPEGPES(e), r.pesData = null) : (null != s && s.size && f.b.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = s), o && (e = V(o)) ? (this.parseID3PES(e), a.pesData = null) : a.pesData = o
                }, e.demuxSampleAes = function(t, e, r) {
                    var i = this.demux(t, r, !0),
                        a = this.sampleAes = new U(this.observer, this.config, e);
                    return this.decrypt(i, a)
                }, e.decrypt = function(t, e) {
                    return new Promise((function(r) {
                        var i = t.audioTrack,
                            a = t.avcTrack;
                        i.samples && i.isAAC ? e.decryptAacSamples(i.samples, 0, (function() {
                            a.samples ? e.decryptAvcSamples(a.samples, 0, 0, (function() {
                                r(t)
                            })) : r(t)
                        })) : a.samples && e.decryptAvcSamples(a.samples, 0, 0, (function() {
                            r(t)
                        }))
                    }))
                }, e.destroy = function() {
                    this._initPTS = this._initDTS = null, this._duration = 0
                }, e.parseAVCPES = function(t, e) {
                    var r, i = this,
                        a = this._avcTrack,
                        n = this.parseAVCNALu(t.data),
                        s = this.avcSample,
                        l = !1;
                    t.data = null, s && n.length && !a.audFound && (Y(s, a), s = this.avcSample = K(!1, t.pts, t.dts, "")), n.forEach((function(e) {
                        switch (e.type) {
                            case 1:
                                r = !0, s || (s = i.avcSample = K(!0, t.pts, t.dts, "")), s.frame = !0;
                                var n = e.data;
                                if (l && n.length > 4) {
                                    var u = new N(n).readSliceType();
                                    2 !== u && 4 !== u && 7 !== u && 9 !== u || (s.key = !0)
                                }
                                break;
                            case 5:
                                r = !0, s || (s = i.avcSample = K(!0, t.pts, t.dts, "")), s.key = !0, s.frame = !0;
                                break;
                            case 6:
                                r = !0;
                                var d = new N(q(e.data));
                                d.readUByte();
                                for (var h = 0, c = 0, f = !1, g = 0; !f && d.bytesAvailable > 1;) {
                                    h = 0;
                                    do {
                                        h += g = d.readUByte()
                                    } while (255 === g);
                                    c = 0;
                                    do {
                                        c += g = d.readUByte()
                                    } while (255 === g);
                                    if (4 === h && 0 !== d.bytesAvailable) {
                                        if (f = !0, 181 === d.readUByte())
                                            if (49 === d.readUShort())
                                                if (1195456820 === d.readUInt())
                                                    if (3 === d.readUByte()) {
                                                        for (var v = d.readUByte(), p = 31 & v, m = [v, d.readUByte()], y = 0; y < p; y++) m.push(d.readUByte()), m.push(d.readUByte()), m.push(d.readUByte());
                                                        W(i._txtTrack.samples, {
                                                            type: 3,
                                                            pts: t.pts,
                                                            bytes: m
                                                        })
                                                    }
                                    } else if (5 === h && 0 !== d.bytesAvailable) {
                                        if (f = !0, c > 16) {
                                            for (var T = [], E = 0; E < 16; E++) T.push(d.readUByte().toString(16)), 3 !== E && 5 !== E && 7 !== E && 9 !== E || T.push("-");
                                            for (var b = c - 16, S = new Uint8Array(b), L = 0; L < b; L++) S[L] = d.readUByte();
                                            W(i._txtTrack.samples, {
                                                pts: t.pts,
                                                payloadType: h,
                                                uuid: T.join(""),
                                                userData: Object(o.f)(S),
                                                userDataBytes: S
                                            })
                                        }
                                    } else if (c < d.bytesAvailable)
                                        for (var A = 0; A < c; A++) d.readUByte()
                                }
                                break;
                            case 7:
                                if (r = !0, l = !0, !a.sps) {
                                    var R = new N(e.data).readSPS();
                                    a.width = R.width, a.height = R.height, a.pixelRatio = R.pixelRatio, a.sps = [e.data], a.duration = i._duration;
                                    for (var D = e.data.subarray(1, 4), _ = "avc1.", k = 0; k < 3; k++) {
                                        var I = D[k].toString(16);
                                        I.length < 2 && (I = "0" + I), _ += I
                                    }
                                    a.codec = _
                                }
                                break;
                            case 8:
                                r = !0, a.pps || (a.pps = [e.data]);
                                break;
                            case 9:
                                r = !1, a.audFound = !0, s && Y(s, a), s = i.avcSample = K(!1, t.pts, t.dts, "");
                                break;
                            case 12:
                                r = !1;
                                break;
                            default:
                                r = !1, s && (s.debug += "unknown NAL " + e.type + " ")
                        }
                        s && r && s.units.push(e)
                    })), e && s && (Y(s, a), this.avcSample = null)
                }, e.getLastNalUnit = function() {
                    var t, e, r = this.avcSample;
                    if (!r || 0 === r.units.length) {
                        var i = this._avcTrack.samples;
                        r = i[i.length - 1]
                    }
                    if (null !== (t = r) && void 0 !== t && t.units) {
                        var a = r.units;
                        e = a[a.length - 1]
                    }
                    return e
                }, e.parseAVCNALu = function(t) {
                    var e, r, i = t.byteLength,
                        a = this._avcTrack,
                        n = a.naluState || 0,
                        s = n,
                        o = [],
                        l = 0,
                        u = -1,
                        d = 0;
                    for (-1 === n && (u = 0, d = 31 & t[0], n = 0, l = 1); l < i;)
                        if (e = t[l++], n)
                            if (1 !== n)
                                if (e)
                                    if (1 === e) {
                                        if (u >= 0) {
                                            var h = {
                                                data: t.subarray(u, l - n - 1),
                                                type: d
                                            };
                                            o.push(h)
                                        } else {
                                            var c = this.getLastNalUnit();
                                            if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (r = l - n - 1) > 0)) {
                                                var f = new Uint8Array(c.data.byteLength + r);
                                                f.set(c.data, 0), f.set(t.subarray(0, r), c.data.byteLength), c.data = f
                                            }
                                        }
                                        l < i ? (u = l, d = 31 & t[l], n = 0) : n = -1
                                    } else n = 0;
                    else n = 3;
                    else n = e ? 0 : 2;
                    else n = e ? 0 : 1;
                    if (u >= 0 && n >= 0) {
                        var g = {
                            data: t.subarray(u, i),
                            type: d,
                            state: n
                        };
                        o.push(g)
                    }
                    if (0 === o.length) {
                        var v = this.getLastNalUnit();
                        if (v) {
                            var p = new Uint8Array(v.data.byteLength + t.byteLength);
                            p.set(v.data, 0), p.set(t, v.data.byteLength), v.data = p
                        }
                    }
                    return a.naluState = n, o
                }, e.parseAACPES = function(t) {
                    var e, r, n, s, o = this._audioTrack,
                        l = this.aacLastPTS,
                        u = this.aacOverFlow,
                        d = t.data;
                    if (u) {
                        var h = new Uint8Array(u.byteLength + d.byteLength);
                        h.set(u, 0), h.set(d, u.byteLength), d = h
                    }
                    for (e = 0, r = d.length; e < r - 1 && !m(d, e); e++);
                    if (e && (e < r - 1 ? (n = "AAC PES did not start with ADTS header,offset:" + e, s = !1) : (n = "no ADTS header found in AAC PES", s = !0), f.b.warn("parsing error:" + n), this.observer.emit(i.a.ERROR, i.a.ERROR, {
                            type: a.b.MEDIA_ERROR,
                            details: a.a.FRAG_PARSING_ERROR,
                            fatal: s,
                            reason: n
                        }), s)) return;
                    T(o, this.observer, d, e, this.audioCodec);
                    var c, g = 0,
                        v = E(o.samplerate);
                    if (void 0 !== t.pts) c = t.pts;
                    else {
                        if (null === l) return void f.b.warn("[tsdemuxer]: AAC PES unknown PTS");
                        c = l
                    }
                    if (u && null !== l) {
                        var p = l + v;
                        Math.abs(p - c) > 1 && (f.b.log("[tsdemuxer]: AAC: align PTS for overlapping frames by " + Math.round((p - c) / 90)), c = p)
                    }
                    for (var y = null; e < r;) {
                        if (m(d, e)) {
                            if (e + 5 < r) {
                                var S = b(o, d, e, c, g);
                                if (S) {
                                    e += S.length, y = S.sample.pts, g++;
                                    continue
                                }
                            }
                            break
                        }
                        e++
                    }
                    this.aacOverFlow = e < r ? d.subarray(e, r) : null, this.aacLastPTS = y
                }, e.parseMPEGPES = function(t) {
                    var e = t.data,
                        r = e.length,
                        i = 0,
                        a = 0,
                        n = t.pts;
                    if (void 0 !== n)
                        for (; a < r;)
                            if (M(e, a)) {
                                var s = O(this._audioTrack, e, a, n, i);
                                if (!s) break;
                                a += s.length, i++
                            } else a++;
                    else f.b.warn("[tsdemuxer]: MPEG PES unknown PTS")
                }, e.parseID3PES = function(t) {
                    void 0 !== t.pts ? this._id3Track.samples.push(t) : f.b.warn("[tsdemuxer]: ID3 PES unknown PTS")
                }, t
            }();

        function K(t, e, r, i) {
            return {
                key: t,
                frame: !1,
                pts: e,
                dts: r,
                units: [],
                debug: i,
                length: 0
            }
        }

        function j(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }

        function H(t, e, r, i) {
            var a = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    isAAC: !0
                },
                n = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < n;) {
                var s = (31 & t[e + 1]) << 8 | t[e + 2];
                switch (t[e]) {
                    case 207:
                        if (!i) {
                            f.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                            break
                        }
                        case 15:
                            -1 === a.audio && (a.audio = s);
                            break;
                        case 21:
                            -1 === a.id3 && (a.id3 = s);
                            break;
                        case 219:
                            if (!i) {
                                f.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                break
                            }
                            case 27:
                                -1 === a.avc && (a.avc = s);
                                break;
                            case 3:
                            case 4:
                                r ? -1 === a.audio && (a.audio = s, a.isAAC = !1) : f.b.log("MPEG audio found, not supported in this browser");
                                break;
                            case 36:
                                f.b.warn("Unsupported HEVC stream type found")
                }
                e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
            }
            return a
        }

        function V(t) {
            var e, r, i, a, n, s = 0,
                o = t.data;
            if (!t || 0 === t.size) return null;
            for (; o[0].length < 19 && o.length > 1;) {
                var l = new Uint8Array(o[0].length + o[1].length);
                l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
            }
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                var u = e[7];
                192 & u && (a = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? a - (n = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (f.b.warn(Math.round((a - n) / 9e4) + "s delta between PTS and DTS, align them"), a = n) : n = a);
                var d = (i = e[8]) + 9;
                if (t.size <= d) return null;
                t.size -= d;
                for (var h = new Uint8Array(t.size), c = 0, g = o.length; c < g; c++) {
                    var v = (e = o[c]).byteLength;
                    if (d) {
                        if (d > v) {
                            d -= v;
                            continue
                        }
                        e = e.subarray(d), v -= d, d = 0
                    }
                    h.set(e, s), s += v
                }
                return r && (r -= i + 3), {
                    data: h,
                    pts: a,
                    dts: n,
                    len: r
                }
            }
            return null
        }

        function Y(t, e) {
            if (t.units.length && t.frame) {
                if (void 0 === t.pts) {
                    var r = e.samples,
                        i = r.length;
                    if (!i) return void e.dropped++;
                    var a = r[i - 1];
                    t.pts = a.pts, t.dts = a.dts
                }
                e.samples.push(t)
            }
            t.debug.length && f.b.log(t.pts + "/" + t.dts + ":" + t.debug)
        }

        function W(t, e) {
            var r = t.length;
            if (r > 0) {
                if (e.pts >= t[r - 1].pts) t.push(e);
                else
                    for (var i = r - 1; i >= 0; i--)
                        if (e.pts < t[i].pts) {
                            t.splice(i, 0, e);
                            break
                        }
            } else t.push(e)
        }

        function q(t) {
            for (var e = t.byteLength, r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
            if (0 === r.length) return t;
            var a = e - r.length,
                n = new Uint8Array(a),
                s = 0;
            for (i = 0; i < a; s++, i++) s === r[0] && (s++, r.shift()), n[i] = t[s];
            return n
        }
        G.minProbeByteLength = 188;
        var X = G;

        function z(t, e) {
            return (z = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Q = function(t) {
            var e, r;

            function i() {
                return t.apply(this, arguments) || this
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, z(e, r);
            var a = i.prototype;
            return a.resetInitSegment = function(e, r, i) {
                t.prototype.resetInitSegment.call(this, e, r, i), this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: 0,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }, i.probe = function(t) {
                if (!t) return !1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                    if (F(t, e)) return f.b.log("MPEG Audio sync word found !"), !0;
                return !1
            }, a.canParse = function(t, e) {
                return function(t, e) {
                    return P(t, e) && t.length - e >= 4
                }(t, e)
            }, a.appendFrame = function(t, e, r) {
                if (null !== this.initPTS) return O(t, e, r, this.initPTS, this.frameIndex)
            }, i
        }(c);
        Q.minProbeByteLength = 4;
        var $, J = Q,
            Z = r(15),
            tt = function() {
                function t() {
                    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null
                }
                var e = t.prototype;
                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                    this.initPTS = t, this.lastEndDTS = null
                }, e.resetNextTimestamp = function() {
                    this.lastEndDTS = null
                }, e.resetInitSegment = function(t, e, r) {
                    this.audioCodec = e, this.videoCodec = r, this.generateInitSegment(t), this.emitInitSegment = !0
                }, e.generateInitSegment = function(t) {
                    var e = this.audioCodec,
                        r = this.videoCodec;
                    if (!t || !t.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
                    var i = this.initData = Object(l.f)(t);
                    e || (e = "mp4a.40.5"), r || (r = "avc1.42e01e");
                    var a = {};
                    i.audio && i.video ? a.audiovideo = {
                        container: "video/mp4",
                        codec: e + "," + r,
                        initSegment: t,
                        id: "main"
                    } : i.audio ? a.audio = {
                        container: "audio/mp4",
                        codec: e,
                        initSegment: t,
                        id: "audio"
                    } : i.video ? a.video = {
                        container: "video/mp4",
                        codec: r,
                        initSegment: t,
                        id: "main"
                    } : f.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = a
                }, e.remux = function(t, e, r, i, a) {
                    var n = this.initPTS,
                        o = this.lastEndDTS,
                        u = {
                            audio: void 0,
                            video: void 0,
                            text: i,
                            id3: r,
                            initSegment: void 0
                        };
                    Object(s.a)(o) || (o = this.lastEndDTS = a || 0);
                    var d = e.samples;
                    if (!d || !d.length) return u;
                    var h = {
                            initPTS: void 0,
                            timescale: 1
                        },
                        c = this.initData;
                    if (c && c.length || (this.generateInitSegment(d), c = this.initData), !c || !c.length) return f.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
                    this.emitInitSegment && (h.tracks = this.initTracks, this.emitInitSegment = !1), Object(s.a)(n) || (this.initPTS = h.initPTS = n = et(c, d, o));
                    var g = Object(l.c)(d, c),
                        v = o,
                        p = g + v;
                    Object(l.e)(c, d, n), g > 0 ? this.lastEndDTS = p : (f.b.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                    var m = !!c.audio,
                        y = !!c.video,
                        T = "";
                    m && (T += "audio"), y && (T += "video");
                    var E = {
                        data1: d,
                        startPTS: v,
                        startDTS: v,
                        endPTS: p,
                        endDTS: p,
                        type: T,
                        hasAudio: m,
                        hasVideo: y,
                        nb: 1,
                        dropped: 0
                    };
                    return u.audio = "audio" === E.type ? E : void 0, u.video = "audio" !== E.type ? E : void 0, u.text = i, u.id3 = r, u.initSegment = h, u
                }, t
            }(),
            et = function(t, e, r) {
                return Object(l.d)(t, e) - r
            },
            rt = tt,
            it = r(12);
        try {
            $ = self.performance.now.bind(self.performance)
        } catch (t) {
            f.b.debug("Unable to use Performance API on this environment"), $ = self.Date.now
        }
        var at = [{
                demux: X,
                remux: Z.b
            }, {
                demux: D,
                remux: rt
            }, {
                demux: A,
                remux: Z.b
            }, {
                demux: J,
                remux: Z.b
            }],
            nt = 1024;
        at.forEach((function(t) {
            var e = t.demux;
            nt = Math.max(nt, e.minProbeByteLength)
        }));
        var st = function() {
            function t(t, e, r, i) {
                this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new it.a, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i
            }
            var e = t.prototype;
            return e.configure = function(t) {
                this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
            }, e.push = function(t, e, r, i) {
                var a = this,
                    n = r.transmuxing;
                n.executeStart = $();
                var s = new Uint8Array(t),
                    o = this.cache,
                    u = this.config,
                    d = this.currentTransmuxState,
                    h = this.transmuxConfig;
                i && (this.currentTransmuxState = i);
                var c = function(t, e) {
                    var r = null;
                    t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e);
                    return r
                }(s, e);
                if (c && "AES-128" === c.method) {
                    var f = this.getDecrypter();
                    if (!u.enableSoftwareAES) return this.decryptionPromise = f.webCryptoDecrypt(s, c.key.buffer, c.iv.buffer).then((function(t) {
                        var e = a.push(t, null, r);
                        return a.decryptionPromise = null, e
                    })), this.decryptionPromise;
                    var g = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
                    if (!g) return n.executeEnd = $(), ot(r);
                    s = new Uint8Array(g)
                }
                var v = i || d,
                    p = v.contiguous,
                    m = v.discontinuity,
                    y = v.trackSwitch,
                    T = v.accurateTimeOffset,
                    E = v.timeOffset,
                    b = h.audioCodec,
                    S = h.videoCodec,
                    L = h.defaultInitPts,
                    A = h.duration,
                    R = h.initSegmentData;
                (m || y) && this.resetInitSegment(R, b, S, A), m && this.resetInitialTimestamp(L), p || this.resetContiguity();
                var D = this.demuxer,
                    _ = this.remuxer;
                if (this.needsProbing(s, m, y)) {
                    if (o.dataLength) {
                        var k = o.flush();
                        s = Object(l.a)(k, s)
                    }
                    var I = this.configureTransmuxer(s, h);
                    D = I.demuxer, _ = I.remuxer
                }
                if (!D || !_) return o.push(s), n.executeEnd = $(), ot(r);
                var w = this.transmux(s, c, E, T, r),
                    C = this.currentTransmuxState;
                return C.contiguous = !0, C.discontinuity = !1, C.trackSwitch = !1, n.executeEnd = $(), w
            }, e.flush = function(t) {
                var e = this,
                    r = t.transmuxing;
                r.executeStart = $();
                var n = this.decrypter,
                    s = this.cache,
                    o = this.currentTransmuxState,
                    l = this.decryptionPromise;
                if (l) return l.then((function() {
                    return e.flush(t)
                }));
                var u = [],
                    d = o.timeOffset;
                if (n) {
                    var h = n.flush();
                    h && u.push(this.push(h, null, t))
                }
                var c = s.dataLength;
                s.reset();
                var f = this.demuxer,
                    g = this.remuxer;
                if (!f || !g) return c >= nt && this.observer.emit(i.a.ERROR, i.a.ERROR, {
                    type: a.b.MEDIA_ERROR,
                    details: a.a.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: "no demux matching with content found"
                }), r.executeEnd = $(), [ot(t)];
                var v = f.flush(d);
                return lt(v) ? v.then((function(r) {
                    return e.flushRemux(u, r, t), u
                })) : (this.flushRemux(u, v, t), u)
            }, e.flushRemux = function(t, e, r) {
                var i = e.audioTrack,
                    a = e.avcTrack,
                    n = e.id3Track,
                    s = e.textTrack,
                    o = this.currentTransmuxState,
                    l = o.accurateTimeOffset,
                    u = o.timeOffset;
                f.b.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                var d = this.remuxer.remux(i, a, n, s, u, l, !0);
                t.push({
                    remuxResult: d,
                    chunkMeta: r
                }), r.transmuxing.executeEnd = $()
            }, e.resetInitialTimestamp = function(t) {
                var e = this.demuxer,
                    r = this.remuxer;
                e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
            }, e.resetContiguity = function() {
                var t = this.demuxer,
                    e = this.remuxer;
                t && e && (t.resetContiguity(), e.resetNextTimestamp())
            }, e.resetInitSegment = function(t, e, r, i) {
                var a = this.demuxer,
                    n = this.remuxer;
                a && n && (a.resetInitSegment(e, r, i), n.resetInitSegment(t, e, r))
            }, e.destroy = function() {
                this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
            }, e.transmux = function(t, e, r, i, a) {
                return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, a) : this.transmuxUnencrypted(t, r, i, a)
            }, e.transmuxUnencrypted = function(t, e, r, i) {
                var a = this.demuxer.demux(t, e, !1),
                    n = a.audioTrack,
                    s = a.avcTrack,
                    o = a.id3Track,
                    l = a.textTrack;
                return {
                    remuxResult: this.remuxer.remux(n, s, o, l, e, r, !1),
                    chunkMeta: i
                }
            }, e.transmuxSampleAes = function(t, e, r, i, a) {
                var n = this;
                return this.demuxer.demuxSampleAes(t, e, r).then((function(t) {
                    return {
                        remuxResult: n.remuxer.remux(t.audioTrack, t.avcTrack, t.id3Track, t.textTrack, r, i, !1),
                        chunkMeta: a
                    }
                }))
            }, e.configureTransmuxer = function(t, e) {
                for (var r, i = this.config, a = this.observer, n = this.typeSupported, s = this.vendor, o = e.audioCodec, l = e.defaultInitPts, u = e.duration, d = e.initSegmentData, h = e.videoCodec, c = 0, f = at.length; c < f && !(r = at[c]).demux.probe(t); c++);
                if (!r) return {
                    remuxer: void 0,
                    demuxer: void 0
                };
                var g = this.demuxer,
                    v = this.remuxer,
                    p = r.remux,
                    m = r.demux;
                return v && v instanceof p || (v = this.remuxer = new p(a, i, n, s)), g && g instanceof m || (g = this.demuxer = new m(a, i, n), this.probe = m.probe), this.resetInitSegment(d, o, h, u), this.resetInitialTimestamp(l), {
                    demuxer: g,
                    remuxer: v
                }
            }, e.needsProbing = function(t, e, r) {
                return !this.demuxer || e || r
            }, e.getDecrypter = function() {
                var t = this.decrypter;
                return t || (t = this.decrypter = new n.a(this.observer, this.config)), t
            }, t
        }();
        var ot = function(t) {
            return {
                remuxResult: {},
                chunkMeta: t
            }
        };

        function lt(t) {
            return "then" in t && t.then instanceof Function
        }
        var ut = function(t, e, r, i, a) {
                this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = r, this.duration = i, this.defaultInitPts = a
            },
            dt = function(t, e, r, i, a) {
                this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = a
            }
    }, function(t, e, r) {
        var i, a, n, s, o;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/, a = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
            buildAbsoluteURL: function(t, e, r) {
                if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                    if (!r.alwaysNormalize) return t;
                    var i = o.parseURL(t);
                    if (!i) throw new Error("Error trying to parse base URL.");
                    return i.path = o.normalizePath(i.path), o.buildURLFromParts(i)
                }
                var n = o.parseURL(e);
                if (!n) throw new Error("Error trying to parse relative URL.");
                if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : e;
                var s = o.parseURL(t);
                if (!s) throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var l = a.exec(s.path);
                    s.netLoc = l[1], s.path = l[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var u = {
                    scheme: s.scheme,
                    netLoc: n.netLoc,
                    path: null,
                    params: n.params,
                    query: n.query,
                    fragment: n.fragment
                };
                if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0]))
                    if (n.path) {
                        var d = s.path,
                            h = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
                        u.path = o.normalizePath(h)
                    } else u.path = s.path, n.params || (u.params = s.params, n.query || (u.query = s.query));
                return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path), o.buildURLFromParts(u)
            },
            parseURL: function(t) {
                var e = i.exec(t);
                return e ? {
                    scheme: e[1] || "",
                    netLoc: e[2] || "",
                    path: e[3] || "",
                    params: e[4] || "",
                    query: e[5] || "",
                    fragment: e[6] || ""
                } : null
            },
            normalizePath: function(t) {
                for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(s, "")).length;);
                return t.split("").reverse().join("")
            },
            buildURLFromParts: function(t) {
                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            }
        }, t.exports = o
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = function() {
            this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                start: 0,
                first: 0,
                end: 0
            }, this.parsing = {
                start: 0,
                end: 0
            }, this.buffering = {
                start: 0,
                first: 0,
                end: 0
            }
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = function() {
            function t() {
                this.chunks = [], this.dataLength = 0
            }
            var e = t.prototype;
            return e.push = function(t) {
                this.chunks.push(t), this.dataLength += t.length
            }, e.flush = function() {
                var t, e = this.chunks,
                    r = this.dataLength;
                return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                    for (var r = new Uint8Array(e), i = 0, a = 0; a < t.length; a++) {
                        var n = t[a];
                        r.set(n, i), i += n.length
                    }
                    return r
                }(e, r), this.reset(), t) : new Uint8Array(0)
            }, e.reset = function() {
                this.chunks.length = 0, this.dataLength = 0
            }, t
        }()
    }, function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
            a = "~";

        function n() {}

        function s(t, e, r) {
            this.fn = t, this.context = e, this.once = r || !1
        }

        function o(t, e, r, i, n) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var o = new s(r, i || t, n),
                l = a ? a + e : e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
        }

        function l(t, e) {
            0 == --t._eventsCount ? t._events = new n : delete t._events[e]
        }

        function u() {
            this._events = new n, this._eventsCount = 0
        }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), u.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount) return r;
            for (e in t = this._events) i.call(t, e) && r.push(a ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }, u.prototype.listeners = function(t) {
            var e = a ? a + t : t,
                r = this._events[e];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, n = r.length, s = new Array(n); i < n; i++) s[i] = r[i].fn;
            return s
        }, u.prototype.listenerCount = function(t) {
            var e = a ? a + t : t,
                r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }, u.prototype.emit = function(t, e, r, i, n, s) {
            var o = a ? a + t : t;
            if (!this._events[o]) return !1;
            var l, u, d = this._events[o],
                h = arguments.length;
            if (d.fn) {
                switch (d.once && this.removeListener(t, d.fn, void 0, !0), h) {
                    case 1:
                        return d.fn.call(d.context), !0;
                    case 2:
                        return d.fn.call(d.context, e), !0;
                    case 3:
                        return d.fn.call(d.context, e, r), !0;
                    case 4:
                        return d.fn.call(d.context, e, r, i), !0;
                    case 5:
                        return d.fn.call(d.context, e, r, i, n), !0;
                    case 6:
                        return d.fn.call(d.context, e, r, i, n, s), !0
                }
                for (u = 1, l = new Array(h - 1); u < h; u++) l[u - 1] = arguments[u];
                d.fn.apply(d.context, l)
            } else {
                var c, f = d.length;
                for (u = 0; u < f; u++) switch (d[u].once && this.removeListener(t, d[u].fn, void 0, !0), h) {
                    case 1:
                        d[u].fn.call(d[u].context);
                        break;
                    case 2:
                        d[u].fn.call(d[u].context, e);
                        break;
                    case 3:
                        d[u].fn.call(d[u].context, e, r);
                        break;
                    case 4:
                        d[u].fn.call(d[u].context, e, r, i);
                        break;
                    default:
                        if (!l)
                            for (c = 1, l = new Array(h - 1); c < h; c++) l[c - 1] = arguments[c];
                        d[u].fn.apply(d[u].context, l)
                }
            }
            return !0
        }, u.prototype.on = function(t, e, r) {
            return o(this, t, e, r, !1)
        }, u.prototype.once = function(t, e, r) {
            return o(this, t, e, r, !0)
        }, u.prototype.removeListener = function(t, e, r, i) {
            var n = a ? a + t : t;
            if (!this._events[n]) return this;
            if (!e) return l(this, n), this;
            var s = this._events[n];
            if (s.fn) s.fn !== e || i && !s.once || r && s.context !== r || l(this, n);
            else {
                for (var o = 0, u = [], d = s.length; o < d; o++)(s[o].fn !== e || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
                u.length ? this._events[n] = 1 === u.length ? u[0] : u : l(this, n)
            }
            return this
        }, u.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = a ? a + t : t, this._events[e] && l(this, e)) : (this._events = new n, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, t.exports = u
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return u
        }));
        var i = function() {
                function t(t, e) {
                    this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                }
                return t.prototype.decrypt = function(t, e) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, e, t)
                }, t
            }(),
            a = function() {
                function t(t, e) {
                    this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                }
                return t.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }, t
            }(),
            n = r(8);
        var s = function() {
                function t() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                }
                var e = t.prototype;
                return e.uint8ArrayToUint32Array_ = function(t) {
                    for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                    return r
                }, e.initTable = function() {
                    var t = this.sBox,
                        e = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        a = r[1],
                        n = r[2],
                        s = r[3],
                        o = this.invSubMix,
                        l = o[0],
                        u = o[1],
                        d = o[2],
                        h = o[3],
                        c = new Uint32Array(256),
                        f = 0,
                        g = 0,
                        v = 0;
                    for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                    for (v = 0; v < 256; v++) {
                        var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                        p = p >>> 8 ^ 255 & p ^ 99, t[f] = p, e[p] = f;
                        var m = c[f],
                            y = c[m],
                            T = c[y],
                            E = 257 * c[p] ^ 16843008 * p;
                        i[f] = E << 24 | E >>> 8, a[f] = E << 16 | E >>> 16, n[f] = E << 8 | E >>> 24, s[f] = E, E = 16843009 * T ^ 65537 * y ^ 257 * m ^ 16843008 * f, l[p] = E << 24 | E >>> 8, u[p] = E << 16 | E >>> 16, d[p] = E << 8 | E >>> 24, h[p] = E, f ? (f = m ^ c[c[c[T ^ m]]], g ^= c[c[g]]) : f = g = 1
                    }
                }, e.expandKey = function(t) {
                    for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i], i++;
                    if (!r) {
                        this.key = e;
                        var a = this.keySize = e.length;
                        if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
                        var n, s, o, l, u = this.ksRows = 4 * (a + 6 + 1),
                            d = this.keySchedule = new Uint32Array(u),
                            h = this.invKeySchedule = new Uint32Array(u),
                            c = this.sBox,
                            f = this.rcon,
                            g = this.invSubMix,
                            v = g[0],
                            p = g[1],
                            m = g[2],
                            y = g[3];
                        for (n = 0; n < u; n++) n < a ? o = d[n] = e[n] : (l = o, n % a == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), d[n] = o = (d[n - a] ^ l) >>> 0);
                        for (s = 0; s < u; s++) n = u - s, l = 3 & s ? d[n] : d[n - 4], h[s] = s < 4 || n <= 4 ? l : v[c[l >>> 24]] ^ p[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ y[c[255 & l]], h[s] = h[s] >>> 0
                    }
                }, e.networkToHostOrderSwap = function(t) {
                    return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                }, e.decrypt = function(t, e, r) {
                    for (var i, a, n, s, o, l, u, d, h, c, f, g, v, p, m = this.keySize + 6, y = this.invKeySchedule, T = this.invSBox, E = this.invSubMix, b = E[0], S = E[1], L = E[2], A = E[3], R = this.uint8ArrayToUint32Array_(r), D = R[0], _ = R[1], k = R[2], I = R[3], w = new Int32Array(t), C = new Int32Array(w.length), O = this.networkToHostOrderSwap; e < w.length;) {
                        for (h = O(w[e]), c = O(w[e + 1]), f = O(w[e + 2]), g = O(w[e + 3]), o = h ^ y[0], l = g ^ y[1], u = f ^ y[2], d = c ^ y[3], v = 4, p = 1; p < m; p++) i = b[o >>> 24] ^ S[l >> 16 & 255] ^ L[u >> 8 & 255] ^ A[255 & d] ^ y[v], a = b[l >>> 24] ^ S[u >> 16 & 255] ^ L[d >> 8 & 255] ^ A[255 & o] ^ y[v + 1], n = b[u >>> 24] ^ S[d >> 16 & 255] ^ L[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2], s = b[d >>> 24] ^ S[o >> 16 & 255] ^ L[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3], o = i, l = a, u = n, d = s, v += 4;
                        i = T[o >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & d] ^ y[v], a = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[d >> 8 & 255] << 8 ^ T[255 & o] ^ y[v + 1], n = T[u >>> 24] << 24 ^ T[d >> 16 & 255] << 16 ^ T[o >> 8 & 255] << 8 ^ T[255 & l] ^ y[v + 2], s = T[d >>> 24] << 24 ^ T[o >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ y[v + 3], v += 3, C[e] = O(i ^ D), C[e + 1] = O(s ^ _), C[e + 2] = O(n ^ k), C[e + 3] = O(a ^ I), D = h, _ = c, k = f, I = g, e += 4
                    }
                    return C.buffer
                }, t
            }(),
            o = r(1),
            l = r(5),
            u = function() {
                function t(t, e, r) {
                    var i = (void 0 === r ? {} : r).removePKCS7Padding,
                        a = void 0 === i || i;
                    if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = a, a) try {
                        var n = self.crypto;
                        n && (this.subtle = n.subtle || n.webkitSubtle)
                    } catch (t) {}
                    null === this.subtle && (this.config.enableSoftwareAES = !0)
                }
                var e = t.prototype;
                return e.isSync = function() {
                    return this.config.enableSoftwareAES
                }, e.flush = function() {
                    var t = this.currentResult;
                    if (t) {
                        var e, r, i, a = new Uint8Array(t);
                        return this.reset(), this.removePKCS7Padding ? (r = (e = a).byteLength, (i = r && new DataView(e.buffer).getUint8(r - 1)) ? Object(n.a)(e, 0, r - i) : e) : a
                    }
                    this.reset()
                }, e.reset = function() {
                    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                }, e.decrypt = function(t, e, r, i) {
                    if (this.config.enableSoftwareAES) {
                        this.softwareDecrypt(new Uint8Array(t), e, r);
                        var a = this.flush();
                        a && i(a.buffer)
                    } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
                }, e.softwareDecrypt = function(t, e, r) {
                    var i = this.currentIV,
                        a = this.currentResult,
                        o = this.remainderData;
                    this.logOnce("JS AES decrypt"), o && (t = Object(l.a)(o, t), this.remainderData = null);
                    var u = this.getValidChunk(t);
                    if (!u.length) return null;
                    i && (r = i);
                    var d = this.softwareDecrypter;
                    d || (d = this.softwareDecrypter = new s), d.expandKey(e);
                    var h = a;
                    return this.currentResult = d.decrypt(u.buffer, 0, r), this.currentIV = Object(n.a)(u, -16).buffer, h || null
                }, e.webCryptoDecrypt = function(t, e, r) {
                    var n = this,
                        s = this.subtle;
                    return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new a(s, e)), this.fastAesKey.expandKey().then((function(e) {
                        return s ? new i(s, r).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
                    })).catch((function(i) {
                        return n.onWebCryptoError(i, t, e, r)
                    }))
                }, e.onWebCryptoError = function(t, e, r, i) {
                    return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(e, r, i)
                }, e.getValidChunk = function(t) {
                    var e = t,
                        r = t.length - t.length % 16;
                    return r !== t.length && (e = Object(n.a)(t, 0, r), this.remainderData = Object(n.a)(t, r)), e
                }, e.logOnce = function(t) {
                    this.logEnabled && (o.b.log("[decrypter.ts]: " + t), this.logEnabled = !1)
                }, t
            }()
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return p
        })), r.d(e, "a", (function() {
            return m
        }));
        var i = r(3),
            a = function() {
                function t() {}
                return t.getSilentFrame = function(t, e) {
                    switch (t) {
                        case "mp4a.40.2":
                            if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                            if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                            if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                            if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                            if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                            if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                            break;
                        default:
                            if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                }, t
            }(),
            n = Math.pow(2, 32) - 1,
            s = function() {
                function t() {}
                return t.init = function() {
                    var e;
                    for (e in t.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    t.HDLR_TYPES = {
                        video: r,
                        audio: i
                    };
                    var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    t.STTS = t.STSC = t.STCO = n, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var s = new Uint8Array([105, 115, 111, 109]),
                        o = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    t.FTYP = t.box(t.types.ftyp, s, l, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, a))
                }, t.box = function(t) {
                    for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                    for (var n = i.length, s = n; n--;) e += i[n].byteLength;
                    var o = new Uint8Array(e);
                    for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), n = 0, e = 8; n < s; n++) o.set(i[n], e), e += i[n].byteLength;
                    return o
                }, t.hdlr = function(e) {
                    return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                }, t.mdat = function(e) {
                    return t.box(t.types.mdat, e)
                }, t.mdhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (n + 1)),
                        a = Math.floor(r % (n + 1));
                    return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                }, t.mdia = function(e) {
                    return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                }, t.mfhd = function(e) {
                    return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                }, t.minf = function(e) {
                    return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                }, t.moof = function(e, r, i) {
                    return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                }, t.moov = function(e) {
                    for (var r = e.length, i = []; r--;) i[r] = t.trak(e[r]);
                    return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                }, t.mvex = function(e) {
                    for (var r = e.length, i = []; r--;) i[r] = t.trex(e[r]);
                    return t.box.apply(null, [t.types.mvex].concat(i))
                }, t.mvhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (n + 1)),
                        a = Math.floor(r % (n + 1)),
                        s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return t.box(t.types.mvhd, s)
                }, t.sdtp = function(e) {
                    var r, i, a = e.samples || [],
                        n = new Uint8Array(4 + a.length);
                    for (r = 0; r < a.length; r++) i = a[r].flags, n[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return t.box(t.types.sdtp, n)
                }, t.stbl = function(e) {
                    return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                }, t.avc1 = function(e) {
                    var r, i, a, n = [],
                        s = [];
                    for (r = 0; r < e.sps.length; r++) a = (i = e.sps[r]).byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i));
                    for (r = 0; r < e.pps.length; r++) a = (i = e.pps[r]).byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(i));
                    var o = t.box(t.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | e.sps.length].concat(n).concat([e.pps.length]).concat(s))),
                        l = e.width,
                        u = e.height,
                        d = e.pixelRatio[0],
                        h = e.pixelRatio[1];
                    return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])))
                }, t.esds = function(t) {
                    var e = t.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                }, t.mp4a = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                }, t.mp3 = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                }, t.stsd = function(e) {
                    return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                }, t.tkhd = function(e) {
                    var r = e.id,
                        i = e.duration * e.timescale,
                        a = e.width,
                        s = e.height,
                        o = Math.floor(i / (n + 1)),
                        l = Math.floor(i % (n + 1));
                    return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                }, t.traf = function(e, r) {
                    var i = t.sdtp(e),
                        a = e.id,
                        s = Math.floor(r / (n + 1)),
                        o = Math.floor(r % (n + 1));
                    return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, t.trak = function(e) {
                    return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                }, t.trex = function(e) {
                    var r = e.id;
                    return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }, t.trun = function(e, r) {
                    var i, a, n, s, o, l, u = e.samples || [],
                        d = u.length,
                        h = 12 + 16 * d,
                        c = new Uint8Array(h);
                    for (r += 8 + h, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) n = (a = u[i]).duration, s = a.size, o = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                    return t.box(t.types.trun, c)
                }, t.initSegment = function(e) {
                    t.types || t.init();
                    var r = t.moov(e),
                        i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                    return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                }, t
            }();
        s.types = void 0, s.HDLR_TYPES = void 0, s.STTS = void 0, s.STSC = void 0, s.STCO = void 0, s.STSZ = void 0, s.VMHD = void 0, s.SMHD = void 0, s.STSD = void 0, s.FTYP = void 0, s.DINF = void 0;
        var o = s,
            l = r(0),
            u = r(2),
            d = r(1),
            h = r(7);

        function c() {
            return (c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }
        var f = null,
            g = null,
            v = !1,
            p = function() {
                function t(t, e, r, i) {
                    if (void 0 === i && (i = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === f) {
                        var a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                        f = a ? parseInt(a[1]) : 0
                    }
                    if (null === g) {
                        var n = navigator.userAgent.match(/Safari\/(\d+)/i);
                        g = n ? parseInt(n[1]) : 0
                    }
                    v = !!f && f < 75 || !!g && g < 600
                }
                var e = t.prototype;
                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                    d.b.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
                }, e.resetNextTimestamp = function() {
                    d.b.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
                }, e.resetInitSegment = function() {
                    d.b.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
                }, e.getVideoStartPts = function(t) {
                    var e = !1,
                        r = t.reduce((function(t, r) {
                            var i = r.pts - t;
                            return i < -4294967296 ? (e = !0, m(t, r.pts)) : i > 0 ? t : r.pts
                        }), t[0].pts);
                    return e && d.b.debug("PTS rollover detected"), r
                }, e.remux = function(t, e, r, i, a, n, s) {
                    var o, l, u, h, c, f, g = a,
                        v = a,
                        p = t.pid > -1,
                        y = e.pid > -1,
                        T = t.samples.length > 0,
                        E = e.samples.length > 1;
                    if ((!p || T) && (!y || E) || this.ISGenerated || s) {
                        this.ISGenerated || (u = this.generateIS(t, e, a));
                        var b = this.isVideoContiguous;
                        if (E && !b && this.config.forceKeyFrameOnDiscontinuity) {
                            var S = e.samples.length,
                                L = function(t) {
                                    for (var e = 0; e < t.length; e++)
                                        if (t[e].key) return e;
                                    return -1
                                }(e.samples);
                            if (f = !0, L > 0) {
                                d.b.warn("[mp4-remuxer]: Dropped " + L + " out of " + S + " video samples due to a missing keyframe");
                                var A = this.getVideoStartPts(e.samples);
                                e.samples = e.samples.slice(L), e.dropped += L, v += (e.samples[0].pts - A) / (e.timescale || 9e4)
                            } else -1 === L && (d.b.warn("[mp4-remuxer]: No keyframe found out of " + S + " video samples"), f = !1)
                        }
                        if (this.ISGenerated) {
                            if (T && E) {
                                var R = this.getVideoStartPts(e.samples),
                                    D = (m(t.samples[0].pts, R) - R) / e.inputTimeScale;
                                g += Math.max(0, D), v += Math.max(0, -D)
                            }
                            if (T) {
                                if (t.samplerate || (d.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), delete(u = this.generateIS(t, e, a)).video), l = this.remuxAudio(t, g, this.isAudioContiguous, n, E ? v : void 0), E) {
                                    var _ = l ? l.endPTS - l.startPTS : 0;
                                    e.inputTimeScale || (d.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(t, e, a)), o = this.remuxVideo(e, v, b, _)
                                }
                            } else E && (o = this.remuxVideo(e, v, b, 0));
                            o && void 0 !== f && (o.independent = f)
                        }
                    }
                    return this.ISGenerated && (r.samples.length && (c = this.remuxID3(r, a)), i.samples.length && (h = this.remuxText(i, a))), {
                        audio: l,
                        video: o,
                        initSegment: u,
                        independent: f,
                        text: h,
                        id3: c
                    }
                }, e.generateIS = function(t, e, r) {
                    var a, n, s, l = t.samples,
                        u = e.samples,
                        h = this.typeSupported,
                        c = {},
                        f = !Object(i.a)(this._initPTS),
                        g = "audio/mp4";
                    if (f && (a = n = 1 / 0), t.config && l.length && (t.timescale = t.samplerate, d.b.log("[mp4-remuxer]: audio sampling rate : " + t.samplerate), t.isAAC || (h.mpeg ? (g = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3")), c.audio = {
                            id: "audio",
                            container: g,
                            codec: t.codec,
                            initSegment: !t.isAAC && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                            metadata: {
                                channelCount: t.channelCount
                            }
                        }, f && (s = t.inputTimeScale, a = n = l[0].pts - Math.round(s * r))), e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, c.video = {
                            id: "main",
                            container: "video/mp4",
                            codec: e.codec,
                            initSegment: o.initSegment([e]),
                            metadata: {
                                width: e.width,
                                height: e.height
                            }
                        }, f)) {
                        s = e.inputTimeScale;
                        var v = this.getVideoStartPts(u),
                            p = Math.round(s * r);
                        n = Math.min(n, m(u[0].dts, v) - p), a = Math.min(a, v - p)
                    }
                    if (Object.keys(c).length) return this.ISGenerated = !0, f && (this._initPTS = a, this._initDTS = n), {
                        tracks: c,
                        initPTS: a,
                        timescale: s
                    }
                }, e.remuxVideo = function(t, e, r, i) {
                    var a, n, s, g = t.inputTimeScale,
                        p = t.samples,
                        T = [],
                        E = p.length,
                        b = this._initPTS,
                        S = this.nextAvcDts,
                        L = 8,
                        A = Number.POSITIVE_INFINITY,
                        R = Number.NEGATIVE_INFINITY,
                        D = 0,
                        _ = !1;
                    r && null !== S || (S = e * g - (p[0].pts - m(p[0].dts, p[0].pts)));
                    for (var k = 0; k < E; k++) {
                        var I = p[k];
                        if (I.pts = m(I.pts - b, S), I.dts = m(I.dts - b, S), I.dts > I.pts) {
                            D = Math.max(Math.min(D, I.pts - I.dts), -18e3)
                        }
                        I.dts < p[k > 0 ? k - 1 : k].dts && (_ = !0)
                    }
                    _ && p.sort((function(t, e) {
                        var r = t.dts - e.dts,
                            i = t.pts - e.pts;
                        return r || i
                    })), n = p[0].dts, s = p[p.length - 1].dts;
                    var w = Math.round((s - n) / (E - 1));
                    if (D < 0) {
                        if (D < -2 * w) {
                            d.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(h.b)(-w, !0) + " ms");
                            for (var C = D, O = 0; O < E; O++) p[O].dts = C = Math.max(C, p[O].pts - w), p[O].pts = Math.max(C, p[O].pts)
                        } else {
                            d.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(h.b)(D, !0) + " ms to overcome this issue");
                            for (var x = 0; x < E; x++) p[x].dts = p[x].dts + D
                        }
                        n = p[0].dts, s = p[E - 1].dts
                    }
                    if (r) {
                        var P = n - S,
                            M = P > w;
                        if (M || P < -1) {
                            M ? d.b.warn("AVC: " + Object(h.b)(P, !0) + " ms (" + P + "dts) hole between fragments detected, filling it") : d.b.warn("AVC: " + Object(h.b)(-P, !0) + " ms (" + P + "dts) overlapping between fragments detected"), n = S;
                            var F = p[0].pts - P;
                            p[0].dts = n, p[0].pts = F, d.b.log("Video: First PTS/DTS adjusted: " + Object(h.b)(F, !0) + "/" + Object(h.b)(n, !0) + ", delta: " + Object(h.b)(P, !0) + " ms")
                        }
                    }
                    v && (n = Math.max(0, n));
                    for (var N = 0, U = 0, B = 0; B < E; B++) {
                        for (var G = p[B], K = G.units, j = K.length, H = 0, V = 0; V < j; V++) H += K[V].data.length;
                        U += H, N += j, G.length = H, G.dts = Math.max(G.dts, n), G.pts = Math.max(G.pts, G.dts, 0), A = Math.min(G.pts, A), R = Math.max(G.pts, R)
                    }
                    s = p[E - 1].dts;
                    var Y, W = U + 4 * N + 8;
                    try {
                        Y = new Uint8Array(W)
                    } catch (t) {
                        return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                            type: u.b.MUX_ERROR,
                            details: u.a.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: W,
                            reason: "fail allocating video mdat " + W
                        })
                    }
                    var q = new DataView(Y.buffer);
                    q.setUint32(0, W), Y.set(o.types.mdat, 4);
                    for (var X = 0; X < E; X++) {
                        for (var z = p[X], Q = z.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
                            var tt = Q[J],
                                et = tt.data,
                                rt = tt.data.byteLength;
                            q.setUint32(L, rt), L += 4, Y.set(et, L), L += rt, $ += 4 + rt
                        }
                        if (X < E - 1) a = p[X + 1].dts - z.dts;
                        else {
                            var it = this.config,
                                at = z.dts - p[X > 0 ? X - 1 : X].dts;
                            if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                var nt = Math.floor(it.maxBufferHole * g),
                                    st = (i ? A + i * g : this.nextAudioPts) - z.pts;
                                st > nt ? ((a = st - at) < 0 && (a = at), d.b.log("[mp4-remuxer]: It is approximately " + st / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = at
                            } else a = at
                        }
                        var ot = Math.round(z.pts - z.dts);
                        T.push(new y(z.key, a, $, ot))
                    }
                    if (T.length && f && f < 70) {
                        var lt = T[0].flags;
                        lt.dependsOn = 2, lt.isNonSync = 0
                    }
                    this.nextAvcDts = S = s + a, this.isVideoContiguous = !0;
                    var ut = {
                        data1: o.moof(t.sequenceNumber++, n, c({}, t, {
                            samples: T
                        })),
                        data2: Y,
                        startPTS: A / g,
                        endPTS: (R + a) / g,
                        startDTS: n / g,
                        endDTS: S / g,
                        type: "video",
                        hasAudio: !1,
                        hasVideo: !0,
                        nb: T.length,
                        dropped: t.dropped
                    };
                    return t.samples = [], t.dropped = 0, ut
                }, e.remuxAudio = function(t, e, r, i, n) {
                    var s, h = t.inputTimeScale,
                        f = h / (t.samplerate ? t.samplerate : h),
                        g = t.isAAC ? 1024 : 1152,
                        v = g * f,
                        p = this._initPTS,
                        T = !t.isAAC && this.typeSupported.mpeg,
                        E = [],
                        b = t.samples,
                        S = T ? 0 : 8,
                        L = this.nextAudioPts || -1,
                        A = e * h;
                    if (this.isAudioContiguous = r = r || b.length && L > 0 && (i && Math.abs(A - L) < 9e3 || Math.abs(m(b[0].pts - p, A) - L) < 20 * v), b.forEach((function(t) {
                            t.pts = t.dts = m(t.pts - p, A)
                        })), !r || L < 0) {
                        if (!(b = b.filter((function(t) {
                                return t.pts >= 0
                            }))).length) return;
                        L = 0 === n ? 0 : i ? Math.max(0, A) : b[0].pts
                    }
                    if (t.isAAC)
                        for (var R = this.config.maxAudioFramesDrift, D = 0, _ = L; D < b.length;) {
                            var k = b[D],
                                I = k.pts,
                                w = I - _,
                                C = Math.abs(1e3 * w / h);
                            if (w <= -R * v && void 0 !== n) r || D > 0 ? (d.b.warn("[mp4-remuxer]: Dropping 1 audio frame @ " + (_ / h).toFixed(3) + "s due to " + Math.round(C) + " ms overlap."), b.splice(D, 1)) : (d.b.warn("Audio frame @ " + (I / h).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * w / h) + " ms."), _ = I + v, D++);
                            else if (w >= R * v && C < 1e4 && void 0 !== n) {
                                var O = Math.floor(w / v);
                                _ = I - O * v, d.b.warn("[mp4-remuxer]: Injecting " + O + " audio frame @ " + (_ / h).toFixed(3) + "s due to " + Math.round(1e3 * w / h) + " ms gap.");
                                for (var x = 0; x < O; x++) {
                                    var P = Math.max(_, 0);
                                    (s = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (d.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), s = k.unit.subarray()), b.splice(D, 0, {
                                        unit: s,
                                        pts: P,
                                        dts: P
                                    }), _ += v, D++
                                }
                                k.pts = k.dts = _, _ += v, D++
                            } else k.pts = k.dts = _, _ += v, D++
                        }
                    for (var M, F = null, N = null, U = 0, B = b.length; B--;) U += b[B].unit.byteLength;
                    for (var G = 0, K = b.length; G < K; G++) {
                        var j = b[G],
                            H = j.unit,
                            V = j.pts;
                        if (null !== N) {
                            E[G - 1].duration = Math.round((V - N) / f)
                        } else {
                            var Y = Math.round(1e3 * (V - L) / h),
                                W = 0;
                            if (r && t.isAAC) {
                                if (Y > 0 && Y < 1e4) W = Math.round((V - L) / v), d.b.log("[mp4-remuxer]: " + Y + " ms hole between AAC samples detected,filling it"), W > 0 && ((s = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (s = H.subarray()), U += W * s.length);
                                else if (Y < -12) {
                                    d.b.log("[mp4-remuxer]: drop overlapping AAC sample, expected/parsed/delta:" + (L / h).toFixed(3) + "s/" + (V / h).toFixed(3) + "s/" + -Y + "ms"), U -= H.byteLength;
                                    continue
                                }
                                V = L
                            }
                            if (F = V, !(U > 0)) return;
                            U += S;
                            try {
                                M = new Uint8Array(U)
                            } catch (t) {
                                return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                                    type: u.b.MUX_ERROR,
                                    details: u.a.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: U,
                                    reason: "fail allocating audio mdat " + U
                                })
                            }
                            T || (new DataView(M.buffer).setUint32(0, U), M.set(o.types.mdat, 4));
                            for (var q = 0; q < W; q++)(s = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (d.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating the current frame instead"), s = H.subarray()), M.set(s, S), S += s.byteLength, E.push(new y(!0, 1024, s.byteLength, 0))
                        }
                        M.set(H, S);
                        var X = H.byteLength;
                        S += X, E.push(new y(!0, g, X, 0)), N = V
                    }
                    var z = E.length;
                    if (z) {
                        var Q = E[E.length - 1];
                        this.nextAudioPts = L = N + f * Q.duration;
                        var $ = T ? new Uint8Array(0) : o.moof(t.sequenceNumber++, F / f, c({}, t, {
                            samples: E
                        }));
                        t.samples = [];
                        var J = F / h,
                            Z = L / h;
                        return {
                            data1: $,
                            data2: M,
                            startPTS: J,
                            endPTS: Z,
                            startDTS: J,
                            endDTS: Z,
                            type: "audio",
                            hasAudio: !0,
                            hasVideo: !1,
                            nb: z
                        }
                    }
                }, e.remuxEmptyAudio = function(t, e, r, i) {
                    var n = t.inputTimeScale,
                        s = n / (t.samplerate ? t.samplerate : n),
                        o = this.nextAudioPts,
                        l = (null !== o ? o : i.startDTS * n) + this._initDTS,
                        u = i.endDTS * n + this._initDTS,
                        h = 1024 * s,
                        c = Math.ceil((u - l) / h),
                        f = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                    if (d.b.warn("[mp4-remuxer]: remux empty Audio"), f) {
                        for (var g = [], v = 0; v < c; v++) {
                            var p = l + v * h;
                            g.push({
                                unit: f,
                                pts: p,
                                dts: p
                            })
                        }
                        return t.samples = g, this.remuxAudio(t, e, r, !1)
                    }
                    d.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
                }, e.remuxID3 = function(t, e) {
                    var r = t.samples.length;
                    if (r) {
                        for (var i = t.inputTimeScale, a = this._initPTS, n = this._initDTS, s = 0; s < r; s++) {
                            var o = t.samples[s];
                            o.pts = m(o.pts - a, e * i) / i, o.dts = m(o.dts - n, e * i) / i
                        }
                        var l = t.samples;
                        return t.samples = [], {
                            samples: l
                        }
                    }
                }, e.remuxText = function(t, e) {
                    var r = t.samples.length;
                    if (r) {
                        for (var i = t.inputTimeScale, a = this._initPTS, n = 0; n < r; n++) {
                            var s = t.samples[n];
                            s.pts = m(s.pts - a, e * i) / i
                        }
                        t.samples.sort((function(t, e) {
                            return t.pts - e.pts
                        }));
                        var o = t.samples;
                        return t.samples = [], {
                            samples: o
                        }
                    }
                }, t
            }();

        function m(t, e) {
            var r;
            if (null === e) return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
            return t
        }
        var y = function(t, e, r, i) {
                this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = r, this.cts = i, this.flags = new T(t)
            },
            T = function(t) {
                this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
            }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }));
        var i = r(10);

        function a(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var n = function() {
            function t(t, e) {
                this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = e ? Object(i.buildAbsoluteURL)(t, e, {
                    alwaysNormalize: !0
                }) : t
            }
            var e, r, n;
            return t.fromURL = function(e, r) {
                return new t(e, r)
            }, t.fromURI = function(e) {
                return new t(e)
            }, e = t, (r = [{
                key: "uri",
                get: function() {
                    return this._uri
                }
            }]) && a(e.prototype, r), n && a(e, n), t
        }()
    }, function(t, e, r) {
        function i(t) {
            var e = {};

            function r(i) {
                if (e[i]) return e[i].exports;
                var a = e[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
            }
            r.m = t, r.c = e, r.i = function(t) {
                return t
            }, r.d = function(t, e, i) {
                r.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, r.r = function(t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, r.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return r.d(e, "a", e), e
            }, r.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, r.p = "/", r.oe = function(t) {
                throw console.error(t), t
            };
            var i = r(r.s = ENTRY_MODULE);
            return i.default || i
        }

        function a(t) {
            return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }

        function n(t, e, i) {
            var n = {};
            n[i] = [];
            var s = e.toString(),
                o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!o) return n;
            for (var l, u = o[1], d = new RegExp("(\\\\n|\\W)" + a(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = d.exec(s);) "dll-reference" !== l[3] && n[i].push(l[3]);
            for (d = new RegExp("\\(" + a(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = d.exec(s);) t[l[2]] || (n[i].push(l[1]), t[l[2]] = r(l[1]).m), n[l[2]] = n[l[2]] || [], n[l[2]].push(l[4]);
            for (var h, c = Object.keys(n), f = 0; f < c.length; f++)
                for (var g = 0; g < n[c[f]].length; g++) h = n[c[f]][g], isNaN(1 * h) || (n[c[f]][g] = 1 * n[c[f]][g]);
            return n
        }

        function s(t) {
            return Object.keys(t).reduce((function(e, r) {
                return e || t[r].length > 0
            }), !1)
        }
        t.exports = function(t, e) {
            e = e || {};
            var a = {
                    main: r.m
                },
                o = e.all ? {
                    main: Object.keys(a.main)
                } : function(t, e) {
                    for (var r = {
                            main: [e]
                        }, i = {
                            main: []
                        }, a = {
                            main: {}
                        }; s(r);)
                        for (var o = Object.keys(r), l = 0; l < o.length; l++) {
                            var u = o[l],
                                d = r[u].pop();
                            if (a[u] = a[u] || {}, !a[u][d] && t[u][d]) {
                                a[u][d] = !0, i[u] = i[u] || [], i[u].push(d);
                                for (var h = n(t, t[u][d], u), c = Object.keys(h), f = 0; f < c.length; f++) r[c[f]] = r[c[f]] || [], r[c[f]] = r[c[f]].concat(h[c[f]])
                            }
                        }
                    return i
                }(a, t),
                l = "";
            Object.keys(o).filter((function(t) {
                return "main" !== t
            })).forEach((function(t) {
                for (var e = 0; o[t][e];) e++;
                o[t].push(e), a[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + t + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o[t].map((function(e) {
                    return JSON.stringify(e) + ": " + a[t][e].toString()
                })).join(",") + "});\n"
            })), l = l + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o.main.map((function(t) {
                return JSON.stringify(t) + ": " + a.main[t].toString()
            })).join(",") + "}))(self);";
            var u = new window.Blob([l], {
                type: "text/javascript"
            });
            if (e.bare) return u;
            var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
                h = new window.Worker(d);
            return h.objectURL = d, h
        }
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "default", (function() {
            return o
        }));
        var i = r(9),
            a = r(0),
            n = r(1),
            s = r(13);

        function o(t) {
            var e = new s.EventEmitter,
                r = function(e, r) {
                    t.postMessage({
                        event: e,
                        data: r
                    })
                };
            e.on(a.a.FRAG_DECRYPTED, r), e.on(a.a.ERROR, r), t.addEventListener("message", (function(a) {
                var s = a.data;
                switch (s.cmd) {
                    case "init":
                        var o = JSON.parse(s.config);
                        t.transmuxer = new i.c(e, s.typeSupported, o, s.vendor), Object(n.a)(o.debug), r("init", null);
                        break;
                    case "configure":
                        t.transmuxer.configure(s.config);
                        break;
                    case "demux":
                        var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                        Object(i.d)(u) ? u.then((function(e) {
                            l(t, e)
                        })) : l(t, u);
                        break;
                    case "flush":
                        var h = s.chunkMeta,
                            c = t.transmuxer.flush(h);
                        Object(i.d)(c) ? c.then((function(e) {
                            d(t, e, h)
                        })) : d(t, c, h)
                }
            }))
        }

        function l(t, e) {
            if ((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
                var r, i = [],
                    a = e.remuxResult,
                    n = a.audio,
                    s = a.video;
                n && u(i, n), s && u(i, s), t.postMessage({
                    event: "transmuxComplete",
                    data: e
                }, i)
            }
        }

        function u(t, e) {
            e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
        }

        function d(t, e, r) {
            e.forEach((function(e) {
                l(t, e)
            })), t.postMessage({
                event: "flush",
                data: r
            })
        }
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "default", (function() {
            return Wr
        }));
        var i = {};
        r.r(i), r.d(i, "newCue", (function() {
            return Mr
        }));
        var a = r(10),
            n = r(2),
            s = r(3),
            o = r(0),
            l = r(1),
            u = r(5),
            d = r(4);

        function h(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var c = function() {
                function t(t) {
                    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.initSegment = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.fragments = [], this.url = t
                }
                var e, r, i;
                return t.prototype.reloaded = function(t) {
                    if (!t) return this.advanced = !0, void(this.updated = !0);
                    var e = this.lastPartSn - t.lastPartSn,
                        r = this.lastPartIndex - t.lastPartIndex;
                    this.updated = this.endSN !== t.endSN || !!r || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
                }, e = t, (r = [{
                    key: "hasProgramDateTime",
                    get: function() {
                        return !!this.fragments.length && Object(s.a)(this.fragments[this.fragments.length - 1].programDateTime)
                    }
                }, {
                    key: "levelTargetDuration",
                    get: function() {
                        return this.averagetargetduration || this.targetduration || 10
                    }
                }, {
                    key: "edge",
                    get: function() {
                        return this.partEnd || this.fragmentEnd
                    }
                }, {
                    key: "partEnd",
                    get: function() {
                        var t;
                        return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                    }
                }, {
                    key: "fragmentEnd",
                    get: function() {
                        var t;
                        return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
                    }
                }, {
                    key: "age",
                    get: function() {
                        return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                    }
                }, {
                    key: "lastPartIndex",
                    get: function() {
                        var t;
                        return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
                    }
                }, {
                    key: "lastPartSn",
                    get: function() {
                        var t;
                        return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                    }
                }]) && h(e.prototype, r), i && h(e, i), t
            }(),
            f = r(16),
            g = /^(\d+)x(\d+)$/,
            v = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            p = function() {
                function t(e) {
                    for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
                }
                var e = t.prototype;
                return e.decimalInteger = function(t) {
                    var e = parseInt(this[t], 10);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, e.hexadecimalInteger = function(t) {
                    if (this[t]) {
                        var e = (this[t] || "0x").slice(2);
                        e = (1 & e.length ? "0" : "") + e;
                        for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                        return r
                    }
                    return null
                }, e.hexadecimalIntegerAsNumber = function(t) {
                    var e = parseInt(this[t], 16);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, e.decimalFloatingPoint = function(t) {
                    return parseFloat(this[t])
                }, e.optionalFloat = function(t, e) {
                    var r = this[t];
                    return r ? parseFloat(r) : e
                }, e.enumeratedString = function(t) {
                    return this[t]
                }, e.bool = function(t) {
                    return "YES" === this[t]
                }, e.decimalResolution = function(t) {
                    var e = g.exec(this[t]);
                    if (null !== e) return {
                        width: parseInt(e[1], 10),
                        height: parseInt(e[2], 10)
                    }
                }, t.parseAttrList = function(t) {
                    var e, r = {};
                    for (v.lastIndex = 0; null !== (e = v.exec(t));) {
                        var i = e[2];
                        0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1]] = i
                    }
                    return r
                }, t
            }(),
            m = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                },
                text: {
                    stpp: !0,
                    wvtt: !0
                }
            };

        function y(t, e) {
            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
        }
        var T, E, b = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+/g,
            S = /#EXT-X-MEDIA:(.*)/g,
            L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
            A = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
            R = /\.(mp4|m4s|m4v|m4a)$/i,
            D = function() {
                function t() {}
                return t.findGroup = function(t, e) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.id === e) return i
                    }
                }, t.convertAVC1ToAVCOTI = function(t) {
                    var e = t.split(".");
                    if (e.length > 2) {
                        var r = e.shift() + ".";
                        return r += parseInt(e.shift()).toString(16), r += ("000" + parseInt(e.shift()).toString(16)).substr(-4)
                    }
                    return t
                }, t.resolve = function(t, e) {
                    return a.buildAbsoluteURL(e, t, {
                        alwaysNormalize: !0
                    })
                }, t.parseMasterPlaylist = function(e, r) {
                    var i, a = [],
                        n = {},
                        s = !1;
                    for (b.lastIndex = 0; null != (i = b.exec(e));)
                        if (i[1]) {
                            var o = new p(i[1]),
                                l = {
                                    attrs: o,
                                    bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                                    name: o.NAME,
                                    url: t.resolve(i[2], r)
                                },
                                u = o.decimalResolution("RESOLUTION");
                            u && (l.width = u.width, l.height = u.height), _((o.CODECS || "").split(/[ ,]+/).filter((function(t) {
                                return t
                            })), l), l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec)), a.push(l)
                        } else if (i[3]) {
                        var d = new p(i[3]);
                        d["DATA-ID"] && (s = !0, n[d["DATA-ID"]] = d)
                    }
                    return {
                        levels: a,
                        sessionData: s ? n : null
                    }
                }, t.parseMasterPlaylistMedia = function(e, r, i, a) {
                    var n;
                    void 0 === a && (a = []);
                    var s = [],
                        o = 0;
                    for (S.lastIndex = 0; null !== (n = S.exec(e));) {
                        var l = new p(n[1]);
                        if (l.TYPE === i) {
                            var u = {
                                attrs: l,
                                bitrate: 0,
                                id: o++,
                                groupId: l["GROUP-ID"],
                                instreamId: l["INSTREAM-ID"],
                                name: l.NAME || l.LANGUAGE || "",
                                type: i,
                                default: l.bool("DEFAULT"),
                                autoselect: l.bool("AUTOSELECT"),
                                forced: l.bool("FORCED"),
                                lang: l.LANGUAGE,
                                url: l.URI ? t.resolve(l.URI, r) : ""
                            };
                            if (a.length) {
                                var d = t.findGroup(a, u.groupId) || a[0];
                                k(u, d, "audioCodec"), k(u, d, "textCodec")
                            }
                            s.push(u)
                        }
                    }
                    return s
                }, t.parseLevelPlaylist = function(t, e, r, i, a) {
                    var n, o, u, h = new c(e),
                        g = h.fragments,
                        v = 0,
                        m = 0,
                        y = 0,
                        T = 0,
                        E = null,
                        b = new d.c(i, e),
                        S = -1;
                    for (L.lastIndex = 0, h.m3u8 = t; null !== (n = L.exec(t));) {
                        var D = n[1];
                        if (D) {
                            b.duration = parseFloat(D);
                            var _ = (" " + n[2]).slice(1);
                            b.title = _ || null, b.tagList.push(_ ? ["INF", D, _] : ["INF", D])
                        } else if (n[3]) Object(s.a)(b.duration) && (b.start = y, u && (b.levelkey = u), b.sn = v, b.level = r, b.cc = T, b.urlId = a, g.push(b), b.relurl = (" " + n[3]).slice(1), I(b, E), E = b, y += b.duration, v++, m = 0, (b = new d.c(i, e)).start = y, b.sn = v, b.cc = T, b.level = r);
                        else if (n[4]) {
                            var k = (" " + n[4]).slice(1);
                            E ? b.setByteRange(k, E) : b.setByteRange(k)
                        } else if (n[5]) b.rawProgramDateTime = (" " + n[5]).slice(1), b.tagList.push(["PROGRAM-DATE-TIME", b.rawProgramDateTime]), -1 === S && (S = g.length);
                        else {
                            if (!(n = n[0].match(A))) {
                                l.b.warn("No matches on slow regex match for level playlist!");
                                continue
                            }
                            for (o = 1; o < n.length && void 0 === n[o]; o++);
                            var w = (" " + n[o]).slice(1),
                                C = (" " + n[o + 1]).slice(1),
                                O = n[o + 2] ? (" " + n[o + 2]).slice(1) : "";
                            switch (w) {
                                case "PLAYLIST-TYPE":
                                    h.type = C.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    v = h.startSN = parseInt(C);
                                    break;
                                case "SKIP":
                                    var x = new p(C),
                                        P = x.decimalInteger("SKIPPED-SEGMENTS");
                                    if (Object(s.a)(P)) {
                                        h.skippedSegments = P;
                                        for (var M = P; M--;) g.unshift(null);
                                        v += P
                                    }
                                    var F = x.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                    F && (h.recentlyRemovedDateranges = F.split("\t"));
                                    break;
                                case "TARGETDURATION":
                                    h.targetduration = parseFloat(C);
                                    break;
                                case "VERSION":
                                    h.version = parseInt(C);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    h.live = !1;
                                    break;
                                case "#":
                                    (C || O) && b.tagList.push(O ? [C, O] : [C]);
                                    break;
                                case "DIS":
                                    T++;
                                case "GAP":
                                    b.tagList.push([w]);
                                    break;
                                case "BITRATE":
                                    b.tagList.push([w, C]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    T = parseInt(C);
                                    break;
                                case "KEY":
                                    var N, U = new p(C),
                                        B = U.enumeratedString("METHOD"),
                                        G = U.URI,
                                        K = U.hexadecimalInteger("IV"),
                                        j = U.enumeratedString("KEYFORMATVERSIONS"),
                                        H = U.enumeratedString("KEYID"),
                                        V = null != (N = U.enumeratedString("KEYFORMAT")) ? N : "identity";
                                    if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(V) > -1) {
                                        l.b.warn("Keyformat " + V + " is not supported from the manifest");
                                        continue
                                    }
                                    if ("identity" !== V) continue;
                                    B && (u = f.a.fromURL(e, G), G && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(B) >= 0 && (u.method = B, u.keyFormat = V, H && (u.keyID = H), j && (u.keyFormatVersions = j), u.iv = K));
                                    break;
                                case "START":
                                    var Y = new p(C).decimalFloatingPoint("TIME-OFFSET");
                                    Object(s.a)(Y) && (h.startTimeOffset = Y);
                                    break;
                                case "MAP":
                                    var W = new p(C);
                                    b.relurl = W.URI, W.BYTERANGE && b.setByteRange(W.BYTERANGE), b.level = r, b.sn = "initSegment", u && (b.levelkey = u), h.initSegment = b, (b = new d.c(i, e)).rawProgramDateTime = h.initSegment.rawProgramDateTime;
                                    break;
                                case "SERVER-CONTROL":
                                    var q = new p(C);
                                    h.canBlockReload = q.bool("CAN-BLOCK-RELOAD"), h.canSkipUntil = q.optionalFloat("CAN-SKIP-UNTIL", 0), h.canSkipDateRanges = h.canSkipUntil > 0 && q.bool("CAN-SKIP-DATERANGES"), h.partHoldBack = q.optionalFloat("PART-HOLD-BACK", 0), h.holdBack = q.optionalFloat("HOLD-BACK", 0);
                                    break;
                                case "PART-INF":
                                    var X = new p(C);
                                    h.partTarget = X.decimalFloatingPoint("PART-TARGET");
                                    break;
                                case "PART":
                                    var z = h.partList;
                                    z || (z = h.partList = []);
                                    var Q = m > 0 ? z[z.length - 1] : void 0,
                                        $ = m++,
                                        J = new d.b(new p(C), b, e, $, Q);
                                    z.push(J), b.duration += J.duration;
                                    break;
                                case "PRELOAD-HINT":
                                    var Z = new p(C);
                                    h.preloadHint = Z;
                                    break;
                                case "RENDITION-REPORT":
                                    var tt = new p(C);
                                    h.renditionReports = h.renditionReports || [], h.renditionReports.push(tt);
                                    break;
                                default:
                                    l.b.warn("line parsed but not handled: " + n)
                            }
                        }
                    }
                    E && !E.relurl ? (g.pop(), y -= E.duration, h.fragmentHint = E) : h.fragmentHint = b;
                    var et = g.length,
                        rt = g[0],
                        it = g[et - 1];
                    if ((y += h.skippedSegments * h.targetduration) > 0 && et && it) {
                        h.averagetargetduration = y / et;
                        var at = it.sn;
                        h.endSN = "initSegment" !== at ? at : 0, rt && (h.startCC = rt.cc, h.initSegment || h.fragments.every((function(t) {
                            return R.test(t.relurl)
                        })) && (l.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (b = new d.c(i, e)).relurl = it.relurl, b.level = r, b.sn = "initSegment", h.initSegment = b, h.needSidxRanges = !0))
                    } else h.endSN = 0, h.startCC = 0;
                    return h.partList && (y += h.fragmentHint.duration), h.totalduration = y, h.endCC = T, S > 0 && function(t, e) {
                        for (var r = t[e], i = e; i--;) {
                            var a = t[i];
                            if (!a) return;
                            a.programDateTime = r.programDateTime - 1e3 * a.duration, r = a
                        }
                    }(g, S), h
                }, t
            }();

        function _(t, e) {
            ["video", "audio", "text"].forEach((function(r) {
                var i = t.filter((function(t) {
                    return function(t, e) {
                        var r = m[e];
                        return !!r && !0 === r[t.slice(0, 4)]
                    }(t, r)
                }));
                if (i.length) {
                    var a = i.filter((function(t) {
                        return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                    }));
                    e[r + "Codec"] = a.length > 0 ? a[0] : i[0], t = t.filter((function(t) {
                        return -1 === i.indexOf(t)
                    }))
                }
            })), e.unknownCodecs = t
        }

        function k(t, e, r) {
            var i = e[r];
            i && (t[r] = i)
        }

        function I(t, e) {
            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), Object(s.a)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
        }

        function w(t, e) {
            var r = t.url;
            return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
        }! function(t) {
            t.MANIFEST = "manifest", t.LEVEL = "level", t.AUDIO_TRACK = "audioTrack", t.SUBTITLE_TRACK = "subtitleTrack"
        }(T || (T = {})),
        function(t) {
            t.MAIN = "main", t.AUDIO = "audio", t.SUBTITLE = "subtitle"
        }(E || (E = {}));
        var C, O = function() {
                function t(t) {
                    this.hls = void 0, this.loaders = Object.create(null), this.checkAgeHeader = !0, this.hls = t, this.registerListeners()
                }
                var e = t.prototype;
                return e.registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(o.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(o.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(o.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(o.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                }, e.createInternalLoader = function(t) {
                    var e = this.hls.config,
                        r = e.pLoader,
                        i = e.loader,
                        a = new(r || i)(e);
                    return t.loader = a, this.loaders[t.type] = a, a
                }, e.getInternalLoader = function(t) {
                    return this.loaders[t.type]
                }, e.resetInternalLoader = function(t) {
                    this.loaders[t] && delete this.loaders[t]
                }, e.destroyInternalLoaders = function() {
                    for (var t in this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy(), this.resetInternalLoader(t)
                    }
                }, e.destroy = function() {
                    this.unregisterListeners(), this.destroyInternalLoaders()
                }, e.onManifestLoading = function(t, e) {
                    var r = e.url;
                    this.checkAgeHeader = !0, this.load({
                        id: null,
                        groupId: null,
                        level: 0,
                        responseType: "text",
                        type: T.MANIFEST,
                        url: r,
                        deliveryDirectives: null
                    })
                }, e.onLevelLoading = function(t, e) {
                    var r = e.id,
                        i = e.level,
                        a = e.url,
                        n = e.deliveryDirectives;
                    this.load({
                        id: r,
                        groupId: null,
                        level: i,
                        responseType: "text",
                        type: T.LEVEL,
                        url: a,
                        deliveryDirectives: n
                    })
                }, e.onAudioTrackLoading = function(t, e) {
                    var r = e.id,
                        i = e.groupId,
                        a = e.url,
                        n = e.deliveryDirectives;
                    this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: "text",
                        type: T.AUDIO_TRACK,
                        url: a,
                        deliveryDirectives: n
                    })
                }, e.onSubtitleTrackLoading = function(t, e) {
                    var r = e.id,
                        i = e.groupId,
                        a = e.url,
                        n = e.deliveryDirectives;
                    this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: "text",
                        type: T.SUBTITLE_TRACK,
                        url: a,
                        deliveryDirectives: n
                    })
                }, e.load = function(t) {
                    var e, r, i, a, n, s, o = this.hls.config,
                        u = this.getInternalLoader(t);
                    if (u) {
                        var d = u.context;
                        if (d && d.url === t.url) return void l.b.trace("[playlist-loader]: playlist request ongoing");
                        l.b.log("[playlist-loader]: aborting previous loader for type: " + t.type), u.abort()
                    }
                    switch (t.type) {
                        case T.MANIFEST:
                            r = o.manifestLoadingMaxRetry, i = o.manifestLoadingTimeOut, a = o.manifestLoadingRetryDelay, n = o.manifestLoadingMaxRetryTimeout;
                            break;
                        case T.LEVEL:
                        case T.AUDIO_TRACK:
                        case T.SUBTITLE_TRACK:
                            r = 0, i = o.levelLoadingTimeOut;
                            break;
                        default:
                            r = o.levelLoadingMaxRetry, i = o.levelLoadingTimeOut, a = o.levelLoadingRetryDelay, n = o.levelLoadingMaxRetryTimeout
                    }
                    if ((u = this.createInternalLoader(t), null !== (e = t.deliveryDirectives) && void 0 !== e && e.part) && (t.type === T.LEVEL && null !== t.level ? s = this.hls.levels[t.level].details : t.type === T.AUDIO_TRACK && null !== t.id ? s = this.hls.audioTracks[t.id].details : t.type === T.SUBTITLE_TRACK && null !== t.id && (s = this.hls.subtitleTracks[t.id].details), s)) {
                        var h = s.partTarget,
                            c = s.targetduration;
                        h && c && (i = Math.min(1e3 * Math.max(3 * h, .8 * c), i))
                    }
                    var f = {
                            timeout: i,
                            maxRetry: r,
                            retryDelay: a,
                            maxRetryDelay: n,
                            highWaterMark: 0
                        },
                        g = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        };
                    u.load(t, f, g)
                }, e.loadsuccess = function(t, e, r, i) {
                    if (void 0 === i && (i = null), r.isSidxRequest) return this.handleSidxRequest(t, r), void this.handlePlaylistLoaded(t, e, r, i);
                    this.resetInternalLoader(r.type);
                    var a = t.data;
                    0 === a.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, r, i) : this.handleMasterPlaylist(t, e, r, i)) : this.handleManifestParsingError(t, r, "no EXTM3U delimiter", i)
                }, e.loaderror = function(t, e, r) {
                    void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t)
                }, e.loadtimeout = function(t, e, r) {
                    void 0 === r && (r = null), this.handleNetworkError(e, r, !0)
                }, e.handleMasterPlaylist = function(t, e, r, i) {
                    var a = this.hls,
                        n = t.data,
                        s = w(t, r),
                        u = D.parseMasterPlaylist(n, s),
                        d = u.levels,
                        h = u.sessionData;
                    if (d.length) {
                        var c = d.map((function(t) {
                                return {
                                    id: t.attrs.AUDIO,
                                    audioCodec: t.audioCodec
                                }
                            })),
                            f = d.map((function(t) {
                                return {
                                    id: t.attrs.SUBTITLES,
                                    textCodec: t.textCodec
                                }
                            })),
                            g = D.parseMasterPlaylistMedia(n, s, "AUDIO", c),
                            v = D.parseMasterPlaylistMedia(n, s, "SUBTITLES", f),
                            m = D.parseMasterPlaylistMedia(n, s, "CLOSED-CAPTIONS");
                        if (g.length) g.some((function(t) {
                            return !t.url
                        })) || !d[0].audioCodec || d[0].attrs.AUDIO || (l.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
                            type: "main",
                            name: "main",
                            default: !1,
                            autoselect: !1,
                            forced: !1,
                            id: -1,
                            attrs: new p({}),
                            bitrate: 0,
                            url: ""
                        }));
                        a.trigger(o.a.MANIFEST_LOADED, {
                            levels: d,
                            audioTracks: g,
                            subtitles: v,
                            captions: m,
                            url: s,
                            stats: e,
                            networkDetails: i,
                            sessionData: h
                        })
                    } else this.handleManifestParsingError(t, r, "no level found in manifest", i)
                }, e.handleTrackOrLevelPlaylist = function(t, e, r, i) {
                    var a = this.hls,
                        l = r.id,
                        u = r.level,
                        d = r.type,
                        h = w(t, r),
                        c = Object(s.a)(l) ? l : 0,
                        f = Object(s.a)(u) ? u : c,
                        g = function(t) {
                            switch (t.type) {
                                case T.AUDIO_TRACK:
                                    return E.AUDIO;
                                case T.SUBTITLE_TRACK:
                                    return E.SUBTITLE;
                                default:
                                    return E.MAIN
                            }
                        }(r),
                        v = D.parseLevelPlaylist(t.data, h, f, g, c);
                    if (v.fragments.length) {
                        if (d === T.MANIFEST) {
                            var m = {
                                attrs: new p({}),
                                bitrate: 0,
                                details: v,
                                name: "",
                                url: h
                            };
                            a.trigger(o.a.MANIFEST_LOADED, {
                                levels: [m],
                                audioTracks: [],
                                url: h,
                                stats: e,
                                networkDetails: i,
                                sessionData: null
                            })
                        }
                        if (e.parsing.end = performance.now(), v.needSidxRanges) {
                            var y = v.initSegment.url;
                            this.load({
                                url: y,
                                isSidxRequest: !0,
                                type: d,
                                level: u,
                                levelDetails: v,
                                id: l,
                                groupId: null,
                                rangeStart: 0,
                                rangeEnd: 2048,
                                responseType: "arraybuffer",
                                deliveryDirectives: null
                            })
                        } else r.levelDetails = v, this.handlePlaylistLoaded(t, e, r, i)
                    } else a.trigger(o.a.ERROR, {
                        type: n.b.NETWORK_ERROR,
                        details: n.a.LEVEL_EMPTY_ERROR,
                        fatal: !1,
                        url: h,
                        reason: "no fragments found in level",
                        level: "number" == typeof r.level ? r.level : void 0
                    })
                }, e.handleSidxRequest = function(t, e) {
                    var r = Object(u.g)(new Uint8Array(t.data));
                    if (r) {
                        var i = r.references,
                            a = e.levelDetails;
                        i.forEach((function(t, e) {
                            var r = t.info,
                                i = a.fragments[e];
                            0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                        })), a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                    }
                }, e.handleManifestParsingError = function(t, e, r, i) {
                    this.hls.trigger(o.a.ERROR, {
                        type: n.b.NETWORK_ERROR,
                        details: n.a.MANIFEST_PARSING_ERROR,
                        fatal: e.type === T.MANIFEST,
                        url: t.url,
                        reason: r,
                        response: t,
                        context: e,
                        networkDetails: i
                    })
                }, e.handleNetworkError = function(t, e, r, i) {
                    void 0 === r && (r = !1), l.b.warn("[playlist-loader]: A network " + (r ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
                    var a = n.a.UNKNOWN,
                        s = !1,
                        u = this.getInternalLoader(t);
                    switch (t.type) {
                        case T.MANIFEST:
                            a = r ? n.a.MANIFEST_LOAD_TIMEOUT : n.a.MANIFEST_LOAD_ERROR, s = !0;
                            break;
                        case T.LEVEL:
                            a = r ? n.a.LEVEL_LOAD_TIMEOUT : n.a.LEVEL_LOAD_ERROR, s = !1;
                            break;
                        case T.AUDIO_TRACK:
                            a = r ? n.a.AUDIO_TRACK_LOAD_TIMEOUT : n.a.AUDIO_TRACK_LOAD_ERROR, s = !1;
                            break;
                        case T.SUBTITLE_TRACK:
                            a = r ? n.a.SUBTITLE_TRACK_LOAD_TIMEOUT : n.a.SUBTITLE_LOAD_ERROR, s = !1
                    }
                    u && this.resetInternalLoader(t.type);
                    var d = {
                        type: n.b.NETWORK_ERROR,
                        details: a,
                        fatal: s,
                        url: t.url,
                        loader: u,
                        context: t,
                        networkDetails: e
                    };
                    i && (d.response = i), this.hls.trigger(o.a.ERROR, d)
                }, e.handlePlaylistLoaded = function(t, e, r, i) {
                    var a = r.type,
                        n = r.level,
                        s = r.id,
                        l = r.groupId,
                        u = r.loader,
                        d = r.levelDetails,
                        h = r.deliveryDirectives;
                    if (null != d && d.targetduration) {
                        if (u) {
                            var c = this.checkAgeHeader && d.live ? u.getResponseHeader("age") : null;
                            switch (d.ageHeader = c ? parseFloat(c) : 0, this.checkAgeHeader = !!c, a) {
                                case T.MANIFEST:
                                case T.LEVEL:
                                    this.hls.trigger(o.a.LEVEL_LOADED, {
                                        details: d,
                                        level: n || 0,
                                        id: s || 0,
                                        stats: e,
                                        networkDetails: i,
                                        deliveryDirectives: h
                                    });
                                    break;
                                case T.AUDIO_TRACK:
                                    this.hls.trigger(o.a.AUDIO_TRACK_LOADED, {
                                        details: d,
                                        id: s || 0,
                                        groupId: l || "",
                                        stats: e,
                                        networkDetails: i,
                                        deliveryDirectives: h
                                    });
                                    break;
                                case T.SUBTITLE_TRACK:
                                    this.hls.trigger(o.a.SUBTITLE_TRACK_LOADED, {
                                        details: d,
                                        id: s || 0,
                                        groupId: l || "",
                                        stats: e,
                                        networkDetails: i,
                                        deliveryDirectives: h
                                    })
                            }
                        }
                    } else this.handleManifestParsingError(t, r, "invalid target duration", i)
                }, t
            }(),
            x = function() {
                function t(t) {
                    this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t, this._registerListeners()
                }
                var e = t.prototype;
                return e._registerListeners = function() {
                    this.hls.on(o.a.KEY_LOADING, this.onKeyLoading, this)
                }, e._unregisterListeners = function() {
                    this.hls.off(o.a.KEY_LOADING, this.onKeyLoading)
                }, e.destroy = function() {
                    for (var t in this._unregisterListeners(), this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy()
                    }
                    this.loaders = {}
                }, e.onKeyLoading = function(t, e) {
                    var r = e.frag,
                        i = r.type,
                        a = this.loaders[i];
                    if (r.decryptdata) {
                        var n = r.decryptdata.uri;
                        if (n !== this.decrypturl || null === this.decryptkey) {
                            var s = this.hls.config;
                            if (a && (l.b.warn("abort previous key loader for type:" + i), a.abort()), !n) return void l.b.warn("key uri is falsy");
                            var u = s.loader,
                                d = r.loader = this.loaders[i] = new u(s);
                            this.decrypturl = n, this.decryptkey = null;
                            var h = {
                                    url: n,
                                    frag: r,
                                    responseType: "arraybuffer"
                                },
                                c = {
                                    timeout: s.fragLoadingTimeOut,
                                    maxRetry: 0,
                                    retryDelay: s.fragLoadingRetryDelay,
                                    maxRetryDelay: s.fragLoadingMaxRetryTimeout,
                                    highWaterMark: 0
                                },
                                f = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this)
                                };
                            d.load(h, c, f)
                        } else this.decryptkey && (r.decryptdata.key = this.decryptkey, this.hls.trigger(o.a.KEY_LOADED, {
                            frag: r
                        }))
                    } else l.b.warn("Missing decryption data on fragment in onKeyLoading")
                }, e.loadsuccess = function(t, e, r) {
                    var i = r.frag;
                    i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = null, delete this.loaders[i.type], this.hls.trigger(o.a.KEY_LOADED, {
                        frag: i
                    })) : l.b.error("after key load, decryptdata unset")
                }, e.loaderror = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), delete this.loaders[r.type], this.hls.trigger(o.a.ERROR, {
                        type: n.b.NETWORK_ERROR,
                        details: n.a.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: r,
                        response: t
                    })
                }, e.loadtimeout = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), delete this.loaders[r.type], this.hls.trigger(o.a.ERROR, {
                        type: n.b.NETWORK_ERROR,
                        details: n.a.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: r
                    })
                }, t
            }();
        ! function(t) {
            t.NOT_LOADED = "NOT_LOADED", t.BACKTRACKED = "BACKTRACKED", t.APPENDING = "APPENDING", t.PARTIAL = "PARTIAL", t.OK = "OK"
        }(C || (C = {}));
        var P = function() {
            function t(t) {
                this.activeFragment = null, this.activePart = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = t, this._registerListeners()
            }
            var e = t.prototype;
            return e._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.BUFFER_APPENDED, this.onBufferAppended, this), t.on(o.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(o.a.FRAG_LOADED, this.onFragLoaded, this)
            }, e._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.BUFFER_APPENDED, this.onBufferAppended, this), t.off(o.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(o.a.FRAG_LOADED, this.onFragLoaded, this)
            }, e.destroy = function() {
                this.fragments = Object.create(null), this.timeRanges = Object.create(null), this._unregisterListeners()
            }, e.getAppendedFrag = function(t, e) {
                var r = this.activeFragment;
                return r ? void 0 !== r.appendedPTS && r.start <= t && t <= r.appendedPTS ? r : this.getBufferedFrag(t, e) : null
            }, e.getBufferedFrag = function(t, e) {
                for (var r = this.fragments, i = Object.keys(r), a = i.length; a--;) {
                    var n = r[i[a]];
                    if ((null == n ? void 0 : n.body.type) === e && n.buffered) {
                        var s = n.body;
                        if (s.start <= t && t <= s.end) return s
                    }
                }
                return null
            }, e.detectEvictedFragments = function(t, e) {
                var r = this;
                Object.keys(this.fragments).forEach((function(i) {
                    var a = r.fragments[i];
                    if (a && a.buffered) {
                        var n = a.range[t];
                        n && n.time.some((function(t) {
                            var i = !r.isTimeBuffered(t.startPTS, t.endPTS, e);
                            return i && r.removeFragment(a.body), i
                        }))
                    }
                }))
            }, e.detectPartialFragments = function(t) {
                var e = this,
                    r = this.timeRanges,
                    i = t.frag,
                    a = t.part;
                if (r && "initSegment" !== i.sn) {
                    var n = F(i),
                        s = this.fragments[n];
                    s && (s.buffered = !0, s.backtrack = s.loaded = null, Object.keys(r).forEach((function(t) {
                        var n = i.elementaryStreams[t];
                        if (n) {
                            var o = r[t],
                                l = null !== a || !0 === n.partial;
                            s.range[t] = e.getBufferedTimes(i, a, l, o)
                        }
                    })))
                }
            }, e.getBufferedTimes = function(t, e, r, i) {
                for (var a = {
                        time: [],
                        partial: r
                    }, n = e ? e.start : t.start, s = e ? e.end : t.end, o = t.minEndPTS || s, l = t.maxStartPTS || n, u = 0; u < i.length; u++) {
                    var d = i.start(u) - this.bufferPadding,
                        h = i.end(u) + this.bufferPadding;
                    if (l >= d && o <= h) {
                        a.time.push({
                            startPTS: Math.max(n, i.start(u)),
                            endPTS: Math.min(s, i.end(u))
                        });
                        break
                    }
                    if (n < h && s > d) a.partial = !0, a.time.push({
                        startPTS: Math.max(n, i.start(u)),
                        endPTS: Math.min(s, i.end(u))
                    });
                    else if (s <= d) break
                }
                return a
            }, e.getPartialFragment = function(t) {
                var e, r, i, a = null,
                    n = 0,
                    s = this.bufferPadding,
                    o = this.fragments;
                return Object.keys(o).forEach((function(l) {
                    var u = o[l];
                    u && M(u) && (r = u.body.start - s, i = u.body.end + s, t >= r && t <= i && (e = Math.min(t - r, i - t), n <= e && (a = u.body, n = e)))
                })), a
            }, e.getState = function(t) {
                var e = F(t),
                    r = this.fragments[e];
                return r ? r.buffered ? M(r) ? C.PARTIAL : C.OK : r.backtrack ? C.BACKTRACKED : C.APPENDING : C.NOT_LOADED
            }, e.backtrack = function(t, e) {
                var r = F(t),
                    i = this.fragments[r];
                i && !i.backtrack && (i.backtrack = e || i.loaded, i.loaded = null)
            }, e.getBacktrackData = function(t) {
                var e = F(t),
                    r = this.fragments[e];
                if (r) {
                    var i, a = r.backtrack;
                    if (null != a && null !== (i = a.payload) && void 0 !== i && i.byteLength) return a;
                    this.removeFragment(t)
                }
                return null
            }, e.isTimeBuffered = function(t, e, r) {
                for (var i, a, n = 0; n < r.length; n++) {
                    if (i = r.start(n) - this.bufferPadding, a = r.end(n) + this.bufferPadding, t >= i && e <= a) return !0;
                    if (e <= i) return !1
                }
                return !1
            }, e.onFragLoaded = function(t, e) {
                var r = e.frag,
                    i = e.part;
                if ("initSegment" !== r.sn && !r.bitrateTest && !i) {
                    var a = F(r);
                    this.fragments[a] = {
                        body: r,
                        part: i,
                        loaded: e,
                        backtrack: null,
                        buffered: !1,
                        range: Object.create(null)
                    }
                }
            }, e.onBufferAppended = function(t, e) {
                var r = this,
                    i = e.frag,
                    a = e.part,
                    n = e.timeRanges;
                this.activeFragment = i, this.activePart = a, this.timeRanges = n, Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    if (r.detectEvictedFragments(t, e), !a)
                        for (var s = 0; s < e.length; s++) i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0)
                }))
            }, e.onFragBuffered = function(t, e) {
                this.detectPartialFragments(e)
            }, e.hasFragment = function(t) {
                var e = F(t);
                return !!this.fragments[e]
            }, e.removeFragment = function(t) {
                var e = F(t);
                t.stats.loaded = 0, t.clearElementaryStreamInfo(), delete this.fragments[e]
            }, e.removeAllFragments = function() {
                this.fragments = Object.create(null)
            }, t
        }();

        function M(t) {
            var e, r;
            return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
        }

        function F(t) {
            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
        }
        var N = function() {
                function t() {
                    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.onHandlerDestroying(), this.onHandlerDestroyed()
                }, e.onHandlerDestroying = function() {
                    this.clearNextTick(), this.clearInterval()
                }, e.onHandlerDestroyed = function() {}, e.hasInterval = function() {
                    return !!this._tickInterval
                }, e.hasNextTick = function() {
                    return !!this._tickTimer
                }, e.setInterval = function(t) {
                    return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
                }, e.clearInterval = function() {
                    return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                }, e.clearNextTick = function() {
                    return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                }, e.tick = function() {
                    this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
                }, e.doTick = function() {}, t
            }(),
            U = {
                length: 0,
                start: function() {
                    return 0
                },
                end: function() {
                    return 0
                }
            },
            B = function() {
                function t() {}
                return t.isBuffered = function(e, r) {
                    try {
                        if (e)
                            for (var i = t.getBuffered(e), a = 0; a < i.length; a++)
                                if (r >= i.start(a) && r <= i.end(a)) return !0
                    } catch (t) {}
                    return !1
                }, t.bufferInfo = function(e, r, i) {
                    try {
                        if (e) {
                            var a, n = t.getBuffered(e),
                                s = [];
                            for (a = 0; a < n.length; a++) s.push({
                                start: n.start(a),
                                end: n.end(a)
                            });
                            return this.bufferedInfo(s, r, i)
                        }
                    } catch (t) {}
                    return {
                        len: 0,
                        start: r,
                        end: r,
                        nextStart: void 0
                    }
                }, t.bufferedInfo = function(t, e, r) {
                    t.sort((function(t, e) {
                        var r = t.start - e.start;
                        return r || e.end - t.end
                    }));
                    var i = [];
                    if (r)
                        for (var a = 0; a < t.length; a++) {
                            var n = i.length;
                            if (n) {
                                var s = i[n - 1].end;
                                t[a].start - s < r ? t[a].end > s && (i[n - 1].end = t[a].end) : i.push(t[a])
                            } else i.push(t[a])
                        } else i = t;
                    for (var o, l = 0, u = e, d = e, h = 0; h < i.length; h++) {
                        var c = i[h].start,
                            f = i[h].end;
                        if (e + r >= c && e < f) u = c, l = (d = f) - e;
                        else if (e + r < c) {
                            o = c;
                            break
                        }
                    }
                    return {
                        len: l,
                        start: u || 0,
                        end: d || 0,
                        nextStart: o
                    }
                }, t.getBuffered = function(t) {
                    try {
                        return t.buffered
                    } catch (t) {
                        return l.b.log("failed to get media.buffered", t), U
                    }
                }, t
            }();

        function G(t, e, r) {
            switch (e) {
                case "audio":
                    t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r);
                    break;
                case "text":
                    t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r)
            }
        }

        function K(t) {
            var e = {};
            t.forEach((function(t) {
                var r = t.groupId || "";
                t.id = e[r] = e[r] || 0, e[r]++
            }))
        }

        function j(t, e) {
            var r = e.startPTS;
            if (Object(s.a)(r)) {
                var i, a = 0;
                e.sn > t.sn ? (a = r - t.start, i = t) : (a = t.start - r, i = e), i.duration !== a && (i.duration = a)
            } else if (e.sn > t.sn) {
                t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration
            } else e.start = Math.max(t.start - e.duration, 0)
        }

        function H(t, e, r, i, a, n) {
            i - r <= 0 && (l.b.warn("Fragment should have a positive duration", e), i = r + e.duration, n = a + e.duration);
            var o = r,
                u = i,
                d = e.startPTS,
                h = e.endPTS;
            if (Object(s.a)(d)) {
                var c = Math.abs(d - r);
                Object(s.a)(e.deltaPTS) ? e.deltaPTS = Math.max(c, e.deltaPTS) : e.deltaPTS = c, o = Math.max(r, d), r = Math.min(r, d), a = Math.min(a, e.startDTS), u = Math.min(i, h), i = Math.max(i, h), n = Math.max(n, e.endDTS)
            }
            e.duration = i - r;
            var f = r - e.start;
            e.appendedPTS = i, e.start = e.startPTS = r, e.maxStartPTS = o, e.startDTS = a, e.endPTS = i, e.minEndPTS = u, e.endDTS = n;
            var g, v = e.sn;
            if (!t || v < t.startSN || v > t.endSN) return 0;
            var p = v - t.startSN,
                m = t.fragments;
            for (m[p] = e, g = p; g > 0; g--) j(m[g], m[g - 1]);
            for (g = p; g < m.length - 1; g++) j(m[g], m[g + 1]);
            return t.fragmentHint && j(m[m.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, f
        }

        function V(t, e) {
            e.initSegment && t.initSegment && (e.initSegment = t.initSegment), t.fragmentHint && delete t.fragmentHint.endPTS;
            var r, i = 0;
            if (function(t, e, r) {
                    for (var i = e.skippedSegments, a = Math.max(t.startSN, e.startSN) - e.startSN, n = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = a; u <= n; u++) {
                        var d = l[s + u],
                            h = o[u];
                        i && !h && u < i && (h = e.fragments[u] = d), d && h && r(d, h)
                    }
                }(t, e, (function(t, a) {
                    i = t.cc - a.cc, Object(s.a)(t.startPTS) && Object(s.a)(t.endPTS) && (a.start = a.startPTS = t.startPTS, a.startDTS = t.startDTS, a.appendedPTS = t.appendedPTS, a.maxStartPTS = t.maxStartPTS, a.endPTS = t.endPTS, a.endDTS = t.endDTS, a.minEndPTS = t.minEndPTS, a.duration = t.endPTS - t.startPTS, a.duration && (r = a), e.PTSKnown = e.alignedSliding = !0), a.elementaryStreams = t.elementaryStreams, a.loader = t.loader, a.stats = t.stats, a.urlId = t.urlId
                })), e.skippedSegments && (e.deltaUpdateFailed = e.fragments.some((function(t) {
                    return !t
                })), e.deltaUpdateFailed)) {
                l.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                for (var a = e.skippedSegments; a--;) e.fragments.shift();
                e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
            }
            var n = e.fragments;
            if (i) {
                l.b.log("discontinuity sliding from playlist, take drift into account");
                for (var o = 0; o < n.length; o++) n[o].cc += i
            }
            e.skippedSegments && (e.initSegment || (e.initSegment = t.initSegment), e.startCC = e.fragments[0].cc),
                function(t, e, r) {
                    if (t && e)
                        for (var i = 0, a = 0, n = t.length; a <= n; a++) {
                            var s = t[a],
                                o = e[a + i];
                            s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : i--
                        }
                }(t.partList, e.partList, (function(t, e) {
                    e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
                })), r ? H(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : Y(t, e), n.length && (e.totalduration = e.edge - n[0].start)
        }

        function Y(t, e) {
            var r = e.startSN + e.skippedSegments - t.startSN,
                i = t.fragments,
                a = e.fragments;
            if (!(r < 0 || r >= i.length)) {
                var n = i[r].start;
                if (n) {
                    for (var s = e.skippedSegments; s < a.length; s++) a[s].start += n;
                    e.fragmentHint && (e.fragmentHint.start += n)
                }
            }
        }
        var W = function(t, e, r, i, a, n) {
            void 0 === i && (i = 0), void 0 === a && (a = -1), void 0 === n && (n = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                start: 0,
                executeStart: 0,
                executeEnd: 0,
                end: 0
            }, this.buffering = {
                audio: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                video: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                },
                audiovideo: {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                }
            }, this.level = t, this.sn = e, this.id = r, this.size = i, this.part = a, this.partial = n
        };

        function q(t, e) {
            if (t) {
                var r = t.start + e;
                t.start = t.startPTS = r, t.endPTS = r + t.duration
            }
        }

        function X(t, e) {
            for (var r = e.fragments, i = 0, a = r.length; i < a; i++) q(r[i], t);
            e.fragmentHint && q(e.fragmentHint, t), e.alignedSliding = !0
        }

        function z(t, e, r) {
            e && (! function(t, e, r) {
                if (function(t, e, r) {
                        return !(!e.details || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                    }(t, r, e)) {
                    var i = function(t, e) {
                        var r = t.fragments,
                            i = e.fragments;
                        if (i.length && r.length) {
                            var a = function(t, e) {
                                for (var r = null, i = 0, a = t.length; i < a; i++) {
                                    var n = t[i];
                                    if (n && n.cc === e) {
                                        r = n;
                                        break
                                    }
                                }
                                return r
                            }(r, i[0].cc);
                            if (a && (!a || a.startPTS)) return a;
                            l.b.log("No frag in previous level to align on")
                        } else l.b.log("No fragments to align")
                    }(r.details, e);
                    null != i && i.start && (l.b.log("Adjusting PTS using last level due to CC increase within current level " + e.url), X(i.start, e))
                }
            }(t, r, e), !r.alignedSliding && e.details && Q(r, e.details), r.alignedSliding || !e.details || r.skippedSegments || Y(e.details, r))
        }

        function Q(t, e) {
            if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                var r = e.fragments[0].programDateTime,
                    i = t.fragments[0].programDateTime,
                    a = (i - r) / 1e3 + e.fragments[0].start;
                a && Object(s.a)(a) && (l.b.log("Adjusting PTS using programDateTime delta " + (i - r) + "ms, sliding:" + a.toFixed(3) + " " + t.url + " "), X(a, t))
            }
        }
        var $ = {
            search: function(t, e) {
                for (var r = 0, i = t.length - 1, a = null, n = null; r <= i;) {
                    var s = e(n = t[a = (r + i) / 2 | 0]);
                    if (s > 0) r = a + 1;
                    else {
                        if (!(s < 0)) return n;
                        i = a - 1
                    }
                }
                return null
            }
        };

        function J(t, e, r) {
            if (null === e || !Array.isArray(t) || !t.length || !Object(s.a)(e)) return null;
            if (e < (t[0].programDateTime || 0)) return null;
            if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
            r = r || 0;
            for (var i = 0; i < t.length; ++i) {
                var a = t[i];
                if (et(e, r, a)) return a
            }
            return null
        }

        function Z(t, e, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = 0);
            var a = null;
            if (t ? a = e[t.sn - e[0].sn + 1] : 0 === r && 0 === e[0].start && (a = e[0]), a && 0 === tt(r, i, a)) return a;
            var n = $.search(e, tt.bind(null, r, i));
            return n || a
        }

        function tt(t, e, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }

        function et(t, e, r) {
            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > t
        }

        function rt(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (rt = function(t) {
                if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                var r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return it(t, arguments, st(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), nt(i, t)
            })(t)
        }

        function it(t, e, r) {
            return (it = at() ? Reflect.construct : function(t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var a = new(Function.bind.apply(t, i));
                return r && nt(a, r.prototype), a
            }).apply(null, arguments)
        }

        function at() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }

        function nt(t, e) {
            return (nt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function st(t) {
            return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var ot = Math.pow(2, 17),
            lt = function() {
                function t(t) {
                    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
                }
                var e = t.prototype;
                return e.abort = function() {
                    this.loader && this.loader.abort()
                }, e.load = function(t, e) {
                    var r = this,
                        i = t.url;
                    if (!i) return Promise.reject(new dt({
                        type: n.b.NETWORK_ERROR,
                        details: n.a.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: t,
                        networkDetails: null
                    }, "Fragment does not have a " + (i ? "part list" : "url")));
                    this.abort();
                    var a = this.config,
                        s = a.fLoader,
                        o = a.loader;
                    return new Promise((function(i, l) {
                        var u = r.loader = t.loader = s ? new s(a) : new o(a),
                            d = ut(t),
                            h = {
                                timeout: a.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                                highWaterMark: ot
                            };
                        t.stats = u.stats, u.load(d, h, {
                            onSuccess: function(e, a, n, s) {
                                r.resetLoader(t, u), i({
                                    frag: t,
                                    part: null,
                                    payload: e.data,
                                    networkDetails: s
                                })
                            },
                            onError: function(e, i, a) {
                                r.resetLoader(t, u), l(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    response: e,
                                    networkDetails: a
                                }))
                            },
                            onAbort: function(e, i, a) {
                                r.resetLoader(t, u), l(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: t,
                                    networkDetails: a
                                }))
                            },
                            onTimeout: function(e, i, a) {
                                r.resetLoader(t, u), l(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t,
                                    networkDetails: a
                                }))
                            },
                            onProgress: function(r, i, a, n) {
                                e && e({
                                    frag: t,
                                    part: null,
                                    payload: a,
                                    networkDetails: n
                                })
                            }
                        })
                    }))
                }, e.loadPart = function(t, e, r) {
                    var i = this;
                    this.abort();
                    var a = this.config,
                        s = a.fLoader,
                        o = a.loader;
                    return new Promise((function(l, u) {
                        var d = i.loader = t.loader = s ? new s(a) : new o(a),
                            h = ut(t, e),
                            c = {
                                timeout: a.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                                highWaterMark: ot
                            };
                        e.stats = d.stats, d.load(h, c, {
                            onSuccess: function(a, n, s, o) {
                                i.resetLoader(t, d), i.updateStatsFromPart(t, e);
                                var u = {
                                    frag: t,
                                    part: e,
                                    payload: a.data,
                                    networkDetails: o
                                };
                                r(u), l(u)
                            },
                            onError: function(r, a, s) {
                                i.resetLoader(t, d), u(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    response: r,
                                    networkDetails: s
                                }))
                            },
                            onAbort: function(r, a, s) {
                                t.stats.aborted = e.stats.aborted, i.resetLoader(t, d), u(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    networkDetails: s
                                }))
                            },
                            onTimeout: function(r, a, s) {
                                i.resetLoader(t, d), u(new dt({
                                    type: n.b.NETWORK_ERROR,
                                    details: n.a.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    networkDetails: s
                                }))
                            }
                        })
                    }))
                }, e.updateStatsFromPart = function(t, e) {
                    var r = t.stats,
                        i = e.stats,
                        a = i.total;
                    if (r.loaded += i.loaded, a) {
                        var n = Math.round(t.duration / e.duration),
                            s = Math.min(Math.round(r.loaded / a), n),
                            o = (n - s) * Math.round(r.loaded / s);
                        r.total = r.loaded + o
                    } else r.total = Math.max(r.loaded, r.total);
                    var l = r.loading,
                        u = i.loading;
                    l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
                }, e.resetLoader = function(t, e) {
                    t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null)
                }, t
            }();

        function ut(t, e) {
            void 0 === e && (e = null);
            var r = e || t,
                i = {
                    frag: t,
                    part: e,
                    responseType: "arraybuffer",
                    url: r.url,
                    rangeStart: 0,
                    rangeEnd: 0
                },
                a = r.byteRangeStartOffset,
                n = r.byteRangeEndOffset;
            return Object(s.a)(a) && Object(s.a)(n) && (i.rangeStart = a, i.rangeEnd = n), i
        }
        var dt = function(t) {
                var e, r;

                function i(e) {
                    for (var r, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n];
                    return (r = t.call.apply(t, [this].concat(a)) || this).data = void 0, r.data = e, r
                }
                return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, nt(e, r), i
            }(rt(Error)),
            ht = r(14),
            ct = {
                toString: function(t) {
                    for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                    return e
                }
            };

        function ft(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function gt(t, e) {
            return (gt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var vt = "STOPPED",
            pt = "IDLE",
            mt = "KEY_LOADING",
            yt = "FRAG_LOADING",
            Tt = "FRAG_LOADING_WAITING_RETRY",
            Et = "WAITING_TRACK",
            bt = "PARSING",
            St = "PARSED",
            Lt = "BACKTRACKING",
            At = "ENDED",
            Rt = "ERROR",
            Dt = "WAITING_INIT_PTS",
            _t = "WAITING_LEVEL",
            kt = function(t) {
                var e, r;

                function i(e, r, i) {
                    var a;
                    return (a = t.call(this) || this).hls = void 0, a.fragPrevious = null, a.fragCurrent = null, a.fragmentTracker = void 0, a.transmuxer = null, a._state = vt, a.media = void 0, a.mediaBuffer = void 0, a.config = void 0, a.lastCurrentTime = 0, a.nextLoadPosition = 0, a.startPosition = 0, a.loadedmetadata = !1, a.fragLoadError = 0, a.levels = null, a.fragmentLoader = void 0, a.levelLastLoaded = null, a.startFragRequested = !1, a.decrypter = void 0, a.initPTS = [], a.onvseeking = null, a.onvended = null, a.logPrefix = "", a.log = void 0, a.warn = void 0, a.logPrefix = i, a.log = l.b.log.bind(l.b, i + ":"), a.warn = l.b.warn.bind(l.b, i + ":"), a.hls = e, a.fragmentTracker = r, a.config = e.config, a.decrypter = new ht.a(e, e.config), e.on(o.a.KEY_LOADED, a.onKeyLoaded, function(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(a)), a
                }
                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, gt(e, r);
                var a, d, h, c = i.prototype;
                return c.doTick = function() {
                    this.onTickEnd()
                }, c.onTickEnd = function() {}, c.startLoad = function(t) {}, c.stopLoad = function() {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t)), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = vt
                }, c._streamEnded = function(t, e) {
                    var r = this.fragCurrent,
                        i = this.fragmentTracker;
                    if (!e.live && r && r.sn === e.endSN && !t.nextStart) {
                        var a = i.getState(r);
                        return a === C.PARTIAL || a === C.OK
                    }
                    return !1
                }, c.onMediaAttached = function(t, e) {
                    var r = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                    var i = this.config;
                    this.levels && i.autoStartLoad && this.state === vt && this.startLoad(i.startPosition)
                }, c.onMediaDetaching = function() {
                    var t = this.media;
                    null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                }, c.onMediaSeeking = function() {
                    var t = this.config,
                        e = this.fragCurrent,
                        r = this.media,
                        i = this.mediaBuffer,
                        a = this.state,
                        n = r ? r.currentTime : null,
                        o = B.bufferInfo(i || r, n, t.maxBufferHole);
                    if (this.log("media seeking to " + (Object(s.a)(n) ? n.toFixed(3) : n) + ", state: " + a), a === At) o.len || (this.fragPrevious = null, this.fragCurrent = null), this.state = pt;
                    else if (e && !o.len) {
                        var l = t.maxFragLookUpTolerance,
                            u = e.start - l,
                            d = e.start + e.duration + l;
                        (n < u || n > d) && (e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = pt)
                    }
                    r && (this.lastCurrentTime = n), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = n), this.tick()
                }, c.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0
                }, c.onKeyLoaded = function(t, e) {
                    if (this.state === mt && this.levels) {
                        this.state = pt;
                        var r = this.levels[e.frag.level].details;
                        r && this.loadFragment(e.frag, r, e.frag.start)
                    }
                }, c.onHandlerDestroying = function() {
                    this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                }, c.onHandlerDestroyed = function() {
                    this.state = vt, this.hls.off(o.a.KEY_LOADED, this.onKeyLoaded, this), t.prototype.onHandlerDestroyed.call(this)
                }, c.loadFragment = function(t, e, r) {
                    this._loadFragForPlayback(t, e, r)
                }, c._loadFragForPlayback = function(t, e, r) {
                    var i = this;
                    this._doFragLoad(t, e, r, (function(e) {
                        if (i.fragContextChanged(t)) return i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void i.fragmentTracker.removeFragment(t);
                        t.stats.chunkCount++, i._handleFragmentLoadProgress(e)
                    })).then((function(e) {
                        e && (i.fragLoadError = 0, i.fragContextChanged(t) ? i.state !== yt && i.state !== Lt || (i.fragmentTracker.removeFragment(t), i.state = pt) : "payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(o.a.FRAG_LOADED, e), i.state === Lt) ? i.fragmentTracker.backtrack(t, e) : i._handleFragmentLoadComplete(e))
                    }))
                }, c.flushMainBuffer = function(t, e, r) {
                    void 0 === r && (r = null);
                    var i = {
                        startOffset: t,
                        endOffset: e,
                        type: r
                    };
                    this.fragLoadError = 0, this.hls.trigger(o.a.BUFFER_FLUSHING, i)
                }, c._loadInitSegment = function(t) {
                    var e = this;
                    this._doFragLoad(t).then((function(r) {
                        if (!r || e.fragContextChanged(t) || !e.levels) throw new Error("init load aborted");
                        return r
                    })).then((function(r) {
                        var i = e.hls,
                            a = r.payload,
                            n = t.decryptdata;
                        if (a && a.byteLength > 0 && n && n.key && n.iv && "AES-128" === n.method) {
                            var s = self.performance.now();
                            return e.decrypter.webCryptoDecrypt(new Uint8Array(a), n.key.buffer, n.iv.buffer).then((function(e) {
                                var a = self.performance.now();
                                return i.trigger(o.a.FRAG_DECRYPTED, {
                                    frag: t,
                                    payload: e,
                                    stats: {
                                        tstart: s,
                                        tdecrypt: a
                                    }
                                }), r.payload = e, r
                            }))
                        }
                        return r
                    })).then((function(r) {
                        var i = e.fragCurrent,
                            a = e.hls,
                            n = e.levels;
                        if (!n) throw new Error("init load aborted, missing levels");
                        var s = n[t.level].details.initSegment,
                            l = t.stats;
                        e.state = pt, e.fragLoadError = 0, s.data = new Uint8Array(r.payload), l.parsing.start = l.buffering.start = self.performance.now(), l.parsing.end = l.buffering.end = self.performance.now(), r.frag === i && a.trigger(o.a.FRAG_BUFFERED, {
                            stats: l,
                            frag: i,
                            part: null,
                            id: t.type
                        }), e.tick()
                    })).catch((function(t) {
                        e.warn(t)
                    }))
                }, c.fragContextChanged = function(t) {
                    var e = this.fragCurrent;
                    return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                }, c.fragBufferedComplete = function(t, e) {
                    var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + ct.toString(B.getBuffered(r))), this.state = pt, this.tick()
                }, c._handleFragmentLoadComplete = function(t) {
                    var e = this.transmuxer;
                    if (e) {
                        var r = t.frag,
                            i = t.part,
                            a = t.partsLoaded,
                            n = !a || a && (0 === a.length || a.some((function(t) {
                                return !t
                            }))),
                            s = new W(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
                        e.flush(s)
                    }
                }, c._handleFragmentLoadProgress = function(t) {}, c._doFragLoad = function(t, e, r, i) {
                    var a = this;
                    if (void 0 === r && (r = null), !this.levels) throw new Error("frag load aborted, missing levels");
                    if (r = Math.max(t.start, r || 0), this.config.lowLatencyMode && e) {
                        var n = e.partList;
                        if (n && i) {
                            var s = this.getNextPart(n, t, r);
                            if (s > -1) {
                                var l = n[s];
                                return this.log("Loading part sn: " + t.sn + " p: " + l.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + s + "-" + (n.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.state = yt, this.hls.trigger(o.a.FRAG_LOADING, {
                                    frag: t,
                                    part: n[s],
                                    targetBufferTime: r
                                }), this.doFragPartsLoad(t, n, s, i).catch((function(t) {
                                    return a.handleFragError(t)
                                }))
                            }
                            if (!t.url || this.loadedEndOfParts(n, r)) return Promise.resolve(null)
                        }
                    }
                    return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.state = yt, this.hls.trigger(o.a.FRAG_LOADING, {
                        frag: t,
                        targetBufferTime: r
                    }), this.fragmentLoader.load(t, i).catch((function(t) {
                        return a.handleFragError(t)
                    }))
                }, c.doFragPartsLoad = function(t, e, r, i) {
                    var a = this;
                    return new Promise((function(n, s) {
                        var l = [];
                        ! function r(u) {
                            var d = e[u];
                            a.fragmentLoader.loadPart(t, d, i).then((function(i) {
                                l[d.index] = i;
                                var s = i.part;
                                a.hls.trigger(o.a.FRAG_LOADED, i);
                                var h = e[u + 1];
                                if (!h || h.fragment !== t) return n({
                                    frag: t,
                                    part: s,
                                    partsLoaded: l
                                });
                                r(u + 1)
                            })).catch(s)
                        }(r)
                    }))
                }, c.handleFragError = function(t) {
                    var e = t.data;
                    return e && e.details === n.a.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(o.a.ERROR, e), null
                }, c._handleTransmuxerFlush = function(t) {
                    if (this.state === bt) {
                        var e = this.getCurrentContext(t);
                        if (e) {
                            var r = e.frag,
                                i = e.part,
                                a = e.level,
                                n = self.performance.now();
                            r.stats.parsing.end = n, i && (i.stats.parsing.end = n), this.updateLevelTiming(r, a, t.partial), this.state = St, this.hls.trigger(o.a.FRAG_PARSED, {
                                frag: r,
                                part: i
                            })
                        }
                    } else this.warn("State is expected to be PARSING on transmuxer flush, but is " + this.state + ".")
                }, c.getCurrentContext = function(t) {
                    var e = this.levels,
                        r = t.level,
                        i = t.sn,
                        a = t.part;
                    if (!e || !e[r]) return this.warn("Levels object was unset while buffering fragment " + i + " of level " + r + ". The current chunk will not be buffered."), null;
                    var n = e[r],
                        s = a > -1 ? function(t, e, r) {
                            if (!t || !t.details) return null;
                            var i = t.details.partList;
                            if (i)
                                for (var a = i.length; a--;) {
                                    var n = i[a];
                                    if (n.index === r && n.fragment.sn === e) return n
                                }
                            return null
                        }(n, i, a) : null,
                        o = s ? s.fragment : function(t, e) {
                            if (!t || !t.details) return null;
                            var r = t.details,
                                i = r.fragments[e - r.startSN];
                            return i || ((i = r.fragmentHint) && i.sn === e ? i : null)
                        }(n, i);
                    return o ? {
                        frag: o,
                        part: s,
                        level: n
                    } : null
                }, c.bufferFragmentData = function(t, e, r, i) {
                    if (t && this.state === bt) {
                        var a = t.data1,
                            n = t.data2,
                            s = a;
                        if (a && n && (s = Object(u.a)(a, n)), s && s.length) {
                            var l = {
                                type: t.type,
                                data: s,
                                frag: e,
                                part: r,
                                chunkMeta: i
                            };
                            this.hls.trigger(o.a.BUFFER_APPENDING, l), t.dropped && t.independent && !r && this.flushMainBuffer(0, e.start)
                        }
                    }
                }, c.reduceMaxBufferLength = function(t) {
                    var e = this.config,
                        r = t || e.maxBufferLength;
                    return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, c.getNextFragment = function(t, e) {
                    var r = this.config,
                        i = this.startFragRequested,
                        a = e.fragments,
                        n = a.length;
                    if (!n) return null;
                    var s, o = a[0].start;
                    if (e.initSegment && !e.initSegment.data) s = e.initSegment;
                    else if (e.live) {
                        var l = r.initialLiveManifestSize;
                        if (n < l) return this.warn("Not enough fragments to start playback (have: " + n + ", need: " + l + ")"), null;
                        e.PTSKnown || i || (s = this.getInitialLiveFragment(e, a))
                    } else t <= o && (s = a[0]);
                    if (!s) {
                        var u = r.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                        s = this.getFragmentAtPosition(t, u, e)
                    }
                    return s
                }, c.getNextPart = function(t, e, r) {
                    for (var i = -1, a = !1, n = 0, s = t.length; n < s; n++) {
                        var o = t[n];
                        if (i > -1 && r < o.start) break;
                        var l = o.loaded;
                        l || !a && !o.independent || o.fragment !== e || (i = n), a = l
                    }
                    return i
                }, c.loadedEndOfParts = function(t, e) {
                    var r = t[t.length - 1];
                    return r && e > r.start && r.loaded
                }, c.getInitialLiveFragment = function(t, e) {
                    var r = this.config,
                        i = this.fragPrevious,
                        a = null;
                    if (i)
                        if (t.hasProgramDateTime) this.log("Live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), a = J(e, i.endProgramDateTime, r.maxFragLookUpTolerance);
                        else {
                            var n = i.sn + 1;
                            if (n >= t.startSN && n <= t.endSN) {
                                var s = e[n - t.startSN];
                                i.cc === s.cc && (a = s, this.log("Live playlist, switching playlist, load frag with next SN: " + a.sn))
                            }
                            a || (a = function(t, e) {
                                return $.search(t, (function(t) {
                                    return t.cc < e ? 1 : t.cc > e ? -1 : 0
                                }))
                            }(e, i.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + a.sn)
                        } return a
                }, c.getFragmentAtPosition = function(t, e, r) {
                    var i, a = this.config,
                        n = this.fragPrevious,
                        s = r.fragments,
                        o = r.endSN,
                        l = r.fragmentHint,
                        u = a.maxFragLookUpTolerance,
                        d = !!(a.lowLatencyMode && r.partList && l);
                    (d && l && (s = s.concat(l), o = l.sn), t < e) ? i = Z(n, s, t, t > e - u ? 0 : u): i = s[s.length - 1];
                    if (i) {
                        var h = i.sn - r.startSN,
                            c = n && i.level === n.level,
                            f = s[h + 1];
                        if (this.fragmentTracker.getState(i) === C.BACKTRACKED) {
                            i = null;
                            for (var g = h; s[g] && this.fragmentTracker.getState(s[g]) === C.BACKTRACKED;) i = n ? s[g--] : s[--g];
                            i || (i = f)
                        } else n && i.sn === n.sn && !d && c && (i.sn < o && this.fragmentTracker.getState(f) !== C.OK ? (this.log("SN " + i.sn + " just loaded, load next one: " + f.sn), i = f) : i = null)
                    }
                    return i
                }, c.synchronizeToLiveEdge = function(t) {
                    var e = this.config,
                        r = this.media,
                        i = this.hls.liveSyncPosition,
                        a = r.currentTime;
                    if (null !== i && null != r && r.readyState && r.duration > i && i > a) {
                        var n = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration,
                            s = t.fragments[0].start,
                            o = t.edge;
                        if (a < Math.max(s - e.maxFragLookUpTolerance, o - n)) return this.warn("Playback: " + a.toFixed(3) + " is located too far from the end of live sliding playlist: " + o + ", reset currentTime to : " + i.toFixed(3)), this.loadedmetadata || (this.nextLoadPosition = i), r.currentTime = i, i
                    }
                    return null
                }, c.alignPlaylists = function(t, e) {
                    var r = this.levels,
                        i = this.levelLastLoaded,
                        a = null !== i ? r[i] : null,
                        n = 0;
                    return e && t.fragments.length > 0 ? (n = t.fragments[0].start, t.alignedSliding && Object(s.a)(n) ? this.log("Live playlist sliding:" + n.toFixed(3)) : n || (this.warn("[" + this.constructor.name + "] Live playlist - outdated PTS, unknown sliding"), z(this.fragPrevious, a, t))) : (this.log("Live playlist - first load, unknown sliding"), z(this.fragPrevious, a, t)), n
                }, c.waitForCdnTuneIn = function(t) {
                    return t.live && t.canBlockReload && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                }, c.setStartPosition = function(t, e) {
                    if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                        var r = t.startTimeOffset;
                        Object(s.a)(r) ? (r < 0 && (this.log("Negative start time offset " + r + ", count from end of last fragment"), r = e + t.totalduration + r), this.log("Start time offset found in playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? (this.startPosition = this.hls.liveSyncPosition || e, this.log("Configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
                    }
                    this.nextLoadPosition = this.startPosition
                }, c.getLoadPosition = function() {
                    var t = this.media,
                        e = 0;
                    return this.loadedmetadata ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                }, c.handleFragLoadAborted = function(t, e) {
                    this.transmuxer && "initSegment" !== t.sn && (this.log("Fragment " + t.sn + " of level " + t.level + " was aborted, flushing transmuxer"), this.transmuxer.flush(new W(t.level, t.sn, t.stats.chunkCount + 1, 0, e ? e.index : -1, !0)))
                }, c.updateLevelTiming = function(t, e, r) {
                    var i = this,
                        a = e.details;
                    Object.keys(t.elementaryStreams).forEach((function(n) {
                        var s = t.elementaryStreams[n];
                        if (s) {
                            var l = s.endPTS - s.startPTS;
                            l <= 0 && (i.warn("Could not parse fragment " + t.sn + " " + n + " duration reliably (" + l + ") resetting transmuxer to fallback to playlist timing"), i.transmuxer && (i.transmuxer.destroy(), i.transmuxer = null));
                            var u = r ? 0 : H(a, t, s.startPTS, s.endPTS, s.startDTS, s.endDTS);
                            i.hls.trigger(o.a.LEVEL_PTS_UPDATED, {
                                details: a,
                                level: e,
                                drift: u,
                                type: n,
                                frag: t,
                                start: s.startPTS,
                                end: s.endPTS
                            })
                        }
                    }))
                }, a = i, (d = [{
                    key: "state",
                    get: function() {
                        return this._state
                    },
                    set: function(t) {
                        var e = this._state;
                        e !== t && (this._state = t, this.log(e + "->" + t))
                    }
                }]) && ft(a.prototype, d), h && ft(a, h), i
            }(N);

        function It() {
            return self.MediaSource || self.WebKitMediaSource
        }

        function wt() {
            return self.SourceBuffer || self.WebKitSourceBuffer
        }
        var Ct = r(17),
            Ot = r(9),
            xt = r(13),
            Pt = It() || {
                isTypeSupported: function() {
                    return !1
                }
            },
            Mt = function() {
                function t(t, e, r, i) {
                    var a = this;
                    this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t, this.id = e, this.onTransmuxComplete = r, this.onFlush = i;
                    var s = t.config,
                        u = function(e, r) {
                            (r = r || {}).frag = a.frag, r.id = a.id, t.trigger(e, r)
                        };
                    this.observer = new xt.EventEmitter, this.observer.on(o.a.FRAG_DECRYPTED, u), this.observer.on(o.a.ERROR, u);
                    var d = {
                            mp4: Pt.isTypeSupported("video/mp4"),
                            mpeg: Pt.isTypeSupported("audio/mpeg"),
                            mp3: Pt.isTypeSupported('audio/mp4; codecs="mp3"')
                        },
                        h = navigator.vendor;
                    if (s.enableWorker && "undefined" != typeof Worker) {
                        var c;
                        l.b.log("demuxing in webworker");
                        try {
                            c = this.worker = Ct(18), this.onwmsg = this.onWorkerMessage.bind(this), c.addEventListener("message", this.onwmsg), c.onerror = function(e) {
                                t.trigger(o.a.ERROR, {
                                    type: n.b.OTHER_ERROR,
                                    details: n.a.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {
                                        message: e.message + " (" + e.filename + ":" + e.lineno + ")"
                                    }
                                })
                            }, c.postMessage({
                                cmd: "init",
                                typeSupported: d,
                                vendor: h,
                                id: e,
                                config: JSON.stringify(s)
                            })
                        } catch (t) {
                            l.b.warn("Error in worker:", t), l.b.error("Error while initializing DemuxerWorker, fallback to inline"), c && self.URL.revokeObjectURL(c.objectURL), this.transmuxer = new Ot.c(this.observer, d, s, h), this.worker = null
                        }
                    } else this.transmuxer = new Ot.c(this.observer, d, s, h)
                }
                var e = t.prototype;
                return e.destroy = function() {
                    var t = this.worker;
                    if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null;
                    else {
                        var e = this.transmuxer;
                        e && (e.destroy(), this.transmuxer = null)
                    }
                    var r = this.observer;
                    r && r.removeAllListeners(), this.observer = null
                }, e.push = function(t, e, r, i, a, n, s, o, u, d) {
                    var h = this;
                    u.transmuxing.start = self.performance.now();
                    var c = this.transmuxer,
                        f = this.worker,
                        g = n ? n.start : a.start,
                        v = a.decryptdata,
                        p = this.frag,
                        m = !(p && a.cc === p.cc),
                        y = !(p && u.level === p.level),
                        T = p ? u.sn - p.sn : -1,
                        E = this.part ? u.part - this.part.index : 1,
                        b = !y && (1 === T || 0 === T && 1 === E),
                        S = self.performance.now();
                    (y || T || 0 === a.stats.parsing.start) && (a.stats.parsing.start = S), !n || !E && b || (n.stats.parsing.start = S);
                    var L = new Ot.b(m, b, o, y, g);
                    if (!b || m) {
                        l.b.log("[transmuxer-interface, " + a.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + m + "\n        trackSwitch: " + y + "\n        contiguous: " + b + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + g);
                        var A = new Ot.a(r, i, e, s, d);
                        this.configureTransmuxer(A)
                    }
                    if (this.frag = a, this.part = n, f) f.postMessage({
                        cmd: "demux",
                        data: t,
                        decryptdata: v,
                        chunkMeta: u,
                        state: L
                    }, t instanceof ArrayBuffer ? [t] : []);
                    else if (c) {
                        var R = c.push(t, v, u, L);
                        Object(Ot.d)(R) ? R.then((function(t) {
                            h.handleTransmuxComplete(t)
                        })) : this.handleTransmuxComplete(R)
                    }
                }, e.flush = function(t) {
                    var e = this;
                    t.transmuxing.start = self.performance.now();
                    var r = this.transmuxer,
                        i = this.worker;
                    if (i) i.postMessage({
                        cmd: "flush",
                        chunkMeta: t
                    });
                    else if (r) {
                        var a = r.flush(t);
                        Object(Ot.d)(a) ? a.then((function(r) {
                            e.handleFlushResult(r, t)
                        })) : this.handleFlushResult(a, t)
                    }
                }, e.handleFlushResult = function(t, e) {
                    var r = this;
                    t.forEach((function(t) {
                        r.handleTransmuxComplete(t)
                    })), this.onFlush(e)
                }, e.onWorkerMessage = function(t) {
                    var e = t.data,
                        r = this.hls;
                    switch (e.event) {
                        case "init":
                            self.URL.revokeObjectURL(this.worker.objectURL);
                            break;
                        case "transmuxComplete":
                            this.handleTransmuxComplete(e.data);
                            break;
                        case "flush":
                            this.onFlush(e.data);
                            break;
                        default:
                            e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                    }
                }, e.configureTransmuxer = function(t) {
                    var e = this.worker,
                        r = this.transmuxer;
                    e ? e.postMessage({
                        cmd: "configure",
                        config: t
                    }) : r && r.configure(t)
                }, e.handleTransmuxComplete = function(t) {
                    t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
                }, t
            }(),
            Ft = function() {
                function t(t, e, r, i) {
                    this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = r, this.hls = i
                }
                var e = t.prototype;
                return e.poll = function(t) {
                    var e = this.config,
                        r = this.media,
                        i = this.stalled,
                        a = r.currentTime,
                        n = r.seeking,
                        s = this.seeking && !n,
                        o = !this.seeking && n;
                    if (this.seeking = n, a === t) {
                        if ((o || s) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && B.getBuffered(r).length) {
                            var u = B.bufferInfo(r, a, 0),
                                d = u.len > 0,
                                h = u.nextStart || 0;
                            if (d || h) {
                                if (n) {
                                    var c = u.len > 2,
                                        f = !h || h - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                    if (c || f) return;
                                    this.moved = !1
                                }
                                if (!this.moved && null !== this.stalled) {
                                    var g, v = Math.max(h, u.start || 0) - a,
                                        p = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                        m = (null == p || null === (g = p.details) || void 0 === g ? void 0 : g.live) ? 2 * p.details.targetduration : 2;
                                    if (v > 0 && v <= m) return void this._trySkipBufferHole(null)
                                }
                                var y = self.performance.now();
                                if (null !== i) {
                                    var T = y - i;
                                    !n && T >= 250 && this._reportStall(u.len);
                                    var E = B.bufferInfo(r, a, e.maxBufferHole);
                                    this._tryFixBufferStall(E, T)
                                } else this.stalled = y
                            }
                        }
                    } else if (this.moved = !0, null !== i) {
                        if (this.stallReported) {
                            var b = self.performance.now() - i;
                            l.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(b) + "ms"), this.stallReported = !1
                        }
                        this.stalled = null, this.nudgeRetry = 0
                    }
                }, e._tryFixBufferStall = function(t, e) {
                    var r = this.config,
                        i = this.fragmentTracker,
                        a = this.media.currentTime,
                        n = i.getPartialFragment(a);
                    if (n && this._trySkipBufferHole(n)) return;
                    t.len > r.maxBufferHole && e > 1e3 * r.highBufferWatchdogPeriod && (l.b.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                }, e._reportStall = function(t) {
                    var e = this.hls,
                        r = this.media;
                    this.stallReported || (this.stallReported = !0, l.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + t + ")"), e.trigger(o.a.ERROR, {
                        type: n.b.MEDIA_ERROR,
                        details: n.a.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: t
                    }))
                }, e._trySkipBufferHole = function(t) {
                    for (var e = this.config, r = this.hls, i = this.media, a = i.currentTime, s = 0, u = B.getBuffered(i), d = 0; d < u.length; d++) {
                        var h = u.start(d);
                        if (a + e.maxBufferHole >= s && a < h) {
                            var c = Math.max(h + .05, i.currentTime + .1);
                            return l.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c), this.moved = !0, this.stalled = null, i.currentTime = c, t && r.trigger(o.a.ERROR, {
                                type: n.b.MEDIA_ERROR,
                                details: n.a.BUFFER_SEEK_OVER_HOLE,
                                fatal: !1,
                                reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c,
                                frag: t
                            }), c
                        }
                        s = u.end(d)
                    }
                    return 0
                }, e._tryNudgeBuffer = function() {
                    var t = this.config,
                        e = this.hls,
                        r = this.media,
                        i = r.currentTime,
                        a = (this.nudgeRetry || 0) + 1;
                    if (this.nudgeRetry = a, a < t.nudgeMaxRetry) {
                        var s = i + a * t.nudgeOffset;
                        l.b.warn("Nudging 'currentTime' from " + i + " to " + s), r.currentTime = s, e.trigger(o.a.ERROR, {
                            type: n.b.MEDIA_ERROR,
                            details: n.a.BUFFER_NUDGE_ON_STALL,
                            fatal: !1
                        })
                    } else l.b.error("Playhead still not moving while enough data buffered @" + i + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(o.a.ERROR, {
                        type: n.b.MEDIA_ERROR,
                        details: n.a.BUFFER_STALLED_ERROR,
                        fatal: !0
                    })
                }, t
            }();

        function Nt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ut(t, e) {
            return (Ut = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Bt, Gt = function(t) {
            var e, r;

            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[stream-controller]") || this).audioCodecSwap = !1, i.bitrateTest = !1, i.gapController = null, i.level = -1, i._forceStartLoad = !1, i.retryDate = 0, i.altAudio = !1, i.audioOnly = !1, i.fragPlaying = null, i.onvplaying = null, i.onvseeked = null, i.fragLastKbps = 0, i.stalled = !1, i.audioCodecSwitch = !1, i.videoBuffer = null, i.fragmentLoader = new lt(e.config), i.state = vt, i._registerListeners(), i
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, Ut(e, r);
            var a, u, h, c = i.prototype;
            return c._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(o.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(o.a.ERROR, this.onError, this), t.on(o.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(o.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(o.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(o.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(o.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(o.a.FRAG_BUFFERED, this.onFragBuffered, this)
            }, c._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(o.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(o.a.ERROR, this.onError, this), t.off(o.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(o.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(o.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(o.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(o.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(o.a.FRAG_BUFFERED, this.onFragBuffered, this)
            }, c.onHandlerDestroying = function() {
                this._unregisterListeners()
            }, c.startLoad = function(t) {
                if (this.levels) {
                    var e = this.lastCurrentTime,
                        r = this.hls;
                    if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                        var i = r.startLevel; - 1 === i && (r.config.testBandwidth ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                    }
                    e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = pt, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                } else this._forceStartLoad = !0, this.state = vt
            }, c.stopLoad = function() {
                this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
            }, c.doTick = function() {
                switch (this.state) {
                    case pt:
                        this.doTickIdle();
                        break;
                    case _t:
                        var t, e = this.levels,
                            r = this.level,
                            i = null == e || null === (t = e[r]) || void 0 === t ? void 0 : t.details;
                        if (i && (!i.live || this.levelLastLoaded === this.level)) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = pt;
                            break
                        }
                        break;
                    case Tt:
                        var a, n = self.performance.now(),
                            s = this.retryDate;
                        (!s || n >= s || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = pt)
                }
                this.onTickEnd()
            }, c.onTickEnd = function() {
                t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
            }, c.doTickIdle = function() {
                var t, e, r = this.hls,
                    i = this.levelLastLoaded,
                    a = this.levels,
                    n = this.media,
                    l = r.config,
                    u = r.nextLoadLevel;
                if (null !== i && (n || !this.startFragRequested && l.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && a && a[u]) {
                    var d = a[u];
                    this.level = r.nextLoadLevel = u;
                    var h = d.details;
                    if (!h || this.state === _t || h.live && this.levelLastLoaded !== u) this.state = _t;
                    else {
                        var c = this.getLoadPosition();
                        if (Object(s.a)(c)) {
                            var f = h.initSegment,
                                g = 0;
                            if (!f || f.data) {
                                var v, p = d.maxBitrate;
                                v = p ? Math.max(8 * l.maxBufferSize / p, l.maxBufferLength) : l.maxBufferLength, v = Math.min(v, l.maxMaxBufferLength);
                                var m = c < l.maxBufferHole ? Math.max(2, l.maxBufferHole) : l.maxBufferHole,
                                    y = B.bufferInfo(this.mediaBuffer ? this.mediaBuffer : n, c, m);
                                if (y.len >= v) return;
                                if (this._streamEnded(y, h)) {
                                    var T = {};
                                    return this.altAudio && (T.type = "video"), this.hls.trigger(o.a.BUFFER_EOS, T), void(this.state = At)
                                }
                                if (g = y.end, (f = this.getNextFragment(g, h)) && this.fragmentTracker.getState(f) === C.OK && this.nextLoadPosition > g && (f = this.getNextFragment(this.nextLoadPosition, h)), !f) return
                            }
                            "identity" !== (null === (t = f.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = f.decryptdata) && void 0 !== e && e.key ? this.loadFragment(f, h, g) : (this.log("Loading key for " + f.sn + " of [" + h.startSN + "-" + h.endSN + "], level " + u), this.loadKey(f))
                        }
                    }
                }
            }, c.loadKey = function(t) {
                this.state = mt, this.hls.trigger(o.a.KEY_LOADING, {
                    frag: t
                })
            }, c.loadFragment = function(e, r, i) {
                var a, n = this.fragmentTracker.getState(e);
                if (this.fragCurrent = e, Object(s.a)(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), n === C.BACKTRACKED) {
                    var o = this.fragmentTracker.getBacktrackData(e);
                    if (o) return this._handleFragmentLoadProgress(o), void this._handleFragmentLoadComplete(o);
                    n = C.NOT_LOADED
                }
                n === C.NOT_LOADED || n === C.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0, this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : n === C.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null === (a = this.media) || void 0 === a ? void 0 : a.buffered.length) && this.fragmentTracker.removeAllFragments()
            }, c.getAppendedFrag = function(t) {
                return this.fragmentTracker.getAppendedFrag(t, E.MAIN)
            }, c.getBufferedFrag = function(t) {
                return this.fragmentTracker.getBufferedFrag(t, E.MAIN)
            }, c.followingBufferedFrag = function(t) {
                return t ? this.getBufferedFrag(t.end + .5) : null
            }, c.immediateLevelSwitch = function() {
                this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
            }, c.nextLevelSwitch = function() {
                var t = this.levels,
                    e = this.media;
                if (null != e && e.readyState) {
                    var r, i = this.getAppendedFrag(e.currentTime);
                    if (i && i.start > 1 && this.flushMainBuffer(0, i.start - 1), !e.paused && t) {
                        var a = t[this.hls.nextLoadLevel],
                            n = this.fragLastKbps;
                        r = n && this.fragCurrent ? this.fragCurrent.duration * a.maxBitrate / (1e3 * n) + 1 : 0
                    } else r = 0;
                    var s = this.getBufferedFrag(e.currentTime + r);
                    if (s) {
                        var o = this.followingBufferedFrag(s);
                        if (o) {
                            this.abortCurrentFrag();
                            var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                                u = Math.max(s.end, l + Math.min(this.config.maxFragLookUpTolerance, o.duration));
                            this.flushMainBuffer(u, Number.POSITIVE_INFINITY)
                        }
                    }
                }
            }, c.abortCurrentFrag = function() {
                var t = this.fragCurrent;
                null != t && t.loader && t.loader.abort(), this.fragCurrent = null
            }, c.flushMainBuffer = function(e, r) {
                t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
            }, c.onMediaAttached = function(e, r) {
                t.prototype.onMediaAttached.call(this, e, r);
                var i = r.media;
                this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new Ft(this.config, i, this.fragmentTracker, this.hls)
            }, c.onMediaDetaching = function() {
                var e = this.media;
                e && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null), t.prototype.onMediaDetaching.call(this)
            }, c.onMediaPlaying = function() {
                this.tick()
            }, c.onMediaSeeked = function() {
                var t = this.media,
                    e = t ? t.currentTime : null;
                Object(s.a)(e) && this.log("Media seeked to " + e.toFixed(3)), this.tick()
            }, c.onManifestLoading = function() {
                this.log("Trigger BUFFER_RESET"), this.hls.trigger(o.a.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null
            }, c.onManifestParsed = function(t, e) {
                var r, i, a, n = !1,
                    s = !1;
                e.levels.forEach((function(t) {
                    (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (n = !0), -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                })), this.audioCodecSwitch = n && s && !("function" == typeof(null == (a = wt()) || null === (i = a.prototype) || void 0 === i ? void 0 : i.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
            }, c.onLevelLoading = function(t, e) {
                var r = this.levels;
                if (r && this.state === pt) {
                    var i = r[e.level];
                    (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = _t)
                }
            }, c.onLevelLoaded = function(t, e) {
                var r, i = this.levels,
                    a = e.level,
                    n = e.details,
                    s = n.totalduration;
                if (i) {
                    this.log("Level " + a + " loaded [" + n.startSN + "," + n.endSN + "], cc [" + n.startCC + ", " + n.endCC + "] duration:" + s);
                    var l = this.fragCurrent;
                    !l || this.state !== yt && this.state !== Tt || l.level !== e.level && l.loader && (this.state = pt, l.loader.abort());
                    var u = i[a],
                        d = 0;
                    if (n.live || null !== (r = u.details) && void 0 !== r && r.live) {
                        if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed) return;
                        d = this.alignPlaylists(n, u.details)
                    }
                    if (u.details = n, this.levelLastLoaded = a, this.hls.trigger(o.a.LEVEL_UPDATED, {
                            details: n,
                            level: a
                        }), this.state === _t) {
                        if (this.waitForCdnTuneIn(n)) return;
                        this.state = pt
                    }
                    this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, d), this.tick()
                } else this.warn("Levels were reset while loading level " + a)
            }, c._handleFragmentLoadProgress = function(t) {
                var e, r = t.frag,
                    i = t.part,
                    a = t.payload,
                    n = this.levels;
                if (n) {
                    var s = n[r.level],
                        o = s.details;
                    if (o) {
                        var l = s.videoCodec,
                            u = o.PTSKnown || !o.live,
                            d = null === (e = o.initSegment) || void 0 === e ? void 0 : e.data,
                            h = this._getAudioCodec(s),
                            c = this.transmuxer = this.transmuxer || new Mt(this.hls, E.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                            f = i ? i.index : -1,
                            g = -1 !== f,
                            v = new W(r.level, r.sn, r.stats.chunkCount, a.byteLength, f, g),
                            p = this.initPTS[r.cc];
                        c.push(a, d, h, l, r, i, o.totalduration, u, v, p)
                    } else this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset")
                } else this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }, c.resetTransmuxer = function() {
                this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
            }, c.onAudioTrackSwitching = function(t, e) {
                var r = this.altAudio,
                    i = !!e.url,
                    a = e.id;
                if (!i) {
                    if (this.mediaBuffer !== this.media) {
                        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                        var n = this.fragCurrent;
                        null != n && n.loader && (this.log("Switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.resetTransmuxer(), this.state = pt
                    } else this.audioOnly && this.resetTransmuxer();
                    var s = this.hls;
                    r && s.trigger(o.a.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio"
                    }), s.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                        id: a
                    })
                }
            }, c.onAudioTrackSwitched = function(t, e) {
                var r = e.id,
                    i = !!this.hls.audioTracks[r].url;
                if (i) {
                    var a = this.videoBuffer;
                    a && this.mediaBuffer !== a && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = a)
                }
                this.altAudio = i, this.tick()
            }, c.onBufferCreated = function(t, e) {
                var r, i, a = e.tracks,
                    n = !1;
                for (var s in a) {
                    var o = a[s];
                    if ("main" === o.id) {
                        if (i = s, r = o, "video" === s) {
                            var l = a[s];
                            l && (this.videoBuffer = l.buffer)
                        }
                    } else n = !0
                }
                n && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
            }, c.onFragBuffered = function(t, e) {
                var r = e.frag,
                    i = e.part;
                if (!r || r.type === E.MAIN)
                    if (this.fragContextChanged(r)) this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state);
                    else {
                        var a = i ? i.stats : r.stats;
                        this.fragLastKbps = Math.round(8 * a.total / (a.buffering.end - a.loading.first)), this.fragPrevious = r, this.fragBufferedComplete(r, i)
                    }
            }, c.onError = function(t, e) {
                switch (e.details) {
                    case n.a.FRAG_LOAD_ERROR:
                    case n.a.FRAG_LOAD_TIMEOUT:
                    case n.a.KEY_LOAD_ERROR:
                    case n.a.KEY_LOAD_TIMEOUT:
                        if (!e.fatal) {
                            var r = e.frag;
                            if (!r || r.type !== E.MAIN) return;
                            this.fragCurrent;
                            var i = this.config;
                            if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                                var a = Math.min(Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                this.warn("Fragment " + (null == r ? void 0 : r.sn) + " of level " + (null == r ? void 0 : r.level) + " failed to load, retrying in " + a + "ms"), this.retryDate = self.performance.now() + a, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = Tt
                            } else e.levelRetry ? (this.fragLoadError = 0, this.state = pt) : (l.b.error("[stream-controller]: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = Rt)
                        }
                        break;
                    case n.a.LEVEL_LOAD_ERROR:
                    case n.a.LEVEL_LOAD_TIMEOUT:
                        this.state !== Rt && (e.fatal ? (this.warn("" + e.details), this.state = Rt) : e.levelRetry || this.state !== _t || (this.state = pt));
                        break;
                    case n.a.BUFFER_FULL_ERROR:
                        if ("main" === e.parent && (this.state === bt || this.state === St)) !!this.media && B.isBuffered(this.media, this.media.currentTime) && B.isBuffered(this.media, this.media.currentTime + .5) ? (this.reduceMaxBufferLength(), this.state = pt) : (this.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.immediateLevelSwitch())
                }
            }, c.checkBuffer = function() {
                var t = this.media,
                    e = this.gapController;
                if (t && e && t.readyState) {
                    var r = B.getBuffered(t);
                    !this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : e.poll(this.lastCurrentTime), this.lastCurrentTime = t.currentTime
                }
            }, c.onFragLoadEmergencyAborted = function() {
                this.state = pt, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
            }, c.onBufferFlushed = function(t, e) {
                var r = e.type,
                    i = (r === d.a.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                i && r !== d.a.AUDIO && this.fragmentTracker.detectEvictedFragments(r, B.getBuffered(i)), this.fragPrevious = null, this.state = pt
            }, c.onLevelsUpdated = function(t, e) {
                this.levels = e.levels
            }, c.swapAudioCodec = function() {
                this.audioCodecSwap = !this.audioCodecSwap
            }, c._seekToStartPos = function() {
                var t = this.media,
                    e = t.currentTime,
                    r = this.startPosition;
                if (r >= 0 && e < r) {
                    if (t.seeking) return void l.b.log("could not seek to " + r + ", already seeking at " + e);
                    var i = B.getBuffered(t),
                        a = (i.length ? i.start(0) : 0) - r;
                    a > 0 && a < this.config.maxBufferHole && (l.b.log("adjusting start position by " + a + " to match buffer start"), r += a, this.startPosition = r), this.log("seek to target start position " + r + " from current time " + e), t.currentTime = r
                }
            }, c._getAudioCodec = function(t) {
                var e = this.config.defaultAudioCodec || t.audioCodec;
                return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
            }, c._loadBitrateTestFrag = function(t) {
                var e = this;
                this._doFragLoad(t).then((function(r) {
                    var i = e.hls;
                    if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                        e.fragLoadError = 0, e.state = pt, e.startFragRequested = !1, e.bitrateTest = !1, t.bitrateTest = !1;
                        var a = t.stats;
                        a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), i.trigger(o.a.FRAG_BUFFERED, {
                            stats: a,
                            frag: t,
                            part: null,
                            id: "main"
                        }), e.tick()
                    }
                }))
            }, c._handleTransmuxComplete = function(t) {
                var e, r = "main",
                    i = this.hls,
                    a = t.remuxResult,
                    n = t.chunkMeta,
                    l = this.getCurrentContext(n);
                if (l) {
                    var u = l.frag,
                        h = l.part,
                        c = l.level,
                        f = a.video,
                        g = a.text,
                        v = a.id3,
                        p = a.initSegment,
                        m = this.altAudio ? void 0 : a.audio;
                    if (!this.fragContextChanged(u)) {
                        if (this.state = bt, p) {
                            p.tracks && (this._bufferInitSegment(c, p.tracks, u, n), i.trigger(o.a.FRAG_PARSING_INIT_SEGMENT, {
                                frag: u,
                                id: r,
                                tracks: p.tracks
                            }));
                            var y = p.initPTS,
                                T = p.timescale;
                            Object(s.a)(y) && (this.initPTS[u.cc] = y, i.trigger(o.a.INIT_PTS_FOUND, {
                                frag: u,
                                id: r,
                                initPTS: y,
                                timescale: T
                            }))
                        }
                        if (f && !1 !== a.independent) {
                            if (c.details) {
                                var E = f.startPTS,
                                    b = f.endPTS,
                                    S = f.startDTS,
                                    L = f.endDTS;
                                if (h) h.elementaryStreams[f.type] = {
                                    startPTS: E,
                                    endPTS: b,
                                    startDTS: S,
                                    endDTS: L
                                };
                                else if (f.dropped && f.independent) {
                                    var A = this.getLoadPosition() + this.config.maxBufferHole;
                                    if (A > u.start && A < E) return void this.backtrack(u);
                                    u.setElementaryStreamInfo(f.type, u.start, b, u.start, L, !0)
                                }
                                u.setElementaryStreamInfo(f.type, E, b, S, L), this.bufferFragmentData(f, u, h, n)
                            }
                        } else if (!1 === a.independent) return void this.backtrack(u);
                        if (m) {
                            var R = m.startPTS,
                                D = m.endPTS,
                                _ = m.startDTS,
                                k = m.endDTS;
                            h && (h.elementaryStreams[d.a.AUDIO] = {
                                startPTS: R,
                                endPTS: D,
                                startDTS: _,
                                endDTS: k
                            }), u.setElementaryStreamInfo(d.a.AUDIO, R, D, _, k), this.bufferFragmentData(m, u, h, n)
                        }
                        if (null != v && null !== (e = v.samples) && void 0 !== e && e.length) {
                            var I = {
                                frag: u,
                                id: r,
                                samples: v.samples
                            };
                            i.trigger(o.a.FRAG_PARSING_METADATA, I)
                        }
                        if (g) {
                            var w = {
                                frag: u,
                                id: r,
                                samples: g.samples
                            };
                            i.trigger(o.a.FRAG_PARSING_USERDATA, w)
                        }
                    }
                } else this.warn("The loading context changed while buffering fragment " + n.sn + " of level " + n.level + ". This chunk will not be buffered.")
            }, c._bufferInitSegment = function(t, e, r, i) {
                var a = this;
                if (this.state === bt) {
                    this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                    var n = e.audio,
                        s = e.video,
                        l = e.audiovideo;
                    if (n) {
                        var u = t.audioCodec,
                            d = navigator.userAgent.toLowerCase();
                        this.audioCodecSwitch && (u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== n.metadata.channelCount && -1 === d.indexOf("firefox") && (u = "mp4a.40.5")), -1 !== d.indexOf("android") && "audio/mpeg" !== n.container && (u = "mp4a.40.2", this.log("Android: force audio codec to " + u)), t.audioCodec && t.audioCodec !== u && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"'), n.levelCodec = u, n.id = "main", this.log("Init audio buffer, container:" + n.container + ", codecs[selected/level/parsed]=[" + (u || "") + "/" + (t.audioCodec || "") + "/" + n.codec + "]")
                    }
                    s && (s.levelCodec = t.videoCodec, s.id = "main", this.log("Init video buffer, container:" + s.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + s.codec + "]")), l && this.log("Init audiovideo buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + l.codec + "]"), this.hls.trigger(o.a.BUFFER_CODECS, e), Object.keys(e).forEach((function(t) {
                        var n = e[t].initSegment;
                        null != n && n.byteLength && a.hls.trigger(o.a.BUFFER_APPENDING, {
                            type: t,
                            data: n,
                            frag: r,
                            part: null,
                            chunkMeta: i
                        })
                    })), this.tick()
                }
            }, c.backtrack = function(t) {
                this.resetTransmuxer(), this.flushMainBuffer(0, t.start), this.fragmentTracker.backtrack(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Lt
            }, c.checkFragmentChanged = function() {
                var t = this.media,
                    e = null;
                if (t && t.readyState > 1 && !1 === t.seeking) {
                    var r = t.currentTime;
                    if (B.isBuffered(t, r) ? e = this.getAppendedFrag(r) : B.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                        var i = this.fragPlaying,
                            a = e.level;
                        i && e.sn === i.sn && i.level === a && e.urlId === i.urlId || (this.hls.trigger(o.a.FRAG_CHANGED, {
                            frag: e
                        }), i && i.level === a || this.hls.trigger(o.a.LEVEL_SWITCHED, {
                            level: a
                        }), this.fragPlaying = e)
                    }
                }
            }, a = i, (u = [{
                key: "nextLevel",
                get: function() {
                    var t = this.nextBufferedFrag;
                    return t ? t.level : -1
                }
            }, {
                key: "currentLevel",
                get: function() {
                    var t = this.media;
                    if (t) {
                        var e = this.getAppendedFrag(t.currentTime);
                        if (e) return e.level
                    }
                    return -1
                }
            }, {
                key: "nextBufferedFrag",
                get: function() {
                    var t = this.media;
                    if (t) {
                        var e = this.getAppendedFrag(t.currentTime);
                        return this.followingBufferedFrag(e)
                    }
                    return null
                }
            }, {
                key: "forceStartLoad",
                get: function() {
                    return this._forceStartLoad
                }
            }]) && Nt(a.prototype, u), h && Nt(a, h), i
        }(kt);

        function Kt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }! function(t) {
            t.No = "", t.Yes = "YES", t.v2 = "v2"
        }(Bt || (Bt = {}));
        var jt = function() {
                function t(t, e, r) {
                    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = r
                }
                return t.prototype.addDirectives = function(t) {
                    var e = new self.URL(t),
                        r = e.searchParams;
                    return r.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && r.set("_HLS_part", this.part.toString()), this.skip && r.set("_HLS_skip", this.skip), r.sort(), e.search = r.toString(), e.toString()
                }, t
            }(),
            Ht = function() {
                function t(t) {
                    this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this.attrs = t.attrs, this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter((function(t) {
                        return t
                    })).join(",").replace(/\.[^.,]+/g, "")
                }
                var e, r, i;
                return e = t, (r = [{
                    key: "maxBitrate",
                    get: function() {
                        return Math.max(this.realBitrate, this.bitrate)
                    }
                }, {
                    key: "uri",
                    get: function() {
                        return this.url[this._urlId] || ""
                    }
                }, {
                    key: "urlId",
                    get: function() {
                        return this._urlId
                    },
                    set: function(t) {
                        var e = t % this.url.length;
                        this._urlId !== e && (this.details = void 0, this._urlId = e)
                    }
                }]) && Kt(e.prototype, r), i && Kt(e, i), t
            }(),
            Vt = function() {
                function t(t, e) {
                    this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = l.b.log.bind(l.b, e + ":"), this.warn = l.b.warn.bind(l.b, e + ":"), this.hls = t
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.clearTimer()
                }, e.onError = function(t, e) {
                    e.fatal && e.type === n.b.NETWORK_ERROR && this.clearTimer()
                }, e.clearTimer = function() {
                    clearTimeout(this.timer), this.timer = -1
                }, e.startLoad = function() {
                    this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
                }, e.stopLoad = function() {
                    this.canLoad = !1, this.clearTimer()
                }, e.switchParams = function(t, e) {
                    var r = null == e ? void 0 : e.renditionReports;
                    if (r)
                        for (var i = 0; i < r.length; i++) {
                            var a = r[i],
                                n = "" + a.URI;
                            if (n === t.substr(-n.length)) {
                                var o = parseInt(a["LAST-MSN"]),
                                    l = parseInt(a["LAST-PART"]);
                                if (e && this.hls.config.lowLatencyMode) {
                                    var u = Math.min(e.age - e.partTarget, e.targetduration);
                                    void 0 !== l && u > e.partTarget && (l += 1)
                                }
                                if (Object(s.a)(o)) return new jt(o, Object(s.a)(l) ? l : void 0, Bt.No)
                            }
                        }
                }, e.loadPlaylist = function(t) {}, e.shouldLoadTrack = function(t) {
                    return this.canLoad && t && !!t.url && (!t.details || t.details.live)
                }, e.playlistLoaded = function(t, e, r) {
                    var i = this,
                        a = e.details,
                        n = e.stats,
                        s = n.loading.end ? Math.max(0, self.performance.now() - n.loading.end) : 0;
                    if (a.advancedDateTime = Date.now() - s, a.live || null != r && r.live) {
                        if (a.reloaded(r), r && this.log("live playlist " + t + " " + (a.advanced ? "REFRESHED " + a.lastPartSn + "-" + a.lastPartIndex : "MISSED")), r && a.fragments.length > 0 && (V(r, a), a.advanced || (a.advancedDateTime = r.advancedDateTime)), !this.canLoad || !a.live) return;
                        if (a.canBlockReload && a.endSN && a.advanced) {
                            var o, l, u, d = this.hls.config.lowLatencyMode,
                                h = a.lastPartIndex;
                            d ? (l = -1 !== h ? a.lastPartSn : a.endSN + 1, u = -1 !== h ? h + 1 : void 0) : (l = -1 !== h ? a.lastPartSn + 1 : a.endSN + 1, u = -1 !== h ? 0 : void 0);
                            var c = a.age,
                                f = c + a.ageHeader,
                                g = Math.min(f - a.partTarget, 1.5 * a.targetduration);
                            if (g > 0) {
                                if (r && g > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + g + " with playlist age: " + a.age), g = 0;
                                else {
                                    var v = Math.floor(g / a.targetduration);
                                    if (l += v, void 0 !== u) u += Math.round(g % a.targetduration / a.partTarget);
                                    this.log("CDN Tune-in age: " + a.ageHeader + "s last advanced " + c.toFixed(2) + "s goal: " + g + " skip sn " + v + " to part " + u)
                                }
                                a.tuneInGoal = g
                            }
                            var p = function(t, e) {
                                var r = t.canSkipUntil,
                                    i = t.canSkipDateRanges,
                                    a = t.endSN;
                                return r && e - a < r ? i ? Bt.v2 : Bt.Yes : Bt.No
                            }(a, l);
                            return null !== (o = e.deliveryDirectives) && void 0 !== o && o.skip && a.deltaUpdateFailed && (l = e.deliveryDirectives.msn, u = e.deliveryDirectives.part, p = Bt.No), void this.loadPlaylist(new jt(l, u, p))
                        }
                        var m = function(t, e) {
                            var r = 1e3 * t.levelTargetDuration,
                                i = r / 2,
                                a = t.age,
                                n = a > 0 && a < 3 * r,
                                s = e.loading.end - e.loading.start,
                                o = r,
                                l = t.availabilityDelay;
                            if (!1 === t.updated)
                                if (n) {
                                    var u = 333 * t.misses;
                                    o = Math.max(Math.min(i, 2 * s), u), t.availabilityDelay = (t.availabilityDelay || 0) + o
                                } else o = i;
                            else n ? (l = Math.min(l || r / 2, a), t.availabilityDelay = l, o = l + r - a) : o = r - s;
                            return Math.round(o)
                        }(a, n);
                        this.log("reload live playlist " + t + " in " + Math.round(m) + " ms"), this.timer = self.setTimeout((function() {
                            return i.loadPlaylist()
                        }), m)
                    } else this.clearTimer()
                }, e.retryLoadingOrFail = function(t) {
                    var e, r = this,
                        i = this.hls.config,
                        a = this.retryCount < i.levelLoadingMaxRetry;
                    if (a)
                        if (this.retryCount++, t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'), this.loadPlaylist();
                        else {
                            var n = Math.min(Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay, i.levelLoadingMaxRetryTimeout);
                            this.timer = self.setTimeout((function() {
                                return r.loadPlaylist()
                            }), n), this.warn("retry playlist loading #" + this.retryCount + " in " + n + ' ms after "' + t.details + '"')
                        }
                    else this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), t.fatal = !0;
                    return a
                }, t
            }();

        function Yt() {
            return (Yt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Wt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function qt(t, e) {
            return (qt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Xt = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
            zt = function(t) {
                var e, r;

                function i(e) {
                    var r;
                    return (r = t.call(this, e, "[level-controller]") || this)._levels = [], r._firstLevel = -1, r._startLevel = void 0, r.currentLevelIndex = -1, r.manualLevelIndex = -1, r.onParsedComplete = void 0, r._registerListeners(), r
                }
                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, qt(e, r);
                var a, s, l, u = i.prototype;
                return u._registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(o.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(o.a.FRAG_LOADED, this.onFragLoaded, this), t.on(o.a.ERROR, this.onError, this)
                }, u._unregisterListeners = function() {
                    var t = this.hls;
                    t.off(o.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(o.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(o.a.FRAG_LOADED, this.onFragLoaded, this), t.off(o.a.ERROR, this.onError, this)
                }, u.destroy = function() {
                    t.prototype.destroy.call(this), this._unregisterListeners(), this.manualLevelIndex = -1
                }, u.startLoad = function() {
                    this._levels.forEach((function(t) {
                        t.loadError = 0
                    })), t.prototype.startLoad.call(this)
                }, u.onManifestLoaded = function(t, e) {
                    var r, i, a = [],
                        s = [],
                        l = [],
                        u = {},
                        d = !1,
                        h = !1;
                    if (e.levels.forEach((function(t) {
                            var e = t.attrs;
                            d = d || !!t.videoCodec, h = h || !!t.audioCodec, Xt && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), (i = u[t.bitrate]) ? i.url.push(t.url) : (i = new Ht(t), u[t.bitrate] = i, a.push(i)), e && (e.AUDIO && G(i, "audio", e.AUDIO), e.SUBTITLES && G(i, "text", e.SUBTITLES))
                        })), d && h && (a = a.filter((function(t) {
                            return !!t.videoCodec
                        }))), a = a.filter((function(t) {
                            var e = t.audioCodec,
                                r = t.videoCodec;
                            return (!e || y(e, "audio")) && (!r || y(r, "video"))
                        })), e.audioTracks && K(s = e.audioTracks.filter((function(t) {
                            return !t.audioCodec || y(t.audioCodec, "audio")
                        }))), e.subtitles && K(l = e.subtitles), a.length > 0) {
                        r = a[0].bitrate, a.sort((function(t, e) {
                            return t.bitrate - e.bitrate
                        })), this._levels = a;
                        for (var c = 0; c < a.length; c++)
                            if (a[c].bitrate === r) {
                                this._firstLevel = c, this.log("manifest loaded, " + a.length + " level(s) found, first bitrate: " + r);
                                break
                            } var f = h && !d,
                            g = {
                                levels: a,
                                audioTracks: s,
                                subtitleTracks: l,
                                firstLevel: this._firstLevel,
                                stats: e.stats,
                                audio: h,
                                video: d,
                                altAudio: !f && s.some((function(t) {
                                    return !!t.url
                                }))
                            };
                        this.hls.trigger(o.a.MANIFEST_PARSED, g), this.onParsedComplete()
                    } else this.hls.trigger(o.a.ERROR, {
                        type: n.b.MEDIA_ERROR,
                        details: n.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: e.url,
                        reason: "no level with compatible codecs found in manifest"
                    })
                }, u.onError = function(e, r) {
                    if (t.prototype.onError.call(this, e, r), !r.fatal) {
                        var i = r.context,
                            a = this._levels[this.currentLevelIndex];
                        if (i && (i.type === T.AUDIO_TRACK && a.audioGroupIds && i.groupId === a.audioGroupIds[a.urlId] || i.type === T.SUBTITLE_TRACK && a.textGroupIds && i.groupId === a.textGroupIds[a.urlId])) this.redundantFailover(this.currentLevelIndex);
                        else {
                            var s, o = !1,
                                l = !0;
                            switch (r.details) {
                                case n.a.FRAG_LOAD_ERROR:
                                case n.a.FRAG_LOAD_TIMEOUT:
                                case n.a.KEY_LOAD_ERROR:
                                case n.a.KEY_LOAD_TIMEOUT:
                                    if (r.frag) {
                                        var u = this._levels[r.frag.level];
                                        u ? (u.fragmentError++, u.fragmentError > this.hls.config.fragLoadingMaxRetry && (s = r.frag.level)) : s = r.frag.level
                                    }
                                    break;
                                case n.a.LEVEL_LOAD_ERROR:
                                case n.a.LEVEL_LOAD_TIMEOUT:
                                    i && (i.deliveryDirectives && (l = !1), s = i.level), o = !0;
                                    break;
                                case n.a.REMUX_ALLOC_ERROR:
                                    s = r.level, o = !0
                            }
                            void 0 !== s && this.recoverLevel(r, s, o, l)
                        }
                    }
                }, u.recoverLevel = function(t, e, r, i) {
                    var a = t.details,
                        n = this._levels[e];
                    if (n.loadError++, r) {
                        if (!this.retryLoadingOrFail(t)) return void(this.currentLevelIndex = -1);
                        t.levelRetry = !0
                    }
                    if (i) {
                        var s = n.url.length;
                        if (s > 1 && n.loadError < s) t.levelRetry = !0, this.redundantFailover(e);
                        else if (-1 === this.manualLevelIndex) {
                            var o = 0 === e ? this._levels.length - 1 : e - 1;
                            this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(a + ": switch to " + o), t.levelRetry = !0, this.hls.nextAutoLevel = o)
                        }
                    }
                }, u.redundantFailover = function(t) {
                    var e = this._levels[t],
                        r = e.url.length;
                    if (r > 1) {
                        var i = (e.urlId + 1) % r;
                        this.warn("Switching to redundant URL-id " + i), this._levels.forEach((function(t) {
                            t.urlId = i
                        })), this.level = t
                    }
                }, u.onFragLoaded = function(t, e) {
                    var r = e.frag;
                    if (void 0 !== r && r.type === E.MAIN) {
                        var i = this._levels[r.level];
                        void 0 !== i && (i.fragmentError = 0, i.loadError = 0)
                    }
                }, u.onLevelLoaded = function(t, e) {
                    var r, i, a = e.level,
                        n = e.details,
                        s = this._levels[a];
                    if (!s) return this.warn("Invalid level index " + a), void(null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (n.deltaUpdateFailed = !0));
                    a === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0, this.retryCount = 0), this.playlistLoaded(a, e, s.details)) : null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (n.deltaUpdateFailed = !0)
                }, u.onAudioTrackSwitched = function(t, e) {
                    var r = this.hls.levels[this.currentLevelIndex];
                    if (r && r.audioGroupIds) {
                        for (var i = -1, a = this.hls.audioTracks[e.id].groupId, n = 0; n < r.audioGroupIds.length; n++)
                            if (r.audioGroupIds[n] === a) {
                                i = n;
                                break
                            } i !== r.urlId && (r.urlId = i, this.startLoad())
                    }
                }, u.loadPlaylist = function(t) {
                    var e = this.currentLevelIndex,
                        r = this._levels[e];
                    if (this.canLoad && r && r.url.length > 0) {
                        var i = r.urlId,
                            a = r.url[i];
                        if (t) try {
                            a = t.addDirectives(a)
                        } catch (t) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                        }
                        this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + i + " " + a), this.clearTimer(), this.hls.trigger(o.a.LEVEL_LOADING, {
                            url: a,
                            level: e,
                            id: i,
                            deliveryDirectives: t || null
                        })
                    }
                }, u.removeLevel = function(t, e) {
                    var r = function(t, r) {
                            return r !== e
                        },
                        i = this._levels.filter((function(i, a) {
                            return a !== t || i.url.length > 1 && void 0 !== e && (i.url = i.url.filter(r), i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)), i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)), i.urlId = 0, !0)
                        })).map((function(t, e) {
                            var r = t.details;
                            return null != r && r.fragments && r.fragments.forEach((function(t) {
                                t.level = e
                            })), t
                        }));
                    this._levels = i, this.hls.trigger(o.a.LEVELS_UPDATED, {
                        levels: i
                    })
                }, a = i, (s = [{
                    key: "levels",
                    get: function() {
                        return 0 === this._levels.length ? null : this._levels
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this.currentLevelIndex
                    },
                    set: function(t) {
                        var e, r = this._levels;
                        if (this.currentLevelIndex !== t || null === (e = r[t]) || void 0 === e || !e.details)
                            if (t < 0 || t >= r.length) this.hls.trigger(o.a.ERROR, {
                                type: n.b.OTHER_ERROR,
                                details: n.a.LEVEL_SWITCH_ERROR,
                                level: t,
                                fatal: !1,
                                reason: "invalid level idx"
                            });
                            else {
                                this.clearTimer();
                                var i = this.currentLevelIndex,
                                    a = r[i],
                                    s = r[t];
                                this.log("switching to level " + t + " from " + i), this.currentLevelIndex = t;
                                var l = Yt({}, s, {
                                    level: t,
                                    maxBitrate: s.maxBitrate,
                                    uri: s.uri,
                                    urlId: s.urlId
                                });
                                delete l._urlId, this.hls.trigger(o.a.LEVEL_SWITCHING, l);
                                var u = s.details;
                                if (!u || u.live) {
                                    var d = this.switchParams(s.uri, null == a ? void 0 : a.details);
                                    this.loadPlaylist(d)
                                }
                            }
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.manualLevelIndex
                    },
                    set: function(t) {
                        this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(t) {
                        this._firstLevel = t
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        if (void 0 === this._startLevel) {
                            var t = this.hls.config.startLevel;
                            return void 0 !== t ? t : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(t) {
                        this._startLevel = t
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                    },
                    set: function(t) {
                        this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                    }
                }]) && Wt(a.prototype, s), l && Wt(a, l), i
            }(Vt),
            Qt = function() {
                function t(t, e, r) {
                    void 0 === e && (e = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = r
                }
                var e = t.prototype;
                return e.sample = function(t, e) {
                    var r = Math.pow(this.alpha_, t);
                    this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
                }, e.getTotalWeight = function() {
                    return this.totalWeight_
                }, e.getEstimate = function() {
                    if (this.alpha_) {
                        var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        if (t) return this.estimate_ / t
                    }
                    return this.estimate_
                }, t
            }(),
            $t = function() {
                function t(t, e, r) {
                    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Qt(t), this.fast_ = new Qt(e)
                }
                var e = t.prototype;
                return e.update = function(t, e) {
                    var r = this.slow_,
                        i = this.fast_;
                    this.slow_.halfLife !== t && (this.slow_ = new Qt(t, r.getEstimate(), r.getTotalWeight())), this.fast_.halfLife !== e && (this.fast_ = new Qt(e, i.getEstimate(), i.getTotalWeight()))
                }, e.sample = function(t, e) {
                    var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                        i = 8 * e / r;
                    this.fast_.sample(r, i), this.slow_.sample(r, i)
                }, e.canEstimate = function() {
                    var t = this.fast_;
                    return t && t.getTotalWeight() >= this.minWeight_
                }, e.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }, e.destroy = function() {}, t
            }();

        function Jt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Zt = function() {
                function t(t) {
                    this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
                    var e = t.config;
                    this.bwEstimator = new $t(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
                }
                var e, r, i, a = t.prototype;
                return a.registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.FRAG_LOADING, this.onFragLoading, this), t.on(o.a.FRAG_LOADED, this.onFragLoaded, this), t.on(o.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(o.a.ERROR, this.onError, this)
                }, a.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(o.a.FRAG_LOADING, this.onFragLoading, this), t.off(o.a.FRAG_LOADED, this.onFragLoaded, this), t.off(o.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(o.a.ERROR, this.onError, this)
                }, a.destroy = function() {
                    this.unregisterListeners(), this.clearTimer()
                }, a.onFragLoading = function(t, e) {
                    var r, i = e.frag;
                    i.type === E.MAIN && (this.timer || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null, this.timer = self.setInterval(this.onCheck, 100)))
                }, a.onLevelLoaded = function(t, e) {
                    var r = this.hls.config;
                    e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                }, a._abandonRulesCheck = function() {
                    var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        i = r.autoLevelEnabled,
                        a = r.config,
                        n = r.media;
                    if (t && n) {
                        var u = e ? e.stats : t.stats,
                            d = e ? e.duration : t.duration;
                        if (u.aborted) return l.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                        if (i && !n.paused && n.playbackRate && n.readyState) {
                            var h = performance.now() - u.loading.start,
                                c = Math.abs(n.playbackRate);
                            if (!(h <= 500 * d / c)) {
                                var f = r.levels,
                                    g = r.minAutoLevel,
                                    v = f[t.level],
                                    p = u.total || Math.max(u.loaded, Math.round(d * v.maxBitrate / 8)),
                                    m = Math.max(1, u.bwEstimate ? u.bwEstimate / 8 : 1e3 * u.loaded / h),
                                    y = (p - u.loaded) / m,
                                    T = n.currentTime,
                                    E = (B.bufferInfo(n, T, a.maxBufferHole).end - T) / c;
                                if (!(E >= 2 * d / c || y <= E)) {
                                    var b, S = Number.POSITIVE_INFINITY;
                                    for (b = t.level - 1; b > g; b--) {
                                        if ((S = d * f[b].maxBitrate / (6.4 * m)) < E) break
                                    }
                                    if (!(S >= y)) {
                                        var L = this.bwEstimator.getEstimate();
                                        l.b.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + b + "\n      Current BW estimate: " + (Object(s.a)(L) ? (L / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + y.toFixed(3) + " s\n      Estimated load time for the next fragment: " + S.toFixed(3) + " s\n      Time to underbuffer: " + E.toFixed(3) + " s"), r.nextLoadLevel = b, this.bwEstimator.sample(h, u.loaded), this.clearTimer(), t.loader && (this.fragCurrent = this.partCurrent = null, t.loader.abort()), r.trigger(o.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: t,
                                            part: e,
                                            stats: u
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, a.onFragLoaded = function(t, e) {
                    var r = e.frag,
                        i = e.part;
                    if (r.type === E.MAIN && Object(s.a)(r.sn)) {
                        var a = i ? i.stats : r.stats,
                            n = i ? i.duration : r.duration;
                        if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var l = this.hls.levels[r.level],
                                u = (l.loaded ? l.loaded.bytes : 0) + a.loaded,
                                d = (l.loaded ? l.loaded.duration : 0) + n;
                            l.loaded = {
                                bytes: u,
                                duration: d
                            }, l.realBitrate = Math.round(8 * u / d)
                        }
                        if (r.bitrateTest) {
                            var h = {
                                stats: a,
                                frag: r,
                                part: i,
                                id: r.type
                            };
                            this.onFragBuffered(o.a.FRAG_BUFFERED, h)
                        }
                    }
                }, a.onFragBuffered = function(t, e) {
                    var r = e.frag,
                        i = e.part,
                        a = i ? i.stats : r.stats;
                    if (!a.aborted && r.type === E.MAIN && "initSegment" !== r.sn && !r.bitrateTest) {
                        var n = a.parsing.end - a.loading.start;
                        this.bwEstimator.sample(n, a.loaded), a.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                    }
                }, a.onError = function(t, e) {
                    switch (e.details) {
                        case n.a.FRAG_LOAD_ERROR:
                        case n.a.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                    }
                }, a.clearTimer = function() {
                    self.clearInterval(this.timer), this.timer = void 0
                }, a.getNextABRAutoLevel = function() {
                    var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        i = r.maxAutoLevel,
                        a = r.config,
                        n = r.minAutoLevel,
                        s = r.media,
                        o = e ? e.duration : t ? t.duration : 0,
                        u = s ? s.currentTime : 0,
                        d = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
                        h = this.bwEstimator ? this.bwEstimator.getEstimate() : a.abrEwmaDefaultEstimate,
                        c = (B.bufferInfo(s, u, a.maxBufferHole).end - u) / d,
                        f = this.findBestLevel(h, n, i, c, a.abrBandWidthFactor, a.abrBandWidthUpFactor);
                    if (f >= 0) return f;
                    l.b.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                    var g = o ? Math.min(o, a.maxStarvationDelay) : a.maxStarvationDelay,
                        v = a.abrBandWidthFactor,
                        p = a.abrBandWidthUpFactor;
                    if (!c) {
                        var m = this.bitrateTestDelay;
                        if (m) g = (o ? Math.min(o, a.maxLoadingDelay) : a.maxLoadingDelay) - m, l.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), v = p = 1
                    }
                    return f = this.findBestLevel(h, n, i, c + g, v, p), Math.max(f, 0)
                }, a.findBestLevel = function(t, e, r, i, a, n) {
                    for (var s, o = this.fragCurrent, u = this.partCurrent, d = this.lastLoadedFragLevel, h = this.hls.levels, c = h[d], f = !(null == c || null === (s = c.details) || void 0 === s || !s.live), g = null == c ? void 0 : c.codecSet, v = u ? u.duration : o ? o.duration : 0, p = r; p >= e; p--) {
                        var m = h[p];
                        if (m && (!g || m.codecSet === g)) {
                            var y = m.details,
                                T = (u ? null == y ? void 0 : y.partTarget : null == y ? void 0 : y.averagetargetduration) || v,
                                E = void 0;
                            E = p <= d ? a * t : n * t;
                            var b = h[p].maxBitrate,
                                S = b * T / E;
                            if (l.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(E) + "/" + b + "/" + T + "/" + i + "/" + S), E > b && (!S || f && !this.bitrateTestDelay || S < i)) return p
                        }
                    }
                    return -1
                }, e = t, (r = [{
                    key: "nextAutoLevel",
                    get: function() {
                        var t = this._nextAutoLevel,
                            e = this.bwEstimator;
                        if (!(-1 === t || e && e.canEstimate())) return t;
                        var r = this.getNextABRAutoLevel();
                        return -1 !== t && (r = Math.min(t, r)), r
                    },
                    set: function(t) {
                        this._nextAutoLevel = t
                    }
                }]) && Jt(e.prototype, r), i && Jt(e, i), t
            }(),
            te = r(12);

        function ee() {
            return (ee = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }

        function re(t, e) {
            return (re = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ie = function(t) {
            var e, r;

            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[audio-stream-controller]") || this).retryDate = 0, i.videoBuffer = null, i.videoTrackCC = -1, i.waitingVideoCC = -1, i.audioSwitch = !1, i.trackId = -1, i.waitingData = null, i.mainDetails = null, i.fragmentLoader = new lt(e.config), i._registerListeners(), i
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, re(e, r);
            var a = i.prototype;
            return a.onHandlerDestroying = function() {
                this._unregisterListeners()
            }, a._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(o.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(o.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(o.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(o.a.ERROR, this.onError, this), t.on(o.a.BUFFER_RESET, this.onBufferReset, this), t.on(o.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(o.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(o.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(o.a.FRAG_BUFFERED, this.onFragBuffered, this)
            }, a._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(o.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(o.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(o.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(o.a.ERROR, this.onError, this), t.off(o.a.BUFFER_RESET, this.onBufferReset, this), t.off(o.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(o.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(o.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(o.a.FRAG_BUFFERED, this.onFragBuffered, this)
            }, a.onInitPtsFound = function(t, e) {
                var r = e.frag,
                    i = e.id,
                    a = e.initPTS;
                if ("main" === i) {
                    var n = r.cc;
                    this.initPTS[r.cc] = a, this.log("InitPTS for cc: " + n + " found from main: " + a), this.videoTrackCC = n, this.state === Dt && this.tick()
                }
            }, a.startLoad = function(t) {
                if (!this.levels) return this.startPosition = t, void(this.state = vt);
                var e = this.lastCurrentTime;
                this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = pt) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.loadedmetadata = !1, this.state = Et), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            }, a.doTick = function() {
                switch (this.state) {
                    case pt:
                        this.doTickIdle();
                        break;
                    case Et:
                        var e, r = this.levels,
                            i = this.trackId,
                            a = null == r || null === (e = r[i]) || void 0 === e ? void 0 : e.details;
                        if (a) {
                            if (this.waitForCdnTuneIn(a)) break;
                            this.state = Dt
                        }
                        break;
                    case Tt:
                        var n, s = performance.now(),
                            o = this.retryDate;
                        (!o || s >= o || null !== (n = this.media) && void 0 !== n && n.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = pt);
                        break;
                    case Dt:
                        var u = this.waitingData;
                        if (u) {
                            var d = u.frag,
                                h = u.part,
                                c = u.cache,
                                f = u.complete;
                            if (void 0 !== this.initPTS[d.cc]) {
                                this.waitingData = null, this.state = yt;
                                var g = {
                                    frag: d,
                                    part: h,
                                    payload: c.flush(),
                                    networkDetails: null
                                };
                                this._handleFragmentLoadProgress(g), f && t.prototype._handleFragmentLoadComplete.call(this, g)
                            } else if (this.videoTrackCC !== this.waitingVideoCC) l.b.log("Waiting fragment cc (" + d.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                            else {
                                var v = B.bufferInfo(this.mediaBuffer, this.media.currentTime, this.config.maxBufferHole);
                                tt(v.end, this.config.maxFragLookUpTolerance, d) < 0 && (l.b.log("Waiting fragment cc (" + d.cc + ") @ " + d.start + " cancelled because another fragment at " + v.end + " is needed"), this.clearWaitingFragment())
                            }
                        } else this.state = pt
                }
                this.onTickEnd()
            }, a.clearWaitingFragment = function() {
                var t = this.waitingData;
                t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = pt)
            }, a.onTickEnd = function() {
                var t = this.media;
                if (t && t.readyState) {
                    var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                    !this.loadedmetadata && e.length && (this.loadedmetadata = !0), this.lastCurrentTime = t.currentTime
                }
            }, a.doTickIdle = function() {
                var t, e, r = this.hls,
                    i = this.levels,
                    a = this.media,
                    n = this.trackId,
                    l = r.config;
                if (i && (a || !this.startFragRequested && l.startFragPrefetch)) {
                    var u = this.getLoadPosition();
                    if (Object(s.a)(u) && i && i[n]) {
                        var d = i[n].details;
                        if (!d || d.live && this.levelLastLoaded !== n || this.waitForCdnTuneIn(d)) this.state = Et;
                        else {
                            var h = d.initSegment,
                                c = 0;
                            if (!h || h.data) {
                                var f = this.mediaBuffer ? this.mediaBuffer : this.media,
                                    g = this.videoBuffer ? this.videoBuffer : this.media,
                                    v = u < l.maxBufferHole ? Math.max(2, l.maxBufferHole) : l.maxBufferHole,
                                    p = B.bufferInfo(f, u, v),
                                    m = B.bufferInfo(g, u, v),
                                    y = p.len,
                                    T = Math.min(l.maxBufferLength, l.maxMaxBufferLength),
                                    E = Math.max(T, m.len),
                                    b = this.audioSwitch;
                                if (y >= E && !b) return;
                                if (!b && this._streamEnded(p, d)) return r.trigger(o.a.BUFFER_EOS, {
                                    type: "audio"
                                }), void(this.state = At);
                                var S = d.fragments[0].start;
                                if (c = p.end, b && (c = u, d.PTSKnown && u < S && (p.end > S || p.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), a.currentTime = S + .05)), !(h = this.getNextFragment(c, d))) return
                            }
                            "identity" !== (null === (t = h.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = h.decryptdata) && void 0 !== e && e.key ? this.loadFragment(h, d, c) : (this.log("Loading key for " + h.sn + " of [" + d.startSN + " ," + d.endSN + "],track " + n), this.state = mt, r.trigger(o.a.KEY_LOADING, {
                                frag: h
                            }))
                        }
                    }
                }
            }, a.onMediaDetaching = function() {
                this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
            }, a.onAudioTracksUpdated = function(t, e) {
                var r = e.audioTracks;
                this.levels = r.map((function(t) {
                    return new Ht(t)
                }))
            }, a.onAudioTrackSwitching = function(t, e) {
                var r = !!e.url;
                this.trackId = e.id;
                var i = this.fragCurrent,
                    a = this.transmuxer;
                null != i && i.loader && i.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), r ? this.setInterval(100) : a && (a.destroy(), this.transmuxer = null), r ? (this.audioSwitch = !0, this.state = pt) : this.state = vt, this.tick()
            }, a.onManifestLoading = function() {
                this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0
            }, a.onLevelLoaded = function(t, e) {
                null === this.mainDetails && (this.mainDetails = e.details)
            }, a.onAudioTrackLoaded = function(t, e) {
                var r, i = this.levels,
                    a = e.details,
                    n = e.id;
                if (i) {
                    this.log("Track " + n + " loaded [" + a.startSN + "," + a.endSN + "],duration:" + a.totalduration);
                    var s = i[n],
                        o = 0;
                    if (a.live || null !== (r = s.details) && void 0 !== r && r.live) {
                        var l;
                        if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed) return;
                        !s.details && null !== (l = this.mainDetails) && void 0 !== l && l.hasProgramDateTime && a.hasProgramDateTime ? (Q(a, this.mainDetails), o = a.fragments[0].start) : o = this.alignPlaylists(a, s.details)
                    }
                    s.details = a, this.levelLastLoaded = n, this.startFragRequested || this.setStartPosition(s.details, o), this.state !== Et || this.waitForCdnTuneIn(a) || (this.state = pt), this.tick()
                } else this.warn("Audio tracks were reset while loading level " + n)
            }, a._handleFragmentLoadProgress = function(t) {
                var e, r = t.frag,
                    i = t.part,
                    a = t.payload,
                    n = this.config,
                    s = this.trackId,
                    o = this.levels;
                if (o) {
                    var u = o[s],
                        d = u.details,
                        h = n.defaultAudioCodec || u.audioCodec || "mp4a.40.2",
                        c = this.transmuxer;
                    c || (c = this.transmuxer = new Mt(this.hls, E.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                    var f = this.initPTS[r.cc],
                        g = null === (e = d.initSegment) || void 0 === e ? void 0 : e.data;
                    if (void 0 !== f) {
                        var v = i ? i.index : -1,
                            p = -1 !== v,
                            m = new W(r.level, r.sn, r.stats.chunkCount, a.byteLength, v, p);
                        c.push(a, g, h, "", r, i, d.totalduration, !1, m, f)
                    } else {
                        l.b.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + d.startSN + " ," + d.endSN + "],track " + s), (this.waitingData = this.waitingData || {
                            frag: r,
                            part: i,
                            cache: new te.a,
                            complete: !1
                        }).cache.push(new Uint8Array(a)), this.waitingVideoCC = this.videoTrackCC, this.state = Dt
                    }
                } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }, a._handleFragmentLoadComplete = function(e) {
                this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
            }, a.onBufferReset = function() {
                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
            }, a.onBufferCreated = function(t, e) {
                var r = e.tracks.audio;
                r && (this.mediaBuffer = r.buffer), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
            }, a.onFragBuffered = function(t, e) {
                var r = e.frag,
                    i = e.part;
                r.type === E.AUDIO && (this.fragContextChanged(r) ? this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : (this.fragPrevious = r, this.audioSwitch && "initSegment" !== r.sn && (this.audioSwitch = !1, this.hls.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                    id: this.trackId
                })), this.fragBufferedComplete(r, i)))
            }, a.onError = function(t, e) {
                switch (e.details) {
                    case n.a.FRAG_LOAD_ERROR:
                    case n.a.FRAG_LOAD_TIMEOUT:
                    case n.a.KEY_LOAD_ERROR:
                    case n.a.KEY_LOAD_TIMEOUT:
                        if (!e.fatal) {
                            var r = e.frag;
                            if (!r || r.type !== E.AUDIO) return;
                            this.fragCurrent;
                            var i = this.config;
                            if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                var a = Math.min(Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                this.warn("Frag loading failed, retry in " + a + " ms"), this.retryDate = performance.now() + a, this.fragLoadError++, this.state = Tt
                            } else e.levelRetry ? (this.fragCurrent = null, this.fragLoadError = 0, this.state = pt) : (l.b.error(e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = Rt)
                        }
                        break;
                    case n.a.AUDIO_TRACK_LOAD_ERROR:
                    case n.a.AUDIO_TRACK_LOAD_TIMEOUT:
                        this.state !== Rt && this.state !== vt && (this.state = e.fatal ? Rt : pt, this.warn(e.details + " while loading frag, switching to " + this.state + " state"));
                        break;
                    case n.a.BUFFER_FULL_ERROR:
                        if ("audio" === e.parent && (this.state === bt || this.state === St)) {
                            var s = this.mediaBuffer,
                                u = this.media.currentTime;
                            s && B.isBuffered(s, u) && B.isBuffered(s, u + .5) ? (this.reduceMaxBufferLength(), this.state = pt) : (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.hls.trigger(o.a.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: Number.POSITIVE_INFINITY,
                                type: "audio"
                            }))
                        }
                }
            }, a.onBufferFlushed = function(t, e) {
                var r = e.type,
                    i = this.mediaBuffer ? this.mediaBuffer : this.media;
                i && r === d.a.AUDIO && this.fragmentTracker.detectEvictedFragments(d.a.AUDIO, B.getBuffered(i)), this.fragPrevious = null, this.state = pt
            }, a._handleTransmuxComplete = function(t) {
                var e, r = "audio",
                    i = this.hls,
                    a = t.remuxResult,
                    n = t.chunkMeta,
                    s = this.getCurrentContext(n);
                if (s) {
                    var l = s.frag,
                        u = s.part,
                        h = a.audio,
                        c = a.text,
                        f = a.id3,
                        g = a.initSegment;
                    if (!this.fragContextChanged(l)) {
                        if (this.state = bt, this.audioSwitch && h && this.completeAudioSwitch(), null != g && g.tracks && (this._bufferInitSegment(g.tracks, l, n), i.trigger(o.a.FRAG_PARSING_INIT_SEGMENT, {
                                frag: l,
                                id: r,
                                tracks: g.tracks
                            })), h) {
                            var v = h.startPTS,
                                p = h.endPTS,
                                m = h.startDTS,
                                y = h.endDTS;
                            u && (u.elementaryStreams[d.a.AUDIO] = {
                                startPTS: v,
                                endPTS: p,
                                startDTS: m,
                                endDTS: y
                            }), l.setElementaryStreamInfo(d.a.AUDIO, v, p, m, y), this.bufferFragmentData(h, l, u, n)
                        }
                        if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
                            var T = ee({
                                frag: l,
                                id: r
                            }, f);
                            i.trigger(o.a.FRAG_PARSING_METADATA, T)
                        }
                        if (c) {
                            var E = ee({
                                frag: l,
                                id: r
                            }, c);
                            i.trigger(o.a.FRAG_PARSING_USERDATA, E)
                        }
                    }
                } else this.warn("The loading context changed while buffering fragment " + n.sn + " of level " + n.level + ". This chunk will not be buffered.")
            }, a._bufferInitSegment = function(t, e, r) {
                if (this.state === bt) {
                    t.video && delete t.video;
                    var i = t.audio;
                    if (i) {
                        i.levelCodec = i.codec, i.id = "audio", this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"), this.hls.trigger(o.a.BUFFER_CODECS, t);
                        var a = i.initSegment;
                        if (null != a && a.byteLength) {
                            var n = {
                                type: "audio",
                                data: a,
                                frag: e,
                                part: null,
                                chunkMeta: r
                            };
                            this.hls.trigger(o.a.BUFFER_APPENDING, n)
                        }
                        this.tick()
                    }
                }
            }, a.loadFragment = function(e, r, i) {
                var a = this.fragmentTracker.getState(e);
                this.fragCurrent = e, (this.audioSwitch || a === C.NOT_LOADED || a === C.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : r.live && !Object(s.a)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Dt) : (this.startFragRequested = !0, this.nextLoadPosition = e.start + e.duration, t.prototype.loadFragment.call(this, e, r, i)))
            }, a.completeAudioSwitch = function() {
                var t = this.hls,
                    e = this.media,
                    r = this.trackId;
                e && (this.log("Switching audio track : flushing all audio"), t.trigger(o.a.BUFFER_FLUSHING, {
                    startOffset: 0,
                    endOffset: Number.POSITIVE_INFINITY,
                    type: "audio"
                })), this.audioSwitch = !1, t.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                    id: r
                })
            }, i
        }(kt);

        function ae(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ne(t, e) {
            return (ne = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var se = function(t) {
            var e, r;

            function i(e) {
                var r;
                return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.registerListeners(), r
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, ne(e, r);
            var a, s, l, u = i.prototype;
            return u.registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(o.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(o.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(o.a.ERROR, this.onError, this)
            }, u.unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(o.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(o.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(o.a.ERROR, this.onError, this)
            }, u.destroy = function() {
                this.unregisterListeners(), t.prototype.destroy.call(this)
            }, u.onManifestLoading = function() {
                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
            }, u.onManifestParsed = function(t, e) {
                this.tracks = e.audioTracks || []
            }, u.onAudioTrackLoaded = function(t, e) {
                var r = e.id,
                    i = e.details,
                    a = this.tracksInGroup[r];
                if (a) {
                    var n = a.details;
                    a.details = e.details, this.log("audioTrack " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, n))
                } else this.warn("Invalid audio track id " + r)
            }, u.onLevelLoading = function(t, e) {
                this.switchLevel(e.level)
            }, u.onLevelSwitching = function(t, e) {
                this.switchLevel(e.level)
            }, u.switchLevel = function(t) {
                var e = this.hls.levels[t];
                if (null != e && e.audioGroupIds) {
                    var r = e.audioGroupIds[e.urlId];
                    if (this.groupId !== r) {
                        this.groupId = r;
                        var i = this.tracks.filter((function(t) {
                            return !r || t.groupId === r
                        }));
                        this.selectDefaultTrack && !i.some((function(t) {
                            return t.default
                        })) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
                        var a = {
                            audioTracks: i
                        };
                        this.log("Updating audio tracks, " + i.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(o.a.AUDIO_TRACKS_UPDATED, a), this.selectInitialTrack()
                    }
                }
            }, u.onError = function(e, r) {
                t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === T.AUDIO_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
            }, u.setAudioTrack = function(t) {
                var e, r = this.tracksInGroup;
                if (this.trackId !== t || null === (e = r[t]) || void 0 === e || !e.details)
                    if (t < 0 || t >= r.length) this.warn("Invalid id passed to audio-track controller");
                    else {
                        this.clearTimer();
                        var i = r[this.trackId],
                            a = r[t];
                        this.log("Now switching to audio-track index " + t), this.trackId = t;
                        var n = a.url,
                            s = a.type,
                            l = a.id;
                        this.hls.trigger(o.a.AUDIO_TRACK_SWITCHING, {
                            id: l,
                            type: s,
                            url: n
                        });
                        var u = this.switchParams(a.url, null == i ? void 0 : i.details);
                        this.loadPlaylist(u)
                    }
            }, u.selectInitialTrack = function() {
                var t, e = null === (t = this.tracksInGroup[this.trackId]) || void 0 === t ? void 0 : t.name,
                    r = this.findTrackId(e) || this.findTrackId(); - 1 !== r ? this.setAudioTrack(r) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(o.a.ERROR, {
                    type: n.b.MEDIA_ERROR,
                    details: n.a.AUDIO_TRACK_LOAD_ERROR,
                    fatal: !0
                }))
            }, u.findTrackId = function(t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                }
                return -1
            }, u.loadPlaylist = function(t) {
                var e = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(e)) {
                    var r = e.id,
                        i = e.groupId,
                        a = e.url;
                    if (t) try {
                        a = t.addDirectives(a)
                    } catch (t) {
                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                    }
                    this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(o.a.AUDIO_TRACK_LOADING, {
                        url: a,
                        id: r,
                        groupId: i,
                        deliveryDirectives: t || null
                    })
                }
            }, a = i, (s = [{
                key: "audioTracks",
                get: function() {
                    return this.tracksInGroup
                }
            }, {
                key: "audioTrack",
                get: function() {
                    return this.trackId
                },
                set: function(t) {
                    this.selectDefaultTrack = !1, this.setAudioTrack(t)
                }
            }]) && ae(a.prototype, s), l && ae(a, l), i
        }(Vt);

        function oe(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function le(t, e) {
            return (le = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ue = function(t) {
            var e, r;

            function i(e, r) {
                var i;
                return (i = t.call(this, e, r, "[subtitle-stream-controller]") || this).levels = [], i.currentTrackId = -1, i.tracksBuffered = void 0, i.config = e.config, i.fragCurrent = null, i.fragPrevious = null, i.media = null, i.mediaBuffer = null, i.state = vt, i.tracksBuffered = [], i.fragmentLoader = new lt(e.config), i._registerListeners(), i
            }
            r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, le(e, r);
            var a, n, s, u = i.prototype;
            return u._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.ERROR, this.onError, this), t.on(o.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(o.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(o.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(o.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this)
            }, u._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.ERROR, this.onError, this), t.off(o.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(o.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(o.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(o.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this)
            }, u.startLoad = function() {
                this.stopLoad(), this.state = pt;
                var t = this.levels[this.currentTrackId];
                null != t && t.details && (this.setInterval(500), this.tick())
            }, u.onHandlerDestroyed = function() {
                this.state = vt, this._unregisterListeners(), t.prototype.onHandlerDestroyed.call(this)
            }, u.onSubtitleFragProcessed = function(t, e) {
                var r = e.frag,
                    i = e.success;
                if (this.fragPrevious = r, this.state = pt, i) {
                    var a = this.tracksBuffered[this.currentTrackId];
                    if (a) {
                        for (var n, s = r.start, o = 0; o < a.length; o++)
                            if (s >= a[o].start && s <= a[o].end) {
                                n = a[o];
                                break
                            } var l = r.start + r.duration;
                        n ? n.end = l : (n = {
                            start: s,
                            end: l
                        }, a.push(n))
                    }
                }
            }, u.onMediaAttached = function(t, e) {
                var r = e.media;
                this.media = r, this.state = pt
            }, u.onMediaDetaching = function() {
                var t = this;
                this.media && (this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.currentTrackId = -1, this.levels.forEach((function(e) {
                    t.tracksBuffered[e.id] = []
                })), this.media = null, this.mediaBuffer = null, this.state = vt)
            }, u.onError = function(t, e) {
                var r, i = e.frag;
                i && i.type === E.SUBTITLE && (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(), this.state = pt)
            }, u.onSubtitleTracksUpdated = function(t, e) {
                var r = this,
                    i = e.subtitleTracks;
                this.tracksBuffered = [], this.levels = i.map((function(t) {
                    return new Ht(t)
                })), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach((function(t) {
                    r.tracksBuffered[t.id] = []
                })), this.mediaBuffer = null
            }, u.onSubtitleTrackSwitch = function(t, e) {
                if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
                    var r = this.levels[this.currentTrackId];
                    null != r && r.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, this.setInterval(500)) : this.mediaBuffer = null
                } else this.clearInterval()
            }, u.onSubtitleTrackLoaded = function(t, e) {
                var r, i = e.id,
                    a = e.details,
                    n = this.currentTrackId,
                    s = this.levels;
                if (s.length && a) {
                    var o = s[n];
                    if (!(i >= s.length || i !== n) && o) {
                        if (this.mediaBuffer = this.mediaBufferTimeRanges, a.live || null !== (r = o.details) && void 0 !== r && r.live) {
                            if (a.deltaUpdateFailed) return;
                            this.alignPlaylists(a, o.details)
                        }
                        o.details = a, this.levelLastLoaded = i, this.setInterval(500)
                    }
                }
            }, u._handleFragmentLoadComplete = function(t) {
                var e = t.frag,
                    r = t.payload,
                    i = e.decryptdata,
                    a = this.hls;
                if (!this.fragContextChanged(e) && r && r.byteLength > 0 && i && i.key && i.iv && "AES-128" === i.method) {
                    var n = performance.now();
                    this.decrypter.webCryptoDecrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer).then((function(t) {
                        var r = performance.now();
                        a.trigger(o.a.FRAG_DECRYPTED, {
                            frag: e,
                            payload: t,
                            stats: {
                                tstart: n,
                                tdecrypt: r
                            }
                        })
                    }))
                }
            }, u.doTick = function() {
                if (this.media) {
                    if (this.state === pt) {
                        var t, e = this.config,
                            r = this.currentTrackId,
                            i = this.fragmentTracker,
                            a = this.media,
                            n = this.levels;
                        if (!n.length || !n[r] || !n[r].details) return;
                        var s = e.maxBufferHole,
                            u = e.maxFragLookUpTolerance,
                            d = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
                            h = B.bufferedInfo(this.mediaBufferTimeRanges, a.currentTime, s),
                            c = h.end;
                        if (h.len > d) return;
                        var f, g = n[r].details,
                            v = g.fragments,
                            p = v.length,
                            m = v[p - 1].start + v[p - 1].duration,
                            y = this.fragPrevious;
                        c < m ? (y && g.hasProgramDateTime && (f = J(v, y.endProgramDateTime, u)), f || (f = Z(y, v, c, u))) : f = v[p - 1], null !== (t = f) && void 0 !== t && t.encrypted ? (l.b.log("Loading key for " + f.sn), this.state = mt, this.hls.trigger(o.a.KEY_LOADING, {
                            frag: f
                        })) : f && i.getState(f) === C.NOT_LOADED && this.loadFragment(f, g, c)
                    }
                } else this.state = pt
            }, u.loadFragment = function(e, r, i) {
                this.fragCurrent = e, t.prototype.loadFragment.call(this, e, r, i)
            }, u.stopLoad = function() {
                this.fragPrevious = null, t.prototype.stopLoad.call(this)
            }, a = i, (n = [{
                key: "mediaBufferTimeRanges",
                get: function() {
                    return this.tracksBuffered[this.currentTrackId] || []
                }
            }]) && oe(a.prototype, n), s && oe(a, s), i
        }(kt);

        function de(t, e) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t, e.dispatchEvent(r)
        }

        function he(t, e) {
            var r = t.mode;
            if ("disabled" === r && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
                if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
            } catch (r) {
                l.b.debug("[texttrack-utils]: " + r);
                var i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                i.id = e.id, t.addCue(i)
            }
            "disabled" === r && (t.mode = r)
        }

        function ce(t) {
            var e = t.mode;
            if ("disabled" === e && (t.mode = "hidden"), t.cues) {
                for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
                "disabled" === e && (t.mode = e)
            }
        }

        function fe(t, e, r) {
            var i = t.mode;
            if ("disabled" === i && (t.mode = "hidden"), t.cues && t.cues.length) {
                for (var a = function(t, e, r) {
                        var i = [],
                            a = function(t, e) {
                                if (e < t[0].startTime) return 0;
                                if (e > t[t.length - 1].endTime) return -1;
                                var r = 0,
                                    i = t.length - 1;
                                for (; r <= i;) {
                                    var a = Math.floor((i + r) / 2);
                                    if (e < t[a].startTime) i = a - 1;
                                    else {
                                        if (!(e > t[a].startTime)) return a;
                                        r = a + 1
                                    }
                                }
                                return t[r].startTime - e < e - t[i].startTime ? r : i
                            }(t, e);
                        if (a > -1)
                            for (var n = a, s = t.length; n < s; n++) {
                                var o = t[n];
                                if (o.startTime >= e && o.endTime <= r) i.push(o);
                                else if (o.startTime > r) return i
                            }
                        return i
                    }(t.cues, e, r), n = 0; n < a.length; n++) t.removeCue(a[n]);
                "disabled" === i && (t.mode = i)
            }
        }

        function ge(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ve(t, e) {
            return (ve = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function pe(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r];
                "subtitles" === i.kind && i.label && e.push(t[r])
            }
            return e
        }
        var me, ye = function(t) {
                var e, r;

                function i(e) {
                    var r;
                    return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
                        return r.onTextTracksChanged()
                    }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r.subtitleDisplay = !0, r.registerListeners(), r
                }
                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, ve(e, r);
                var a, n, s, l = i.prototype;
                return l.destroy = function() {
                    this.unregisterListeners(), t.prototype.destroy.call(this)
                }, l.registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(o.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(o.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(o.a.ERROR, this.onError, this)
                }, l.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(o.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(o.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(o.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(o.a.ERROR, this.onError, this)
                }, l.onMediaAttached = function(t, e) {
                    var r = this;
                    this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? (self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval((function() {
                        r.trackChangeListener()
                    }), 500)) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }, l.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? self.clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), pe(this.media.textTracks).forEach((function(t) {
                        ce(t)
                    })), this.subtitleTrack = -1, this.media = null)
                }, l.onManifestLoading = function() {
                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
                }, l.onManifestParsed = function(t, e) {
                    this.tracks = e.subtitleTracks
                }, l.onSubtitleTrackLoaded = function(t, e) {
                    var r = e.id,
                        i = e.details,
                        a = this.trackId,
                        n = this.tracksInGroup[a];
                    if (n) {
                        var s = n.details;
                        n.details = e.details, this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, s))
                    } else this.warn("Invalid subtitle track id " + r)
                }, l.onLevelLoading = function(t, e) {
                    this.switchLevel(e.level)
                }, l.onLevelSwitching = function(t, e) {
                    this.switchLevel(e.level)
                }, l.switchLevel = function(t) {
                    var e = this.hls.levels[t];
                    if (null != e && e.textGroupIds) {
                        var r = e.textGroupIds[e.urlId];
                        if (this.groupId !== r) {
                            var i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                                a = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId(),
                                n = this.tracks.filter((function(t) {
                                    return !r || t.groupId === r
                                }));
                            this.groupId = r, this.tracksInGroup = n;
                            var s = {
                                subtitleTracks: n
                            };
                            this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(o.a.SUBTITLE_TRACKS_UPDATED, s), -1 !== a && this.setSubtitleTrack(a, i)
                        }
                    }
                }, l.findTrackId = function(t) {
                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                        var i = e[r];
                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                    }
                    return -1
                }, l.onError = function(e, r) {
                    t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === T.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
                }, l.loadPlaylist = function(t) {
                    var e = this.tracksInGroup[this.trackId];
                    if (this.shouldLoadTrack(e)) {
                        var r = e.id,
                            i = e.groupId,
                            a = e.url;
                        if (t) try {
                            a = t.addDirectives(a)
                        } catch (t) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                        }
                        this.log("Loading subtitle playlist for id " + r), this.hls.trigger(o.a.SUBTITLE_TRACK_LOADING, {
                            url: a,
                            id: r,
                            groupId: i,
                            deliveryDirectives: t || null
                        })
                    }
                }, l.toggleTrackModes = function(t) {
                    var e = this,
                        r = this.media,
                        i = this.subtitleDisplay,
                        a = this.trackId;
                    if (r) {
                        var n = pe(r.textTracks),
                            s = n.filter((function(t) {
                                return t.groupId === e.groupId
                            }));
                        if (-1 === t)[].slice.call(n).forEach((function(t) {
                            t.mode = "disabled"
                        }));
                        else {
                            var o = s[a];
                            o && (o.mode = "disabled")
                        }
                        var l = s[t];
                        l && (l.mode = i ? "showing" : "hidden")
                    }
                }, l.setSubtitleTrack = function(t, e) {
                    var r, i = this.tracksInGroup;
                    if (this.media) {
                        if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null !== (r = i[t]) && void 0 !== r && r.details) || t < -1 || t >= i.length)) {
                            this.clearTimer();
                            var a = i[t];
                            if (this.log("Switching to subtitle track " + t), this.trackId = t, a) {
                                var n = a.url,
                                    s = a.type,
                                    l = a.id;
                                this.hls.trigger(o.a.SUBTITLE_TRACK_SWITCH, {
                                    id: l,
                                    type: s,
                                    url: n
                                });
                                var u = this.switchParams(a.url, null == e ? void 0 : e.details);
                                this.loadPlaylist(u)
                            } else this.hls.trigger(o.a.SUBTITLE_TRACK_SWITCH, {
                                id: t
                            })
                        }
                    } else this.queuedDefaultTrack = t
                }, l.onTextTracksChanged = function() {
                    if (this.media && this.hls.config.renderTextTracksNatively) {
                        for (var t = -1, e = pe(this.media.textTracks), r = 0; r < e.length; r++)
                            if ("hidden" === e[r].mode) t = r;
                            else if ("showing" === e[r].mode) {
                            t = r;
                            break
                        }
                        this.subtitleTrack = t
                    }
                }, a = i, (n = [{
                    key: "subtitleTracks",
                    get: function() {
                        return this.tracksInGroup
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.selectDefaultTrack = !1;
                        var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                        this.setSubtitleTrack(t, e)
                    }
                }]) && ge(a.prototype, n), s && ge(a, s), i
            }(Vt),
            Te = function() {
                function t(t) {
                    this.buffers = void 0, this.queues = {
                        video: [],
                        audio: [],
                        audiovideo: []
                    }, this.buffers = t
                }
                var e = t.prototype;
                return e.append = function(t, e) {
                    var r = this.queues[e];
                    r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e)
                }, e.insertAbort = function(t, e) {
                    this.queues[e].unshift(t), this.executeNext(e)
                }, e.appendBlocker = function(t) {
                    var e, r = new Promise((function(t) {
                            e = t
                        })),
                        i = {
                            execute: e,
                            onStart: function() {},
                            onComplete: function() {},
                            onError: function() {}
                        };
                    return this.append(i, t), r
                }, e.executeNext = function(t) {
                    var e = this.buffers,
                        r = this.queues,
                        i = e[t],
                        a = r[t];
                    if (a.length) {
                        var n = a[0];
                        try {
                            n.execute()
                        } catch (t) {
                            l.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), n.onError(t), i && i.updating || a.shift()
                        }
                    }
                }, e.shiftAndExecuteNext = function(t) {
                    this.queues[t].shift(), this.executeNext(t)
                }, e.current = function(t) {
                    return this.queues[t][0]
                }, t
            }(),
            Ee = It(),
            be = /([ha]vc.)(?:\.[^.,]+)+/,
            Se = function() {
                function t(t) {
                    var e = this;
                    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
                        var t = e.hls,
                            r = e.media,
                            i = e.mediaSource;
                        l.b.log("[buffer-controller]: Media source opened"), r && (e.updateMediaElementDuration(), t.trigger(o.a.MEDIA_ATTACHED, {
                            media: r
                        })), i && i.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                    }, this._onMediaSourceClose = function() {
                        l.b.log("[buffer-controller]: Media source closed")
                    }, this._onMediaSourceEnded = function() {
                        l.b.log("[buffer-controller]: Media source ended")
                    }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.unregisterListeners(), this.details = null
                }, e.registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(o.a.BUFFER_RESET, this.onBufferReset, this), t.on(o.a.BUFFER_APPENDING, this.onBufferAppending, this), t.on(o.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(o.a.BUFFER_EOS, this.onBufferEos, this), t.on(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(o.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(o.a.FRAG_PARSED, this.onFragParsed, this)
                }, e.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(o.a.BUFFER_RESET, this.onBufferReset, this), t.off(o.a.BUFFER_APPENDING, this.onBufferAppending, this), t.off(o.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(o.a.BUFFER_EOS, this.onBufferEos, this), t.off(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(o.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(o.a.FRAG_PARSED, this.onFragParsed, this)
                }, e._initSourceBuffer = function() {
                    this.sourceBuffer = {}, this.operationQueue = new Te(this.sourceBuffer), this.listeners = {
                        audio: [],
                        video: [],
                        audiovideo: []
                    }
                }, e.onManifestParsed = function(t, e) {
                    var r = 2;
                    (e.audio && !e.video || !e.altAudio) && (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, this.details = null, l.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                }, e.onMediaAttaching = function(t, e) {
                    var r = this.media = e.media;
                    if (r && Ee) {
                        var i = this.mediaSource = new Ee;
                        i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(i), this._objectUrl = r.src
                    }
                }, e.onMediaDetaching = function() {
                    l.b.log("[buffer-controller]: media source detaching");
                    var t = this.media,
                        e = this.mediaSource,
                        r = this._objectUrl;
                    if (e) {
                        if ("open" === e.readyState) try {
                            e.endOfStream()
                        } catch (t) {
                            l.b.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                        }
                        this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (r && self.URL.revokeObjectURL(r), t.src === r ? (t.removeAttribute("src"), t.load()) : l.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                    }
                    this.hls.trigger(o.a.MEDIA_DETACHED, void 0)
                }, e.onBufferReset = function() {
                    var t = this,
                        e = this.sourceBuffer;
                    this.getSourceBufferTypes().forEach((function(r) {
                        var i = e[r];
                        try {
                            i && (t.removeBufferListeners(r), t.mediaSource && t.mediaSource.removeSourceBuffer(i), e[r] = void 0)
                        } catch (t) {
                            l.b.warn("[buffer-controller]: Failed to reset the " + r + " buffer", t)
                        }
                    })), this._initSourceBuffer()
                }, e.onBufferCodecs = function(t, e) {
                    var r = this,
                        i = Object.keys(this.sourceBuffer).length;
                    Object.keys(e).forEach((function(t) {
                        if (i) {
                            var a = r.tracks[t];
                            if (a && "function" == typeof a.buffer.changeType) {
                                var n = e[t],
                                    s = n.codec,
                                    o = n.levelCodec,
                                    l = n.container;
                                if ((a.levelCodec || a.codec).replace(be, "$1") !== (o || s).replace(be, "$1")) {
                                    var u = l + ";codecs=" + (o || s);
                                    r.appendChangeType(t, u)
                                }
                            }
                        } else r.pendingTracks[t] = e[t]
                    })), i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                }, e.appendChangeType = function(t, e) {
                    var r = this,
                        i = this.operationQueue,
                        a = {
                            execute: function() {
                                var a = r.sourceBuffer[t];
                                a && (l.b.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), a.changeType(e)), i.shiftAndExecuteNext(t)
                            },
                            onStart: function() {},
                            onComplete: function() {},
                            onError: function(e) {
                                l.b.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                            }
                        };
                    i.append(a, t)
                }, e.onBufferAppending = function(t, e) {
                    var r = this,
                        i = this.hls,
                        a = this.operationQueue,
                        s = this.tracks,
                        u = e.data,
                        d = e.type,
                        h = e.frag,
                        c = e.part,
                        f = e.chunkMeta,
                        g = f.buffering[d],
                        v = self.performance.now();
                    g.start = v;
                    var p = h.stats.buffering,
                        m = c ? c.stats.buffering : null;
                    0 === p.start && (p.start = v), m && 0 === m.start && (m.start = v);
                    var y = s.audio,
                        T = "audio" === d && 1 === f.id && "audio/mpeg" === (null == y ? void 0 : y.container),
                        E = {
                            execute: function() {
                                if (g.executeStart = self.performance.now(), T) {
                                    var t = r.sourceBuffer[d];
                                    if (t) {
                                        var e = h.start - t.timestampOffset;
                                        Math.abs(e) >= .1 && (l.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + h.start + " (delta: " + e + ") sn: " + h.sn + ")"), t.timestampOffset = h.start)
                                    }
                                }
                                r.appendExecutor(u, d)
                            },
                            onStart: function() {},
                            onComplete: function() {
                                var t = self.performance.now();
                                g.executeEnd = g.end = t, 0 === p.first && (p.first = t), m && 0 === m.first && (m.first = t);
                                var e = r.sourceBuffer,
                                    i = {};
                                for (var a in e) i[a] = B.getBuffered(e[a]);
                                r.appendError = 0, r.hls.trigger(o.a.BUFFER_APPENDED, {
                                    parent: h.type,
                                    timeRanges: i,
                                    frag: h,
                                    part: c,
                                    chunkMeta: f
                                })
                            },
                            onError: function(t) {
                                l.b.error("[buffer-controller]: Error encountered while trying to append to the " + d + " SourceBuffer", t);
                                var e = {
                                    type: n.b.MEDIA_ERROR,
                                    parent: h.type,
                                    details: n.a.BUFFER_APPEND_ERROR,
                                    err: t,
                                    fatal: !1
                                };
                                t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = n.a.BUFFER_FULL_ERROR : (r.appendError++, e.details = n.a.BUFFER_APPEND_ERROR, r.appendError > i.config.appendErrorMaxRetry && (l.b.log("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)), i.trigger(o.a.ERROR, e)
                            }
                        };
                    a.append(E, d)
                }, e.onBufferFlushing = function(t, e) {
                    var r = this,
                        i = this.operationQueue,
                        a = function(t) {
                            return {
                                execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                                onStart: function() {},
                                onComplete: function() {
                                    r.hls.trigger(o.a.BUFFER_FLUSHED, {
                                        type: t
                                    })
                                },
                                onError: function(e) {
                                    l.b.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                                }
                            }
                        };
                    e.type ? i.append(a(e.type), e.type) : (i.append(a("audio"), "audio"), i.append(a("video"), "video"))
                }, e.onFragParsed = function(t, e) {
                    var r = this,
                        i = e.frag,
                        a = e.part,
                        n = [],
                        s = a ? a.elementaryStreams : i.elementaryStreams;
                    s[d.a.AUDIOVIDEO] ? n.push("audiovideo") : (s[d.a.AUDIO] && n.push("audio"), s[d.a.VIDEO] && n.push("video"));
                    var u = function() {
                        var t = self.performance.now();
                        i.stats.buffering.end = t, a && (a.stats.buffering.end = t);
                        var e = a ? a.stats : i.stats;
                        r.hls.trigger(o.a.FRAG_BUFFERED, {
                            frag: i,
                            part: a,
                            stats: e,
                            id: i.type
                        })
                    };
                    if (0 === n.length) return l.b.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), void Promise.resolve(u);
                    this.blockBuffers(u, n), this.flushLiveBackBuffer()
                }, e.onBufferEos = function(t, e) {
                    var r = this;
                    for (var i in this.sourceBuffer)
                        if (!e.type || e.type === i) {
                            var a = this.sourceBuffer[i];
                            a && !a.ended && (a.ended = !0, l.b.log("[buffer-controller]: " + i + " sourceBuffer now EOS"))
                        } this.blockBuffers((function() {
                        var t = r.mediaSource;
                        t && "open" === t.readyState && t.endOfStream()
                    }))
                }, e.onLevelUpdated = function(t, e) {
                    var r = e.details;
                    r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                }, e.flushLiveBackBuffer = function() {
                    var t = this.hls,
                        e = this.details,
                        r = this.media,
                        i = this.sourceBuffer;
                    if (r && null !== e && !1 !== e.live) {
                        var a = t.config.liveBackBufferLength;
                        if (Object(s.a)(a) && !(a < 0)) {
                            var n = r.currentTime - Math.max(a, e.levelTargetDuration);
                            this.getSourceBufferTypes().forEach((function(e) {
                                var r = i[e];
                                if (r) {
                                    var a = B.getBuffered(r);
                                    a.length > 0 && n > a.start(0) && (t.trigger(o.a.LIVE_BACK_BUFFER_REACHED, {
                                        bufferEnd: n
                                    }), t.trigger(o.a.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: n,
                                        type: e
                                    }))
                                }
                            }))
                        }
                    }
                }, e.updateMediaElementDuration = function() {
                    if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                        var t = this.details,
                            e = this.hls,
                            r = this.media,
                            i = this.mediaSource,
                            a = t.fragments[0].start + t.totalduration,
                            n = r.duration,
                            o = Object(s.a)(i.duration) ? i.duration : 0;
                        t.live && e.config.liveDurationInfinity ? (l.b.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(t)) : (a > o && a > n || !Object(s.a)(n)) && (l.b.log("[buffer-controller]: Updating Media Source duration to " + a.toFixed(3)), i.duration = a)
                    }
                }, e.updateSeekableRange = function(t) {
                    var e = this.mediaSource,
                        r = t.fragments;
                    if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                        var i = Math.max(0, r[0].start),
                            a = Math.max(i, i + t.totalduration);
                        e.setLiveSeekableRange(i, a)
                    }
                }, e.checkPendingTracks = function() {
                    var t = this.bufferCodecEventsExpected,
                        e = this.operationQueue,
                        r = this.pendingTracks,
                        i = Object.keys(r).length;
                    (i && !t || 2 === i) && (this.createSourceBuffers(r), this.pendingTracks = {}, Object.keys(this.sourceBuffer).forEach((function(t) {
                        e.executeNext(t)
                    })))
                }, e.createSourceBuffers = function(t) {
                    var e = this.sourceBuffer,
                        r = this.mediaSource;
                    if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                    for (var i in t)
                        if (!e[i]) {
                            var a = t[i];
                            if (!a) throw Error("source buffer exists for track " + i + ", however track does not");
                            var s = a.levelCodec || a.codec,
                                u = a.container + ";codecs=" + s;
                            l.b.log("[buffer-controller]: creating sourceBuffer(" + u + ")");
                            try {
                                var d = e[i] = r.addSourceBuffer(u),
                                    h = i;
                                this.addBufferListener(h, "updatestart", this._onSBUpdateStart), this.addBufferListener(h, "updateend", this._onSBUpdateEnd), this.addBufferListener(h, "error", this._onSBUpdateError), this.tracks[i] = {
                                    buffer: d,
                                    codec: s,
                                    container: a.container,
                                    levelCodec: a.levelCodec,
                                    id: a.id
                                }
                            } catch (t) {
                                l.b.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(o.a.ERROR, {
                                    type: n.b.MEDIA_ERROR,
                                    details: n.a.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    error: t,
                                    mimeType: u
                                })
                            }
                        } this.hls.trigger(o.a.BUFFER_CREATED, {
                        tracks: this.tracks
                    })
                }, e._onSBUpdateStart = function(t) {
                    this.operationQueue.current(t).onStart()
                }, e._onSBUpdateEnd = function(t) {
                    var e = this.operationQueue;
                    e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                }, e._onSBUpdateError = function(t, e) {
                    l.b.error("[buffer-controller]: " + t + " SourceBuffer error", e), this.hls.trigger(o.a.ERROR, {
                        type: n.b.MEDIA_ERROR,
                        details: n.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    });
                    var r = this.operationQueue.current(t);
                    r && r.onError(e)
                }, e.removeExecutor = function(t, e, r) {
                    var i = this.media,
                        a = this.mediaSource,
                        n = this.operationQueue,
                        o = this.sourceBuffer[t];
                    if (!i || !a || !o) return l.b.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void n.shiftAndExecuteNext(t);
                    var u = Object(s.a)(i.duration) ? i.duration : 1 / 0,
                        d = Object(s.a)(a.duration) ? a.duration : 1 / 0,
                        h = Math.max(0, e),
                        c = Math.min(r, u, d);
                    c > h ? (l.b.log("[buffer-controller]: Removing [" + h + "," + c + "] from the " + t + " SourceBuffer"), o.remove(h, c)) : n.shiftAndExecuteNext(t)
                }, e.appendExecutor = function(t, e) {
                    var r = this.operationQueue,
                        i = this.sourceBuffer[e];
                    if (!i) return l.b.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void r.shiftAndExecuteNext(e);
                    i.ended = !1, i.appendBuffer(t)
                }, e.blockBuffers = function(t, e) {
                    var r = this;
                    if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return l.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve(t);
                    var i = this.operationQueue,
                        a = e.map((function(t) {
                            return i.appendBlocker(t)
                        }));
                    Promise.all(a).then((function() {
                        t(), e.forEach((function(t) {
                            var e = r.sourceBuffer[t];
                            e && e.updating || i.shiftAndExecuteNext(t)
                        }))
                    }))
                }, e.getSourceBufferTypes = function() {
                    return Object.keys(this.sourceBuffer)
                }, e.addBufferListener = function(t, e, r) {
                    var i = this.sourceBuffer[t];
                    if (i) {
                        var a = r.bind(this, t);
                        this.listeners[t].push({
                            event: e,
                            listener: a
                        }), i.addEventListener(e, a)
                    }
                }, e.removeBufferListeners = function(t) {
                    var e = this.sourceBuffer[t];
                    e && this.listeners[t].forEach((function(t) {
                        e.removeEventListener(t.event, t.listener)
                    }))
                }, t
            }(),
            Le = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            },
            Ae = function(t) {
                var e = t;
                return Le.hasOwnProperty(t) && (e = Le[t]), String.fromCharCode(e)
            },
            Re = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            },
            De = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            },
            _e = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            },
            ke = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            },
            Ie = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
        ! function(t) {
            t[t.ERROR = 0] = "ERROR", t[t.TEXT = 1] = "TEXT", t[t.WARNING = 2] = "WARNING", t[t.INFO = 2] = "INFO", t[t.DEBUG = 3] = "DEBUG", t[t.DATA = 3] = "DATA"
        }(me || (me = {}));
        var we = function() {
                function t() {
                    this.time = null, this.verboseLevel = me.ERROR
                }
                return t.prototype.log = function(t, e) {
                    this.verboseLevel >= t && l.b.log(this.time + " [" + t + "] " + e)
                }, t
            }(),
            Ce = function(t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                return e
            },
            Oe = function() {
                function t(t, e, r, i, a) {
                    this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = r || !1, this.background = i || "black", this.flash = a || !1
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, e.setStyles = function(t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var i = e[r];
                        t.hasOwnProperty(i) && (this[i] = t[i])
                    }
                }, e.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, e.equals = function(t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                }, e.copy = function(t) {
                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                }, e.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
            }(),
            xe = function() {
                function t(t, e, r, i, a, n) {
                    this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new Oe(e, r, i, a, n)
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.uchar = " ", this.penState.reset()
                }, e.setChar = function(t, e) {
                    this.uchar = t, this.penState.copy(e)
                }, e.setPenState = function(t) {
                    this.penState.copy(t)
                }, e.equals = function(t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, e.copy = function(t) {
                    this.uchar = t.uchar, this.penState.copy(t.penState)
                }, e.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(),
            Pe = function() {
                function t(t) {
                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                    for (var e = 0; e < 100; e++) this.chars.push(new xe);
                    this.logger = t, this.pos = 0, this.currPenState = new Oe
                }
                var e = t.prototype;
                return e.equals = function(t) {
                    for (var e = !0, r = 0; r < 100; r++)
                        if (!this.chars[r].equals(t.chars[r])) {
                            e = !1;
                            break
                        } return e
                }, e.copy = function(t) {
                    for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e])
                }, e.isEmpty = function() {
                    for (var t = !0, e = 0; e < 100; e++)
                        if (!this.chars[e].isEmpty()) {
                            t = !1;
                            break
                        } return t
                }, e.setCursor = function(t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(me.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(me.DEBUG, "Too large cursor position " + this.pos), this.pos = 100)
                }, e.moveCursor = function(t) {
                    var e = this.pos + t;
                    if (t > 1)
                        for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, e.backSpace = function() {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, e.insertChar = function(t) {
                    t >= 144 && this.backSpace();
                    var e = Ae(t);
                    this.pos >= 100 ? this.logger.log(me.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
                }, e.clearFromPos = function(t) {
                    var e;
                    for (e = t; e < 100; e++) this.chars[e].reset()
                }, e.clear = function() {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, e.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }, e.getTextString = function() {
                    for (var t = [], e = !0, r = 0; r < 100; r++) {
                        var i = this.chars[r].uchar;
                        " " !== i && (e = !1), t.push(i)
                    }
                    return e ? "" : t.join("")
                }, e.setPenStyles = function(t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(),
            Me = function() {
                function t(t) {
                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                    for (var e = 0; e < 15; e++) this.rows.push(new Pe(t));
                    this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                }
                var e = t.prototype;
                return e.reset = function() {
                    for (var t = 0; t < 15; t++) this.rows[t].clear();
                    this.currRow = 14
                }, e.equals = function(t) {
                    for (var e = !0, r = 0; r < 15; r++)
                        if (!this.rows[r].equals(t.rows[r])) {
                            e = !1;
                            break
                        } return e
                }, e.copy = function(t) {
                    for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
                }, e.isEmpty = function() {
                    for (var t = !0, e = 0; e < 15; e++)
                        if (!this.rows[e].isEmpty()) {
                            t = !1;
                            break
                        } return t
                }, e.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }, e.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }, e.insertChar = function(t) {
                    this.rows[this.currRow].insertChar(t)
                }, e.setPen = function(t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, e.moveCursor = function(t) {
                    this.rows[this.currRow].moveCursor(t)
                }, e.setCursor = function(t) {
                    this.logger.log(me.INFO, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                }, e.setPAC = function(t) {
                    this.logger.log(me.INFO, "pacData = " + JSON.stringify(t));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < 15; r++) this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows,
                            a = this.lastOutputScreen;
                        if (a) {
                            var n = a.rows[i].cueStartTime,
                                s = this.logger.time;
                            if (n && null !== s && n < s)
                                for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(a.rows[i + o])
                        }
                    }
                    this.currRow = e;
                    var l = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var u = t.indent,
                            d = Math.max(u - 1, 0);
                        l.setCursor(t.indent), t.color = l.chars[d].penState.foreground
                    }
                    var h = {
                        foreground: t.color,
                        underline: t.underline,
                        italics: t.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(h)
                }, e.setBkgData = function(t) {
                    this.logger.log(me.INFO, "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                }, e.setRollUpRows = function(t) {
                    this.nrRollUpRows = t
                }, e.rollUp = function() {
                    if (null !== this.nrRollUpRows) {
                        this.logger.log(me.TEXT, this.getDisplayText());
                        var t = this.currRow + 1 - this.nrRollUpRows,
                            e = this.rows.splice(t, 1)[0];
                        e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(me.INFO, "Rolling up")
                    } else this.logger.log(me.DEBUG, "roll_up but nrRollUpRows not set yet")
                }, e.getDisplayText = function(t) {
                    t = t || !1;
                    for (var e = [], r = "", i = -1, a = 0; a < 15; a++) {
                        var n = this.rows[a].getTextString();
                        n && (i = a + 1, t ? e.push("Row " + i + ": '" + n + "'") : e.push(n.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, e.getTextAndFormat = function() {
                    return this.rows
                }, t
            }(),
            Fe = function() {
                function t(t, e, r) {
                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Me(r), this.nonDisplayedMemory = new Me(r), this.lastOutputScreen = new Me(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
                }
                var e = t.prototype;
                return e.reset = function() {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }, e.getHandler = function() {
                    return this.outputFilter
                }, e.setHandler = function(t) {
                    this.outputFilter = t
                }, e.setPAC = function(t) {
                    this.writeScreen.setPAC(t)
                }, e.setBkgData = function(t) {
                    this.writeScreen.setBkgData(t)
                }, e.setMode = function(t) {
                    t !== this.mode && (this.mode = t, this.logger.log(me.INFO, "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, e.insertChars = function(t) {
                    for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    this.logger.log(me.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(me.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, e.ccRCL = function() {
                    this.logger.log(me.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, e.ccBS = function() {
                    this.logger.log(me.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, e.ccAOF = function() {}, e.ccAON = function() {}, e.ccDER = function() {
                    this.logger.log(me.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, e.ccRU = function(t) {
                    this.logger.log(me.INFO, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                }, e.ccFON = function() {
                    this.logger.log(me.INFO, "FON - Flash On"), this.writeScreen.setPen({
                        flash: !0
                    })
                }, e.ccRDC = function() {
                    this.logger.log(me.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, e.ccTR = function() {
                    this.logger.log(me.INFO, "TR"), this.setMode("MODE_TEXT")
                }, e.ccRTD = function() {
                    this.logger.log(me.INFO, "RTD"), this.setMode("MODE_TEXT")
                }, e.ccEDM = function() {
                    this.logger.log(me.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }, e.ccCR = function() {
                    this.logger.log(me.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }, e.ccENM = function() {
                    this.logger.log(me.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, e.ccEOC = function() {
                    if (this.logger.log(me.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var t = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(me.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }, e.ccTO = function(t) {
                    this.logger.log(me.INFO, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                }, e.ccMIDROW = function(t) {
                    var e = {
                        flash: !1
                    };
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                    else {
                        var r = Math.floor(t / 2) - 16;
                        e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                    }
                    this.logger.log(me.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                }, e.outputDataUpdate = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.logger.time;
                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, e.cueSplitAtTime = function(t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }();

        function Ne(t, e, r) {
            r.a = t, r.b = e
        }

        function Ue(t, e, r) {
            return r.a === t && r.b === e
        }
        var Be = function() {
                function t(t, e, r) {
                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                    var i = new we;
                    this.channels = [null, new Fe(t, e, i), new Fe(t + 1, r, i)], this.cmdHistory = {
                        a: null,
                        b: null
                    }, this.logger = i
                }
                var e = t.prototype;
                return e.getHandler = function(t) {
                    return this.channels[t].getHandler()
                }, e.setHandler = function(t, e) {
                    this.channels[t].setHandler(e)
                }, e.addData = function(t, e) {
                    var r, i, a, n = !1;
                    this.logger.time = t;
                    for (var s = 0; s < e.length; s += 2)
                        if (i = 127 & e[s], a = 127 & e[s + 1], 0 !== i || 0 !== a) {
                            if (this.logger.log(me.DATA, "[" + Ce([e[s], e[s + 1]]) + "] -> (" + Ce([i, a]) + ")"), (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r && (n = this.parseChars(i, a))) {
                                var o = this.currentChannel;
                                if (o && o > 0) this.channels[o].insertChars(n);
                                else this.logger.log(me.WARNING, "No channel found yet. TEXT-MODE?")
                            }
                            r || n || this.logger.log(me.WARNING, "Couldn't parse cleaned data " + Ce([i, a]) + " orig: " + Ce([e[s], e[s + 1]]))
                        }
                }, e.parseCmd = function(t, e) {
                    var r = this.cmdHistory;
                    if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                    if (Ue(t, e, r)) return Ne(null, null, r), this.logger.log(me.DEBUG, "Repeated command (" + Ce([t, e]) + ") is dropped"), !0;
                    var i = 20 === t || 21 === t || 23 === t ? 1 : 2,
                        a = this.channels[i];
                    return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? a.ccRCL() : 33 === e ? a.ccBS() : 34 === e ? a.ccAOF() : 35 === e ? a.ccAON() : 36 === e ? a.ccDER() : 37 === e ? a.ccRU(2) : 38 === e ? a.ccRU(3) : 39 === e ? a.ccRU(4) : 40 === e ? a.ccFON() : 41 === e ? a.ccRDC() : 42 === e ? a.ccTR() : 43 === e ? a.ccRTD() : 44 === e ? a.ccEDM() : 45 === e ? a.ccCR() : 46 === e ? a.ccENM() : 47 === e && a.ccEOC() : a.ccTO(e - 32), Ne(t, e, r), this.currentChannel = i, !0
                }, e.parseMidrow = function(t, e) {
                    var r = 0;
                    if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                        if ((r = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(me.ERROR, "Mismatch channel in midrow parsing"), !1;
                        var i = this.channels[r];
                        return !!i && (i.ccMIDROW(e), this.logger.log(me.DEBUG, "MIDROW (" + Ce([t, e]) + ")"), !0)
                    }
                    return !1
                }, e.parsePAC = function(t, e) {
                    var r, i = this.cmdHistory;
                    if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127) && !((16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                    if (Ue(t, e, i)) return Ne(null, null, i), !0;
                    var a = t <= 23 ? 1 : 2;
                    r = e >= 64 && e <= 95 ? 1 === a ? Re[t] : _e[t] : 1 === a ? De[t] : ke[t];
                    var n = this.channels[a];
                    return !!n && (n.setPAC(this.interpretPAC(r, e)), Ne(t, e, i), this.currentChannel = a, !0)
                }, e.interpretPAC = function(t, e) {
                    var r = e,
                        i = {
                            color: null,
                            italics: !1,
                            indent: null,
                            underline: !1,
                            row: t
                        };
                    return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, e.parseChars = function(t, e) {
                    var r, i = null,
                        a = null;
                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19) {
                        var n = e;
                        n = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(me.INFO, "Special char '" + Ae(n) + "' in channel " + r), i = [n]
                    } else t >= 32 && t <= 127 && (i = 0 === e ? [t] : [t, e]);
                    if (i) {
                        var s = Ce(i);
                        this.logger.log(me.DEBUG, "Char codes =  " + s.join(",")), Ne(t, e, this.cmdHistory)
                    }
                    return i
                }, e.parseBackgroundAttributes = function(t, e) {
                    var r;
                    if (!((16 === t || 24 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
                    var i = {};
                    16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = Ie[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0));
                    var a = t <= 23 ? 1 : 2;
                    return this.channels[a].setBkgData(i), Ne(t, e, this.cmdHistory), !0
                }, e.reset = function() {
                    for (var t = 0; t < Object.keys(this.channels).length; t++) {
                        var e = this.channels[t];
                        e && e.reset()
                    }
                    this.cmdHistory = {
                        a: null,
                        b: null
                    }
                }, e.cueSplitAtTime = function(t) {
                    for (var e = 0; e < this.channels.length; e++) {
                        var r = this.channels[e];
                        r && r.cueSplitAtTime(t)
                    }
                }, t
            }(),
            Ge = function() {
                function t(t, e) {
                    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
                }
                var e = t.prototype;
                return e.dispatchCue = function() {
                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                }, e.newCue = function(t, e, r) {
                    (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                }, e.reset = function() {
                    this.cueRanges = []
                }, t
            }(),
            Ke = function() {
                if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
                var t = ["", "lr", "rl"],
                    e = ["start", "middle", "end", "left", "right"];

                function r(t, e) {
                    if ("string" != typeof e) return !1;
                    if (!Array.isArray(t)) return !1;
                    var r = e.toLowerCase();
                    return !!~t.indexOf(r) && r
                }

                function i(t) {
                    return r(e, t)
                }

                function a(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                    for (var a = 1; a < arguments.length; a++) {
                        var n = arguments[a];
                        for (var s in n) t[s] = n[s]
                    }
                    return t
                }

                function n(e, n, s) {
                    var o = this,
                        l = {
                            enumerable: !0
                        };
                    o.hasBeenReset = !1;
                    var u = "",
                        d = !1,
                        h = e,
                        c = n,
                        f = s,
                        g = null,
                        v = "",
                        p = !0,
                        m = "auto",
                        y = "start",
                        T = 50,
                        E = "middle",
                        b = 50,
                        S = "middle";
                    Object.defineProperty(o, "id", a({}, l, {
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            u = "" + t
                        }
                    })), Object.defineProperty(o, "pauseOnExit", a({}, l, {
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            d = !!t
                        }
                    })), Object.defineProperty(o, "startTime", a({}, l, {
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            h = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "endTime", a({}, l, {
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            c = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "text", a({}, l, {
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = "" + t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "region", a({}, l, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            g = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "vertical", a({}, l, {
                        get: function() {
                            return v
                        },
                        set: function(e) {
                            var i = function(e) {
                                return r(t, e)
                            }(e);
                            if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                            v = i, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "snapToLines", a({}, l, {
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            p = !!t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "line", a({}, l, {
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "lineAlign", a({}, l, {
                        get: function() {
                            return y
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            y = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "position", a({}, l, {
                        get: function() {
                            return T
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            T = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "positionAlign", a({}, l, {
                        get: function() {
                            return E
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            E = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "size", a({}, l, {
                        get: function() {
                            return b
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            b = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(o, "align", a({}, l, {
                        get: function() {
                            return S
                        },
                        set: function(t) {
                            var e = i(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            S = e, this.hasBeenReset = !0
                        }
                    })), o.displayState = void 0
                }
                return n.prototype.getCueAsHTML = function() {
                    return self.WebVTT.convertCueToDOMTree(self, this.text)
                }, n
            }(),
            je = function() {
                function t() {}
                return t.prototype.decode = function(t, e) {
                    if (!t) return "";
                    if ("string" != typeof t) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }, t
            }();

        function He(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
            }
            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
        }
        var Ve = function() {
            function t() {
                this.values = Object.create(null)
            }
            var e = t.prototype;
            return e.set = function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }, e.get = function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }, e.has = function(t) {
                return t in this.values
            }, e.alt = function(t, e, r) {
                for (var i = 0; i < r.length; ++i)
                    if (e === r[i]) {
                        this.set(t, e);
                        break
                    }
            }, e.integer = function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, e.percent = function(t, e) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                    var r = parseFloat(e);
                    if (r >= 0 && r <= 100) return this.set(t, r), !0
                }
                return !1
            }, t
        }();

        function Ye(t, e, r, i) {
            var a = i ? t.split(i) : [t];
            for (var n in a)
                if ("string" == typeof a[n]) {
                    var s = a[n].split(r);
                    if (2 === s.length) e(s[0], s[1])
                }
        }
        var We = new Ke(0, 0, ""),
            qe = "middle" === We.align ? "middle" : "center";

        function Xe(t, e, r) {
            var i = t;

            function a() {
                var e = He(t);
                if (null === e) throw new Error("Malformed timestamp: " + i);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function n() {
                t = t.replace(/^\s+/, "")
            }
            if (n(), e.startTime = a(), n(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            t = t.substr(3), n(), e.endTime = a(), n(),
                function(t, e) {
                    var i = new Ve;
                    Ye(t, (function(t, e) {
                        var a;
                        switch (t) {
                            case "region":
                                for (var n = r.length - 1; n >= 0; n--)
                                    if (r[n].id === e) {
                                        i.set(t, r[n].region);
                                        break
                                    } break;
                            case "vertical":
                                i.alt(t, e, ["rl", "lr"]);
                                break;
                            case "line":
                                a = e.split(","), i.integer(t, a[0]), i.percent(t, a[0]) && i.set("snapToLines", !1), i.alt(t, a[0], ["auto"]), 2 === a.length && i.alt("lineAlign", a[1], ["start", qe, "end"]);
                                break;
                            case "position":
                                a = e.split(","), i.percent(t, a[0]), 2 === a.length && i.alt("positionAlign", a[1], ["start", qe, "end", "line-left", "line-right", "auto"]);
                                break;
                            case "size":
                                i.percent(t, e);
                                break;
                            case "align":
                                i.alt(t, e, ["start", qe, "end", "left", "right"])
                        }
                    }), /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                    var a = i.get("line", "auto");
                    "auto" === a && -1 === We.line && (a = -1), e.line = a, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", qe);
                    var n = i.get("position", "auto");
                    "auto" === n && 50 === We.position && (n = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = n
                }(t, e)
        }

        function ze(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }
        var Qe = function() {
                function t() {
                    this.state = "INITIAL", this.buffer = "", this.decoder = new je, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
                }
                var e = t.prototype;
                return e.parse = function(t) {
                    var e = this;

                    function r() {
                        var t = e.buffer,
                            r = 0;
                        for (t = ze(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                        var i = t.substr(0, r);
                        return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.substr(r), i
                    }
                    t && (e.buffer += e.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        var i = "";
                        if ("INITIAL" === e.state) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            var a = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
                            e.state = "HEADER"
                        }
                        for (var n = !1; e.buffer;) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            switch (n ? n = !1 : i = r(), e.state) {
                                case "HEADER":
                                    /:/.test(i) ? Ye(i, (function(t, e) {}), /:/) : i || (e.state = "ID");
                                    continue;
                                case "NOTE":
                                    i || (e.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(i)) {
                                        e.state = "NOTE";
                                        break
                                    }
                                    if (!i) continue;
                                    if (e.cue = new Ke(0, 0, ""), e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                        e.cue.id = i;
                                        continue
                                    }
                                    case "CUE":
                                        if (!e.cue) {
                                            e.state = "BADCUE";
                                            continue
                                        }
                                        try {
                                            Xe(i, e.cue, e.regionList)
                                        } catch (t) {
                                            e.cue = null, e.state = "BADCUE";
                                            continue
                                        }
                                        e.state = "CUETEXT";
                                        continue;
                                    case "CUETEXT":
                                        var s = -1 !== i.indexOf("--\x3e");
                                        if (!i || s && (n = !0)) {
                                            e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                            continue
                                        }
                                        if (null === e.cue) continue;
                                        e.cue.text && (e.cue.text += "\n"), e.cue.text += i;
                                        continue;
                                    case "BADCUE":
                                        i || (e.state = "ID")
                            }
                        }
                    } catch (t) {
                        "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                }, e.flush = function() {
                    try {
                        if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw new Error("Malformed WebVTT signature.")
                    } catch (t) {
                        this.onparsingerror && this.onparsingerror(t)
                    }
                    return this.onflush && this.onflush(), this
                }, t
            }(),
            $e = r(6),
            Je = r(7),
            Ze = r(15),
            tr = /\r\n|\n\r|\n|\r/g,
            er = function(t, e, r) {
                return void 0 === r && (r = 0), t.substr(r, e.length) === e
            },
            rr = function(t) {
                for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
                return (e >>> 0).toString()
            };

        function ir(t, e, r) {
            return rr(t.toString()) + rr(e.toString()) + rr(r)
        }

        function ar(t, e, r, i, a, n, o, l) {
            var u, d = new Qe,
                h = Object($e.f)(new Uint8Array(t)).trim().replace(tr, "\n").split("\n"),
                c = [],
                f = Object(Je.a)(e, r),
                g = "00:00.000",
                v = 0,
                p = 0,
                m = !0,
                y = !1;
            d.oncue = function(t) {
                var e = i[a],
                    r = i.ccOffset,
                    s = (v - f) / 9e4;
                if (null != e && e.new && (void 0 !== p ? r = i.ccOffset = e.start : function(t, e, r) {
                        var i = t[e],
                            a = t[i.prevCC];
                        if (!a || !a.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void(i.new = !1);
                        for (; null !== (n = a) && void 0 !== n && n.new;) {
                            var n;
                            t.ccOffset += i.start - a.start, i.new = !1, a = t[(i = a).prevCC]
                        }
                        t.presentationOffset = r
                    }(i, a, s)), s && (r = s - i.presentationOffset), y) {
                    var o = t.endTime - t.startTime,
                        l = Object(Ze.a)(9e4 * (t.startTime + r - p), 9e4 * n) / 9e4;
                    t.startTime = l, t.endTime = l + o
                }
                var u = t.text.trim();
                t.text = decodeURIComponent(encodeURIComponent(u)), t.id || (t.id = ir(t.startTime, t.endTime, u)), t.endTime > 0 && c.push(t)
            }, d.onparsingerror = function(t) {
                u = t
            }, d.onflush = function() {
                u && l ? l(u) : o(c)
            }, h.forEach((function(t) {
                if (m) {
                    if (er(t, "X-TIMESTAMP-MAP=")) {
                        m = !1, y = !0, t.substr(16).split(",").forEach((function(t) {
                            er(t, "LOCAL:") ? g = t.substr(6) : er(t, "MPEGTS:") && (v = parseInt(t.substr(7)))
                        }));
                        try {
                            p = function(t) {
                                var e = parseInt(t.substr(-3)),
                                    r = parseInt(t.substr(-6, 2)),
                                    i = parseInt(t.substr(-9, 2)),
                                    a = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                                if (!(Object(s.a)(e) && Object(s.a)(r) && Object(s.a)(i) && Object(s.a)(a))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                return e += 1e3 * r, e += 6e4 * i, e += 36e5 * a
                            }(g) / 1e3
                        } catch (t) {
                            y = !1, u = t
                        }
                        return
                    }
                    "" === t && (m = !1)
                }
                d.parse(t + "\n")
            })), d.flush()
        }

        function nr() {
            return (nr = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }
        var sr = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            or = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/;

        function lr(t, e, r, i, a) {
            var n = Object(u.b)(new Uint8Array(t), ["mdat"]);
            if (0 !== n.length) {
                var s = n[0],
                    o = Object($e.f)(new Uint8Array(t, s.start, s.end - s.start)),
                    l = Object(Je.c)(e, 1, r);
                try {
                    i(function(t, e) {
                        var r = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                        if (!r) throw new Error("Invalid ttml");
                        var i = {
                                frameRate: 30,
                                subFrameRate: 1,
                                frameRateMultiplier: 0,
                                tickRate: 0
                            },
                            a = Object.keys(i).reduce((function(t, e) {
                                return t[e] = r.getAttribute("ttp:" + e) || i[e], t
                            }), {}),
                            n = "preserve" !== r.getAttribute("xml:space"),
                            s = dr(ur(r, "styling", "style")),
                            o = dr(ur(r, "layout", "region")),
                            l = ur(r, "body", "[begin]");
                        return [].map.call(l, (function(t) {
                            var r = function t(e, r) {
                                return [].slice.call(e.childNodes).reduce((function(e, i, a) {
                                    var n;
                                    return "br" === i.nodeName && a ? e + "\n" : null !== (n = i.childNodes) && void 0 !== n && n.length ? t(i, r) : r ? e + i.textContent.trim().replace(/\s+/g, " ") : e + i.textContent
                                }), "")
                            }(t, n);
                            if (!r || !t.hasAttribute("begin")) return null;
                            var i = fr(t.getAttribute("begin"), a),
                                l = fr(t.getAttribute("dur"), a),
                                u = fr(t.getAttribute("end"), a);
                            if (null === i) throw cr(t);
                            if (null === u) {
                                if (null === l) throw cr(t);
                                u = i + l
                            }
                            var d = new Ke(i - e, u - e, r);
                            d.id = ir(d.startTime, d.endTime, d.text);
                            var h = o[t.getAttribute("region")],
                                c = s[t.getAttribute("style")];
                            d.position = 10, d.size = 80;
                            var f = function(t, e) {
                                    var r = "http://www.w3.org/ns/ttml#styling";
                                    return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function(i, a) {
                                        var n = hr(e, r, a) || hr(t, r, a);
                                        return n && (i[a] = n), i
                                    }), {})
                                }(h, c),
                                g = f.textAlign;
                            return g && (d.lineAlign = {
                                left: "start",
                                center: "center",
                                right: "end",
                                start: "start",
                                end: "end"
                            } [g], d.align = g), nr(d, f), d
                        })).filter((function(t) {
                            return null !== t
                        }))
                    }(o, l))
                } catch (t) {
                    a(t)
                }
            } else a(new Error("Could not parse IMSC1 mdat"))
        }

        function ur(t, e, r) {
            var i = t.getElementsByTagName(e)[0];
            return i ? [].slice.call(i.querySelectorAll(r)) : []
        }

        function dr(t) {
            return t.reduce((function(t, e) {
                var r = e.getAttribute("xml:id");
                return r && (t[r] = e), t
            }), {})
        }

        function hr(t, e, r) {
            return t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
        }

        function cr(t) {
            return new Error("Could not parse ttml timestamp " + t)
        }

        function fr(t, e) {
            if (!t) return null;
            var r = He(t);
            return null === r && (sr.test(t) ? r = function(t, e) {
                var r = sr.exec(t),
                    i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
            }(t, e) : or.test(t) && (r = function(t, e) {
                var r = or.exec(t),
                    i = Number(r[1]);
                switch (r[2]) {
                    case "h":
                        return 3600 * i;
                    case "m":
                        return 60 * i;
                    case "ms":
                        return 1e3 * i;
                    case "f":
                        return i / e.frameRate;
                    case "t":
                        return i / e.tickRate
                }
                return i
            }(t, e))), r
        }
        var gr = function() {
            function t(t) {
                if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0,
                        0: {
                            start: 0,
                            prevCC: -1,
                            new: !1
                        }
                    }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                        textTrack1: {
                            label: this.config.captionsTextTrack1Label,
                            languageCode: this.config.captionsTextTrack1LanguageCode
                        },
                        textTrack2: {
                            label: this.config.captionsTextTrack2Label,
                            languageCode: this.config.captionsTextTrack2LanguageCode
                        },
                        textTrack3: {
                            label: this.config.captionsTextTrack3Label,
                            languageCode: this.config.captionsTextTrack3LanguageCode
                        },
                        textTrack4: {
                            label: this.config.captionsTextTrack4Label,
                            languageCode: this.config.captionsTextTrack4LanguageCode
                        }
                    }, this.config.enableCEA708Captions) {
                    var e = new Ge(this, "textTrack1"),
                        r = new Ge(this, "textTrack2"),
                        i = new Ge(this, "textTrack3"),
                        a = new Ge(this, "textTrack4");
                    this.cea608Parser1 = new Be(1, e, r), this.cea608Parser2 = new Be(3, i, a)
                }
                this._registerListeners()
            }
            var e = t.prototype;
            return e._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(o.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(o.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(o.a.FRAG_LOADING, this.onFragLoading, this), t.on(o.a.FRAG_LOADED, this.onFragLoaded, this), t.on(o.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(o.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(o.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(o.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }, e._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(o.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(o.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(o.a.FRAG_LOADING, this.onFragLoading, this), t.off(o.a.FRAG_LOADED, this.onFragLoaded, this), t.off(o.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(o.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(o.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(o.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }, e.addCues = function(t, e, r, i, a) {
                for (var n, s, l, u, d = !1, h = a.length; h--;) {
                    var c = a[h],
                        f = (n = c[0], s = c[1], l = e, u = r, Math.min(s, u) - Math.max(n, l));
                    if (f >= 0 && (c[0] = Math.min(c[0], e), c[1] = Math.max(c[1], r), d = !0, f / (r - e) > .5)) return
                }
                if (d || a.push([e, r]), this.config.renderTextTracksNatively) {
                    var g = this.captionsTracks[t];
                    this.Cues.newCue(g, e, r, i)
                } else {
                    var v = this.Cues.newCue(null, e, r, i);
                    this.hls.trigger(o.a.CUES_PARSED, {
                        type: "captions",
                        cues: v,
                        track: t
                    })
                }
            }, e.onInitPtsFound = function(t, e) {
                var r = this,
                    i = e.frag,
                    a = e.id,
                    n = e.initPTS,
                    s = e.timescale,
                    l = this.unparsedVttFrags;
                "main" === a && (this.initPTS[i.cc] = n, this.timescale[i.cc] = s), l.length && (this.unparsedVttFrags = [], l.forEach((function(t) {
                    r.onFragLoaded(o.a.FRAG_LOADED, t)
                })))
            }, e.getExistingTrack = function(t) {
                var e = this.media;
                if (e)
                    for (var r = 0; r < e.textTracks.length; r++) {
                        var i = e.textTracks[r];
                        if (i[t]) return i
                    }
                return null
            }, e.createCaptionsTrack = function(t) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
            }, e.createNativeTrack = function(t) {
                if (!this.captionsTracks[t]) {
                    var e = this.captionsProperties,
                        r = this.captionsTracks,
                        i = this.media,
                        a = e[t],
                        n = a.label,
                        s = a.languageCode,
                        o = this.getExistingTrack(t);
                    if (o) r[t] = o, ce(r[t]), de(r[t], i);
                    else {
                        var l = this.createTextTrack("captions", n, s);
                        l && (l[t] = !0, r[t] = l)
                    }
                }
            }, e.createNonNativeTrack = function(t) {
                if (!this.nonNativeCaptionsTracks[t]) {
                    var e = this.captionsProperties[t];
                    if (e) {
                        var r = {
                            _id: t,
                            label: e.label,
                            kind: "captions",
                            default: !!e.media && !!e.media.default,
                            closedCaptions: e.media
                        };
                        this.nonNativeCaptionsTracks[t] = r, this.hls.trigger(o.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: [r]
                        })
                    }
                }
            }, e.createTextTrack = function(t, e, r) {
                var i = this.media;
                if (i) return i.addTextTrack(t, e, r)
            }, e.destroy = function() {
                this._unregisterListeners()
            }, e.onMediaAttaching = function(t, e) {
                this.media = e.media, this._cleanTracks()
            }, e.onMediaDetaching = function() {
                var t = this.captionsTracks;
                Object.keys(t).forEach((function(e) {
                    ce(t[e]), delete t[e]
                })), this.nonNativeCaptionsTracks = {}
            }, e.onManifestLoading = function() {
                this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {
                        start: 0,
                        prevCC: -1,
                        new: !1
                    }
                }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
            }, e._cleanTracks = function() {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e)
                        for (var r = 0; r < e.length; r++) ce(e[r])
                }
            }, e.onSubtitleTracksUpdated = function(t, e) {
                var r = this;
                this.textTracks = [];
                var i = e.subtitleTracks || [],
                    a = i.some((function(t) {
                        return "stpp.ttml.im1t" === t.textCodec
                    }));
                if (this.config.enableWebVTT || a && this.config.enableIMSC1) {
                    var n = this.tracks && i && this.tracks.length === i.length;
                    if (this.tracks = i || [], this.config.renderTextTracksNatively) {
                        var s = this.media ? this.media.textTracks : [];
                        this.tracks.forEach((function(t, e) {
                            var i;
                            if (e < s.length) {
                                for (var a = null, n = 0; n < s.length; n++)
                                    if (vr(s[n], t)) {
                                        a = s[n];
                                        break
                                    } a && (i = a)
                            }
                            i ? ce(i) : (i = r.createTextTrack("subtitles", t.name, t.lang)) && (i.mode = "disabled"), i && (i.groupId = t.groupId, r.textTracks.push(i))
                        }))
                    } else if (!n && this.tracks && this.tracks.length) {
                        var l = this.tracks.map((function(t) {
                            return {
                                label: t.name,
                                kind: t.type.toLowerCase(),
                                default: t.default,
                                subtitleTrack: t
                            }
                        }));
                        this.hls.trigger(o.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                            tracks: l
                        })
                    }
                }
            }, e.onManifestLoaded = function(t, e) {
                var r = this;
                this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(t) {
                    var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                    if (e) {
                        var i = "textTrack" + e[1],
                            a = r.captionsProperties[i];
                        a && (a.label = t.name, t.lang && (a.languageCode = t.lang), a.media = t)
                    }
                }))
            }, e.onFragLoading = function(t, e) {
                var r = this.cea608Parser1,
                    i = this.cea608Parser2,
                    a = this.lastSn;
                if (this.enabled && r && i && e.frag.type === E.MAIN) {
                    var n = e.frag.sn;
                    n !== a + 1 && r && i && (r.reset(), i.reset()), this.lastSn = n
                }
            }, e.onFragLoaded = function(t, e) {
                var r = e.frag,
                    i = e.payload,
                    a = this.initPTS,
                    n = this.unparsedVttFrags;
                if (r.type === E.SUBTITLE)
                    if (i.byteLength) {
                        if (!Object(s.a)(a[r.cc])) return n.push(e), void(a.length && this.hls.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: r,
                            error: new Error("Missing initial subtitle PTS")
                        }));
                        var l = r.decryptdata;
                        if (null == l || null == l.key || "AES-128" !== l.method) {
                            var u = this.tracks[r.level],
                                d = this.vttCCs;
                            d[r.cc] || (d[r.cc] = {
                                start: r.start,
                                prevCC: this.prevCC,
                                new: !0
                            }, this.prevCC = r.cc), u && "stpp.ttml.im1t" === u.textCodec ? this._parseIMSC1(r, i) : this._parseVTTs(r, i, d)
                        }
                    } else this.hls.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: r,
                        error: new Error("Empty subtitle payload")
                    })
            }, e._parseIMSC1 = function(t, e) {
                var r = this,
                    i = this.hls;
                lr(e, this.initPTS[t.cc], this.timescale[t.cc], (function(e) {
                    r._appendCues(e, t.level), i.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: t
                    })
                }), (function(e) {
                    l.b.log("Failed to parse IMSC1: " + e), i.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: e
                    })
                }))
            }, e._parseVTTs = function(t, e, r) {
                var i = this,
                    a = this.hls;
                ar(e, this.initPTS[t.cc], this.timescale[t.cc], r, t.cc, t.start, (function(e) {
                    i._appendCues(e, t.level), a.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !0,
                        frag: t
                    })
                }), (function(r) {
                    i._fallbackToIMSC1(t, e), l.b.log("Failed to parse VTT cue: " + r), a.trigger(o.a.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: r
                    })
                }))
            }, e._fallbackToIMSC1 = function(t, e) {
                var r = this,
                    i = this.tracks[t.level];
                i.textCodec || lr(e, this.initPTS[t.cc], this.timescale[t.cc], (function() {
                    i.textCodec = "stpp.ttml.im1t", r._parseIMSC1(t, e)
                }), (function() {
                    i.textCodec = "wvtt"
                }))
            }, e._appendCues = function(t, e) {
                var r = this.hls;
                if (this.config.renderTextTracksNatively) {
                    var i = this.textTracks[e];
                    if ("disabled" === i.mode) return;
                    t.forEach((function(t) {
                        return he(i, t)
                    }))
                } else {
                    var a = this.tracks[e].default ? "default" : "subtitles" + e;
                    r.trigger(o.a.CUES_PARSED, {
                        type: "subtitles",
                        cues: t,
                        track: a
                    })
                }
            }, e.onFragDecrypted = function(t, e) {
                var r = e.frag;
                if (r.type === E.SUBTITLE) {
                    if (!Object(s.a)(this.initPTS[r.cc])) return void this.unparsedVttFrags.push(e);
                    this.onFragLoaded(o.a.FRAG_LOADED, e)
                }
            }, e.onSubtitleTracksCleared = function() {
                this.tracks = [], this.captionsTracks = {}
            }, e.onFragParsingUserdata = function(t, e) {
                var r = this.cea608Parser1,
                    i = this.cea608Parser2;
                if (this.enabled && r && i)
                    for (var a = 0; a < e.samples.length; a++) {
                        var n = e.samples[a].bytes;
                        if (n) {
                            var s = this.extractCea608Data(n);
                            r.addData(e.samples[a].pts, s[0]), i.addData(e.samples[a].pts, s[1])
                        }
                    }
            }, e.onBufferFlushing = function(t, e) {
                var r = e.startOffset,
                    i = e.endOffset,
                    a = e.type;
                if (!a || "video" === a) {
                    var n = this.media;
                    if (!n || n.currentTime < i) return;
                    var s = this.captionsTracks;
                    Object.keys(s).forEach((function(t) {
                        return fe(s[t], r, i)
                    }))
                }
            }, e.extractCea608Data = function(t) {
                for (var e = 31 & t[0], r = 2, i = [
                        [],
                        []
                    ], a = 0; a < e; a++) {
                    var n = t[r++],
                        s = 127 & t[r++],
                        o = 127 & t[r++],
                        l = 3 & n;
                    0 === s && 0 === o || 0 != (4 & n) && (0 !== l && 1 !== l || (i[l].push(s), i[l].push(o)))
                }
                return i
            }, t
        }();

        function vr(t, e) {
            return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }

        function pr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var mr, yr = function() {
                function t(t) {
                    this.autoLevelCapping = void 0, this.firstLevel = void 0, this.levels = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = [], this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
                }
                var e, r, i, a = t.prototype;
                return a.setStreamController = function(t) {
                    this.streamController = t
                }, a.destroy = function() {
                    this.unregisterListener(), this.hls.config.capLevelToPlayerSize && (this.media = null, this.clientRect = null, this.stopCapping())
                }, a.registerListeners = function() {
                    var t = this.hls;
                    t.on(o.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(o.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(o.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this)
                }, a.unregisterListener = function() {
                    var t = this.hls;
                    t.off(o.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(o.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(o.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this)
                }, a.onFpsDropLevelCapping = function(e, r) {
                    t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r.droppedLevel)
                }, a.onMediaAttaching = function(t, e) {
                    this.media = e.media instanceof HTMLVideoElement ? e.media : null
                }, a.onManifestParsed = function(t, e) {
                    var r = this.hls;
                    this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping()
                }, a.onBufferCodecs = function(t, e) {
                    this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                }, a.onLevelsUpdated = function(t, e) {
                    this.levels = e.levels
                }, a.onMediaDetaching = function() {
                    this.stopCapping()
                }, a.detectPlayerSize = function() {
                    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                        var t = this.levels ? this.levels.length : 0;
                        if (t) {
                            var e = this.hls;
                            e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                        }
                    }
                }, a.getMaxLevel = function(e) {
                    var r = this;
                    if (!this.levels) return -1;
                    var i = this.levels.filter((function(i, a) {
                        return t.isLevelAllowed(a, r.restrictedLevels) && a <= e
                    }));
                    return this.clientRect = null, t.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
                }, a.startCapping = function() {
                    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                }, a.stopCapping = function() {
                    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                }, a.getDimensions = function() {
                    if (this.clientRect) return this.clientRect;
                    var t = this.media,
                        e = {
                            width: 0,
                            height: 0
                        };
                    if (t) {
                        var r = t.getBoundingClientRect();
                        e.width = r.width, e.height = r.height, e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0)
                    }
                    return this.clientRect = e, e
                }, t.isLevelAllowed = function(t, e) {
                    return void 0 === e && (e = []), -1 === e.indexOf(t)
                }, t.getMaxLevelByMediaSize = function(t, e, r) {
                    if (!t || t && !t.length) return -1;
                    for (var i, a, n = t.length - 1, s = 0; s < t.length; s += 1) {
                        var o = t[s];
                        if ((o.width >= e || o.height >= r) && (i = o, !(a = t[s + 1]) || i.width !== a.width || i.height !== a.height)) {
                            n = s;
                            break
                        }
                    }
                    return n
                }, e = t, i = [{
                    key: "contentScaleFactor",
                    get: function() {
                        var t = 1;
                        try {
                            t = self.devicePixelRatio
                        } catch (t) {}
                        return t
                    }
                }], (r = [{
                    key: "mediaWidth",
                    get: function() {
                        return this.getDimensions().width * t.contentScaleFactor
                    }
                }, {
                    key: "mediaHeight",
                    get: function() {
                        return this.getDimensions().height * t.contentScaleFactor
                    }
                }]) && pr(e.prototype, r), i && pr(e, i), t
            }(),
            Tr = function() {
                function t(t) {
                    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
                }
                var e = t.prototype;
                return e.setStreamController = function(t) {
                    this.streamController = t
                }, e.registerListeners = function() {
                    this.hls.on(o.a.MEDIA_ATTACHING, this.onMediaAttaching, this)
                }, e.unregisterListeners = function() {
                    this.hls.off(o.a.MEDIA_ATTACHING, this.onMediaAttaching)
                }, e.destroy = function() {
                    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
                }, e.onMediaAttaching = function(t, e) {
                    var r = this.hls.config;
                    if (r.capLevelOnFPSDrop) {
                        var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                        this.media = i, i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setTimeout(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                    }
                }, e.checkFPS = function(t, e, r) {
                    var i = performance.now();
                    if (e) {
                        if (this.lastTime) {
                            var a = i - this.lastTime,
                                n = r - this.lastDroppedFrames,
                                s = e - this.lastDecodedFrames,
                                u = 1e3 * n / a,
                                d = this.hls;
                            if (d.trigger(o.a.FPS_DROP, {
                                    currentDropped: n,
                                    currentDecoded: s,
                                    totalDroppedFrames: r
                                }), u > 0 && n > d.config.fpsDroppedMonitoringThreshold * s) {
                                var h = d.currentLevel;
                                l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (-1 === d.autoLevelCapping || d.autoLevelCapping >= h) && (h -= 1, d.trigger(o.a.FPS_DROP_LEVEL_CAPPING, {
                                    level: h,
                                    droppedLevel: d.currentLevel
                                }), d.autoLevelCapping = h, this.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                    }
                }, e.checkFPSInterval = function() {
                    var t = this.media;
                    if (t)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality();
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                        } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                }, t
            }();
        ! function(t) {
            t.WIDEVINE = "com.widevine.alpha", t.PLAYREADY = "com.microsoft.playready"
        }(mr || (mr = {}));
        var Er = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

        function br(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Sr = function() {
                function t(t) {
                    var e = this;
                    this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = function(t) {
                        if (l.b.log('Media is encrypted using "' + t.initDataType + '" init data type'), !e.mediaKeysPromise) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void e.hls.trigger(o.a.ERROR, {
                            type: n.b.KEY_SYSTEM_ERROR,
                            details: n.a.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                        var r = function(r) {
                            e._media && (e._attemptSetMediaKeys(r), e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                        };
                        e.mediaKeysPromise.then(r).catch(r)
                    }, this.hls = t, this._config = t.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
                }
                var e, r, i, a = t.prototype;
                return a.destroy = function() {
                    this._unregisterListeners()
                }, a._registerListeners = function() {
                    this.hls.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(o.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(o.a.MANIFEST_PARSED, this.onManifestParsed, this)
                }, a._unregisterListeners = function() {
                    this.hls.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(o.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(o.a.MANIFEST_PARSED, this.onManifestParsed, this)
                }, a.getLicenseServerUrl = function(t) {
                    switch (t) {
                        case mr.WIDEVINE:
                            if (!this._widevineLicenseUrl) break;
                            return this._widevineLicenseUrl
                    }
                    throw new Error('no license server URL configured for key-system "' + t + '"')
                }, a._attemptKeySystemAccess = function(t, e, r) {
                    var i = this,
                        a = function(t, e, r, i) {
                            switch (t) {
                                case mr.WIDEVINE:
                                    return function(t, e, r) {
                                        var i = {
                                            audioCapabilities: [],
                                            videoCapabilities: []
                                        };
                                        return t.forEach((function(t) {
                                            i.audioCapabilities.push({
                                                contentType: 'audio/mp4; codecs="' + t + '"',
                                                robustness: r.audioRobustness || ""
                                            })
                                        })), e.forEach((function(t) {
                                            i.videoCapabilities.push({
                                                contentType: 'video/mp4; codecs="' + t + '"',
                                                robustness: r.videoRobustness || ""
                                            })
                                        })), [i]
                                    }(e, r, i);
                                default:
                                    throw new Error("Unknown key-system: " + t)
                            }
                        }(t, e, r, this._drmSystemOptions);
                    l.b.log("Requesting encrypted media key-system access");
                    var n = this.requestMediaKeySystemAccess(t, a);
                    this.mediaKeysPromise = n.then((function(e) {
                        return i._onMediaKeySystemAccessObtained(t, e)
                    })), n.catch((function(e) {
                        l.b.error('Failed to obtain key-system "' + t + '" access:', e)
                    }))
                }, a._onMediaKeySystemAccessObtained = function(t, e) {
                    var r = this;
                    l.b.log('Access for key-system "' + t + '" obtained');
                    var i = {
                        mediaKeysSessionInitialized: !1,
                        mediaKeySystemAccess: e,
                        mediaKeySystemDomain: t
                    };
                    this._mediaKeysList.push(i);
                    var a = Promise.resolve().then((function() {
                        return e.createMediaKeys()
                    })).then((function(e) {
                        return i.mediaKeys = e, l.b.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated(), e
                    }));
                    return a.catch((function(t) {
                        l.b.error("Failed to create media-keys:", t)
                    })), a
                }, a._onMediaKeysCreated = function() {
                    var t = this;
                    this._mediaKeysList.forEach((function(e) {
                        e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                    }))
                }, a._onNewMediaKeySession = function(t) {
                    var e = this;
                    l.b.log("New key-system session " + t.sessionId), t.addEventListener("message", (function(r) {
                        e._onKeySessionMessage(t, r.message)
                    }), !1)
                }, a._onKeySessionMessage = function(t, e) {
                    l.b.log("Got EME message event, creating license request"), this._requestLicense(e, (function(e) {
                        l.b.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e)
                    }))
                }, a._attemptSetMediaKeys = function(t) {
                    if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                    if (!this._hasSetMediaKeys) {
                        var e = this._mediaKeysList[0];
                        if (!e || !e.mediaKeys) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(o.a.ERROR, {
                            type: n.b.KEY_SYSTEM_ERROR,
                            details: n.a.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                        l.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                    }
                }, a._generateRequestWithPreferredKeySession = function(t, e) {
                    var r = this,
                        i = this._mediaKeysList[0];
                    if (!i) return l.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(o.a.ERROR, {
                        type: n.b.KEY_SYSTEM_ERROR,
                        details: n.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    if (i.mediaKeysSessionInitialized) l.b.warn("Key-Session already initialized but requested again");
                    else {
                        var a = i.mediaKeysSession;
                        if (!a) return l.b.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(o.a.ERROR, {
                            type: n.b.KEY_SYSTEM_ERROR,
                            details: n.a.KEY_SYSTEM_NO_SESSION,
                            fatal: !0
                        });
                        if (!e) return l.b.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(o.a.ERROR, {
                            type: n.b.KEY_SYSTEM_ERROR,
                            details: n.a.KEY_SYSTEM_NO_INIT_DATA,
                            fatal: !0
                        });
                        l.b.log('Generating key-session request for "' + t + '" init data type'), i.mediaKeysSessionInitialized = !0, a.generateRequest(t, e).then((function() {
                            l.b.debug("Key-session generation succeeded")
                        })).catch((function(t) {
                            l.b.error("Error generating key-session request:", t), r.hls.trigger(o.a.ERROR, {
                                type: n.b.KEY_SYSTEM_ERROR,
                                details: n.a.KEY_SYSTEM_NO_SESSION,
                                fatal: !1
                            })
                        }))
                    }
                }, a._createLicenseXhr = function(t, e, r) {
                    var i = new XMLHttpRequest,
                        a = this._licenseXhrSetup;
                    try {
                        if (a) try {
                            a(i, t)
                        } catch (e) {
                            i.open("POST", t, !0), a(i, t)
                        }
                        i.readyState || i.open("POST", t, !0)
                    } catch (t) {
                        throw new Error("issue setting up KeySystem license XHR " + t)
                    }
                    return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r), i
                }, a._onLicenseRequestReadyStageChange = function(t, e, r, i) {
                    switch (t.readyState) {
                        case 4:
                            if (200 === t.status) this._requestLicenseFailureCount = 0, l.b.log("License request succeeded"), "arraybuffer" !== t.responseType && l.b.warn("xhr response type was not set to the expected arraybuffer for license request"), i(t.response);
                            else {
                                if (l.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(o.a.ERROR, {
                                    type: n.b.KEY_SYSTEM_ERROR,
                                    details: n.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                });
                                var a = 3 - this._requestLicenseFailureCount + 1;
                                l.b.warn("Retrying license request, " + a + " attempts left"), this._requestLicense(r, i)
                            }
                    }
                }, a._generateLicenseRequestChallenge = function(t, e) {
                    switch (t.mediaKeySystemDomain) {
                        case mr.WIDEVINE:
                            return e
                    }
                    throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
                }, a._requestLicense = function(t, e) {
                    l.b.log("Requesting content license for key-system");
                    var r = this._mediaKeysList[0];
                    if (!r) return l.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(o.a.ERROR, {
                        type: n.b.KEY_SYSTEM_ERROR,
                        details: n.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    try {
                        var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                            a = this._createLicenseXhr(i, t, e);
                        l.b.log("Sending license request to URL: " + i);
                        var s = this._generateLicenseRequestChallenge(r, t);
                        a.send(s)
                    } catch (t) {
                        l.b.error("Failure requesting DRM license: " + t), this.hls.trigger(o.a.ERROR, {
                            type: n.b.KEY_SYSTEM_ERROR,
                            details: n.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        })
                    }
                }, a.onMediaAttached = function(t, e) {
                    if (this._emeEnabled) {
                        var r = e.media;
                        this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted)
                    }
                }, a.onMediaDetached = function() {
                    var t = this._media,
                        e = this._mediaKeysList;
                    t && (t.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map((function(t) {
                        if (t.mediaKeysSession) return t.mediaKeysSession.close().catch((function() {}))
                    }))).then((function() {
                        return t.setMediaKeys(null)
                    })).catch((function() {})))
                }, a.onManifestParsed = function(t, e) {
                    if (this._emeEnabled) {
                        var r = e.levels.map((function(t) {
                                return t.audioCodec
                            })).filter((function(t) {
                                return !!t
                            })),
                            i = e.levels.map((function(t) {
                                return t.videoCodec
                            })).filter((function(t) {
                                return !!t
                            }));
                        this._attemptKeySystemAccess(mr.WIDEVINE, r, i)
                    }
                }, e = t, (r = [{
                    key: "requestMediaKeySystemAccess",
                    get: function() {
                        if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                        return this._requestMediaKeySystemAccess
                    }
                }]) && br(e.prototype, r), i && br(e, i), t
            }(),
            Lr = r(11),
            Ar = function() {
                function t(t) {
                    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t ? t.xhrSetup : null, this.stats = new Lr.a, this.retryDelay = 0
                }
                var e = t.prototype;
                return e.destroy = function() {
                    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
                }, e.abortInternal = function() {
                    var t = this.loader;
                    t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout)
                }, e.abort = function() {
                    var t;
                    this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                }, e.load = function(t, e, r) {
                    if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                    this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = r, this.retryDelay = e.retryDelay, this.loadInternal()
                }, e.loadInternal = function() {
                    var t = this.config,
                        e = this.context;
                    if (t) {
                        var r = this.loader = new self.XMLHttpRequest,
                            i = this.stats;
                        i.loading.first = 0, i.loaded = 0;
                        var a = this.xhrSetup;
                        try {
                            if (a) try {
                                a(r, e.url)
                            } catch (t) {
                                r.open("GET", e.url, !0), a(r, e.url)
                            }
                            r.readyState || r.open("GET", e.url, !0)
                        } catch (t) {
                            return void this.callbacks.onError({
                                code: r.status,
                                text: t.message
                            }, e, r)
                        }
                        e.rangeEnd && r.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), r.onreadystatechange = this.readystatechange.bind(this), r.onprogress = this.loadprogress.bind(this), r.responseType = e.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout), r.send()
                    }
                }, e.readystatechange = function() {
                    var t = this.context,
                        e = this.loader,
                        r = this.stats;
                    if (t && e) {
                        var i = e.readyState,
                            a = this.config;
                        if (!r.aborted && i >= 2)
                            if (self.clearTimeout(this.requestTimeout), 0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start)), 4 === i) {
                                var n = e.status;
                                if (n >= 200 && n < 300) {
                                    var s, o;
                                    r.loading.end = Math.max(self.performance.now(), r.loading.first), o = "arraybuffer" === t.responseType ? (s = e.response).byteLength : (s = e.responseText).length, r.loaded = r.total = o;
                                    var u = this.callbacks.onProgress;
                                    u && u(r, t, s, e);
                                    var d = {
                                        url: e.responseURL,
                                        data: s
                                    };
                                    this.callbacks.onSuccess(d, r, t, e)
                                } else r.retry >= a.maxRetry || n >= 400 && n < 499 ? (l.b.error(n + " while loading " + t.url), this.callbacks.onError({
                                    code: n,
                                    text: e.statusText
                                }, t, e)) : (l.b.warn(n + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), r.retry++)
                            } else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), a.timeout)
                    }
                }, e.loadtimeout = function() {
                    l.b.warn("timeout while loading " + this.context.url);
                    var t = this.callbacks;
                    t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
                }, e.loadprogress = function(t) {
                    var e = this.stats;
                    e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
                }, e.getResponseHeader = function(t) {
                    if (this.loader) try {
                        return this.loader.getResponseHeader(t)
                    } catch (t) {}
                    return null
                }, t
            }();

        function Rr(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (Rr = function(t) {
                if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                var r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return Dr(t, arguments, Ir(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), kr(i, t)
            })(t)
        }

        function Dr(t, e, r) {
            return (Dr = _r() ? Reflect.construct : function(t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var a = new(Function.bind.apply(t, i));
                return r && kr(a, r.prototype), a
            }).apply(null, arguments)
        }

        function _r() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }

        function kr(t, e) {
            return (kr = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Ir(t) {
            return (Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var wr = function() {
            function t(t) {
                this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Cr, this.controller = new self.AbortController, this.stats = new Lr.a
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.loader = this.callbacks = null, this.abortInternal()
            }, e.abortInternal = function() {
                this.stats.aborted = !0, this.controller.abort()
            }, e.abort = function() {
                var t;
                this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
            }, e.load = function(t, e, r) {
                var i = this,
                    a = this.stats;
                if (a.loading.start) throw new Error("Loader can only be used once.");
                a.loading.start = self.performance.now();
                var n = function(t, e) {
                        var r = {
                            method: "GET",
                            mode: "cors",
                            credentials: "same-origin",
                            signal: e
                        };
                        t.rangeEnd && (r.headers = new self.Headers({
                            Range: "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)
                        }));
                        return r
                    }(t, this.controller.signal),
                    o = r.onProgress,
                    l = "arraybuffer" === t.responseType,
                    u = l ? "byteLength" : "length";
                this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, n), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout((function() {
                    i.abortInternal(), r.onTimeout(a, t, i.response)
                }), e.timeout), self.fetch(this.request).then((function(r) {
                    if (i.response = i.loader = r, !r.ok) {
                        var n = r.status,
                            u = r.statusText;
                        throw new Or(u || "fetch, bad network response", n, r)
                    }
                    return a.loading.first = Math.max(self.performance.now(), a.loading.start), a.total = parseInt(r.headers.get("Content-Length") || "0"), o && Object(s.a)(e.highWaterMark) && i.loadProgressively(r, a, t, e.highWaterMark, o), l ? r.arrayBuffer() : r.text()
                })).then((function(n) {
                    var l = i.response;
                    self.clearTimeout(i.requestTimeout), a.loading.end = Math.max(self.performance.now(), a.loading.first), a.loaded = a.total = n[u];
                    var d = {
                        url: l.url,
                        data: n
                    };
                    o && !Object(s.a)(e.highWaterMark) && o(a, t, n, l), r.onSuccess(d, a, t, l)
                })).catch((function(e) {
                    if (self.clearTimeout(i.requestTimeout), !a.aborted) {
                        var n = e.code || 0;
                        r.onError({
                            code: n,
                            text: e.message
                        }, t, e.details)
                    }
                }))
            }, e.getResponseHeader = function(t) {
                if (this.response) try {
                    return this.response.headers.get(t)
                } catch (t) {}
                return null
            }, e.loadProgressively = function(t, e, r, i, a) {
                void 0 === i && (i = 0);
                var n = new te.a,
                    s = t.clone().body.getReader();
                ! function o() {
                    s.read().then((function(s) {
                        if (s.done) n.dataLength && a(e, r, n.flush(), t);
                        else {
                            var l = s.value,
                                u = l.length;
                            e.loaded += u, u < i || n.dataLength ? (n.push(l), n.dataLength >= i && a(e, r, n.flush(), t)) : a(e, r, l, t), o()
                        }
                    })).catch((function() {}))
                }()
            }, t
        }();

        function Cr(t, e) {
            return new self.Request(t.url, e)
        }
        var Or = function(t) {
                var e, r;

                function i(e, r, i) {
                    var a;
                    return (a = t.call(this, e) || this).code = void 0, a.details = void 0, a.code = r, a.details = i, a
                }
                return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, kr(e, r), i
            }(Rr(Error)),
            xr = wr,
            Pr = /\s/;

        function Mr(t, e, r, i) {
            for (var a, n, s, o, l, u = [], d = self.VTTCue || self.TextTrackCue, h = 0; h < i.rows.length; h++)
                if (s = !0, o = 0, l = "", !(a = i.rows[h]).isEmpty()) {
                    for (var c = 0; c < a.chars.length; c++) Pr.test(a.chars[c].uchar) && s ? o++ : (l += a.chars[c].uchar, s = !1);
                    a.cueStartTime = e, e === r && (r += 1e-4), o >= 16 ? o-- : o++;
                    var f = ze(l.trim()),
                        g = ir(e, r, f);
                    t && t.cues && t.cues.getCueById(g) || ((n = new d(e, r, f)).id = g, n.line = h + 1, n.align = "left", n.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(n))
                } return t && u.length && (u.sort((function(t, e) {
                return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
            })), u.forEach((function(e) {
                return he(t, e)
            }))), u
        }

        function Fr() {
            return (Fr = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Nr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, i)
            }
            return r
        }

        function Ur(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nr(Object(r), !0).forEach((function(e) {
                    Br(t, e, r[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }))
            }
            return t
        }

        function Br(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }
        var Gr = Ur(Ur({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            maxBufferSize: 6e7,
            maxBufferHole: .1,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: 1 / 0,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            startLevel: void 0,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: Ar,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            abrController: Zt,
            bufferController: Se,
            capLevelController: yr,
            fpsController: Tr,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: Er,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0
        }, {
            cueHandler: i,
            enableCEA708Captions: !0,
            enableWebVTT: !0,
            enableIMSC1: !0,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: !0
        }), {}, {
            subtitleStreamController: ue,
            subtitleTrackController: ye,
            timelineController: gr,
            audioStreamController: ie,
            audioTrackController: se,
            emeController: Sr
        });

        function Kr(t) {
            var e = t.loader;
            e !== xr && e !== Ar ? (l.b.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function() {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                    return new self.ReadableStream({}), !0
                } catch (t) {}
                return !1
            }() && (t.loader = xr, t.progressive = !0, t.enableSoftwareAES = !0, l.b.log("[config]: Progressive streaming enabled, using FetchLoader"))
        }
        var jr = function() {
            function t(t) {
                this.hls = void 0, this.id3Track = null, this.media = null, this.hls = t, this._registerListeners()
            }
            var e = t.prototype;
            return e.destroy = function() {
                this._unregisterListeners()
            }, e._registerListeners = function() {
                var t = this.hls;
                t.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(o.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }, e._unregisterListeners = function() {
                var t = this.hls;
                t.off(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(o.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(o.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }, e.onMediaAttached = function(t, e) {
                this.media = e.media
            }, e.onMediaDetaching = function() {
                this.id3Track && (ce(this.id3Track), this.id3Track = null, this.media = null)
            }, e.getID3Track = function(t) {
                if (this.media) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if ("metadata" === r.kind && "id3" === r.label) return de(r, this.media), r
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }
            }, e.onFragParsingMetadata = function(t, e) {
                if (this.media) {
                    var r = e.frag,
                        i = e.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                    for (var a = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, n = 0; n < i.length; n++) {
                        var s = $e.c(i[n].data);
                        if (s) {
                            var o = i[n].pts,
                                l = n < i.length - 1 ? i[n + 1].pts : r.end;
                            l - o <= 0 && (l = o + .25);
                            for (var u = 0; u < s.length; u++) {
                                var d = s[u];
                                if (!$e.e(d)) {
                                    var h = new a(o, l, "");
                                    h.value = d, this.id3Track.addCue(h)
                                }
                            }
                        }
                    }
                }
            }, e.onBufferFlushing = function(t, e) {
                var r = e.startOffset,
                    i = e.endOffset,
                    a = e.type;
                if (!a || "audio" === a) {
                    var n = this.id3Track;
                    n && fe(n, r, i)
                }
            }, t
        }();

        function Hr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Vr = function() {
            function t(t) {
                var e = this;
                this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
                    return e.timeupdate()
                }, this.hls = t, this.config = t.config, this.registerListeners()
            }
            var e, r, i, a = t.prototype;
            return a.destroy = function() {
                this.unregisterListeners(), this.onMediaDetaching()
            }, a.registerListeners = function() {
                this.hls.on(o.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(o.a.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(o.a.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(o.a.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(o.a.ERROR, this.onError, this)
            }, a.unregisterListeners = function() {
                this.hls.off(o.a.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(o.a.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(o.a.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(o.a.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(o.a.ERROR, this.onError)
            }, a.onMediaAttached = function(t, e) {
                this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
            }, a.onMediaDetaching = function() {
                this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
            }, a.onManifestLoading = function() {
                this.levelDetails = null, this._latency = null, this.stallCount = 0
            }, a.onLevelUpdated = function(t, e) {
                var r = e.details;
                this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
            }, a.onError = function(t, e) {
                e.details === n.a.BUFFER_STALLED_ERROR && (this.stallCount++, l.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
            }, a.timeupdate = function() {
                var t = this.media,
                    e = this.levelDetails;
                if (t && e) {
                    this.currentTime = t.currentTime;
                    var r = this.computeLatency();
                    if (null !== r) {
                        this._latency = r;
                        var i = this.config,
                            a = i.lowLatencyMode,
                            n = i.maxLiveSyncPlaybackRate;
                        if (a && 1 !== n) {
                            var s = this.targetLatency;
                            if (null !== s) {
                                var o = r - s,
                                    l = o < Math.min(this.maxLatency, s + e.targetduration);
                                if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                    var u = Math.min(2, Math.max(1, n)),
                                        d = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                    t.playbackRate = Math.min(u, Math.max(1, d))
                                } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                            }
                        }
                    }
                }
            }, a.estimateLiveEdge = function() {
                var t = this.levelDetails;
                return null === t ? null : t.edge + t.age
            }, a.computeLatency = function() {
                var t = this.estimateLiveEdge();
                return null === t ? null : t - this.currentTime
            }, e = t, (r = [{
                key: "latency",
                get: function() {
                    return this._latency || 0
                }
            }, {
                key: "maxLatency",
                get: function() {
                    var t = this.config,
                        e = this.levelDetails;
                    return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                }
            }, {
                key: "targetLatency",
                get: function() {
                    var t = this.levelDetails;
                    if (null === t) return null;
                    var e = t.holdBack,
                        r = t.partHoldBack,
                        i = t.targetduration,
                        a = this.config,
                        n = a.liveSyncDuration,
                        s = a.liveSyncDurationCount,
                        o = a.lowLatencyMode,
                        l = this.hls.userConfig,
                        u = o && r || e;
                    (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== n ? n : s * i);
                    var d = t.targetduration;
                    return u + Math.min(1 * this.stallCount, d)
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    var t = this.estimateLiveEdge(),
                        e = this.targetLatency;
                    return null === t || null === e || null === this.levelDetails ? null : Math.min(this.levelDetails.edge, t - e - this.edgeStalled)
                }
            }, {
                key: "edgeStalled",
                get: function() {
                    var t = this.levelDetails;
                    if (null === t) return 0;
                    var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                    return Math.max(t.age - e, 0)
                }
            }, {
                key: "forwardBufferLength",
                get: function() {
                    var t = this.media,
                        e = this.levelDetails;
                    if (!t || !e) return 0;
                    var r = t.buffered.length;
                    return r ? t.buffered.end(r - 1) : e.edge - this.currentTime
                }
            }]) && Hr(e.prototype, r), i && Hr(e, i), t
        }();

        function Yr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Wr = function() {
            function t(e) {
                var r = this;
                void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new xt.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this._media = null, this.url = null;
                var i = this.config = function(t, e) {
                    if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                    if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                    return Fr({}, t, e)
                }(t.DefaultConfig, e);
                this.userConfig = e, Object(l.a)(i.debug), this._autoLevelCapping = -1, i.progressive && Kr(i);
                var a = this.abrController = new i.abrController(this),
                    n = new i.bufferController(this),
                    s = this.capLevelController = new i.capLevelController(this),
                    o = new i.fpsController(this),
                    u = new O(this),
                    d = new x(this),
                    h = new jr(this),
                    c = this.levelController = new zt(this),
                    f = new P(this),
                    g = this.streamController = new Gt(this, f);
                c.onParsedComplete = function() {
                    (i.autoStartLoad || g.forceStartLoad) && r.startLoad(i.startPosition)
                }, s.setStreamController(g), o.setStreamController(g);
                var v = [c, g];
                this.networkControllers = v;
                var p = [u, d, a, n, s, o, h, f];
                this.audioTrackController = this.createController(i.audioTrackController, null, v), this.createController(i.audioStreamController, f, v), this.subtitleTrackController = this.createController(i.subtitleTrackController, null, v), this.createController(i.subtitleStreamController, f, v), this.createController(i.timelineController, null, p), this.emeController = this.createController(i.emeController, null, p), this.latencyController = this.createController(Vr, null, p), this.coreComponents = p
            }
            t.isSupported = function() {
                return function() {
                    var t = It();
                    if (!t) return !1;
                    var e = wt(),
                        r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return !!r && !!i
                }()
            };
            var e, r, i, s = t.prototype;
            return s.createController = function(t, e, r) {
                if (t) {
                    var i = e ? new t(this, e) : new t(this);
                    return r && r.push(i), i
                }
                return null
            }, s.on = function(t, e, r) {
                var i = this;
                this._emitter.on(t, (function() {
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    if (i.config.debug) e.apply(this, a);
                    else try {
                        e.apply(this, a)
                    } catch (e) {
                        l.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), i.trigger(o.a.ERROR, {
                            type: n.b.OTHER_ERROR,
                            details: n.a.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: t,
                            error: e
                        })
                    }
                }), r)
            }, s.once = function(t, e, r) {
                var i = this;
                this._emitter.once(t, (function() {
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    if (i.config.debug) e.apply(this, a);
                    else try {
                        e.apply(this, a)
                    } catch (e) {
                        l.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), i.trigger(o.a.ERROR, {
                            type: n.b.OTHER_ERROR,
                            details: n.a.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: t,
                            error: e
                        })
                    }
                }), r)
            }, s.removeAllListeners = function(t) {
                this._emitter.removeAllListeners(t)
            }, s.off = function(t, e, r, i) {
                this._emitter.off(t, e, r, i)
            }, s.listeners = function(t) {
                return this._emitter.listeners(t)
            }, s.emit = function(t, e, r) {
                return this._emitter.emit(t, e, r)
            }, s.trigger = function(t, e) {
                return this._emitter.emit(t, t, e)
            }, s.listenerCount = function(t) {
                return this._emitter.listenerCount(t)
            }, s.destroy = function() {
                l.b.log("destroy"), this.trigger(o.a.DESTROYING, void 0), this.detachMedia(), this.networkControllers.forEach((function(t) {
                    return t.destroy()
                })), this.coreComponents.forEach((function(t) {
                    return t.destroy()
                })), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
            }, s.attachMedia = function(t) {
                l.b.log("attachMedia"), this._media = t, this.trigger(o.a.MEDIA_ATTACHING, {
                    media: t
                })
            }, s.detachMedia = function() {
                l.b.log("detachMedia"), this.trigger(o.a.MEDIA_DETACHING, void 0), this._media = null
            }, s.loadSource = function(t) {
                this.stopLoad();
                var e = this.media;
                e && this.url && (this.detachMedia(), this.attachMedia(e)), t = a.buildAbsoluteURL(self.location.href, t, {
                    alwaysNormalize: !0
                }), l.b.log("loadSource:" + t), this.url = t, this.trigger(o.a.MANIFEST_LOADING, {
                    url: t
                })
            }, s.startLoad = function(t) {
                void 0 === t && (t = -1), l.b.log("startLoad(" + t + ")"), this.networkControllers.forEach((function(e) {
                    e.startLoad(t)
                }))
            }, s.stopLoad = function() {
                l.b.log("stopLoad"), this.networkControllers.forEach((function(t) {
                    t.stopLoad()
                }))
            }, s.swapAudioCodec = function() {
                l.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
            }, s.recoverMediaError = function() {
                l.b.log("recoverMediaError");
                var t = this._media;
                this.detachMedia(), t && this.attachMedia(t)
            }, s.removeLevel = function(t, e) {
                void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
            }, e = t, i = [{
                key: "version",
                get: function() {
                    return "1.0.0-beta.4.0.canary.6757"
                }
            }, {
                key: "Events",
                get: function() {
                    return o.a
                }
            }, {
                key: "ErrorTypes",
                get: function() {
                    return n.b
                }
            }, {
                key: "ErrorDetails",
                get: function() {
                    return n.a
                }
            }, {
                key: "DefaultConfig",
                get: function() {
                    return t.defaultConfig ? t.defaultConfig : Gr
                },
                set: function(e) {
                    t.defaultConfig = e
                }
            }], (r = [{
                key: "levels",
                get: function() {
                    return this.levelController.levels ? this.levelController.levels : []
                }
            }, {
                key: "currentLevel",
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(t) {
                    l.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel",
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(t) {
                    l.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel",
                get: function() {
                    return this.levelController.level
                },
                set: function(t) {
                    l.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(t) {
                    this.levelController.nextLoadLevel = t
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(t) {
                    l.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
                }
            }, {
                key: "startLevel",
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(t) {
                    l.b.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                }
            }, {
                key: "capLevelToPlayerSize",
                get: function() {
                    return this.config.capLevelToPlayerSize
                },
                set: function(t) {
                    var e = !!t;
                    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                }
            }, {
                key: "autoLevelCapping",
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(t) {
                    this._autoLevelCapping !== t && (l.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                }
            }, {
                key: "bandwidthEstimate",
                get: function() {
                    return this.abrController.bwEstimator.getEstimate()
                }
            }, {
                key: "autoLevelEnabled",
                get: function() {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel",
                get: function() {
                    var t = this.levels,
                        e = this.config.minAutoBitrate;
                    if (!t) return 0;
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i].maxBitrate > e) return i;
                    return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function() {
                    var t = this.levels,
                        e = this.autoLevelCapping;
                    return -1 === e && t && t.length ? t.length - 1 : e
                }
            }, {
                key: "nextAutoLevel",
                get: function() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                },
                set: function(t) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTracks : []
                }
            }, {
                key: "audioTrack",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.audioTrackController;
                    e && (e.audioTrack = t)
                }
            }, {
                key: "subtitleTracks",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTrack : -1
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleTrack = t)
                }
            }, {
                key: "media",
                get: function() {
                    return this._media
                }
            }, {
                key: "subtitleDisplay",
                get: function() {
                    var t = this.subtitleTrackController;
                    return !!t && t.subtitleDisplay
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleDisplay = t)
                }
            }, {
                key: "lowLatencyMode",
                get: function() {
                    return this.config.lowLatencyMode
                },
                set: function(t) {
                    this.config.lowLatencyMode = t
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this.latencyController.liveSyncPosition
                }
            }, {
                key: "latency",
                get: function() {
                    return this.latencyController.latency
                }
            }, {
                key: "maxLatency",
                get: function() {
                    return this.latencyController.maxLatency
                }
            }, {
                key: "targetLatency",
                get: function() {
                    return this.latencyController.targetLatency
                }
            }]) && Yr(e.prototype, r), i && Yr(e, i), t
        }();
        Wr.defaultConfig = void 0
    }]).default
}));
//# sourceMappingURL=hls.min.js.map