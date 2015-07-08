define(['exports', 'module', 'react', 'classnames'], function (exports, module, _react, _classnames) {
  'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _React = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  console.warn('This file is deprecated, and will be removed in v0.24.0. Use react-bootstrap.js or react-bootstrap.min.js instead.');
  console.warn('You can read more about it at https://github.com/react-bootstrap/react-bootstrap/issues/693');

  var ModalBody = (function (_React$Component) {
    function ModalBody() {
      _classCallCheck(this, ModalBody);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(ModalBody, _React$Component);

    _createClass(ModalBody, [{
      key: 'render',
      value: function render() {
        return _React['default'].createElement(
          'div',
          _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName) }),
          this.props.children
        );
      }
    }]);

    return ModalBody;
  })(_React['default'].Component);

  ModalBody.propTypes = {
    /**
     * A css class applied to the Component
     */
    modalClassName: _React['default'].PropTypes.string
  };

  ModalBody.defaultProps = {
    modalClassName: 'modal-body'
  };

  module.exports = ModalBody;
});