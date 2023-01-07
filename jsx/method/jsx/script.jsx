class Content extends React.Component {
  getUrl() {
    return 'http://abcdefgh.com'
  }
  render() {
    return (
      <div>
        <p>URL: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      </div>
    )
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
