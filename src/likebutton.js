'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false,unlike:false};
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    if (this.state.unlike) {
      return 'You unliked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ unlike: true }) },
      'unLike',
      // 'button',
      // { onClick: () => this.setState({ liked: true }) },
      // 'Like',
      
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);