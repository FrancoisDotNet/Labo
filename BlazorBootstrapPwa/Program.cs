using Microsoft.AspNetCore.Blazor.Hosting;
using Microsoft.AspNetCore.Components.Builder;

namespace BlazorBootstrapPwa
{
    class Program
    {
        static void Main() => BlazorWebAssemblyHost.CreateDefaultBuilder().UseBlazorStartup<Startup>().Build().Run();
    
        class Startup
        {
            public void Configure(IComponentsApplicationBuilder b) => b.AddComponent<Body>("body");
        }
    }
}