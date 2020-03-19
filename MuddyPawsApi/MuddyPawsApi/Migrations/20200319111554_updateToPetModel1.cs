using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class updateToPetModel1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PetType",
                table: "muddyPawsPet",
                newName: "PetTypePetType");

            migrationBuilder.RenameColumn(
                name: "PetOwnersAddress",
                table: "muddyPawsPet",
                newName: "PetOwnersZipCode");

            migrationBuilder.AlterColumn<string>(
                name: "PetOwnersNumber",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersCity",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersState",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PetOwnersStreetAddress",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PetOwnersCity",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersState",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "PetOwnersStreetAddress",
                table: "muddyPawsPet");

            migrationBuilder.RenameColumn(
                name: "PetTypePetType",
                table: "muddyPawsPet",
                newName: "PetType");

            migrationBuilder.RenameColumn(
                name: "PetOwnersZipCode",
                table: "muddyPawsPet",
                newName: "PetOwnersAddress");

            migrationBuilder.AlterColumn<string>(
                name: "PetOwnersNumber",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }
    }
}
