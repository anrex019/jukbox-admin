import Header from './components/Header/Header';
import SideBar from './components/Sidebar/sideBar';

export default function Page() {
  return (
    <main>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex' }}>
          <SideBar />

        </div>
      </div>
    </main>
  );
}