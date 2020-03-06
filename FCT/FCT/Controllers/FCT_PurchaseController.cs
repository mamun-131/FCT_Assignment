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
    public class FCT_PurchaseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FCT_PurchaseController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/FCT_Purchase
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FCT_Purchase>>> GetFCT_Purchase()
        {
            return await _context.FCT_Purchase.ToListAsync();
        }

        // GET: api/FCT_Purchase/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FCT_Purchase>> GetFCT_Purchase(int id)
        {
            var fCT_Purchase = await _context.FCT_Purchase.FindAsync(id);

            if (fCT_Purchase == null)
            {
                return NotFound();
            }

            return fCT_Purchase;
        }

        // PUT: api/FCT_Purchase/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFCT_Purchase(int id, FCT_Purchase fCT_Purchase)
        {
            if (id != fCT_Purchase.id)
            {
                return BadRequest();
            }

            _context.Entry(fCT_Purchase).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FCT_PurchaseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FCT_Purchase
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<FCT_Purchase>> PostFCT_Purchase(FCT_Purchase fCT_Purchase)
        {
            _context.FCT_Purchase.Add(fCT_Purchase);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFCT_Purchase", new { id = fCT_Purchase.id }, fCT_Purchase);
        }

        // DELETE: api/FCT_Purchase/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FCT_Purchase>> DeleteFCT_Purchase(int id)
        {
            var fCT_Purchase = await _context.FCT_Purchase.FindAsync(id);
            if (fCT_Purchase == null)
            {
                return NotFound();
            }

            _context.FCT_Purchase.Remove(fCT_Purchase);
            await _context.SaveChangesAsync();

            return fCT_Purchase;
        }

        private bool FCT_PurchaseExists(int id)
        {
            return _context.FCT_Purchase.Any(e => e.id == id);
        }
    }
}
