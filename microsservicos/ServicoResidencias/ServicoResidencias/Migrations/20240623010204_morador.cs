using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServicoResidencias.Migrations
{
    /// <inheritdoc />
    public partial class morador : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MoradorAtualId",
                table: "Residencias",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MoradorAtualId",
                table: "Residencias");
        }
    }
}
