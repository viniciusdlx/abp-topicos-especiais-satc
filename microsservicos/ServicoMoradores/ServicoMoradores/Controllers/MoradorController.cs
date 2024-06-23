using Microsoft.AspNetCore.Mvc;
using ServicoMoradores.DTO;
using ServicoMoradores.Servicos;

namespace ServicoMoradores
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoradorController : Controller
    {
        private IServMorador _servMorador;

        public MoradorController(IServMorador servMorador)
        {
            _servMorador = servMorador;
        }

        [HttpPost]
        public IActionResult Inserir(InserirMoradorDTO inserirMoradorDto)
        {
            try
            {
                var morador = new Morador();

                morador.PrimeiroNome = inserirMoradorDto.PrimeiroNome;
                morador.Sobrenome = inserirMoradorDto.Sobrenome;
                morador.Email = inserirMoradorDto.Email;
                morador.Telefone = inserirMoradorDto.Telefone;
                morador.Inadimplente = false;

                _servMorador.Inserir(morador);

                var retornoInsercao = new { CodigoMorador = morador.Id };

                return Ok(retornoInsercao);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/{id}")]
        [HttpPut]
        public IActionResult Editar(int id, EditarMoradorDTO editarMoradorDto)
        {
            try
            {
                var morador = _servMorador.BuscarMorador(id);

                morador.PrimeiroNome = editarMoradorDto.PrimeiroNome;
                morador.Sobrenome = editarMoradorDto.Sobrenome;
                morador.Email = editarMoradorDto.Email;
                morador.Telefone = editarMoradorDto.Telefone;
                morador.Inadimplente = editarMoradorDto.Inadimplente;

                _servMorador.Editar(morador);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/{id}")]
        [HttpDelete]
        public IActionResult Excluir(int id)
        {
            try
            {
                _servMorador.Excluir(id);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/{id}")]
        [HttpGet]
        public IActionResult BuscarMorador(int id)
        {
            try
            {
                var morador = _servMorador.BuscarMorador(id);

                return Ok(morador);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]")]
        [HttpGet]
        public IActionResult BuscarTodos()
        {
            try
            {
                var listaMorador = _servMorador.BuscarTodos();

                return Ok(listaMorador);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
