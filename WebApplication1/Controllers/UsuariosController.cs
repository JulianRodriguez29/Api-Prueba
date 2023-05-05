using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {

        private readonly MyDbContext _context;

        public UsuariosController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
            public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
            {
                return await _context.Usuarios.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Usuario>> GetUsuario(int id)
            {
                var usuario = await _context.Usuarios.FindAsync(id);

                if (usuario == null)
                {
                    return NotFound();
                }

                return usuario;
            }

            [HttpPost]
            public async Task<ActionResult<Usuario>> CreateUsuario(Usuario usuario)
            {
                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetUsuario), new { id = usuario.Id }, usuario);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateUsuario(int id, Usuario usuario)
            {
                if (id != usuario.Id)
                {
                    return BadRequest();
                }
                //if (usuario == null || usuario.Id == null)
                //{
                //    return BadRequest();
                //}

            _context.Entry(usuario).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteUsuario(int id)
            {
                var usuario = await _context.Usuarios.FindAsync(id);

                if (usuario == null)
                {
                    return NotFound();
                }

                _context.Usuarios.Remove(usuario);
                await _context.SaveChangesAsync();

                return NoContent();
            }
        }

        
    }
