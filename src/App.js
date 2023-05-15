import './App.css';

import { Contact } from './challenge1/contact.class';
import ContactDetail from './challenge1/contact_detail';

import Clock from './challenge2/clockClass';
import ClockFunction from './challenge2/clockFunction';

import ContactList from './challenge3/contact_list';

import Square from './challenge4/square';

const defaultContact = new Contact(
  "Wade",
  "Wilson",
  "deadpool@email.com",
  true
)

function App() {
  return (
    <div className="App">
      {/* CHALLENGE 1 */}
      <h1>Challenge 1 - (1, 2, 3)</h1>
      <ContactDetail
        contact={defaultContact}
        remove={(contact) => console.log(`Remove: ${contact}`)}
        changeState={(contact) => console.log(`Change state: ${contact}`)}
      ></ContactDetail>

      {/* CHALLENGE 2 */}
      <h1>Challenge 2 - (4, 5, 6)</h1>
      <Clock></Clock>
      <ClockFunction></ClockFunction>

      {/* CHALLENGE 3 */}
      <h1>Challenge 3 - (7, 8, 9)</h1>
      <ContactList></ContactList>

      {/* CHALLENGE 4 */}
      <h1>Challenge 4 - (10, 11, 12)</h1>
      <Square></Square>
    </div>
  );
}

export default App;
