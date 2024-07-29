import ParentStateComponent from "./arentStateComponent";
import ArrayStateVariable from "./ArrayStateVariable";
import DateStateVariable from "./ateStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }    
    return (
        <div id="lab4" className="container-fluid">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
        </div>
    );
}