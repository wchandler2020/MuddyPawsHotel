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
    public class MuddyPawsEmployeesController : ControllerBase
    {
        private readonly MuddyPawsDBContext _context;

        public MuddyPawsEmployeesController(MuddyPawsDBContext context)
        {
            _context = context;
        }

        // GET: api/MuddyPawsEmployees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MuddyPawsEmployee>>> GetmuddyPawsEmployee()
        {
            return await _context.muddyPawsEmployee.ToListAsync();
        }

        // GET: api/MuddyPawsEmployees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MuddyPawsEmployee>> GetMuddyPawsEmployee(int id)
        {
            var muddyPawsEmployee = await _context.muddyPawsEmployee.FindAsync(id);

            if (muddyPawsEmployee == null)
            {
                return NotFound();
            }

            return muddyPawsEmployee;
        }

        // PUT: api/MuddyPawsEmployees/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMuddyPawsEmployee(int id, MuddyPawsEmployee muddyPawsEmployee)
        {
            if (id != muddyPawsEmployee.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(muddyPawsEmployee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MuddyPawsEmployeeExists(id))
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

        // POST: api/MuddyPawsEmployees
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<MuddyPawsEmployee>> PostMuddyPawsEmployee(MuddyPawsEmployee muddyPawsEmployee)
        {
            _context.muddyPawsEmployee.Add(muddyPawsEmployee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMuddyPawsEmployee", new { id = muddyPawsEmployee.EmployeeId }, muddyPawsEmployee);
        }

        // DELETE: api/MuddyPawsEmployees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MuddyPawsEmployee>> DeleteMuddyPawsEmployee(int id)
        {
            var muddyPawsEmployee = await _context.muddyPawsEmployee.FindAsync(id);
            if (muddyPawsEmployee == null)
            {
                return NotFound();
            }

            _context.muddyPawsEmployee.Remove(muddyPawsEmployee);
            await _context.SaveChangesAsync();

            return muddyPawsEmployee;
        }

        private bool MuddyPawsEmployeeExists(int id)
        {
            return _context.muddyPawsEmployee.Any(e => e.EmployeeId == id);
        }
    }
}
