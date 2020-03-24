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

        [Column(TypeName = "nvarchar(100)")]
        public string  Type { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Size { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string OwnersName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string StreetAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string City { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string State { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ZipCode { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Phone{ get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string SpecialNeeds { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckinDate { get; set; }

        public string ProfilePicture { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckoutDate { get; set; }
    }
}
