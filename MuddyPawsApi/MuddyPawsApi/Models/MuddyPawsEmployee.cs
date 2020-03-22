using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MuddyPawsApi.Models
{
    public class MuddyPawsEmployee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeEmail { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeePhone { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Username { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeRole { get; set; }


    }
}
