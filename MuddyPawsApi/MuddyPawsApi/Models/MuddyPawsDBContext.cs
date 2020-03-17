using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MuddyPawsApi.Models
{
    public class MuddyPawsDBContext : DbContext
    {
        public MuddyPawsDBContext(DbContextOptions<MuddyPawsDBContext> options):base(options)
        {

        }
        public DbSet<MuddyPawsPets> muddyPawsPet { get; set; }
    }
}
