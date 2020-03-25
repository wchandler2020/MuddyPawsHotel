using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MuddyPawsApi.Models;

namespace MuddyPawsApi.Models
{
    public class MuddyPawsDBContext : DbContext
    {
        public MuddyPawsDBContext(DbContextOptions<MuddyPawsDBContext> options):base(options)
        {

        }
        public DbSet<MuddyPawsPets> muddyPawsPet { get; set; }
        public DbSet<MuddyPawsEmployee> muddyPawsEmployee { get; set; }
        public DbSet<MuddyPawsApi.Models.Hotel> Hotel { get; set; }
        public DbSet<MuddyPawsApi.Models.Reviews> Reviews { get; set; }
    }
}
