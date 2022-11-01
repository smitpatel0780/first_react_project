import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  // props
  static defalutProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
    // apikey:PropTypes.string
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor syntax
  constructor(props) {
    super(props);
    console.log("This is a constructor class");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} -NewsMonkey`;
  }

  // call api
  async componentDidMount(props) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let PraseData = await data.json();
    console.log(PraseData);
    this.setState({
      articles: PraseData.articles,
      totalResults: PraseData.totalResults,
      loading: false,
    });

    
  }

  // handlePreviwe = async (props) => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apikey=${this.props.apikey}326516340b014965817dc8bb70d5530e&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let PraseData = await data.json();
  //   console.log(PraseData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: PraseData.articles,
  //     loading: false,
  //   });
  // };

  // handleNext = async (props) => {
  //   console.log("n");
  //   console.log("p");
  //   if (!(this.state.page > Math.ceil(this.state.totalResults / 20))) {
  //     let url = `https://newsapi.org/v2/top-headlines?${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apikey=${this.props.apikey}326516340b014965817dc8bb70d5530e&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let PraseData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: PraseData.articles,
  //       loading: false,
  //       totalResults:PraseData.totalResults
  //     });
  //   }
  // }

    fetchMoreData = async () => {
      this.setState({page : this.state.page + 1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading:true})
      let data = await fetch(url)
      let PraseData = await data.json()
      this.setState({
        articles: this.state.articles.concat(PraseData.articles),
        totalResults: PraseData.totalResults,
        loading: false,
      })
    };
  
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">
            NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)}{" "}Headlines
          </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={this.state.loading && <Spinner/>}
            >

              <div className="container">
                <div className="row">
                  {this.state.articles.map((element) => {
                      return (
                        <div className="col-md-4 my-3" key={element.url}>
                          <NewsItem
                            title={element.title ? element.title : ""}
                            source={element.source.name}
                            author={element.author}
                            publishedAt={element.publishedAt}
                            description={
                              element.description ? element.description : ""
                            }
                            imgUrl={element.urlToImage}
                            newsUrl={element.url}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePreviwe}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page > Math.ceil(this.state.totalResults / 20)
              }
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              {" "}
              Next &raquo;
            </button>
          </div> */}
        </div>
      </>
    );
  }
}
