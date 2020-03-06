using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FCT.Context;
using FCT.Models;

namespace FCT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FCT_PurchaseDetailController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FCT_PurchaseDetailController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/FCT_PurchaseDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FCT_PurchaseDetail>>> GetFCT_PurchaseDetail()
        {
            return await _context.FCT_PurchaseDetail.FromSqlRaw($"exec getAllPurchase").ToListAsync();
        }

      
    }
}
