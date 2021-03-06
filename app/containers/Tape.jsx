const {connect} = require('react-redux');

const Tape = require('../components/Tape');

const mapStateToProps = ({page: {history}}) => ({
  ...(history.length ? history[history.length - 1] : null),
});

const mapDispatchToProps = (dispatch) => ({
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tape);
