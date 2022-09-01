import logo from '../logo.svg';
function Compute() {
    return (
      <div class="app bg-violet-200">
    
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-12 w-12" src={logo} alt="ChitChat Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-purple-900">ChitChat</div>
            <p class="text-purple-700">You have a new message!</p>
          </div>
        </div>
  
       
      </div>
    );
  }
  
  export default Compute;
  