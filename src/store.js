import { observable, action } from "mobx";

class Store {
  @observable title = "Old Navigation title";

  @action changeTitle = () => {
    this.title === "New Navigation title"
      ? (this.title = "Old Navigation title")
      : (this.title = "New Navigation title");
  };
}

const store = new Store();

export default store;
