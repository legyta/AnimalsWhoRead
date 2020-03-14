import React, { Component } from "react";
import "../App.scss";
import Ticker from "./Ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Form from "./Form";
import Articles from "./Articles";
import Mission from "./Mission";
import NavBar from "./NavBar";
import FooterMain from "./FooterMain";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

const API_KEY = "38c6325b37ef4200b8d0b52b8e8ab90b";

class IndexPage extends Component {
  state = {
    sideDrawerOpen: false,
    articles: []
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  getArticles = async e => {
    const articleName = e.target.elements.articleName.value || "chicken";
    e.preventDefault();
    const api_call = await fetch(
      `http://newsapi.org/v2/everything?q=${articleName}&apiKey=${API_KEY}&pageSize=20`
    );

    const data = await api_call.json();
    this.setState({ articles: data.articles });
  };

  componentDidUpdate = () => {
    const articles = JSON.stringify(this.state.articles);
    localStorage.setItem("articles", articles);
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <div id="home" className="App" style={{ height: "100%" }}>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header />
        <Form getArticles={this.getArticles} />
        <Articles articles={this.state.articles} />
        <Mission />
        <Ticker />
        <FooterMain />
      </div>
    );
  }
}

export default IndexPage;
