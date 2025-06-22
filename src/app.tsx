import Body from './components/body';
import Head from './components/head';

function App() {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat scroll-smooth' style={{backgroundImage:"url('/bg.jpg')"}}>
      <Head />
      <Body />
    </div>
  );
}

export default App;
