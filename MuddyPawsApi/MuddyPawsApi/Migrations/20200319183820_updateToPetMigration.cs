using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MuddyPawsApi.Migrations
{
    public partial class updateToPetMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "muddyPawsPet",
                columns: table => new
                {
                    PetID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PetName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetTypePetType = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetSize = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetOwnersName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetOwnersStreetAddress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetOwnersCity = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetOwnersState = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PetOwnersZipCode = table.Column<int>(nullable: false),
                    PetOwnersNumber = table.Column<int>(nullable: false),
                    PetOwnersEmail = table.Column<string>(nullable: true),
                    SpecialNeeds = table.Column<string>(type: "nvarchar(1000)", nullable: true),
                    CheckinDate = table.Column<DateTime>(nullable: false),
                    CheckoutDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_muddyPawsPet", x => x.PetID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "muddyPawsPet");
        }
    }
}
