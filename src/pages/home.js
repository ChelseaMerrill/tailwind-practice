import logo from '../logo.svg';
// import Compute from './pages/compute';

function Home() {
  return (
    <div class="app bg-violet-200">

      <h1 class="text-3xl font-bold text-center text-indigo-700">Practice For AWS Solutions Architect Exam</h1>

      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-purple-900">ChitChat</div>
          <p class="text-purple-700">You have a new message!</p>
        </div>
      </div>

      <nav className="flex sm:justify-center space-x-4">
        {[
          ['Compute', '/compute'],
          ['Storage', '/storage'],
          ['Database', '/database'],
          ['Networking', '/networking'],
          ['Security', '/security'],
          ['Operations', '/operations'],
          ['AWS Global Infrastructure', '/infrastructure'],
          ['Application Services', '/services'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>

    </div>
  );
}

export default Home;
