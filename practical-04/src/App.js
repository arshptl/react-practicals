import { Component } from 'react';
import Layout from './components/wrapper/Layout';
import TodoHome from './pages/TodoHome';

class App extends Component {
  render() {
    return (

      <Layout>
        <TodoHome/>
      </Layout>
    );
  }
}

export default App;
