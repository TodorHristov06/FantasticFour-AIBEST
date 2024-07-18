using Microsoft.EntityFrameworkCore;
using HWPlatform.DAL.Data;
using HWPlatform.DAL.Models;

namespace HWPlatform.PL
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = builder.Configuration;

            // Entity Framework
            builder.Services.AddDbContext<DBContext>(options =>
               options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")!, o =>
               {
                   o.MigrationsAssembly(typeof(Program).Assembly.FullName);
                   o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
               }));

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
