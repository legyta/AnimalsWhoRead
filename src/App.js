import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BackDrop from "./components/BackDrop";
import { Switch, Route } from "react-router-dom";
import Article from "./components/Article";
import Contact from "./components/Contact";
import Survey from "./components/Survey";
import Fun from "./components/Fun";
import IndexPage from "./components/IndexPage";

const API_KEY = "38c6325b37ef4200b8d0b52b8e8ab90b";

class App extends Component {
  // state = {
  //   sideDrawerOpen: false,
  //   articles: []
  // };

  // drawerToggleClickHandler = () => {
  //   this.setState(prevState => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen };
  //   });
  // };

  // backdropClickHandler = () => {
  //   this.setState({ sideDrawerOpen: false });
  // };

  // getArticles = async e => {
  //   const articleName = e.target.elements.articleName.value || "chicken";
  //   e.preventDefault();
  //   const api_call = await fetch(
  //     `http://newsapi.org/v2/everything?q=${articleName}&apiKey=${API_KEY}&pageSize=20`
  //   );

  //   const data = await api_call.json();
  //   this.setState({ articles: data.articles });
  // };

  // componentDidUpdate = () => {
  //   const articles = JSON.stringify(this.state.articles);
  //   localStorage.setItem("articles", articles);
  // };

  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <BackDrop click={this.backdropClickHandler} />;
    // }

    return (
      <div className="App" style={{ height: "100%" }}>
        <Switch>
          <Route path exact="./home" component={IndexPage} />
          <Route path="/article/:title" component={Article} />
          <Route path="/survey" component={Survey} />
          <Route path="/contact" component={Contact} />
          <Route path="/fun" component={Fun} />
        </Switch>
      </div>
    );
  }
}

export default App;
