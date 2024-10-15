import './App.css';
import Title from '../Title';
import UserCards from '../UserCards';
import Footer from '../Footer';

const App = () => {
  const title = "Welcome to My App";
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <Title title={title} />
      <UserCards users={users} />
      <Footer footer={footerText} />
    </div>
  );
};

export default App;
