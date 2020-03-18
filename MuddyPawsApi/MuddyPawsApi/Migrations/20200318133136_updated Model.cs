using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class updatedModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PetName",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PetName",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }
    }
}
