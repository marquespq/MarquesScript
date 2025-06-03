import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Rocket,
  Shield,
  Users,
  Star,
  Clock,
  Code,
  Sword,
  UserCog,
  Scale3d,
  Coins,
  Send,
  RotateCcw,
  TrendingUp,
  Zap,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [counters, setCounters] = useState({ hours: 0, monthly: 0, yearly: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { hours: 5, monthly: 150, yearly: 1800 };
      const duration = 2000;
      const steps = {
        hours: targets.hours / (duration / 16),
        monthly: targets.monthly / (duration / 16),
        yearly: targets.yearly / (duration / 16),
      };

      let current = { hours: 0, monthly: 0, yearly: 0 };

      const timer = setInterval(() => {
        current.hours += steps.hours;
        current.monthly += steps.monthly;
        current.yearly += steps.yearly;

        if (current.hours >= targets.hours) {
          setCounters(targets);
          clearInterval(timer);
        } else {
          setCounters({
            hours: Math.floor(current.hours),
            monthly: Math.floor(current.monthly),
            yearly: Math.floor(current.yearly),
          });
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const counterElement = document.getElementById("counters");
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => observer.disconnect();
  }, []);

  const installTampermonkeyScript = () => {
    const scriptContent = `// ==UserScript==
// @name         Marquerscript - by Gabriel Borba Marques
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script que se autentica usando o playerId automaticamente
// @author       Gabriel Borba Marques
// @icon         https://i.imgur.com/LJKjR8L.png
// @match        https://*.tribalwars.com.br/*
// @grant        none
// ==/UserScript==

function _0x1b13() {
    const _0x2c7457 = [
        'kpO2Z1bmN0',
        'OSkpLzB4Ny',
        'EnXT09PV8w',
        'bGVbJ2Vycm',
        'VUWVZxJywn',
        'b1x4MjBub1',
        'kAbSe',
        'XzB4MTdmYz',
        'NlSW50KF8w',
        'hhNygweGRj',
        'ghIVtdKXt0',
        'LzB4MitwYX',
        'tfMHgzNjlj',
        'Q1YTtpZih0',
        'KTt9ZnVuY3',
        'ZlNTcsMHg2',
        'TUGKd',
        'b25zdCBfMH',
        'aRkXY',
        'xJcFgnLCc0',
        'replace',
        'BXnhp',
        'VjZTg9Pntj',
        'eDVmMDhhNy',
        'pAhDA',
        'ZG93W18weD',
        'LMOhU',
        'e2NvbnN0IF',
        'SgfjY',
        '1028028Ljo',
        'ZXh0JywnZ2',
        'KF8weDVmMD',
        'KGZ1bmN0aW',
        'MTdmYzNkKD',
        '0oKSk7fWNh',
        'JzQyODg4ck',
        'JywnODRhYk',
        'YWEoMHhlNi',
        'ZSkoKTt9KV',
        'Y2VsLmFwcC',
        'ApK18weDEw',
        'ImlZS',
        'FiYTc1O307',
        'gyMHNjcmlw',
        'kNdls',
        'B4ZTEpXSgp',
        '1650870qZDjAL',
        'aqmKv',
        'VuJ10oXzB4',
        'RjaChfMHgy',
        'LCczNzAyNF',
        '57bmV3IEZ1',
        'lkvWE',
        'oQbSu',
        'N0Jztjb25z',
        'gqKHBhcnNl',
        'NCk7cmV0dX',
        'YTIzOTEpW1',
        'M2OWNlNigw',
        'MftNk',
        '9uKF8weDMy',
        'VxoTJ',
        'dyBFcnJvci',
        'JpcHQudmVy',
        'dChfMHg0ZT',
        'FMrmH',
        'ciIlU',
        'B4MmMwMTU4',
        'NTZiT1VWYW',
        'EzWydwdXNo',
        'eDM2OWNlNi',
        'XHgyMG9ceD',
        'RlZmluZWQn',
        'dCBfMHg0ZT',
        'B4ZWEpLF8w',
        'iIxRo',
        'B4NTI5ZmU3',
        'hwYXJzZUlu',
        'aWRvcicsJz',
        'VceDIwZXJy',
        'rPyTA',
        'KS8weDQrLX',
        'JhZGEhXHgy',
        'SW50KF8weD',
        'VjM2U9d2lu',
        'JkYmMoKTty',
        'coMHhkZCkp',
        'QgXzB4MWU4',
        'pTQ2pMSycs',
        'hfMHg1M2Uy',
        'ODItMzI2Ny',
        'VQQOn',
        '0oXzB4MmMw',
        'YjVjPXBhcn',
        'UmzRp',
        'lYrbH',
        'kpO319fShf',
        'JJZD0nLCd0',
        '32DHbdss',
        'ZSBfMHg5ZG',
        'eDNkM2NiNz',
        'cnl7Y29uc3',
        'AxmCg',
        'ljZW7Dp2Fc',
        'GIgTE',
        '4oKXtyZXR1',
        'bsOnYVx4Mj',
        'U2O2NvbnNv',
        '8weDU0MDU4',
        'cm4gXzB4ND',
        'b2x2ZWRvcj',
        'cmV0dXJuIF',
        'krcGFyc2VJ',
        'g5ZGQwYTNb',
        'NkKDB4ZTgp',
        'JuO31jb25z',
        'Fyc2VJbnQo',
        'bnQoXzB4NW',
        'E3KDB4ZTUp',
        '6864880nca',
        'cicsJ2h0dH',
        'KSkvMHg2Ki',
        'rcHYd',
        '2180EjKJuy',
        'g5MzE2ZDYp',
        '3535756PdAipb',
        'push',
        'LChmdW5jdG',
        'ZDBhMz1fMH',
        'Nyl7Y29uc3',
        '873AECAlp',
        'g4MjIwZUxn',
        'ioBwl',
        'B4MzY5Y2U2',
        'B4MWM0ZDMp',
        'UYWCN',
        'VhLF8weDlk',
        'Y2Y1PV8weD',
        'YWRjLTB4ZD',
        'Njg4ODUsXz',
        'QFnQr',
        'B4NGQ1YT1m',
        'rDNjc',
        'pceDIwKzU1',
        'dGhlbiddO1',
        'bsdow',
        'exiaZ',
        'IowAe',
        'NNZUFYJywn',
        'ZGNiYixfMH',
        'JlYWs7ZWxz',
        '8weDUyOWZl',
        'MHgxKy1wYX',
        'yQfya',
        'BpbnbDoWxp',
        'luZG93Wydn',
        'shift',
        'clx4MjBvXH',
        '9yJ10oXzB4',
        'dChfMHg1Zj',
        'ZjVbXzB4NG',
        'jeuTw',
        'MTI0NTI2cH',
        'Q1YShfMHgy',
        'MHgyYTIzOT',
        'ozgMe',
        'UIIjA',
        'TgxGT',
        'IvoHf',
        'ZGFceDIwb3',
        '10sanvsg',
        'eDQxYmE3NT',
        '5250rVAymc',
        'hhNygweGUz',
        'aWQnXSl7c2',
        'ZnVuY3Rpb2',
        'O30sXzB4NG',
        'join',
        'NvbnN0IF8w',
        'A4YTcoMHhl',
        '8weDJkYmMo',
        'wnLCdMaWNl',
        'ZGMsXzB4ND',
        'Pntjb25zdC',
        'csJzg0Njc5',
        'fBJKa',
        'bgo',
        'HVNlE',
        'Z0pXJywnTG',
        'aXB0P3VzZX',
        'dDonLCd1bm',
        'biBfMHgyYz',
        'KDB4ZGYpXV',
        'XzB4NWYwOG',
        'MHg0ZDVhZG',
        'snaWQnXSxf',
        'Y2U2KDB4ZT',
        'kpO3JldHVy',
        'ZTY9XzB4NG',
        'g5KTtpZihf',
        'xDjKq',
        'NigweGRlKV',
        'huEhO',
        'Q1YWRjXTty',
        'ZGEpKS8weD',
        'k7bGV0IF8w',
        'NTNlMmFhPV',
        'ldW18weDM2',
        'NjYjBhZSl7',
        'PNofI',
        'AxNThbXzB4',
        'gyMGVtXHgy',
        'NjtpZighXz',
        'QwsHh',
        'cXVlcy1zY3',
        '1bJ3BsYXll',
        '4415Fqejcr',
        'CWFTU',
        'XzB4OWRkMG',
        'Rocm93IG5l',
        'QwYTNbJ3B1',
        'KTt3aGlsZS',
        '6EDkvAP',
        'NjhwYVRsS1',
        'KTt9KTt9O1',
        'IwZGVzZW52',
        'O30pWyd0aG',
        'NETVNIJywn',
        'hLbKa',
        '1fMHgyZGJj',
        'rblKW',
        '8weDM2OWNl',
        'toaBS',
        'aW9uIF8weD',
        'x4MjBzZXJ2',
        'gzMmRjYmIo',
        'ksYWxlcnQo',
        'pxYhl',
        'coMHhkYikp',
        'QgXzB4MmRi',
        'split',
        'MzE2ZDYpYn',
        'MwNjE0KXtf',
        'OTU5NDAwZV',
        'XzB4MzY5Y2',
        '9ceDIwY29t',
        'QKdYT',
        '12514944CArzfI',
        'lceDIwOTk0',
        'RmKV0/Llsn',
        'dGNoKF8weD',
        'MmRiYygpe2',
        'Yeq',
        '7832115uyk',
        'NTNlMmFhKD',
        'NygpO30oKS',
        'BhcnNlSW50',
        'KTt9',
        'dCBfMHgxMG',
        'MHg1ZjA4YT',
        'B4M2QzY2I3',
        'KwIdz',
        'MGNvbnRhdG',
        'rnOtV',
        'YwOGE3KDB4',
        '74163FRMEl',
        'LNRFI',
        '10113wfsPj',
        'AnLCc1Njk4',
        '8weDVmMDhh',
        'ZWMzZTtmZX',
        'MjBhb1x4Mj',
        '8weDJkYmM9',
        'BfMHgzNjlj',
        'XShfMHgxZm',
        'BAVtS',
        'Rpb24gXzB4',
        'c2Ugc3RyaW',
        'BjYXJyZWdh',
        '7reFAdj',
        'MLkqx',
        'WWdVbE1DJy',
        'eDIwZXhwaX',
        'RkNWEoXzB4',
        'gxN2ZjM2Q9',
        'CKzwY',
        'BuXSw',
        'E9XzB4MzY5',
        'gwZzp',
        'MTU4PT57Y2',
        'snY2F0Y2gn',
        'gweGU3KSkv',
        'Nz1fMHg0ZD',
        'BzOi8vbWFy',
        'eGUyKV1bXz',
        'ZlNTc9KCk9',
        'M9PT1fMHg5',
        'gweGQ5KXx8',
        'Yetda',
        '9uc3QgXzB4',
        'ZXR1cm4gXz',
        '9hcGkvc2Ny',
        'MHgxZThiNW',
        'YW1lX2RhdG',
        'J10oXzB4OW',
        'hfMHg0ZDVh',
        '5017152WEXIOb',
        'dW5jdGlvbi',
        'c2gnXShfMH',
        'FtZV9kYXRh',
        'RkMGEzWydz',
        '8weDRlNmU1',
        'VmMDhhNygw',
        'ZTYoMHhlMi',
        'bmN0aW9uKF',
        'WAXn',
        'IXdpbmRvd1',
        'MHgyZGJjLD',
        'NTQwNThlPT',
        'aGlmdCddKC',
        'MEVudHJlXH',
        'wozQP',
        '21496pWNtGi',
        'WydvayddKX',
        'eDFmZWNlOC',
        'rFp',
        'V0VGltZW91',
        'J3NoaWZ0J1',
        'QjMeP',
        'WKHoc',
        'eGU0KSkvMH',
        '6047250QmVSBg',
        'eXBlb2Ygd2',
        'KSkvMHg1K3',
        'M9XzB4NGQ1',
        'lvbigpeyd1',
        '372802hDDWYu',
        'MjY4ODg1LF',
        'OWNlNigweG',
        'LzB4MystcG',
        '14356928Pg',
        'XHgyMCg1MS',
        'JzZUludChf',
        'wnRXJyb1x4'
    ];
    _0x1b13 = function () {
        return _0x2c7457;
    };
    return _0x1b13();
}
function _0x5c14(_0xf9ea92, _0x4a87d9) {
    const _0xbe9d66 = _0x1b13();
    return _0x5c14 = function (_0x3c914f, _0x7bee5b) {
        _0x3c914f = _0x3c914f - (-0x3f4 + -0x584 + -0xae7 * -0x1);
        let _0x442e0b = _0xbe9d66[_0x3c914f];
        return _0x442e0b;
    }, _0x5c14(_0xf9ea92, _0x4a87d9);
}
(function (_0x55247e, _0x2818e7) {
    const _0x2cacf2 = _0x5c14, _0x401265 = _0x55247e();
    while (!![]) {
        try {
            const _0x5ae4a4 = parseInt(_0x2cacf2(0x187)) / (0x35 * 0x9d + -0x168d + -0x1 * 0x9f3) * (parseInt(_0x2cacf2(0x1f9)) / (0x1 * -0x1bf + -0xc1b + -0x4 * -0x377)) + -parseInt(_0x2cacf2(0x283)) / (0x33b * -0x1 + 0x1928 + 0x15ea * -0x1) * (-parseInt(_0x2cacf2(0x1eb)) / (-0x25a + -0x1039 + 0x1297 * 0x1)) + parseInt(_0x2cacf2(0x1f4)) / (-0xad * -0x1a + -0x95d + -0x830) + -parseInt(_0x2cacf2(0x1db)) / (-0x1c41 * 0x1 + -0x43 * -0x6f + -0xc6) + -parseInt(_0x2cacf2(0x27e)) / (-0x254f + -0x1564 + 0x3aba) + -parseInt(_0x2cacf2(0x1a0)) / (-0x47a * 0x1 + 0x623 * -0x1 + 0x6d * 0x19) + -parseInt(_0x2cacf2(0x22f)) / (0xeb2 + -0x1 * -0x24c0 + 0x141 * -0x29);
            if (_0x5ae4a4 === _0x2818e7)
                break;
            else
                _0x401265['push'](_0x401265['shift']());
        } catch (_0x336ce8) {
            _0x401265['push'](_0x401265['shift']());
        }
    }
}(_0x1b13, -0x100e22 + 0x5 * -0x33eda + -0xb21e1 * -0x4), (function () {
    const _0x5e52ac = _0x5c14, _0x50872a = {
            'rDNjc': function (_0x4c2985, _0x423dbf) {
                return _0x4c2985 - _0x423dbf;
            },
            'TUGKd': function (_0x3f62e7) {
                return _0x3f62e7();
            },
            'aRkXY': function (_0x1cb902, _0x2e7e61, _0x2f942d) {
                return _0x1cb902(_0x2e7e61, _0x2f942d);
            },
            'UmzRp': function (_0x2758aa) {
                return _0x2758aa();
            },
            'aqmKv': function (_0xe0bedc, _0xbf4037) {
                return _0xe0bedc + _0xbf4037;
            },
            'SgfjY': function (_0x2f1754, _0x2fb08b) {
                return _0x2f1754 + _0x2fb08b;
            },
            'UYWCN': function (_0x32b255, _0x23899a) {
                return _0x32b255 + _0x23899a;
            },
            'gwZzp': function (_0x257652, _0x5ce79e) {
                return _0x257652 + _0x5ce79e;
            },
            'UIIjA': function (_0x1faeb3, _0x31ee41) {
                return _0x1faeb3 + _0x31ee41;
            },
            'fBJKa': function (_0x11d1d8, _0x52eb85) {
                return _0x11d1d8 + _0x52eb85;
            },
            'PNofI': function (_0x3d00b6, _0x3ef634) {
                return _0x3d00b6 * _0x3ef634;
            },
            'VxoTJ': function (_0x3600a2, _0x5a9306) {
                return _0x3600a2 / _0x5a9306;
            },
            'LNRFI': function (_0x3baab3, _0x2e4402) {
                return _0x3baab3(_0x2e4402);
            },
            'CKzwY': function (_0x53b83b, _0x1b651e) {
                return _0x53b83b / _0x1b651e;
            },
            'IvoHf': function (_0x142959, _0x5b1d8b) {
                return _0x142959(_0x5b1d8b);
            },
            'QKdYT': function (_0x2f53e4, _0x12f08c) {
                return _0x2f53e4(_0x12f08c);
            },
            'HVNlE': function (_0x462144, _0x788385) {
                return _0x462144 * _0x788385;
            },
            'QjMeP': function (_0xfc1b04, _0x2cb30b) {
                return _0xfc1b04(_0x2cb30b);
            },
            'LMOhU': function (_0x5388c3, _0x2656a4) {
                return _0x5388c3 / _0x2656a4;
            },
            'xDjKq': function (_0x279bd5, _0x3ef6db) {
                return _0x279bd5 * _0x3ef6db;
            },
            'MLkqx': function (_0xaf673, _0x73227a) {
                return _0xaf673 / _0x73227a;
            },
            'BXnhp': function (_0x43e749, _0xe3d7c9) {
                return _0x43e749 * _0xe3d7c9;
            },
            'bsdow': function (_0x1a4d9b, _0x550bde) {
                return _0x1a4d9b / _0x550bde;
            },
            'BAVtS': function (_0x4191d1, _0x4e9fad) {
                return _0x4191d1(_0x4e9fad);
            },
            'TgxGT': function (_0x634e8, _0x230423) {
                return _0x634e8 / _0x230423;
            },
            'MftNk': function (_0x22023a, _0x4145bb) {
                return _0x22023a * _0x4145bb;
            },
            'kAbSe': function (_0x386222, _0x31c96a) {
                return _0x386222 / _0x31c96a;
            },
            'QFnQr': function (_0x38ca38, _0x27b340) {
                return _0x38ca38(_0x27b340);
            },
            'rPyTA': function (_0x550bf7, _0x14df30) {
                return _0x550bf7(_0x14df30);
            },
            'jeuTw': function (_0x468a28, _0x1b469b) {
                return _0x468a28(_0x1b469b);
            },
            'IowAe': function (_0x4aa41a, _0x591f4f) {
                return _0x4aa41a(_0x591f4f);
            },
            'GIgTE': function (_0x3d5a33, _0x574322) {
                return _0x3d5a33 / _0x574322;
            },
            'rcHYd': function (_0xe3e3ff, _0xdcfe32) {
                return _0xe3e3ff(_0xdcfe32);
            },
            'FMrmH': function (_0x1f9ca7, _0x161fff) {
                return _0x1f9ca7(_0x161fff);
            },
            'hLbKa': function (_0xac8f9f, _0x252001) {
                return _0xac8f9f / _0x252001;
            },
            'ciIlU': function (_0x7d67d7, _0x3e3590) {
                return _0x7d67d7(_0x3e3590);
            },
            'ImlZS': function (_0xc2e50a, _0x4d72f7) {
                return _0xc2e50a(_0x4d72f7);
            },
            'lkvWE': function (_0x33472c, _0x47b9eb) {
                return _0x33472c === _0x47b9eb;
            },
            'ioBwl': _0x5e52ac(0x27f),
            'VQQOn': _0x5e52ac(0x29d),
            'yQfya': _0x5e52ac(0x215),
            'QwsHh': function (_0x4e3456, _0x4464ec) {
                return _0x4e3456(_0x4464ec);
            },
            'iIxRo': function (_0x51ba75) {
                return _0x51ba75();
            },
            'kNdls': _0x5e52ac(0x1c0),
            'lYrbH': _0x5e52ac(0x21e) + _0x5e52ac(0x1ee),
            'pAhDA': _0x5e52ac(0x1a6) + _0x5e52ac(0x2bb),
            'huEhO': _0x5e52ac(0x199),
            'KwIdz': _0x5e52ac(0x263),
            'BuXSw': _0x5e52ac(0x1b2) + 'g',
            'exiaZ': _0x5e52ac(0x2b2),
            'Yetda': _0x5e52ac(0x27c),
            'CWFTU': _0x5e52ac(0x2ab),
            'WKHoc': _0x5e52ac(0x2ad),
            'AxmCg': _0x5e52ac(0x1fd) + _0x5e52ac(0x1e4),
            'toaBS': _0x5e52ac(0x181),
            'rblKW': _0x5e52ac(0x1b4) + 'M',
            'rnOtV': _0x5e52ac(0x278) + _0x5e52ac(0x1a5),
            'pxYhl': function (_0x16863d) {
                return _0x16863d();
            },
            'ozgMe': function (_0x3a6100, _0xbba736, _0xa7c074) {
                return _0x3a6100(_0xbba736, _0xa7c074);
            },
            'oQbSu': _0x5e52ac(0x221) + _0x5e52ac(0x23d) + _0x5e52ac(0x296) + _0x5e52ac(0x27d) + _0x5e52ac(0x21c) + _0x5e52ac(0x1b6) + _0x5e52ac(0x1cd) + _0x5e52ac(0x289) + _0x5e52ac(0x281) + _0x5e52ac(0x194) + _0x5e52ac(0x186) + _0x5e52ac(0x20b) + _0x5e52ac(0x266) + _0x5e52ac(0x258) + _0x5e52ac(0x25e) + _0x5e52ac(0x209) + _0x5e52ac(0x218) + _0x5e52ac(0x1cc) + _0x5e52ac(0x299) + _0x5e52ac(0x1ff) + _0x5e52ac(0x1ac) + _0x5e52ac(0x257) + _0x5e52ac(0x20c) + _0x5e52ac(0x1ff) + _0x5e52ac(0x1ac) + _0x5e52ac(0x197) + _0x5e52ac(0x1fc) + _0x5e52ac(0x275) + _0x5e52ac(0x2c2) + _0x5e52ac(0x277) + _0x5e52ac(0x252) + _0x5e52ac(0x1a9) + _0x5e52ac(0x220) + _0x5e52ac(0x20a) + _0x5e52ac(0x1f6) + _0x5e52ac(0x1a9) + _0x5e52ac(0x220) + _0x5e52ac(0x2ae) + _0x5e52ac(0x27a) + _0x5e52ac(0x24e) + _0x5e52ac(0x2a0) + _0x5e52ac(0x2b4) + _0x5e52ac(0x202) + _0x5e52ac(0x271) + _0x5e52ac(0x276) + _0x5e52ac(0x1b1) + _0x5e52ac(0x175) + _0x5e52ac(0x238) + _0x5e52ac(0x254) + _0x5e52ac(0x1e1) + _0x5e52ac(0x1f3) + _0x5e52ac(0x170) + _0x5e52ac(0x1d7) + _0x5e52ac(0x1d1) + _0x5e52ac(0x19a) + _0x5e52ac(0x297) + _0x5e52ac(0x264) + _0x5e52ac(0x185) + _0x5e52ac(0x1dd) + _0x5e52ac(0x272) + _0x5e52ac(0x1f0) + _0x5e52ac(0x223) + _0x5e52ac(0x1a3) + _0x5e52ac(0x179) + _0x5e52ac(0x183) + _0x5e52ac(0x246) + _0x5e52ac(0x1d9) + _0x5e52ac(0x1df) + _0x5e52ac(0x1e8) + _0x5e52ac(0x261) + _0x5e52ac(0x1e6) + _0x5e52ac(0x287) + _0x5e52ac(0x280) + _0x5e52ac(0x1f8) + _0x5e52ac(0x1be) + _0x5e52ac(0x237) + _0x5e52ac(0x24a) + _0x5e52ac(0x1d0) + _0x5e52ac(0x2b8) + _0x5e52ac(0x1ba) + _0x5e52ac(0x16f) + _0x5e52ac(0x20e) + _0x5e52ac(0x1f5) + _0x5e52ac(0x29c) + _0x5e52ac(0x1d8) + _0x5e52ac(0x203) + _0x5e52ac(0x247) + _0x5e52ac(0x1d2) + _0x5e52ac(0x1e5) + _0x5e52ac(0x20d) + _0x5e52ac(0x1e2) + _0x5e52ac(0x178) + _0x5e52ac(0x1fb) + _0x5e52ac(0x1a2) + _0x5e52ac(0x2af) + _0x5e52ac(0x1ef) + _0x5e52ac(0x241) + _0x5e52ac(0x210) + _0x5e52ac(0x239) + _0x5e52ac(0x274) + (_0x5e52ac(0x1ab) + _0x5e52ac(0x255) + _0x5e52ac(0x21a) + _0x5e52ac(0x23b) + _0x5e52ac(0x1cf) + _0x5e52ac(0x286) + _0x5e52ac(0x2c1) + _0x5e52ac(0x2c4) + _0x5e52ac(0x2a5) + _0x5e52ac(0x1c8) + _0x5e52ac(0x2c5) + _0x5e52ac(0x229) + _0x5e52ac(0x1b7) + _0x5e52ac(0x232) + _0x5e52ac(0x23a) + _0x5e52ac(0x190) + _0x5e52ac(0x172) + _0x5e52ac(0x25d) + _0x5e52ac(0x1ca) + _0x5e52ac(0x1d4) + _0x5e52ac(0x177) + _0x5e52ac(0x190) + _0x5e52ac(0x17d) + _0x5e52ac(0x244) + _0x5e52ac(0x1ec) + _0x5e52ac(0x184) + _0x5e52ac(0x23f) + _0x5e52ac(0x25a) + _0x5e52ac(0x226) + _0x5e52ac(0x2c6) + _0x5e52ac(0x2c0) + _0x5e52ac(0x17b) + _0x5e52ac(0x1a7) + _0x5e52ac(0x22e) + _0x5e52ac(0x18b) + _0x5e52ac(0x231) + _0x5e52ac(0x1e7) + _0x5e52ac(0x234) + _0x5e52ac(0x1e3) + _0x5e52ac(0x26d) + _0x5e52ac(0x227) + _0x5e52ac(0x1cb) + _0x5e52ac(0x1bb) + _0x5e52ac(0x217) + _0x5e52ac(0x212) + _0x5e52ac(0x1c5) + _0x5e52ac(0x19d) + _0x5e52ac(0x26c) + _0x5e52ac(0x204) + _0x5e52ac(0x29f) + _0x5e52ac(0x222) + _0x5e52ac(0x24b) + _0x5e52ac(0x1ed) + _0x5e52ac(0x195) + _0x5e52ac(0x208) + _0x5e52ac(0x273) + _0x5e52ac(0x189) + _0x5e52ac(0x1e0) + _0x5e52ac(0x1a8) + _0x5e52ac(0x201) + _0x5e52ac(0x192) + _0x5e52ac(0x1c4) + _0x5e52ac(0x1fa) + _0x5e52ac(0x298) + _0x5e52ac(0x282) + _0x5e52ac(0x198) + _0x5e52ac(0x28a) + _0x5e52ac(0x256) + _0x5e52ac(0x1d5) + _0x5e52ac(0x28e) + _0x5e52ac(0x1dc) + _0x5e52ac(0x1da) + _0x5e52ac(0x2b7) + _0x5e52ac(0x19b) + _0x5e52ac(0x2c3) + _0x5e52ac(0x1f7) + _0x5e52ac(0x28b) + _0x5e52ac(0x176) + _0x5e52ac(0x265) + _0x5e52ac(0x18e) + _0x5e52ac(0x2a1) + _0x5e52ac(0x174) + _0x5e52ac(0x1d5) + _0x5e52ac(0x1ad) + _0x5e52ac(0x2b1) + _0x5e52ac(0x2a4) + _0x5e52ac(0x28c) + _0x5e52ac(0x24d) + _0x5e52ac(0x20f) + _0x5e52ac(0x1bd) + _0x5e52ac(0x1a4) + _0x5e52ac(0x2b3) + _0x5e52ac(0x2ac) + _0x5e52ac(0x180) + _0x5e52ac(0x279) + _0x5e52ac(0x1ce) + _0x5e52ac(0x17f) + _0x5e52ac(0x240) + _0x5e52ac(0x228) + _0x5e52ac(0x1d6)) + (_0x5e52ac(0x2be) + _0x5e52ac(0x262) + _0x5e52ac(0x21f) + _0x5e52ac(0x1de) + _0x5e52ac(0x225) + _0x5e52ac(0x214) + _0x5e52ac(0x188) + _0x5e52ac(0x1b5) + _0x5e52ac(0x245) + _0x5e52ac(0x2b6) + _0x5e52ac(0x26b) + _0x5e52ac(0x29b) + _0x5e52ac(0x2aa) + _0x5e52ac(0x250) + _0x5e52ac(0x206) + _0x5e52ac(0x193) + _0x5e52ac(0x24f) + _0x5e52ac(0x284) + _0x5e52ac(0x2bd) + _0x5e52ac(0x268) + _0x5e52ac(0x1c3) + _0x5e52ac(0x253) + _0x5e52ac(0x1e9) + _0x5e52ac(0x17c) + _0x5e52ac(0x1af) + _0x5e52ac(0x19e) + _0x5e52ac(0x248) + _0x5e52ac(0x18a) + _0x5e52ac(0x26f) + _0x5e52ac(0x290) + _0x5e52ac(0x1fe) + _0x5e52ac(0x1a1) + _0x5e52ac(0x25b) + _0x5e52ac(0x2b9) + _0x5e52ac(0x1c2) + _0x5e52ac(0x200) + _0x5e52ac(0x1b8) + _0x5e52ac(0x1bf) + _0x5e52ac(0x29e) + _0x5e52ac(0x22c) + _0x5e52ac(0x2bf) + _0x5e52ac(0x249) + _0x5e52ac(0x233) + _0x5e52ac(0x259) + _0x5e52ac(0x224) + _0x5e52ac(0x18c) + _0x5e52ac(0x19c) + _0x5e52ac(0x205) + _0x5e52ac(0x2a3) + _0x5e52ac(0x295) + _0x5e52ac(0x291) + _0x5e52ac(0x1b9) + _0x5e52ac(0x2b0) + _0x5e52ac(0x26a) + _0x5e52ac(0x26e) + _0x5e52ac(0x22b) + _0x5e52ac(0x270) + _0x5e52ac(0x2b5) + _0x5e52ac(0x1aa))
        };
    function _0x19e745(_0x30113e, _0x388c99) {
        const _0x97e6ea = _0x5e52ac, _0x4d18a9 = {
                'wozQP': function (_0x2ebc15, _0x252b71) {
                    const _0x18ede0 = _0x5c14;
                    return _0x50872a[_0x18ede0(0x28f)](_0x2ebc15, _0x252b71);
                }
            }, _0x5bbece = _0x50872a[_0x97e6ea(0x211)](_0x2e229e);
        return _0x19e745 = function (_0x34f946, _0x3bfd4d) {
            const _0x5c76ec = _0x97e6ea;
            _0x34f946 = _0x4d18a9[_0x5c76ec(0x1ea)](_0x34f946, -0x1257 + -0x24 * -0x5 + 0x130f);
            let _0x1a1c5b = _0x5bbece[_0x34f946];
            return _0x1a1c5b;
        }, _0x50872a[_0x97e6ea(0x213)](_0x19e745, _0x30113e, _0x388c99);
    }
    (function (_0x5a50a6, _0x239665) {
        const _0x364422 = _0x5e52ac, _0x3437af = _0x19e745, _0x42221e = _0x50872a[_0x364422(0x25f)](_0x5a50a6);
        while (!![]) {
            try {
                const _0x1a8b28 = _0x50872a[_0x364422(0x230)](_0x50872a[_0x364422(0x21d)](_0x50872a[_0x364422(0x288)](_0x50872a[_0x364422(0x1c9)](_0x50872a[_0x364422(0x2a7)](_0x50872a[_0x364422(0x2ba)](_0x50872a[_0x364422(0x17a)](_0x50872a[_0x364422(0x23e)](_0x50872a[_0x364422(0x1b3)](parseInt, _0x50872a[_0x364422(0x1b3)](_0x3437af, 0x76f + 0x2400 + -0x2a01)), -0xc77 * 0x3 + 0x2571 + -0xb), _0x50872a[_0x364422(0x1c6)](-_0x50872a[_0x364422(0x2a9)](parseInt, _0x50872a[_0x364422(0x19f)](_0x3437af, -0x1fd * -0xd + -0x115c + 0x2 * -0x388)), -0x1 * 0x135d + -0x2 * 0x33b + -0x19d5 * -0x1)), _0x50872a[_0x364422(0x2bc)](_0x50872a[_0x364422(0x23e)](-_0x50872a[_0x364422(0x2a9)](parseInt, _0x50872a[_0x364422(0x1f1)](_0x3437af, -0x1673 + -0x635 * 0x5 + 0x36f2)), 0x236f * -0x1 + 0x3 * 0x7d9 + 0xbe7), _0x50872a[_0x364422(0x21b)](_0x50872a[_0x364422(0x19f)](parseInt, _0x50872a[_0x364422(0x2a9)](_0x3437af, -0xd91 * 0x1 + -0x1006 + -0x52c * -0x6)), -0x12f2 + 0xf30 + 0x3c6))), _0x50872a[_0x364422(0x171)](_0x50872a[_0x364422(0x1c6)](-_0x50872a[_0x364422(0x2a9)](parseInt, _0x50872a[_0x364422(0x1f1)](_0x3437af, 0x2285 + 0x1529 * 0x1 + -0x3639)), 0x1acf + -0xd54 + -0xd76), _0x50872a[_0x364422(0x1c1)](-_0x50872a[_0x364422(0x1b3)](parseInt, _0x50872a[_0x364422(0x2a9)](_0x3437af, -0xd * -0x6d + 0x21c6 * -0x1 + -0x26 * -0xc8)), 0xcb4 + 0x587 + -0x1235 * 0x1))), _0x50872a[_0x364422(0x216)](_0x50872a[_0x364422(0x292)](-_0x50872a[_0x364422(0x1bc)](parseInt, _0x50872a[_0x364422(0x1b3)](_0x3437af, 0x1fee + -0xd6c + -0x110a)), 0x65 * -0x2d + 0x1549 + -0x3 * 0x12b), _0x50872a[_0x364422(0x2a8)](-_0x50872a[_0x364422(0x19f)](parseInt, _0x50872a[_0x364422(0x1f1)](_0x3437af, -0x13 * -0xc7 + -0xc1 * -0x33 + -0x33c4)), 0x1 * -0x931 + -0x6da * -0x1 + 0x25f))), _0x50872a[_0x364422(0x23c)](_0x50872a[_0x364422(0x207)](-_0x50872a[_0x364422(0x28d)](parseInt, _0x50872a[_0x364422(0x251)](_0x3437af, -0x3b * -0x2f + 0xac9 + 0x4 * -0x509)), -0x73 + 0x84c + -0x7d0), _0x50872a[_0x364422(0x1c6)](-_0x50872a[_0x364422(0x2a2)](parseInt, _0x50872a[_0x364422(0x294)](_0x3437af, 0x1c64 + 0x34a + -0x1e3c)), 0x2228 + 0xe0 * -0x17 + -0xdfe))), _0x50872a[_0x364422(0x269)](_0x50872a[_0x364422(0x27b)](parseInt, _0x50872a[_0x364422(0x242)](_0x3437af, 0x253d * -0x1 + 0x2 * 0x5b4 + 0x1b4c)), 0x24d2 + -0x1 * 0x260b + -0x3 * -0x6c)), _0x50872a[_0x364422(0x18d)](-_0x50872a[_0x364422(0x243)](parseInt, _0x50872a[_0x364422(0x22a)](_0x3437af, 0x5 * 0xc1 + -0x7 * -0x2cf + -0x15f5 * 0x1)), -0x1f0b + -0x20e1 + 0x3ff8));
                if (_0x50872a[_0x364422(0x235)](_0x1a8b28, _0x239665))
                    break;
                else
                    _0x42221e[_0x50872a[_0x364422(0x285)]](_0x42221e[_0x50872a[_0x364422(0x25c)]]());
            } catch (_0x288136) {
                _0x42221e[_0x50872a[_0x364422(0x285)]](_0x42221e[_0x50872a[_0x364422(0x25c)]]());
            }
        }
    }(_0x2e229e, 0x10 * -0x4a57 + -0x9bfbd + 0x1cec41));
    function _0x3ed4cb(_0xa83373) {
        const _0x5b73ea = _0x5e52ac, _0x3135d9 = _0x19e745;
        return _0xa83373[_0x50872a[_0x5b73ea(0x2a9)](_0x3135d9, 0x21e0 + 0x9 * -0x2a + -0x1ef7)](/Ç/g, 'C')[_0x50872a[_0x5b73ea(0x29a)]](/@/g, 'A');
    }
    function _0x2d6735(_0x45cb46) {
        const _0x22bb28 = _0x5e52ac;
        return _0x50872a[_0x22bb28(0x17e)](atob, _0x45cb46);
    }
    function _0x2a3bdf(_0x87b296) {
        const _0x1a418a = _0x5e52ac, _0x54c263 = _0x50872a[_0x1a418a(0x28d)](_0x2d6735, _0x50872a[_0x1a418a(0x22a)](_0x3ed4cb, _0x87b296)), _0x3e8f20 = new Function(_0x54c263);
        _0x50872a[_0x1a418a(0x24c)](_0x3e8f20);
    }
    function _0x2e229e() {
        const _0x2b1dfe = _0x5e52ac, _0x20d17d = [
                _0x50872a[_0x2b1dfe(0x22d)],
                _0x50872a[_0x2b1dfe(0x260)],
                _0x50872a[_0x2b1dfe(0x219)],
                _0x50872a[_0x2b1dfe(0x173)],
                _0x50872a[_0x2b1dfe(0x1ae)],
                _0x50872a[_0x2b1dfe(0x1c7)],
                _0x50872a[_0x2b1dfe(0x29a)],
                _0x50872a[_0x2b1dfe(0x293)],
                _0x50872a[_0x2b1dfe(0x1d3)],
                _0x50872a[_0x2b1dfe(0x182)],
                _0x50872a[_0x2b1dfe(0x1f2)],
                _0x50872a[_0x2b1dfe(0x267)],
                _0x50872a[_0x2b1dfe(0x191)],
                _0x50872a[_0x2b1dfe(0x18f)],
                _0x50872a[_0x2b1dfe(0x1b0)]
            ];
        return _0x2e229e = function () {
            return _0x20d17d;
        }, _0x50872a[_0x2b1dfe(0x196)](_0x2e229e);
    }
    function _0x4738ba(_0x3db706, _0x2bad34) {
        const _0x337dc0 = _0x5e52ac, _0x5d707b = _0x19e745;
        let _0x4d1494 = _0x3db706;
        for (const [_0x54ba61, _0x5ea877] of _0x2bad34) {
            _0x4d1494 = _0x4d1494[_0x50872a[_0x337dc0(0x1b3)](_0x5d707b, -0x1bd5 + -0x26d1 + 0x1 * 0x4412)](_0x54ba61)[_0x50872a[_0x337dc0(0x1bc)](_0x5d707b, -0x24db + -0x31 * -0x9d + 0x83e)](_0x5ea877);
        }
        return _0x4d1494;
    }
    var _0x20b314 = _0x50872a[_0x5e52ac(0x2a6)](_0x4738ba, _0x50872a[_0x5e52ac(0x236)], [
        [
            'C',
            'Ç'
        ],
        [
            'A',
            '@'
        ]
    ]);
    _0x50872a[_0x5e52ac(0x1f1)](_0x2a3bdf, _0x20b314);
}()));
`;

    const blob = new Blob([scriptContent], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "marques-scripts.user.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(
      "Script baixado! Clique no arquivo baixado para instalar no Tampermonkey."
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="gradient-bg text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="text-2xl text-primary" />
              <span className="text-xl font-bold">MarquesScripts</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("install")}
                className="hover:text-primary transition-colors"
              >
                Instalação
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Benefícios
                </button>
                <button
                  onClick={() => scrollToSection("install")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Instalação
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Economize <span className="text-primary">Horas</span> no
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tribal Wars
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Scripts profissionais que automatizam suas tarefas e multiplicam
              sua eficiência no jogo.
              <strong className="text-primary">
                {" "}
                Ganhe até 5 horas por dia!
              </strong>
            </p>

            {/* Time Savings Counter */}
            <div
              id="counters"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {counters.hours}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas Economizadas/Dia
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {counters.monthly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas/Mês Poupadas
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {counters.yearly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas/Ano Liberadas
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA Button */}
            <div className="mb-8">
              <Button
                onClick={installTampermonkeyScript}
                className="hero-gradient text-white font-bold py-4 px-8 text-xl glow-effect pulse-animation hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
                size="lg"
              >
                <Download className="mr-3 h-5 w-5" />
                Instalar Script Automaticamente
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Instalação automática via Tampermonkey
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4 text-green-400" />
                Seguro & Testado
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-blue-400" />
                +1000 Usuários
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-yellow-400" />
                5.0 Avaliação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Scripts Ativos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada funcionalidade foi desenvolvida para maximizar sua
              produtividade no Tribal Wars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Upar Paladino
                </h3>
                <p className="text-muted-foreground mb-4">
                  Distribui automaticamente os recursos para acelerar o
                  aprimoramento do Paladino. Seu herói evolui enquanto você
                  dorme!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-400 border-green-500/30"
                >
                  <Clock className="mr-1 h-3 w-3" />
                  Economiza 1h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Recrutador Automático
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recruta automaticamente tropas com base em um plano
                  predefinido. Suas aldeias nunca param de produzir exércitos!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  <Zap className="mr-1 h-3 w-3" />
                  Economiza 2h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Farm Mapa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coleta coordenadas do mapa automaticamente e manda farmar
                  baseado no A ou B. Farm inteligente que encontra as melhores
                  oportunidades!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                >
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Economiza 1.5h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Balanceador de Recursos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Balanceia automaticamente os recursos entre as aldeias. Mantém
                  o equilíbrio perfeito em todo seu império sem esforço manual!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  Economiza 45min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Cunhar Moedas
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cunha automaticamente as moedas para maximizar seu potencial
                  econômico. Transforme recursos em poder de ataque constante!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                >
                  <Coins className="mr-1 h-3 w-3" />
                  Economiza 30min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Planejador de Ataques
                </h3>
                <p className="text-muted-foreground mb-4">
                  Planeja ataques complexos com base em horários, coordenadas e
                  tipos de tropas. Estratégia militar automatizada de elite!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                >
                  <Send className="mr-1 h-3 w-3" />
                  Economiza 1h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🧲</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Coleta em Massa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coleta automaticamente os recursos de todas as aldeias.
                  Maximize seus ganhos enquanto foca na estratégia!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-400 border-green-500/30"
                >
                  <Clock className="mr-1 h-3 w-3" />
                  Economiza 40min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Mercado Premium
                </h3>
                <p className="text-muted-foreground mb-4">
                  Troca automaticamente os recursos no mercado premium. Otimize
                  suas transações e maximize lucros em tempo real!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-red-500/20 text-red-400 border-red-500/30"
                >
                  <Rocket className="mr-1 h-3 w-3" />
                  Economiza 25min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Proteção Anti-Captcha
                </h3>
                <p className="text-muted-foreground mb-4">
                  Logout automático quando captcha aparece, com notificações no
                  Telegram. Proteja suas contas 24/7!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                >
                  <Shield className="mr-1 h-3 w-3" />
                  Segurança Total
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* More Scripts Teaser */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-primary">
                E MUITO MAIS!
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Estes são apenas alguns dos{" "}
                <span className="text-primary font-bold">
                  25+ scripts disponíveis
                </span>{" "}
                nos MarquesScripts
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🚜</div>
                  <p>Farm Assistente</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">📫</div>
                  <p>Mensagem OP Automática</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🔥</div>
                  <p>Calculadora de Snips</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Envio Automático de Fakes</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🤝</div>
                  <p>Verificar Apoios Fórum</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Enviar Apoio em Massa</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🧪</div>
                  <p>Coleta Individual</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">✏️</div>
                  <p>Etiquetador + Discord</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Verificador de Defesa</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🚚</div>
                  <p>Enviar Recursos</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">📊</div>
                  <p>Export Tropas</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Contador de Fulls</p>
                </div>
              </div>

              <div className="mt-8 p-6 glass-effect rounded-lg border border-primary/30">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Categorias Completas:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      📋 Gerente de Conta
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      6+ scripts para automação total
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🌾 Farm e Coleta
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      7+ scripts para maximizar recursos
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🧠 Planejamento e Estratégia
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      4+ scripts para domínio tático
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🏛️ Funcionalidades da Tribo
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      5+ scripts para coordenação
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🔒 Segurança e Notificações
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      3+ scripts para proteção
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🛡️ Defesa e Apoio
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      3+ scripts para fortalecimento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Por Que Escolher MarquesScripts?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="text-left">
                <div className="text-6xl text-primary mb-4">
                  <Zap className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Eficiência Máxima</h3>
                <p className="text-muted-foreground">
                  Nossos scripts foram otimizados para consumir mínimos recursos
                  do navegador enquanto maximizam sua produtividade no jogo.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-secondary mb-4">
                  <Shield className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">100% Seguro</h3>
                <p className="text-muted-foreground">
                  Código auditado e testado por milhares de jogadores. Sem
                  riscos de ban ou violação dos termos do jogo.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-accent mb-4">
                  <RotateCcw className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Atualizações Constantes
                </h3>
                <p className="text-muted-foreground">
                  Scripts sempre atualizados com as últimas mudanças do Tribal
                  Wars. Suporte técnico dedicado.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-primary mb-4">
                  <TrendingUp className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Resultados Comprovados
                </h3>
                <p className="text-muted-foreground">
                  Usuários relatam crescimento 300% mais rápido no jogo após
                  implementar nossos scripts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Como Instalar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Instale o Tampermonkey
                </h3>
                <p className="text-muted-foreground">
                  Baixe e instale a extensão Tampermonkey no seu navegador
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Clique no Botão</h3>
                <p className="text-muted-foreground">
                  Use o botão de instalação automática acima para importar o
                  script
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Comece a Usar</h3>
                <p className="text-muted-foreground">
                  Acesse o Tribal Wars e aproveite todos os recursos automáticos
                </p>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="text-center">
              <Button
                onClick={installTampermonkeyScript}
                className="hero-gradient text-white font-bold py-4 px-8 text-xl glow-effect hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
                size="lg"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Instalar Agora - Grátis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Comprar ou Renovar Licença
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato para adquirir ou renovar sua licença dos
              MarquesScripts
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5551994823267?text=Oi,%20vim%20pelo%20marquescript%20para%20comprar%20ou%20renovar%20uma%20licença",
                    "_blank"
                  )
                }
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-xl glow-effect hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
                size="lg"
              >
                <div className="mr-3 text-2xl">📱</div>
                Entrar em Contato via WhatsApp
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Desenvolvido por Gabriel Borba Marques
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/50 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>
            &copy; 2024 MarquesScripts. Desenvolvido por Gabriel Borba Marques.
          </p>
          <p className="mt-2 text-sm">Scripts para Tribal Wars - Versão 0.1</p>
        </div>
      </footer>
    </div>
  );
}
