using FCT.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FCT.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> product { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context)
        {
        }
    }
}
