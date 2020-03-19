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
        public string  PetTypePetType { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetSize { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetOwnersName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetOwnersStreetAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetOwnersCity { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PetOwnersState { get; set; }
        
        public int PetOwnersZipCode { get; set; }

        public int  PetOwnersNumber{ get; set; }

        public string PetOwnersEmail { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string SpecialNeeds { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckinDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime CheckoutDate { get; set; }
    }
}
