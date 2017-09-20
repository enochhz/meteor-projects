import React        from 'react';
import Clipboard    from 'clipboard';

export default class LinksListItem extends React.Component {
    componentDidMount() {
        this.clipboard = Clipboard(this.refs.copy);

        this.clipboard.on('success', () => {
            alert('it worded');
        }).on('error', () => {
            alert('Unable to copy. Please manually copy the link.');
        })
    }

    componentWillUnmount() {
       this.clipboard.destroy();
    }

   render() {
       return (
            <div>
               <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
            </div>
       );
   }
};

LinksListItem.propTypes = {
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    shortUrl: React.PropTypes.string.isRequired,
}