using Microsoft.AspNetCore.Mvc;
using ServicoResidencias.DTO;
using ServicoResidencias.Servicos;

namespace ServicoResidencia
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResidenciaController : Controller
    {
        private IServResidencia _servResidencia;

        public ResidenciaController(IServResidencia servResidencia)
        {
            _servResidencia = servResidencia;
        }

        [HttpPost]
        public IActionResult Inserir(InserirResidenciaDTO inserirResidenciaDto)
        {
            try
            {
                var residencia = new Residencia();

                residencia.Endereco = inserirResidenciaDto.Endereco;
                residencia.Numero = inserirResidenciaDto.Numero;
                residencia.Predio = inserirResidenciaDto.Predio;
                residencia.Andar = inserirResidenciaDto.Andar;
                residencia.MoradorAtualId = inserirResidenciaDto.MoradorAtualId;

                _servResidencia.Inserir(residencia);

                var retornoInsercao = new { CodigoResidencia = residencia.Id };

                return Ok(retornoInsercao);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/{id}")]
        [HttpPut]
        public IActionResult Editar(int id, EditarResidenciaDTO editarResidenciaDto)
        {
            try
            {
                var residencia = _servResidencia.BuscarResidencia(id);

                residencia.Endereco = editarResidenciaDto.Endereco;
                residencia.Numero = editarResidenciaDto.Numero;
                residencia.Predio = editarResidenciaDto.Predio;
                residencia.Andar = editarResidenciaDto.Andar;
                residencia.MoradorAtualId = editarResidenciaDto.MoradorAtualId;

                _servResidencia.Editar(residencia);

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
                _servResidencia.Excluir(id);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/{id}")]
        [HttpGet]
        public IActionResult BuscarResidencia(int id)
        {
            try
            {
                var residencia = _servResidencia.BuscarResidenciaView(id);

                return Ok(residencia);
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
                var listaResidencia = _servResidencia.BuscarTodos();

                return Ok(listaResidencia);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("/api/[Controller]/BuscarMorador/{id}")]
        [HttpGet]
        public IActionResult BuscarMorador(int id)
        {
            try
            {
                var morador = _servResidencia.BuscarMorador(id);

                return Ok(morador);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
