import logo from '../logo.svg';

function Home() {
  return (
    <div class="app bg-violet-200">

      <h1 class="text-3xl font-bold text-center text-indigo-700 mb-10 pt-10">Practice For AWS Solutions Architect Exam</h1>

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
