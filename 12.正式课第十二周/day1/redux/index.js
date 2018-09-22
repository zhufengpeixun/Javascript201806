import React from 'react';
import ReactDOM from 'react-dom';

import Counter from  "./component/Counter"
import Compute from  "./component/Compute"
import Todo from "./component/Todo"
ReactDOM.render(<div>
    <Counter/>
    <Compute/>
    {/*<Todo/>*/}
</div>, document.getElementById('root'));

