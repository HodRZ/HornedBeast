import React from 'react';
import data from "./components/data.json"
import Header from './components/header'
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animalData: data
    }
  }
  state = {
    show: false
  };
  onClose = e => {
    this.props.show = false;
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div key='1' >
        <Header />
        <button onClick={e => {
          this.showModal();
        }}
        > show Modal </button>
        <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal
        </Modal>
        <Main data={this.state.animalData} />
        <Footer />
      </div>
    )
  }
}

export default App;