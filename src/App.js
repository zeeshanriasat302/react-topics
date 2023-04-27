import './App.css';

import ClassBased from './components/ClassBased';
import FunctionBased from './components/FunctionBased';
import StateBased from './components/StateBased';
// import Counter from './components/Counter';
import EventHanding from './components/eventHandlers/FunctionEventHandling'; 
import ClassHandler from './components/eventHandlers/ClassEventHandling';
import EventBind from './components/EventBind';
import ParentComponent from './components/propsMethods/ParentComponent';

import IfElse from './components/conditionalRendering/IfElse';
import ElementVariables from './components/conditionalRendering/ElementVariables';
import TernaryConditional from './components/conditionalRendering/TernaryConditional';
import ShorCiruit from './components/conditionalRendering/ShorCiruit';
import ListRendering from './components/ListRendering';
import Stylesheet from './components/styles/Stylesheet';
import InlineStyling from './components/styles/InlineStyling';
import Modulestyles from './components/styles/ModuleStyles';
import Form from './components/Form';
import Mounting from './components/LifecycleMethods/Mounting';
import Update from './components/LifecycleMethods/Update';
import PureComponents from './components/PureComponent';
import Refs from './components/Refs/Refs';
import FRParentInput from './components/Refs/FRParentInput';
import PortalsDemo from './components/PortalsDemo';
import ClickCounter from './components/HigherOrderComponents/ClickCounter';
import HoverCounter from './components/HigherOrderComponents/HoverCounter';
import HoverCounter2 from './components/renderProps/HoverCounter2';
import ClickCounter2 from './components/renderProps/ClickCounter2';
import Counter from './components/renderProps/Counter';
import PostList from './components/axios/PostList';
import PostForm from './components/axios/PostForm';

function App() {
  return (
    <div className="App">
    {
      //<PostList />
     // <PostForm />
    }
    {
    // <Counter render = {(count, incrementCount) => (
    //   <ClickCounter2 count = {count} incrementCount = {incrementCount} />
    //   )}
    //   />

    //   <Counter render = {(count, incrementCount) => (
    //     <HoverCounter2 count = {count} incrementCount = {incrementCount} />
    //     )}
    //     />
      }

{      
  // <ClickCounter />,
      <HoverCounter />
}

    {
      //<PortalsDemo />
    }
    {
      // <FRParentInput />
    }  
    {
       // <Refs />
      }
      {
      // <PureComponents />
      }
      {
        // <Mounting />
        //<Update />
      }
      {
         <Form />
      }
      {
        // <Stylesheet />
        //<InlineStyling />
        //<Modulestyles />
      }
      { //*** Render lists and list of objects
       // <ListRendering />
      }
      { //*** conditional rendering
        //<IfElse />
        // <ElementVariables />
        // <TernaryConditional />
        // <ShorCiruit />
      }

      { //*** methods as props
          //<ParentComponent />
      }

      { //*** bind event hanlders using this bind
          //<EventBind></EventBind>
      }

      { //*** Event Handling */
          // <ClassHandler></ClassHandler>
          // <EventHanding></EventHanding>
      }

      {
        //**** Counter
         // <Counter></Counter>

        // <StateBased /><StateBased

        // <FunctionBased name="zeesham" heroname = "Batman" ><p>This is functional child </p></FunctionBased>
        // <FunctionBased name="ali" heroname = "superman" ><button>Function child2</button></FunctionBased>

        // <ClassBased name = "zeehsan" heroname = "Batman" ></ClassBased>
        // <ClassBased name="ali" heroname = "superman"></ClassBased> 
      }

    </div>
  );
}

export default App;
