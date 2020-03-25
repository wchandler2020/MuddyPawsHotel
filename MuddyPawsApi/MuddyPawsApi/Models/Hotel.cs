using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MuddyPawsApi.Models
{
    public class Hotel
    {
        [Key]
        public int Hotelid { get; set; }
        [Column(TypeName = "nvarchar(4000)")]
        public string  Reviews { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string DeluxePrice { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BoardingPrice { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string KittyPricing { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string RemainingAvailable { get; set; }


    }
       
}
