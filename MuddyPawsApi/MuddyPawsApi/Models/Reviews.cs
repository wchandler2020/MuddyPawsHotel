using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MuddyPawsApi.Models
{
    public class Reviews
    {
        [Key]
        public int ReviewId { get; set; }
        [Column(TypeName = "nvarchar(4000)")]
        public string ReviewBody { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ReviewerName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string PostedDate { get; set; }
    }
}
