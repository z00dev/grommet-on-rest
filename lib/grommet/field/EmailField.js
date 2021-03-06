'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailField = function EmailField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        elStyle = _ref.elStyle;
    return _react2.default.createElement(
        'a',
        { style: elStyle, href: 'mailto:' + (0, _lodash2.default)(record, source) },
        (0, _lodash2.default)(record, source)
    );
};

EmailField.propTypes = {
    addLabel: _propTypes2.default.bool,
    elStyle: _propTypes2.default.object,
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    source: _propTypes2.default.string.isRequired
};

var PureEmailField = (0, _pure2.default)(EmailField);

PureEmailField.defaultProps = {
    addLabel: true
};

exports.default = PureEmailField;
module.exports = exports['default'];