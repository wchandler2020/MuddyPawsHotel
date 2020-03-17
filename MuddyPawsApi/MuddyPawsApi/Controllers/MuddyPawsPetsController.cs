using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MuddyPawsApi.Models;

namespace MuddyPawsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MuddyPawsPetsController : ControllerBase
    {
        private readonly MuddyPawsDBContext _context;

        public MuddyPawsPetsController(MuddyPawsDBContext context)
        {
            _context = context;
        }

        // GET: api/MuddyPawsPets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MuddyPawsPets>>> GetmuddyPawsPet()
        {
            return await _context.muddyPawsPet.ToListAsync();
        }

        // GET: api/MuddyPawsPets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MuddyPawsPets>> GetMuddyPawsPets(int id)
        {
            var muddyPawsPets = await _context.muddyPawsPet.FindAsync(id);

            if (muddyPawsPets == null)
            {
                return NotFound();
            }

            return muddyPawsPets;
        }

        // PUT: api/MuddyPawsPets/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMuddyPawsPets(int id, MuddyPawsPets muddyPawsPets)
        {
            muddyPawsPets.PetID = id;
            

            _context.Entry(muddyPawsPets).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MuddyPawsPetsExists(id))
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

        // POST: api/MuddyPawsPets
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<MuddyPawsPets>> PostMuddyPawsPets(MuddyPawsPets muddyPawsPets)
        {
            _context.muddyPawsPet.Add(muddyPawsPets);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMuddyPawsPets", new { id = muddyPawsPets.PetID }, muddyPawsPets);
        }

        // DELETE: api/MuddyPawsPets/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MuddyPawsPets>> DeleteMuddyPawsPets(int id)
        {
            var muddyPawsPets = await _context.muddyPawsPet.FindAsync(id);
            if (muddyPawsPets == null)
            {
                return NotFound();
            }

            _context.muddyPawsPet.Remove(muddyPawsPets);
            await _context.SaveChangesAsync();

            return muddyPawsPets;
        }

        private bool MuddyPawsPetsExists(int id)
        {
            return _context.muddyPawsPet.Any(e => e.PetID == id);
        }
    }
}
