using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FCT.Models
{
    public class FCT_Purchase
    {   [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(450)")]
        public string userId { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int productId { get; set; }
    }
}
