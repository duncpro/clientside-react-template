import * as ReactDOM from 'react-dom/client';
import Root from './Root';

const domroot = document.getElementById("root") as HTMLDivElement;
const reactroot = ReactDOM.createRoot(domroot);
reactroot.render(<Root/>);
