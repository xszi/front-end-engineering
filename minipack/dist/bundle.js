
(function(modules) {
    function require(moduleId) {
        const [fn, mapping] = modules[moduleId]
        function localRequire(name) {
            return require(mapping[name])
        }
        const module = {exports: {}}
        fn(localRequire, module, module.exports)
        return module.exports
    }
    require('src/entry.js')
})({
    'src/entry.js': [
        function(require, module, exports) {
            "use strict";

            var _message = _interopRequireDefault(require("./message.js"));

            var _name = require("./name.js");

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

            (0, _message["default"])();
            console.log('----name----:', _name.name);
        },
        {"./message.js":"src\\message.js","./name.js":"src\\name.js"}
        ],
        'src\message.js': [
        function(require, module, exports) {
            "use strict";

            var _message = _interopRequireDefault(require("./message.js"));

            var _name = require("./name.js");

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

            (0, _message["default"])();
            console.log('----name----:', _name.name);
            },
            {"./message.js":"src\\message.js","./name.js":"src\\name.js"}
        ],
        'src\name.js': [
        function(require, module, exports) {
            "use strict";

            var _message = _interopRequireDefault(require("./message.js"));

            var _name = require("./name.js");

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

            (0, _message["default"])();
            console.log('----name----:', _name.name);
            },
            {"./message.js":"src\\message.js","./name.js":"src\\name.js"}
        ],
    })
    