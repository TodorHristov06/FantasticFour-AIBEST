using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HWPlatform.PL.Migrations
{
    /// <inheritdoc />
    public partial class UpdateHWtables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HomeworkSubmissions_HomeworkAssignments_AssignmentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropIndex(
                name: "IX_HomeworkSubmissions_AssignmentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropColumn(
                name: "AssignmentId",
                table: "HomeworkSubmissions");

            migrationBuilder.AddColumn<int>(
                name: "AssignmentStudentId",
                table: "HomeworkSubmissions",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AssignmentStudents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssignmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssignmentStudents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AssignmentStudents_HomeworkAssignments_AssignmentId",
                        column: x => x.AssignmentId,
                        principalTable: "HomeworkAssignments",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_HomeworkSubmissions_AssignmentStudentId",
                table: "HomeworkSubmissions",
                column: "AssignmentStudentId",
                unique: true,
                filter: "[AssignmentStudentId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentStudents_AssignmentId",
                table: "AssignmentStudents",
                column: "AssignmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeworkSubmissions_AssignmentStudents_AssignmentStudentId",
                table: "HomeworkSubmissions",
                column: "AssignmentStudentId",
                principalTable: "AssignmentStudents",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HomeworkSubmissions_AssignmentStudents_AssignmentStudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropTable(
                name: "AssignmentStudents");

            migrationBuilder.DropIndex(
                name: "IX_HomeworkSubmissions_AssignmentStudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropColumn(
                name: "AssignmentStudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.AddColumn<int>(
                name: "AssignmentId",
                table: "HomeworkSubmissions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_HomeworkSubmissions_AssignmentId",
                table: "HomeworkSubmissions",
                column: "AssignmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeworkSubmissions_HomeworkAssignments_AssignmentId",
                table: "HomeworkSubmissions",
                column: "AssignmentId",
                principalTable: "HomeworkAssignments",
                principalColumn: "Id");
        }
    }
}
