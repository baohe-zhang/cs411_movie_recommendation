import React, { Component } from "react";
import ReactWordcloud from "react-wordcloud";
import WordCloudService from "../api/WordCloudService";
class WordcloudCusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      movie_id: this.props.movie_id,
      words: []
    };
  }

  componentDidMount() {
    //movie_id: this.props.movie_id,
    console.log("get word count in componentDidMount");
    WordCloudService.retrieveWordcountByMovieId(
      this.props.user_id,
      this.props.movie_id
    ).then(Response => {
      console.log(Response.data);
      //words: Response.data
      this.setState({
        words: Response.data
      });
    });
  }

  render() {
    console.log("this.state.words");
    console.log(this.state.words);
    return (
      <div>
        <ReactWordcloud words={this.state.words} />
      </div>
    );
  }
}

export default WordcloudCusComponent;
