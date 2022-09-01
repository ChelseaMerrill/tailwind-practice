import logo from '../logo.svg';

function Networking() {
    return (
      <div class="app bg-violet-200">
    
       <h1 class="text-3xl font-bold text-center text-indigo-700 mb-10 pt-10">Networking Services</h1>

      
       <div class="grid grid-cols-4 gap-8 max-w-max m-auto">
        {[
            ['Direct Connect', 'run VPN directly through on-prem without using the internet. It is fast and more secure. '],
            ['Set Up Direct Connect', 'create virtual interface, create customer gateway, create VPG, attach VPG to VPC, create new VPN, select the VPN and CG, once VPM is avalible, setup VPN on CG or firewall '],

        ].map(([name, desc]) => (
            <div class="p-6 bg-violet-50 rounded-xl shadow-lg flex items-center space-x-4 h-52 w-96 m-auto">
            <div class="shrink-0">
              <img class="h-12 w-12" src={logo} alt="Logo" />
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
  
  export default Networking;
  