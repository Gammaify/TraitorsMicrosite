using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace TraitorsMicroSite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages().AddRazorRuntimeCompilation();

            //Fix for UKfast errors
            services.AddDataProtection()
                        .PersistKeysToFileSystem(new DirectoryInfo(@"C:\IIS\Shared Config\ASP-Core-PersistKeysToFileSystem\"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add("X-Xss-Protection", "1");
                context.Response.Headers.Add("Referrer-Policy", "strict-origin-when-cross-origin");
                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                context.Response.Headers.Add("Access-Control-Allow-Headers", "charset=UTF-8");
                context.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
                RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
                byte[] nonceBytes = new byte[32];
                rng.GetBytes(nonceBytes);
                string nonce = Convert.ToBase64String(nonceBytes);


                context.Items.Add("ScriptNonce", nonce);
                context.Response.Headers.Add("Content-Security-Policy", string.Format(
                    "default-src 'self'; " +
                    "script-src 'self' 'nonce-{0}' https://sdks.shopifycdn.com/ https://www.google-analytics.com https://www.googletagmanager.com https://www.youtube.com; " +
                    "style-src 'self' 'unsafe-inline' https://use.typekit.net https://p.typekit.net; " +
                    "font-src 'self' data:https://use.typekit.net;" +
                    "connect-src 'self' wss: https:;" +
                    "frame-src 'self' https://www.googletagmanager.com https://www.youtube.com;" +
                    "img-src 'self' data: https://i.ytimg.com/ https://media.gingerfox.co.uk https://www.google-analytics.com; ", nonce));

                await next();
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });
        }
    }
}
