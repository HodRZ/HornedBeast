import React from 'react';
import data from "./components/data.json"
import Header from './components/header'
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './components/SelectedBeast';
import Form from './components/form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data,
      selectedAnimal: {},
      showModal: false,
      selectedHorn: 0
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
  resetData = () => {
    this.setState({
      animalData: data
    })
  }

  filterSelect = (e) => {
    console.log(e.target.formSelect.value);
    let select = this.state.animalData.filter(animal => {
      if (parseInt(e.target.formSelect.value) === 0) return data;
      else return (animal.horns === parseInt(e.target.formSelect.value))
    });
    this.setState({
      animalData: select
    })
    console.log(select)
  }

  render() {
    return (
      <div key='appKey' >
        <Header />
        <Form filterSelect={this.filterSelect} />
        <Main data={this.state.animalData} showModal={this.showModal} horn={this.state.selectedHorn} />
        <MyModal show={this.state.showModal} onHide={this.onModalHide} selectedAnimal={this.state.selectedAnimal} />
        <Footer />
      </div >
    )
  }
}

export default App;


