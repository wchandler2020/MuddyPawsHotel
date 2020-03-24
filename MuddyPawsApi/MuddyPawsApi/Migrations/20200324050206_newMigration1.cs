using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class newMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                table: "muddyPawsPet");

            migrationBuilder.AlterColumn<string>(
                name: "ZipCode",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "muddyPawsPet",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProfilePicture",
                table: "muddyPawsPet",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "muddyPawsPet");

            migrationBuilder.DropColumn(
                name: "ProfilePicture",
                table: "muddyPawsPet");

            migrationBuilder.AlterColumn<string>(
                name: "ZipCode",
                table: "muddyPawsPet",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "muddyPawsPet",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Number",
                table: "muddyPawsPet",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
