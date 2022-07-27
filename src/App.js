import React from 'react';
import data from "./components/data.json"
import Header from './components/header'
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
      selectedAnimal: {},
      showModal: false
    }
  }
  showModal = (animal) => {
    this.setState({
      showModal: true,
      selectedAnimal: animal
    })
    console.log(animal)
  };
  onModalHide = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div key='appKey' >
        <Header />
        <Main data={this.state.animalData} showModal={this.showModal} />
        <MyModal show={this.state.showModal} onHide={this.onModalHide} selectedAnimal={this.state.selectedAnimal} />
        <Footer />
      </div >
    )
  }
}

export default App;


