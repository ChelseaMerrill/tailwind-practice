import logo from '../logo.svg';

function Operations() {
    return (
      <div class="app bg-violet-200">
    
       <h1 class="text-3xl font-bold text-center text-indigo-700">Operations</h1>

       
       <div class="flex items-center">
        {[
            ['Name', 'desc on what this does'],

        ].map(([name, desc]) => (
            <div class="p-6 max-w-sm mx-auto bg-violet-50 rounded-xl shadow-lg flex items-center space-x-4 h-52 w-96 m-6">
            <div class="shrink-0">
              <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div>
              <div class="text-xl font-medium text-purple-900">{name}</div>
              <p class="text-purple-700">{desc}</p>
            </div>
          </div>
        ))}
       </div>

       <a href='/' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Go Back</a>
   
      </div>
    );
  }
  
  export default Operations;
  