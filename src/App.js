import MainPage from './MainPage';
import StaffPage from './StaffPage';
import StudentsPage from './StudentsPage';
import Api from './api';
import CharactersPage from './CharactersPage';

function App() {
  return (
    <>
      <div>
        <MainPage />
        <Api />
      </div>
      <StudentsPage />
      <StaffPage />
      <CharactersPage />
    </>
  );
}

export default App;
