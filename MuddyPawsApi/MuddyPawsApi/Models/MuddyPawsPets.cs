using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MuddyPawsApi.Models
{
    public class MuddyPawsPets
    {
        [Key]
        public int PetID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetName { get; set; }
    }
}
