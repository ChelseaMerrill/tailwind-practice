import logo from '../logo.svg';

function Storage() {
    return (
      <div class="app bg-violet-200">
       <h1 class="text-3xl font-bold text-center text-indigo-700 mb-10 pt-10">Storage Services</h1>

       <div class="grid grid-cols-4 gap-8 max-w-max m-auto">
        {[
            ['S3', 'durable object store. files stored in buckets with globally unique names.  There is virturally unlimited storage. Uses both path and virtual-host styled URLs'],
            ['S3 Standard', '99.99% Avalibility and 11 9s of duribility. >= 3 AZs.  Standard is the main, basic level of storage.'],
            ['S3 Infrequent Access', '99.9% Avalibility and 11 9s of duribility. >= 3 AZs.  Use for long-term stroge, backups, and critical datea. Rapid Access and resilent against events that impact an entire AZ. Less avalible but still just as durable and is cheaper'],
            ['S3 One Zone', '99.5% Avalibility and 11 9s of duribility. 1 AZs.  Use for non-critical data'],
            ['S3 Glacier', '99.99% Avalibility and 11 9s of duribility. 1 AZs.  infrequently accessed date. A few hours for retrieval. Up to 12 hours for Glacier Deep Archive'],
            ['S3 Intellegent Tiering', '99.9% Avalibility and 11 9s of duribility. 1 AZs.  Best to use when you have unkown patterns'],
            ['S3 Object Lock', 'WORM: write once, read-many. Prevents Objects from being deleted or motified for a fixed amount of time'],
            

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
  
  export default Storage;
  