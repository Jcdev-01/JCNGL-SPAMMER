function _0x3634() {
    const _0x3f1862 = ["preventDefault", ".amount-msg", ".result", ".spam-field", "2714362xTCVEC", " ->sending.... started! <br> ", "[SUCCESS]", "159822LuWfsl", "log", "reset", "status", "https://ngl.link:443/api/submit", "2994654PiYbzM", "625083vxWiiD", "256wKyaPI", "https://audio.jukehost.co.uk/SJ1gc910xvA9boUssMVlqhskdNkNmeEY", "632MmzvQm", "oncanplaythrough", "setRequestHeader", "&gameSlug=", "Content-Type", "4445RMMJDj", "querySelector", "addEventListener", "369168llxaBB", "loop", "POST", "open", "&referrer=", "1135242VjLJzu", "submit", "readyState", "value", "onended"];
    _0x3634 = function () {
      return _0x3f1862;
    };
    return _0x3634();
  }
  const _0x411a5b = _0x39af;
  (function (_0x27d2ca, _0x584b70) {
    const _0x41cc9c = _0x39af, _0x1cbc74 = _0x27d2ca();
    while (true) {
      try {
        const _0x5abb80 = parseInt(_0x41cc9c(205)) / 1 + -parseInt(_0x41cc9c(176)) / 2 + parseInt(_0x41cc9c(194)) / 3 + -parseInt(_0x41cc9c(197)) / 4 * (parseInt(_0x41cc9c(202)) / 5) + parseInt(_0x41cc9c(193)) / 6 + -parseInt(_0x41cc9c(185)) / 7 + -parseInt(_0x41cc9c(195)) / 8 * (-parseInt(_0x41cc9c(188)) / 9);
        if (_0x5abb80 === _0x584b70) break; else _0x1cbc74.push(_0x1cbc74.shift());
      } catch (_0x254c1c) {
        _0x1cbc74.push(_0x1cbc74.shift());
      }
    }
  }(_0x3634, 549045), document[_0x411a5b(203)](_0x411a5b(184))[_0x411a5b(204)](_0x411a5b(177), function (_0x5158d8) {
    const _0x444d23 = _0x411a5b;
    _0x5158d8[_0x444d23(181)]();
    const _0x510c4a = document[_0x444d23(203)](".user")[_0x444d23(179)], _0x438407 = document.querySelector(".msg")[_0x444d23(179)], _0xaf6150 = parseInt(document.querySelector(_0x444d23(182)).value);
    let _0xab186a = document[_0x444d23(203)](_0x444d23(183));
    for (let _0x2d5185 = 0; _0x2d5185 < _0xaf6150; _0x2d5185++) {
      _0xab186a.innerHTML += _0x2d5185 + _0x444d23(186), spam(_0x510c4a, _0x438407, _0xaf6150);
    }
    let _0xab94a1 = document[_0x444d23(203)](".spam-field");
    _0xab94a1[_0x444d23(190)]();
  }));
  var audio = new Audio(_0x411a5b(196));
  function _0x39af(_0x1d337e, _0x14c332) {
    const _0x3634c4 = _0x3634();
    return _0x39af = function (_0x39af1a, _0x41ed07) {
      _0x39af1a = _0x39af1a - 173;
      let _0x38a253 = _0x3634c4[_0x39af1a];
      return _0x38a253;
    }, _0x39af(_0x1d337e, _0x14c332);
  }
  audio[_0x411a5b(198)] = function () {
    audio.play();
  }, audio[_0x411a5b(206)] = true, audio[_0x411a5b(180)] = function () {
    audio.play();
  };
  const spam = (_0x546d01, _0x55ce55, _0x5686fe) => {
    const _0x34a989 = _0x411a5b;
    var _0xfe141 = _0x34a989(192), _0x4bc8a0 = new XMLHttpRequest;
    _0x4bc8a0[_0x34a989(174)](_0x34a989(173), _0xfe141), _0x4bc8a0[_0x34a989(199)](_0x34a989(201), "application/x-www-form-urlencoded; charset=UTF-8");
    const _0x510f2b = "username=" + encodeURIComponent(_0x546d01) + "&question=" + encodeURIComponent(_0x55ce55) + "&deviceId=381691f9-f6a2-7333-b132-618c51e2a34b" + _0x34a989(200) + _0x34a989(175);
    _0x4bc8a0.onreadystatechange = function () {
      const _0x27534d = _0x34a989;
      if (_0x4bc8a0[_0x27534d(178)] === 4) {
        if (_0x4bc8a0[_0x27534d(191)] === 200) console[_0x27534d(189)](_0x27534d(187)), displayResult(_0x27534d(187)); else {}
      }
    }, _0x4bc8a0.send(_0x510f2b);
  };