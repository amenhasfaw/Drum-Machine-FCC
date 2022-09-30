function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  key: 'Q',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  key: 'W',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'E',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'A',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'S',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'D',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  key: 'Z',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'X',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  key: 'C',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const App = () => /*#__PURE__*/
React.createElement("div", { id: "drum-machine", className: "container" }, /*#__PURE__*/
React.createElement("div", { id: "display", className: "display" },
sounds.map((sounds, idx) => /*#__PURE__*/
React.createElement(Box, { text: sounds.key, key: idx, audio: sounds.sound }))));




class Box extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",









    () => {
      this.audio.current.play();
    });this.audio = React.createRef();window.document.addEventListener('keydown', e => {if (e.key.toUpperCase() === props.text) {this.audio.current.play();}});}

  render() {
    const { text, audio } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad box", onClick: this.playSound, id: text },
      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));

  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));